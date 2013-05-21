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
				inp.click(function(){
					if (inp.val()==opt.pholdertext){
						setCaretPosition(this);
					}
				});
				inp.keydown(function(e){
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
				inp.keyup(function(){
					if (inp.val()==""){
						inp.val(opt.pholdertext).addClass(opt.className);
						setCaretPosition(this);
					}
				});
				inp.blur(function(){
					if (inp.val()==""){
						inp.val(opt.pholdertext).addClass(opt.className);
					};
				});
			});
		};
		return $.fn.pholder = function (_options){
			return new $.pholder(this, _options);
		};
	})(jQuery);
}).call(this);
