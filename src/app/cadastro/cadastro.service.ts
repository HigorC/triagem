import { Injectable } from '@angular/core'

@Injectable()
export class CadastroService {

    private paciente = {
        sexo: 'Sexo',
        cidade: 'Cidade',
        nome: '',
        queixa: '',
        idade: ''
    };

    getPaciente() {
        return this.paciente;
    }

    setPaciente(paciente) {
        this.paciente = paciente;
    }

}