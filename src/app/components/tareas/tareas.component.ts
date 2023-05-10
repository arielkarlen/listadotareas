import { Component, OnInit } from '@angular/core';
import { tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

listaTareas: tarea[]=[];
nombreTarea:string='';

constructor() {}
ngOnInit(): void {
  
}

AgregarTarea() {
  const tarea: tarea = {
    nombre: this.nombreTarea,
    estado:false
  }

  this.listaTareas.push(tarea);

  this.nombreTarea='';
}
}
