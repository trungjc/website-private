(function ($) {
  //doc ready
  $(function () {
    $('#dev-modal').on('shown.bs.modal', function (event) {
      var modal = $(this);
      var button = $(event.relatedTarget);
      var detail = button.closest('.card').find('.detail').clone();
      modal.find('.modal-body').empty().append(detail); // modal.find('.modal-body')
    });
    $('.sticky-header').sticky({
      topSpacing: 0
    });
    $('.navbar-nav-scroll li a,.btn-go-to').click(function (e) {
      e.preventDefault();
      var element = $(this).attr('href');
      $([document.documentElement, document.body]).animate({
        scrollTop: $(element).offset().top
      }, 500);
    });
  });
  $(window).on('load', function () {//after window loaded code here
  });
})(jQuery);
//# sourceMappingURL=main.js.map
