import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTab, MatTabsModule } from '@angular/material/tabs';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
  ],

  exports: [
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
  ],

  declarations: [
  ]
})

export class SharedModule {}