# Week02-Assignment

This assigment made me realise that there's much more to learn and practice, and that details are as relevant as the bigger picture.

Although I thought that  CSS would be the easiest part of the bootcamp, due to its designer like creative aspect, it has been particularly challanging, specially while creating a responsive photo gallery.

Through frustrating moments when CSS properties didn't work as I imagined , and trying so many different and new things that simply didn't seem to be right, I was able to learn a bit more of the logic that runs the "behind the scenes" with CSS.

Trial and error both made me feel incredibly frustrated, but provided such a relieve and feeling of accomplishment once I discovered what was wrong and be able to fix it.

What really kept me working on this for hours were CSS properties like object-fit, vh, dvh, and position: fixed. For example, using object-fit: cover , still didn't make made the big image fill the screen and caused unwanted cropping on mobile screens. Trying object-fit: contain also didn't preserved the full image and required many adjustments to prevent white gaps ( and there's still a white space when open on big screens... ). Similarly, I had to experiment with 100dvh and fixed positioning to ensure the navigation buttons and thumbnails remained visible and usable across devices (the buttons kept disappearing under the image).

Another key learning point was layering and z-index management, something I had to search and learn more about. Ensuring that buttons and thumbnails were always visible on top of the big image required me to carefully assign z-index values and avoid placing elements inside transformed(new thing I had to learn) or overflowing (another new thing I had to learn)containers that could break their fixed positioning.

This process reinforced the value of mobile-first design thinking. By designing for the smallest screens first, I was able to prioritize usability on the devices most likely to be used, and then scale up to larger screens while maintaining functionality and aesthetics.

In relation to JavaScript, I feel like the more I use it , the more I start to understand it. I have the feeling that once its logic clicks in my head, it will be more manageable than CSS for example. For now I will keep watching tutorials and reading the suggested sources, and I know I will soon wrap my head around it. 

However, I have failed to make it more presentable on bigger screens and feel like with more dedication and time I could have fixed this problem. 

