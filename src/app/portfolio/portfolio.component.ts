import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  @ViewChild('portfolioContainer', { static: false }) portfolioContainer!: ElementRef;
    plans: any[] = [
    { title1: 'Wedding Planning 1', title2: 'Wedding Planning 1', img: '/assets/portfolio/portfolio-1.jpg',filter:'filter-wedding' },
    { title1: 'Wedding Planning 4', title2: 'Wedding Planning 4', img: '/assets/portfolio/portfolio-2.jpg',filter:'filter-wedding' },
    { title1: 'Wedding Planning 7', title2: 'Wedding Planning 7', img: '/assets/portfolio/portfolio-7.jpg',filter:'filter-wedding' },
    { title1: 'Wedding Planning 6', title2: 'Wedding Planning 6', img: '/assets/portfolio/portfolio-2.jpg',filter:'filter-honeymoon' },
    { title1: 'Wedding Planning 9', title2: 'Wedding Planning 9', img: '/assets/portfolio/portfolio-1.jpg',filter:'filter-wedding' },

    { title1: 'Wedding Planning 8', title2: 'Wedding Planning 8', img: '/assets/portfolio/portfolio-4.jpg',filter:'filter-ceremony' },
    { title1: 'Wedding Planning 5', title2: 'Wedding Planning 5', img: '/assets/portfolio/portfolio-5.jpg',filter:'filter-ceremony' },
    { title1: 'Wedding Planning 2', title2: 'Wedding Planning 2', img: '/assets/portfolio/portfolio-6.jpg',filter:'filter-ceremony' },
    { title1: 'Wedding Planning 3', title2: 'Wedding Planning 3', img: '/assets/portfolio/portfolio-4.jpg',filter:'filter-ceremony' },

    { title1: 'Wedding Planning 8', title2: 'Wedding Planning 8', img: '/assets/portfolio/portfolio-7.jpg',filter:'filter-honeymoon' },
    { title1: 'Wedding Planning 9', title2: 'Wedding Planning 9', img: '/assets/portfolio/portfolio-9.jpg',filter:'filter-wedding' },
    { title1: 'Wedding Planning 6', title2: 'Wedding Planning 6', img: '/assets/portfolio/portfolio-8.jpg',filter:'filter-honeymoon' },
    { title1: 'Wedding Planning 5', title2: 'Wedding Planning 5', img: '/assets/portfolio/portfolio-5.jpg',filter:'filter-honeymoon' },
    { title1: 'Wedding Planning 9', title2: 'Wedding Planning 9', img: '/assets/portfolio/portfolio-9.jpg',filter:'filter-ceremony' },
    { title1: 'Wedding Planning 7', title2: 'Wedding Planning 7', img: '/assets/portfolio/portfolio-7.jpg',filter:'filter-honeymoon' },

  ];
  isotope: any;
  ngAfterViewInit(): void {
    const container = this.portfolioContainer.nativeElement;

    if (container) {
      // تأكد من تحميل الصور قبل تفعيل Isotope
      imagesLoaded(container, () => {
        this.isotope = new Isotope(container, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows',
        });
      });
    }}

  filterPortfolio(filter: string, event: Event): void {
    event.preventDefault();
let ul:any = document.getElementById('portfolio-filter')?.childNodes
for (let i = 0; i < ul.length; i++) {
  const element = ul[i];
element.classList.remove('filter-active');

}
    // Update filter-active class
    const buttons = document.querySelectorAll('#portfolio-filters li');
    buttons.forEach((button) => button.classList.remove('filter-active'));

    const target = event.target as HTMLElement;
    target.classList.add('filter-active');

    // Apply Isotope filter
    if (this.isotope) {
      this.isotope.arrange({ filter });
    }
  }
}
