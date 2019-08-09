<template>
  <div class="container">
    <userSearch/>
    <userList/>

  </div>
</template>

<script>
  import userSearch from "./users/user_search"
  import userList from "./users/user_list"
    export default {
      components:{
        userSearch,
        userList
      }
    }
</script>

<style>

</style>
