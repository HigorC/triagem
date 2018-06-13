import { Component, OnInit, EventEmitter } from '@angular/core';

import { CadastroService } from './cadastro.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  // emitirDados = new EventEmitter<string>();

  cadastroService: CadastroService;
  paciente = {
    sexo: '',
    cidade: '',
    unidade: '',
    nome: '',
    queixa: '',
    idade: ''
  };

  constructor(
    _cadastroService: CadastroService,
    private router: Router
  ) {
    this.cadastroService = _cadastroService;
  }


  prepararDados(paciente) {
    this.cadastroService.setPaciente(paciente);
    this.router.navigate(['/classificacao']);
  }

  cidades = [
    "Água Clara",
    "Alcinópolis",
    "Amambaí",
    "Anastácio",
    "Angélica",
    "Antônio João",
    "Aparecida do Taboado",
    "Aquidauana",
    "Aral Moreira",
    "Bandeirantes",
    "Bataguassu",
    "Bataiporã",
    "Bela Vista",
    "Bodoquena",
    "Bonito",
    "Brasilândia",
    "Caarapó",
    "Camapuã",
    "Campo Grande",
    "Caracol",
    "Cassilândia",
    "Chapadão do Sul",
    "Corguinho",
    "Coronel Sapucaia",
    "Corumbá",
    "Costa Rica",
    "Coxim",
    "Deodápolis",
    "Dois Irmãos do Buriti",
    "Douradina",
    "Dourados",
    "Eldorado",
    "Fátima do Sul",
    "Glória de Dourados",
    "Guia Lopes da Laguna",
    "Iguatemi",
    "Inocência",
    "Itaporã",
    "Itaquiraí",
    "Ivinhema",
    "Japorã",
    "Jaraguari",
    "Jardim",
    "Jateí",
    "Juti",
    "Ladário",
    "Laguna Carapã",
    "Maracaju",
    "Miranda",
    "Mundo Novo",
    "Naviraí",
    "Nioaque",
    "Nova Alvorada do Sul",
    "Nova Andradina",
    "Novo Horizonte do Sul",
    "Paranaíba",
    "Paranhos",
    "Pedro Gomes",
    "Ponta Porã",
    "Porto Murtinho",
    "Ribas do Rio Pardo",
    "Rio Brilhante",
    "Rio Negro",
    "Rio Verde de Mato Grosso",
    "Rochedo",
    "Santa Rita do Pardo",
    "São Gabriel do Oeste",
    "Selvíria",
    "Sete Quedas",
    "Sidrolândia",
    "Sonora",
    "Tacuru",
    "Taquarussu",
    "Terenos",
    "Três Lagoas",
    "Vicentina"
  ];


  ngOnInit() {

  }

}
