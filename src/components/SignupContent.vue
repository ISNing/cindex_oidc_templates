<template>
    <div>
        <v-img
                height="100"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        />
<!--        <h2>{[ user.username ]}:</h2>-->
<!--        <h3>The application <strong>{[ grant.client.client_name ]}</strong> is requesting:-->
<!--            <strong>{[ grant.request.scope ]}</strong>-->
<!--        </h3>-->
<!--        {% if user %}-->
<!--        {% endif %}-->
        {% if not user %}
        <h2>You haven't logged in. Log in with:</h2>
        <v-card-title>Signup</v-card-title>
        <v-card-text>
            <v-form
                    ref="form"
                    v-model="form.valid"
            >
                <v-text-field
                        outlined
                        dense
                        v-model="form.username"
                        :rules="usernameRules"
                        label="Name"
                        required
                />
                <v-text-field
                        outlined
                        dense
                        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                        v-model="form.password"
                        :type="showPass ? 'text' : 'password'"
                        :rules="passwordRules"
                        label="Password"
                        required
                />
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn
                    :disabled="!form.valid"
                    color="primary"
                    @click="submit"
            >
                Submit
            </v-btn>
        </v-card-actions>
        {% endif %}
        <v-snackbar
                v-model="snackbar.show"
                :timeout="6000"
        >
            {{ snackbar.text }}
        </v-snackbar>
    </div>
</template>

<script>
    import axios from "axios";
    import utils from "../utils"

    export default {
        name: "SignupContent",
        data() {
            return {
                usernameRules: [
                    v => !!v || "Username is required"
                ],
                passwordRules: [
                    v => !!v || "Password is required"
                ],
                form: {
                    valid: false,
                    username: "",
                    password: ""
                },
                snackbar: {
                    show: false,
                    text: ""
                },
                showPass: false
            };
        },
        methods: {
            createError(reason) {
                this.snackbar.text = reason;
                this.snackbar.show = true;
            },
            submit() {
                if(this.$refs.form.validate()) {
                    axios.post("users/" + this.form.username,{
                            operation: "signup",
                            password: this.form.password
                        }).catch((reason) => {
                        this.createError(reason)
                    }).then((resp) => {
                        console.log("resp:" +  resp)
                        if(resp === undefined) {
                            this.createError("Error");
                            return;
                        }
                        if(resp.data.success) {
                            let next_page = utils.GetQueryString("next");
                            if(next_page !== "") {
                                window.location = next_page
                            }
                        }
                    });
                } else {
                    this.$refs.form.reset()
                }
            }
        },
    };
</script>

<style scoped>
</style>