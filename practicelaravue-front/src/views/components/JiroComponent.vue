<template>
    <v-container>
        <v-row no-gutters>
            <v-col class="grey lighten-5">
                <v-card class="pa-2" outlined tile>
                    <v-card-title>
                        Input Fields
                    </v-card-title>
                    <v-card-text>
                        <v-text-field outlined dense label="Name" v-model="form.name">

                        </v-text-field>
                        <v-text-field outlined dense label="Contact" v-model="form.contact">

                        </v-text-field>
                        <v-text-field outlined dense label="Address" v-model="form.address">

                        </v-text-field>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="btnSubmitFields" small >Submit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col class="grey lighten-5">
                <v-card class="pa-2" outlined tile>

                </v-card>
            </v-col>
            <v-col class="grey lighten-5">
                <v-card class="pa-2" outlined tile>

                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn color="error">Take Me to Kenneth Component</v-btn>
            </v-col>
            <v-col>
                <v-btn color="warning" @click="linkCed()">Take Me to Cedric Component</v-btn>
            </v-col>
            <v-col>
                <v-btn @click="alertSomething()" color="primary">Jiro's Component</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import swal from 'sweetalert2';

import { mapGetters } from 'vuex';
export default {
    // Dito sa data() diyan ka maglalagay ng mga variable
    data() {
        return {
            form: {
                name: null,
                contact: null,
                address: null
            },
            isFormEmpty: true,
        }
    },

    // dito sa method, dito ka maglalagay ng mga functions
    methods: {
        btnSubmitFields() {
            /** 
             itong payload, gagamitin niyo sa vuex (this.$store.dispatch)
             tapos yung .dispatch ayan yung ginagamit sa 'actions' sa vuex niyo
             sa may (store na folder)
             * */
            let payload = {
                name: this.form.name,
                contact: this.form.contact,
                address: this.form.address
            };
            // itong "submitFields" ayan yung function na nasa actions niyo
            this.$store.dispatch("addJiroInfo", payload)
                .then((response) => {
                    // debugger
                    // if (response.data == "404" || response.data == "500") {
                    //     swal.fire({
                    //         text: "Something Went Wrong",
                    //         icon: "error",
                    //     });
                    //     return;
                    // }
                    swal.fire({
                        text: "Added Successfully!",
                        icon: "success",
                    })
                    this.clearFields();
                }).catch((error) => {
                    console.error(error);
                })
        },

        alertSomething() {
            swal.fire({
                text: "Added Successfully!",
                icon: "success",
            })
        },

        clearFields() {
            this.form.name = null,
                this.form.address = null,
                this.form.contact = null
        },

        linkCed() {
            this.$router.push({ path: "/ced" })
        }
    },

    // itong computed dito tatawagin yung mga getters mo 
    computed: {
        ...mapGetters([
            "GET_NEW_JIRO_INFO"
        ]),
    },

    watch: {
        form: {
            deep: true,
            handler(newFormValue) {
                // Check if any property in the form is null
                // this.isFormEmpty = Object.values(newFormValue).some(value => value === null);
                this.isFormEmpty = Object.values(newFormValue).some(value => value === null || value === '');
            }
        }
    }
}
</script>