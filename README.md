# portfolio_vue.js
Personal portfolio by vue.js

## install vue-cli
```
$ npm install -g vue-cli
```  

## install Vuex and Babel-polyfill
```
$ npm install vuex babel-polyfill
```  

## make store.js at /src/
```
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
```  
