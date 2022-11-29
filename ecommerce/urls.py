from django.urls import path
from .views import *

urlpatterns = [
    path('index/', IndexView.as_view(),name='Index'),
    path('index2/', index),
    path('Apps', AppsView.as_view(),name='Apps'),
    path('Cadastro', CadastroView.as_view(),name='Cadastro'),
    path('Cadastro2', Cadastro2View.as_view(),name='Cadastro2'),
    path('Entrar', EntrarView.as_view(),name='Entrar'),
    path('Esquecisenha', EsquecisenhaView.as_view(),name='Esquecisenha'),
    path('Faleconosco', FaleconoscoView.as_view(),name='Faleconosco'),
    path('Faleconosco2', Faleconosco2View.as_view(),name='Faleconosco2'),
    path('OrcamentoView', OrcamentoView.as_view(),name='Orcamento'),
    path('orcamento2View', orcamento2View.as_view(),name='Orcamento2'),
    path('ProgramasView', ProgramasView.as_view(),name='Programas'),
    path('SobrenosView', SobrenosView.as_view(),name='Sobrenos'),
    path('TestView', TestView.as_view(),name='Test'),
    path('TrabalheconoscoView', TrabalheconoscoView.as_view(),name='Trabalheconosco'),
    path('Trabalheconosco2View', Trabalheconosco2View.as_view(),name='Trabalheconosco2'),
    path('WebsitesView',WebsitesView.as_view(),name='Websites'),
    
]
