<template>
<div>
  <v-app>
    <div id="e3" style="margin: 0;" class="grey lighten-3">
      <v-toolbar color="primary" dark>
        <v-toolbar-title class="text-uppercase">Mon catalogue de films</v-toolbar-title>
      </v-toolbar>
    </div>
    <router-view></router-view>
    <v-footer class="pa-3 font-weight-regular font-italic" color="primary" dark>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }} - Marie Aude WYY</div>
    </v-footer>
  </v-app>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movies: []
    }
  },
  computed: {
    lastId: function () {
      return this.movies[this.movies.length].id;
    }
  }
}
</script>