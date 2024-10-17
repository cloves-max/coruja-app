import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MainComponent } from './layouts/main/main.component';
import { CoreRoutingModule } from './core-routing.module';




@NgModule({
  declarations: [

    HeaderComponent,
       FooterComponent,
       SidebarComponent,
       MainComponent
  ],
  imports: [
    // Vendors,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // Material
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    // Modules
    SharedModule,

    CoreRoutingModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class CoreModule { }
