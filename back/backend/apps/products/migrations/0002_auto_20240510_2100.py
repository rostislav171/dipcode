# Generated by Django 3.2.25 on 2024-05-10 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'ordering': ['is_main', 'order'], 'verbose_name': 'Категория товара', 'verbose_name_plural': 'Категории товара'},
        ),
        migrations.AddField(
            model_name='category',
            name='is_main',
            field=models.BooleanField(default=False, verbose_name='Является главной'),
        ),
        migrations.AlterField(
            model_name='picture',
            name='is_main',
            field=models.BooleanField(default=False, verbose_name='Является главной'),
        ),
        migrations.AlterField(
            model_name='picture',
            name='is_published',
            field=models.BooleanField(blank=True, default=True, null=True, verbose_name='Изображение опубликовано'),
        ),
    ]
