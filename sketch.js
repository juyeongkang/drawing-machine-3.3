  let array = [];
  let backgroundColor = 200;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);


  strokeWeight(10);

}
136, 201, 242

function draw() {

  if (mouseIsPressed) {
    backgroundColor -= 3;
    background(backgroundColor);
    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);

  }

}

function keyTyped(){

  if (key === 's'){
    // save this image
    saveCanvas('fileName','png');
  } else if (key === 'd'){
    //  display image
    background(2, 72, 115);

    beginShape();
    for(let i = 0; i < array.length; i++){
      // line(array[i][0], array[i][1], array[i + 1][0] , array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();


  }

  return false;
}
