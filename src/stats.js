'use strict';

// Statistics for "Did my study method work?", built on stdlib.
//
// Two groups of quiz scores (before / after a study method) are compared three ways:
//   1. descriptive summaries        -> @stdlib/stats/incr/summary
//   2. Welch's two-sample t-test    -> @stdlib/stats/ttest2
//   3. a permutation test that simulates "the method did nothing"
//                                   -> @stdlib/random/shuffle + @stdlib/stats/strided/dmean
// and the t-distribution used by the test is exposed for plotting
//                                   -> @stdlib/stats/base/dists/t/pdf + quantile

var incrsummary = require( '@stdlib/stats/incr/summary' );
var ttest2 = require( '@stdlib/stats/ttest2' );
var shuffleFactory = require( '@stdlib/random/shuffle' ).factory;
var dmean = require( '@stdlib/stats/strided/dmean' );
var Float64Array = require( '@stdlib/array/float64' );
var tpdf = require( '@stdlib/stats/base/dists/t/pdf' );
var tquantile = require( '@stdlib/stats/base/dists/t/quantile' );
var abs = require( '@stdlib/math/base/special/abs' );

var MIN_GROUP_SIZE = 2;

/**
* Parses free-form text ("72, 75 68\n80") into an array of finite numbers.
*
* @param {string} text - user input
* @returns {Array<number>} parsed scores
*/
function parseScores( text ) {
	var parts = String( text ).split( /[\s,;]+/ );
	var out = [];
	var v;
	var i;
	for ( i = 0; i < parts.length; i++ ) {
		if ( parts[ i ] === '' ) {
			continue;
		}
		v = Number( parts[ i ] );
		if ( Number.isFinite( v ) ) {
			out.push( v );
		}
	}
	return out;
}

/**
* Summarizes a group of scores with an incremental accumulator.
*
* @param {Array<number>} scores - scores
* @returns {Object} count, mean, stdev, min, max, ...
*/
function summarize( scores ) {
	var acc = incrsummary();
	var i;
	for ( i = 0; i < scores.length; i++ ) {
		acc( scores[ i ] );
	}
	return acc() || { 'count': 0 };
}

/**
* Runs Welch's two-sample t-test (after vs before).
*
* @param {Array<number>} before - scores before the method
* @param {Array<number>} after - scores after the method
* @param {number} [alpha=0.05] - significance level
* @returns {Object} test results
*/
function compare( before, after, alpha ) {
	var res;
	if ( before.length < MIN_GROUP_SIZE || after.length < MIN_GROUP_SIZE ) {
		throw new RangeError( 'Each group needs at least ' + MIN_GROUP_SIZE + ' scores.' );
	}
	res = ttest2( after, before, {
		'alpha': ( alpha === void 0 ) ? 0.05 : alpha
	});
	return {
		'statistic': res.statistic,
		'df': res.df,
		'pValue': res.pValue,
		'ci': res.ci,
		'alpha': res.alpha,
		'rejected': res.rejected,
		'difference': res.xmean - res.ymean,
		'method': res.method
	};
}

/**
* Computes the mean of a strided view without copying.
*
* @param {Float64Array} x - data
* @param {number} offset - starting index
* @param {number} n - number of elements
* @returns {number} mean
*/
function meanOf( x, offset, n ) {
	return dmean( n, x.subarray( offset, offset+n ), 1 );
}

/**
* Permutation test: if the study method had no effect, the "before" and "after" labels are
* interchangeable. Shuffle the labels many times and see how often chance alone produces a
* difference at least as large as the one observed.
*
* @param {Array<number>} before - scores before
* @param {Array<number>} after - scores after
* @param {Object} [opts] - options
* @param {number} [opts.trials=5000] - number of shuffles
* @param {number} [opts.seed=1234] - PRNG seed (reproducible results)
* @returns {Object} observed difference, simulated differences, and two-sided p-value
*/
function permutationTest( before, after, opts ) {
	var observed;
	var extreme;
	var shuffle;
	var trials;
	var pooled;
	var diffs;
	var nb;
	var na;
	var s;
	var i;

	opts = opts || {};
	trials = opts.trials || 5000;
	shuffle = shuffleFactory({
		'seed': ( opts.seed === void 0 ) ? 1234 : opts.seed
	});
	nb = before.length;
	na = after.length;
	pooled = before.concat( after );
	observed = meanOf( new Float64Array( after ), 0, na ) - meanOf( new Float64Array( before ), 0, nb ); // eslint-disable-line max-len

	diffs = new Float64Array( trials );
	extreme = 0;
	for ( i = 0; i < trials; i++ ) {
		s = new Float64Array( shuffle( pooled ) );
		diffs[ i ] = meanOf( s, nb, na ) - meanOf( s, 0, nb );
		if ( abs( diffs[ i ] ) >= abs( observed ) - 1e-12 ) {
			extreme += 1;
		}
	}
	return {
		'observed': observed,
		'diffs': diffs,
		'trials': trials,
		// Add-one correction keeps the estimate away from an impossible p = 0.
		'pValue': ( extreme + 1 ) / ( trials + 1 )
	};
}

/**
* Samples the Student's t density for plotting, along with the two-sided critical value.
*
* @param {number} df - degrees of freedom
* @param {number} [alpha=0.05] - significance level
* @param {number} [n=201] - number of points
* @returns {Object} x/y points and critical value
*/
function tCurve( df, alpha, n ) {
	var critical;
	var limit;
	var xs;
	var ys;
	var x;
	var i;

	alpha = ( alpha === void 0 ) ? 0.05 : alpha;
	n = n || 201;
	critical = tquantile( 1.0 - ( alpha / 2.0 ), df );
	limit = Math.max( 4.0, critical * 1.6 );
	xs = new Float64Array( n );
	ys = new Float64Array( n );
	for ( i = 0; i < n; i++ ) {
		x = -limit + ( ( 2.0 * limit * i ) / ( n - 1 ) );
		xs[ i ] = x;
		ys[ i ] = tpdf( x, df );
	}
	return {
		'x': xs,
		'y': ys,
		'critical': critical,
		'limit': limit
	};
}

module.exports = {
	'parseScores': parseScores,
	'summarize': summarize,
	'compare': compare,
	'permutationTest': permutationTest,
	'tCurve': tCurve
};
