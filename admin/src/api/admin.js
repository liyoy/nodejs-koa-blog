import fetch from './fetch';

export default {
  // 登录
  login(params) {
    return fetch.post('/admin/login', params)
  },
  // 注册
  register(params) {
    return fetch.post('/admin/register', params)
  },
  // 验证管理员token
  auth(params) {
    return fetch.get('/admin/auth', params)
  }
}
