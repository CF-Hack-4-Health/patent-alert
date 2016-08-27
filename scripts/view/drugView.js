(function(module) {
  var drugView = {};

  var render = function(item, templateId) {
    var template = Handlebars.compile($(templateId).text());
    return template(item);
  };

  drugView.showResults = function(data) {
    $('#results').empty();
    $('#results').siblings().fadeOut();

    data.forEach(function(item){
      $('#results').append(render(item,'#thumbnail-template'));
    });
    $('#results').fadeIn();
  };

  drugView.showDrugDetails = function(drug){
    $('.close-details').siblings().remove();
    $('#book-details').append(render(drug, '#detail-template'));
    $('.book-detail-backdrop').fadeIn().children().fadeIn();
  };

  drugView.handleSearchInput = function() {
    $('#form-input').on('change', drugModel.createNewInput);
    $('#form-input').on('submit', function(e) {
      e.preventDefault();
      $('#form-input').on('submit', page('/search/' + drugModel.createEndpoint()));
    });
  };

  drugView.handleClickDrug = function() {
    $('#results').on('click', '.book', function(){

      page('/description/' + drugModel.all[$(this)]);       
      // drugModel.requestGoodReadsData(drugModel.all[$(this).index()]);
    });


    $('.close-details').on('click', function() {
      $('.close-details').siblings().remove();
      $('.book-detail-backdrop').fadeOut().children().fadeOut();
    });
  };

  module.drugView = drugView;
})(window);
