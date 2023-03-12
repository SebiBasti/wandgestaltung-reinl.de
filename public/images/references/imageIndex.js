import image1 from "/public/images/references/hamburger_bahnhof/hamburger_bahnhof_1.JPG"
import image2 from "/public/images/references/malerarbeiten/Malerarbeiten_1.JPG"
import image3 from "/public/images/references/risssanierung/risssanierung_dummy.jpg"
import image4 from "/public/images/references/schloss_biesdorf/schloss_biesdorf_1.jpg"
import image5 from "/public/images/references/wandbilder/Art_traktiv_GmbH_Berlin_1.JPG"
import image6 from "/public/images/references/youtube_space_berlin/youtube_space_berlin_1.jpeg"

function importAll(r) {
  return r.keys().map(r);
}

const images1 = importAll(require.context('/public/images/references/hamburger_bahnhof', false, /\.(png|jpe?g|JPE?G|svg)$/))
const images2 = importAll(require.context('/public/images/references/malerarbeiten', false, /\.(png|jpe?g|JPE?G|svg)$/))
const images3 = importAll(require.context('/public/images/references/risssanierung', false, /\.(png|jpe?g|JPE?G|svg)$/))
const images4 = importAll(require.context('/public/images/references/schloss_biesdorf', false, /\.(png|jpe?g|JPE?G|svg)$/))
const images5 = importAll(require.context('/public/images/references/wandbilder', false, /\.(png|jpe?g|JPE?G|svg)$/))
const images6 = importAll(require.context('/public/images/references/youtube_space_berlin', false, /\.(png|jpe?g|JPE?G|svg)$/))

const hamburgerBahnhof ={
  image: image1,
  description: 'Hamburger Bahnhof',
  images: images1
}
const malerarbeiten ={
  image: image2,
  description: 'Malerarbeiten',
  images: images2
}
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