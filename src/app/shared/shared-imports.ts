import { CommonModule } from '@angular/common';
import { Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export const sharedImports: Type<unknown>[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];
