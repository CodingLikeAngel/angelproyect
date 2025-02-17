import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, FooterComponent } from '@angel/angel-ui-components';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-foro-main-layout',
  imports: [RouterModule,CommonModule, HeaderComponent , FooterComponent],
  templateUrl: './foro-main-layout.component.html',
  styleUrl: './foro-main-layout.component.scss',
})
export class ForoMainLayoutComponent {}
