import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  id: number = 0;
  product: string = '';
  price: number = 0;
  private routeSubscriprion : Subscription;
  private querySubscriprion : Subscription;

  constructor(private route: ActivatedRoute) {
    this.routeSubscriprion = route.params.subscribe(p => this.id == p['id']);
    this.querySubscriprion = route.queryParams.subscribe(
      (queryParam: any) => {
        this.product = queryParam['product'];
        this.price = queryParam['price'];
      }
    );
   }

  ngOnInit(): void {
  }

}
