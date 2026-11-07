# demo/build-failure

This branch intentionally fails CI so GitEase Workflow Studio can demo:

- red / failed job nodes on the graph
- in-app job log viewer (`gh run view … --log`)

`scripts/test.js` and `scripts/build.js` exit with code 1 after printing a clear banner.

Switch back to `master` for a green run.
