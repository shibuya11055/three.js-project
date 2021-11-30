<template>
  <to-index-link />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToIndexLink from "../../components/ToIndexLink.vue";
import p5 from "p5";

export default defineComponent({
  name: "Test",
  components: {
    ToIndexLink,
  },
  setup() {
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(1080, 1080);
        p.noCursor();
        p.frameRate(60);
      };

      p.draw = () => {
        p.colorMode(p.RGB);
        const frameCount = p.frameCount;

        p.background(220, 235, 130);

        p.beginShape(p.TRIANGLE_STRIP);
        if (frameCount / 100 < 360) {
          for (let angle = 0; angle <= 360; angle += frameCount / 50) {
            p.fill(255);

            p.vertex(250, 20);
            p.vertex(750, 20);
            p.vertex(250, p.random(frameCount));
            p.vertex(750, p.random(frameCount));
          }
        } else {
          p.vertex(p.random(frameCount), 20);
          p.vertex(p.random(frameCount), 20);
          p.vertex(85, p.random(frameCount));
          p.vertex(p.random(frameCount), p.random(frameCount));
        }
        // p.vertex(frameCount, 100);
        p.endShape(p.CLOSE);
      };
    };

    new p5(sketch);

    return {};
  },
});
</script>
