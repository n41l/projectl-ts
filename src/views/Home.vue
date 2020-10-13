<template>
  <v-app id="inspire">

    <v-navigation-drawer
        absolute
        color="grey lighten-3"
        mini-variant
    >
      <v-avatar
          class="d-block text-center mx-auto mt-4"
          color="grey darken-1"
          size="36"
      ></v-avatar>

      <v-divider class="mx-3 my-5"></v-divider>

      <v-avatar
          v-for="n in 6"
          :key="n"
          class="d-block text-center mx-auto mb-9"
          color="grey lighten-1"
          size="28"
      ></v-avatar>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="fill-height">
        <texture-editor></texture-editor>
        <moxing-viewer></moxing-viewer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import TextureEditor from "@/components/TextureEditor.vue";
import MoxingViewer from "@/components/MoxingViewer.vue"; // @ is an alias to /src

@Component({
  components: {
    MoxingViewer,
    TextureEditor,
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
