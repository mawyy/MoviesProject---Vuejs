<template>
  <v-hover sm4>
      <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" width="240">
        <v-img :aspect-ratio="3/4" :src="movie.posterPath || '../../uploads/no_img.png'">
          <v-expand-transition>
            <div v-if="hover" class="d-flex transition-fast-in-fast-out caption font-weight-thin primary darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
              <div class="movie-details" >                  
                <v-layout top>
                  <div class="text-capitalize mr-2">Langue&nbsp;: {{ movie.lang }} </div>
                  <v-spacer></v-spacer>
                  <div class="text-capitalize">Genre&nbsp;: {{ movie.genre }} </div>
                </v-layout>
                <v-layout mt-4 height="10">
                  {{ movie.synopsis }}
                </v-layout>
              </div> 
            </div>
          </v-expand-transition>
        </v-img>
        <v-card-text class="pt-4" style="position: relative; height: 140px">
          <v-btn class="white--text mr-5" absolute right top fab dark normal color="primary" v-on:click="editMovie(movie.id)">
            <v-icon dark>edit</v-icon>
          </v-btn>
          <v-btn class="white--text" absolute right top fab dark small color="pink" v-on:click="$emit('destroy')">
            <v-icon dark>delete</v-icon>
          </v-btn>
          <h3 class="body-2 display-3 text-uppercase font-weight-light primary--text mb-2 mt-3">
            {{ movie.title }} ({{ movie.year }})
          </h3>
          <div class="movie-director font-weight-light caption mb-2">
            Réalisé par <span class="text-capitalize"> {{ movie.director.name }}</span>,
            {{movie.director.nationality.toLowerCase()}}, né(e) le {{ movie.director.birthdate }}
          </div>
        </v-card-text>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3" style="bottom:0">
          <v-spacer></v-spacer>
          <star-rating active-color="#ffdd00" :border-width="1" border-color="#d8d8d8" :star-size="15" :increment="0.5"
                      v-model="movie.grade" :read-only="true" :show-rating="false"></star-rating>          
        </v-card-actions>
      </v-card>
    </v-hover>

</template>

<script>
  import StarRating from 'vue-star-rating'
 
  export default {
    props: ["movie"],
    components:{
        StarRating
    },
    data: function () {
      return {
        toggleDetails: false
      }
    },
    methods:{
      editMovie: function(id) {
      this.$router.push({ name: 'edit_movie', params: { id: id } });
      },
    }
  }
</script>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
    padding: 20px;
  }
  .movieGrade {
      font-size: 1px
  }
</style>

