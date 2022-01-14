function clock(){
    var hours = document.getElementById("ten") 
    var minutes = document.getElementById("fortyfive")
    var seconds =document.getElementById("zero")
    var am = document.getElementById("AM")

    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    var am_pm = (a >= 12)? "PM" : "AM";
    a = (a > 12)? a-12 : a;
    if(a===0 && am_pm === "PM"){

    if(b === 0 && c === 0 ){
        a = 12;
        am_pm = "noon";
    }
    else{
        a =12;
        am_pm = "PM"
    }
    }
    if(a===0 && am_pm ==="AM"){

    if(b === 0 && c ===0){
        a = 12
        am_pm = "midnight"
    }
    else{
        a = 12
        am_pm = "AM"
    }
    }


    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
    am.innerHTML = am_pm;
}
setInterval(clock,1000)



function clikk(){
    var i = document.getElementById("wake1").value;
    // console.log(i);
    var hrs = new Date().getHours();
    // console.log(hrs);
    if(i==hrs ){
        document.getElementById("lunchimage").style.backgroundImage ="url('wakeup_image.png')" 
        document.getElementById("wantlunch").innerHTML = "DO YOU WANT SOME BREAKFAST"
    }

    var i1  = document.getElementById("wake2").value;
    if(i1 == hrs){
        document.getElementById("lunchimage").style.backgroundImage = "url('lunch_image.png')";
        document.getElementById("wantlunch").innerHTML  = "DO YOU WANT SOME LUNCH"
    }

    var i2 = document.getElementById("wake3").value;
    if(i2 == hrs){
        document.getElementById("lunchimage").style.backgroundImage = "url('goodnight_image.png')"
        document.getElementById("wantlunch").innerHTML = "DO YOU WANT SOME DINNER"
    }

clkk();

}

function clkk() {
        let waketime = document.getElementById("wake1").value;
        let lunchtime = document.getElementById("wake2").value;
        let naptime = document.getElementById("wake3").value;
        
        var insideValue1 = document.getElementById("wake1");
        var invalue1 = insideValue1.options[insideValue1.selectedIndex].text;
        
        var insideValue2 = document.getElementById("wake2");
        var invalue2 = insideValue2.options[insideValue2.selectedIndex].text;
        
        var insideValue3 = document.getElementById("wake3");
        var invalue3 = insideValue3.options[insideValue3.selectedIndex].text;
        
        if (waketime == "none") {
        document.getElementById("goodafternoon").innerHTML = "";
        } else {
        document.getElementById("goodafternoon").innerHTML =
          "Wake up time : " + invalue1;
        }
        
        if (lunchtime == "none") {
        document.getElementById("s").innerHTML = "";
        } else {
        document.getElementById("s").innerHTML =
          "Lunch time : " + invalue2;
        }
        
        if (naptime == "none") {
        document.getElementById("s1").innerHTML = "";
        } else {
        document.getElementById("s1").innerHTML = "Nap time : " + invalue3;
        }
        }
