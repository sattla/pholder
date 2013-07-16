(function(){
	(function($){
		$.pholder = function (element,_options){
			element.each(function(){
				var inp = $(this),
				defaults = {
					  className : 'wtmrk',
					  pholdertext : inp.attr("placeholder")
				},
				opt = $.extend({}, defaults, _options),
				setCaretPosition = function(el){
					if(el != null){
						if(el.createTextRange){
							var r=el.createTextRange();
							r.move('character',0);
							r.select();
						}
						else{
							if(el.selectionStart){
								el.focus();
								el.setSelectionRange(0,0);
							}
							else{
								el.focus();
							}
						}
					}
				}
				inp.prop("placeholder","");
				inp.val(opt.pholdertext).addClass(opt.className);
				inp.bind('click.pholder', function(){
					if (inp.val()==opt.pholdertext){
						setCaretPosition(this);
					}
				});
				inp.bind('keydown.pholder paste.pholder', function(e){
					var a = [8,13,16,17,18,19,20,27,33,34,35,36,37,38,39,40,45,46];
					if (inp.val()==opt.pholdertext){
						for (i=0;i<a.length;i++){
							if (e.which == a[i]){
								return false;
							}
						}
						inp.removeClass(opt.className).val("");
					}
				});
				inp.bind('keyup.pholder', function(){
					if (inp.val()==""){
						inp.val(opt.pholdertext).addClass(opt.className);
						setCaretPosition(this);
					}
				});
				inp.bind('blur.pholder', function(){
					if (inp.val()==""){
						inp.val(opt.pholdertext).addClass(opt.className);
					};
				});
			});
		};
		return $.fn.pholder = function (_options){
			$.pholder(this, _options);
			return this;
		};
	})(jQuery);
}).call(this);
