$('form').on('submit', function() {
    console.log("form!!!!")
    let name = $('input[type=search]').val();
    console.log(name);
    let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    $.ajax({
        url: pokeUrl,
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            console.log('test');

            //link datapoints to variables
            let name = data.name,
                title = data.name,
                pic = data.sprites.front_default,
                xP = data.base_experience,
                stat = {},
                abil = [];
            hp = data.stats[5].stat.name,
                hpLvl = data.stats[5].base_stat,
                attck = data.stats[4].stat.name,
                attckLvl = data.stats[4].base_stat,
                dfns = data.stats[3].stat.name,
                dfnsLVL = data.stats[3].base_stat,
                spd = data.stats[0].stat.name,
                spdLvl = data.stats[0].base_stat;

            //set the stat object
            stat.hp = hpLvl;
            stat.attck = attckLvl;
            stat.dfns = dfnsLVL;
            stat.spd = spdLvl;

            //set the ability array
            for (i = 0; i < data.abilities.length; i++) {
                let ability = data.abilities[i].ability.name;
                abil.push(`${ability}`);
            }

            // move pokemon object to trainer
            title = new Pokemon(name, pic, stat, abil);
            ashKetchum.roster.push(title);
            ashKetchum.get(title);
            let render = function() {
                let card = `<div class="col s12 m6 l4 z-depth-5"><div class="card">
					<div class="card-image waves-effect waves-block waves-light">
					  <img class="activator" src="${pic}">
					</div>
					<div class="card-content">
					  <span class="card-title activator grey-text text-darken-4">${name}<i class="material-icons right small">insert_chart</i></span>
					</div>
					<div class="card-reveal">
					  <span class="card-title grey-text text-darken-4">${name}<i class="material-icons right">close</i></span>
						 <p>Stats</p> 
					  <p>${stat.statsRender()}</p>
					  <p>Abilities</p>
					  <p>${abil.abilitiesRender()}</p>
					</div>
				  </div>
				  </div>`;

                $('.row').append(card);
            }
            render();

        },
        error: function(error) {
            console.log(error);
        }
    })
});