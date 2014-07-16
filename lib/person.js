var Person = function(firstName, lastName, options) {
  options = options || {};
  var age = options.age || 30;
  var weight = options.weight || 80;
  var height = options.height || Math.floor(Math.random() * 50) + 150;
  var friends = options.friends || [];

  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.weight = weight;
  this.height = height;
  this.friends = friends;
};

Person.prototype = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  weightInStone: function() {
    return this.weight / 6.35;
  },
  addFriend: function(friend) {
    this.friends.push(friend);
  },
  removeFriend: function(name) {
    var removalIndex = -1;
    for (var i = 0; i < this.friends.length; i++) {
      if (this.friends[i].fullName() === name) removalIndex = i;
    }
    if (removalIndex != -1) this.friends.splice(removalIndex, 1);
  },
  greetPeople: function(options) {
    options = options || {};
    var people = options.people || this.friends;
    if (people.length < 1){
      throw new Error('no people to greet!');
    }
    var greeting = options.greeting || "hi";
    var message = "";
    people.forEach(function(person) {
      message += greeting + ", " + person.firstName + ", ";
    });
    return message;
  }
};

zack = new Person("Zack", "Banton");

