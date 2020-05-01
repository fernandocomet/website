/*gsap.to("#logo", { alpha: 1, duration: 1, ease: "sine" });
gsap.to("#logo", { delay: 1, rototion: 90, duration: 3 });*/

var tl = gsap.timeline();
tl.to("#star", { alpha: 1, duration: 1 })
  .to("#star", { rotation: 720, duration: 5 })
  .to("#rallasblancas", { delay: -5, alpha: 1, duration: 1 })
  .to("#rallasblancas", { alpha: 0, duration: 1 })
  .to("#star", { alpha: 0, duration: 1 })
  .to("#logo", { alpha: 1, ease: "sine", duration: 1 })
  .to("#logo", { y: -100, duration: 1 })
  .to("#fc", {xPercent: -50, left: "50%", alpha: 1, ease: "sine", duration: 1})
  .to("#uxengineer", {xPercent: -50,left: "50%",alpha: 1,ease: "sine",duration: 1})
  .to("#uxengineer", { delay: 1, left: "120%", alpha: 1, ease: "sine", duration: 1 })
  .to("#fullstack", {xPercent: -50,left: "50%",alpha: 1,ease: "sine",duration: 1})
  .to("#fullstack",  { delay: 1, left: "120%", alpha: 1, ease: "sine", duration: 1 })
  .to("#uxdesigner", {xPercent: -50,left: "50%",alpha: 1,ease: "sine",duration: 1})
  .to("#uxdesigner",  { delay: 1, left: "120%", alpha: 1, ease: "sine", duration: 1 })
  .to("#animator", {xPercent: -50,left: "50%",alpha: 1,ease: "sine",duration: 1})
  .to("#animator",  { delay: 1, left: "120%", alpha: 1, ease: "sine", duration: 1 })
  .to("#photographer", {xPercent: -50,left: "50%",alpha: 1,ease: "sine",duration: 1})
  .to("#photographer",  { delay: 1, left: "120%", alpha: 1, ease: "sine", duration: 1 });
  
  // .to("#logo", { rotationX: 180, duration: 2 })
  // .to("#logo", { rotation: 360, duration: 2 })