
const characterstats = [
	{
		name: 'Snortlebat',
		class: 'Swamp Beast Diplomat',
        level: 5,
		health: 100,
		image: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',

        attacked: function() {
            this.health -= 20;
        },
        lvlup: function() {
            this.level += 1;
        }
    	}];

let atk_button = document.querySelector('.atk_button');
atk_button.addEventListener('click', function() {
    characterstats[0].attacked(); 
    renderStats(characterstats[0]);
    deathcheck(characterstats[0]);
    });
let lvl_button = document.querySelector('.lvl_button');
lvl_button.addEventListener('click', function() {
    characterstats[0].lvlup(); 
    renderStats(characterstats[0]);
    });

function renderStats(stats) {
    let html =  `
    <p> Class: ${stats.class}<br>
        Level: ${stats.level}<br>
        Health: ${stats.health}<br>
    </p>`;
    console.log("Render")
    document.querySelector(".stats").innerHTML = html;
}

function deathcheck(character) {
    if (character.health <= 0) {
        alert("Character Died");
    }
}

renderStats(characterstats[0]);



