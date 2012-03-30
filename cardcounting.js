var count = 0;
var turns = 20;

var SUITS = ["clubs","diamonds","hearts","spades"];
var CARDS = ["2","3","4","5","6","7","8","9","10","j","q","k","a"];
var count_map = {
  '2':1,
  '3':1,
  '4':1,
  '5':1,
  '6':1,
  '7':0,
  '8':0,
  '9':0,
  '10':-1,
  'j':-1,
  'q':-1,
  'k':-1,
  'a':-1
};


var getNextCard = function() {
  var rand_suit1 = SUITS[Math.floor(Math.random()*SUITS.length)];
  var rand_card1 = CARDS[Math.floor(Math.random()*CARDS.length)];
  var rand_suit2 = SUITS[Math.floor(Math.random()*SUITS.length)];
  var rand_card2 = CARDS[Math.floor(Math.random()*CARDS.length)];
  count+=count_map[rand_card1]+count_map[rand_card2];
  $('#curcount').html(count);
  $('#curcard1').attr('src',"img/"+rand_suit1+"-"+rand_card1+"-150.png");
  $('#curcard2').attr('src',"img/"+rand_suit2+"-"+rand_card2+"-150.png");
}

var cur_turn = 0;
var start = function() {
  getNextCard();
  cur_turn+=1;
  if (cur_turn==turns) {	
	$("#info").append($("<input id='displaycount' type='button' value='show count'>").click(function() {
	  $('#curcount').show()
	}));
  } else {
	setTimeout(start,interval);
  }
}

$(document).ready(function() {
  $('#curcount').hide();
  getNextCard();
  count = 0;
  cur_turn = 0;
  $('#cardcountingform').submit(
	function(event) {
	  event.preventDefault();
	  interval = 1000*Number($("#interval").val());
	  turns = Number($("#turns").val());	  
	  start();
	});

});









