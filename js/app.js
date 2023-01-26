

const ADJUSTMENT_NAME = document.querySelector("#adjustment__name");


const ADJUSTMENT_TELL = document.querySelector("#adjustment__tell");




const ADJUSTMENT_BUTTON = document.querySelector("#adjustment-btn");




const ADJUSTMENT_MODAL = document.querySelector(".aj-modal__wr");



ADJUSTMENT_MODAL.addEventListener('click', ()=>{
	ADJUSTMENT_MODAL.classList.remove('active');
});




ADJUSTMENT_BUTTON.addEventListener("click", ()=>{



	let regTell = /^\+?[0-9]{10,15}$/;
	let regLENGHT = /^[а-яА-Яa-zA-ZЄ-ЯҐа-їґ0-9]{3,}$/;



	if(regLENGHT.test(ADJUSTMENT_NAME.value)){

		ADJUSTMENT_NAME.style.borderColor = "transparent";
	}else{
		ADJUSTMENT_NAME.style.borderColor = "red";
	}




	if(regTell.test(ADJUSTMENT_TELL.value)){
		ADJUSTMENT_TELL.style.borderColor = "transparent";
	}else{
		ADJUSTMENT_TELL.style.borderColor = "red";
	}



	let ajSucses = regLENGHT.test(ADJUSTMENT_NAME.value) && regTell.test(ADJUSTMENT_TELL.value);



	if(ajSucses){


		

		ADJUSTMENT_BUTTON.setAttribute('disabled', true);

		async function sendDate(){
			let res = await fetch("https://chornyi.com.ua/send/", {
			  method: "POST",
			  body: JSON.stringify({
				 name: ADJUSTMENT_NAME.value,
				 tell: ADJUSTMENT_TELL.value,
				
			  }),
			});
		 
			if(res.ok){	
				
				ADJUSTMENT_MODAL.classList.add('active');

			  ADJUSTMENT_NAME.value = "",

			  ADJUSTMENT_TELL.value = "",

			  ADJUSTMENT_BUTTON.removeAttribute('disabled');
			}else{
			  alert('error send messange');
			}
			
		 }
		 
		 sendDate();
	}


});