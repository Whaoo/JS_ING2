import PCA from 'pca-js';
import * as R from 'ramda';
import csv from 'jquery-csv';
import fs from 'fs';
import ts from 'train-test-split';



//Function to convert CSV file to Array :
const CSVtoArray = (CsvFilePath) =>{
    const data1 = fs.readFileSync(CsvFilePath,
        {encoding:'utf8', flag:'r'});
    return csv.toArrays(data1, {
        separator:';',
        delimiter:'"'
    });
};

//Function to separate in two set of data with the percentage you want
const trainTest = (data,level) =>{
    return ts(data, level);
};

//Function to calculate the variance of a PCA with 2 components and applicate it to the data
const computePCA = (data) =>{
    const vectors = PCA.getEigenVectors(data);
    console.log(PCA.computePercentageExplained(vectors,vectors[0],vectors[1]));
    //Output : 0.99 is a decent amount of variance (2 eigen vectors)
    return PCA.computeAdjustedData(data,vectors[0],vectors[1])
};



//Get the data from the dataset_wine CSV
const data=CSVtoArray('./dataset_wine.csv')

//Create the train and test set
const [trainIndices, testIndices]=trainTest(data,0.8)


//Aply the PCA
const n_components2=computePCA(trainIndices)
console.log(n_components2)
