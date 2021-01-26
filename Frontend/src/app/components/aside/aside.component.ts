import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',

})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Sair(): void {
    Swal.fire({
      title: 'Deseja sair do sistema?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
  }).then((result) => {
      if (result.value) {
          this.logout()
                      
      }
  })
   
}
  
  logout(): void {
    window.sessionStorage.clear();
    window.location.href="/";
  }

}
