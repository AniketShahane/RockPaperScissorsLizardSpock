# Generated by Django 2.1.3 on 2018-11-12 07:04

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogs',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2018, 11, 12, 12, 34, 28, 113781)),
        ),
    ]
