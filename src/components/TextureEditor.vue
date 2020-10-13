<template>
  <v-container fluid class="fill-height">
    <v-row justify="center">
      <canvas id="texture-edit-canvas" ref="texture-edit-canvas" width="800" height="800"></canvas>
    </v-row>
    <v-row justify="center">
      <v-toolbar
          floating
          dense
          rounded
          class="d-flex justify-center shrink pl-2 pr-2"
          height="58"
      >
        <v-btn icon>
          <v-icon>mdi-undo</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-redo</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import { fabric } from "fabric";

@Component
export default class TextureEditor extends Vue {
  canvas: fabric.Canvas | null = null

  mounted() {
    this.canvas = new fabric.Canvas("texture-edit-canvas")
    this.canvas.backgroundColor = "blue"
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    });
    this.canvas.add(rect)
  }
}
</script>

<style scoped>

</style>