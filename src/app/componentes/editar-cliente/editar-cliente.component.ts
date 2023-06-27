import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente ={
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  id: string;


  constructor( private clienteServ: ClienteServicio,
               private router: Router,
               private route: ActivatedRoute ) {
      
  }
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clienteServ.getCliente(this.id).subscribe( cliente => {
      this.cliente = cliente;
    })
  }

  editarC({value, valid}: {value: Cliente, valid: boolean}) {
     value.id = this.id;
     this.clienteServ.editar(value);
     this.router.navigate(['/']);
  }

  eliminarC() {
     if(confirm('Desea eliminar?')) {
      this.clienteServ.eliminar(this.cliente);
      this.router.navigate(['/']);
     }
  }
}
