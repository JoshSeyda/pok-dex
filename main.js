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

function createPokemon(name){
	$.ajax({
	url: `https://pokeapi.co/api/v2/pokemon/${name}/` , 
	type: "GET" , 
	dataType: "JSON",
	success: function(data){
		let name = data.name ,
			pic = data.sprites.front_default ,
			xP = data.base_experience;	
		let stat = {},
			abil = [],

				let hp = data.stats[5].stat.name ,
					hpLvl = data.stats[5].base_stat,
					attck = data.stats[4].stat.name ,
					attckLvl = data.stats[4].base_stat,
					dfns = data.stats[3].stat.name ,
					dfnsLVL = data.stats[3].base_stat,
					spd = data.stats[0].stat.name ,
					spdLvl = data.stats[0].base_stat ,
					ability0 = data.abilities[0].ability.name ,
					ability1 = data.abilities[1].ability.name ,
					ability2 = data.abilities[2].ability.name ;

			stat.hp = hpLvl;	
			stat.attck = attckLvl;
			stat.dfns = dfnsLVL;
			stat.spd = spdLvl;	
			abil =[`${ability0}`,`${ability1}`,`${ability2}`];

		let newP = new Pokemon(name, pic, stat, abil);

			}
	},
	error: function(error){
		console.log(error);
	}
	});
}

});