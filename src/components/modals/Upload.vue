<template>
  <div class="modal-content">
    <div class="uploader">
      <br />
      <h1 class="centered">upload modal</h1>
      <p @click="setModal">close</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'upload-vue',
  methods: {
    ...mapMutations([
      'setModal'
    ])
  }
}
</script>

<style>
.uploader {
  margin:0px auto;
  background-color: #fff;
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
}

.uploader p {
  margin: 2px 4px;
  padding: 2px 4px;
}
</style>