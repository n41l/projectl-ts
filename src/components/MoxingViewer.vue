<template>
  <v-navigation-drawer fixed floating right width="300">
    <canvas id="main-canvas" ref="canvas" height="300" width="300"/>
  </v-navigation-drawer>
</template>

<script lang="ts">
import * as THREE from 'three'
import Vue from 'vue'
import { Scene } from "three"
import Component from "vue-class-component"

@Component
export default class MoxingViewer extends Vue {
  canvas: HTMLCanvasElement | null = null
  scene: Scene | null = null

  mounted(): void {
    console.log("mounted")
    console.log(document.getElementById("main-canvas"))
    this.canvas = document.getElementById("main-canvas") as HTMLCanvasElement

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({canvas: this.canvas});
    renderer.setSize( this.canvas.width, this.canvas.height );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };

    animate();
  }
}

</script>

<style scoped>
#main-canvas {
  border-radius: 5px;
}
</style>