# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-08-27 23:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drugs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='drug',
            name='description',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='drug',
            name='patent_expiration_date',
            field=models.DateField(max_length=255, null=True),
        ),
    ]