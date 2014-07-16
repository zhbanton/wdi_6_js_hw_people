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
  }
};

zack = new Person("Zack", "Banton");
sam = new Person("Sam", "Belt");
