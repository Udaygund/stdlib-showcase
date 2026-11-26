# Did my study method actually work?

A small, in-browser statistics explainer built with [stdlib](https://github.com/stdlib-js/stdlib).

You changed how you study (flashcards, spaced repetition, a new app) and your quiz scores went up. Was it the method, or would a gap like that show up by luck anyway? Paste your scores from before and after, and the page answers that question three ways:

1. **The raw numbers.** Count, average, spread, lowest and highest score for each group.
2. **What luck looks like.** If the method did nothing, "before" and "after" are just labels. The page shuffles those labels 5,000 times, records the difference in averages each time, and shows where your real result lands in that histogram. This is a permutation test, and it makes the idea behind a p-value visible.
3. **The textbook test.** Welch's two-sample t-test, drawn on the t-distribution with the significance cut-offs shaded.

Everything runs in the browser. Nothing is uploaded.

## stdlib packages used

| Package | Used for |
| --- | --- |
| `@stdlib/stats/incr/summary` | count, mean, standard deviation, min and max, computed incrementally |
| `@stdlib/stats/ttest2` | Welch's two-sample t-test: statistic, degrees of freedom, p-value, confidence interval |
| `@stdlib/random/shuffle` | seeded, reproducible label shuffling for the permutation test |
| `@stdlib/stats/strided/dmean` | group means for each shuffle, on `Float64Array` views without copying |
| `@stdlib/array/float64` | typed arrays for the simulated differences |
| `@stdlib/stats/base/dists/t/pdf` | the t-distribution curve |
| `@stdlib/stats/base/dists/t/quantile` | the two-sided critical values |
| `@stdlib/math/base/special/abs` | comparing shuffled and observed differences |

All of the statistics live in [`src/stats.js`](src/stats.js). [`src/main.js`](src/main.js) is only the page: inputs, the verdict text, and two hand-drawn `<canvas>` charts.

## Run it

```bash
npm install --ignore-scripts
npm test         # unit tests for src/stats.js
npm start        # builds dist/app.js and serves the page at http://localhost:8080
```

`--ignore-scripts` is needed because the published `@stdlib/stdlib@0.4.1` package runs an install script (`tools/scripts/apply_patches`) that is not included in the package, so a plain `npm install` fails.

### Bundling notes

stdlib packages are CommonJS. They are bundled for the browser with esbuild. One package, `@stdlib/buffer/ctor`, `require`s Node's built-in `buffer` module but falls back to its own polyfill when Node's `Buffer` is missing. The build aliases `buffer` to an empty shim ([`src/shims/buffer.js`](src/shims/buffer.js)) so that fallback is used.

## How the results are checked

`test/stats.test.js` checks the stdlib results against values computed independently:

- the Welch t statistic and degrees of freedom, recomputed by hand from the formula;
- mean and sample standard deviation, recomputed by hand;
- `t(0.975, df = 10) ≈ 2.228`, the textbook critical value;
- the permutation test is reproducible for a fixed seed, finds a clear improvement significant, and finds nothing when the two groups are the same scores in a different order.

## Limits

- The two groups are treated as independent samples. If every "before" score is paired with an "after" score (the same quiz retaken), a paired test would be more appropriate.
- With very few quizzes, neither test can tell much apart, and the page says so instead of declaring a winner.

## How this was built

This project was written with Claude Code (an AI coding assistant), including the statistics module, the tests, the page and this README. It is meant as a reference for learning stdlib, not as original work by the repository owner.
