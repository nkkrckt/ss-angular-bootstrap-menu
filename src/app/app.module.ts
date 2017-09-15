import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {NgForm} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {DishService} from './dish.service';
import {AddDishComponent} from './add-dish/add-dish.component';
import {EditDishComponent} from './edit-dish/edit-dish.component';
import {EditDishPriceComponent} from './edit-dish-price/edit-dish-price.component';
import {FormAddDishComponent} from './form-add-dish/form-add-dish.component';
import {ModalWindowComponent} from './modal-window/modal-window.component';
import { RestaurantFooterComponent } from './restaurant-footer/restaurant-footer.component';
import { ModalWindowPriceComponent } from './modal-window-price/modal-window-price.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDishComponent,
    EditDishComponent,
    EditDishPriceComponent,
    FormAddDishComponent,
    ModalWindowComponent,
    RestaurantFooterComponent,
    ModalWindowPriceComponent,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule, ReactiveFormsModule,
        BrowserAnimationsModule, CalendarModule
  ],
  providers: [
    DishService],
  bootstrap: [AppComponent]
})
export class AppModule {}
