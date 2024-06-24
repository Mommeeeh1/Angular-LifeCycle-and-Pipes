import { Component, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

 @Input() name = ""

 data = "Thor"



  constructor(){
    console.log("this is constructor")
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    console.log("on changes is called ")
  }

  ngOnInit(): void {
   
    console.log("OnInit is called ")
  }

  ngAfterViewInit(): void {
    
    console.log("UI has been rendered")
  }

  ngAfterContentChecked(): void {
    console.log("after content checked is called")
    
  }

  ngOnDestroy(): void {
   console.log("Component destroyed")
  }

  changeData()
  {
    this.data ="ironman"
  }

}
