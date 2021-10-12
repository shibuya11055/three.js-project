import { WebGLRenderer } from "three";

export const getRenderer = () => {
  const renderer = new WebGLRenderer({
    canvas: document.querySelector("#myCanvas") || undefined,
  });

  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  return {
    width,
    height,
    renderer
  }
}