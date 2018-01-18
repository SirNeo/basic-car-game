import { ASSETS_URL } from '.'

const fileLoader = game => {
  console.log('fileLoader')
  game.load.crossOrigin = 'Anonymous'
  game.stage.backgroundColor = '#1E1E1E'
  game.load.image('asphalt', `${ASSETS_URL}/sprites/asphalt/asphalt.png`)
  game.load.image('car', `${ASSETS_URL}/sprites/car/car1.png`)
}

export default fileLoader