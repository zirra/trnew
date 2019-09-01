<template>
  <div class="modal-content">
    <div class="signin">
      <br />
      <h1 class="centered">login</h1>
      <div style="margin: 16px 0px;">
        <p><input type="text" placeholder="USER ID" v-model="user.email" /></p>
        <p><input type="password" placeholder="PASSWORD" v-model="user.password" /></p>
        <p><button @click="login(user)" class="btn">Log In</button></p>
      </div>
      <div class="sub" >
        <sub>Use the login information provided to you in your invitation email.</sub>
        <p class="txtred"><a @click="shutWindow">Close Window</a></p>
        <h3 v-if="loginErr" style="color:#F00;">Incorrect Login information</h3>
        <p><br/></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'signin-view',
  data () {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapMutations([
      'setModal',
      'setLoginError'
    ]),
    ...mapActions([
      'login',
      'clearLoginError'
    ]),
    shutWindow () {
      this.setModal()
      this.clearLoginError()
    }
  },
  computed: {
    ...mapGetters([
      'loginErr',
      'authorized'
    ])
  },
  watch: {
    authorized () {
      if(this.authorized) {
        this.setModal()
      }
    }
  }
}
</script>

<style>
.signin {
  margin:0px auto;
  background-color: #fff;
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
}

.signin p {
  margin: 2px 4px;
  padding: 2px 4px;
}

.sub {
  margin: 0px auto;
  width: 320px;
}
</style>