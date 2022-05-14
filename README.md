# Java Script Project
Project of fourth year students in engineering school.

Project aiming at creating a dataloader which gives a set of equiprobable data, apply the Khi² / Chi² and then applying a PCA.

# Authors (A to Z)

- COULANGE Tristan
- DURAND Thomas
- FLAMENT Florentin
- GIDROL Louis
- LAURENT Louis
- LIBERT Méline
- MASRIERA Edouard

# Supervising Professor
Maxime ROBIN (https://github.com/Waxo)

# Documentations

The attached files are used to launch the different javascripts: a Chi-square application test, the PCA applied to a train and a test.

# How to : 

##### Install the modules  : 
```
npm install pca-js
npm install jquery-csv
npm install fs
npm install train-test-split
npm install ramda
```

##### Use gulp : 
```

// Check your node, npm and npx versions
node --version
npm --version
npx --version

// Install the gulp command line utility
npm install --global gulp-cli

// Create a project directory and navigate into it
npx mkdirp my-project
cd my-project

// Create a package.json file
npm init

// Install the gulp package globaly 
npm install --save-dev gulp
```
Launch the gulpfile with the command : ```gulp```

##### Use Mocha : 
```

// Install with npm 
npm install --global mocha
npm install mocha
mkdir test
EDITOR test/test.js # or open with your favorite editor
```

# Libraries
Yarn (software packaging system):
https://classic.yarnpkg.com/lang/en

Ramda (functional programming library in JS):
https://ramdajs.com 

Node and npm (runtime environment and software packaging system):
https://nodejs.org/

Gulp (auto script starter):
https://gulpjs.com

Mocha (auto tests) : 
https://mochajs.org

xo (ESLint wrapper) : 
https://github.com/xojs/xo
