define (

'controller',

['model', 'view', 'jquery'],

function(model, view) {

    function Controller(model, view) {
    	var self = this;
        var add = view.elements.addBtn;

        add.on('click', addItem);
        view.elements.listContainer.on('click', '.item-delete', removeItem);

        function addItem() {
        	var newItem = view.elements.input.val();

        	model.addItem(newItem);
        	view.renderList(model.data);
        	view.elements.input.val('');
      	}

      	function removeItem() {
        	var item = $(this).attr('data-value');

        	model.removeItem(item);
        	view.renderList(model.data);
      	}
    }
	return new Controller(model, view);
}
);