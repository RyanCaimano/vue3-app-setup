<template>
  <v-app>
    <v-main>
      <v-container>
        <v-btn :to="{ path: '/' }" exact>Home</v-btn>
        <v-btn :to="{ path: '/team-members' }">Team Members</v-btn>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
