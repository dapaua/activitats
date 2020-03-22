const cards = document.querySelectorAll('.flipcard');
const activitatText = document.querySelectorAll('#activitat-text')[0];

let lockBoard = false;

let cardsFlipped=0;
let card1=0;
let card2=0;
let card3=0;
let numimages=6;
let missatgeInicial="Prem les cartes per descobrir l'activitat."
let soundEnabled=1;

function flipCard() {
  if (lockBoard) return;
  
  if (this.classList.contains('flip'))
    {
        //Already clicked
        return;
    }
  this.classList.add('flip');

  if (soundEnabled==1)
    {
        new Audio("img/page-flip-01a.mp3").play()
    }
    
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

function toggleSound()
{
    soundEnabled=1-soundEnabled;
    soundIcon=document.getElementById("so-button")

    if (soundEnabled==1)
        {
            soundIcon.classList.remove("fa-volume-mute");
            soundIcon.classList.add("fa-volume-up");
        }
        else
        {
            soundIcon.classList.add("fa-volume-mute");
            soundIcon.classList.remove("fa-volume-up");
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
  
  var c1 = document.getElementById("front1");
  c1.src="img/c1/"+card1+".png";  
 
  var c2 = document.getElementById("front2");
  c2.src="img/c2/"+card2+".png";  

  var c2 = document.getElementById("front3");
  c2.src="img/c2/"+card2+".png";  

        },500);

}


resetBoard();
document.getElementById("reinici").addEventListener('click', resetBoard);
document.getElementById("btn-sound").addEventListener('click', toggleSound);
cards.forEach(card => card.addEventListener('click', flipCard));


//Randomize cards images.

