var WelcomeController = Paloma.controller('Welcome');

WelcomeController.prototype.index = function(){
	$(document).ready( function(){
		$('#opacity-slider').slider();

		$('#toggle-sidebar').click( function(){
			$('#sidebar').slideToggle('400', function(){
				$('#toggle-sidebar').text( $('#toggle-sidebar').text() == "<" ? ">" : "<");
			});
		});
	});
};
