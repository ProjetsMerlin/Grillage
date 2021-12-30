 (function($) {
  $.fn.grillage=function(options) {

    /* PARAMETERS */
    var defaults = {
      'structure' : [
      [15,15,50,20],
      [20,20,30,30],
      [20,70,10],
      ],
      'classe' : 'grillage__item',
      'classHover' : 'grillage__item--hover',
      'borderColor' : '#ffffff',
      'borderSize' : 3,
    };
    var parametres = $.extend(defaults, options);

    /* START GRILLAGE */
    return this.each(function(index) {
      var $element = $(this),
      $img = $element.children('img'),
      imgSrc = $img.attr('src'),
      elementWidth = $element.width(),
      elementHeight = $element.height(),
      imageWidth = $img.width('100%'),
      imageHeight = $img.height(),
      rowsCount = parametres.structure.length,
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
      $element.addClass('grillage');
      for (let i = 0; i < rowsCount; i++) {
        $element.append('<div class="grillage_row grillage_row_'+(i+1)+'" />');
        backgroundPositionX = backgroundPositionX.concat(calcPosition(parametres.structure[i]));
        for (j in parametres.structure[i]) {
          $element.children(('.grillage_row_'+(i+1))).append($('<div class="grillage_col grillage_col_'+(parseInt(j)+1)+'" />').css({
            width: parametres.structure[i][j]+'%',
          }));
        }
      }

      /* RUN backgroundPosition */
      /*ROWS*/
      $element.children('.grillage_row').first().children('.grillage_col').css({
        backgroundPositionY: 'top',
      });

      $element.children('.grillage_row').eq(1).children('.grillage_col').css({
        backgroundPositionY: 'center',
      });

      $element.children('.grillage_row').last().children('.grillage_col').css({
        backgroundPositionY: 'bottom',
      });

      /*COLUMNS*/
      $element.children('.grillage_row').children('.grillage_col').each(function(index,value) {
        $(this).css({
         display: "inline-block",
         height: imgHeight+'px',
         backgroundPositionX: -(backgroundPositionX[(index-1)]*elementWidth)/100, /* :) */
         backgroundSize: elementWidth+'px auto',
         backgroundImage: 'url('+imgSrc+')',
         backgroundOrigin: "border-box",
         backgroundRepeat: 'no-repeat',
         borderWidth: parametres.borderSize+'px',
         borderStyle: 'solid',
         borderColor: parametres.borderColor,
       }).addClass(parametres.classe).on('click mouseover', function() {
        $('.grillage_col').removeClass(parametres.classHover);
        $(this).addClass(parametres.classHover);
        $(this).css('cursor','pointer');
      });
     });

      $element.children('.grillage_row').eq(1).children('.grillage_col').first().css({
        backgroundPositionX: '0%',
      });

      $element.children('.grillage_row').last().children('.grillage_col').first().css({
        backgroundPositionX: '0%',
      });

      /* REMOVE ORIGIN ELEMENT */
      $img.remove();
    });
  };
})(jQuery);