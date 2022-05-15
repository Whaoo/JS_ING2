// This is the default Chi2 test from @stdlib/stats-chi2test

import chi2test from '@stdlib/stats-chi2test';

import {csvtoArray} from './functions.js';

const data = csvtoArray('../CSV/zoo.csv');

const minusline0 = data.slice(20); // We don't want the first line of the CSV
const arraychi2 = minusline0.map(item => item.splice(1));

const out = chi2test(arraychi2);

export {out};
// Returns all the values from the @stdlib/stats-chi2test

/*
@stdlib/stats-chi2test example is :

var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];
var out = chi2test( x );
console.log( out.print() );
 =>
*    Chi-square independence test
*
*    Null hypothesis: the two variables are independent
*
*        pValue: 0.0719
*        statistic: 3.24
*        degrees of freedom: 1
*
*    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/

