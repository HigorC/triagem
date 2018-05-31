import { Component, OnInit } from '@angular/core';

import { CadastroService } from '../cadastro/cadastro.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {


  paciente = {
    sexo: 'Sexo',
    cidade: 'Cidade',
    nome: '',
    queixa: '',
    idade: ''
  };
  cadastroService: CadastroService;

  constructor(_cadastroService: CadastroService) {
    this.cadastroService = _cadastroService;

  }

  ngOnInit() {
    this.paciente = this.cadastroService.getPaciente()
  }

}
