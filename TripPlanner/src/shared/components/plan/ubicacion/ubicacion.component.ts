import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UbicacionDto } from 'src/shared/core/model/index';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatInputModule,
    MatChipsModule,
    MatCheckboxModule
  ]
})
export class UbicacionComponent implements OnInit{
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  requisitos: string[] = [];

  @Output() ubicacionChange: EventEmitter<UbicacionDto> = new EventEmitter<UbicacionDto>();
  
  announcer = inject(LiveAnnouncer);
  ubicacionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ubicacionForm = this.fb.group({
      direccion: [''],
      esExterior: [false],
      tipoVestimenta: [''],
      requisitos: [''],
    });
  }

  ngOnInit() {
    this.ubicacionForm.valueChanges.subscribe(value => {
      if (this.ubicacionForm.valid) {
        value.requisitos = this.requisitos;
        this.ubicacionChange.emit(value);
      }
    });
  }
  
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our requisito
    if (value) {
      this.requisitos.push(value.trim());
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(requisito: string): void {
    const index = this.requisitos.indexOf(requisito);

    if (index >= 0) {
      this.requisitos.splice(index, 1);
      this.ubicacionForm.controls['requisitos'].setValue(this.requisitos);
      this.announcer.announce(`Eliminado ${requisito}`);
    }
  }

  edit(requisito: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove requisito if it no longer has a name
    if (!value) {
      this.remove(requisito);
      return;
    }

    // Edit existing requisito
    const index = this.requisitos.indexOf(requisito);
    if (index >= 0) {
      this.requisitos[index] = value;
      this.ubicacionForm.controls['requisitos'].setValue(this.requisitos);
    }
  }

  loadForm(ubicacion: UbicacionDto | undefined): void {
    if (!ubicacion) {
      return;
    }
    this.ubicacionForm.patchValue(ubicacion, { emitEvent: false });
    if (ubicacion.requisitos) {
      this.requisitos = ubicacion.requisitos;
    }
  }

}
