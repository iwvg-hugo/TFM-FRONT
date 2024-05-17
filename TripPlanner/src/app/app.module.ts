import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { BillsModule } from './bills/bills.module';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from '../shared/shared.module';
import { CalendarModuleR } from './calendar/calendar.module';
import { MapModule } from './map/map.module';
import { ApiModule } from 'src/shared/core/api.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BillsModule,
    MenuModule,
    SharedModule,
    CalendarModuleR,
    MapModule,
    HttpClientModule,
    ApiModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
