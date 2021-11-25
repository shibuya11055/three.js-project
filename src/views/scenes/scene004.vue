<template>
  <to-index-link />
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
    const sketch = (p: p5) => {
      let segmentCount = 360;

      p.setup = () => {
        p.createCanvas(1080, 1080);
        p.noCursor();
        p.frameRate(20);
      };

      p.draw = () => {
        p.colorMode(p.HSB, 360, 20, 50);
        p.background(360, 0, p.height);

        let angleStep = 360 / segmentCount;

        p.beginShape(p.TRIANGLE_FAN);
        p.vertex(p.width / 2, p.height / 2);

        let isEven = p.random(1, 2) % 2 === 0;

        let radius = p.random(p.frameCount / 2, p.frameCount / 50);
        let radius2 = p.random(p.frameCount / 2, p.frameCount / 50);

        for (let angle = 0; angle <= 360; angle += angleStep) {
          let vx = p.width / 2 + p.cos(p.radians(angle)) * radius;
          let vy = p.height / 2 + p.sin(p.radians(angle)) * radius2;

          p.vertex(vx, vy);
          p.fill(angle, 0, 400);
        }

        p.endShape();
      };

      p.keyPressed = () => {
        switch (p.key) {
          case "1":
            segmentCount = 360;
            break;
          case "2":
            segmentCount = 45;
            break;
        }
      };
    };

    new p5(sketch);

    return {};
  },
});
</script>
