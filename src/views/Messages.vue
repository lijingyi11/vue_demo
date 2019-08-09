<template>
  <div>
    <ul>
      <li v-for="(msg,index) in message " :key="msg.id">
      <!--  <a href="`/home/messages/detail/${msg.id}`"></a>-->
        <!--<router-link :to="`/home/messages/detail/${msg.id}`">{{msg.name}}</router-link>-->
        <router-link :to="`/home/messages/detail/${msg.id}`">{{msg.name}}</router-link>
      </li>
    </ul>
    <hr>
    <router-view ></router-view>
  </div>
</template>

<script>
  import PubSub from "pubsub-js"
    export default {
      data(){
        return{
          message:[]
        }
      },
      mounted(){
        //var message =[];
       this.axios.get('/todos/getTodoList')
          .then(response =>{
            //console.log(response.data);
           var message = response.data;
            this.message = message;
            PubSub.publish("sendMessage",this.message );

          })
          .catch(function (error) {
            console.log(error);
          });


      }
    }
</script>

<style>

</style>
