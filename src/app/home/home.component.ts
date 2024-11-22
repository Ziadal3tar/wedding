import { Component, Input, SimpleChanges } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { BannerComponent } from "../banner/banner.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tap: string = '';

  receiveData(tap: any) {
    this.tap = tap;
  }
}
