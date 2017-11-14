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
import { DendaComponent } from './denda/denda.component';
import { DendaaddComponent } from './denda/dendaadd/dendaadd.component';
import { DendadetailComponent } from './denda/dendadetail/dendadetail.component';
import { DendaeditComponent } from './denda/dendaedit/dendaedit.component';
import { KategoriComponent } from './kategori/kategori.component';
import { KategoriaddComponent } from './kategori/kategoriadd/kategoriadd.component';
import { KategoridetailComponent } from './kategori/kategoridetail/kategoridetail.component';
import { KategorieditComponent } from './kategori/kategoriedit/kategoriedit.component';
import { PegawaiComponent } from './pegawai/pegawai.component';
import { PegawaiaddComponent } from './pegawai/pegawaiadd/pegawaiadd.component';
import { PegawaidetailComponent } from './pegawai/pegawaidetail/pegawaidetail.component';
import { PegawaieditComponent } from './pegawai/pegawaiedit/pegawaiedit.component';
import { PembayaranComponent } from './pembayaran/pembayaran.component';
import { PembayaranaddComponent } from './pembayaran/pembayaranadd/pembayaranadd.component';
import { PembayarandetailComponent } from './pembayaran/pembayarandetail/pembayarandetail.component';
import { PembayaraneditComponent } from './pembayaran/pembayaranedit/pembayaranedit.component';
import { DataSewaComponent } from './data-sewa/data-sewa.component';
import { DataSewadetailComponent } from './data-sewa/data-sewadetail/data-sewadetail.component';
import { DataSewakembaliComponent} from './data-sewa/data-sewakembali/data-sewakembali.component';




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
  {path:'denda',component:DendaComponent},
  {path:'denda/add',component:DendaaddComponent},
  {path:'denda/detail/:id',component:DendadetailComponent},
  {path:'denda/edit/:id',component:DendaeditComponent},
  {path:'kategori',component:KategoriComponent},
  {path:'kategori/add',component:KategoriaddComponent},
  {path:'kategori/detail/:id',component:KategoridetailComponent},
  {path:'kategori/edit/:id',component:KategorieditComponent},
  {path:'pegawai',component:PegawaiComponent},
  {path:'pegawai/add',component:PegawaiaddComponent},
  {path:'pegawai/detail/:id',component:PegawaidetailComponent},
  {path:'pegawai/edit/:id',component:PegawaieditComponent},
  {path:'pembayaran',component:PembayaranComponent},
  {path:'pembayaran/add',component:PembayaranaddComponent},
  {path:'pembayaran/detail/:id',component:PembayarandetailComponent},
  {path:'pembayaran/edit/:id',component:PembayaraneditComponent},
  {path:'datasewa',component:DataSewaComponent},
  {path:'datasewa/detail/:id',component:DataSewadetailComponent},
  {path:'datasewa/kembali/:id',component:DataSewakembaliComponent}
  
 
  
  
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
    DendaComponent,
    DendaaddComponent,
    DendadetailComponent,
    DendaeditComponent,
    KategoriComponent,
    KategoriaddComponent,
    KategoridetailComponent,
    KategorieditComponent,
    PegawaiComponent,
    PegawaiaddComponent,
    PegawaidetailComponent,
    PegawaieditComponent,
    PembayaranComponent,
    PembayaranaddComponent,
    PembayarandetailComponent,
    PembayaraneditComponent,
    DataSewaComponent,
    DataSewadetailComponent,
    DataSewakembaliComponent,

    
    
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
