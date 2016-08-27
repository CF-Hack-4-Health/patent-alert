(function (module) {
  var descriptionController = {};

  descriptionController.index = function() {
    $('#home').css('display', 'none');
    $('#results').css('display', 'none');
    $('#discription').css('display', 'block');
  };
  module.descriptionController = descriptionController;
})(window);
