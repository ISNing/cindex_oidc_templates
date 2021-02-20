<template>
  <div>
    <v-img
        height="100"
        src="https://api.paugram.com/bing/"
    />
    <v-card-title>Create your application:</v-card-title>
    <v-card-text>
      <v-form
          ref="form"
          v-model="form.valid"
      >
        <v-text-field
            outlined
            dense
            v-model="form.client_name"
            :rules="usernameRules"
            label="Client Name"
            required
        />
        <v-text-field
            outlined
            dense
            v-model="form.client_uri"
            :rules="usernameRules"
            label="Client Uri"
            required
        />
        <v-text-field
            outlined
            dense
            v-model="form.scope"
            :rules="usernameRules"
            label="Allowed Scope"
            required
        />
        <v-text-field
            outlined
            dense
            v-model="form.redirect_uri"
            :rules="usernameRules"
            label="Redirect Uri"
            required
        />
        <v-text-field
              outlined
              dense
              v-model="form.grant_type"
              :rules="usernameRules"
              label="Allowed Grant Type"
              required
        />
        <v-text-field
            outlined
            dense
            v-model="form.response_type"
            :rules="usernameRules"
            label="Allowed Response Type"
            required
        />
        <v-text-field
            outlined
            dense
            v-model="form.grant_type"
            :rules="usernameRules"
            label="Allowed Grant Type"
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
            @click:append="showPass = !showPass"
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
  name: "LoginContent",
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
          operation: "login",
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
