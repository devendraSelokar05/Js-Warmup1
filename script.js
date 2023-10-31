const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

var urls =[
  "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://plus.unsplash.com/premium_photo-1674675646706-8468e673b74a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
 "https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
];

var tracklastimage =-1;

var imageConatiner= function(x, y, imageurl){

  var container = document.createElement('div');
  container.classList.add('imagediv');
  container.style.left= x +'px'
  container.style.top= y +'px'

  var img = document.createElement('img');
  img.setAttribute("src", imageurl)
  
  container.appendChild(img);


  document.body.appendChild(container);

  gsap.to(img,{
    y:"0",
    ease: Power1,
    duration:.6
  });

  gsap.to(img, {
    y:"100%",
    ease: Power2,
    delay:.6, 
    onComplete:function(){
      container.remove();
    }

  });
};
        document.querySelector(".center").addEventListener("mousemove", throttleFunction (function (dets) {
        // Generate a random image index different from the last one displayed
         var randomIndex;
         do {
             randomIndex = Math.floor(Math.random() * urls.length);
         } while (randomIndex === tracklastimage);
    
         // Update the last displayed index
         tracklastimage = randomIndex;
    
         // Get the mouse coordinates
        var x = dets.clientX;
         var y = dets.clientY;
    
      // Get the image URL for the random index
      var imageUrls = urls[randomIndex];
    
       //Create and animate the image container
     imageConatiner(x, y, imageUrls);
  
  
  }, 300));


