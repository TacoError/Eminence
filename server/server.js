const fs = require("fs");
fs.mkdirSync(__dirname + "/../data/", { recursive: true });
fs.closeSync(fs.openSync(__dirname + "/../data/accounts.json", "a"));

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const Client = require("./client.js");

class EminenceServer {

	constructor() {
		this.clients = new Map();
		
		const app = express();
		const server = createServer(app);
		const io = new Server(server);

		app.use(express.static(__dirname + "/../client"));
		const port = process.env.PORT || 4000;
		server.listen(port);

		io.on("connection", (socket) => {
			console.log("Connection made.");
			this.addClient(socket);
			
			socket.on("disconnect", () => {
				console.log("Connection closed.");
				this.removeClient(socket);
			});
		});

		console.log("Eminence Server started. (:" + port + ")");
	}

	tick() {
		
	}

	removeClient(socket) {
		this.clients.get(socket.id).close();
		this.clients.delete(socket.id);
	}

	addClient(socket) {
		this.clients.set(socket.id, new Client(socket));
	}
	
};

module.exports = new EminenceServer();