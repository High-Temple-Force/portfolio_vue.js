# portfolio_vue.js
Personal portfolio by vue.js
  
### 1. install vue-cli
```
$ npm install -g vue-cli
```  

### 2. install Vuex and Babel-polyfill
```
$ npm install vuex babel-polyfill
```  

### 3. make store.js at /src/
```
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
```  
