import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ifair } from 'src/app/shared/models/fairs';
import { FairsService } from 'src/app/shared/services/fairs.service';

@Component({
  selector: 'app-fairs-details',
  templateUrl: './fairs-details.component.html',
  styleUrls: ['./fairs-details.component.scss']
})
export class FairsDetailsComponent implements OnInit {
fairdetails!:Ifair
  constructor(private _routes:ActivatedRoute,
    private _fairsservice:FairsService
  ) { }

  ngOnInit(): void {
    this.fairsdetails()
  }

 fairsdetails() {
  this._routes.paramMap.subscribe(params => {
    // console.log(params)
    let id=params.get('fairsid')
    console.log(id);
    // this._fairsservice.getfair(id)
    if(id){
      this._fairsservice.getfair(id)
      .subscribe({
        next:data=>{
          console.log(data);
          this.fairdetails=data
          
        },
        error:errr=>{
          console.log(errr);
          
        }
      })
    }
    
   
    
  });
}


}
