"""Urls for accessing the Drug models data through REST API."""
from django.conf.urls import url
from api.views import DrugListView, DrugDetailView, DrugSearchView


urlpatterns = [
    url(r'drugs/list$', DrugListView.as_view(), name='drug_list'),
    url(r'drugs/(?P<pk>[0-9]+)$', DrugDetailView.as_view(), name='drug_detail'),
    url(r'drugs/search/$', DrugSearchView.as_view(), name='drug_search')
]
