gsap.registerPlugin(ScrollTrigger)

gsap.from("#pg2 h1 span",{
    transform: "translateY(100%)",
    duration:1,
    scrollTrigger:{
        trigger:"#pg2 h1 span",
        scroller:"#main",
        // markers:true,
        start:"top center",
    },
})
gsap.from("#pg2 img ",{
    transform: "rotate(-45deg)",
    top:"30%",
    opacity:0,
    duration:0.8,
    delay:.2,
    ease: Power2,
    scrollTrigger:{
        trigger:"#pg2 h1 span",
        scroller:"#main",
        // markers:true,
        start:"top center%",
    },
    
})
gsap.from("#pg3 #work h1 span",{
    scrollTrigger:{
        trigger:"#pg3 #work h1 span",
        start:"top bottom",
        scroller:"#main",
        // markers:true

    },
    transform: "translateY(100%)",
    
    top:"30%",
    stagger:0.1,
    opacity:0,
    duration:0.5,
    
    ease: Power2

})
gsap.from("#content h4 span",{
    scrollTrigger:{
        trigger:"#pg3 #work h1 span",
        start:"bottom",
        scroller:"#main",
        // markers:true

    },
    transform: "translateY(100%) rotate(30deg)",
    top:"30%",
    stagger:0.2,
    opacity:0,
    duration:0.5,
    
    ease: Power2

})
gsap.from("#touch h1 span ",{
    scrollTrigger:{
        trigger:"#pg3 #work h1 span",
        start:"bottom",
        scroller:"#main",
        // markers:true

    },
    transform: "translateY(100%)",
    
    stagger:0.3,
    opacity:0,
    duration:0.5,
    
    ease: Power2
    
})
gsap.from("#email h3,#social h3",{
    scrollTrigger:{
        trigger:"#pg3 #work h1 span",
        start:"bottom",
        scroller:"#main",
        // markers:true

    },
    
    transform: "translateY(100%)",
    stagger:0.3,
    opacity:0,
    duration:0.5,
    delay:0.2,
    ease: Power2

})
gsap.from("#slide img",{
    scrollTrigger:{
        trigger:"#pg3 #work h1 span",
        start:"top center",
        scroller:"#main",
        // markers:true

    },
    transform: "translateY(100%) rotate(30deg)",
    top:"30%",
    stagger:0.5,
    opacity:0,
    duration:0.8,
    
    ease: Power2

})
gsap.from("#txt h4 span",{
    scrollTrigger:{
        trigger:"#pg3 #work h1 span",
        start:"top bottom",
        scroller:"#main",
        // markers:true

    },
    transform: "translateY(100%) rotate(30deg)",
    top:"30%",
    stagger:0.1,
    opacity:0,
    duration:0.4,
    
    ease: Power2

})

console.log("hello")