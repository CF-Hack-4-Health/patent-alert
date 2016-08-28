"""Serializers to convert models into JSON."""
from __future__ import unicode_literals
from rest_framework import serializers
from drugs.models import Drug
import datetime


class DrugSerializer(serializers.HyperlinkedModelSerializer):
    """Serializer for the Drug model."""

    date_delta = serializers.SerializerMethodField('_calc_date_delta')

    def _calc_date_delta(self, obj):
        """Return an integer of days until the expiration of the patent."""
        now = datetime.datetime.now()
        exp = obj.patent_expiration_date
        app = obj.approval_date
        delta = exp - app
        return delta.days

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
