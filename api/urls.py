"""Urls for accessing the Drug models data through REST API."""
from django.conf.urls import url
from api.views import DrugListView


urlpatterns = [
    url(r'drugs/$', DrugListView.as_view(), name='drug_list'),
]
