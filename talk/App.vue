<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对VUE的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <add :addTalk="addTalk" />
      <list :talk="talk"  :delTalk="delTalk"/>

    </div>
  </div>
</template>

<script>
  //1、引入
  import add from './talk/add.vue'
  import list from './talk/list.vue'

    export default {
      data(){
        return{
          talk:[
            {
            name:'齐天大圣',
            content:'我老大'
            },{
              name:'牛魔王',
              content:'我老三'
            },{
              name:'猪八戒',
              content:'猴哥，师傅被妖怪抓走了'
            },
          ]
        }
      },
      methods:{
        addTalk(tal){
          //把数据添加如数组中
          this.talk.unshift(tal);
        },
        delTalk(index){
          this.talk.splice(index,1)
        }
      }
      ,
      components:{
        add,
        list
      }
    }
</script>

<style >

</style>
