console.log("Hi Nina! This is a test!")

const thumbnails = document.getElementById('thumbnails');
const displayContainer = document.getElementById('displayContainer');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let currentIndex = 0;

const images = [
    {
        src:'./images/irelandfloatingisland.jpg',
        alt:'islands in the distance and horses on field'
    },
    {
        src:'./images/norwichriverupsidedown.jpg',
        alt:'tree and building reflection'
    },
    {
        src:'./images/lisbonsunset.jpg',
        alt:'orange sky Tejo river'
    }

    
];


function createThumbnails (){

    images.forEach(function(image,index) {

        let imageElement = document.createElement('img');
        imageElement.src = image.src;
        imageElement.alt = image.alt;
        imageElement.classList.add('thumbnail');
        imageElement.addEventListener('click', function(){
            currentIndex = index;
            displayBigImage(images[currentIndex]);
        });
       
        thumbnails.appendChild(imageElement);

        });
    
    }
   

 function displayBigImage (imgDetails){
    displayContainer.innerHTML = '';
    const bigImage = document.createElement ('img');
    bigImage.src = imgDetails.src;
    bigImage.alt = imgDetails.alt;
    bigImage.classList.add('large-image');
    displayContainer.appendChild (bigImage);
 }
 leftButton.addEventListener('click', function (){
    currentIndex = (currentIndex - 1 + images.length)% images.length;
    displayBigImage(images[currentIndex]);
 });
 rightButton.addEventListener('click',function (){
    currentIndex = (currentIndex + 1) % images.length;
    displayBigImage(images[currentIndex]);
 });

 createThumbnails();
 displayBigImage(images[currentIndex]);

