

const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__open");



btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("close");
});



btnBurger.addEventListener("click", ()=>{
		document.querySelector("body").classList.toggle("scrollNone");
		burger.classList.toggle("burger__open-active");
		btnBurger.classList.remove("header__burger_close");
});







let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
	if(scrollY>10){
		header.classList.add("header__scroll");
	}else{
		header.classList.remove("header__scroll");
	}
});





const BUTTON_SPOILERS = document.querySelectorAll('.aftercourse__net-btn');



if(BUTTON_SPOILERS.length >0){
	BUTTON_SPOILERS.forEach((button=>{

		button.addEventListener("click", function(){
			
			BUTTON_SPOILERS.forEach(btn=>{
				btn.nextElementSibling.classList.remove('active');
				btn.innerText = "+";
			});

			button.nextElementSibling.classList.add('active');
			button.innerText = "-";
		});
		
	}));
}


const SPOILERS_CLOSE = document.querySelectorAll('.aftercourse__net-close');

if(SPOILERS_CLOSE.length > 0 ){
	SPOILERS_CLOSE.forEach((close)=>{
		close.addEventListener('click', ()=>{
			close.parentElement.classList.remove('active');
			close.parentElement.previousElementSibling.innerText = "+";
		});
	});
}





new Swiper('.program__slider-body', {


	navigation: {
		nextEl: '.program__next',
		prevEl: '.program__prev',
	 },
	 spaceBetween: 20,
	 breakpoints: {
		0: {
			slidesPerView: 1 
		},
		420: {
			slidesPerView: 2
		},
		992: {
			slidesPerView: 3
		},
	 }
});







const QUESTIONS = document.querySelectorAll(".subfooter__section");

if(QUESTIONS){

	QUESTIONS.forEach((button)=>{
		button.addEventListener("click" , ()=>{
			button.classList.toggle("active");
			button.nextElementSibling.classList.toggle("active");
		});
	});
}



const MODAL = document.querySelector(".modal__wr");
const MODAL_BODY = document.querySelector(".modal__body");


const BUTTON_OPEN_MODAL = document.querySelectorAll(".modal");



if(BUTTON_OPEN_MODAL.length > 0){

	BUTTON_OPEN_MODAL.forEach((btn)=>{
		btn.addEventListener("click", ()=>{
			MODAL.classList.add("active");
		});
	});

}

MODAL.addEventListener("click", ()=>{
	MODAL.classList.remove('active');
});


MODAL_BODY.addEventListener("click", function(e){
		e.stopPropagation();
});

const BUTTON_CLOSE = document.querySelector(".modal__close");


BUTTON_CLOSE.addEventListener("click", ()=>{
	MODAL.classList.remove('active');
});



const USER_NAME = document.querySelector("#modal__name");


const USER_TELL = document.querySelector("#modal__tell");

const USER_INST = document.querySelector("#modal__inst");


const USER_BUTTON = document.querySelector("#modal__btn");



USER_BUTTON.addEventListener("click", ()=>{



	let regTell = /^\+?[0-9]{10,15}$/;
	let regLENGHT = /^[а-яА-Яa-zA-ZЄ-ЯҐа-їґ0-9]{3,}$/;



	if(regLENGHT.test(USER_NAME.value)){

		USER_NAME.style.borderColor = "#CBD5E1";
	}else{
		USER_NAME.style.borderColor = "red";
	}

	if(regLENGHT.test(USER_INST.value)){
		USER_INST.style.borderColor = "#CBD5E1";
	}else{
		USER_INST.style.borderColor = "red";
	}



	if(regTell.test(USER_TELL.value)){
		USER_TELL.style.borderColor = "#CBD5E1";
	}else{
		USER_TELL.style.borderColor = "red";
	}



	let sucses = regLENGHT.test(USER_NAME.value) && regLENGHT.test(USER_INST.value) && regTell.test(USER_TELL.value)



	if(sucses){

		USER_BUTTON.setAttribute('disabled', true);

		async function getMail(){
			let res = await fetch("https://chornyi.com.ua/send/", {
			  method: "POST",
			  body: JSON.stringify({
				 name: USER_NAME.value,
				 tell: USER_TELL.value,
				 inst: USER_INST.value,
			  }),
			});
		 
			if(res.ok){
			MODAL.classList.remove('active');
			  USER_NAME.value = "",
			  USER_TELL.value = "",
			  USER_INST.value = "",
			  USER_BUTTON.removeAttribute('disabled');
			}else{
			  alert('error send messange');
			  MODAL.classList.remove('active');
			}
			
		 }
		 
		 getMail();
	}


});