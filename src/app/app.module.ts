import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';

const PAGES = [AppComponent, HomeComponent];

const NZ_MODULES = [NzCardModule, NzListModule, NzFormModule, NzSelectModule];

@NgModule({
  declarations: [...PAGES],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ...NZ_MODULES,
  ],
  providers: [
    {
      provide: NZ_CONFIG,
      useValue: {
        theme: {
          primaryColor: '#d72638',
          mode: 'dark',
        },
      },
    },
    {
      provide: NZ_I18N,
      useValue: en_US,
    },
  ],
  bootstrap: [AppComponent], // ⬅️ این خیلی مهمه
})
export class AppModule {}
