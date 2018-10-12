import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  guestToken: String;
  userLocation: Position;
  zoneId: String;
  constructor(private _http: ApiService) {
    this.findUserLocation();
    // this.getInitialId();
  }
  ngOnInit() {
    // this.getZoneId();
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
        this.guestToken = res.data.token;
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
        this.zoneId = data.data.zoneId;
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
        },
        error => {
          console.log(error);
        }
      );
  }
}
