const cards = document.querySelectorAll('.memory-card');
const activitatText = document.querySelectorAll('#activitat-text')[0];

let lockBoard = false;

let cardsFlipped=0;
let card1=0;
let card2=0;
let card3=0;
let numimages=6;

function flipCard() {
  if (lockBoard) return;
  

  this.classList.add('flip');


   cardsFlipped++;
  checkForFlipped();
}

function checkForFlipped() {
   
if (cardsFlipped==3)
    {
        act_text="Ja tens activitat: "+card1+" "+card2+" "+card3 +  "!";
        activitatText.innerHTML = act_text;

    }


}



function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  cardsFlipped=0;
  cards.forEach(card => card.classList.remove('flip'));  
  activitatText.innerHTML = "";
  


  card1=0;
  card2=0;
  card3=0;
 setTimeout(function(){
  card1=Math.floor(Math.random() * (numimages-1))+1;
  card2=Math.floor(Math.random() * (numimages-1))+1;
  card3=Math.floor(Math.random() * (numimages-1))+1;
  
  var c1 = document.getElementById("c1");
  for (var i = 0; i < c1.childNodes.length; i++) {
      if (c1.childNodes[i].className == "front-face") {
             myimg=c1.childNodes[i];
             myimg.src="img/c1/"+card1+".svg";  }
      }

  var c2 = document.getElementById("c2");
  for (var i = 0; i < c2.childNodes.length; i++) {
      if (c2.childNodes[i].className == "front-face") {
             myimg=c2.childNodes[i];
             myimg.src="img/c2/"+card2+".svg";  }
      }
    
      var c3 = document.getElementById("c3");
      for (var i = 0; i < c3.childNodes.length; i++) {
          if (c3.childNodes[i].className == "front-face") {
                 myimg=c3.childNodes[i];
                 myimg.src="img/c3/"+card3+".svg";  }
          }

        },500);

}


resetBoard();
document.getElementById("reinici").addEventListener('click', resetBoard);
cards.forEach(card => card.addEventListener('click', flipCard));


//Randomize cards images.


