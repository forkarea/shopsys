(function ($) {

	SS6 = window.SS6 || {};
	SS6.formChangeInfo = SS6.formChangeInfo || {};

	SS6.formChangeInfo.init = function () {
		$('.main-content form')
			.change(function(){
				SS6.formChangeInfo.showInfo();
			})
			.each(function() {
				if (!($(this).find('.form-error:first, .js-validation-errors-list li:first').size() === 0)) {
					SS6.formChangeInfo.showInfo();
				}
			});

		if (typeof CKEDITOR !== 'undefined') {
			for (var i in CKEDITOR.instances) {
				var instance = CKEDITOR.instances[i];
				instance.on('blur', function (e) {
					if(e.editor.checkDirty()) {
						SS6.formChangeInfo.showInfo();
					}
				});
			}
		}
	};

	SS6.formChangeInfo.showInfo = function () {
		var textToShow = SS6.translator.trans('Provedli jste změny, nezapomeňte je uložit!');
		var $fixedBar = $('.main-content').find('.window-fixed-bar');
		var $infoDiv = $fixedBar.find('#form-change-info');
		if ($infoDiv.length === 0) {
			$fixedBar.append('<div id="form-change-info"><strong>' + textToShow + '</strong></div>');
		} else {
			$infoDiv.text = textToShow;
		}
	};

	$(document).ready(function () {
		SS6.formChangeInfo.init();
	});

})(jQuery);