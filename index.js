gsap.defaults({overwrite: "auto"});
var tl = gsap.timeline();

//sequenced one-after-the-other
tl.to(".box1", {duration: 2, x: 100}) //notice that there's no semicolon!
  .to(".box2", {duration: 1, y: 200})
  .to(".box3", {duration: 3, rotation: 360});

//gsap.to(".box", {rotation: 27, x: 100, duration: 1});  

To Animate:
#introp
#intro
  #rallasblancas
  #rallasnegras
  #star
  #logo
    #fernandocomet_id
      #logo
      #left
      #center
      #right
  #bg