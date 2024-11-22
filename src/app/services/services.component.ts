import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
plans:any[]=[
  {
    title:'Wedding Plan',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti facere voluptates, fugit itaque, eveniet, nemo modi magni consequuntur pariatur autem hic. Totam perferendis expedita veritatis. Magnam, incidunt cupiditate cum dolorem et minima iure recusandae hic repellat harum sapiente possimus aut odit ullam quidem. Velit animi quisquam id voluptas non.',
    img:'./assets/drive-download-20241119T161356Z-001/services-1.jpg',
  },
  {
    title:'Ceremony',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti facere voluptates, fugit itaque, eveniet, nemo modi magni consequuntur pariatur autem hic. Totam perferendis expedita veritatis. Magnam, incidunt cupiditate cum dolorem et minima iure recusandae hic repellat harum sapiente possimus aut odit ullam quidem. Velit animi quisquam id voluptas non.',
    img:'./assets/drive-download-20241119T161356Z-001/services-2.jpg',
  },
  {
    title:'HoneyMoon',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti facere voluptates, fugit itaque, eveniet, nemo modi magni consequuntur pariatur autem hic. Totam perferendis expedita veritatis. Magnam, incidunt cupiditate cum dolorem et minima iure recusandae hic repellat harum sapiente possimus aut odit ullam quidem. Velit animi quisquam id voluptas non.',
    img:'./assets/drive-download-20241119T161356Z-001/services-3.jpg',
  },
]
}
