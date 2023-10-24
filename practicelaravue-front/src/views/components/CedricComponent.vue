<template>
    <v-container>
        <v-text-field label="Name" v-model="form.nameVal"></v-text-field>
        <v-text-field label="Course" v-model="form.courseVal"></v-text-field>
        <v-btn color="primary" @click="submitFields" small>Submit</v-btn>
    </v-container>
</template>
  
<script>
import axios from 'axios'
export default {
    data() {
        return {
            form: {
                nameVal: null,
                courseVal: null
            }
        }
    },
    methods: {
        submitFields() {
            axios.post('http://127.0.0.1:8000/api/ced', this.form)
                .then(function (response) {
                    console.log(response.data);
                    // Handle the response as needed
                })
        }
    },
}
</script>
  