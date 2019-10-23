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
@import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro&display=swap');
 @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

#app {
  background: url('assets/img/ivan-gromov.jpg');
  /* font-family: 'Source Serif Pro', serif; */
    font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* border: 1px solid black; */
  max-width: 760px;
  min-width: 320px;
  min-height: 480px;

  -webkit-box-shadow: 1px 1px 51px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 1px 51px 0px rgba(0,0,0,0.75);
box-shadow: 1px 1px 51px 0px rgba(0,0,0,0.75);
}

#app-wrap {
  display: flex;
    align-items: center;
    justify-content: center;
}
</style>
