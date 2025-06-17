document.addEventListener("DOMContentLoaded", function () {
  const shadow = document.createElement("div");
  shadow.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        background: rgba(15, 18, 201, 0.18)   ;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 30px rgba(252, 253, 253, 0.96);
    `;

  document.body.appendChild(shadow);

  // Mouse tracking
  let mouseX = 0;
  let mouseY = 0;
  let shadowX = 0;
  let shadowY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth animation
  function animate() {
    shadowX += (mouseX - shadowX) * 0.1;
    shadowY += (mouseY - shadowY) * 0.2;

    shadow.style.transform = `translate(${shadowX - 50}px, ${shadowY - 50}px)`;

    requestAnimationFrame(animate);
  }

  animate();
});
