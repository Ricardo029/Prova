# Generated by Django 4.1.3 on 2022-11-27 00:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=30, verbose_name='Nome')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('uf', models.CharField(max_length=2, verbose_name='UF')),
                ('cidade', models.CharField(max_length=60, verbose_name='Cidade')),
                ('endereco', models.CharField(max_length=60, verbose_name='Endereco')),
                ('login', models.CharField(max_length=20, verbose_name='Login')),
                ('senha', models.CharField(max_length=200, verbose_name='Senha')),
            ],
            options={
                'ordering': ('nome',),
            },
        ),
        migrations.CreateModel(
            name='Projeto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=60)),
                ('descricao', models.TextField(blank=True, max_length=60, null=True)),
                ('preco', models.FloatField()),
                ('inicio', models.DateField()),
                ('disponibilidade', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('nomeUsuario', models.CharField(help_text='Nome completo', max_length=60)),
                ('cpf', models.CharField(help_text='CPF - Ex: 1234567891011', max_length=11, unique=True)),
                ('cnpj', models.CharField(help_text='CPF - Ex: 1234567891011', max_length=11, unique=True)),
                ('celular', models.CharField(help_text='Numero para contato', max_length=12)),
                ('email', models.EmailField(help_text='Email', max_length=20, unique=True)),
                ('senha', models.CharField(help_text='Senha', max_length=20)),
            ],
            options={
                'ordering': ['id'],
            },
        ),
    ]
