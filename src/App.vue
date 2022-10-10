<template>
  <div id="app-wrap">
    <div id="app">
      <div id="nav">
        <router-link :to="{path: home}">
          <h1 id="app-title">
            PhoneBook
          </h1>
        </router-link>
      </div>
      <router-view />
    </div>
    <FooterCredits />
  </div>
</template>

<script>
import FooterCredits from './fragments/FooterCredits';
import { HOME } from './router';
export default {
  name: "App",
  components: {
    FooterCredits,
  },
  data: function () { return { home: HOME }; }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css?family=Be+Vietnam&display=swap');

body {
  background: url(assets/img/wild-sea.png);
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-family: 'Be Vietnam', sans-serif;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

a {
  color: black;
  text-decoration: none !important;
}

#app {
  background: rgba(105, 235, 208, 0.8);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 760px;
  min-width: 320px;
  min-height: 480px;

  border: 1px solid white;

  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;

  transition: 0.3s ease-in-out;

}

#app:hover {
  background: rgba(105, 235, 208, 1);
  transition: 0.3s ease-in-out;

  -webkit-box-shadow: 1px 1px 51px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 51px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 51px 0px rgba(0, 0, 0, 0.75);

  border: none;
}

#app-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
