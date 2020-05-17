$(function() {
  /* Ползунок */
  var sliderRange = $("#slider-range");
  var amount = $("#amount");

  sliderRange.slider({
    range: true,
    min: 0,
    max: 999,
    values: [ 0, 999 ],
    slide: function( event, ui ) {
      amount.val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  amount.val("$" + sliderRange.slider( "values", 0 ) + " - $" + sliderRange.slider( "values", 1 ) );

  /* Селект */
  cuSel({
    changedEl: "select",
    visRows: 5,
    scrollArrows: true
  });

  $('.btnUp').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
});