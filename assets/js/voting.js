window.setInterval(function() {
  
    $('.div-container').selectable({
      cancel: '.div-sortablehandle, .tier',
      filter: "li",
    });
  
    $('.div-container').sortable({
      placeholder: "col-placeHolder",
      handle: ".tier",
      stop: function(e, ui) {
        checkall();
      }
    });
    
    $('.ul-list').sortable({
      cancel: '.tier',
      cursorAt: {
        top: 0,
        left: 0
      },
      items: "li:not(.tier)",
      placeholder: "li-placeHolder",
      connectWith: ".ul-list, .div-container",
      //items: "ul>li",
      //handle: '.div-sortablehandle',
      helper: function(e, item) {
        if (!item.hasClass('ui-selected')) {
          $('.ul').find('.ui-selected').removeClass('ui-selected');
          item.addClass('ui-selected');
        }
        var selected = $('.ui-selected').clone();
        item.data('multidrag', selected);
        $('.ui-selected').not(item).remove();
        return $('<li class="transporter" />').append(selected);
      },

      change: function(e, ui) {
        if (ui.placeholder.parent().hasClass("div-container")) {
          $(".li-placeHolder").css("float", "none");
          //$(".li-placeHolder").css("background-color", "yellow");
          $(".li-placeHolder").css({
            "width": "800px",
            "height": "40px",
            "margin": "0px 0px -5px"
          });
  
        }else {
          $(".li-placeHolder").css("float", "left");
          //$(".li-placeHolder").css("background-color", "red");
          $(".li-placeHolder").css({
            "width": "100px",
            "height": "30px",
            "margin": "5px 5px"
          });
        }
        /*
        if (ui.placeholder.parent().children().size() > 4) {
          ui.placeholder.parent().css({
            "height": "80px",
          });
        }*/
      },
      stop: function(e, ui) {
        var selected = ui.item.data('multidrag');
        ui.item.after(selected);
        ui.item.remove();
        checkall();
      }
    }).disableSelection();
  }, 1000);
  
  $(document).bind("contextmenu", function(event) {
  
    // Avoid the real one
    event.preventDefault();
  
    // Show contextmenu
    $(".custom-menu").finish().toggle(100).
  
    // In the right position (the mouse)
    css({
      top: event.pageY + "px",
      left: event.pageX + "px"
    });
  });

  
  function checkall() {
    message = '';
    count = 1;
    list = [];
    var here = null;
    if ($('div li').length > 0) {
      newi = "<div> <ul class=\"ul-list ui-sortable\"> <span class=\"tier\">0</span>";
      $('li ').each(function() {
        if ($(this).parent().is('div')) {
          newi += "<li class = \"list-element\">";
          newi += $(this).html();
          newi += "</li>";
          //$(this).remove();
        }
      });
      newi += "</ul></div>";
      i = 0;
      $('li ').each(function() {
        if ($(this).parent().is('div')) {
          if (i == 0) {
            $(this).after(newi);
            i = 1;
          }
          $(this).remove();
        }
      });
    }
    $('.ul-list').each(function() {
      if ($(this).children().size() == 1)
        $(this).parent().remove();
    });
  
    $('.tier').each(function() {
      $(this).text(count);
      count++;
    });  
  }
  
  
  