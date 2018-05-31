import { Component, OnInit } from '@angular/core';

import { CadastroService } from '../cadastro/cadastro.service';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css']
})
export class ClassificacaoComponent implements OnInit {

  cadastroService: CadastroService;
  private paciente = {
    nome: "João Silva",
    idade: "13",
    sexo: "Masculino"
  };

  // private paciente = {};
  constructor(_cadastroService: CadastroService) {
    this.cadastroService = _cadastroService;
  }

  ngOnInit() {
    // this.paciente = this.cadastroService.getPaciente()
  }

}
