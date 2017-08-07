
console.log("client.js loaded...");

/////////////////////////////////////////////////////////////////////
// // use code below if particles is being sourced from json file. //
// // will need to run on server if used                           //
/////////////////////////////////////////////////////////////////////

// particlesJS.load('particles-js', '../particles.json', function(){
//   console.log('particles.json loaded...');
// });


// particlesJS json
particlesJS('particles-js',
   app = {
    "particles":{
      "number":{
        "value":500
      },
      "color":{
        "value":"#3fff04"
      },
      "shape":{
        "type":"circle",
        "stroke":{
          "width":1,
          "color":"#ffffff"
        },
        "image":{
          "src":"../public/assets/images/favicon.ico"
        }
      },
      "opacity":{
        "value":0.5,
        "random":true,
        "anim":{
          "enable":false,
          "speed":1
        }
      },
      "size":{
        "value": 5,
        "random":false,
        "anim":{
          "enable": false,
          "speed":30
        }
      },
      "line_linked":{
        "enable": true,
        "distance": 120,
        "color":"#3fff04",
        "width":1
      },
      "move":{
        "enable":true,
        "speed":2,
        "direction":"none",
        "straight":false
      }
    },
    "interactivity":{
      "events":{
        "onhover":{
          "enable":true,
          "mode":"bubble"
        },
        "onclick":{
          "enable": true,
          "mode":"push"
        }
      },
      "modes":{
        "repulse":{
          "distance":50,
          "duration":0.4
        },
        "bubble":{
          "distance":70,
          "size":18
        }
      }
    }
  }
); // end of json
