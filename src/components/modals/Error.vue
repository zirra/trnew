<template>
  <div class="error-out">
    <br />
    <h1 class="centered">upload modal</h1>
    <p @click="setModal">close</p>
  </div>
</template>

<script>
export default {
  name: 'error-modal-view'
}
</script>

<style>
.error-out {
  margin:0px auto;
  background-color: #fff;
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
}

.error-out p {
  margin: 2px 4px;
  padding: 2px 4px;
}
</style>