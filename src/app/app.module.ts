import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './_components/admin/admin.component';
import { LoginComponent } from './_components/login/login.component';

import { AuthTokenHttpInterceptorProvider } from './_http-interceptors/auth-token.interceptor';
import { NotFoundComponent } from './_error-pages/not-found/not-found/not-found.component';
import { ServerErrorComponent } from './_error-pages/server-error/server-error/server-error.component';
import { SharedModule } from './_shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './_components/dashboard/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { CardComponent } from './_components/card/card/card.component';
import { WaterspreadlevelchartComponent } from './_components/charts/waterspreadlevelchart/waterspreadlevelchart.component';
import { BundlengthchartComponent } from './_components/charts/bundlengthchart/bundlengthchart.component';
import { ChartzoomviewerComponent } from './_components/chartzoomviewer/chartzoomviewer.component';
import { ZoomcardComponent } from './_components/card/zoomcard/zoomcard.component';
import { MinicardComponent } from './_components/charts/minicard/minicard.component';
import { WaterbodymapviewerComponent } from './_components/charts/waterbodymapviewer/waterbodymapviewer/waterbodymapviewer.component';
import { MaduraiwaterbodymapComponent } from './_components/charts/maduraiwaterbodymap/maduraiwaterbodymap/maduraiwaterbodymap.component';
import { ForgetpasswordComponent } from './_components/forgetpassword/forgetpassword.component';
import { ConfirmpasswordComponent } from './_components/confirmpassword/confirmpassword.component';
import { MapcardComponent } from './_components/card/mapcard/mapcard.component';
import { MetadatacardComponent } from './_components/card/metadatacard/metadatacard/metadatacard.component';
import { HydrologicalComponent } from './_components/hydrological/hydrological/hydrological.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NotFoundComponent,
    ServerErrorComponent,
    DashboardComponent,
    CardComponent,
    WaterspreadlevelchartComponent,
    BundlengthchartComponent,
    ChartzoomviewerComponent,
    ZoomcardComponent,
    MinicardComponent,
    WaterbodymapviewerComponent,
    MaduraiwaterbodymapComponent,
    ForgetpasswordComponent,
    ConfirmpasswordComponent,
    MapcardComponent,
    MetadatacardComponent,
    HydrologicalComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    NgChartsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [
    AuthTokenHttpInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
