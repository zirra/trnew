<template>
  <div id="simulator">
    <a @click="setModal('Signin')" v-if="!authorized">signin</a><a @click="logout" v-if="authorized">sign out</a> - <a @click="setModal('Upload')">upload</a>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'authorize',
      'logout'
    ]),
    ...mapMutations([
      'setModal'
    ])
  }, 
  computed: {
    ...mapGetters([
      'authorized'
    ])
  }
}
</script>

<style>
#simulator { 
  bottom: 0;
  width: 100%;
  position: fixed;
  z-index: 20000;
  background-color: #fff;
}
</style>