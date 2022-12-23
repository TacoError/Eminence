const Power = require("../power.js");

class SpeedPower extends Power {

	constructor(player) {
		super(player);
		this.cooldown = 5;
	}

	onActivate() {
		// Implement speed power usage
	}
	
};

module.exports = SpeedPower;