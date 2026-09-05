class Circle {
      constructor(radius) {
            this._radius = radius;
      }
      get radius() {
            return this._radius;
      }
      set radius(value) {
            if (value < 0) throw new Error("Radius cannot be negative");
            this._radius = value;
      }
      get area() {
            return Math.PI * this._radius ** 2;
      }
}

const c = new Circle(5);
console.log(c.radius);
c.radius = 10;
console.log(c.area.toFixed(2));

