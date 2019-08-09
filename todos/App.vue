<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :add="add"/>
      <!--<TodoBody :todos="todos" :del="del"/>-->
      <TodoBody :todos="todos" />
     <!-- <TodoFooter :todos="todos" :selectAllTodo="selectAllTodo" :delCheckTodo="delCheckTodo"/>-->
      <TodoFooter :todos="todos" :selectAllTodo="selectAllTodo" :delCheckTodo="delCheckTodo"/>

    </div>
  </div>
</template>

<script>
    import  PubSub from "pubsub-js"
    import TodoHeader from "./todos/todo_header"
    import TodoBody from "./todos/todo_body"
    import TodoFooter from "./todos/todo_footer"
    export default {
      data(){
        return{
                //读取文件中内容
                //[{name:'吃饭',isCheck:false},{name:'睡觉',isCheck:false},{name:'打豆豆',isCheck:true}]
          todos:JSON.parse(window.localStorage.getItem("todos_key") || '[]')
        }
      },
      components:{
        TodoHeader,
        TodoBody,
        TodoFooter
      },
      watch:{//深度监视
        todos:{
          deep:true,
          handler:function (value) {
            window.localStorage.setItem("todos_key",JSON.stringify(value));
          }
        }

      },
      mounted(){
        //订阅消息
        PubSub.subscribe("del",(msg,data) => {
          console.info("-----订阅消息------------");
          this.todos.splice(data,1);

        })
      },
      methods:{
        add(todo){
          this.todos.unshift(todo);
        },
        del(index){
          this.todos.splice(index,1);
        },
        //全选
        selectAllTodo(value){
          this.todos.filter(todo => todo.isCheck=value);
        },
        //删除所有已完成的
        delCheckTodo(){
         this.todos =  this.todos.filter(todo => !todo.isCheck)
        }
      }
    }
</script>

<style>

  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }



</style>
