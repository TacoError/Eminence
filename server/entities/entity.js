const SAT = require("sat");

class Entity {

	constructor(parent, x, y, color, radius) {
		this.parent = parent;
		this.x = x;
		this.y = y;
		this.color = color;
		this.radius = radius;

		this.nametag = "";
		this.showNametag = false;

		this.immobile = false;
		this.killOnCollision = false;
		this.aura = null;
	}

	getCollider() {
		return new SAT.Circle(new SAT.Vector(this.x, this.y), this.radius);
	}

	pack() {
		return [
			this.x,
			this.y,
			this.radius,
			this.color,
			this.showNametag,
			this.nametag
		];
	}
	
};

module.exports = Entity;