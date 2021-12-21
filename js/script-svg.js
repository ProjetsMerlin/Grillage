$(document).ready(function() {
  /* ELEMENT */
  var myElement = '.new';

  /* OPTIONS */
  var structure = [
  [15,15,50,20],
  [20,20,30,30],
  [20,70,10],
  ],
  hoverEffect = 'animate__jackInTheBox',
  borderColor = 'white',
  borderSize = 2;

  /* START GRILLAGE */
  var $element = $(myElement),
  classe = $element.attr('class'),
  $img = $element.children('img'),
  imgSrc = $img.attr('src'),
  elementWidth = $element.width(),
  elementHeight = $element.height(),
  imageWidth = $img.width(),
  imageHeight = $img.height(),
  rowsCount = structure.length,
  imgHeight = imageHeight / rowsCount;

  var backgroundPositionX = new Array();

  function calcPosition(structure) {
    const data = structure;
    const countData = data.length;
    const result = new Array(countData);
    let sum = 0;
    for (let i = 0; i < countData; ++i) {
      sum += data[i];
      result[i] = sum;
    }
    return result;
  }

  /* INSERT DOM ELEMENT */
  $element.wrapAll('<div class="'+classe+' grillage" />');
  for (let i = 0; i < rowsCount; i++) {
    $('.grillage').append('<div id="grillage_row_'+(i+1)+'" class="grillage_row" />');

    backgroundPositionX = backgroundPositionX.concat(calcPosition(structure[i]));

    for (j in structure[i]) {
      $('#grillage_row_'+(i+1)).append($('<div id="grillage_col_'+(parseInt(j)+1)+'" class="grillage_col" />').css({
        width: structure[i][j]+'%',
      }));
    }
  }

  /* RUN backgroundPositionX */

  /*ROWS*/
  $('.grillage_row').first().children('.grillage_col').css({
    backgroundPositionY: 'top',
  });
  $('.grillage_row').eq(1).children('.grillage_col').css({
    backgroundPositionY: 'center',
  });
  $('.grillage_row').last().children('.grillage_col').css({
    backgroundPositionY: 'bottom',
  });

  /*COLS*/
  $('.grillage_col').each(function(index,value) {
    $(this).css({
     backgroundPositionX: -(backgroundPositionX[(index-1)]*imageWidth)/100,
   })
  });

  $('.grillage_row').eq(1).children('.grillage_col').first().css({
    backgroundPositionX: '0%',
  });

  $('.grillage_row').eq(1).children('.grillage_col').last().css({
    backgroundPositionX: '100%',
  });

  $('.grillage_row').first().children('.grillage_col').first().css({
    backgroundPositionX: '0%',
  });

  $('.grillage_row').first().children('.grillage_col').last().css({
    backgroundPositionX: '100%',
  });

  $('.grillage_row').last().children('.grillage_col').first().css({
    backgroundPositionX: '0%',
  });

  $('.grillage_row').last().children('.grillage_col').last().css({
    backgroundPositionX: '100%',
  });

  /* INSERT STYLE ELEMENT */
  $('.grillage').css({
    width: imageWidth,
    height: imageHeight
  });

  $('.grillage_col').css({
    display: "inline-block",
    height: imgHeight+'px',
    borderColor: borderColor,
    borderWidth: borderSize+'px',
    backgroundImage: 'url('+imgSrc+')',
    backgroundSize: '100% '+imgHeight,

    backgroundOrigin: "border-box",
    borderStyle: 'solid',
    backgroundRepeat: 'no-repeat',
  }).on('click mouseover', function() {
    $('.grillage_col').removeClass('animate__animated ' + hoverEffect);
    $(this).addClass('animate__animated ' + hoverEffect);
    $(this).css('cursor','pointer');
  });

  /* REMOVE ORIGIN ELEMENT */
  $element.remove();
});