<template>
    <v-app id="inspire">
    <form>
        <v-text-field v-model="movie.title" :counter="50" box label="Titre*" :rules="required"></v-text-field>

        <v-text-field v-model="movie.year" :counter="4" box label="Année de sortie*" type="number" :rules="required"></v-text-field>

        <v-text-field v-model="movie.lang" :counter="20" box label="Langue*" :rules="required"></v-text-field>

        <v-text-field v-model="movie.genre" :counter="40" box label="Genre*" :rules="required"></v-text-field>

        <v-divider></v-divider>

        <h3 class="subheading font-weight-bold my-3">Réalisateur</h3>

        <v-layout>
            <v-text-field v-model="movie.director.name" :counter="20" box label="Nom*" :rules="required"></v-text-field>
            
            <v-flex mx-2>
                <v-menu :close-on-content-click="false" v-model="directorBirthDate" :nudge-right="40" lazy
                        transition="scale-transition" offset-y full-width min-width="290px">
                    <v-text-field slot="activator" v-model="movie.director.birthdate" box label='Date de naissance*'
                        hint="Format JJ/MM/AAAA" persistent-hint @blur="date = parseDate(dateFormatted)" :rules="required"></v-text-field>
                    <v-date-picker v-model="date"></v-date-picker>
                </v-menu>
            </v-flex>
            
            <v-text-field v-model="movie.director.nationality" :counter="20" box label="Nationalité*" :rules="required"></v-text-field>
        </v-layout>

        <v-divider></v-divider>

        <v-textarea class="mt-4" v-model="movie.synopsis" auto-grow box label="Synopsis" rows="1"></v-textarea>

        <v-layout><h3 class="subheading font-weight-bold mx-3">Note</h3>      
        <star-rating class="mx-2 mb-4" active-color="#ffdd00" :border-width="1" border-color="#d8d8d8" 
                    v-bind:star-size="40" v-bind:increment="0.5" v-model="movie.grade" :show-rating="true"></star-rating> 
        </v-layout>
        <v-divider></v-divider>

        <v-layout my-3>
            <v-flex mx-3>
                <h3 class="subheading font-weight-bold my-2">Poster actuel </h3>
                <v-img width="150px" :src="movie.posterPath || '../../uploads/no_img.png'"></v-img>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex>
                <h3 class="subheading font-weight-bold my-2">Charger un poster</h3>
                <input type="file" @change="previewFiles" ref="inputFile">
            </v-flex>            
        </v-layout>
    </form>
  </v-app>   
</template>

<script>
    import StarRating from 'vue-star-rating'

    export default {
        props:['movie'],
        components:{
            StarRating
        },
        data: vm => ({
            title: '',
            year: '',
            lang: '',
            genre: '',
            grade: '',
            synopsis: '',
            name: '',
            nationality: '',
            date: new Date().toISOString().substr(0, 10),
            dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
            directorBirthDate: false,
            required: [
                (v) => !!v || 'Champ obligatoire',
            ],
        }),
        watch: {
            date (val) {
            this.dateFormatted = this.formatDate(this.date),
            this.movie.director.birthdate = this.dateFormatted
            }
        },
        methods: {
            previewFiles(event) {
                this.movie.poster = this.$refs.inputFile.files[0]
            },
            formatDate (date) {
                if (!date) return null

                const [year, month, day] = date.split('-')
                    return `${day}/${month}/${year}`
            },
            parseDate (date) {
                if (!date) return null

                const [day, month, year] = date.split('/')
                return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            }
        }
    } 
</script>

<style>
    .grade {
        font-size: 40px
    }
</style>
