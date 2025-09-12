console.log("Hi Nina! This is a test!")

const smallv = document.getElementById('samplesimages')
const Container = document.getElementById('displayContainer')

const images = [
    {
        src:"https://images.unsplash.com/photo-1616712602593-9d386fa95b84?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt:"tree tops under big cloud during sunset"
    },
    {
        src:'',
        alt:''
    },
    {
        src:'',
        alt:''
    },
    {
        src:'',
        alt:''
    },
    {
        src:'',
        alt:''
    },
    {
        src:'',
        alt:''
    }
]

function createSamplesimages (){

    images.forEach(function(image)) {

        let imageElement = document.createElement('img')
        console.log(`current image is`, image)
        imageElement.src = image.src

        imageElement.addEventListener('click', function(){
            console.log(image)
            createBigImage(image)
        })
    }
}