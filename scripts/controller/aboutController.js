(function (module) {
  var descriptionController = {};

  descriptionController.index = function() {
    $('#home').css('display', 'none');
    $('#results').css('display', 'none');
    $('#discription').css('display', 'none');
    $('#about').css('display', 'block');
  };
  module.descriptionController = descriptionController;
})(window);
