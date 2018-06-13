import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SintomaService {

  constructor(private _http: HttpClient) { }

  getJson(idSintoma) {
    return this._http.get(this.mapeamentoArquivosJson[idSintoma].url);
  }

  getNomeSintomaPorId(idSintoma) {
    return this.mapeamentoArquivosJson[idSintoma].nome;
  }

  mapeamentoArquivosJson = {
    "1": {
      nome: 'Alergia',
      url: 'assets/classificacoes/alergia.json'
    },
    "2": {
<<<<<<< HEAD
      nome: 'Bebê Chorando',
=======
      nome: 'Bebê chorando',
>>>>>>> 339151bd36b5cc2fb987f3b53282755595f0cd47
      url: 'assets/classificacoes/bebe_chorando.json'
    },
    "3": {
      nome: 'Cefaléia',
      url: 'assets/classificacoes/cefaleia.json'
    },
    "4": {
      nome: 'Convulsão',
      url: 'assets/classificacoes/convulsao.json'
    },
    "5": {
<<<<<<< HEAD
      nome: 'Desmaio',
      url: 'assets/classificacoes/desmaio.json'
    },
    "6": {
      nome: 'Diabetes',
      url: 'assets/classificacoes/diabetes.json'
    },
    "7": {
      nome: 'Diarréia e/ou Vômito',
      url: 'assets/classificacoes/diarreia_vomito.json'
    },
    "8": {
      nome: 'Dispnéia em Adulto',
      url: 'assets/classificacoes/dispneia_adulto.json'
    },
    "9": {
      nome: 'Dispinéia em Criança',
      url: 'assets/clacificacoes/dispineia_em_criancas.json'
    },
    "10": {
      nome: 'Dor Abdominal em Adulto',
      url: 'assets/classificacoes/dor_abdominal_adulto.json'
    },
    "11": {
      nome: 'Dor Abdominal em Criança',
      url: 'assets/classificacoes/dor_abdominal_em_crianca.json'
    },

    "12": {
      nome: 'Doença Mental',
      url: 'assets/classificacoes/doenca_mental.json'
    },

    "13": {
      nome: 'Dor de Garganta',
      url: 'assets/classificacoes/dor_de_garganta.json'
    },
    "14": {
      nome: 'Dor Torácica',
      url: 'assets/classificacoes/dor_toracica.json'
    },
    "15": {
      nome: 'Embreagues Aparente',
      url: 'assets/classificacoes/embreagues_aparente.json'
    },
    "16": {
      nome: 'Erupção Cutanea',
      url: 'assets/classificacoes/erupcao_cutanea.json'
    },
    "17": {
      nome: 'Mordedura e Picadas',
      url: 'assets/classificacoes/mordedura_picadas.json'
    },
    "18": {
      nome: 'Pais Preocupados',
      url: 'assets/classificacoes/pais_preocupados.json'
    },
    "19": {
      nome: 'Quedas',
      url: 'assets/classificacoes/quedas.json'
    },
    "20": {
      nome: 'Trauma Cranioencefálico',
      url: 'assets/classificacoes/trauma_cranioencefalico.json'
    },
    "21": {
      nome: 'Outros',
      url:  'assets/classificacoes/outros.json'
=======
      nome: 'Diabetes',
      url: 'assets/classificacoes/diabetes.json'
    },
    "6": {
      nome: 'Diarréia e/ou vômito',
      url: 'assets/classificacoes/diarreia_vomito.json'
    },
    "7": {
      nome: 'Dispnéia em adulto',
      url: 'assets/classificacoes/dispneia_adulto.json'
    },
    "8": {
      nome: 'Dor abdominal em adulto',
      url: 'assets/classificacoes/dor_abdominal_adulto.json'
    },
    "9": {
      nome: 'Quedas',
      url: 'assets/classificacoes/quedas.json'
    },
    "10": {
      nome: 'Trauma cranioencefálico',
      url: 'assets/classificacoes/trauma_cranioencefalico.json'
>>>>>>> 339151bd36b5cc2fb987f3b53282755595f0cd47
    }
  }
}
