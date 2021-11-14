$(document).ready(function() {
  var myElement = '.new';

  var structure = [
  [50,50],
  [25,25,25,25],
  [33.33,33.33,33.33]
  ];

  var $element = $(myElement),
  classe = $element.attr('class'),
  $img = $element.children('img'),
  imgSrc = $img.attr('src'),
  imgHeight = $img.height(),
  rowsCount = structure.length;

  $element.wrapAll('<div class="'+classe+' grillage" />');

  for (let i = 0; i < rowsCount; i++) {
   rows = $('.'+classe+'.grillage').append('<div id="'+i+'" class="'+classe+'_child grillage_row" />');

   for (j in structure[i]) { //
    $('#'+i+'.grillage_row').append($('<div class="grillage_child_'+parseInt(i + 1)+' grillage_col_'+j+'" />').css('width',structure[i][j]+'%'));
  }
}

$element.remove();

});