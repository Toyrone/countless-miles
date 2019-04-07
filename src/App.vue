<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang='scss'>
@import "./assets/scss/main.scss";

#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// #nav a.router-link-exact-active {
//   color: #42b983;
// }
</style>
