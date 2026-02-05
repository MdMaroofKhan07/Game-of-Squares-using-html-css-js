let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>`;
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML = `<h1>1</h1>`;
})

let s2 = document.getElementById("sq2");
let clr = "red";
s2.addEventListener("mouseenter",function(){
    let num = Math.floor(Math.random()*100);
    s2.innerHTML = `<h1>${num}</h1>`;
    if(clr=="red"){
        s2.style.backgroundColor="red";
        clr="green";
    }
    else if(clr=="green"){
        s2.style.backgroundColor="green";
        clr="blue";
    }
    else{
        s2.style.backgroundColor="blue";
        clr="red";
    }
})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="";
    s2.innerHTML = `<h1>2</h1>`;
})

let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
})
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="";
})

let s4 = document.getElementById("sq4");
s4.addEventListener("click",function(){
    let n1 = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${n1}</h1>`;
    let n2 = Math.floor(Math.random()*100);
    s2.innerHTML = `<h1>${n2}</h1>`;
    let n3 = Math.floor(Math.random()*100);
    s3.innerHTML = `<h1>${n3}</h1>`;
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    s1.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
    let c11 = Math.floor(Math.random()*256);
    let c22 = Math.floor(Math.random()*256);
    let c33 = Math.floor(Math.random()*256);
    s2.style.backgroundColor=`rgb(${c11},${c22},${c33})`;
    let c111 = Math.floor(Math.random()*256);
    let c222 = Math.floor(Math.random()*256);
    let c333 = Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${c111},${c222},${c333})`;
})

s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="";
    s2.style.backgroundColor="";
    s3.style.backgroundColor="";
    s4.style.backgroundColor="";
    s1.innerHTML = `<h1>1</h1>`;
    s2.innerHTML = `<h1>2</h1>`;
    s3.innerHTML = `<h1>3</h1>`;
})

