"""Definition of Drug models."""
from __future__ import unicode_literals
from django.db import models as md

from datetime import datetime
INPUT_DATE_FORMAT = '%b %d, %Y'
OUTPUT_DATE_FORMAT = '%Y-%m-%d'

"""
ingredient,
dosage_type,
delivery_method,
trade_name,
owner_name,
drug_strength,
drug_application_number,
product_number,
approval_date,
patent_number,
patent_expiration_date
"""


class Drug(md.Model):
    """Database model of a pharmacuetical product."""

    ingredient = md.CharField(max_length=255)
    dosage_type = md.CharField(max_length=255)
    delivery_method = md.CharField(max_length=255)
    trade_name = md.CharField(max_length=255)
    owner_name = md.CharField(max_length=255)
    drug_strength = md.CharField(max_length=255)
    drug_application_number = md.CharField(max_length=255)
    product_number = md.CharField(max_length=255)
    patent_number = md.CharField(max_length=255)
    # description = md.CharField(max_length=255)
    approval_date = md.DateField(max_length=255)
    patent_expiration_date = md.DateField(max_length=255)

    def __init__(self, *args, approval_date='', patent_expiration_date='', **kwargs):
        """Initialize model with correct datetime formats."""
        if approval_date:
            approval_date = datetime.strptime(approval_date, INPUT_DATE_FORMAT)
            approval_date = approval_date.strftime(OUTPUT_DATE_FORMAT)
        if patent_expiration_date:
            patent_expiration_date = datetime.strptime(patent_expiration_date, INPUT_DATE_FORMAT)
            patent_expiration_date = patent_expiration_date.strftime(OUTPUT_DATE_FORMAT)
        super(Drug, self).__init__(
            *args,
            approval_date=approval_date,
            patent_expiration_date=patent_expiration_date,
            **kwargs,
        )

    def __str__(self):
        """Return string representation of Drug's trade name."""
        return self.trade_name
