<template>
  <div class="auth_container">
    <!-- <transition-group name="fade" tag="div"> -->
      <div class="auth_container-inner" v-show="rigister" key="singin">
          <div class="auth_container-title">
            Вход
          </div>
          <div class="auth_container-inputs form-group">
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Пароль" v-model="password">
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
        <form class="auth_container-inputs form-group">
          <input type="text" placeholder="Имя пользователя" required>
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Пароль" required>
          <input type="password" placeholder="Повторить пароль">
          <label>
            <input type="checkbox">
            <span>Принимаю <a href="#">условия соглашения</a></span>
          </label>
          <button type="submit" class="btn btn-primary main_bg btn_sinin" v-on:click="$emit('singin')">
            Регистрация
          </button>
        </form>
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

  export default {
    data(){
        return {
          rigister: true,
          email: '',
          password: 0
        }
    },
    methods: {
      rigisterStatus() {
        this.rigister = this.rigister == true ? false : true;
      },
      singin(){
        this.$store.dispatch('singup',{email: this.email, password: this.password});
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
    height: 100%;
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


</style>
