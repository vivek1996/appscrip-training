import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api-dev.loopzdelivery.com';

  constructor(private http: HttpClient) {}

  guestSignIn() {
    const param = {
      deviceId: 'efbt',
      deviceType: 3
    };
    let headers = new HttpHeaders();
    headers = headers.set('language', 'en');
    return this.http.post(`${this.baseUrl}/web/guest/signIn`, param, {
      headers: headers
    });
  }
  getBusinessZones(guestToken, position) {
    const param = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
    let headers = new HttpHeaders();
    headers = headers.set('authorization', guestToken);
    headers = headers.set('language', 'en');
    return this.http.post(`${this.baseUrl}/business/zones`, param, {
      headers: headers
    });
  }
  getStoreDetails(guestToken, position, zoneId) {
    let headers = new HttpHeaders();
    headers = headers.set('authorization', guestToken);
    headers = headers.set('language', 'en');
    // tslint:disable-next-line:max-line-length
    return this.http.get(
      `${this.baseUrl}/business/categories/${zoneId}/0/${
        position.coords.latitude
      }/${position.coords.longitude}`,
      { headers: headers }
    );
  }
}
