import {csvtoArray, trainTest, computePCA} from './functions.js';

// Get the data from the dataset_wine CSV
const data = csvtoArray('../CSV/dataset_wine.csv');

// Create the train and test set
const [trainIndices, testIndices] = trainTest(data, 0.8);

// Apply the PCA
const ncomponents2 = computePCA(trainIndices);

export {trainIndices, testIndices, data, ncomponents2};

