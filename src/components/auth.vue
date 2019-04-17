<template>
  <div class="auth_container">
    <!-- <transition-group name="fade" tag="div"> -->
    <transition name="slide-fade" tag="div">
      <div class="alert alert-warning auth_container-alert" role="alert" v-show="message" ref="alertMessage">
        {{ message }}
      </div>
    </transition>
      <div class="auth_container-inner" v-show="rigister" key="singin">
          <div class="auth_container-title">
            Вход
          </div>
          <div class="auth_container-inputs form-group">
            <input type="email" placeholder="Email" ref="email">
            <input type="password" placeholder="Пароль" ref="password">
            <label>
              <input type="checkbox">
              <span>Запомнить меня</span>
            </label>
          </div>
          <div class="btn btn-primary main_bg btn_sinin" v-on:click="singin()">
            Войти
          </div>
          <div class="singin_with-social">
            <div class="singin_with-text">Войти с помощью</div>
            <div class="singin_with-items">
              <div class="singin_with-google btn btn-theme">
                Google
              </div>
              <div class="singin_with-facebook btn btn-theme">
                Facebook
              </div>
            </div>
          </div>
          <div class="btn_sinup">
            <a href="#" v-on:click.prevent="rigisterStatus()">Зарегистрироваться</a>
          </div>
      </div>
      <div class="auth_container-inner" v-show="rigister == false" key="singup">
        <div class="auth_container-title">
          Регистрация
        </div>
        <div class="auth_container-inputs form-group">
          <input type="text" placeholder="Имя пользователя" ref="userName">
          <input type="email" ref="emailSingup" placeholder="Email">
          <input type="password" ref="passwordSingup" placeholder="Пароль">
          <input type="password" ref="secondPassword" placeholder="Повторить пароль">
          <label>
            <input type="checkbox">
            <span>Принимаю <a href="#">условия соглашения</a></span>
          </label>
          <button type="submit" class="btn btn-primary main_bg btn_sinin" v-on:click.prevent="singup();">
            Регистрация
          </button>
        </div>
        <div class="singin_with-social">
          <div class="singin_with-text">Войти с помощью</div>
          <div class="singin_with-items">
            <div class="singin_with-google btn btn-theme">
              Google
            </div>
            <div class="singin_with-facebook btn btn-theme">
              Facebook
            </div>
          </div>
        </div>
        <div class="btn_sinup">
          <a href="#" v-on:click.prevent="rigisterStatus()">У меня уже есть учетная запись</a>
        </div>
      </div>
    <!-- </transition-group> -->
  </div>
</template>
<script>

  function warningClear(target){
    target.style.background = '#eee';
  }

  function warningSet(target){
    target.style.background = '#faaea0';
    setTimeout(function(){warningClear(target)},500);
    return false;
  }

  export default {
    data(){
        return {
          rigister: true,
          message: ''
        }
    },
    methods: {
      rigisterStatus() {
        this.rigister = this.rigister == true ? false : true;
      },
      singin(){
          if(this.$refs.email.value == ''){
            warningSet(this.$refs.email);
          }
          else if(this.$refs.password.value == ''){
            warningSet(this.$refs.password);
          }
          else if (this.$store.state.userModule.error != '') {
            this.$refs.alertMessage.style.display = 'block';
            this.message = this.$store.state.userModule.error;
            setTimeout(()=>{this.$refs.alertMessage.style.display = 'none'},2000);
            this.$store.state.userModule.error = '';
          }
          else{
            this.$store.dispatch('singin',{email: this.$refs.email.value, password: this.$refs.password.value});
          }
      },
      singup(){
        if(this.$refs.passwordSingup.value != this.$refs.secondPassword.value){
          this.$refs.alertMessage.style.display = 'block';
          this.message = 'Пароли не совпадают';
          setTimeout(()=>{this.$refs.alertMessage.style.display = 'none'},2000);
          this.$store.state.userModule.error = '';
        }
        else if(this.$refs.userName.value == ''){
          warningSet(this.$refs.userName);
        }
        else if(this.$refs.emailSingup.value == ''){
          warningSet(this.$refs.emailSingup);
        }
        else if(this.$refs.passwordSingup.value == ''){
          warningSet(this.$refs.passwordSingup);
        }
        else if (this.$store.state.userModule.error != '') {
          this.$refs.alertMessage.style.display = 'block';
          this.message = this.$store.state.userModule.error;
          setTimeout(()=>{this.$refs.alertMessage.style.display = 'none'},2000);
          this.$store.state.userModule.error = '';
        }
        else{
          this.$store.dispatch('singup',{email: this.$refs.emailSingup.value, password: this.$refs.passwordSingup.value, user: this.$refs.userName.value});
        }

      }
    },
    computed: {
      errorMessage(){
        this.$refs.alertMessage.style.display = 'block';
        return this.message = this.$store.state.userModule.error == '' ? false : this.$store.state.userModule.error;
        setTimeout(()=>{this.$refs.alertMessage.style.display = 'none'},2000);
      }
    }
  }
</script>
<style>
  .auth_container{
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -ms-align-items: center;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    box-sizing: border-box;
  }
  .auth_container-inner{
    width: 350px;
    background-color: #fff;
    min-height: 480px;
    box-sizing: border-box;
    padding:20px 40px;
  }
  .auth_container-title{
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    margin: 25px 0;
  }
  .auth_container-inputs > input{
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: #eee;
    border: none;
    padding-left: 15px;
    font-size: 18px;
    transition: 0.3s;
  }
  .auth_container-inputs input[type='checkbox']{
    border: solid blue 1px;
    background-color: transparent;
  }
  .auth_container-inputs label{
    margin: 10px 0;
    cursor: pointer;
  }
  .auth_container-inputs span{
    font-size: 12px;
  }
  .btn_sinin{
    margin-bottom: 15px;
    width: 100%;
  }
  .btn_sinup{
    font-size: 14px;
    color: #333;
    text-align: center;
  }
  .singin_with-social{
    margin-top: 25px;
  }
  .singin_with-items{
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .singin_with-text{
    text-align: center;
  }
  .singin_with-items .btn-theme{
    color: #1997c6;
    width: 49%;
    height: 32px;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
    text-align: center;
    border: solid 1px #1997c6;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
