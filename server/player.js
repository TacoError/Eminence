const Entity = require("./entities/entity.js");

class Player {

	constructor(name, hero, client) {
		this.name = name;
		this.hero = new hero(this);
		this.client = client;
		this.entity = new Entity(null, 0, 0, 15, this.hero.color);
	}

	processKeys(keys) {
		
	}
	
};

module.exports = Player;