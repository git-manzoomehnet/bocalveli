$(".container-Sec").imagesLoaded({},(function(){$(document).ready((function(){setTimeout((()=>{gsap.registerPlugin(ScrollTrigger);const e=document.querySelector(".container-Sec"),r=new LocomotiveScroll({el:e,direction:"horizontal",smooth:!0,lerp:.05});r.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy(e,{scrollTop(e){return arguments.length?r.scrollTo(e,0,0):r.scroll.instance.scroll.y},getBoundingClientRect:()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight}),pinType:e.style.transform?"transform":"fixed"});document.querySelectorAll(".Pin-Wrapp > *");let t=document.querySelector(".Pin-Wrapp").offsetWidth,o=t-window.innerWidth;scrollTween=gsap.to(".Pin-Wrapp",{scrollTrigger:{scroller:e,scrub:!0,trigger:"#PinSection",pin:!0,start:"top top",end:t},x:-o,ease:"none"}),ScrollTrigger.addEventListener("refresh",(()=>r.update())),ScrollTrigger.refresh(),r.update(),window.addEventListener("load",(function(){ScrollTrigger.addEventListener("refresh",(()=>r.update())),ScrollTrigger.refresh(),r.update()})),window.addEventListener("resize",(()=>{ScrollTrigger.addEventListener("refresh",(()=>r.update())),ScrollTrigger.refresh(),r.update()})),gsap.to(".Section-1 .Box",{opacity:1,ease:"none",x:0}),document.querySelectorAll(".Project").forEach((e=>{gsap.to(e.querySelector(".IMG"),{scrollTrigger:{trigger:e,containerAnimation:scrollTween,start:"top bottom"},ease:"none",x:0,opacity:1})}));let n=document.querySelector(".SURVEY"),l=n.getAttribute("href").replace(/<\/?p>/g,"");console.log(l),n.setAttribute("href",l)}),1e3)}))}));