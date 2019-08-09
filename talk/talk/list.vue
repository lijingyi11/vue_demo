<template>
  <div class="col-md-8">
  <h3 class="reply">评论回复：</h3>
  <h2 v-show="talk.length===0">暂无评论，点击左侧添加评论！！！</h2>
  <ul class="list-group">
    <items v-for="(item,index) in talk" :key="index" :item="item" :delTalk="delTalk" :index="index"/>
  </ul>
</div>
</template>

<script>
    import  items from './items.vue'
    export default {
      props:{
        talk:Object,
        delTalk:Function
      },
      components:{
        items
      }
    }
</script>

<style>
  .reply {
    margin-top: 0px;
  }

</style>
