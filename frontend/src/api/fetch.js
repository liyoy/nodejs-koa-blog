import qs from 'qs';
import Vue from 'vue';
import util from '../libs/util';

util.ajax.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
};

util.ajax.interceptors.request.use((config) => {
  if (config.isLoading) {
    // 开启loading
    util.openLoading();
  }

  // 获取token
  config.headers.common.Authorization = `Bearer ${Vue.ls.get('WATCH_CHECK_TOKEN')}`;
  return config;
}, error => Promise.reject(error));

util.ajax.interceptors.response.use((response) => {
  // 如果后端有新的token则重新缓存
  const newToken = response.headers['new-token'];
  if (newToken) {
    Vue.ls.set('SeafoodToken', newToken);
  }

  // 关闭loading
  util.closeLoading();
  return response;
}, (error) => {
  const res = error.response;
  const {extraErrors = []} = res.config;
  const {code} = res.data;

  // 错误代码如果不在'需要单独处理的错误代码数组'内的话
  if (extraErrors.indexOf(code) === -1) {
    switch (code) {
      case 401:
        Vue.ls.set('WATCH_CHECK_TOKEN', null);
        window.location.href = `${process.env.VUE_APP_BASE_API}/wechat-server/code?target_url=${encodeURIComponent(document.URL)}`;
        break;

      case 404:
        util.dialog('查询信息不存在');
        break;

      case 413:
        util.dialog(res.data.message);
        break;

      case 418:
        util.dialog(res.data.message);
        break;

      case 422:
        if (res.data.errors) {
          let arr = [];
          for (const key in res.data.errors) {
            res.data.errors[key].forEach((item) => {
              arr.push(item);
            });
          }
          const errors = arr.length > 0 ? arr.join('，') : arr;
          util.dialog(errors);
        } else {
          util.dialog(res.data.message);
        }
        break;

      case 500:
        util.dialog('服务器开了一会小差~', 'error');
        break;

      default:
        util.dialog(res.data.message);
    }
  }

  // 关闭loading
  utils.closeLoading();
  return Promise.reject(res);
});

export default {
  post(url, params = {}) {
    const {isLoading = true, extraErrors = []} = params;

    return util.ajax({
      method: 'post',
      url,
      data: qs.stringify(params),
      timeout: 30000,
      isLoading,
      extraErrors,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    });
  },


  get(url, params = {}) {
    const {isLoading = true, extraErrors = []} = params;

    return util.ajax({
      method: 'get',
      url,
      params,
      paramsSerializer: query => qs.stringify(query),
      isLoading,
      extraErrors,
    });
  },

  delete(url, params = {}) {
    const {isLoading = true, extraErrors = []} = params;
    return util.ajax({
      method: 'delete',
      url,
      params,
      isLoading,
      extraErrors,
    });
  },

  put(url, params = {}) {
    const {isLoading = true, extraErrors = []} = params;
    return util.ajax({
      method: 'put',
      url,
      data: qs.stringify(params),
      isLoading,
      extraErrors,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    });
  },
};
