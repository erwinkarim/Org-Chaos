var WelcomeController = Paloma.controller('Welcome');

WelcomeController.prototype.index = function(){
	$(document).ready( function(){
    /*
		$('#opacity-slider').slider();
    */

		$('#toggle-sidebar').click( function(){
			$('#sidebar').toggle('slide', { direction:'left' }, '400', function(){
				$('#toggle-sidebar').text( $('#toggle-sidebar').text() == "<" ? ">" : "<");
			});
		});

    $('#new-layer').click( function(){
      $.get('/layers/new.template', null, function( data, textStatus, jqXHR ){
        $('#end-of-panel').before(data);
      });
    });
	}); // $(document).ready( function(){
};
