<template>
  <canvas id="myCanvas"></canvas>
  <to-index-link />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import * as THREE from "three";
import ToIndexLink from "../components/ToIndexLink.vue";
import { getRenderer } from "../modules";

export default defineComponent({
  name: "Scene001",
  components: {
    ToIndexLink,
  },
  setup() {
    const init = () => {
      // レンダラーを作成
      const { width, height, renderer } = getRenderer();

      // シーンを作成
      const scene = new THREE.Scene();

      // カメラを作成
      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
      camera.position.set(0, 0, +1500);

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

      tick();

      function tick() {
        requestAnimationFrame(tick);

        // 箱を回転させる
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;

        // レンダリング
        renderer.render(scene, camera);
      }
    };

    onMounted(() => {
      init();
    });

    return {};
  },
});
</script>
