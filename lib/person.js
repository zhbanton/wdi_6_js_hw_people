var Person = function(options) {
  options = options || {};
  var age = options.age || 30;
  var weight = options.weight || 80;
  var height = options.height || Math.floor(Math.random() * 50) + 150;
  var friends = options.friends || [];
  this.age = age;
  this.weight = weight;
  this.height = height;
  this.friends = friends;
};
