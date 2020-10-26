<template>
  <div class="todo">
    <!-- <h1>{{ msg }}</h1> -->
    <h2>My Todos</h2>
    <ul>
        <li
            class="item"
            v-if="!todos.length"
            v-bind:style="{ backgroundColor: tweenedCSSColor(0) }"
        >
            Example
        </li>
        <li
            v-if="todos.length"
        >
            <input class="search-box" type="text"  placeholder="key to filter" @keyup="changeKey">
        </li>
        <li
            class="item"
            v-if="!filterTodos.length && todos.length"
            v-bind:style="{ backgroundColor: tweenedCSSColor(0) }"
        >
            Nothing matched.
        </li>
        <li
            class="item"
            v-for="(todo, index) in filterTodos"
            v-bind:key="todo.id"
            v-bind:style="{ backgroundColor: tweenedCSSColor(todo.id) }">
            {{ index + 1 }} . {{ todo.text }}
            <input class="delete" type="button"  value="X" @click="removeItem(todo.id)">
        </li>
        <li>
          <input class="add" type="text"  placeholder="Type And Enter" @keyup.enter="addItem">
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VueToDo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App -- To Do List.',
      todos: [],
      searchkey: ''
    }
  },
  computed: {
    filterTodos: function () {
      const originTodos = Object.assign(this.todos)
      const keyWords = this.searchkey
      const filterTodos = originTodos.filter(todo => {
        return todo.text.indexOf(keyWords) !== -1
      })
      return filterTodos
    }
  },
  beforeMount: function () {
    this.todos = JSON.parse(localStorage.getItem('todos'))
  },
  updated: function () {
    localStorage.setItem('todos', JSON.stringify(this.todos))
    console.log(this.todos)
  },
  methods: {
    addItem: function (event) {
      const newTodo = {
        id: this.todos.length + 1,
        text: event.target.value
      }
      this.todos.push(newTodo)
      event.target.value = ''
    },
    tweenedCSSColor: function (index) {
      const colors = [
        '#51e2f5', '#9df9ef', '#edf756', '#ffa8B6',
        '#a28089', '#F95738', '#F4D35E', '#EBEBD3'
      ]
      // selecting random color
      const randomColor = colors[index % colors.length]
      return randomColor
    },
    removeItem: function (id) {
      const index = id - 1
      this.todos.splice(index, 1)
    },
    changeKey: function (event) {
      this.searchkey = event.target.value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  width: 500px;
  margin: 20px auto;
  list-style-type: none;
  padding: 0;
}
li {
  text-align: left;
  margin: 0 10px;
}
.item {
    padding-left: 20px;
}
.item:hover{
    opacity: 0.8;
}
.add {
    width: calc(100% - 8px);
}
.search-box {
    width: calc(100% - 8px);
    margin-bottom: 10px;
}
.delete {
    float: right;
}
a {
  color: #42b983;
}
</style>
