//--------------- This code With Seasion (Am-Pm) ---------------
/* 
function fullTime() {
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    let d = data.toDateString();
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h = (h <10)? "0" + h : h;
    m = (m <10)? "0" + m : m;
    s = (s <10)? "0" + s : s;


    const time = `The Time is  ${h +":"+ m + ":" + s + " " + session}`

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("myDateDisplay").innerText = d;

    setTimeout(fullTime,1000)
}
fullTime()
*/
//--------------- This code ---------------

function fullTime() {
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    let d = data.toDateString();

    let dN = "AM"
    if (h > 12 && dN == "AM") {
        h = h - 12;
        dN = "PM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const time = `The Time is : ${h + ":" + m + ":" + s + dN}`
    let clock = document.querySelector(".clock");
    let span_tag = document.createElement("span");
    span_tag.innerHTML = time;
    clock.innerHTML = ""; 
    clock.appendChild(span_tag); // append the new span element
    document.querySelector(".date").innerText = d;
    g
    setTimeout(fullTime, 1000)
}
fullTime()

// Create/append div
let btn_div = document.createElement("div");
document.body.appendChild(btn_div);


// Create/append/style button
let btn = document.createElement("button");

//style
// btn.style.backgroundColor = "red";
// btn.style.padding = "20px";

let styles = {
    backgroundColor : "red",
    padding : "20px",
    position: 'absolute',
    top: '80%',
    left: '50%',
    color: "white",
}

for(property in styles){
    btn.style[property] = styles[property]
}
//aapend
btn_div.appendChild(btn);
btn.innerText = "To CHange BackGround Color";

// Body color
btn.addEventListener('click',()=>{
    let click = document.body.classList.toggle('dark-mode');
    document.querySelector(".date").classList.toggle('dark-mode')
    console.log(click)
})




/*
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
*/
