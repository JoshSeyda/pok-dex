# Pokédex
### A project to explore jQuery, Ajax, APIs, and SASS with Google's Materialize Library
### [View Project](https://joshseyda.github.io/pokedex/)
---
#### The Pokémon API is very slow to load, so please be patient!
## Motivation
######  This dynamically generated Page was created as a project for my New York Code + Design Academy bootcamp. I was tasked with accessing an open source Pokémon API, generate a page with that data, implement ES6 class structures in my JavaScript, utilize Materialize styling elements, and write my own stylings with a SASS/SCSS compiler. 
## Build Status
###### At the moment, this project is moving toward some of my Post-MVP goals. 
###### Some features I am currently working out for Post-MVP deployment are...
###### * Dynamically generate trainer name from user input in the Professor Oak Modal
###### * Implement local storage of API content in the browser's cookies while the user is on page
###### * an additional page to sort Pokémon from the API by type, and then add them to your trainer's roster
## Code Style
######  My compiled CSS is extremely brief because Materialize does so much styling out-of-the-box, this is extremely helpful, but at times limiting. It took me an inordinate amount of time to make sure that elements I was styling and manipulating in the DOM did not conflict with all of the properties inherited from Materialize. This is also the first time I've used SCSS in a full project, so thankfully for me it was an easy transition because of the afforementioned brevity.
## Technology Used
###### JavaScript, jQuery, API's, HTML5, CSS3, Materialize, and SCSS
## Features
###### * Dynamically generated collection of Pokémon from the API
###### * Modal pop-up with music
###### * Carousel of cards with revealable properties 
###### * Search function that automatically adds new cards to carousel and pushes them to the front
###### * Display Relevant information about Pokémon

## Code Example
###### 
```javascript
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
        return `${this.abilities.join(", ")}`;

    }
}

```
---
## Licence
##### MIT License

###### Copyright &copy; [2018] [Joshua Seyda]

###### Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

###### The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

###### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.