 (function($) {
      $.fn.grillage=function(options) {

        /* PARAMETERS */
        var defauts = {
          'structure' : [
          [15,15,50,20],
          [20,20,30,30],
          [20,70,10],
          ],
          'hoverEffect' : 'animate__jackInTheBox',
          'borderColor' : '#d1ae54',
          'borderSize' : 1,
        };
        var parametres = $.extend(defauts, options);

        return this.each(function() {

          /* START GRILLAGE */
          var $element = $(this),
          classe = $element.attr('class'),
          $img = $element.children('img'),
          imgSrc = $img.attr('src'),
          elementWidth = $element.width(),
          elementHeight = $element.height(),
          imageWidth = $img.width('100%'),
          imageHeight = $img.height(),
          rowsCount = parametres.structure.length,
          imgHeight = imageHeight / rowsCount,
          elementType = $(this).prop('nodeName');

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
          $element.addClass("grillage");

          for (let i = 0; i < rowsCount; i++) {
            $('.grillage').append('<div id="grillage_row_'+(i+1)+'" class="grillage_row" />');

            backgroundPositionX = backgroundPositionX.concat(calcPosition(parametres.structure[i]));

            for (j in parametres.structure[i]) {
              $('#grillage_row_'+(i+1)).append($('<div id="grillage_col_'+(parseInt(j)+1)+'" class="grillage_col" />').css({
                width: parametres.structure[i][j]+'%',
              }));
            }
          }

          /* RUN backgroundPosition */

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
           }).on('click mouseover', function() {
            $('.grillage_col').removeClass('animate__animated ' + parametres.hoverEffect);
            $(this).addClass('animate__animated ' + parametres.hoverEffect);
            $(this).css('cursor','pointer');
          });
         });

          $('.grillage_row').eq(1).children('.grillage_col').first().css({
            backgroundPositionX: '0%',
          });
          $('.grillage_row').last().children('.grillage_col').first().css({
            backgroundPositionX: '0%',
          });

          /* REMOVE ORIGIN ELEMENT */
          $img.remove();
        });
      };
    })(jQuery);