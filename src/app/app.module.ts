import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';
import { FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';
import { IndexheaderComponent } from './indexheader/indexheader.component';
import { IndexfooterComponent } from './indexfooter/indexfooter.component';
import { IndexsidebarComponent } from './indexsidebar/indexsidebar.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { BarangComponent } from './barang/barang.component';
import { BarangaddComponent } from './barang/barangadd/barangadd.component';
import { BarangdetailComponent } from './barang/barangdetail/barangdetail.component';
import { BarangeditComponent } from './barang/barangedit/barangedit.component';
import { PenyewaComponent } from './penyewa/penyewa.component';
import { PenyewaaddComponent } from './penyewa/penyewaadd/penyewaadd.component';
import { PenyewadetailComponent } from './penyewa/penyewadetail/penyewadetail.component';
import { PenyewaeditComponent } from './penyewa/penyewaedit/penyewaedit.component';





let routes : Routes=[
  {path : '',component:SearchComponent},
  {path:'login',component:LoginComponent},
  {path:'barang',component:BarangComponent},
  {path:'barang/add',component:BarangaddComponent},
  {path:'barang/detail/:id',component:BarangdetailComponent},
  {path:'barang/edit/:id',component:BarangeditComponent},
  {path:'penyewa',component:PenyewaComponent},
  {path:'penyewa/add',component:PenyewaaddComponent},
  {path:'penyewa/detail/:id',component:PenyewadetailComponent},
  {path:'penyewa/edit/:id',component:PenyewaeditComponent},
 
  
  
]



@NgModule({
  declarations: [
    AppComponent,
    IndexheaderComponent,
    IndexfooterComponent,
    IndexsidebarComponent,  
    SearchComponent,
    LoginComponent,
    BarangComponent,
    BarangaddComponent,
    BarangdetailComponent,
    BarangeditComponent,
    PenyewaComponent,
    PenyewaaddComponent,
    PenyewadetailComponent,
    PenyewaeditComponent,

    
    
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
