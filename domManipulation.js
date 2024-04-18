// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
image1Button.addEventListener('dblclick', function(){
  image.src= "https://i.kym-cdn.com/photos/images/original/002/018/144/1f8.png";
})
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('mouseover', function() {
  myName.innerHTML = "My name is Jeff";
  myHobby.innerHTML = "I like to eat pizza";
  myLocation.innerHTML = "I live in New York City";

});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.





// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener ('mouseout', function() {
  image.src = "https://i.redd.it/qzvfyiue5k9b1.jpg"

})
// BONUS
// 7. Try using different event types for your buttons.

