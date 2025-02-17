import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent, FooterComponent, HeaderComponent ,  ContentGeneratorComponent } from '@angel/angel-ui-components';
import { RouterModule } from '@angular/router';
import { UploadPostComponent } from '@angel/features';


@Component({
  selector: 'app-main-layout',
  imports: [RouterModule,CommonModule, HeaderComponent , FooterComponent, ChatComponent, UploadPostComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
