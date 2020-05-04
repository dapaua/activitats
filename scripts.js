const cards = document.querySelectorAll('.card-flip');
const activitatText = document.querySelectorAll('#activitat-text')[0];

let lockBoard = false;

let cardsFlipped=0;
let card1=0;
let card2=0;
let card3=0;
let numimages=22;
let numimagesact=25;
let missatgeInicial="Prem les cartes per descobrir l'activitat."
let soundEnabled=1;
let miaudio=new Audio();

function flipCard() {
  if (lockBoard) return;
  
//Ara el so está configurat a que un nou so para l'naterior, i es pot tornar a sentir cada carta apretant-la
  if (soundEnabled==1)
    { 
      //Primer paro tot el audio
      
        miaudio.pause();
        
        //Ara arrenco un altre audio
        mp3="audio/"+this.getAttribute("mp3")+".mp3"
        console.log(mp3);
        //clonenode faria que es puguin superposar el sons.
        //new Audio(mp3).cloneNode(true).play()
        miaudio=new Audio(mp3)
        miaudio.play()
    }
//check
  if (this.classList.contains('flip'))
    {
        //Already clicked
        return;
    }
  this.classList.add('flip');


   cardsFlipped++;
  checkForFlipped();
}

function checkForFlipped() {
}   


function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  cardsFlipped=0;
  cards.forEach(card => card.classList.remove('flip'));  
  //activitatText.innerHTML = missatgeInicial;
  


  card1=0;
  card2=0;
  card3=0;
 setTimeout(function(){
  card1=Math.floor(Math.random() * (numimages))+1;

  do{
  card2=Math.floor(Math.random() * (numimages))+1;
  } while (card2 === card1);

  do{
  card3=Math.floor(Math.random() * (numimages))+1;
  } while (card3===card2 || card3===card1);
 
  card5=Math.floor(Math.random() * (numimagesact))+1;

  var c1 = document.getElementById("front1");
  c1.src="img/cartes/o"+card1+".png";  
  $("#front1").parent().parent().attr("mp3","o"+card1)
   
  var c2 = document.getElementById("front2");
  c2.src="img/cartes/o"+card2+".png";  
  $("#front2").parent().parent().attr("mp3","o"+card2)

  var c3 = document.getElementById("front3");
  c3.src="img/cartes/o"+card3+".png";  
  $("#front3").parent().parent().attr("mp3","o"+card3)

  var c4 = document.getElementById("front4");
  c4.src="img/cartes/c.png";  
  $("#front4").parent().parent().attr("mp3","c")

  var c5 = document.getElementById("front5");
  c5.src="img/cartes/a"+card5+".png";
  $("#front5").parent().parent().attr("mp3","a"+card5)


        },0);

}


resetBoard();
cards.forEach(card => card.addEventListener('click', flipCard));

