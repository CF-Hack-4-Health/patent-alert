"""Definition of Drug models."""
from __future__ import unicode_literals
from django.db import models as md


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

    ingredient = md.Charfield(max_length=255)
    dosage_type = md.Charfield(max_length=255)
    delivery_method = md.Charfield(max_length=255)
    trade_name = md.Charfield(max_length=255)
    owner_name = md.Charfield(max_length=255)
    drug_strength = md.Charfield(max_length=255)
    drug_application_number = md.Charfield(max_length=255)
    product_number = md.Charfield(max_length=255)
    patent_number = md.Charfield(max_length=255)
    approval_date = md.DateField(max_length=255)
    patent_expiration_date = md.DateField(max_length=255)

    def __str__(self):
        return self.trade_name