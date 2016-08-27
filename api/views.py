"""Establish views for API access."""
from .permissions import IsOwnerAndReadOnly
from api.serializers import PhotoSerializer, AlbumSerializer
from drugs.models import Drug
from rest_framework.generics import ListAPIView
from api.serializers import DrugSerializer


class DrugListView(ListAPIView):
    """View allowing API access to view lists of owner's photos."""

    queryset = Drug.objects.all()
    serializer_class = DrugSerializer
