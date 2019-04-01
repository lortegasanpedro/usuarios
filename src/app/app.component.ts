import { Component, OnInit } from '@angular/core';
import { Usuario } from './class/usuario';
import { UsuarioServiceService } from './usuario-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'usuarios';
  usuario: Usuario;
  arrayUsuarios: Array<Usuario>;

  // Create observer object
  myObserver = {
    next: (x: string) => console.log('Observer got a next value: ' + x),
    error: (err: string) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  constructor(private usuariosService: UsuarioServiceService) { }

  ngOnInit(): void {
    console.log ('AppComponent ngOnInit');
    this.usuario = new Usuario('', '', '',
                               '', '', '',
                               null, '');
    this.arrayUsuarios = [];
    this.usuariosService.getUsers().subscribe ((dat) => {
      console.log(this.arrayUsuarios);
      console.log(dat);
      this.data(dat);
    }, this.error, this.complet);
    console.log ('AppComponent ngOnInit 2');
  }

  data(datos: any) {
    //this.arrayUsuarios = datos;
    console.log(datos);
    datos.results.forEach( usu => {
    //this.arrayUsuarios = datos;
    this.arrayUsuarios.push(
      new Usuario(usu.gender, usu.name.first, usu.name.last, usu.phone,
                               usu.picture.thumbnail, usu.email, null,
                               usu.nat));

      } );
    console.log(this.arrayUsuarios);
  }

  error(err: any) {
    console.log(err);
  }

  complet() {
    console.log('complet');
  }

}
