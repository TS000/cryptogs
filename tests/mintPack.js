const cryptogs = require("./cryptogs.js")

let animals = [
  "agantelope.jpg",
  "agbuffalo.jpg",
  "agbull.jpg",
  "agelephant.jpg",
  "agfish.jpg",
  "aghippo.jpg",
  "agkillerwhale.jpg",
  "aglobster.jpg",
  "agmountaingoat.jpg",
  "agoctopus.jpg",
  "agpenguin.jpg",
  "agrhino.jpg",
  "agwalrus.jpg",
  "agzebra.jpg"
]

let aw90s = [
  "awripsaw.jpg",
  "awrainbowyinyang.jpg",
  "awpoison.jpg",
  "awpurepoison.jpg",
  "awyinandyang.jpg",
  "awskullsstars.jpg",
  "awstussy.jpg",
  "awblackwidow.jpg",
  "awsmile1.jpg",
  "awripsaw.jpg",
  "awrainbowyinyang.jpg",
  "awpoison.jpg",
  "awpurepoison.jpg",
  "awyinandyang.jpg",
  "awskullsstars.jpg",
  "awstussy.jpg",
  "awblackwidow.jpg",
  "awsmile1.jpg",
]

let ad90s = [
  "ad8ball.png",
  "adbiohaz.png",
  "adsmile.png",
  "adyinyang.png",
  "adyinyanggroovy.png",
  "ad8ball.png",
  "adbiohaz.png",
  "adsmile.png",
  "adyinyang.png",
  "adyinyanggroovy.png",
  "ad8ball.png",
  "adbiohaz.png",
  "adsmile.png",
  "adyinyang.png",
  "adyinyanggroovy.png",
]



function grabRandomTen(arr){
  let newArr = []
  var tempArray = arr.slice();
  while(newArr.length<10){
    let piece = tempArray.splice(Math.floor(Math.random()*tempArray.length), 1)
    newArr.push(piece[0]);
  }
  return newArr;
}


// cryptogs.mintPack(0,grabRandomTen(ad90s),0.001)
// cryptogs.mintPack(0,grabRandomTen(ad90s),0.001)
// cryptogs.mintPack(0,grabRandomTen(ad90s),0.001)

cryptogs.mintPack(0,grabRandomTen(ad90s),0.005)
cryptogs.mintPack(0,grabRandomTen(aw90s),0.01)

// cryptogs.mintPack(0,grabRandomTen(aw90s),0.002)
// cryptogs.mintPack(0,grabRandomTen(aw90s),0.002)
//
// cryptogs.mintPack(0,grabRandomTen(animals),0.1)
// cryptogs.mintPack(0,grabRandomTen(animals),0.1)
//
// cryptogs.mintPack(0,[
//   "ethereumlogo.png",
//   "ethereumlogo.png",
//   "ethereumlogo.png",
//   "ethereumlogo.png",
//   "ethereumlogo.png",
//   "ethereumlogo.png",
//   "ethereumlogo.png",
//   "ethereumlogo.png",
//   "unicorn.png",
//   "dragon.png",
// ],0.05)
