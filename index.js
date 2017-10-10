function Rectangle (width, height) {
  this.width = width
  this.height = height
}

Rectangle.prototype.getArea = function (width, height) {
  return this.width * this.height
}

function Square (size, color) {
  Rectangle.call(this, size, size)
  this.color = color
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

function getSquares (size, colors) {
  return colors.map(color => {
    return new Square(size, color)
  })
}

const colors = ['red', 'blue', 'yellow']
const squares = getSquares(40, colors)
Rectangle.prototype.getAreaX2 = function () {
  return this.getArea() * 2
}
const area = squares[1].getArea()
const doubleArea = squares[1].getAreaX2()
console.log(squares[1].color, area, doubleArea)
