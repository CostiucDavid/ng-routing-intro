import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  id: number = 0;
  //private subscription: Subscription; // вариант 1

  constructor(private activateRoute: ActivatedRoute) {
    //this.subscription = activateRoute.params.subscribe(p => this.id = p['id']); // вариант 1
   }

  ngOnInit(): void {
    this.activateRoute.paramMap.pipe(
      switchMap(p => p.getAll('id'))
    ).subscribe(x => this.id = +x); // вариант 2
  }

}
