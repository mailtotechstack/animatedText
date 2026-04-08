const h1 = document.querySelector("#main>h1");
const h1Text = h1.textContent.split("");
let cluster = "";

h1Text.forEach((el, idx)=>{
    if(idx<Math.floor((h1Text.length)/2)){
        cluster+=`<span class="a">${el}</span>`
    }
    else{
        cluster+=`<span class="b">${el}</span>`
    }
});
h1.innerHTML=cluster;

const tl = gsap.timeline();
const t2 = gsap.timeline();

tl.from(".a",{
    y: 50,
    stagger: 0.2,
    opacity: 0,
})

t2.from(".b",{
    y: 50,
    stagger: -0.2,
    opacity: 0
})