console.log("connected");
$(document).ready(function(){

	class Trainer{
		constructor(monster){
			this.monster = monster;
		}
	}

	class Pokemon {
	constructor(name, pic, stats, abilities){
		this.name = name ,
		this.pic = pic ,
		this.stats = stats , 
		this.abilities = abilities ;
		
	}
}

function createPokemon(pokemon){
	$.ajax({
	url: `https://pokeapi.co/api/v2/pokemon/${pokemon}/` , 
	type: "GET" , 
	dataType: "JSON",
	success: function(data){
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
			console.log(title);
	},
	error: function(error){
		console.log(error);
	}
	})
}
createPokemon('nidoking');
createPokemon('haunter');
createPokemon('mewtwo');
});


