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
    if($('#form-input option:selected').text() === 'Active Ingredient'){
      $('#form-input').on('change', drugModel.createInputByIngredient);
    }
    if($('#form-input option:selected').text() === 'Trade Name'){
      $('#form-input').on('change', drugModel.createInputByTradeName);
    }

    $('#form-input').on('submit', function(e) {
      e.preventDefault();

      if($('#form-input option:selected').text() === 'Active Ingredient'){
        $('#form-input').on('submit', page('/search/?ingredient=' + drugModel.createEndpoint()));
      }
      if($('#form-input option:selected').text() === 'Trade Name'){
        $('#form-input').on('submit', page('/search/?trade_name=' + drugModel.createEndpoint()));
      }

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
