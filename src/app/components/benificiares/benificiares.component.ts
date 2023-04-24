import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-benificiares',
  templateUrl: './benificiares.component.html',
  styleUrls: ['./benificiares.component.css']
})
export class BenificiaresComponent implements OnInit {

  benificiaires
  constructor(private rnpService: MyServiceService,private router: Router) { }

  ngOnInit(): void {
   this.getReources()

}
oupload(){
  this.rnpService.uploadFile1("pdf")
  
}
getReources(){
  this.rnpService.getResourceAll('benificiaires').subscribe(data=>{
    this.benificiaires = data['_embedded'].benificiaires
    console.log(this.benificiaires)

})
}
addResource(){
    this.router.navigateByUrl("iftar/addBenificiare")

}
onDeleteResource(url:string){
  if(confirm('Etes vous sur de vouloir supprimer cette Axe ?')){
  this.rnpService.deleteResource('benificiaires',url).subscribe(data=>{
 this.getReources()
  },err=>{
    console.log(err)
  })
  }
   
 
}
onEditResource(p:any){
 
  let url = p['_links'].self.href;
  this.router.navigateByUrl("iftar/editBenificiaire/"+btoa(url))
} 

}
