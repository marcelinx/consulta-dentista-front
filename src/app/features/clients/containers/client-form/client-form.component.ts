import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../../services/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ClienteService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required ]],
      email: ['', [Validators.required ]],
      dataNascimento: ['', [Validators.required ]],
      telefone: ['', [Validators.required]],
      sexo: [''],
      endereco: ['']
    });
  }

  ngOnInit(): void {
    const cliente: Cliente = this.route.snapshot.data['cliente'];
    if (cliente) {
      this.form.setValue({
        id: cliente.id,
        nome: cliente.nome,
        email: cliente.email,
        telefone: cliente.telefone,
        dataNascimento: cliente.dataNascimento,
        sexo: cliente.sexo,
        endereco: cliente.endereco,
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      // Formatar a data de nascimento
      const dataNascimentoFormatada = this.formatarData(this.form.value.dataNascimento);

      // Adicionar a data formatada ao objeto do formulário
      const formData = { ...this.form.value, dataNascimentoFormatada };

      // Enviar o formulário com a data formatada
      this.service.saveClient(formData).subscribe(
        (result) => this.onSuccess(),
        (error) => this.onError()
      );
    } else {
      this.snackBar.open('Por favor, corrija os erros antes de enviar.', '', {
        duration: 5000,
      });
    }
  }

  // Função para formatar a data no formato desejado (por exemplo, 'DD/MM/AAAA')
  private formatarData(data: string): string {
    // Lógica para formatar a data aqui (exemplo simples para fins de demonstração)
    const partesData = data.split('-');
    return `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Cliente salvo com sucesso!', '', {
      duration: 5000,
    });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Cliente atrelado a uma consulta. Não é possivel apagar.', '', {
      duration: 5000,
    });
  }
}
