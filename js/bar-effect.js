var width;

$( ".progress-bar" ).hover(
    function() {
        width = $( this ).css("width");
    $( this ).css("width", "100%");
  }, function() {
    $( this ).css("width", width);
  }
);