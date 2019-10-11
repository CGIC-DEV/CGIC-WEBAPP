<template>
  <div id="login" style="margin-top: 260px">
    <img src="../assets/logo.png"
         :class="{'state-A-bg-image' : stateA, 'state-B-bg-image': stateB,'animation-state-A-bg-image' : animationA, 'animation-state-B-bg-image': animationB}"
         @click="animation">
    <div id="login-box" v-if="isShowContent">
      <!-- 通过:rules="loginFormRules"来绑定输入内容的校验规则 -->
      <el-form :rules="loginFormRules" ref="loginForm" :model="loginForm" label-position="right" label-width="auto"
               show-message>
        <div style="margin-top: 26px"></div>
        <el-form-item label="用户名" prop="loginName">
          <el-col :span="22">
            <el-input type="text" v-model="loginForm.loginName"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="loginPassword">
          <el-col :span="22">
            <el-input type="password" v-model="loginForm.loginPassword"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button size="medium" type="primary" @click="loginSubmit" style="margin-left: -30px">登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          loginName: "",
          loginPassword: ""
        },
        stateA: true,
        stateB: false,
        animationA: false,
        animationB: false,
        isShowContent: false,
        isOpen:true
      }
    }, methods: {
      loginSubmit() {
        this.$router.push({path: '/main/indexpage'})
      },
      animation(){
        if(this.isOpen){
          this.animationA = true;
          this.animationB = false;
          this.stateA = false;
          this.stateB = true;
          this.isShowContent = true;
          this.isOpen = false;
        }else{
          this.animationB = true;
          this.animationA = false;
          this.stateA = true;
          this.stateB = false;
          this.isShowContent = false;
          this.isOpen = true;
        }

      }
    }
  }
</script>
<style scoped>
  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #66CD00;
    font-size: 30px;
    font-weight: bold;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    /*初始状态 透明度为0*/
    40% {
      opacity: 0;
    }
    /*过渡状态 透明度为0*/
    100% {
      opacity: 1;
    }
    /*结束状态 透明度为1*/
  }

  @-webkit-keyframes fade-in { /*针对webkit内核*/
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  #login-box {
    animation: fade-in; /*动画名称*/
    animation-duration: 1.75s; /*动画持续时间*/
    -webkit-animation: fade-in 1.75s; /*针对webkit内核*/
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #b8e0fb;
  }

  #login {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  /* img的A状态 */

  .state-A-bg-image {
    opacity: 0.5;
    top: 200px;
    position: absolute;
    width: 300px;
    left: -150px;
    margin-left: 50%;
  }

  /* img的A状态动画设置 */

  .animation-state-A-bg-image {
    animation-name: animation_A-bg-image;
    animation-duration: 1.25s;
  }

  /* img的A状态关键帧(从A状态到B状态) */

  @keyframes animation_A-bg-image {
    from {
      opacity: 0.5;
      top: 200px;
      position: absolute;
      width: 300px;
      left: -150px;
      margin-left: 50%;
    }
    to {
      opacity: 1;
      top: 60px;
      position: absolute;
      width: 120px;
      left: -60px;
      margin-left: 50%;
    }
  }

  /*======================== B状态 ========================*/

  /* img的B状态 */

  .state-B-bg-image {
    opacity: 1;
    top: 60px;
    position: absolute;
    width: 120px;
    left: -60px;
    margin-left: 50%;
  }

  /* img的B状态动画设置 */

  .animation-state-B-bg-image {
    animation-name: animation_B-bg-image;
    animation-duration: 1.25s;
  }

  /* img的B状态关键帧(从B状态到A状态) */

  @keyframes animation_B-bg-image {
    from {
      opacity: 1;
      top: 60px;
      position: absolute;
      width: 120px;
      left: -60px;
      margin-left: 50%;
    }
    to {
      opacity: 0.5;
      top: 200px;
      position: absolute;
      width: 300px;
      left: -150px;
      margin-left: 50%;
    }
  }
</style>
