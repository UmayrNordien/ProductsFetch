<template>
  <nav>
    <router-link to="/products">Products</router-link> |
    <router-link to="/admin">Admin</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(59, 59, 59);
}

body{
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 22%, rgba(242,185,255,1) 53%, rgba(87,255,177,1) 84%);
  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: rgb(59, 59, 59);
}
nav a:hover{
  font-weight: bold;
  color: rgb(152, 117, 160);
}

nav a.router-link-exact-active {
  color:rgb(58, 169, 118);
}
</style>
