import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
