<template>
    <div v-if="editingMovie == null">
        <p>Pas de film avec l'ID {{ this.$route.params.id }}</p>
        <v-btn flat type="button" v-on:click="backToList()">Retour</v-btn>
    </div>
    <div v-else class="edit-movie">
        <v-card class="edit-movie mx-auto my-3" style="width: 800px;">
            <v-toolbar color="accent-4" cards dark flat>
                <v-card-title class="title font-weight-regular">Modifier un film</v-card-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-form class="pa-3 pt-4" ref="form" v-model="valid">
                <MovieForm :movie="editingMovie"/>
            </v-form>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn flat type="button" v-on:click="backToList()">Retour</v-btn>
                <v-btn color="primary" type="button" :disabled="!valid" v-on:click="update()">Enregistrer</v-btn>
            </v-card-actions>
        </v-card>
    </div>
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
            editingMovie: null,
            valid: true 
        }
    },
    created(){
        axios.get(`/api/movies/${this.$route.params.id}`).then((response)=>{
            this.editingMovie = response.data;
        });
    },
    methods: {
        backToList() {
            this.$router.push({ name: 'movies' });
        },
        update() {
            var form_data = new FormData();

            form_data.append('poster', this.editingMovie.poster);
            delete this.editingMovie.poster;
            form_data.append('movie_data', JSON.stringify(this.editingMovie));

            axios.post(`/api/movies/${this.editingMovie.id}`, form_data, {
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