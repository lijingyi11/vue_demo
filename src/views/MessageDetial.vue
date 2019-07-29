<template>
   <div>
    <p>{{$route.params.id}}</p>
    <p>id:::{{msg.id}}</p>
    <p>title:::{{msg.title}}</p>
    <p>content:::{{msg.content}}</p>
   </div>
</template>

<script>
    const msgArr =[
      {id: 1 ,title:'msg01',content:'11...'},
      {id:2,title:'msg02',content:'22...'},
      {id:3,title:'msg03',content:'33...'} ,
      {id:4,title:'msg04',content:'44...'}

    ];
    export default {
      data(){
        return {
          msg:{}
        }
      },
      mounted(){
        setTimeout(() => {
          const id = this.$route.params.id;
          this.msg = msgArr.find(msg => msg.id===id*1 );
        },1000)
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
