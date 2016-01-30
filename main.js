//THE OBJECT OF MY AFFECTION: OBJECTS
//IN CLASS OBJECT EXERCISES

// For any methods that we didn't cover, please refer to the Object Documentation.
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Create an object called "me" that describes you with your name, city, and job title.

//console.log("Question 1");
var me = {
    name: "Samantha Spensley",
    city: "Denver",
    jobTitle: "Project Coordinator",  
};

Object {name: "Samantha Spensley", city: "Denver", jobTitle: "Project Coordinator"}


// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                               family: ['Joan', 'Kyle', 'Hank'] }

//console.log("Question 2");
me.family = ["John", "Laura", "Patrick"];

Object {name: "Samantha Spensley", city: "Denver", jobTitle: "Project Coordinator", family: Array[3]}



// 3. Using the "me" object, use two different methods of accessing your city.
//console.log("Question 3");
var meCity = me.city;
var meCity = me["city"];

// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinneChoice array)

invitees.adults[0].dinnerChoice[1];

// 5. Access Pablo's table number.

invitees.children[1].table;

// 6. Access Lauren's seating specialConsideration.

invitees.adults[2].specialConsiderations.seating;

// 7. Access Billy's dessert choice (this will be the third item in his dinneChoice array)

invitees.adults[1].dinnerChoice[2];

// 8. Access Ada's allergies.

invitees.children[2].allergies;

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

console.log("Lauren's appetizer is " + invitees.adults[2].dinnerChoice[0] + ". She will be eating " + invitees.adults[2].dinnerChoice[1] + " for dinner and has selected " + invitees.adults[2].dinnerChoice[2] + " as her dessert." );

//CREATE VARIABLE for "invitees.adults[2].dinnerChoice" and call variable in string

// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
var jsWorkshop = { }; 
console.log(jsWorkshop);


// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
jsWorkshop.classmates = ['Tommy', 'Rick', 'Joe', 'Emran', 'Tim'];

// 12. Acesss the third classmate in your "jsWorkshop" object.
jsWorkshop.classmates[2];

// 13. Get the length of the fourth classmate's name.
jsWorkshop.classmates[3].length;


// 14. Clear the classmates value.

jsWorkshop.classmates = '';

// 15. Create an emtpy array called "books".



// Create three objects that contain book titles, their author, and number of pages.
// Insert the three objects into the "books" array.
// (Feel free to make up the titles. And the authors. Have fun. No pressure.)
// Example of desired array: [ youHadMeAtWoof, bangkokHaunts, theCatcherInTheRye]
// Example of desired object: {title: "You Had Me at Woof", author: "Julie Klum", pages: 207}
// Final desired result:
    var books = [{youHadMeAtWoof: {title: "You Had Me at Woof",
                                  author: "Julie Klum",
                                  pages: 207
                                  },
                   theCatcherInTheRye: {
                                  title: "The Catcher in the Rye",
                                  author: "JD Salinger",
                                  pages: 214
                                  },
                   bangkokHaunts: {
                                  title: "Bangkok Haunts",
                                  author: "John Burdett",
                                  pages: 569,
                                  }
                }]
    
    var books = [];

var book1 = {samIam:
             {title: "Green Eggs and Ham",
               author: "Dr. Seuss",
               pages: 24
             }};
var book2 = {boysBoat:
        {title: "Boys in the Boat",
        author: "Daniel Brown",
        pages: 669
               }};
var book3 = {silkworm:
        {title: "Silkworm",
        author: "Robert Galbraith",
        pages: 547
        }};

books.push(book1, book2, book3);
// 15a. Access the author of the first book.

books[0].samIam.author

// 15b. Print the length of the author the the third book.
books[2].silkworm.author.length

// 16. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
// (Go ahead and make this up, too. Get wild.)
book1.dateRead = 1990; delete book1.dateRead;
book2.dateRead = 2015; delete book2.dateRead;
book3.dateRead = 2016; delete book3.dateRead;

book1.samIam.dateRead = 1990;
book2.boysBoat.dateRead = 2015;
book3.silkworm.dateRead = 2016;

// 17. Remove the second book from the books Array.
delete books.book2;

// Bonus: Explain, in your own words, the difference between Literal Notation and Constructor.

// 17. Let's play a game. Create an object (like we did with the bike in class) and assign it at least five properties.
// The class will guess what your object is based on it's properties.


// You're a zookeeper and keeping a detailed log of each of the animals in your zoo.
// 18. Create an empty object called "zoo"
 

// 19. Create assign three animals as your keys in the "zoo" object. The values of the animals should be empty objects.
var zoo = {};

zoo.elephant = {};
zoo.giraffe = {};
zoo.rhino = {};

console.log(zoo);


// 20. Within each animal empty object, assign a key/value pair of "timeSlept" and a number indicating the hours of sleep each animal got. (Make this up, obvi)
zoo.elephant.timeSlept = 10;
zoo.giraffe.timeSlept = 4;
zoo.rhino.timeSlept = 9;

// 21. Within each animal object, assign a object pair consisting of a key called "meals" and an empty array as the value.

zoo.elephant.meals = [];
zoo.giraffe.meals = [];
zoo.rhino.meals = [];
    
// 22. Within each animal's meals array, create two objects with keys of "monday" and "wednesday". You only feed those jerks twice a week. It's fine.
var monday = {monday: {}};
var wednesday = {wednesday: {}};

zoo.elephant.meals.push(monday, wednesday);
zoo.giraffe.meals.push(monday, wednesday);
zoo.rhino.meals.push(monday, wednesday);

// 23. In the individual days of the week, create an object with the key of each meal ("breakfast", "lunch", "dinner") and a made up value of what they ate.
// That array should look like this (within the meals object, within the animal object, within the zoo object):
  [ { monday: {
    breakfast: "cheetos on top of greek yogurt",
    lunch: "6 gallons of Diet Coke",
    dinner: "leftover lasagna"
  }},
   {wednesday: {
    breakfast: "cashews, diced apples, tuna, grapes, BubbleYum",
    lunch: "a ham and cheddar lunchable",
    dinner: "I put my thing down, flip it, and reverse it"
  }}]

  zoo.elephant.meals[0].monday.breakfast = "apples"
  zoo.elephant.meals[0].monday.lunch = "pizza pocket"
  zoo.elephant.meals[0].monday.dinner = "grilled cheese"
  zoo.elephant.meals[1].wednesday.breakfast = "gummie bears"
  zoo.elephant.meals[1].wednesday.lunch = "bananas"
  zoo.elephant.meals[1].wednesday.dinner = "chicken pot pie"

  zoo.giraffe.meals[0].monday.breakfast = "cherrios"
  zoo.giraffe.meals[0].monday.lunch = "pb and j"
  zoo.giraffe.meals[0].monday.dinner = "butternut squash"
  zoo.giraffe.meals[1].wednesday.breakfast = "lucky charms"
  zoo.giraffe.meals[1].wednesday.lunch = "tacos"
  zoo.giraffe.meals[1].wednesday.dinner = "mush-mush"
  
  zoo.rhino.meals[0].monday.breakfast = "pancakes"
  zoo.rhino.meals[0].monday.lunch = "veggies"
  zoo.rhino.meals[0].monday.dinner = "salad"
  zoo.rhino.meals[1].wednesday.breakfast = "burrito"
  zoo.rhino.meals[1].wednesday.lunch = "ice cream"
  zoo.rhino.meals[1].wednesday.dinner = "pizza"
 
  
// 24. Damn it. The night zookeeper just informed you that your second animal took a nap right before bed time. Add two hours to his "timeSlept" value.
  
var overSleep = zoo.giraffe.timeSlept;
zoo.giraffe.timeSlept = overSleep +2;


// 25. To each animal object, add a "favoriteActivities" key with the value being an array of three of his/her favorite activities.

zoo.elephant.favoriteActivities = ["skiing", "reading", "eating chocolate"];
zoo.giraffe.favoriteActivities = ["munching", "star gazing", "playing guitar"];
zoo.rhino.favoriteActivities = ["playing hooky", "bathing", "hide and seek"];

// 26. Your first animal just tossed his lunch at the zoo visitors. Change his monday lunch value to an empty string.

zoo.elephant.meals[0].monday.lunch = "";

// 27. You know your "zoo" object? The owner wants to add zookeepers to the object, too. But before we do that, we need to make sure
// the animals stay separate from the zookeepers. To do this, create an object within the "zoo" object. The key will be "animals" and the value will be an array
// containing the three animals you already defined.

var hairyDudes = zoo;
var zoo = {animals: hairyDudes};

// 28. To the "zoo" object, add an object named "zookeepers" with the value being and empty object.

zoo.zookeepers = {};

// 29. To the empty "zookeepers" object, add two objects with their keys being two names and their values being an empty object.

zoo.zookeepers.carl = {};
zoo.zookeepers.ginger = {};

// 30. This joker wants you to add the "hireDate" for each zookeeper. Within the empty array attached to each name, assign a key/value pair of
// "hireDate" and the value being a string of hire date.

zoo.zookeepers.carl.hireDate = "01/17/1998"
zoo.zookeepers.ginger.hireDate = "9/30/2011"

    
    var theNumber = Number(prompt("Pick a number", ""));
    alert("Your number is the square root of " + the Number * theNumber);