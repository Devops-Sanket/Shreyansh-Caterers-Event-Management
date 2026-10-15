import { useEffect, useRef } from "react";

export default function NashikCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class for golden festive lights / floating dust
    class Firefly {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      alpha: number;
      fadeSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedY = -(Math.random() * 0.4 + 0.1); // Move upwards
        this.speedX = Math.random() * 0.4 - 0.2;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        // Warm saffron/gold color variations
        const colors = [
          "rgba(251, 191, 36, ", // amber
          "rgba(218, 113, 34, ",  // saffron
          "rgba(197, 168, 128, ", // warm gold
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.alpha += this.fadeSpeed * (Math.random() > 0.5 ? 1 : -1);

        if (this.alpha < 0.1) this.alpha = 0.1;
        if (this.alpha > 0.7) this.alpha = 0.7;

        // Reset if goes off-screen
        if (this.y < 0) {
          this.y = height;
          this.x = Math.random() * width;
        }
        if (this.x < 0 || this.x > width) {
          this.x = Math.random() * width;
        }
      }

      draw(cContext: CanvasRenderingContext2D) {
        cContext.save();
        cContext.globalAlpha = this.alpha;
        cContext.beginPath();
        cContext.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        cContext.fillStyle = `${this.color}${this.alpha})`;
        cContext.shadowBlur = 10;
        cContext.shadowColor = "rgba(218, 113, 34, 0.4)";
        cContext.fill();
        cContext.restore();
      }
    }

    // Petal class for falling marigold/rose petals (Indian wedding mood)
    class Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      tilt: number;
      tiltAngle: number;
      tiltAngleSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.size = Math.random() * 7 + 4;
        this.speedY = Math.random() * 0.8 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.tilt = Math.random() * 20;
        this.tiltAngle = Math.random() * Math.PI;
        this.tiltAngleSpeed = Math.random() * 0.02 + 0.01;
        // Petal colors: Saffron, soft orange, gold/creme
        const colors = [
          "rgba(218, 113, 34, 0.75)", // deep saffron
          "rgba(251, 146, 60, 0.7)",  // warm orange
          "rgba(250, 204, 21, 0.65)",  // bright yellow/marigold
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.tiltAngle) * 0.2;
        this.tiltAngle += this.tiltAngleSpeed;

        if (this.y > height) {
          this.y = -20;
          this.x = Math.random() * width;
        }
      }

      draw(cContext: CanvasRenderingContext2D) {
        cContext.save();
        cContext.beginPath();
        cContext.fillStyle = this.color;
        // Draw double bezier curve to represent a marigold petal
        cContext.translate(this.x, this.y);
        cContext.rotate(this.tiltAngle);
        cContext.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
        cContext.fill();
        cContext.restore();
      }
    }

    // Initialize fireflies and petals
    const firefliesCount = Math.min(35, Math.floor(width / 35));
    const petalsCount = Math.min(18, Math.floor(width / 60));
    const fireflies: Firefly[] = Array.from({ length: firefliesCount }, () => new Firefly());
    const petals: Petal[] = Array.from({ length: petalsCount }, () => new Petal());

    // Slow camera panning displacement
    let time = 0;

    const render = () => {
      time += 0.002;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw dynamic soft sky background (Nashik evening gold sunrise to sunset look)
      const skyGradient = ctx.createLinearGradient(0, 0, 0, height);
      skyGradient.addColorStop(0, "#FDFBF7"); // Pure cream silk
      skyGradient.addColorStop(0.5, "#FDF5E2"); // Gentle sun-kissed saffron gold hint
      skyGradient.addColorStop(1, "#FAF6F0"); // Pale linen white
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw subtle Trimbakeshwar landscape hills in background with slow drift
      ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.fillStyle = "#da7122"; // saffron silhouette tint

      // Far hills
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let i = 0; i <= width; i += 20) {
        const hillOffset = Math.sin(i * 0.003 + time * 0.5) * 45 + Math.cos(i * 0.008) * 20;
        ctx.lineTo(i, height * 0.75 + hillOffset);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // Middle hills
      ctx.fillStyle = "#b55512";
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let i = 0; i <= width; i += 15) {
        const hillOffset = Math.sin(i * 0.005 - time * 0.8) * 35 + Math.cos(i * 0.012) * 15;
        ctx.lineTo(i, height * 0.82 + hillOffset);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 3. Draw high-end traditional wedding arches/mandap columns in the margin far back
      ctx.save();
      ctx.globalAlpha = 0.02;
      ctx.strokeStyle = "#c29b23";
      ctx.lineWidth = 1.5;
      
      // Floating royal pillars in margins
      const pillarOffset = Math.sin(time) * 10;
      // Left pillar Frame
      ctx.strokeRect(30 + pillarOffset, -100, 40, height + 200);
      ctx.strokeRect(40 + pillarOffset, -100, 20, height + 200);
      
      // Right pillar Frame
      ctx.strokeRect(width - 70 - pillarOffset, -100, 40, height + 200);
      ctx.strokeRect(width - 60 - pillarOffset, -100, 20, height + 200);
      ctx.restore();

      // 4. Update and draw festive lights & flower petals
      fireflies.forEach((firefly) => {
        firefly.update();
        firefly.draw(ctx);
      });

      petals.forEach((petal) => {
        petal.update();
        petal.draw(ctx);
      });

      // 5. Draw subtle fairy-light connection strings at the very top of the page
      ctx.save();
      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = "rgba(194, 155, 35, 0.4)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      
      // Arc draping across the screen for traditional hangings
      const midX = width / 2;
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(midX / 2, 40, midX - 100, 60, midX, 15);
      ctx.bezierCurveTo(midX + 100, 60, width - (midX / 2), 40, width, 0);
      ctx.stroke();

      // Draw little hanging bulbs with golden light
      const bulbCount = 10;
      for (let j = 0; j <= bulbCount; j++) {
        const t = j / bulbCount;
        // Bezier formula to find corresponding visual coordinates
        const bulbX = (1 - t) * (1 - t) * (1 - t) * 0 + 3 * (1 - t) * (1 - t) * t * (midX / 2) + 3 * (1 - t) * t * t * (midX) + t * t * t * width;
        const bulbY = (1 - t) * (1 - t) * (1 - t) * 0 + 3 * (1 - t) * (1 - t) * t * 45 + 3 * (1 - t) * t * t * 25 + t * t * t * 0;
        
        ctx.fillStyle = "#da7122";
        ctx.beginPath();
        ctx.arc(bulbX, bulbY + 5, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Glow ring
        ctx.fillStyle = "rgba(253, 224, 71, 0.4)";
        ctx.beginPath();
        ctx.arc(bulbX, bulbY + 5, 6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      id="nashik_ceramic_3d_bg"
      className="fixed inset-0 w-full h-full pointer-events-none -z-50"
      ref={canvasRef}
    />
  );
}
