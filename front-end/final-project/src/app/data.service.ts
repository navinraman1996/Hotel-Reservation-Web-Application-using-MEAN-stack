import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/** Marks a class as available to Injector for creation. */
@Injectable({
  providedIn: 'root'
})

// tslint:disable-next-line:jsdoc-format
/** For our contacts component, we want to fetch a list of contacts from the REST API.*/
export class DataService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:jsdoc-format
  /** This method is used to get all the contacts from the database*/
  getUsers() {
    return this.http.get('http://localhost:3000/bookings/'); // get is used to get all the data in the mentioned url
  }

  /** This method will provide us with a single contact information
   *
   * @param id: which will accept a userId as a parameter
   */
  getContact(id) {
    return this.http.get('http://localhost:3000/bookings/' + id);
  }

  /** This method will provide us with a single contact information
   *
   * @param id: which will accept a userId as a parameter
   */
  deleteHotel(id) {
    return this.http.delete('http://localhost:3000/bookings/' + id);
  }

  /**This method will provide us to post a new contact to store in the database
   *
   * @param NewContacts: object
   */
  // tslint:disable-next-line:ban-types
  postContact(NewContacts: Object) {

    // tslint:disable-next-line:max-line-length
    // post is used to post a new data entry to the specific url and passes argument such as a object and the headers for content type of the data
    return this.http.post('http://localhost:3000/bookings/', NewContacts, {

      // HTTP headers allow the client and the server to pass additional information with the request or the response.
      headers: new HttpHeaders({
        'content-type' : 'application/json'
      })
    });
  }
}
