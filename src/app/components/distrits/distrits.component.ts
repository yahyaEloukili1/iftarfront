import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-distrits',
  templateUrl: './distrits.component.html',
  styleUrls: ['./distrits.component.css']
})
export class DistritsComponent implements OnInit {
districts
  constructor(private rnpService: MyServiceService) { }

  ngOnInit(): void {
    this.rnpService.getResourceAll('districts').subscribe(data=>{
      this.districts = data['_embedded'].districts
      console.log(this.districts)
  
  })

}
}