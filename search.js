


$('#myForm').submit(function(){
	event.preventDefault();
	let name = $('#poke').val() ,
		userInput = name.toLowerCase(),
		pokeUrl = `https://pokeapi.co/api/v2/pokemon/${userInput}/`
$.ajax({
	url: pokeUrl , 
	type: "GET" , 
	dataType: "JSON",
	success: function(data){
		let name = data.name ,
			pokeNum = data.id ,
			pokePic = `<img class="pokePic" src="${data.sprites.front_default}">`,
			startingXP = data.base_experience;

		let pokeTitle = `<h1 id="pokeTitle">${name} is Pokémon number ${pokeNum} with starting XP of ${startingXP}</h1>`,
			pokeBlock = $(pokeTitle).append(pokePic)
		$('form').append(pokeBlock);
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
})
});	
// console.log(data);
		// console.log(data.name); 
		// console.log(data.stats[0].stat.name);
		// console.log(data.stats[0].effort);
		// console.log(data.stats[0].base_stat);
		// console.log(data.moves[0].move.name);
		// console.log(data.moves[0].version_group_details[0].level_learned_at);
		// console.log(data.sprites.front_default);
		// console.log(data.id);
		// console.log(data.base_experience);
		// console.log(data.types[0].type.name);

















