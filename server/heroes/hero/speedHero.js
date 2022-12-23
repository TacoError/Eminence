const Hero = require("../hero.js");
const SpeedPower = require("../powers/power/speedPower.js");

class SpeedHero extends Hero {

	constructor(player) {
		super("SpeedHero", "red", player);
		this.power1 = new SpeedPower(player);
		this.color = "red";
	}
	
};

module.exports = SpeedHero;