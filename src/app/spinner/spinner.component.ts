import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit{
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
  
}
