console.log("connected");
$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/36" , 
	type: "GET" , 
	dataType: "JSON",
	success: function(data){
		let name = data.name ,
			pokeNum = data.id ,
			pokePic = `<img class="pokePic" src="${data.sprites.front_default}">`,
			startingXP = data.base_experience;
			for(j=0;j<data.stats.length;j++){
				let statName = data.stats[j].stat.name ,
				initialStat = data.stats[j].base_stat;
				$(pokeBlock).append(`<h3 class="stats">${name}'s starting ${statName} level is ${initialStat}</h3>`);
			}
			for(k=0; k < data.moves.length; k++){
				let moveName = data.moves[k].move.name ,
					moveLVL = data.moves[k].version_group_details[0].level_learned_at;
					$(pokeBlock).append(`<h4 class="moves">${moveName} at level ${moveLVL}</h4>`);
			}
			for(l=0; l < data.types.length; l++){
				let pokeType = data.types[l].type.name;
				console.log(`${name} is ${pokeType} type of Pokémon!`);
				$(pokeBlock).append(`${name} is ${pokeType} type of Pokémon!`)
			}
	},
	error: function(error){
		console.log(error);
	}
	});
$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/93" , 
	type: "GET" , 
	dataType: "JSON",
	success: function(data){
		let name = data.name ,
			pokeNum = data.id ,
			pokePic = `<img class="pokePic" src="${data.sprites.front_default}">`,
			startingXP = data.base_experience;
			for(j=0;j<data.stats.length;j++){
				let statName = data.stats[j].stat.name ,
				initialStat = data.stats[j].base_stat;
				$(pokeBlock).append(`<h3 class="stats">${name}'s starting ${statName} level is ${initialStat}</h3>`);
			}
			for(k=0; k < data.moves.length; k++){
				let moveName = data.moves[k].move.name ,
					moveLVL = data.moves[k].version_group_details[0].level_learned_at;
					$(pokeBlock).append(`<h4 class="moves">${moveName} at level ${moveLVL}</h4>`);
			}
			for(l=0; l < data.types.length; l++){
				let pokeType = data.types[l].type.name;
				console.log(`${name} is ${pokeType} type of Pokémon!`);
				$(pokeBlock).append(`${name} is ${pokeType} type of Pokémon!`)
			}
	},
	error: function(error){
		console.log(error);
	}
	});
$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/150" , 
	type: "GET" , 
	dataType: "JSON",
	success: function(data){
		let name = data.name ,
			pokeNum = data.id ,
			pokePic = `<img class="pokePic" src="${data.sprites.front_default}">`,
			startingXP = data.base_experience;
			for(j=0;j<data.stats.length;j++){
				let statName = data.stats[j].stat.name ,
				initialStat = data.stats[j].base_stat;
				$(pokeBlock).append(`<h3 class="stats">${name}'s starting ${statName} level is ${initialStat}</h3>`);
			}
			for(k=0; k < data.moves.length; k++){
				let moveName = data.moves[k].move.name ,
					moveLVL = data.moves[k].version_group_details[0].level_learned_at;
					$(pokeBlock).append(`<h4 class="moves">${moveName} at level ${moveLVL}</h4>`);
			}
			for(l=0; l < data.types.length; l++){
				let pokeType = data.types[l].type.name;
				console.log(`${name} is ${pokeType} type of Pokémon!`);
				$(pokeBlock).append(`${name} is ${pokeType} type of Pokémon!`)
			}
	},
	error: function(error){
		console.log(error);
	}
	});
class Pokemon {
	constructor(){
		this.name = name;
		this.stats =
	}
}