var action = 'click';
    var speed = "500";

    // Document Ready
    $(document).ready(function(){
      // Question handler
      $('li.q').on(action, function(){
        // Check if the current question is already opened
        var isOpen = $(this).hasClass('rotate');

        // Reset all other questions
        $('li.q').removeClass('rotate');
        $('li.a').slideUp(speed);

        // Open or close the current question accordingly
        if (!isOpen) {
          $(this).addClass('rotate');
          $(this).next().slideDown(speed);
        }
      }); // End on click
    }); // End Ready