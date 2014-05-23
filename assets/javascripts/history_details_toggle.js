$(function(){
    var selector = '#history .journal:not(.has-notes), #history .journal.has-notes .details';
    var checked = !!(localStorage['redmine_history_details_toggle'] - 0);

    if (!checked)
    {
        $(selector).hide();
    }

    $('<input type="checkbox" />')
        .prop('checked', checked)
        .change(function(){
            if (this.checked)
            {
                $(selector)
                    .slideDown(undefined, function(){
                        var pos = $(this).position();
                        var has = $(this).hasClass('details');
                        var css = {
                            top: pos.top,
                            left: pos.left,
                            width: $(this).outerWidth(has),
                            height: $(this).outerHeight(has)
                        };
                        $('<div style="position: absolute; z-index:99999; background-color:#ffc; opacity:0">')
                            .css(css)
                            .appendTo('body')
                            .animate({'opacity':0.9}, {duration:100})
                            .animate({'opacity':0}, {duration:500, complete: function(){
                                $(this).remove();
                            }})
                        ;
                    })
                ;
            }
            else
            {
                $(selector).slideUp();
            }
            localStorage['redmine_history_details_toggle'] = this.checked - 0;
        })
        .appendTo('#history > h3')
    ;
});
