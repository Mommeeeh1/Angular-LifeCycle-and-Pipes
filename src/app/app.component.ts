import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { StarPipe } from './star.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent,CommonModule, StarPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'



})
export class AppComponent {
  pname="Iphone 15"

  showProducts = true

   name = "Mohammed"

   price = 20000

   animal = "Lion"

  changePName()
  {
    this.pname ="Samme"
  }

  toggleProducts()
  {
    if(this.showProducts==true)
      {
        this.showProducts=false
      }
      else {this.showProducts=true}
  }
}
