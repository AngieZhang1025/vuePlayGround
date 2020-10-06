<template>
  <div id="app">
    <div class="menu-top">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/todo">Todos</a></li>
      </ul>
    </div>
    <a href="/">
      <img src="./assets/logo.jpg">
    </a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
    width: 100px;
    border-radius: 50%;
    border: 3px solid #f1f1f1;
}
.menu-top {
  background: #42b983;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.menu-top ul {
  height: 38px;
  margin: 0;
  padding: 0 10px;
  text-align: left;
}

.menu-top li {
  display: inline-block;
  margin-right: 10px;
  height: 38px;
  top: 9px;
  position: relative;
}

.menu-top li a {
  color: white;
}
</style>
