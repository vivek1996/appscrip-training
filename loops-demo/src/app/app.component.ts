import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public spinkit = Spinkit;
  guestToken: String;
  userLocation: Position;
  zoneId: String;
  headerData: Object;
  categoriesData: Array<object>;
  trendingProductsData: Array<object>;
  lowestPriceData: Array<object>;
  constructor(private _http: ApiService) {
    this.findUserLocation();
    // this.getInitialId();
  }
  ngOnInit() {
    // this.getZoneId()
  }
  // get user Location
  findUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.userLocation = position;
        console.log(this.userLocation);
        this.getInitialId();
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  // getting Initial token
  getInitialId() {
    this._http.guestSignIn().subscribe(
      data => {
        console.log(data);
        const res = data;
        this.guestToken = res['data'].token;
        this.getZoneId();
      },
      error => {
        console.log(error);
      }
    );
  }
  // get Zone ID
  getZoneId() {
    this._http.getBusinessZones(this.guestToken, this.userLocation).subscribe(
      data => {
        console.log(data);
        this.zoneId = data['data'].zoneId;
        this.getStoreDetail();
      },
      error => {
        console.log(error);
      }
    );
  }
  getStoreDetail() {
    this._http
      .getStoreDetails(this.guestToken, this.userLocation, this.zoneId)
      .subscribe(
        data => {
          console.log(data);
          this.formatData(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  formatData(dat) {
    this.headerData = dat.data.store;
    this.categoriesData = dat.data.categories;
    this.trendingProductsData = dat.data.products;
    this.lowestPriceData = dat.data.lowestPrice;
  }
}
