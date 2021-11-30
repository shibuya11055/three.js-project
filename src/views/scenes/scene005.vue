<template>
  <to-index-link />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToIndexLink from "../../components/ToIndexLink.vue";
import p5 from "p5";

export default defineComponent({
  name: "Scene005",
  components: {
    ToIndexLink,
  },
  setup() {
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(1080, 1080);
      };

      p.draw = () => {
        const tileCountX = p.int(p.map(p.mouseX, 0, p.width, 2, 100));
        const tileCountY = p.int(p.map(p.mouseY, 0, p.height, 2, 100));

        // const tileWidth = p.width / tileCountX;
        // const tileHeight = p.height / tileCountY;
      };
    };

    new p5(sketch);

    return {};
  },
});
</script>