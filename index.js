

$(function() { 

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
      });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    });

    
    $('.shopping-add-item').click(function() {
        let task = $('#shopping-list-entry').val();
        if(task !== "") {
        $('.shopping-list').append(`
        <li>
            <span class="shopping-item">${task}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>
    `);
    $('#shopping-list-entry').val('');
        }
    $('#js-shopping-list-form').on('submit', function(e) {
        e.preventDefault();
        return false;
        });

    });
});