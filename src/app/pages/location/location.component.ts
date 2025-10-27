import { Component, inject, OnInit, signal } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-location',
  imports: [ReactiveFormsModule  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})

export default class LocationComponent implements OnInit{

  
  private fb = inject(FormBuilder);
  private seo = inject(SeoService);
  submitted = signal(false);

  contactForm = this.fb.group({
    fullName: [
      '',
      [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]
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
    
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // TODO: send to backend or service
      alert('Your message has been sent!');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get f() {
    return this.contactForm.controls;
  }

    

}
