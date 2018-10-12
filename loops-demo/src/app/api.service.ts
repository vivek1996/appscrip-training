import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api-dev.loopzdelivery.com';
  private headersHttp = new HttpHeaders().set('language', 'en');

  constructor(private http: HttpClient) {}

  guestSignIn() {
    const param = {
      deviceId: 'efbt',
      deviceType: 3
    };
    // let headers = new HttpHeaders();
    // headers = headers.set('language', 'en');
    return this.http.post(`${this.baseUrl}/web/guest/signIn`, param, {
      headers: this.headersHttp
    });
  }
  getBusinessZones(guestToken, position) {
    const param = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
    this.headersHttp = this.headersHttp.set('authorization', guestToken);
    return this.http.post(`${this.baseUrl}/business/zones`, param, {
      headers: this.headersHttp
    });
  }
  getStoreDetails(guestToken, position, zoneId) {
    this.headersHttp = this.headersHttp.set('authorization', guestToken);
    // tslint:disable-next-line:max-line-length
    return this.http.get(
      `${this.baseUrl}/business/categories/${zoneId}/5b5201a06e47973b59553606/${
        position.coords.latitude
      }/${position.coords.longitude}`,
      { headers: this.headersHttp }
    );
  }
}
