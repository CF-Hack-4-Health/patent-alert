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


class DrugSearchView(ListAPIView):
    """."""

    queryset = Drug.objects.all()
    serializer_class = DrugSerializer

    def list(self, request, *args, **kwargs):
        """."""
        q = {key + '__iexact': val for key, val in request.GET.dict().items()}
        self.queryset = self.queryset.filter(**q)
        return super(DrugSearchView, self).list(request, *args, **kwargs)
