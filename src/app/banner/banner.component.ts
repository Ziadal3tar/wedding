import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ServicesComponent } from '../services/services.component';
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ContactComponent } from "../contact/contact.component";
ServicesComponent
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, AboutComponent, ServicesComponent, ServicesComponent, PortfolioComponent, ContactComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  isActive = 1;
  @Input()tap:any
  slides:any[]=[
    {
      img:'./assets/drive-download-20241119T161356Z-001/wedding-1.jpg',
      title:'Wedding',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quod eveniet eius reiciendis, nesciunt rem, unde nihil laboriosam commodi quis impedit consequatur, nemo sit? Aspernatur nam, sunt dicta adipisci deleniti voluptatem accusantium quae eligendi magnam optio consectetur? Reiciendis, facere consequatur. Exercitationem blanditiis rem nihil vel beatae itaque, sunt repellat eius.'
    },
    {
      img:'./assets/drive-download-20241119T161356Z-001/wedding-2.jpg',
      title:'Wedding',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quod eveniet eius reiciendis, nesciunt rem, unde nihil laboriosam commodi quis impedit consequatur, nemo sit? Aspernatur nam, sunt dicta adipisci deleniti voluptatem accusantium quae eligendi magnam optio consectetur? Reiciendis, facere consequatur. Exercitationem blanditiis rem nihil vel beatae itaque, sunt repellat eius.'
    },
    {
      img:'./assets/drive-download-20241119T161356Z-001/wedding-3.jpg',
      title:'Wedding',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quod eveniet eius reiciendis, nesciunt rem, unde nihil laboriosam commodi quis impedit consequatur, nemo sit? Aspernatur nam, sunt dicta adipisci deleniti voluptatem accusantium quae eligendi magnam optio consectetur? Reiciendis, facere consequatur. Exercitationem blanditiis rem nihil vel beatae itaque, sunt repellat eius.'
    }
  ]

}
