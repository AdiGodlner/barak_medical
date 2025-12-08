import { Component, inject, OnInit, signal } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location',
  imports: [ReactiveFormsModule  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})

export default class LocationComponent implements OnInit{

  
  private fb = inject(FormBuilder);
  private seo = inject(SeoService);
  private apiUrl = 'https://contact-form-api.96goldner.workers.dev/';

  submitted = signal(false);

  constructor(private http: HttpClient) {


   }

  contactForm = this.fb.group({
    fullName: [
      '',
      [Validators.required]
    ],
    phone: [
      '',
      [Validators.required, Validators.pattern(/^[0-9]{9,10}$/)]
    ],
    email: [
      '',
      [Validators.required, Validators.email]
    ],
    message: [
      '',
      [Validators.required, Validators.minLength(10)]
    ]
  });

  
  ngOnInit(): void {
  
    const pageSeo : SeoData ={
      title: "צור קשר",
      description: "צור קשר",
    };

    this.seo.updateSeoPageData(pageSeo);

  }

  onSubmit() {
    console.log('Submitting form...');
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      
    this.http.post(this.apiUrl, this.contactForm.value).subscribe({
        next: (res) => {
          console.log('Worker response:', res);
          alert('Your message has been sent!');
          this.contactForm.reset();
          this.submitted.set(false);
        },
        error: (err) => {
          console.error('Error sending form:', err);
          alert(err.message || 'There was an error sending your message.');
          this.submitted.set(false);
        }
      });

    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get f() {
    return this.contactForm.controls;
  }

    

}
