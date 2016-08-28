page('/', homeController.index);

page('/search/:searchQuery', function(ctx){
  drugModel.requestDrugData(null, ctx.params.searchQuery);
});
page('/description/:selectedDrug', function(ctx){
  descriptionController.index(ctx.params.selectedDrug);
});

page('/about', aboutController.index);
page('/results', resultsController.index);

page();
