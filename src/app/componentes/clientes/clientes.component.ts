import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  cliente: Cliente ={
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  @ViewChild("clienteForm") clienteForm: NgForm;
  @ViewChild("closeB") closeB: ElementRef;

  constructor( private clienteServ: ClienteServicio) {

  }

  ngOnInit() {
    this.clienteServ.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

  saldoTotal() {
    let saldoTotal: number = 0;
    if (this.clientes) {
      this.clientes.forEach( cliente => {
        saldoTotal += cliente.saldo;
      })
    }
    return saldoTotal;
  }

 
  agregarC({value, valid} : {value: Cliente, valid: boolean}) {
    this.clienteServ.agregarCliente(value);
    this.clienteForm.resetForm();
    this.cerrarModal();
  }

  private cerrarModal() {
    this.closeB.nativeElement.click();
  }
}
