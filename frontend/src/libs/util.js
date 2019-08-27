import axios from 'axios';
import store from '../store/index';

const util = {};

const ajaxUrl = process.env.VUE_APP_BASE_API;

util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000,
});

util.api = ajaxUrl;
util.oauthUrl = ajaxUrl;

util.openLoading = () => {
  store.dispatch('loading/openLoading');
};


util.closeLoading = () => {
  // 延迟100毫秒关闭
  setTimeout(() => {
    // 关闭loading
    store.dispatch('loading/closeLoading');
  }, 200);
};


export default util;
