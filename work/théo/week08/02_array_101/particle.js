function Particle() {
	this.setup = function (x, y) {
		this.x = x;
		this.y = y;
		this.size = 10;
	}

	this.draw = function() {
		ellipse(this.x, this.y, this.size, this.size);
	}
}