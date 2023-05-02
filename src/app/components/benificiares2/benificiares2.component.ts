import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-benificiares2',
  templateUrl: './benificiares2.component.html',
  styleUrls: ['./benificiares2.component.css']
})
export class Benificiares2Component implements OnInit {
cin
selectedAnnexe
annexes
  benificiaires
  constructor(private rnpService: MyServiceService,private router: Router) { }

  ngOnInit(): void {
   this.getReources()
   this.getAnnexes()

}
oupload(){
  this.rnpService.uploadFileArchive('pdf')
  
}
getAnnexes(){
  this.rnpService.getResourceAll('annexes').subscribe(data=>{
    this.annexes = data['_embedded'].annexes
    console.log(this.annexes,"888888888888")

})
}
onRowClickAnnexe(e){
  this.selectedAnnexe = e
  if(e==0){
    this.getReources()
  }else{
    this.rnpService.getOneResource(this.rnpService.host+"/benificiaireArchives/search/findByAnnexeId?id="+e).subscribe(data=>{
      this.benificiaires = data['_embedded'].benificiaires
  
   
  
  
       })
  }
 
}
checrher(){
  console.log(this.cin,'rrrrrrrrrrrrr')
  if(this.cin){
  this.rnpService.getResourceAll('benificiaireArchives/search/findByCinIgnoreCase?cin='+this.cin).subscribe(data=>{
    this.benificiaires = data['_embedded'].benificiaireArchives
    console.log(data,"vvvvvvvvvvv")

})
  }else{
    this.getReources()
  }
}
getReources(){
  this.rnpService.getResourceAll2('all2').subscribe(data=>{
    this.benificiaires = data
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
onEditResource(id:any){
 

  this.router.navigateByUrl("/iftar/editBenificiaire/"+id)
} 

}
