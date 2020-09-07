import { Component , OnInit } from '@angular/core';
import { ConsumogitService } from '../services/consumogit.service';
import { Pastel } from '../services/Pastel';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  pasteles: Pastel;
  constructor(private serviceGit : ConsumogitService) {}

  ngOnInit(): void {
    this.obtenerPasteles()
  }


  obtenerPasteles(){
    this.serviceGit.getFabricantes().subscribe(r=>{
      this.pasteles=r;
    })
  }

}
