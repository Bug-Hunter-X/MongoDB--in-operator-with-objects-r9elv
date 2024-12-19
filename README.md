# MongoDB $in Operator with Objects

This repository demonstrates a common error when using the `$in` operator in MongoDB queries with arrays of objects.  The `$in` operator is designed for simple value comparisons and does not directly support object comparison.

The `bug.js` file showcases the incorrect usage, and `bugSolution.js` provides the correct way to achieve the desired outcome.

## Problem
The incorrect use of `$in` with objects will not return the expected results.  The query will likely return an empty array because the comparison isn't performed correctly.

## Solution
To effectively query documents with objects, consider using the `$elemMatch` operator.