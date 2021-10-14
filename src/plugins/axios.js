"use strict";

import Vue from 'vue';
import axios from "axios";
import store from "../store";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



let config = {
  baseURL: process.env.VUE_APP_APIURL || ""
};

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;


export const httpClient = axios.create(config);

httpClient.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);


// Add a response interceptor
httpClient.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (403 === error.response.status) {
      store.dispatch('logout');
  } else {
    return Promise.reject(error);
   }
 }
);



Plugin.install = function(Vue) {
  Vue.axios = httpClient;
  window.axios = httpClient;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return httpClient;
      }
    },
    $axios: {
      get() {
        return httpClient;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
