const heroManager = require("./heroes/heroManager.js");
const Player = require("./player.js");

class Client {

	constructor(socket) {
		this.socket = socket;
		this.emit = (...args) => this.socket.emit(...args);
		
		this.handlers = {
			play: {
				arguments: {
					"name": "string",
					"hero": "string"
				},
				handler: this.play
			}
		};
		
		this.socket.onAny(this.handle);

		this.player = null;
	}

	handle(sEvent, ...args) {
		if (!this.handlers[event]) {
			return;
		}
		const event = this.handlers[sEvent];
		if (args.length < event.arguments.length) {
		    return;
		
		}
		for (let i = 0; i < event.arguments.length; i++) {
			if (typeof(args[i]) !== event.arguments[i]) {
				return;
			}
		}
		event.handler(...args);
	}

	play(...args) {
		if (this.player !== null) {
			return;
		}
		
		const name = args[0];
		const hero = args[1];

		if (!heroManager.heroExists(hero)) {
			this.emit("error", "Invalid hero.");
			return;
		}
		if (name.length < 3) {
			this.emit("error", "Name must be at least 3 characters.");
			return;
		}
		if (name.length > 15) {
			this.emit("error", "Name cannot be more than 15 characters.");
			return;
		}

		this.player = new Player(name, heroManager.getHero(hero));		
	}
	
	close() {
		
	}
	
};

module.exports = Client;