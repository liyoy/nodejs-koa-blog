<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>
          欢迎登录
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <formItem prop="nickname">
              <i-input v-model="form.nickname"  placeholder="请输入昵称"></i-input>
            </formItem>
            <FormItem prop="email">
              <i-input v-model="form.email" placeholder="请输入邮箱">
                            <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
              </i-input>
            </FormItem>
            <FormItem prop="password1">
              <i-input type="password" v-model="form.password1" placeholder="请输入密码">
                            <span slot="prepend">
                                  <Icon :size="14" type="locked"></Icon>
                                </span>
              </i-input>
            </FormItem>
            <FormItem prop="password2">
              <i-input type="password" v-model="form.password2" placeholder="请确认密码">
                            <span slot="prepend">
                                  <Icon :size="14" type="locked"></Icon>
                                </span>
              </i-input>
            </FormItem>
            <FormItem>
              <Button :loading="buttonLoading" @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    data() {
      return {
        buttonLoading: false,
        // 表单内容，email && 密码
        form: {
          nickname: '',
          email: '',
          password1: '',
          password2: ''
        },

        // 表单验证，email && 密码
        rules: {
          email: [{
            required: true,
            message: '不能为空',
            trigger: 'blur'
          }],
          password1: [{
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }]
        }
      };
    },
    created() {
      this.$Loading.finish();
    },
    methods: {
      ...mapActions({
        REGISTER:'admin/REGISTER'
      }),
      // ...mapActions({
      //   REGISTER: 'admin/login'
      // }),
      // 提交登录
      handleSubmit() {

        this.buttonLoading = true;
        // 表单验证
        var formLabel = this.$refs.loginForm;
        formLabel.validate((valid) => {
          if (!valid) {
            this.$Message.error('表单验证失败!');
            this.buttonLoading = false;
            return false
          }

          console.log('start')

          this.REGISTER(this.form).then(ret => {
            console.log('ret')
            console.log('done')
            this.$ls.set('token', ret.data.token);
            // 跳转
            this.$Message.success("注册成功！");

          }).catch(err => {
            console.log('err')
            console.log(err)
            this.buttonLoading = false
          })
        })
      }
    }
  };
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
  }

  .login {
    width: 100%;
    height: 100%;
    background-image: url('../assets/login_bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;

  }

  .login-con {
    position: absolute;
    right: 160px;
    top: 50%;
    transform: translateY(-60%);
    width: 300px;
  }

  .login-header {
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    padding: 30px 0;
  }

  .form-con {
    padding: 10px 0 0;
  }

  .login-tip {
    font-size: 10px;
    text-align: center;
    color: #c3c3c3;
  }
</style>

