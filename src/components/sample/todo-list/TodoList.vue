<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <todo-add v-on:add="addTodo"></todo-add>
    <ul class="todo-list__content">
      <li v-for="todo, index in todos">
        <input
          type="checkbox"
          name=""
          value=""
          :checked="todo.isCompleted"
          @click="completed(index)">
        <span
          :class="todo.isCompleted ? 'todo-list--completed' : ''"
          @click="completed(index)">
          <b>{{ index + 1 }}.</b>{{ todo.text }}
        </span>
      </li>
    </ul>
    <div>
      <p v-show="todos.length === 0">
        恭喜！所有的事情都已完成！
      </p>
      <p v-show="todos.length !== 0">
        共 <strong>{{ todos.length }}</strong> 个待办事项。{{ completedCounts }} 个已完成，{{ notCompletedCounts }} 个未完成。
      </p>
    </div>
  </div>
</template>

<script>
import TodoAdd from './ToAdd.vue';
export default {
  name: 'TodoList',
  methods: {
    completed(index) {
      this.todos[index].isCompleted = !this.todos[index].isCompleted
    },
    addTodo(todo) {
      this.todos.push({
        text: todo,
        isCompleted: false
      })
    }
  },
  components: {
    TodoAdd
  },
  data() {
    return {
      todos: [
        {
          text: 'project 1',
          isCompleted: true
        },
        {
          text: 'project 2',
          isCompleted: false
        },
      ],
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    completedCounts() {
      return this.todos.filter(item => item.isCompleted).length
    },
    notCompletedCounts() {
      return this.todos.filter(item => !item.isCompleted).length
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
  .todo-list {
    margin: 0 auto;
    max-width: 350px;
    &__content {
      li {
        list-style: none;
        text-align: left;
        cursor: pointer;
      }
    }
    &--completed {
      text-decoration: line-through;
    }
  }
</style>
