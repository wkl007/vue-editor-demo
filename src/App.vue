<template>
  <div id="app">
    <div id="nav">
      <router-link to="/tinymce">Tinymce</router-link> |
      <router-link to="/wangEditor">WangEditor</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    color: #2c3e50;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
