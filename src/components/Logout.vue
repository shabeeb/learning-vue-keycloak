<template>
  <div class="hello">
    <button @click="logout">Logout</button>
    <button @click="isAuthenticated">isAuthenticated -- {{isAuthenticated()}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { KeycloakService } from '../keycloakservice';
@Component
export default class HelloWorld extends Vue {
  //   @Prop() private msg!: string;
  logout() {
    console.log('logout');
    KeycloakService.logout();
  }

  isAuthenticated() {
    console.log('isAuthenticated');
    return KeycloakService.isAuthenticated();
    console.log('isAuthenticated', KeycloakService.isAuthenticated());
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
