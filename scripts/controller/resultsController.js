(function (module) {
  var resultsController = {};

  resultsController.index = function() {
    $('#about').css('display', 'none');
    $('#discription').css('display', 'none');
    $('#home').css('display', 'none');
    $('#results').css('display', 'block');
  };
  module.resultsController = resultsController;
})(window);
