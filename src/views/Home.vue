<template>
    <div>
      <h2>home</h2>
      <div>
        <ul class="nav nav-tabs">
          <li><router-link to="/home/news">News</router-link></li>
          <li><router-link to="/home/messages">Message</router-link></li>
        </ul>
      </div>
      <!--  keep-alive 缓存路由组件对象keep-alive -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>
    export default {}
</script>

<style>

</style>
