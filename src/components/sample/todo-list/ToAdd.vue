<template>
  <div class="addTodo">
    <input type="text" name="" class="input"
      value=""
      v-model="todo"
      @keyup.enter="addTodo">
    <button type="button" name="button"
      @click="addTodo">
        添加
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  methods: {
    addTodo () {
      if (this.todo) {
        this.$emit('add', this.todo)
        this.todo = ''
      } else {
        alert('内容不能为空')
      }
    }
  },
  data() {
    return {
      todo: ''
    };
  },
};
</script>

<style lang="scss" scoped="" type="text/css">
  input {
    min-width: 200px;
    border: 1px solid #333;
  }
</style>
