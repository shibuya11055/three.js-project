<template>
  <canvas id="myCanvas"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import * as THREE from "three";

export default defineComponent({
  name: "Index",
  setup() {
    const init = () => {
      const width = 960;
      const height = 540;

      // レンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas") || undefined,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      // シーンを作成
      const scene = new THREE.Scene();

      // カメラを作成
      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
      camera.position.set(0, 0, +1000);

      // 箱を作成
      const geometry = new THREE.BoxGeometry(500, 500, 500);
      const material = new THREE.MeshStandardMaterial({
        color: 0x0000ff,
      });
      const box = new THREE.Mesh(geometry, material);
      scene.add(box);

      // 平行光源
      const directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(1, 1, 1);
      // シーンに追加
      scene.add(directionalLight);

      // 初回実行
      renderer.render(scene, camera);
    };

    onMounted(() => {
      init();
    });

    return {};
  },
});
</script>
