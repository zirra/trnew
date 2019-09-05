<template>
  <div class="profile">
    <div class="profile-hero">
      <div style="text-align: center;">
        <img src="https://breaking-in.s3-us-west-2.amazonaws.com/users/whitechocolate.jpg" style="width:50%;" />
      </div>
      <div>
        <div style="width:100%;">
          <h3 style="text-transform:none;">{{userName}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'profile-view',
  computed: {
    ...mapGetters([
      'userName'
    ])
  }
}
</script>

<style>

</style>