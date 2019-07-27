<template>
  <div>
  <h2 v-show="firstView">请输入关键字搜索</h2>
  <h2 v-show="isLoading">请求中...</h2>
    <h2 v-show="errorMsg">{{errorMsg}}</h2>
  <div class="row" v-show="users.length>0">
    <div class="card" v-for="(item, index) in users" :key="index">
      <a :href="item.url" target="_blank">
        <img :src="item.avatarUrl" style='width: 100px'/>
      </a>
      <p class="card-text">{{item.name}}</p>
    </div>
  </div>
  </div>
</template>

<script>
    import PubSub from "pubsub-js"
    import axios from 'axios'
    export default {
      data () {
        return {
          firstView: true, // 是否显示初始页面
          isLoading: false, // 是否正在请求中
          users: [], // 用户数组
          errorMsg: ''  //错误信息
        }
      },
      mounted(){
        //订阅消息
        PubSub.subscribe("searchUser",(msg,userName) =>{
          //状态转换
          this.firstView=false;
          this.isLoading = true;
          //清空
          this.users = null;
          const  url = `https://api.github.com/search/users?q=${userName}`
          axios.get(url).then(response => {
            this.isLoading = false
            this.users = response.data.items.map( item =>({
              url: item.html_url,
              avatarUrl: item.avatar_url,
              username: item.login
            }))

          }).catch(error => {
            this.isLoading = false
            this.errorMsg="请求错误";
          })




        })
      }
    }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
