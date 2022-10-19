/*
 * Author:    Jack Wright
 * Created:   13.10.2022
 * License: Public Domain
 */

 // Define Variables
 myTransport = ["Metro Bus", " feet", " car", " plane", " elephant", " camel"
      ];

 myMainRide = {
    make : "Jaguar",
    model : "F-Type",
    color : "Forest_Green",
    year : 2013,
    age : function() {
        return 2023 - age;
        }
    };

  // output
  document.writeln("Kinds of transportation I use: ", myTransport, "<br>");
  document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");
