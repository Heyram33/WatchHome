//gsap
gsap.fromTo(".logo",1,{
    opacity:0,
    x:-20,
    ease: "power1.inOut"
},{
    opacity:1,
    x:0,
    
})

gsap.fromTo("nav ul li",1,{
    opacity:0,
    x:-20,
    ease: "power1.inOut"
},{
    opacity:1,
    x:0,
    stagger:0.2
})
gsap.fromTo(".search",1,{
    opacity:0,
    x:-20,
    ease: "power1.inOut"
},{
    opacity:1,
    x:0,
    delay:.4,
})
gsap.fromTo(".menu",1,{
    opacity:0,
    x:-20,
    ease: "power1.inOut"
},{
    opacity:1,
    x:0,
    delay:.5,
})
gsap.fromTo(".title",1,{
    opacity:0,
    y:20,
    ease: "power1.inOut"
},{
    opacity:1,
    y:0,
    delay:.4,
})

gsap.fromTo(".btn",1,{
    opacity:0,
    y:20,
    ease: "power1.inOut"
},{
    opacity:1,
    y:0,
    delay:.6,
})

gsap.fromTo(".line-one",1,{
    opacity:0,
    y:-800,
    ease: "power1.inOut"
},{
    opacity:1,
    y:0,
    delay:1.5,
})

gsap.fromTo(".line-two",1,{
    opacity:0,
    y:-800,
    ease: "power1.inOut"
},{
    opacity:1,
    y:0,
    delay:2,
})

gsap.fromTo(".img",1,{
    opacity:0,
    y:-800,
    ease: "power1.inOut"
},{
    opacity:1,
    y:0,
    delay:2.9,
})

gsap.fromTo(".year",1,{
    opacity:0,
    y:-20,
    ease: "power1.inOut"
},{
    opacity:1,
    y:0,
    delay:1.4,
})

gsap.fromTo(".media ul li",2,{
    opacity:0,
    y:40,
    ease: "power1.inOut"
},{
    opacity:1,
    y:0,
    delay:3,
})