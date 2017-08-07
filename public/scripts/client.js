
console.log("client.js loaded...");

particlesJS.load('particles-js', '../particles.json', function(){
  console.log('particles.json loaded...');
  console.log(particles.number);
});



function link_color(){
  var color = document.getElementById('select').value;
  console.log(color);
};
