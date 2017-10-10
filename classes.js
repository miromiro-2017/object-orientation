class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }

  getArea () {
    return this.width * this.height
  }

  static calcArea (width, height) {
    return width * height
  }
}

class Square extends Rectangle {
  constructor (color, size) {
    super(size, size)
    this.color = color
  }
}

function getSquares (size, colors) {
  return colors.map(color => {
    return new Square(color, size)
  })
}

// const squares = getSquares(10, ['red', 'green', 'blue'])
// console.log(squares)

// method (object function)
const rect = new Rectangle(3, 4)
const area = rect.getArea()
console.log(area)
// static function
const calcdArea = Rectangle.calcArea(10, 20)
console.log(calcdArea)

const to = typeof rect
const tc = typeof Rectangle
console.log('Object', to)
console.log('Class', tc)
