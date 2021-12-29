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
      'hoverEffect' : 'grillage__item--hover',
      'borderColor' : '#ffffff',
      'borderSize' : 3,
    };
    var parametres = $.extend(defaults, options);

    return this.each(function(index) {

      /* START GRILLAGE */
      var $element = $(this),
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

      function slugify(chain) {
        chain = chain.replace(/^\s+|\s+$/g, '');
        chain = chain.toLowerCase();
        var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
        var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
        for (var i=0, l=from.length ; i<l ; i++) {
          chain = chain.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        chain = chain.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
        return chain;
      }

      var classe = slugify($element.attr('class'));

      /* INSERT DOM ELEMENT */
      $element.addClass('grillage_'+classe);

      for (let i = 0; i < rowsCount; i++) {
        $element.append('<div id="grillage_row_'+(i+1)+'" class="grillage_row" />');

        backgroundPositionX = backgroundPositionX.concat(calcPosition(parametres.structure[i]));

        for (j in parametres.structure[i]) {
          $('.grillage_'+classe+' #grillage_row_'+(i+1)).append($('<div id="grillage_col_'+(parseInt(j)+1)+'" class="grillage_col" />').css({
            width: parametres.structure[i][j]+'%',
          }));
        }
      }

      /* RUN backgroundPosition */
      /*ROWS*/
      $('.grillage_'+classe+' .grillage_row').first().children('.grillage_col').css({
        backgroundPositionY: 'top',
      });
      $('.grillage_'+classe+' .grillage_row').eq(1).children('.grillage_col').css({
        backgroundPositionY: 'center',
      });
      $('.grillage_'+classe+' .grillage_row').last().children('.grillage_col').css({
        backgroundPositionY: 'bottom',
      });

      /*COLS*/
      $('.grillage_'+classe+' .grillage_col').each(function(index,value) {
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
        $('.grillage_col').removeClass(parametres.hoverEffect);
        $(this).addClass(parametres.hoverEffect);
        $(this).css('cursor','pointer');
      });
     });

      $('.grillage_'+classe+' .grillage_row').eq(1).children('.grillage_col').first().css({
        backgroundPositionX: '0%',
      });
      $('.grillage_'+classe+' .grillage_row').last().children('.grillage_col').first().css({
        backgroundPositionX: '0%',
      });

      /* REMOVE ORIGIN ELEMENT */
      $img.remove();
    });
  };
})(jQuery);