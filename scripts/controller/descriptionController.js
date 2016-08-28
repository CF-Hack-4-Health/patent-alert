(function (module) {
  var descriptionController = {};

  descriptionController.index = function(drug) {
    $('#about').css('display', 'none');
    $('#home').css('display', 'none');
    $('#results').css('display', 'none');
    $('#description').css('display', 'block');
    drugView.showDrugDetails(drug);
  };
  module.descriptionController = descriptionController;
})(window);
