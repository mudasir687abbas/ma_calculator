
var inputBox = document.getElementById("input");
var btns = document.getElementsByClassName("btn");
for(btn in btns){
 btns[btn].addEventListener('click',(e)=>{
  if(e.target.innerHTML == "AC"){
    inputBox.value = "";
  }else if(e.target.innerHTML == "X"){
    inputBox.value += "*";
  }else if(e.target.innerHTML == "="){
    try{
      inputBox.value = eval(inputBox.value)
    }catch{
      inputBox.value = "Syntax Error";
    }
  }else{
  inputBox.value += e.target.innerHTML;
  }
  },true);
  
}

console.log(window.innerWidth);