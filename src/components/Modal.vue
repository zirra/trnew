<template>
  <div id="modal-overlay">
    <div class="modal-main">
      <div v-bind:is="modalState"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Signin from '@/components/modals/Signin'
import Upload from '@/components/modals/Upload'
export default {
  name: 'modal-view',
  components: {
    Signin,
    Upload
  },
  computed: {
    ...mapGetters([
      'modalState'
    ])
  }
}
</script>

<style>
#modal-overlay{
  position: absolute;
  top: 0;
  background-color: rgba(0,0,0,.85);
  width: 100%;
  height: 100%;
  z-index: 10000;
}

.modal-content {
  width: 96%;
  max-width: 480px;
  margin: 0px auto;
  background-color: #fff;
}

.modal-main {
  margin-top: 120px;
  width: 100%;
}
</style>