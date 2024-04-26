document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)});

const races = document.querySelector(".races");
console.log(races.offsetWidth)


function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});

ScrollTrigger.create({
	trigger:".racesWrapper",
	start:"top",
	end: () => `+=${getScrollAmount() * -1}`,
  pin:true,
	animation:tween,
	scrub:1,
	invalidateOnRefresh:true,
})

gsap.to("#create", { 
  y: '0%',
  duration: 1
});

gsap.registerPlugin(ScrollTrigger)

gsap.to("#text-1", {
  scrollTrigger: {
    trigger: "#text-1",
    start: "+=450px -=150px",
    end: "0 -=450px",
    scrub:1,
  },
  y: '0%',
  opacity: 1,
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("span").forEach((span) => {
  ScrollTrigger.create({
    trigger: span,
    start: "+=1800px center",
    end: "+=1100px -=2000px",
    toggleClass: "active",
  })
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#text-2", {
  scrollTrigger: {
    trigger: "#text-inti",
    start: "+=800px -=150px",
    end: "0 -=450px",
    scrub:1,
  },
  y: '0%',
  opacity: 1,
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#text-3", {
  scrollTrigger: {
    trigger: "#text-2",
    start: "+=800px -=150px",
    end: "0 -=450px",
    scrub:1,
    markers:true
  },
  y: '0%',
  opacity: 1,
});

