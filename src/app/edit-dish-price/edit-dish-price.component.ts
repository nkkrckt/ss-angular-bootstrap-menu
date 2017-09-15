import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {DishService} from '../dish.service';
import {Dish} from '../dish';

@Component({
  selector: 'app-edit-dish-price',
  templateUrl: './edit-dish-price.component.html',
  styleUrls: ['./edit-dish-price.component.css', '../add-dish/add-dish.component.css']
})
export class EditDishPriceComponent implements OnInit {
  chooseDish = {};


  dishes: Dish[];

  modalPrice(dish): any {this.chooseDish = dish; }
  constructor(private dishService: DishService) {}

  onChanged(form) {
    this.dishService.update(form);
  }


  ngOnInit(): void {
    this.dishService.getDishes().then(dishes => this.dishes = dishes);
  }
}
