from django.shortcuts import render
from django.views import View
# Create your views here.

def index(request):
    if request.method == 'GET':
        return render(request, 'index.html')


class IndexView(View):
    def get(self, request):
        return render(request, 'index.html')


class AppsView(View):
    def get(self, request):
        return render(request, 'Apps.html')


class CadastroView(View):
    def get(self, request):
        return render(request, 'cadastro_page.html')


class Cadastro2View(View):
    def get(self, request):
        return render(request, 'cadastro2.html')



class EntrarView(View):
    def get(self, request):
        return render(request, 'entrar_page.html')



class EsquecisenhaView(View):
    def get(self, request):
        return render(request, 'esqueci_minha_senha.html')


class FaleconoscoView(View):
    def get(self, request):
        return render(request, 'faleconosco.html')



class Faleconosco2View(View):
    def get(self, request):
        return render(request, 'fale_conosco_page2.html')



class OrcamentoView(View):
    def get(self, request):
        return render(request, 'orcamento_page.html')


class orcamento2View(View):
    def get(self, request):
        return render(request, 'orcamento_page2.html')


class ProgramasView(View):
    def get(self, request):
        return render(request, 'programas_page.html')


class SobrenosView(View):
    def get(self, request):
        return render(request, 'sobre_nos_page.html')



class TestView(View):
    def get(self, request):
        return render(request, 'test.html')



class TrabalheconoscoView(View):
    def get(self, request):
        return render(request, 'trabalhe_conosco_page.html')


class Trabalheconosco2View(View):
    def get(self, request):
        return render(request, 'trabalhe_conosco_page2.html')


class WebsitesView(View):
    def get(self, request):
        return render(request, 'websites_page.html')