class Rectangle {
      constructor(width, height) {
            this.width = width;
            this.height= height;
      }
      area() {
            return this.width * this.height;
      }
      static description() {
            return "A rectangle is a four-sided shape";
      }
}

const rect = new Rectangle(5,10);
console.log(rect.area());
console.log(Rectangle.description());

