import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-annexes',
  templateUrl: './annexes.component.html',
  styleUrls: ['./annexes.component.css']
})
export class AnnexesComponent implements OnInit {

  annexes
  constructor(private rnpService: MyServiceService,private router: Router) { }

  ngOnInit(): void {
   this.getReources()

}
getReources(){
  this.rnpService.getResourceAll('annexes').subscribe(data=>{
    this.annexes = data['_embedded'].annexes
    console.log(data)

})
}
addResource(){
    this.router.navigateByUrl("iftar/addAnnexe")

}
onDeleteResource(url:string){
  if(confirm('Etes vous sur de vouloir supprimer cette Axe ?')){
  this.rnpService.deleteResource('annexes',url).subscribe(data=>{
 this.getReources()
  },err=>{
    console.log(err)
  })
  }
   
 
}
onEditResource(p:any){
 
  let url = p['_links'].self.href;
  this.router.navigateByUrl("iftar/editAnnexe/"+btoa(url))
} 
}
