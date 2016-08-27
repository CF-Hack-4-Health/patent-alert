"""Serializers to convert models into JSON."""

from rest_framework import serializers
from drugs.models import Drug


class DrugSerializer(serializers.HyperlinkedModelSerializer):
    """Serializer for the Drug model."""

    class Meta:
        """Meta for DrugSerializer."""

        model = Drug
        fields = [
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
            # 'description',
        ]
