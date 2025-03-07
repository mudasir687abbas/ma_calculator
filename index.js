
var btns = document.getElementsByTagName("button");
var screen = document.getElementById("screen");
var toggler = true;
var tracker = 0;
for(btn of btns){
  btn.addEventListener("click",(e)=>{
    if(e.target.innerText == "="){
      screen.value = eval(screen.value);
    }else if(e.target.innerText == "÷"){
      screen.value += "/";
    }else if(e.target.innerText == "x"){
      screen.value += "*";
    }else if(e.target.innerText == "C"){
      screen.value = "";
    }else if(e.target.innerText == "D"){
    let array = Array.from(screen.value);
    delete array[array.length-1];
    screen.value = array.join("");
    }else if(e.target.innerText == "+/-"){
     tracker++
     if(tracker == 1){
     let array = Array.from(screen.value);
     let targetIndex = array.length-1;
     let target = array[targetIndex];
    
     array[targetIndex] = "-";
     array[targetIndex+1] = target;
     
     screen.value = array.join("");
    }else if(tracker == 2){
      let array = Array.from(screen.value);
     let targetIndex = array.length-1;
     let target = array[targetIndex];
     array[targetIndex] = "";
     array[targetIndex-1] = target;
     screen.value = array.join("");
     tracker=0;
    }
    }else{
      screen.value += e.target.innerText;
    }
  });
}