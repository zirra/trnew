<template>
  <div id="app">
    <modal-view v-if="modalActive"/>
    <div id="nav">
      <p>{{theDate}} - {{userType}} - {{userName}} - {{authorized}}</p>
      <br/>
      <p>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </p>
    </div>
    <router-view/>
    <simulator-view />
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Simulator from '@/components/Simulator'
import Modal from '@/components/Modal'

export default {
  components: {
    'simulator-view': Simulator,
    'modal-view': Modal
  },
  mounted () {
    this.amAuthorized()
  },
  methods: {
    ...mapActions([
      'amAuthorized'
    ])
  },
  computed: {
    ...mapGetters([
      'theDate',
      'userType',
      'authorized',
      'modalActive',
      'userName'
    ])
  }
}
</script>

<style>
html, body { width: 100%; height: 100%;}
* { padding: 0; margin: 0}
* {padding: 0; margin: 0; box-sizing: border-box;}

.centered { text-align: center; }
.lefted { text-align: left; }
.righted { text-align: right; }

#app {
  width: 100%;
  height: 100%;
  font-family: 'Barlow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
  text-align: center;
  color: #2c3e50;
}

h1, h2, h3, h4 {
  text-transform: uppercase;
  font-weight: 400;
}

input {
  width: 100%;
  max-width: 320px;
  padding: 8px 5px;
  border: 0px;
  border-bottom: solid 1px #999;
  font-size: 1em;
  color: #989898;
}

button {
  width: 100%;
  max-width: 320px;
  margin-top: 8px;
  padding: 8px 5px;
  border: solid 1px #878787;
  font-size: 1em;
  color: #989898;
  text-transform: capitalize;
}

select {
  width: 100%;
  max-width: 320px;
  padding: 8px 5px;
  background-color: rgba(0,0,0,0);
  text-transform: capitalize;
  border-bottom: solid 1px #999;
  font-size: 1em;
  color: #404040;
}

input:focus { 
  border: 0px;
  outline: none;
  background-color: #eee;
  border-bottom: solid 1px #999;
}
.rounder {
  border-radius: 20px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #dd0033;
}

.txtred {
  color: #dd0033;
}

.btn {
  background-color: rgba(255, 0, 0, 1);
  color: #fff;
}
</style>
