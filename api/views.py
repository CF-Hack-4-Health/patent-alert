"""Establish views for API access to Drug database."""
from drugs.models import Drug
from rest_framework.generics import ListAPIView, RetrieveAPIView
from api.serializers import DrugSerializer


class DrugListView(ListAPIView):
    """View allowing API access to view lists of owner's photos."""

    queryset = Drug.objects.all()
    serializer_class = DrugSerializer


class DrugDetailView(RetrieveAPIView):
    """View allowing API access to view lists of owner's photos."""

    queryset = Drug.objects.all()
    serializer_class = DrugSerializer
