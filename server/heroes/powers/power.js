class Power {

	constructor(player) {
		this.player = player;
		this.cooldown = 10;
		this.cooldownState = 0;
	}

	isOnCooldown() {
		if (this.cooldownState == 0) {
			return false;
		}
		return (((new Date().getTime()) - this.cooldownState) / 1000) < this.cooldown;
	}

	setCooldown() {
		this.cooldownState = new Date().getTime();
	}
	
	onActivate() {
		
	}
	
};

module.exports = Power;