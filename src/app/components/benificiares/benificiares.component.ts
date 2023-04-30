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
  cin
  constructor(private rnpService: MyServiceService,private router: Router) { }

  ngOnInit(): void {
   this.getReources()

}
checrher(){
  console.log(this.cin,'rrrrrrrrrrrrr')
  if(this.cin){
  this.rnpService.getResourceAll('benificiaires/search/findByCinIgnoreCase?cin='+this.cin).subscribe(data=>{
    this.benificiaires = data['_embedded'].benificiaires
    console.log(this.benificiaires,"vvvvvvvvvvv")

})
  }else{
    this.getReources()
  }
}
oupload(){
  this.rnpService.uploadFile1('pdf')
  
}
getReources(){
  this.rnpService.getResourceAll2('all').subscribe(data=>{
    this.benificiaires = data
    console.log(this.benificiaires,"xxxxxxxxxxxxxxx")

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
onEditResource(id:any){
 

  this.router.navigateByUrl("/iftar/editBenificiaire/"+id)
} 

}
