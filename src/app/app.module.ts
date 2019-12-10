import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from './material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListFilterPipe } from './pipes/list-filter/list-filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { Ng5SliderModule } from 'ng5-slider';
import { SortByPipe } from './pipes/sort/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    SearchComponent,
    ListFilterPipe,
    FilterComponent,
    SortComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialsModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
