#!/bin/bash 

pushd ./mylib

npm i
npm run build

popd


pushd ./myapp

npm i
npm run build
npm start 

popd
