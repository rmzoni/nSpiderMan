//nVampeta 
(function($) {
	
    var self = $.nVampeta = new function(){};
	
    $.extend(self, {

    	nVampetaBackgrounds : [
    		'http://i1.wp.com/bitcast-a-sm.bitgravity.com/slashfilm/wp/wp-content/images/Captain-America-Civil-War-trailer1.png'
    	],

        nVampetaImgs : [
			'http://www.blastr.com/sites/blastr/files/3402762-spidrman-spider-man-30.jpg',
			'http://images.br.sftcdn.net/br/scrn/69679000/69679256/spider-man-ultimate-power-11-535x535.png',
			'http://cache.lego.com/r/catalogs/-/media/catalogs/characters/marvel/2015/thumbnail/mugshot%202hy/76037_spiderman_912x516_360w_2x.png?l.r2=2146616777',
			'http://vignette2.wikia.nocookie.net/p__/images/8/84/Spider-man-render-by-bobhertley-d5qlcde.png/revision/latest?cb=20140505164016&path-prefix=protagonist',
			'http://screenrant.com/wp-content/uploads/The-Amazing-Spider-Man-Art-by-Patrick-Brown.jpg',
			'http://i1.wp.com/bitcast-a-sm.bitgravity.com/slashfilm/wp/wp-content/images/Captain-America-Civil-War-trailer1.png'
        ],

        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo : function (bgImgs, time)
        {
			$backgroundImages = $(
            	'[class*=logo], [class*=header], [id*=header], [id*=logo],' +
            	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
            	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
            	'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            	)
            	.filter(function() {
            		backgroundImg = $(this).css('background-image');
            		return backgroundImg && backgroundImg != 'none';
            	}
            );

            $backgroundImages.each(function(i, item) {
            	$(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
            	$(item).css('background-position', '0 0');
            	$(item).css('background-repeat', 'no-repeat');
            	$(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.nVampetaImgs, 3000);
     	self.handleLogo(self.nVampetaBackgrounds, 3000);
    });
})(jQuery);
