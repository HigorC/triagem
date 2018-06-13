import { Injectable } from '@angular/core'

@Injectable()
export class CadastroService {

    private paciente = {
        sexo: 'Sexo',
        cidade: 'Cidade',
<<<<<<< HEAD
        unidade: 'Unidade', 
=======
>>>>>>> 339151bd36b5cc2fb987f3b53282755595f0cd47
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