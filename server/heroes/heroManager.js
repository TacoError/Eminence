const SpeedHero = require("./hero/speedHero.js");

class HeroManager {

	constructor() {
		this.heroes = {
			"SpeedHero": SpeedHero
		};

		this.descriptions = {
			"SpeedHero": [
				"Speed Hero",
				"Speed up your gameplay by using the Speed Hero!",
				"Speeds up your player",
				null
			]
		};
	}

	pack() {
		return this.descriptions;
	}

	getHero(name) {
		return this.heroes[name];
	}
	
	heroExists(name) {
		return !!this.heroes[name];
	}
	
};

module.exports = new HeroManager();