<template>
  <v-app>
    <v-dialog v-model="dialog" persistent width="600px" min-width="360px">
      <v-card elevation="0" color="deep-purple accent-3">
        <v-card-title class="text-center justify-center py-6">
          <v-icon size="80">mdi-account</v-icon>
        </v-card-title>
        <v-tabs v-model="tab" show-arrows background-color="deep-purple accent-3" icons-and-text dark grow>
          <v-tabs-slider color="purple darken-4"></v-tabs-slider>
          <v-tab v-for="i in tabs" :key="i">
            <v-icon large>{{ i.icon }}</v-icon>
            <div class="caption py-1">{{ i.name }}</div>
          </v-tab>
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="loginForm" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="loginEmail" :rules="loginEmailRules" label="E-mail" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="loginPassword" :append-icon="show1?'eye':'eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex" cols="12" sm="3" align="end">
                      <v-btn large block :disabled="!valid" color="success" @click="validate"> Login </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="registerForm" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="firstName" :rules="[rules.required]" label="First Name" maxlength="20" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="lastName" :rules="[rules.required]" label="Last Name" maxlength="20" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1"></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex" cols="12" sm="3" align="end">
                      <v-btn large block :disabled="!valid" color="success" @click="validate"> Register </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component"
import { Ref } from "vue-property-decorator"
import { mapMutations } from "vuex";

interface TabIcon {
  name: string;
  icon: string;
}

interface ValidateRule {
  (value: string): boolean | string;
}

interface BasicRule {
  required: ValidateRule;
  min: ValidateRule;
}

@Component({
  methods: {
    ...mapMutations(['changeLogin'])
  }
})
export default class Login extends Vue {
  dialog = true
  tab = 0
  tabs: Array<TabIcon> = [
    {name:"Login", icon:"mdi-account"},
    {name:"Register", icon:"mdi-account-outline"}
  ]
  valid = true
  firstName = ""
  lastName = ""
  email = ""
  password = ""
  verify = ""
  loginPassword = ""
  loginEmail = ""
  loginEmailRules: Array<ValidateRule> = [
    v => !!v || "Required",
    v => /.+@.+\..+/.test(v) || "E-mail must be valid"
  ]
  emailRules: Array<ValidateRule> = [
    v => !!v || "Required",
    v => /.+@.+\..+/.test(v) || "E-mail must be valid"
  ]
  show1 = false
  rules: BasicRule = {
    required: v => !!v || "Required.",
    min: v => (v && v.length >= 8) || "Min 8 characters"
  }

  @Ref('loginForm') readonly loginForm!: any

  get passwordMatch() {
    return () => this.password === this.verify || "Password must match";
  }

  validate() {
    console.log(this.loginForm)
    if (this.loginForm.validate()) {
      // submit form to server/API here...
      console.log(this.$store)
      console.log(this.$router)
      this.$store.commit('changeLogin', {Authorization: '123'})
      this.$router.push('/home')
      alert('登陆成功')
    }
  }

  reset() {
    this.loginForm.reset();
  }

  resetValidation() {
    this.loginForm.resetValidation();
  }
}
</script>

<style scoped>

</style>