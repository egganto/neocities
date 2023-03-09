const boxOne = document.getElementById("box1");
const boxTwo = document.getElementById("box2");
const boxThree = document.getElementById("box3");
const boxFour = document.getElementById("box4");
const boxFive = document.getElementById("box5");
const boxSix = document.getElementById("box6");
const hiddenBox = document.getElementsByClassName("hidden");

boxOne.addEventListener("click", check);
boxTwo.addEventListener("click", check);
boxThree.addEventListener("click", check);
boxFour.addEventListener("click", check);
boxFive.addEventListener("click", check);
boxSix.addEventListener("click", check);

function check(){
  let boxId = this.attributes["id"].value;

  if (boxId === "box1" || boxId === "box4" || boxId === "box5") {
    document.getElementById("update").innerHTML = "correct. click on another square";

    for (let i = 0; i < hiddenBox.length; i++){
      hiddenBox[i].className = "choices";
    }
  }else if(boxId === "box6"){
    document.getElementById("update").innerHTML = "finish<br/>you won";
  }else{
    document.getElementById("update").innerHTML = "game over. try again.";
  }
}
