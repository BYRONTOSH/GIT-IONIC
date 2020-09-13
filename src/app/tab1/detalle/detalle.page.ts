import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsumogitService } from 'src/app/services/consumogit.service';
import { Pastel } from 'src/app/services/Pastel';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  pasteles: Pastel;
  dato: any;
  pastel = [];

  constructor(private router: ActivatedRoute, private servGit: ConsumogitService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(r=>{
      this.dato=r.get('id');
    })

    this.servGit.getPlatos().subscribe(r=>{
      this.pasteles=r;
      this.pastel.push(this.pasteles[this.dato-1])
    })

  }


}
