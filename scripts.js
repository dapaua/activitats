const cards = document.querySelectorAll('.memory-card');
const activitatText = document.querySelectorAll('#activitat-text')[0];

let lockBoard = false;

let cardsFlipped=0;
let card1=0;
let card2=0;
let card3=0;
let numimages=6;
let missatgeInicial="Prem les cartes per descobrir l'activitat."

function flipCard() {
  if (lockBoard) return;
  

  this.classList.add('flip');
  clicksound.start();

   cardsFlipped++;
  checkForFlipped();
}

function checkForFlipped() {
   
if (cardsFlipped==3)
    {
        act_text="Ja tens activitat: "+card1+" "+card2+" "+card3 +  "!";
        activitatText.innerHTML = act_text;
        document.getElementById("flipitem").classList.add("flippedtext");
    }


}



function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  cardsFlipped=0;
  cards.forEach(card => card.classList.remove('flip'));  
  document.getElementById("flipitem").classList.remove("flippedtext");
  //activitatText.innerHTML = missatgeInicial;
  


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
let clicksound = new Sound("img/page-flip-01a.mp3", 100, true);

//Randomize cards images.


// source: https://stackoverflow.com/a/11331200/4298200
function Sound(source, volume, loop)
{
    this.source = source;
    this.volume = volume;
    this.loop = loop;
    var son;
    this.son = son;
    this.finish = false;
    this.stop = function()
    {
        document.body.removeChild(this.son);
    }
    this.start = function()
    {
        if (this.finish) return false;
        this.son = document.createElement("embed");
        this.son.setAttribute("src", this.source);
        this.son.setAttribute("hidden", "true");
        this.son.setAttribute("volume", this.volume);
        this.son.setAttribute("autostart", "true");
        this.son.setAttribute("loop", this.loop);
        document.body.appendChild(this.son);
    }
    this.remove = function()
    {
        document.body.removeChild(this.son);
        this.finish = true;
    }
    this.init = function(volume, loop)
    {
        this.finish = false;
        this.volume = volume;
        this.loop = loop;
    }
}