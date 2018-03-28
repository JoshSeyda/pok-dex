console.log("connected");

class Trainer {
    constructor(name) {
        this.name = name;
        this.roster = [];
    }

    all() {
        console.log(this.roster);
    }

    get(pokemon) {
        for (let i = 0; i < this.roster.length; i++) {
            if (this.roster[i].name === pokemon) {
                return this.roster[i];
            }
        }
    }
}

class Pokemon {
    constructor(name, pic, stats, abilities) {
        this.name = name,
            this.pic = pic,
            this.stats = stats,
            this.abilities = abilities;
    }
    statsRender() {
        return `hp: ${this.stats.hp} <br> attack: ${this.stats.attck}<br> defense: ${this.stats.dfns}<br> speed: ${this.stats.spd}<br>`;
    }
    abilitiesRender() {
        return `${this.abilities.toString(", ")}`;

    }
}

let ashKetchum = new Trainer('ashKetchum');
console.log(ashKetchum);
let counter = 0;

function createPokemon(pokemon) {
    console.log('ajax');
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}/`,
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
            counter++;

            //waits for ajax to finish, then manipulate DOM
            if (counter === 3) {
                ashKetchum.all();
                console.log(ashKetchum);
                let render = function() {
                    for (let i = 0; i < ashKetchum.roster.length; i++) {
                        let card = `<div class="col s12 m6 l4 z-depth-5"><div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						  <img class="activator" src="${ashKetchum.roster[i].pic}">
						</div>
						<div class="card-content">
						  <span class="card-title activator grey-text text-darken-4">${ashKetchum.roster[i].name}<i class="material-icons right small">insert_chart</i></span>
						</div>
						<div class="card-reveal">
						  <span class="card-title grey-text text-darken-4">${ashKetchum.roster[i].name}<i class="material-icons right">close</i></span>
						 	<p>Stats</p> 
						  <p>${ashKetchum.roster[i].statsRender()}</p>
						  <p>Abilities</p>
						  <p>${ashKetchum.roster[i].abilitiesRender()}</p>
						</div>
					  </div>
					  </div>`;

                        $('.row').append(card);

                    }
                }
                render();

            }
            if (counter > 3) {
                let index = ashKetchum.roster.length - 1;
                console.log(index);
                let render = function() {
                    let card = `<div class="col s12 m6 l4 z-depth-5"><div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${ashKetchum.roster[index].pic}">
                        </div>
                        <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">${ashKetchum.roster[index].name}<i class="material-icons right small">insert_chart</i></span>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${ashKetchum.roster[index].name}<i class="material-icons right">close</i></span>
                            <p>Stats</p> 
                        <p>${ashKetchum.roster[index].statsRender()}</p>
                        <p>Abilities</p>
                        <p>${ashKetchum.roster[index].abilitiesRender()}</p>
                        </div>
                        </div>
                        </div>`;

                    $('.row').append(card);
                }
                render();
            }
        },
        error: function(error) {
            console.log(error);
        }
    })

}
createPokemon('nidoking');
createPokemon('haunter');
createPokemon('mewtwo');
$(document).ready(function() {
    $('.modal').modal();
    $('#modal1').modal('open');
    $('form').on('submit', function() {
        console.log("form!!!!")
        event.preventDefault();
        let name = $('input[type=search]').val();
        console.log(name);
        createPokemon(name);
    });
});