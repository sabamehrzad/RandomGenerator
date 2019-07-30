var buttonOne = $('.buttonOne');
var edittedText = $('.newMessage');

var compliment = ["I bet you make babies smile.", "You should be proud of yourself.  I sure am.", "You're even more beautiful on the inside than you're on the outside.", "In High School I bet you were voted most likely to keep being awesome.", "If cartoon bluebirds were real, a couple of them would be sitting on your shoulders singing right now.", "You're an awesome friend.", "You're a gift to those around you.", "I LOVE your style.", "You are unapologetically yourself and I admire that about you.", "Our community is better with you in it.", "Everyone always gets knocked down sometimes, but you always get back up and keep going.", "You're like a breath of fresh air.", "When you make up your mind about something, nothing stands in your way.", "There's ordinary, and then there's you.", "Thank you for being you.","Your laugh makes the whole world joyful.", "Even though you're down, always know I love you and have your back."];

buttonOne.on("click", pickCompliment);

function pickCompliment() {
  event.preventDefault();
  console.log("You clicked me");
  var random = Math.random() * compliment.length;
  var rounded = Math.floor(random);
  var newCompliment = compliment[rounded];
  edittedText.text(newCompliment);
}



var buttonTwo = $('.buttonTwo');

buttonTwo.on("click", pickImage)

function pickImage() {
  event.preventDefault();
  console.log("You clicked this");
  var randomDecimal = Math.random() * 7;
  // because there are seven pictures
  var randomNumber = Math.floor(randomDecimal);
  randomNumber ++
  // this allows it to add one b/c the pictures all have number names starting with one

  var imageName = randomNumber + ".jpg"
  // allows you to pick a random number from the folder
  console.log(imageName)

  var imgSRC= "./Photos" + "/" + imageName;
  console.log(imgSRC)

  var image= $('.image')
  // need to make this variable to connnect it back to the HTML image div
  image.empty()
  // makes the image from before erase
  image.append(`<img src=${imgSRC}>`)

}
