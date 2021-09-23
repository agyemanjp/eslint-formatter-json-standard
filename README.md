# eslint-formatter-json-standard
Report ESLint output in a standardized JSON format.

## Description
Report ESLint output in a [standardized JSON format](https://gist.githubusercontent.com/agyemanjp/0f43de0639a7ec872e9ebcbe6166d5d9/raw/ccb90a9298561f2ba7c07ba6843b2b25244f9cf7/code-check-general.schema.json).

This package is part of the series of packages for reporting tooling output in a standardized JSON format, for use with the [Annotate check scripts output](https://github.com/marketplace/actions/annotate-check-scripts-output) Github action. 

The other packages include:

- [mocha-reporter-json-standard](https://www.npmjs.com/package/mocha-reporter-json-standard)


## Install 
`npm install --save-dev eslint-formatter-json-standard`

## Usage
`eslint --ext ts --output-file .lint.run.json --format json-standard --cache 'src/**'`

This will run eslint on all .ts files in the _/src_ folder and output the results file _.lint.run.json_
