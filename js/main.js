
var btns = document.querySelectorAll('.btn1');
var ul = document.querySelector('ul');
var h6 = document.querySelector('h6');

var size = 500;
var scaleFactor = .9;

function setUpModeBtns(){
	for(i=0; i<btns.length; i++){
	btns[i].addEventListener('click', function(){
		btns[0].classList.remove('selected');
		btns[1].classList.remove('selected');
		btns[2].classList.remove('selected');
		btns[3].classList.remove('selected');
		this.classList.add('selected');
		ul.style.opacity = '.5';

		if(this.textContent === "One"){
			size = 500;
			scaleFactor = .9;
		}else if(this.textContent === "Two"){
			size = 500;
			scaleFactor = .5;
		}else if(this.textContent === "Three"){
			size = 10;
			scaleFactor = 1.1;
		}else{
			size = 500;
			scaleFactor = 1.1;
		}

		})
	}
}

setUpModeBtns()