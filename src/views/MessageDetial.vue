<template>
   <div>
    <p>{{$route.params.id}}</p>
    <p>id:::{{msg.id}}</p>
    <p>title:::{{msg.name}}</p>
   </div>
</template>

<script>
    var msgArr = [];
    export default {

      data(){
        return {
          msg:{}
        }
      },
      mounted(){
          const id = this.$route.params.id;
          //console.log(id);
          //console.log(this.message);

          //this.msg = this.message.find(msg => msg.id===id*1 );
        //订阅消息
        PubSub.subscribe("sendMessage",(msg,message) =>{
          msgArr = message;
          this.msg = message.find(msg => msg.id===id*1 );
        })
      },
      watch:{
        $route:function (value) {
          const id = value.params.id;
           this.msg = msgArr.find(msg => msg.id===id*1 );
        }
      }
    }
</script>

<style>

</style>
