# Generated by Django 5.1.3 on 2024-11-27 20:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend1', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='verification_code',
            field=models.CharField(blank=True, max_length=6, null=True),
        ),
    ]