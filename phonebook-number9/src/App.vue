<template>
<div id="app-wrap">
  <div id="app">
    <div id="nav">
      <router-link to="/"><h1>PhoneBook</h1></router-link>
    </div>
    <router-view/>
  </div>
</div>
</template>

<style>
#app {
@import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro&display=swap');

  font-family: 'Source Serif Pro', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 1px solid black;
  max-width: 760px;
  min-width: 320px;
}

#app-wrap {
  display: flex;
    align-items: center;
    justify-content: center;
}
</style>
