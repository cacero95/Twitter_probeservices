import { Component } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  api_key = 'mpDKbQPkWV28lTSePrHQpBuN5';
  api_secret = 'lEpJh164EFzNG9IVvVteOk1EnH2Rv0ZWzH2BGn82Hrtck98Wmp';
  access_token = '2355469728-K4DO8rzIp43RqoR2QE2geRxIIZAkRuks35qRftr';
  token_secret = 'n7kd3BSsfGM8p9Nnfzxnpn6mlOUXDVfDtM7PoQ0SKjKYl ';

  constructor(private auth:AuthorizationService,
    private http:HttpClient){
    
  }
}
