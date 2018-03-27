console.log("connected");
			
	class Trainer{
		constructor(name){
		this.name = name;
		this.roster = [];
		}

		all(){
			console.log(this.roster);
		}

		get(pokemon){
			for (let i = 0; i < this.roster.length; i++){
				if(this.roster[i].name === pokemon){
					return this.roster[i];
				}
			}
		}
	}

	class Pokemon {
	constructor(name, pic, stats, abilities){
		this.name = name ,
		this.pic = pic ,
		this.stats = stats , 
		this.abilities = abilities ;	
	}
	stringRender(){
		return `hp: ${this.stats.hp} attack: ${this.stats.attck} defense: ${this.stats.dfns} speed: ${this.stats.spd}`;
	}
	
}

let ashKetchum = new Trainer('ashKetchum');
console.log(ashKetchum);
let counter = 0;

function createPokemon(pokemon){
	console.log('ajax');
	$.ajax({
	url: `https://pokeapi.co/api/v2/pokemon/${pokemon}/` , 
	type: "GET" , 
	dataType: "JSON",
	success: function(data){
		console.log('test');
		//link datapoints to variables
		let name = data.name ,
			title = data.name ,
			pic = data.sprites.front_default ,
			xP = data.base_experience,	
			stat = {},
			abil = [];
			hp = data.stats[5].stat.name ,
			hpLvl = data.stats[5].base_stat,
			attck = data.stats[4].stat.name ,
			attckLvl = data.stats[4].base_stat,
			dfns = data.stats[3].stat.name ,
			dfnsLVL = data.stats[3].base_stat,
			spd = data.stats[0].stat.name ,
			spdLvl = data.stats[0].base_stat;

		//set the stat object
		stat.hp = hpLvl;	
		stat.attck = attckLvl;
		stat.dfns = dfnsLVL;
		stat.spd = spdLvl;	

		//set the ability array
		for(i=0;i< data.abilities.length; i++){
			let ability = data.abilities[i].ability.name;
			abil.push(`${ability}`);
		}

		 title = new Pokemon(name, pic, stat, abil);
		 ashKetchum.roster.push(title);
		 ashKetchum.get(title);
		counter++;
		if(counter === 3){
			ashKetchum.all();
			console.log(ashKetchum);
			let render = function(){
				for (let i = 0; i < ashKetchum.roster.length; i++){
					let container = `<div id="pokeCard${i}" class="carousel-item red white-text"></div>`, 
						choiceBanner =`<h1>${ashKetchum.roster[i].name}</h1>`,
						choiceMenu = `<li><a href="">${ashKetchum.roster[i].name}</a></li>`
						choicePic = `<img class="rosterPic" src="${ashKetchum.roster[i].pic}">`,
						choiceStats = `<div class="rosterLeft">${ashKetchum.roster[i].stringRender()}</div>`,
						choiceAbil = `<div class="rosterRight">${ashKetchum.roster[i].abilities}</div>`;
					
						if(i===0){$('.carousel-item').attr('href', '#one!');}
						else if (i===1){$('.carousel-item').attr('href', '#two!');}
						else if (i===2){$('.carousel-item').attr('href', '#three!');}
						else{//donothing!!!
						}
					
					$('.carousel.carousel-slider.center').append(container);
					$(`#pokeCard${i}`).append(choiceBanner).append(choicePic).append(choiceStats).append(choiceAbil);
					   $('.carousel.carousel-slider').carousel({
							    fullWidth: true,
							    indicators: true
							  });
				}
			}
			render();
			
	}},
	error: function(error){
		console.log(error);
	}
	})

}
createPokemon('nidoking');
createPokemon('haunter');
createPokemon('mewtwo');
$('#myForm').submit(function(){
	event.preventDefault();
	// let searchTerm = $('#poke').val();
	// searchTerm = searchTerm.toLowerCase();
	// createPokemon(searchTerm);
	// let choiceBanner =`<h1>${ashKetchum.roster[i].name}</h1>`,
	// 					choiceMenu = `<li><a href="">${ashKetchum.roster[i].name}</a></li>`
	// 					choicePic = `<img class="rosterPic" src="${ashKetchum.roster[i].pic}">`,
	// 					choiceStats = `<section class="rosterLeft">${ashKetchum.roster[i].stringRender()}</section>`,
	// 					choiceAbil = `<section class="rosterRight">${ashKetchum.roster[i].abilities}</section>`;
	// 				$('.container').append(choiceBanner).append(choicePic).append(choiceStats).append(choiceAbil);
})


 







