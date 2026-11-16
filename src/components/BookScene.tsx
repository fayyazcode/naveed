import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BookScene() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 8.8);
    scene.add(new THREE.AmbientLight(0xffffff, 2.2));
    const light = new THREE.DirectionalLight(0xffffff, 3.5);
    light.position.set(-3, 5, 5);
    scene.add(light);
    const canvas = document.createElement("canvas");
    canvas.width = 900;
    canvas.height = 1200;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#ee5d35";
    ctx.fillRect(0, 0, 900, 1200);
    ctx.strokeStyle = "#f8eeda";
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, 810, 1110);
    ctx.fillStyle = "#f8eeda";
    ctx.textAlign = "center";
    ctx.font = "20px sans-serif";
    ctx.fillText("S T O R Y P R I N T   E D I T I O N S", 450, 110);
    ctx.font = "105px Georgia";
    ["A story", "only you", "can tell."].forEach((t, i) => ctx.fillText(t, 450, 310 + i * 125));
    ctx.lineWidth = 3;
    for (let i = 0; i < 9; i++) {
      ctx.beginPath();
      ctx.ellipse(450, 830, 95 + i * 24, 130 + i * 9, Math.PI / 5, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.font = "19px sans-serif";
    ctx.fillText("YOUR NAME. YOUR WORDS. YOUR WORLD.", 450, 1110);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const cover = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.78 });
    const paper = new THREE.MeshStandardMaterial({ color: "#eee7d7", roughness: 1 });
    const spine = new THREE.MeshStandardMaterial({ color: "#bb3d22", roughness: 0.75 });
    const book = new THREE.Group();
    const pages = new THREE.Mesh(new THREE.BoxGeometry(2.48, 3.46, 0.35), [
      paper,
      paper,
      paper,
      paper,
      cover,
      spine,
    ]);
    book.add(pages);
    for (const z of [-0.22, 0.22]) {
      const c = new THREE.Mesh(new THREE.BoxGeometry(2.6, 3.6, 0.065), [
        spine,
        spine,
        spine,
        spine,
        cover,
        spine,
      ]);
      c.position.z = z;
      book.add(c);
    }
    const binding = new THREE.Mesh(new THREE.BoxGeometry(0.13, 3.6, 0.5), spine);
    binding.position.x = -1.25;
    book.add(binding);
    for (let i = 0; i < 26; i++) {
      const line = new THREE.Mesh(
        new THREE.BoxGeometry(2.45, 0.003, 0.36),
        new THREE.MeshStandardMaterial({ color: "#c8bda7" }),
      );
      line.position.y = -1.7 + i * 0.133;
      book.add(line);
    }
    book.rotation.set(-0.1, -0.42, -0.12);
    scene.add(book);
    let mx = 0,
      my = 0,
      frame = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    };
    el.addEventListener("pointermove", pointer);
    const resize = () => {
      const w = el.clientWidth,
        h = el.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(el);
    resize();
    const clock = new THREE.Clock();
    const render = () => {
      const t = clock.getElapsedTime();
      if (!reduced) {
        book.rotation.y += (-0.42 + mx * 0.5 - book.rotation.y) * 0.04;
        book.rotation.x += (-0.1 + my * 0.2 - book.rotation.x) * 0.04;
        book.position.y = Math.sin(t * 0.7) * 0.09;
      }
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      el.removeEventListener("pointermove", pointer);
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          o.geometry.dispose();
          const materials = Array.isArray(o.material) ? o.material : [o.material];
          materials.forEach((m) => m.dispose());
        }
      });
      texture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);
  return (
    <div
      ref={host}
      className="book-scene"
      role="img"
      aria-label="Interactive orange book titled A story only you can tell"
    >
      <div className="book-fallback">
        A story
        <br />
        only you
        <br />
        can tell.
      </div>
    </div>
  );
}
