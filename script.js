let clock = document.querySelector(".clock");
let date = document.querySelector(".date");

let time;
let h, m, s; 
function fullTime() {
    let data = new Date();
    h = data.getHours();
    m = data.getMinutes();
    s = data.getSeconds();
    let d = data.toDateString();

    let dN = "AM";
    if (h > 12 && dN === "AM") {
        h = h - 12;
        dN = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    time = `The Time is : ${h}:${m}:${s} ${dN}`;

    let clock = document.querySelector(".clock");
    clock.innerHTML = time;
    document.querySelector(".date").innerText = d;
    setTimeout(fullTime, 1000);
}

fullTime();

// Create/append div
let btn_div = document.createElement("div");
document.body.appendChild(btn_div);

// Create/append/style button
let btn = document.createElement("button");
btn.innerText = "Change Clock Color";
let my_parent = document.querySelector(".parent") 
my_parent.appendChild(btn);

let styles = {
    backgroundColor: "red",
    padding: "20px",
    position: 'relative',
    top: '550px',
    left: '50%',
    color: "white",
    margin: "auto"
};

for (property in styles) {
    btn.style[property] = styles[property];
}

// Change clock color and update time
btn.addEventListener('click', () => {

    let body = document.body;
    clock.classList.toggle("dark-mode")
    date.classList.toggle("dark-mode")
    body.classList.toggle("dark-mode")

});

document.body.addEventListener('keypress', () => {
    let body = document.body;
    body.classList.toggle("body-color")
});



// document.body.appendChild(btn)

//--------------- This code ---------------
/*
let time;
let buttonCreated = false; // Flag to track whether the button has been created

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

    time = `The Time is : ${h + ":" + m + ":" + s + dN}`;

    if (!buttonCreated) {
        // Create/append/style button only if it hasn't been created yet
        let btn = document.createElement("button");
        document.querySelector(".parent").appendChild(btn);
        btn.innerHTML = "To Change Background Color";
        btn.style.backgroundColor = "red";
        btn.style.padding = "20px";

        buttonCreated = true; // Set the flag to true
    }

    let clock = document.querySelector(".clock").innerHTML = time;
    document.querySelector(".date").innerText = d;
    setTimeout(fullTime, 1000)
}

fullTime();


// Create/append div
let btn_div = document.createElement("div");
document.body.appendChild(btn_div);

// Create/append/style button
let btn = document.createElement("button");

//styles
// btn.style.backgroundColor = "red";
// btn.style.padding = "20px";


let styles = {
    backgroundColor : "red",
    padding : "20px",
    position: 'relative',
    top: '80%',
    left: '50%',
    color: "white",
    margin: "auto"
}

for(property in styles){
    btn.style[property] = styles[property]
}
//aapend
btn_div.appendChild(btn);
btn.innerText = "To CHange BackGround Color";

// Body color
btn.addEventListener('click',()=>{
    let click = document.body.classList.toggle('dark-mode')
    console.log(click);
    time = `The Time is : ${h + ":" + m + ":" + s}`
})


*/









// AI code For Test 24-hours:
/*
let format24 = false;

function fullTime() {
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    let d = data.toDateString();

    let dN = ""
    if (!format24) {
        dN = h >= 12 ? "PM" : "AM";
        h = h % 12;
        h = h ? h : 12; // the hour '0' should be '12'
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const time = `The Time is : ${h + ":" + m + ":" + s + " " + dN}`
    let clock = document.querySelector(".clock");
    let span_tag = document.createElement("span");
    span_tag.innerHTML = time;
    clock.innerHTML = "";
    clock.appendChild(span_tag);
    document.querySelector(".date").innerText = d;

    setTimeout(fullTime, 1000)
}

document.querySelector("#toggleButton").addEventListener("click", function() {
    format24 = !format24;
});

fullTime()



*/




// -------------------------- Another Code ---------------------
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

