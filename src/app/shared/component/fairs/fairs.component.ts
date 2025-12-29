import { Component, OnInit } from '@angular/core';
import { Ifair } from '../../models/fairs';
import { FairsService } from '../../services/fairs.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {
fairsarr:Array<Ifair>=[]
  constructor(private _fairsservice:FairsService,
    private _snackbar:SnackbarService,
    private _router:Router
  ) { }


  ngOnInit(): void {
    this._fairsservice.fetchfairs().subscribe({
      next:res=>{
        console.log(res);
        this.fairsarr=res
        this._router.navigate(['fairs',this.fairsarr[0].fairId])
        
      },
      error:err=>{
        console.log(err);
        this._snackbar.opensnackbar(err)
        
      }
    })
  }

}
