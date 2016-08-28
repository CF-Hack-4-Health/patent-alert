(function (module) {
  var descriptionController = {};

  descriptionController.index = function(drug) {
    $('#home').css('display', 'none');
    $('#results').css('display', 'none');
    $('#discription').css('display', 'block');
    drugView.showDrugDetails(drug);
  };
  module.descriptionController = descriptionController;
})(window);
