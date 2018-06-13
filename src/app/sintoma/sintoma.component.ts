import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
=======
import { ActivatedRoute,Router } from '@angular/router';
>>>>>>> 339151bd36b5cc2fb987f3b53282755595f0cd47
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

<<<<<<< HEAD
  // ultimoNivel: boolean = false;

=======
>>>>>>> 339151bd36b5cc2fb987f3b53282755595f0cd47
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
<<<<<<< HEAD
      // if (this.sintomasLaranjas && this.sintomasLaranjas.length > 0) {
        this.estadoAtual = "laranja";
      // } else {
        // this.estadoAtual = "amarelo";
      // }
    } else if (this.estadoAtual == "laranja") {
      this.estadoAtual = "amarelo";
    } else if (this.estadoAtual == "amarelo") {
      // if (this.sintomasVerdes && this.sintomasVerdes.length > 0) {
      //   this.ultimoNivel = true;
      // } else {
        // this.estadoAtual = "verde";
      // }

      this.estadoAtual = "verde";
    } else if (this.estadoAtual == "verde") {
      this.estadoAtual = "azul";
      // this.ultimoNivel = true;
=======
      this.estadoAtual = "laranja";
    } else if (this.estadoAtual == "laranja") {
      this.estadoAtual = "amarelo";
    } else if (this.estadoAtual == "amarelo") {
      this.estadoAtual = "verde";
    } else if (this.estadoAtual == "verde") {
      this.estadoAtual = "azul";
>>>>>>> 339151bd36b5cc2fb987f3b53282755595f0cd47
      this.gravidade = "Não urgente"
      this.resumoGravidade = "Sem risco imediato de agravo à saúde."
      this.abrirModal();
    }
  }

<<<<<<< HEAD
  voltar() {
    if (this.estadoAtual == "azul") {
      // this.ultimoNivel = false;
=======
  voltar(){
    if (this.estadoAtual == "azul") {
>>>>>>> 339151bd36b5cc2fb987f3b53282755595f0cd47
      this.estadoAtual = "verde";
    } else if (this.estadoAtual == "verde") {
      this.estadoAtual = "amarelo";
    } else if (this.estadoAtual == "amarelo") {
      this.estadoAtual = "laranja";
    } else if (this.estadoAtual == "laranja") {
      this.estadoAtual = "vermelho";
    } else if (this.estadoAtual == "vermelho") {
      this.router.navigate(['/classificacao']);
<<<<<<< HEAD
    }
=======
    } 
>>>>>>> 339151bd36b5cc2fb987f3b53282755595f0cd47
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

<<<<<<< HEAD
        // console.log(this.sintomas);
        // console.log(this.sintomas["vermelho"]);
=======
        console.log(this.sintomas);
        console.log(this.sintomas["vermelho"]);
>>>>>>> 339151bd36b5cc2fb987f3b53282755595f0cd47
      });
  }
}
