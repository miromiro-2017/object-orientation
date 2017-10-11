class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }

  getArea () {
    return this.width * this.height
  }

  toString () {
    return 'I am a string'
  }
}

class Square extends Rectangle {
  constructor (size, color) {
    super(size, size)
    this.color = color
  }
}

function getSquares (size, colors) {
  return colors.map(color => {
    return new Square(size, color)
  })
}

const colors = ['red', 'blue', 'yellow']
const squares = getSquares(32, colors)

console.log(squares[0].toString())

console.log(squares)
