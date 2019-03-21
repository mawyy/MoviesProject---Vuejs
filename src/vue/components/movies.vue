<template>
  <div class="app mx-2">
    <div class="search-form">
      <v-layout mx-2>
        <v-flex sm2 mr-3 d-flex>
          <v-select v-model="search.attribute" :items="items"></v-select>
        </v-flex>
        <v-flex d-flex>
          <v-text-field v-model="search.value" prepend-inner-icon="search" label="Rechercher..."></v-text-field>
        </v-flex>
      </v-layout>
        
    </div>
    <div class="movie mb-3">
          <MovieItem class="mb-2" v-for="movie in movies_searched" v-bind:key="movie.id" :movie="movie" v-on:destroy="destroyMovie(movie.id)"/> 
    </div>
    
    <v-fab-transition>
      <v-btn color="primary" dark fab fixed bottom right @click="$router.push('/add-movies')"> 
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import axios from "axios";
import MovieItem from './movie_item';

export default {
  name: "movies",
  components:{
    MovieItem
  },
  computed: {
    movies_searched() {
      const attribute = this.search.attribute;
      const search = this.search.value.toLowerCase().trim();
      if (search == "") {
        return this.movies;
      }
    
      return this.movies.filter(m => {
        if (attribute === "Titre") {
          return m.title.toLowerCase().includes(search);
        }
        if (attribute === "Année") {
          return m.year == search;
        }
        if (attribute === "Directeur") {
          return m.director.name.toLowerCase().includes(search);
        }
        if (attribute === "Genre") {
          return m.genre.toLowerCase().includes(search);
        }
      })
    }
  },
  data: function () {
    return {
      search: {
        attribute: "Titre",
        value: "",
      },
      movies: [],
      items: ["Titre", "Année", "Directeur", "Genre"],
    }
  },
  created(){
    axios.get('/api/movies').then((response)=>{
      this.movies = response.data;
    })
  },
  methods: {
    destroyMovie: function(id) {
      axios.delete(`/api/movies/${id}`).then((response)=>{
        let index = this.movies.findIndex(item => item.id == id);
        if (index !== -1) {
          this.movies.splice(index, 1);
        }
      })
    }
  }
}
</script>
<style>
  .movie{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, auto));
    
  }
</style>
