import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SintomaService } from './sintoma.service';

declare var $: any;

@Component({
  selector: 'app-sintoma',
  templateUrl: './sintoma.component.html',
  styleUrls: ['./sintoma.component.css']
})
export class SintomaComponent implements OnInit {

  sintomaGeral: string;
  private idSintomaGeral: string;

  estadoAtual: string = "vermelho";
  gravidade: string;
  resumoGravidade: string;

  sintomas = {};
  sintomasVermelhos;
  sintomasLaranjas;
  sintomasAmarelos;
  sintomasVerdes;

  constructor(
    private route: ActivatedRoute,
    private sintomaService: SintomaService,
    private router: Router
  ) { }



  ngOnInit() {
    //Pegando parâmetro da url
    this.idSintomaGeral = this.route.snapshot.params['sintoma'];
    //Capturando o json responsável pelo sintoma
    this.buscarJsonSintoma();
    //Salvando o nome do sintoma
    this.sintomaGeral = this.sintomaService.getNomeSintomaPorId(this.idSintomaGeral);
  }

  possui() {

    if (this.estadoAtual == "vermelho") {
      this.gravidade = "Emergência"
      this.resumoGravidade = "Risco imediato de perder a vida."
    } else if (this.estadoAtual == "laranja") {
      this.gravidade = "Muito urgente"
      this.resumoGravidade = "Risco imediato de perda de função de órgãos ou membros."
    } else if (this.estadoAtual == "amarelo") {
      this.gravidade = "Urgente"
      this.resumoGravidade = "Condição pode se agravar sem atendimento."
    } else if (this.estadoAtual == "verde") {
      this.gravidade = "Pouco urgente"
      this.resumoGravidade = "Baixo risco de agravo imediato à saúde."
    }
    this.abrirModal();
  }

  naoPossui() {
    if (this.estadoAtual == "vermelho") {
      this.estadoAtual = "laranja";
    } else if (this.estadoAtual == "laranja") {
      this.estadoAtual = "amarelo";
    } else if (this.estadoAtual == "amarelo") {
      this.estadoAtual = "verde";
    } else if (this.estadoAtual == "verde") {
      this.estadoAtual = "azul";
      this.gravidade = "Não urgente"
      this.resumoGravidade = "Sem risco imediato de agravo à saúde."
      this.abrirModal();
    }
  }

  voltar(){
    if (this.estadoAtual == "azul") {
      this.estadoAtual = "verde";
    } else if (this.estadoAtual == "verde") {
      this.estadoAtual = "amarelo";
    } else if (this.estadoAtual == "amarelo") {
      this.estadoAtual = "laranja";
    } else if (this.estadoAtual == "laranja") {
      this.estadoAtual = "vermelho";
    } else if (this.estadoAtual == "vermelho") {
      this.router.navigate(['/classificacao']);
    } 
  }

  abrirModal() {
    $("#myModal").modal('show');
  }

  buscarJsonSintoma() {
    this.sintomaService.getJson(this.idSintomaGeral)
      .subscribe(data => {
        this.sintomas = data;
        this.sintomasVermelhos = this.sintomas["vermelho"];
        this.sintomasLaranjas = this.sintomas["laranja"];
        this.sintomasAmarelos = this.sintomas["amarelo"];
        this.sintomasVerdes = this.sintomas["verde"];

        console.log(this.sintomas);
        console.log(this.sintomas["vermelho"]);
      });
  }
}
