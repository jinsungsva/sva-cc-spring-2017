 var r = 0;
var g = 0;
var b = 0;

  if (mouseX > width/2) {
    r++;
    g--;
  } else {
    r--;
    g++;
  }

  if (r > 255) {
    r = 255;
  } else if ( r < 0 ) {
    r = 0;
  }
  if (g > 255) {
    g = 255;
  } else if ( g < 0 ) {
    g = 0;
  }
}
