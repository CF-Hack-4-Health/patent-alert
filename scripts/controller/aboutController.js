(function (module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#home').css('display', 'none');
    $('#results').css('display', 'none');
    $('#discription').css('display', 'none');
    $('#about').css('display', 'block');
  };
  module.aboutController = aboutController;
})(window);
