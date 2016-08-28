"""Definition of Drug models."""
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
patent_expiration_date,
description,
"""


def _date_format(date_string):
    """Convert to the correct date format for Django."""
    try:
        dt = datetime.strptime(date_string, INPUT_DATE_FORMAT)
        return dt.strftime(OUTPUT_DATE_FORMAT)
    except ValueError:
        return ''


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
    description = md.CharField(max_length=255)
    approval_date = md.DateField(max_length=255)
    patent_expiration_date = md.DateField(max_length=255, null=True)

    def __init__(self, *args, **kwargs):
        """Initialize model with correct datetime formats."""
        kwargs['approval_date'] = _date_format(kwargs.get('approval_date', ''))
        kwargs['patent_expiration_date'] = _date_format(kwargs.get('patent_expiration_date', ''))
        super(Drug, self).__init__(*args, **kwargs)

    def __str__(self):
        """Return string representation of Drug's trade name."""
        return self.trade_name
