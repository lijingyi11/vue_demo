<template>
  <ul>
    <li v-for="(msg,index) in message " :key="msg.id">
      <a href="#">{{msg.title}}</a>
    </li>
  </ul>
</template>

<script>
    export default {
      data(){
        return{
          message:[

          ]
        }
      },
      mounted(){
        setTimeout(() => {
          const msgArr =[
            {id:'01',title:'msg01'},
            {id:'02',title:'msg02'},
            {id:'03',title:'msg03'} ,
            {id:'04',title:'msg04'}

          ];
          this.message = msgArr;
        },1000)
      }
    }
</script>

<style>

</style>
