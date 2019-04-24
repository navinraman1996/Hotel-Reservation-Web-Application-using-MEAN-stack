import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-adminaddhotel',
  templateUrl: './adminaddhotel.component.html',
  styleUrls: ['./adminaddhotel.component.scss']
})
export class AdminaddhotelComponent implements OnInit {

  contactForm: FormGroup;

  /**setting a boolean properties that will help us determine when the form has been submitted and if it validation is successful. */
  submitted: boolean = false;
  success: boolean = false;

  /**creating an instance of the formBuilder in the constructor. We then use this form building to construct our form properties in the ngOnInit() lifecycle hook. */
  constructor(private formBuilder: FormBuilder, private Data: DataService ) {
    this.contactForm = this.formBuilder.group ({

      /** We have 4 properties, fname, lname, email and number and giving the validation properties. */
      hotelname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      numberofguests: ['', [Validators.required]],
      ratings: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]]
    });
  }

  /**onSubmit() method that will be called when the user submits the form. This is typically where you would create a contact and send it to the database. */
  onSubmit() {
    this.submitted =true;

    /** returning null if the form is invalid */
    if(this.contactForm.invalid) {
      return;
    }

    this.success = true; // setting the success flag to true

    console.log(this.contactForm.value); // printing the values in the log output

    this.Data.postContact(this.contactForm.value) // calling the postContact method by passing the form values and subscribing to it
    .subscribe(Response => { 
      console.log("success" , Response)
    });
    
    this.contactForm.reset(); // reseting the form data entry values for next data entry
  }

  ngOnInit() {
  }
  update()
  {
    console.log("updating contact")
  }
}
