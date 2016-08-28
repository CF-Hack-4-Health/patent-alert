"""Serializers to convert models into JSON."""
from rest_framework import serializers
from drugs.models import Drug
import datetime


class DrugSerializer(serializers.HyperlinkedModelSerializer):
    """Serializer for the Drug model."""

    date_delta = serializers.SerializerMethodField('_calc_date_delta')

    def _calc_date_delta(self, obj):
        """Return an integer of days until the expiration of the patent."""
        delta = obj.patent_expiration_date - datetime.date.today()
        return '{} days until patent expiration.'.format(delta.days)

    class Meta:
        """Meta for DrugSerializer."""

        model = Drug
        fields = [
            'pk',
            'ingredient',
            'dosage_type',
            'delivery_method',
            'trade_name',
            'owner_name',
            'drug_strength',
            'drug_application_number',
            'product_number',
            'approval_date',
            'patent_number',
            'patent_expiration_date',
            'description',
            'date_delta',
        ]
