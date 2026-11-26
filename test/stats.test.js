'use strict';

var test = require( 'node:test' );
var assert = require( 'node:assert/strict' );
var stats = require( './../src/stats.js' );

var BEFORE = [ 72, 75, 68, 80, 77, 71, 74 ];
var AFTER = [ 81, 85, 79, 88, 83, 86, 80 ];

function mean( x ) {
	return x.reduce( function sum( a, b ) { return a + b; }, 0 ) / x.length;
}

function sampleVariance( x ) {
	var m = mean( x );
	return x.reduce( function sum( a, v ) { return a + ( ( v - m ) * ( v - m ) ); }, 0 ) / ( x.length - 1 ); // eslint-disable-line max-len
}

test( 'parseScores accepts commas, spaces, semicolons and newlines, and drops junk', function t() {
	assert.deepEqual( stats.parseScores( '72, 75 68;\n80 abc  ,, 77' ), [ 72, 75, 68, 80, 77 ] );
	assert.deepEqual( stats.parseScores( '' ), [] );
});

test( 'summarize matches hand-computed mean and sample standard deviation', function t() {
	var s = stats.summarize( BEFORE );
	assert.equal( s.count, 7 );
	assert.ok( Math.abs( s.mean - mean( BEFORE ) ) < 1e-12 );
	assert.ok( Math.abs( s.stdev - Math.sqrt( sampleVariance( BEFORE ) ) ) < 1e-12 );
	assert.equal( s.min, 68 );
	assert.equal( s.max, 80 );
});

test( 'compare agrees with the Welch t statistic and degrees of freedom computed by hand', function t() {
	var r = stats.compare( BEFORE, AFTER );
	var va = sampleVariance( AFTER ) / AFTER.length;
	var vb = sampleVariance( BEFORE ) / BEFORE.length;
	var tExpected = ( mean( AFTER ) - mean( BEFORE ) ) / Math.sqrt( va + vb );
	var dfExpected = ( ( va + vb ) * ( va + vb ) ) / ( ( ( va * va ) / ( AFTER.length - 1 ) ) + ( ( vb * vb ) / ( BEFORE.length - 1 ) ) ); // eslint-disable-line max-len

	assert.ok( Math.abs( r.statistic - tExpected ) < 1e-10 );
	assert.ok( Math.abs( r.df - dfExpected ) < 1e-10 );
	assert.ok( r.difference > 0, 'after - before should be positive' );
	assert.ok( r.pValue < 0.01 );
	assert.equal( r.rejected, true );
	assert.ok( r.ci[ 0 ] < r.difference && r.difference < r.ci[ 1 ] );
});

test( 'compare rejects groups that are too small', function t() {
	assert.throws( function bad() { stats.compare( [ 1 ], [ 2, 3 ] ); }, RangeError );
});

test( 'permutation test is reproducible and roughly agrees with the t-test', function t() {
	var a = stats.permutationTest( BEFORE, AFTER, { 'trials': 4000, 'seed': 7 } );
	var b = stats.permutationTest( BEFORE, AFTER, { 'trials': 4000, 'seed': 7 } );
	assert.deepEqual( Array.from( a.diffs ), Array.from( b.diffs ) );
	assert.ok( Math.abs( a.observed - ( mean( AFTER ) - mean( BEFORE ) ) ) < 1e-12 );
	assert.ok( a.pValue < 0.01, 'a clear improvement should rarely happen by chance' );
});

test( 'permutation test finds nothing when both groups are identical in distribution', function t() {
	var r = stats.permutationTest( [ 70, 74, 78, 72, 76 ], [ 76, 72, 78, 74, 70 ], { 'trials': 3000 } );
	assert.equal( r.observed, 0 );
	assert.ok( r.pValue > 0.9 );
});

test( 'tCurve is symmetric and its critical value matches the textbook value', function t() {
	var c = stats.tCurve( 10, 0.05 );
	var n = c.y.length;
	assert.ok( Math.abs( c.critical - 2.228 ) < 1e-3, 't(0.975, df=10) is about 2.228' );
	assert.ok( Math.abs( c.y[ 0 ] - c.y[ n-1 ] ) < 1e-12 );
	assert.ok( c.y[ ( n-1 ) / 2 ] > c.y[ 0 ] );
});
