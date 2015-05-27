angular.element(document.body).bind('click', function (e) {
        //Find all elements with the popover attribute
        var popups = document.querySelectorAll('*[popover]');
        if(popups) {
          //Go through all of them
          for(var i=0; i<popups.length; i++) {
            //The following is the popover DOM elemet
            var popup = popups[i];
            //The following is the same jQuery lite element
            var popupElement = angular.element(popup);
            
            var content;
            var arrow;
            if(popupElement.next()) {
              //The following is the content child in the popovers first sibling
              content = popupElement.next()[0].querySelector('.popover-content');
              //The following is the arrow child in the popovers first sibling
              arrow = popupElement.next()[0].querySelector('.arrow');
            }
            //If the following condition is met, then the click does not correspond
            //to a click on the current popover in the loop or its content.
            //So, we can safely remove the current popover's content and set the
            //scope property of the popover
            if(popup != e.target && e.target != content && e.target != arrow) {
              if(popupElement.next().hasClass('popover')) {
                //Remove the popover content
                popupElement.next().remove();
                //Set the scope to reflect this
                popupElement.scope().tt_isOpen = false;
              }
            }
          }
        }
      });