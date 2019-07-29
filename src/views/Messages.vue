<template>
  <div>
    <ul>
      <li v-for="(msg,index) in message " :key="msg.id">
      <!--  <a href="`/home/messages/detail/${msg.id}`"></a>-->
        <router-link :to="`/home/messages/detail/${msg.id}`">{{msg.title}}</router-link>
      </li>
    </ul>
    <hr>
    <router-view ></router-view>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          message:[]
        }
      },
      mounted(){
        setTimeout(() => {
          const msgArr =[
            {id: 1 ,title:'msg01',content:'11...'},
            {id:2,title:'msg02',content:'22...'},
            {id:3,title:'msg03',content:'33...'} ,
            {id:4,title:'msg04',content:'44...'}

          ];
          this.message = msgArr;
        },1000)
      }
    }
</script>

<style>

</style>
