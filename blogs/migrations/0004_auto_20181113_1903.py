# Generated by Django 2.1.3 on 2018-11-13 13:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0003_auto_20181112_1516'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogs',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2018, 11, 13, 19, 3, 2, 96063)),
        ),
    ]
