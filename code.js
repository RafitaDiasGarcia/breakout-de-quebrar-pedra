var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["47dcea9e-1ee7-4560-971c-a252b49b9f24"],"propsByKey":{"47dcea9e-1ee7-4560-971c-a252b49b9f24":{"name":"pedrinha","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"7KjvrmDf1rSyNhoNYnQfQaQjN3O_sT5.","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/47dcea9e-1ee7-4560-971c-a252b49b9f24.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState = 'serve'
function draw() {
  background ("black");
  drawSprites();
  fill("cyan");
  textSize(25);
  text("Pontos: " + playerScore,10,390);
  if (gameState == 'end'){
  fill ('red');
  text ('Você perdeu', 130, 170);
}
  if (gameState == 'serve'){
  fill("cyan");
  text ("Aperte espaço para começar",35,170)
  if (keyDown("space")){
  bola.velocityX = 6;
  bola.velocityY = 4
  gameState = 'play'
  }
  }
  if (gameState == 'play'){
    if (bola.isTouching(bottomEdge)){
      gameState = 'end'
    }
  bola.bounceOff (rightEdge);
  bola.bounceOff (leftEdge);
  bola.bounceOff (raquete);
  bola.bounceOff(topEdge);
  raquete.collide(rightEdge);
  raquete.collide(leftEdge);
  raquete.x = World.mouseX;
  if (bola.bounceOff(pedra)){
    playerScore = playerScore + 1
    pedra.destroy ()
  }
  if (bola.bounceOff(pedra2)){
    playerScore = playerScore + 1
    pedra2.destroy ()
  }
  if (bola.bounceOff(pedra3)){
    playerScore = playerScore + 1
    pedra3.destroy ()
  }
  if (bola.bounceOff(pedra4)){
    playerScore = playerScore + 1
    pedra4.destroy ()
  }
  if (bola.bounceOff(pedra5)){
    playerScore = playerScore + 1
    pedra5.destroy ()
  }
  if (bola.bounceOff(pedra6)){
    playerScore = playerScore + 1
    pedra6.destroy ()
  }
  if (bola.bounceOff(pedra7)){
    playerScore = playerScore + 1
    pedra7.destroy ()
  }
  if (bola.bounceOff(pedra8)){
    playerScore = playerScore + 1
    pedra8.destroy ()
  }
  if (bola.bounceOff(pedra9)){
    playerScore = playerScore + 1
    pedra9.destroy ()
  }
  if (bola.bounceOff(pedra10)){
    playerScore = playerScore + 1
    pedra10.destroy ()
  }
  if (bola.bounceOff(pedra11)){
    playerScore = playerScore + 1
    pedra11.destroy ()
  }
  if (bola.bounceOff(pedra12)){
      playerScore = playerScore + 1
      pedra12.destroy ()
  }
  if (playerScore == 12){
    fill("lightGreen");
    text("Você venceu",130,200);
    bola.destroy()
    raquete.destroy()
  }
}
}
var playerScore = 0;
var bola = createSprite(200, 200, 20, 20);
var raquete = createSprite(200, 350, 100, 20)
console.log ("hello world")
raquete.shapeColor = "yellow"
bola.shapeColor = "white"
var pedra = createSprite (50, 50, 50, 50)
var pedra2 = createSprite (110, 50, 50, 50)
var pedra3 = createSprite (170, 50, 50, 50)
var pedra4 = createSprite (230, 50, 50, 50)
var pedra5 = createSprite (290, 50, 50, 50)
var pedra6 = createSprite (350, 50, 50, 50)

var pedra7 = createSprite (50, 110, 50, 50)
var pedra8 = createSprite (110, 110, 50, 50)
var pedra9 = createSprite (170, 110, 50, 50)
var pedra10 = createSprite (230, 110, 50, 50)
var pedra11 = createSprite (290, 110, 50, 50)
var pedra12 = createSprite (350, 110, 50, 50)
createEdgeSprites ();

pedra7.setAnimation("pedrinha");
pedra7.scale = 0.3;
pedra8.setAnimation("pedrinha");
pedra8.scale = 0.3;
pedra9.setAnimation("pedrinha");
pedra9.scale = 0.3;
pedra10.setAnimation("pedrinha");
pedra10.scale = 0.3;
pedra11.setAnimation("pedrinha");
pedra11.scale = 0.3;
pedra12.setAnimation("pedrinha");
pedra12.scale = 0.3;
pedra.setAnimation("pedrinha");
pedra.scale = 0.3;
pedra2.setAnimation("pedrinha");
pedra2.scale = 0.3;
pedra3.setAnimation("pedrinha");
pedra3.scale = 0.3;
pedra4.setAnimation("pedrinha");
pedra4.scale = 0.3;
pedra5.setAnimation("pedrinha");
pedra5.scale = 0.3;
pedra6.setAnimation("pedrinha");
pedra6.scale = 0.3;

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
