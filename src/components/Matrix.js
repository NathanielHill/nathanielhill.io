import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.initCanvas = this.initCanvas.bind(this)
    this.animationUpdate = this.animationUpdate.bind(this)
    this.ctx = null
    this.canvas = null
    this.columns = 0
    this.MatrixArray = []
    this.counter = 0
  }

  static defaultProps = {
    fontSize: 20,
    fontFamily: 'arial',
    // textContent: '10\u{20BF}',
    textContent: '01',
    textColor: 'rgb(0, 100, 42)',
    backgroundColor: 'rgba(0, 22, 42, 0.15)',
    speed: 7
  }

  componentDidMount() {
    this.initCanvas()
    this.animationUpdate()
  }

  initCanvas () {
    if (typeof document !== 'undefined') {
      this.canvas = document.getElementById('matrix')
      this.canvas.width = document.body.clientWidth
      this.canvas.height = document.body.clientHeight
      this.ctx = this.canvas.getContext('2d')
      this.ctx.font = this.props.fontSize + 'px ' + this.props.fontFamily
      this.columns = this.canvas.width / this.props.fontSize
      for (let i = 0; i < this.columns; i++) {
        this.MatrixArray.push(Math.floor(Math.random() * this.props.fontSize))
      }
    }
  }
  animationUpdate () {
    this.counter++
    if (this.counter === this.props.speed) {
      this.counter = 0
      this.ctx.fillStyle = this.props.backgroundColor
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.fillStyle = this.props.textColor
      for (let i = 0, len = this.MatrixArray.length; i < len; i++) {
        this.MatrixArray[i]++
        let randomTextIndex = Math.floor(Math.random() * this.props.textContent.length)
        let randomText = this.props.textContent[randomTextIndex]
        let textYPostion = this.MatrixArray[i] * this.props.fontSize
        this.ctx.fillText(randomText, i * this.props.fontSize, textYPostion)
        if (textYPostion > this.canvas.height) {
          if (Math.random() > 0.9) {
            this.MatrixArray[i] = 0
          }
        }
      }
    }
    window.addEventListener('resize', this.initCanvas, false)
    window.requestAnimationFrame(this.animationUpdate)
  }

  render() {
    return (
      <canvas id='matrix'>
        <style jsx>{`
          canvas {
            z-index: -1;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: block;
            background-color: rgba(0, 22, 42, 0.1);
          }
        `}</style>
      </canvas>
    )
  }
}
