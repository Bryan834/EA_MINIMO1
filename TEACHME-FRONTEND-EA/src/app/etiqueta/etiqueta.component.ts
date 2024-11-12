import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etiqueta } from '../models/etiqueta.model';

@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.component.html',
  styleUrls: ['./etiqueta.component.css']
})
export class EtiquetaComponent implements OnInit {
  etiquetaForm: FormGroup;
  etiquetaEditForm: FormGroup;
  eliminarForm: FormGroup;
  asignarForm: FormGroup;
  etiquetas: Etiqueta[] = [];
  editingEtiqueta: boolean = false;  // Flag to determine if we're editing
  currentEtiqueta: Etiqueta | null = null;  // Store the etiqueta being edited

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    // Formulario de creación
    this.etiquetaForm = this.fb.group({
      descripcion: ['', Validators.required],
      colorFav: ['#000000']
    });

    // Formulario de edición
    this.etiquetaEditForm = this.fb.group({
      descripcion: ['', Validators.required],
      colorFav: ['#000000']
    });

    // Formulario de eliminación
    this.eliminarForm = this.fb.group({
      etiquetaId: ['', Validators.required]
    });

    // Formulario de asignación
    this.asignarForm = this.fb.group({
      etiquetaId: ['', Validators.required],
      usuarioId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Cargar todas las etiquetas al inicio
    this.loadEtiquetas();
  }

  loadEtiquetas(): void {
    this.apiService.getEtiquetas().subscribe((data) => {
      this.etiquetas = data;
    });
  }

  // Crear nueva etiqueta
  createEtiqueta(): void {
    if (this.etiquetaForm.invalid) return;

    const nuevaEtiqueta = this.etiquetaForm.value;
    this.apiService.createEtiqueta(nuevaEtiqueta).subscribe(() => {
      this.loadEtiquetas();
      this.etiquetaForm.reset();
    });
  }

  // Asignar usuario a etiqueta
  asignarUsuarioAEtiqueta(): void {
    if (this.asignarForm.invalid) return;

    const { etiquetaId, usuarioId } = this.asignarForm.value;
    this.apiService.asignarUsuarioAEtiqueta(etiquetaId, usuarioId).subscribe(() => {
      this.loadEtiquetas();
      this.asignarForm.reset();
    });
  }

  // Editar etiqueta
  editEtiqueta(etiqueta: Etiqueta): void {
    this.currentEtiqueta = etiqueta;
    this.etiquetaEditForm.setValue({
      descripcion: etiqueta.descripcion,
      colorFav: etiqueta.colorFav
    });
    this.editingEtiqueta = true;
  }

  // Actualizar etiqueta
  updateEtiqueta(): void {
    if (this.etiquetaEditForm.invalid) return;

    const updatedEtiqueta = { ...this.currentEtiqueta, ...this.etiquetaEditForm.value };
    this.apiService.updateEtiqueta(updatedEtiqueta._id, updatedEtiqueta).subscribe(() => {
      this.loadEtiquetas();
      this.etiquetaEditForm.reset();
      this.editingEtiqueta = false;
      this.currentEtiqueta = null;
    });
  }

  // Eliminar etiqueta
  deleteEtiqueta(id: string): void {
    this.apiService.deleteEtiqueta(id).subscribe(() => {
      this.loadEtiquetas();
    });
  }
}
