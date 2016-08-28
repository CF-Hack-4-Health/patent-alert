(function (module) {
  var drugModel = {};
  drugModel.all = [];
  drugModel.formInput;

  function Input (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    };
  }

  function Drug(drugInfo) {
    this.pk = pk;
    this.ingredient = ingredient;
    this.dosage_type = dosage_type;
    this.delivery_method = delivery_method;
    this.trade_name = trade_name;
    this.owner_name = owner_name;
    this.drug_strength = drug_strength;
    this.drug_application_number = drug_application_number;
    this.product_number = product_number;
    this.approval_date = approval_date;
    this.patent_number = patent_number;
    this.patent_expiration_date = patent_expiration_date;
  }

  drugModel.createInputByIngredient = function(){
    drugModel.formInput = new Input({
      ingredient: $('#form-input').val().replace(/\W+/g, '+')
    });
  };

  drugModel.createInputByTradeName = function(){
    drugModel.formInput = new Input({
      trade_name: $('#form-input').val().replace(/\W+/g, '+'),
    });
  };

  drugModel.createEndpoint = function(){
    var newUrl = '';
    if(drugModel.ingredient) {newUrl += drugModel.formInput.ingredient;}
    if(drugModel.trade_name) {newUrl += drugModel.formInput.trade_name;}
    return newUrl;
  };

// /api/drugs/search/?name=nameval&ingredient=ingval


  drugModel.requestDrugData = function(e, endPoint){
    if(e) {
      e.preventDefault();
    }
    $('#results').empty();
    var newUrl = 'http://127.0.0.1:8000/api/drugs/search/';
    newUrl += endPoint;
    $.ajax({
      url: newUrl,
      type: 'GET',
      success: function(data) {
        if(data) {
          drugModel.data = data;
          return drugModel;
          // drugModel.GBdata = data.items.filter(function(item){
          //   if(item.volumeInfo.ratingsCount > 10
          //     && item.accessInfo.country === 'US'
          //     && item.volumeInfo.language == 'en'
          //     && item.volumeInfo.imageLinks
          //   ){
          //     return item;
          //   }
          // });
        } else {
          console.log('No Result');
        }
      }
    }).done(function() {
      importDrugs(drugModel.data);
      drugView.showResults(drugModel.all);
      drugView.handleClickDrug();
    });
  };

  var importDrugs = function(data) {
    drugModel.all = [];
    data.forEach(function(item) {
      var newDrug = new Drug(item);
      drugModel.all.push(newDrug);
    });
  };

  module.drugModel = drugModel;
})(window);
