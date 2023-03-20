const importAll = (r: __WebpackModuleApi.RequireContext ) => {
  return r.keys().map(r).map((el: any) => el.default)
}

const images1 = importAll(require.context('./hamburger_bahnhof', false, /\.(png|jpe?g|svg)$/))
const images2 = importAll(require.context('./malerarbeiten', false, /\.(png|jpe?g|svg)$/))
const images3 = importAll(require.context('./risssanierung', false, /\.(png|jpe?g|svg)$/))
const images4 = importAll(require.context('./schloss_biesdorf', false, /\.(png|jpe?g|svg)$/))
const images5 = importAll(require.context('./wandbilder', false, /\.(png|jpe?g|svg)$/))
const images6 = importAll(require.context('./youtube_space_berlin', false, /\.(png|jpe?g|svg)$/))

const hamburgerBahnhof = {
  image: images1[0],
  description: 'Hamburger Bahnhof',
  images: images1
}
const malerarbeiten = {
  image: images2[0],
  description: 'Malerarbeiten',
  images: images2
}
const risssanierung = {
  image: images3[0],
  description: 'Risssanierung',
  images: images3
}
const schlossBiesdorf = {
  image: images4[0],
  description: 'Schloss Biesdorf',
  images: images4
}
const wandbilder = {
  image: images5[0],
  description: 'Wandbilder',
  images: images5
}
const youtubeSpaceBerlin = {
  image: images6[0],
  description: 'Youtube Space Berlin',
  images: images6
}

const picturesArr = [hamburgerBahnhof, malerarbeiten, risssanierung, schlossBiesdorf, wandbilder, youtubeSpaceBerlin]

export { picturesArr }