<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="userName"/>
      <button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
    import PubSub from "pubsub-js"
    export default {
      data(){
        return{
          userName:""
        }
      },
      methods:{
        searchUser(){
          //发布消息
          if(this.userName){
            PubSub.publish("searchUser",this.userName);
          }else{
            alert("请输入userName");
          }
        }
      }

    }
</script>

<style>

</style>
