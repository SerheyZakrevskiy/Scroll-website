window.addEventListener("scroll", (e) => {
  document.body.style.cssText += `--scroolTop: ${this.scrollY}px`;
});
gsap.registerPlugin(ScrollTriger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  container: ".container",
});
