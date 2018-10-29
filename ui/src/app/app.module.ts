import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { UploadComponent } from './upload/upload.component';
import { ConnectService} from './connect.service';

const appRoutes=[
{path:'',component:UploadComponent}
]

import {
   
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatIconModule,
  
  
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent
  ],
  imports: [
    MatButtonModule,
	MatCardModule,
	MatButtonToggleModule,
	MatProgressSpinnerModule,
	MatToolbarModule,
	MatIconModule,
    BrowserModule,
	HttpModule,
	
	RouterModule.forRoot(appRoutes),
  ],
  providers: [ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
