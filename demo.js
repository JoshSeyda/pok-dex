`<div class="card carousel-item red white-text" id="pokeCard${i}">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${ashKetchum.roster[i].pic}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${ashKetchum.roster[i].name}<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${ashKetchum.roster[i].name}<i class="material-icons right">close</i></span>
      <p>${ashKetchum.roster[i].stringRender()}</p>
      <p>${ashKetchum.roster[i].abilities}</p>
    </div>
  </div>`

<
div class = "card"
id = "pokeCard${i}" >
    <
    div class = "card-image waves-effect waves-block waves-light" >
    <
    img class = "activator"
src = "${ashKetchum.roster[i].pic}" >
    <
    /div> <
    div class = "card-content" >
    <
    span class = "card-title activator grey-text text-darken-4" > $ { ashKetchum.roster[i].name } < i class = "material-icons right" > more_vert < /i></span >
    <
    /div> <
    div class = "card-reveal" >
    <
    span class = "card-title grey-text text-darken-4" > $ { ashKetchum.roster[i].name } < i class = "material-icons right" > close < /i></span >
    <
    p > $ { ashKetchum.roster[i].stringRender() } < /p> <
    p > $ { ashKetchum.roster[i].abilities } < /p> <
    /div> <
    /div>




if (counter === 3) {
    ashKetchum.all();
    console.log(ashKetchum);
    let render = function() {
        for (let i = 0; i < ashKetchum.roster.length; i++) {
            let container = `<div class="card carousel-item red white-text" id="pokeCard${i}"></div>`,
                choicePic = `<div class="card-image waves-effect waves-block waves-light">
               <img class="activator" src="${ashKetchum.roster[i].pic}">
                </div>`,
                choiceBanner = `<div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${ashKetchum.roster[i].name}<i class="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
               </div>`,
                choiceStats = `<div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${ashKetchum.roster[i].name}<i class="material-icons right">close</i></span>
                <p>${ashKetchum.roster[i].stringRender()}</p>
                <p>${ashKetchum.roster[i].abilities}</p>
              </div>`;

            if (i === 0) { $('.carousel-item').attr('href', '#one!'); } else if (i === 1) { $('.carousel-item').attr('href', '#two!'); } else if (i === 2) { $('.carousel-item').attr('href', '#three!'); } else { //donothing!!!
            }
            $(container).append(choicePic).append(choiceBanner).append(choiceStats);
            $('.carousel.carousel-slider.center').append(container);
            $('.carousel.carousel-slider').carousel({
                fullWidth: true,
                indicators: true,
                dist: 0
            });

        }
    }
    render();

}



if (counter === 3) {
    ashKetchum.all();
    console.log(ashKetchum);
    let render = function() {
        for (let i = 0; i < ashKetchum.roster.length; i++) {
            let container = `<div id="pokeCard${i}" class="carousel-item red white-text"></div>`,
                choiceBanner = `<h1>${ashKetchum.roster[i].name}</h1>`,
                choiceBlock = `<div></div>`,
                choicePic = `<img class="rosterPic" src="${ashKetchum.roster[i].pic}">`,
                choiceStats = `<p class="white-text">${ashKetchum.roster[i].stringRender()}</p>`,
                choiceAbil = `<p class="white-text">${ashKetchum.roster[i].abilities}</p>`;

            if (i === 0) { $('.carousel-item').attr('href', '#one!'); } else if (i === 1) { $('.carousel-item').attr('href', '#two!'); } else if (i === 2) { $('.carousel-item').attr('href', '#three!'); } else { //donothing!!!
            }
            $(choiceBlock).append(choicePic).append(choiceStats).append(choiceAbil);
            $('.carousel.carousel-slider.center').append(container);
            $(`#pokeCard${i}`).append(choiceBanner).append(choiceBlock);
            $('.carousel.carousel-slider').carousel({
                fullWidth: true,
                indicators: true,
                dist: 0
            });

        }
    }
    render();

}