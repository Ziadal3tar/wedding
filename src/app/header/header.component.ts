import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  close:Boolean=true
  @Output() tapName = new EventEmitter<string>();
  onTapChange(tap:any) {
    if (!this.close) {
      this.toggle()

    }
    this.tapName.emit(tap);
  }
  toggle(){
    this.close = !this.close
    const menu = document.querySelector('.home')
    const navMobile = document.querySelector('.nav-mobile')
    menu?.classList.toggle('active')
    navMobile?.classList.toggle('active')
  }
}
