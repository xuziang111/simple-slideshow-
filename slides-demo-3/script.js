let $buttons = $(buttons);
let $slides = $('#slides');
let $images = $slides.children('img')
let n=0
		
makeClone()
flip()
	
$('.buttons>span:nth-child(1)').on('click',function(){
  $slides.css({
        transform:'translateX(-200px) translateZ(0)'
	 })
	if(n===4){ 
   endToStart()
}
	n=1;
});
$('.buttons>span:nth-child(2)').on('click',function(){
   $slides.css({
        transform:'translateX(-400px) translateZ(0)'
      });
	n=2;
});
$('.buttons>span:nth-child(3)').on('click',function(){
   $slides.css({
        transform:'translateX(-600px) translateZ(0)'
      });
	n=3;
});
$('.buttons>span:nth-child(4)').on('click',function(){
   $slides.css({
        transform:'translateX(-800px) translateZ(0)'
      });
	if(n===1){
    startToEnd();
	}
	n=4;
});

function makeClone(){
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images.length-1).clone(true)
  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}

function makeSlide(){
	return	setInterval(function(){
  $slides.css({
		transform:`translateX(${inturn(n)*-200}px)`
	}).offset();	
		if(inturn(n)===1){
	$slides.css({
        transform:'translateX(-1000px) translateZ(0)'
	 }).one('transitionend', function(){
	 	  $slides.hide().offset();
    $slides.css({transform:'translateX(-200px)'}).show();
	 });
	}
		n++;
},2000)		
}
var stopSlide = 	makeSlide();

function mousuActive(){
		 $('.container').on('mouseenter',function(){
    window.clearInterval(stopSlide);
  });
  $('.container').on('mouseleave',function(){
    stopSlide = makeSlide();
  });
};
function inturn(n){
   return n%4+1;
}
function flip(){	
  $('.show-window>span:nth-child(3)').on('click',function(){
		  $slides.css({
		transform:`translateX(${inturn(n)*-200}px)`
	}).offset();	
		if(inturn(n)===1){
     endToStart()
	}
		n++;
  });
	
  $('.show-window>span:nth-child(2)').on('click',function(){
	n=n+2;
		  $slides.css({
		transform:`translateX(${inturn(n)*-200}px)`
	}).offset();	
		if(inturn(n)===4){
     startToEnd()
	}
		n=n+1;
  });
}

document.addEventListener('visibilitychange',function(){
  if(document.hidden===false){
	   stopSlide = makeSlide();
	}else{
	  window.clearInterval(stopSlide);
	}
})
	
function endToStart(){
	$slides.css({
        transform:'translateX(-1000px) translateZ(0)'
	 }).one('transitionend', function(){
	 	  $slides.hide().offset();
    $slides.css({transform:'translateX(-200px)'}).show();
	 });
}function startToEnd(){
	$slides.css({
        transform:'translateX(0px) translateZ(0)'
	 }).one('transitionend', function(){
	 	  $slides.hide().offset();
    $slides.css({transform:'translateX(-800px)'}).show();
	 });
}