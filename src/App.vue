<template>
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";
import TextureEditor from "@/components/TextureEditor.vue";
import MoxingViewer from "@/components/MoxingViewer.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import VueRouter from "vue-router";


const appRouter = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})



@Component({
  components: {
    Login,
    TextureEditor,
    MoxingViewer
  }
})
export default class App extends Vue {
  showLogin = true

}

</script>
