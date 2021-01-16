import * as THREE from 'three'

class Sketch {
  constructor() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.clicker = document.getElementById('content')
    this.container = document.getElementById('slider')
    this.images = JSON.parse(this.container.getAttribute('data-image'))
    console.log('Images: ', this.images)

    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(0xeeeeee, 1)
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    console.log('--- init')
  }
}

export default Sketch
