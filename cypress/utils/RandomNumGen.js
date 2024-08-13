class RandomNumGen {
  static getRandNum(n) {
    if (typeof n !== 'number' || n <= 0) {
      throw new Error('should be a positive number')
    }
    return Math.floor(Math.random() * n)
  }
}

export default RandomNumGen
