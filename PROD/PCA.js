import PCA from 'pca-js';
import * as R from 'ramda';
import csv from 'jquery-csv';
import fs from 'fs';
import ts from 'train-test-split';

import {CSVtoArray, trainTest, computePCA} from './Functions.js';

//Get the data from the dataset_wine CSV
const data=CSVtoArray('./dataset_wine.csv')

//Create the train and test set
const [trainIndices, testIndices]=trainTest(data,0.8)

//Apply the PCA
const n_components2 = computePCA(trainIndices)

export {trainIndices, testIndices, data, n_components2};

