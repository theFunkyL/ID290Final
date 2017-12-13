

// $('#getButton').click(function(){
// 	$('.wordContainer').html('');
	let getButton = document.querySelector('#getButton');
	let wordContainer = document.querySelector('.wordContainer');
	let openContainer = document.querySelector('.openContainer');
 	//$('#searchResults').val();
// 	$('.openContainer').toggleClass(".wordContainer");
	let resultsTest;

	getButton.onclick = () => { 

		let search = document.querySelector('#searchResults').value;

		fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=da548e54a4034fb1b2446c4ec786cfbd&query= ${search}`)
		.then( response => response.json() )
		.then( function(data){
			resultsTest = data;
			//console.log(data);

			// openContainer.addClass('wordContainer');
			// openContainer.classList.toggle('wordContainer'); // To toggle

			
			for (let i = 0; i < data.results.length; i++) {
				//var newText = document.createTextNode('trr4rfr4');
				wordContainer.innerHTML += `<h1 class="button">  
					${data.results[i].display_title} <br>
					${data.results[i].summary_short} <br>
				</h1>` ;
				
				//console.log(data);
			}

			let button = document.querySelectorAll('.button');
			for (var i = 0; i < button.length; i++) {
				((i)=>{
			    button[i].addEventListener('click',() => {
			        document.querySelector('#modalH1').innerHTML = '';
					document.querySelector('#modal').style.marginTop = '0px';
					document.querySelector('#modalH1').setAttribute('class','open');
					console.log(this.innerHTML);
					document.querySelector('#modalH1').innerHTML = button[i].innerHTML;
			    });
			    })(i);
			}
			

			let close = document.querySelector('#close');

			close.onclick = () => {
				document.querySelector('#modal').style.marginTop = '-315px';
			}
		});
	
	};
// });
	