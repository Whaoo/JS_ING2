
// Function to convert CSV file to Array :
import fs from 'node:fs';
import csv from 'jquery-csv';
import ts from 'train-test-split';
import PCA from 'pca-js';

const csvtoArray = CsvFilePath => {
	const data1 = fs.readFileSync(CsvFilePath,
		{encoding: 'utf8', flag: 'r'});
	return csv.toArrays(data1, {
		separator: ';',
		delimiter: '"',
	});
};

// Function to separate in two set of data with the percentage you want
const trainTest = (data, level) => ts(data, level);

// Function to calculate the variance of a PCA with 2 components and applicate it to the data
const computePCA = data => {
	const vectors = PCA.getEigenVectors(data);
	// Console.log(PCA.computePercentageExplained(vectors,vectors[0],vectors[1]));
	// Output : 0.99 is a decent amount of variance (2 eigen vectors)
	return PCA.computeAdjustedData(data, vectors[0], vectors[1]);
};

export {csvtoArray, trainTest, computePCA};

