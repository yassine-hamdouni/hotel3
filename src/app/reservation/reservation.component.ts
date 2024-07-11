import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent  {
  name: string = '';
  phone: string = '';
  email: string = '';
  checkin_date: string = '';
  checkout_date: string = '';
  adults: string = '1';
  children: string = '1';
  message: string = '';

  onSubmit() {
    if (this.name && this.phone && this.email && this.checkin_date && this.checkout_date) {
      // Handle the form submission logic
      console.log('Form Submitted:', {
        name: this.name,
        phone: this.phone,
        email: this.email,
        checkin_date: this.checkin_date,
        checkout_date: this.checkout_date,
        adults: this.adults,
        children: this.children,
        message: this.message
      });
    } else {
      // Handle the validation errors
      console.log('Form is not valid');
    }
  }
}