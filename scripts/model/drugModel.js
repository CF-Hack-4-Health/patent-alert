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

  drugModel.createNewInput = function(){
    drugModel.formInput = new Input({
      pk:                       $('#pk').val(),
      ingredient:               $('#ingredient').val().replace(/\W+/g, '+'),
      dosage_type:              $('#dosage_type').val(),
      delivery_method:          $('#delivery_method').val(),
      trade_name:               $('#trade_name').val(),
      owner_name:               $('#owner_name').val(),
      drug_strength:            $('#drug_strength').val(),
      drug_application_number:  $('#drug_application_number').val(),
      product_number:           $('#product_number').val(),
      approval_date:            $('#approval_date').val(),
      patent_number:            $('#patent_number').val(),
      patent_expiration_date:   $('#patent_expiration_date').val(),
    });
  };

  drugModel.createEndpoint = function(){
    var newUrl = '';
    if (drugModel.formInput.ingredient) { newUrl += drugModel.formInput.keyword; }
    if (drugModel.formInput.dosage_type) { newUrl += '+intitle:' + drugModel.formInput.drugName; }
    if (drugModel.formInput.delivery_method) { newUrl += '+inauthor:' + drugModel.formInput.author; }
    if (drugModel.formInput.trade_name) { newUrl += '+insubject:' + drugModel.formInput.genre; }
    if (drugModel.formInput.owner_name) { newUrl += '+inpublisher:' + drugModel.formInput.publisher; }
    if (drugModel.formInput.drug_strength) { newUrl += '+inisbn:' + drugModel.formInput.isbn; }
    if (drugModel.formInput.drug_application_number) { newUrl += '+insubject:' + drugModel.formInput.genre; }
    if (drugModel.formInput.product_number) { newUrl += '+inpublisher:' + drugModel.formInput.publisher; }
    if (drugModel.formInput.approval_date) { newUrl += '+inisbn:' + drugModel.formInput.isbn; }
    if (drugModel.formInput.patent_number) { newUrl += '+inisbn:' + drugModel.formInput.isbn; }
    if (drugModel.formInput.patent_expiration_date) { newUrl += '+inisbn:' + drugModel.formInput.isbn; }
    return newUrl;
  };




  drugModel.requestDrugData = function(e, endPoint){
    if(e) {
      e.preventDefault();
    }
    $('#results').empty();
    var newUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    newUrl += endPoint;
    $.ajax({
      url: newUrl
      + '&maxResults=40'
      + '&?key=AIzaSyCfsM3QeTqrabiuQ1f97bB7pawjROuhhv0',
      type: 'GET',
      success: function(data) {
        if(data.items) {
          drugModel.GBdata = data.items.filter(function(item){
            if(item.volumeInfo.ratingsCount > 10
              && item.accessInfo.country === 'US'
              && item.volumeInfo.language == 'en'
              && item.volumeInfo.imageLinks
            ){
              return item;
            }
          });
        } else {
          console.log('No Result');
        }
      }
    }).done(function() {
      importDrugs(drugModel.GBdata);
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
