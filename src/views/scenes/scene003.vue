<template>
  <to-index-link />
  <p>Y座標: {{ positionY }}</p>
  <p>X座標: {{ positionX }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ToIndexLink from "../../components/ToIndexLink.vue";
import p5 from "p5";

let stepX = 0;
let stepY = 0;

export default defineComponent({
  name: "Scene003",
  components: {
    ToIndexLink,
  },
  setup() {
    const positionY = ref(0);
    const positionX = ref(0);

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(800, 400);
        // width, heightはcreateCanvasをしてれば取れる
        p.colorMode(p.HSB, p.width, p.height, 100);
      };

      p.draw = () => {
        positionY.value = p.mouseY;
        positionX.value = p.mouseX;

        stepX = p.mouseX + 5;
        stepY = p.mouseY + 5;

        // 値がマイナスのときにフリーズするのを防ぐ
        if (p.mouseX >= 0 && p.mouseY >= 0) {
          // Y座標の合計が400に達するまで繰り返す
          for (let gridY = 0; gridY < p.height; gridY += stepY) {
            // X座標の合計が800に達するまで繰り返す
            for (let gridX = 0; gridX < p.width; gridX += stepX) {
              // 図形の色を現在のカラーモードで指定
              // 色相, 彩度, 明度
              p.fill(gridX, p.height - gridY, 100);
              // X座標, Y座標, width, height
              // x座標とY座標を変えることによってぐっとアートっぽくなる
              p.rect(gridX, gridY, stepX, stepY);
            }
          }
        }
      };
    };

    new p5(sketch);

    return {
      positionY,
      positionX,
    };
  },
});
</script>
