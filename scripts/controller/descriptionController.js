(function (module) {
  var descriptionController = {};

  descriptionController.index = function() {
    $('#about').css('display', 'none');
    $('#home').css('display', 'none');
    $('#results').css('display', 'none');
    $('#discription').css('display', 'block');
  };
  module.descriptionController = descriptionController;
})(window);
