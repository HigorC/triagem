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
      nome: 'Bebê chorando',
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
    }
  }
}
