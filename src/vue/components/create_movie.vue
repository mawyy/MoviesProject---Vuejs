<template>    
    <v-card class="edit-movie mx-auto my-3" style="width: 800px;">
        <v-toolbar color="accent-4" cards dark flat>
            <v-card-title class="title font-weight-regular">Nouveau film</v-card-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-form ref="form" v-model="valid" class="pa-3 pt-4">
            <MovieForm :movie="newMovie"/>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn flat type="button" v-on:click="backToList()">Retour</v-btn>
            <v-btn color="primary" type="button" :disabled="!valid" v-on:click="createMovie()">Ajouter</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import axios from "axios";
import MovieForm from "./movie_form.vue";

export default {
    components:{
        MovieForm,
    },
    data: function () {
        return {
            newMovie: {
                title: '',
                year: '',
                lang: '',
                synopsis: '',
                genre: '',
                grade: '',
                director: {
                    name: '',
                    nationality: '',
                    birthdate: ''
                }              
            },
            valid: true 
        }
    },
    methods: {
        backToList() {
            this.$router.push({ name: 'movies' });
        },
        createMovie() {
            var form_data = new FormData();
            form_data.append('poster', this.newMovie.poster);
            delete this.newMovie.poster;
            form_data.append('movie_data', JSON.stringify(this.newMovie));
            
            axios.post(`/api/movies/`, form_data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(()=>{
                this.backToList();
            });
        }
    }
}
</script>