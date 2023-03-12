import image1 from './hamburger_bahnhof/004.jpg'
import image2 from './malerarbeiten/IMG_4044.jpg'
import image3 from './risssanierung/risssanierung_dummy.jpg'
import image4 from './schloss_biesdorf/schloss_biesdorf_1.jpg'
import image5 from './wandbilder/reinl_1.jpg'
import image6 from './youtube_space_berlin/IMG_1458.jpg'

function importAll(r) {
  return r.keys().map(r).map(el => el.default);
}

const images1 = importAll(require.context('./hamburger_bahnhof', false, /\.(png|jpe?g|svg)$/))
const images2 = importAll(require.context('./malerarbeiten', false, /\.(png|jpe?g|svg)$/))
const images3 = importAll(require.context('./risssanierung', false, /\.(png|jpe?g|svg)$/))
const images4 = importAll(require.context('./schloss_biesdorf', false, /\.(png|jpe?g|svg)$/))
const images5 = importAll(require.context('./wandbilder', false, /\.(png|jpe?g|svg)$/))
const images6 = importAll(require.context('./youtube_space_berlin', false, /\.(png|jpe?g|svg)$/))

const hamburgerBahnhof ={
  image: image1,
  description: 'Hamburger Bahnhof',
  images: images1
}
console.log(hamburgerBahnhof)
const malerarbeiten ={
  image: image2,
  description: 'Malerarbeiten',
  images: images2
}
console.log(malerarbeiten)
const risssanierung ={
  image: image3,
  description: 'Risssanierung',
  images: images3
}
const schlossBiesdorf ={
  image: image4,
  description: 'Schloss Biesdorf',
  images: images4
}
const wandbilder ={
  image: image5,
  description: 'Wandbilder',
  images: images5
}
const youtubeSpaceBerlin ={
  image: image6,
  description: 'Youtube Space Berlin',
  images: images6
}

const picturesArr = [hamburgerBahnhof, malerarbeiten, risssanierung, schlossBiesdorf, wandbilder, youtubeSpaceBerlin]

export { picturesArr }