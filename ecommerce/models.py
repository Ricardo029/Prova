from django.db import models

class Usuario(models.Model):
    TIPO_USUARIO = (
        ('PJ', 'Pessoa Juridica'),
        ('PF', 'Pessoa Fisica')
    )

    id = models.BigAutoField(primary_key=True)
    nomeUsuario = models.CharField(max_length=60, help_text='Nome completo')
    cpf = models.CharField(max_length=11, help_text='CPF - Ex: 1234567891011', unique= True)
    cnpj = models.CharField(max_length=11, help_text='CPF - Ex: 1234567891011', unique= True)
    celular = models.CharField(max_length=12, help_text='Numero para contato')
    email = models.EmailField(max_length=20, help_text='Email', unique= True)
    senha = models.CharField(max_length=20, help_text='Senha')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.nomeCompleto + ' - ' + cpf

class Cliente(models.Model):
    nome = models.CharField(max_length=30, verbose_name="Nome")
    email = models.EmailField(verbose_name="Email")
    uf = models.CharField(max_length=2, verbose_name="UF")
    cidade  = models.CharField(max_length=60, verbose_name="Cidade")
    endereco = models.CharField(max_length=60, verbose_name="Endereco")
    login = models.CharField(max_length=20, verbose_name="Login")
    senha = models.CharField(max_length=200, verbose_name="Senha")

    class Meta:
        ordering = ('nome',)

    def str(self):
        return self.nome

class Projeto(models.Model):
    nome = models.CharField(max_length=60)
    descricao = models.TextField(max_length=60, blank=True, null=True)
    preco = models.FloatField()
    inicio   = models.DateField()
    disponibilidade = models.BooleanField()

    def str(self):
        return self.nome

class Faleconosco(models.Model):
    nome = models.CharField(max_length=30, verbose_name="Nome")
    motivo = models.CharField(max_length=30, verbose_name="Qual motivo")
    email = models.EmailField(verbose_name="Email")
    cpf = models.CharField(max_length=11, help_text='CPF - Ex: 1234567891011', unique= True)
    celular = models.CharField(max_length=12, help_text='Numero para contato')
    mensagem = models.TextField(help_text = "Mensagem")

    class Meta:
        ordering = ('nome',)

    def str(self):
        return self.nome