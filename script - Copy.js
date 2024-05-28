
function fullTime() {
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    let d = data.toDateString();

    let dN = "AM"
    if(h > 10 ){
        dN = "PM"
    }

    if(h<10){
        h= h-12;
    }
    
    h = (h <10)? "0" + h : h;
    m = (m <10)? "0" + m : m;
    s = (s <10)? "0" + s : s;


    const time = `The Time is  ${h +":"+ m + ":" + s + " " + dN}`

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("myDateDisplay").innerText = d;

    setTimeout(fullTime,1000)
}
fullTime()






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
