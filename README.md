# Unexpected Token Error in Express.js app.listen() Callback

This repository demonstrates an uncommon error in Express.js where an unexpected token error arises within the callback function of `app.listen()`. This typically happens when a non-function is passed as the callback argument.

## Bug

The `bug.js` file contains the erroneous code.  The problem lies in providing a string instead of a function to the `app.listen()` method.

## Solution

The `bugSolution.js` file provides the corrected code. The solution involves ensuring a function is correctly supplied to `app.listen()` to handle the server's listening event.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js`. You will encounter the error.
4. Run `node bugSolution.js`. The server will run without errors.