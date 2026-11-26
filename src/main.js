'use strict';

var stats = require( './stats.js' );

var TRIALS = 5000;
var EXAMPLE = {
	'before': '62, 70, 58, 66, 71, 64, 59, 68, 63, 67',
	'after': '71, 78, 69, 74, 80, 72, 70, 77, 75, 73'
};
var NO_EFFECT = {
	'before': '68, 74, 61, 70, 77, 65, 72, 69',
	'after': '70, 66, 75, 63, 71, 73, 68, 67'
};

var $ = function query( id ) {
	return document.getElementById( id );
};

function css( name ) {
	return getComputedStyle( document.documentElement ).getPropertyValue( name ).trim();
}

function fmt( x, digits ) {
	return ( x === void 0 || x === null || Number.isNaN( x ) ) ? '–' : x.toFixed( ( digits === void 0 ) ? 1 : digits );
}

function fmtP( p ) {
	if ( p < 0.001 ) {
		return 'p < 0.001';
	}
	return 'p = ' + p.toFixed( 3 );
}

/**
* Picks a histogram bin width that lines up with the values the data can actually take.
*
* Averages of whole-number scores only land on a fixed grid of values, so equal-width bins that
* ignore that grid alternate between catching one and two grid points (a "comb" pattern).
*/
function binWidth( values, span, target ) {
	var sorted = Array.from( values ).sort( function cmp( a, b ) { return a - b; } );
	var step = Infinity;
	var gap;
	var i;
	for ( i = 1; i < sorted.length; i++ ) {
		gap = sorted[ i ] - sorted[ i-1 ];
		if ( gap > 1e-9 && gap < step ) {
			step = gap;
		}
	}
	if ( !Number.isFinite( step ) || span / step > 4000 ) {
		return span / target;
	}
	return step * Math.max( 1, Math.round( ( span / step ) / target ) );
}

function percentText( p ) {
	var pct = p * 100;
	if ( pct < 0.1 ) {
		return 'less than 0.1%';
	}
	return ( ( pct < 10 ) ? pct.toFixed( 1 ) : pct.toFixed( 0 ) ) + '%';
}

/**
* Prepares a canvas for crisp drawing on high-DPI screens and returns its 2D context and CSS size.
*/
function setup( canvas ) {
	var ratio = window.devicePixelRatio || 1;
	var w = canvas.clientWidth;
	var h = Math.max( 200, Math.round( w * 0.42 ) );
	var ctx;
	canvas.width = Math.round( w * ratio );
	canvas.height = Math.round( h * ratio );
	canvas.style.height = h + 'px';
	ctx = canvas.getContext( '2d' );
	ctx.setTransform( ratio, 0, 0, ratio, 0, 0 );
	ctx.clearRect( 0, 0, w, h );
	ctx.font = '12px ' + css( '--sans' );
	return { 'ctx': ctx, 'w': w, 'h': h };
}

function drawAxis( ctx, left, right, baseline, ticks, toX, label ) {
	var i;
	ctx.strokeStyle = css( '--line' );
	ctx.fillStyle = css( '--muted' );
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo( left, baseline + 0.5 );
	ctx.lineTo( right, baseline + 0.5 );
	ctx.stroke();
	ctx.textAlign = 'center';
	for ( i = 0; i < ticks.length; i++ ) {
		ctx.fillText( ticks[ i ].label, toX( ticks[ i ].value ), baseline + 16 );
	}
	ctx.fillText( label, ( left + right ) / 2, baseline + 34 );
}

function niceTicks( min, max, count ) {
	var span = max - min;
	var step = Math.pow( 10, Math.floor( Math.log10( span / count ) ) );
	var err = ( span / count ) / step;
	var out = [];
	var v;
	if ( err >= 7.5 ) {
		step *= 10;
	} else if ( err >= 3.5 ) {
		step *= 5;
	} else if ( err >= 1.5 ) {
		step *= 2;
	}
	for ( v = Math.ceil( min / step ) * step; v <= max + 1e-9; v += step ) {
		out.push({ 'value': v, 'label': ( Math.abs( v ) < 1e-9 ) ? '0' : String( Math.round( v * 100 ) / 100 ) });
	}
	return out;
}

function drawHistogram( canvas, perm ) {
	var s = setup( canvas );
	var ctx = s.ctx;
	var pad = { 'l': 12, 'r': 12, 't': 14, 'b': 44 };
	var diffs = perm.diffs;
	var lo = Math.min( Math.min.apply( null, diffs ), -Math.abs( perm.observed ) );
	var hi = Math.max( Math.max.apply( null, diffs ), Math.abs( perm.observed ) );
	var counts;
	var width;
	var bins;
	var maxCount;
	var step;
	var toX;
	var bw;
	var x;
	var b;
	var i;

	width = Math.max( Math.abs( lo ), Math.abs( hi ) ) * 1.08 || 1;
	step = binWidth( diffs, 2 * width, ( s.w < 500 ) ? 24 : 40 );

	// Center a bin on zero so bins sit on the grid of achievable differences:
	bins = 2 * Math.ceil( ( width / step ) - 0.5 ) + 1;
	lo = -step * bins / 2;
	hi = -lo;
	counts = new Array( bins ).fill( 0 );
	for ( i = 0; i < diffs.length; i++ ) {
		b = Math.min( bins - 1, Math.max( 0, Math.floor( ( diffs[ i ] - lo ) / step ) ) );
		counts[ b ] += 1;
	}
	maxCount = Math.max.apply( null, counts );
	toX = function toX( v ) {
		return pad.l + ( ( v - lo ) / ( hi - lo ) ) * ( s.w - pad.l - pad.r );
	};
	bw = ( s.w - pad.l - pad.r ) / bins;

	for ( i = 0; i < bins; i++ ) {
		var center = lo + ( ( i + 0.5 ) * ( hi - lo ) / bins );
		var bh = ( counts[ i ] / maxCount ) * ( s.h - pad.t - pad.b );
		ctx.fillStyle = ( Math.abs( center ) >= Math.abs( perm.observed ) ) ? css( '--warn' ) : css( '--bars' );
		ctx.fillRect( pad.l + ( i * bw ) + 1, s.h - pad.b - bh, Math.max( 1, bw - 2 ), bh );
	}
	drawAxis( ctx, pad.l, s.w - pad.r, s.h - pad.b, niceTicks( lo, hi, ( s.w < 500 ) ? 4 : 6 ), toX, ( s.w < 500 ) ? 'after − before, by chance' : 'difference in average score (after − before), by chance alone' );

	x = toX( perm.observed );
	ctx.strokeStyle = css( '--accent' );
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo( x, pad.t );
	ctx.lineTo( x, s.h - pad.b );
	ctx.stroke();
	ctx.fillStyle = css( '--accent' );
	ctx.textAlign = ( x > s.w * 0.75 ) ? 'right' : 'left';
	ctx.fillText( 'you: ' + ( ( perm.observed > 0 ) ? '+' : '' ) + fmt( perm.observed, 1 ), x + ( ( x > s.w * 0.75 ) ? -6 : 6 ), pad.t + 10 );
}

function drawT( canvas, curve, statistic ) {
	var s = setup( canvas );
	var ctx = s.ctx;
	var pad = { 'l': 12, 'r': 12, 't': 14, 'b': 44 };
	var lim = Math.max( curve.limit, Math.abs( statistic ) * 1.1 );
	var ymax = Math.max.apply( null, curve.y );
	var toX = function toX( v ) {
		return pad.l + ( ( v + lim ) / ( 2 * lim ) ) * ( s.w - pad.l - pad.r );
	};
	var toY = function toY( v ) {
		return s.h - pad.b - ( v / ymax ) * ( s.h - pad.t - pad.b );
	};
	var shade = function shade( from, to ) {
		var i;
		ctx.beginPath();
		ctx.moveTo( toX( from ), toY( 0 ) );
		for ( i = 0; i < curve.x.length; i++ ) {
			if ( curve.x[ i ] >= from && curve.x[ i ] <= to ) {
				ctx.lineTo( toX( curve.x[ i ] ), toY( curve.y[ i ] ) );
			}
		}
		ctx.lineTo( toX( to ), toY( 0 ) );
		ctx.closePath();
		ctx.fill();
	};
	var x;
	var i;

	ctx.fillStyle = css( '--warn-soft' );
	shade( -lim, -curve.critical );
	shade( curve.critical, lim );

	ctx.strokeStyle = css( '--ink' );
	ctx.lineWidth = 1.5;
	ctx.beginPath();
	for ( i = 0; i < curve.x.length; i++ ) {
		if ( i === 0 ) {
			ctx.moveTo( toX( curve.x[ i ] ), toY( curve.y[ i ] ) );
		} else {
			ctx.lineTo( toX( curve.x[ i ] ), toY( curve.y[ i ] ) );
		}
	}
	ctx.stroke();
	drawAxis( ctx, pad.l, s.w - pad.r, s.h - pad.b, niceTicks( -lim, lim, ( s.w < 500 ) ? 5 : 8 ), toX, 't statistic' );

	x = toX( statistic );
	ctx.strokeStyle = css( '--accent' );
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo( x, pad.t );
	ctx.lineTo( x, s.h - pad.b );
	ctx.stroke();
	ctx.fillStyle = css( '--accent' );
	ctx.textAlign = ( x > s.w * 0.75 ) ? 'right' : 'left';
	ctx.fillText( 'your t = ' + fmt( statistic, 2 ), x + ( ( x > s.w * 0.75 ) ? -6 : 6 ), pad.t + 10 );
}

function renderSummary( before, after ) {
	var rows = [
		[ 'Quizzes', 'count', 0 ],
		[ 'Average', 'mean', 1 ],
		[ 'Spread (std. dev.)', 'stdev', 1 ],
		[ 'Lowest', 'min', 0 ],
		[ 'Highest', 'max', 0 ]
	];
	$( 'summary' ).innerHTML = rows.map( function row( r ) {
		return '<tr><td>' + r[ 0 ] + '</td><td>' + fmt( before[ r[ 1 ] ], r[ 2 ] ) + '</td><td>' + fmt( after[ r[ 1 ] ], r[ 2 ] ) + '</td></tr>';
	}).join( '' );
}

function renderVerdict( test, perm ) {
	var el = $( 'verdict' );
	var diff = test.difference;
	var direction = ( diff >= 0 ) ? 'higher' : 'lower';
	var luck = percentText( perm.pValue );
	var ci = fmt( test.ci[ 0 ], 1 ) + ' and ' + fmt( test.ci[ 1 ], 1 );
	var headline;

	if ( test.rejected && diff > 0 ) {
		headline = 'Scores went up by ' + fmt( diff, 1 ) + ' points on average, and luck alone rarely does that.';
	} else if ( test.rejected ) {
		headline = 'Scores went down by ' + fmt( -diff, 1 ) + ' points on average, and that is unlikely to be luck.';
	} else {
		headline = 'Scores are ' + fmt( Math.abs( diff ), 1 ) + ' points ' + direction + ', but this could easily be luck.';
	}
	el.className = 'verdict' + ( test.rejected ? '' : ' unclear' );
	el.innerHTML = headline + '<small>Shuffling the labels produced a gap this large ' + luck + ' of the time. The t-test gives ' + fmtP( test.pValue ) + ', and the true change is plausibly between ' + ci + ' points (' + Math.round( ( 1 - test.alpha ) * 100 ) + '% confidence interval).</small>';
}

function update() {
	var before = stats.parseScores( $( 'before' ).value );
	var after = stats.parseScores( $( 'after' ).value );
	var alpha = Number( $( 'alpha' ).value );
	var test;
	var perm;

	$( 'error' ).hidden = true;
	if ( before.length < 2 || after.length < 2 ) {
		$( 'results' ).hidden = true;
		if ( $( 'before' ).value.trim() || $( 'after' ).value.trim() ) {
			$( 'error' ).textContent = 'Enter at least two scores in each box.';
			$( 'error' ).hidden = false;
		}
		return;
	}
	try {
		test = stats.compare( before, after, alpha );
	} catch ( err ) {
		$( 'results' ).hidden = true;
		$( 'error' ).textContent = 'Could not run the test: ' + err.message;
		$( 'error' ).hidden = false;
		return;
	}
	if ( !Number.isFinite( test.statistic ) ) {
		$( 'results' ).hidden = true;
		$( 'error' ).textContent = 'Each group needs some variation in its scores for the t-test to work.';
		$( 'error' ).hidden = false;
		return;
	}
	perm = stats.permutationTest( before, after, { 'trials': TRIALS } );

	$( 'results' ).hidden = false;
	$( 'trials' ).textContent = TRIALS.toLocaleString();
	renderSummary( stats.summarize( before ), stats.summarize( after ) );
	renderVerdict( test, perm );
	drawHistogram( $( 'perm' ), perm );
	$( 'permcaption' ).textContent = 'Orange bars are shuffles at least as extreme as your result: ' + percentText( perm.pValue ) + ' of ' + TRIALS.toLocaleString() + '.';
	drawT( $( 'tdist' ), stats.tCurve( test.df, alpha ), test.statistic );
	$( 'tcaption' ).textContent = 't = ' + fmt( test.statistic, 2 ) + ' with ' + fmt( test.df, 1 ) + ' degrees of freedom; the cut-offs are ±' + fmt( stats.tCurve( test.df, alpha ).critical, 2 ) + '.';
}

function load( example ) {
	$( 'before' ).value = example.before;
	$( 'after' ).value = example.after;
	update();
}

function debounce( fn, ms ) {
	var timer;
	return function debounced() {
		clearTimeout( timer );
		timer = setTimeout( fn, ms );
	};
}

$( 'before' ).addEventListener( 'input', debounce( update, 250 ) );
$( 'after' ).addEventListener( 'input', debounce( update, 250 ) );
$( 'alpha' ).addEventListener( 'change', update );
$( 'example' ).addEventListener( 'click', function onClick() {
	load( EXAMPLE );
});
$( 'noeffect' ).addEventListener( 'click', function onClick() {
	load( NO_EFFECT );
});
window.addEventListener( 'resize', debounce( update, 150 ) );
window.matchMedia( '(prefers-color-scheme: dark)' ).addEventListener( 'change', update );

load( EXAMPLE );
