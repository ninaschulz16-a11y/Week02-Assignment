console.log("Hi Nina! This is a test!")

const smallv = document.getElementById('samplesimages')
const Container = document.getElementById('displayContainer')

const images = [
    {
        src:'./images/norwichriverclouds.jpg',
        alt:'Norwich river with clouds reflection'
    },
    {
        src:'./image/norwichriverupsidedown.jpg',
        alt:'tree and building reflection'
    },
    {
        src:'./images/norwichsunsetsky.jpg',
        alt:'orange sky'
    },
    {
        src:'./image/chromerpebbles.jpg',
        alt:'pebbles on the beach'
    }
]


function createSamplesImages (){

    images.forEach(function(image) {

        let imageElement = document.createElement('img');

    imageElement.src = image.src
        console.log(`current image is`, image);
        

        imageElement.addEventListener('click', function(){
            console.log(image)
            createBigImage(image)
        })
    
    })
 }

