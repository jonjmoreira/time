class Pages {
  constructor( _xCnv, _yCnv ) {
    this._xCnv = _xCnv;
    this._yCnv = _yCnv;
  }

  drawPage0() {
    background( 0 );
  }

  drawPage1() {
    background( 0 );
    fill( 255 );
    noStroke();
    textSize( 100 );
    textFont( 'Courier New' );
    textAlign(CENTER, CENTER);
    textWrap(WORD);
    text('Tempo', this._xCnv * 5 / 10, this._yCnv * 5 / 10 );
  }

  drawPage2() {
    let question = 'O que é Tempo?',
      definition = 'Estrutura mapeadora de configurações espaciais únicas.';
    background( 0 );
    fill( 255 );
    noStroke();
    textSize( 50 );
    textFont( 'Courier New' );
    textWrap(WORD);
    textAlign(LEFT, BOTTOM);
    text( question, this._xCnv * 1 / 10, this._yCnv * 5 / 10 );
    textSize( 30 );
    textAlign(LEFT, TOP);
    text( definition, this._xCnv * 1 / 10, this._yCnv * 5 / 10, this._xCnv / 2 );
  }

  drawPage3() {
    let question = 'O que é Espaço?',
      definition = 'Instância que pode conter objetos, propriedades, relações, interações e estados.';
    background( 0 );
    fill( 255 );
    noStroke();
    textSize( 50 );
    textFont( 'Courier New' );
    textWrap(WORD);
    textAlign(LEFT, BOTTOM);
    text( question, this._xCnv * 1 / 10, this._yCnv * 5 / 10 );
    textSize( 30 );
    textAlign(LEFT, TOP);
    text( definition, this._xCnv * 1 / 10, this._yCnv * 5 / 10, this._xCnv / 2 );
  }

  drawPage4() {
  let claimer = 'Requisitos básicos de um sistema genérico de Tempo:',
    content = ' - Operar em algum Espaço' +
      '\n - Armazenar as configurações únicas do Espaço' +
      '\n - Acessar livremente as configurações através de algum(ns) meio(s)' +
      '\n - Diferenciar as configurações através de algum(ns) critério(s)';
  background( 0 );
  fill( 255 );
  noStroke();
  textSize( 50 );
  textFont( 'Courier New' );
  textWrap(WORD);
  textAlign(LEFT, BOTTOM);
  text( claimer, this._xCnv * 1 / 10, this._yCnv * 5 / 10 );
  textSize( 30 );
  textAlign(LEFT, TOP);
  text( content, this._xCnv * 1 / 10, this._yCnv * 5 / 10, this._xCnv / 2, this._yCnv / 2);
  }

  drawPage5() {
  let claimer = 'Exemplos:',
    content = ' - Dinheiro' +
      '\n - Calendário' +
      '\n - Partida de Futebol';
  background( 0 );
  fill( 255 );
  noStroke();
  textSize( 50 );
  textFont( 'Courier New' );
  textWrap(WORD);
  textAlign(LEFT, BOTTOM);
  text( claimer, this._xCnv * 1 / 10, this._yCnv * 5 / 10 );
  textSize( 30 );
  textAlign(LEFT, TOP);
  text( content, this._xCnv * 1 / 10, this._yCnv * 5 / 10, this._xCnv / 2, this._yCnv / 2);
  }

  drawPage6() {
  let claimer = 'O Tempo não é ordenado',
    content = ' - Somos animais dependentes da percepção espacial para a sobrevivência' +
      '\n - Nossas sociedades e culturas são construídas com base nos sistemas de tempo' +
      '\n - Conseguimos estudar as minúcias de outros sistemas através da linearidade';
  background( 0 );
  fill( 255 );
  noStroke();
  textSize( 50 );
  textFont( 'Courier New' );
  textWrap(WORD);
  textAlign(LEFT, BOTTOM);
  text( claimer, this._xCnv * 1 / 10, this._yCnv * 5 / 10 );
  textSize( 30 );
  textAlign(LEFT, TOP);
  text( content, this._xCnv * 1 / 10, this._yCnv * 5 / 10, this._xCnv / 2, this._yCnv / 2);
  }
}


/**
 * Por Jonathas Moreira, Academia Cearense de Matemática.
 * 
 * What is time?
 * 
 * Tempo é um sistema de mapeamento de configurações únicas em um Espaço.
 * Espaço é uma instância que pode conter objetos, propriedades, relações, interações e estados.
 * 
 * Requisitos conceituais básicos de um sistema Tempo genérico:
 *  - Operar em um Espaço.
 *  - * Recomenda-se que o Espaço não seja vazio.
 *  - Criar configurações únicas de um Espaço.
 *  - Acessar as configurações.
 *  - Diferenciar configurações usando algum(ns) critério(s).
 * 
 * Exemplos:
 * - Dinheiro
 * - Calendário
 * - Partida de Futebol
 * 
 * wid = 1919.7
 * hei = 1080
 */


 var canvas,
  backButton,
  list,
  shape,
  xCnv = verge.viewportW() * 9 / 10,
  yCnv = verge.viewportH() * 9 / 10;

function setup() {
  canvas = createCanvas( xCnv, yCnv );
  centerCanvas();
  frameRate( 20 );

  textAlign(CENTER, CENTER);
  textFont('Courier New');
  textSize(10);
  
}

var pages = new Pages( xCnv, yCnv );

function draw() {
  background( 0 );
  noLoop();

  pageDrawer();
  shapeDrawer();

}

function pageDrawer() {
  textAlign(CENTER, CENTER);
  textFont('Courier New');
  textSize(10);
  list = createSelect();
  list.position( xCnv * 1 / 10, yCnv * 1 / 10 );
  list.option( '-- Páginas', 0 );
  list.option( 'Inicio', 1 );
  list.option( 'Definição de Tempo', 2 );
  list.option( 'Definição de Espaço', 3 );
  list.option( 'Requisitos básicos', 4 );
  list.option( 'Exemplos', 5 );
  list.option( 'Linearidade', 6 );
  list.changed( pageSelector );
}

function pageSelector() {
  let choice = list.value();
  switch( choice ){
    case '0':
      pages.drawPage0();
      break;
    case '1':
      pages.drawPage1();
      break;
    case '2':
      pages.drawPage2();
      break;
    case '3':
    pages.drawPage3();
      break;
    case '4':
    pages.drawPage4();
      break;
    case '5':
    pages.drawPage5();
      break;
    case '6':
      pages.drawPage6();
        break;
    default:
      pages.drawPage0();
  }
}

function mouseDragged() {
  let choice = shape.value();
  noFill();
  stroke( 255, 255, 0 );
  strokeWeight( 5 );
  switch( choice ) {
    case '0':
      point( mouseX, mouseY );
      break;
    case '1':
      rect( mouseX, mouseY, 100, 100);
      break;
    case '2':
      ellipse( mouseX, mouseY, 50 );
      break;
    case '3':
      noStroke();
      fill(0);
      rect( mouseX - 20, mouseY - 20, 40 );
      break;
  }
}

function mouseClicked() {
  let choice = shape.value();
  noFill();
  stroke( 255, 255, 0 );
  strokeWeight( 5 );
  switch( choice ) {
    case '0':
      point( mouseX, mouseY );
      break;
    case '1':
      rect( mouseX, mouseY, 100, 100);
      break;
    case '2':
      ellipse( mouseX, mouseY, 50 );
      break;
    case '3':
      noStroke();
      fill(0);
      rect( mouseX - 20, mouseY - 20, 40 );
      break;
  }
}

function shapeDrawer() {
  textAlign(CENTER, CENTER);
  textFont('Courier New');
  textSize(10);
  shape = createSelect();
  shape.position( xCnv * 2 / 10, yCnv * 1 / 10 );
  shape.option( 'Point', 0 );
  shape.option( 'Rect', 1 );
  shape.option( 'Ellipse', 2 );
  shape.option( 'Eraser', 3 );
  if( mouseClicked() ) {
    shape.changed( mouseClicked );
  }
  if( mouseDragged() ) {
    shape.changed( mouseDragged );
  }
}

function centerCanvas() {
  let x = ( windowWidth - width ) / 2;
  let y = ( windowHeight - height ) / 2;
  return canvas.position( x, y );
}

function windowResized() {
  centerCanvas();
}