import image1 from "/public/images/references/hamburger_bahnhof/hamburger_bahnhof_1.JPG"
import image2 from "/public/images/references/malerarbeiten/Malerarbeiten_1.JPG"
import image3 from "/public/images/references/risssanierung/risssanierung_dummy.jpg"
import image4 from "/public/images/references/schloss_biesdorf/schloss_biesdorf_1.jpg"
import image5 from "/public/images/references/wandbilder/Art_traktiv_GmbH_Berlin_1.JPG"
import image6 from "/public/images/references/youtube_space_berlin/youtube_space_berlin_1.jpeg"

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

const hamburgerBahnhof ={
  image: image1,
  description: 'Hamburger Bahnhof'
}
const malerarbeiten ={
  image: image2,
  description: 'Malerarbeiten'
}
const risssanierung ={
  image: image3,
  description: 'Risssanierung'
}
const schlossBiesdorf ={
  image: image4,
  description: 'Schloss Biesdorf'
}
const wandbilder ={
  image: image5,
  description: 'Wandbilder'
}
const youtubeSpaceBerlin ={
  image: image6,
  description: 'Youtube Space Berlin'
}

const picturesArr = [hamburgerBahnhof, malerarbeiten, risssanierung, schlossBiesdorf, wandbilder, youtubeSpaceBerlin]

export { picturesArr }