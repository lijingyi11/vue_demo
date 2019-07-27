<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
          <span>已完成{{checkTodo}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" @click="delTodo">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
      props:{
        todos:Array,
        selectAllTodo:Function,
        delCheckTodo:Function
      },
      computed:{//计算属性
        checkTodo(){
          //计算  todos 数组中 数组对象中ischeck=true的个数
          //this.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0) ,0)
          return this.todos.reduce((preTotal,todo)=> preTotal+(todo.isCheck?1:0),0 );
        },
        checkAll:{

          get () {//决定是否勾选
            return this.checkTodo === this.todos.length && this.checkTodo>0;
          },

          set(value){//全选或者全不选
            this.selectAllTodo(value);
          }

        }

      },
      methods:{
        delTodo(){
          console.log("..............");
          this.delCheckTodo()
        }
      }
    }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
