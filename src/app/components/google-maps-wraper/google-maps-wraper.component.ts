import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-google-maps-wraper',
  imports: [
    GoogleMap,
    MapMarker,
    MapInfoWindow
],
  templateUrl: './google-maps-wraper.component.html',
  styleUrl: './google-maps-wraper.component.scss'
})
export class GoogleMapsWraperComponent implements OnInit, AfterViewInit {
  @Input() clinicName: string = 'Barak Medical Clinic';
  @Input() clinicAddress: string = '123 Main St, Jerusalem, Israel';
  @Input() latitude!: number;
  @Input() longitude!: number;
  @Input() zoomLevel: number = 17;

  @ViewChild(GoogleMap) map!: GoogleMap;
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  center!: google.maps.LatLngLiteral;
  mapOptions!: google.maps.MapOptions;
  markerPosition!: google.maps.LatLngLiteral;
  // markerOptions!: google.maps.Advnc;
  directionsUrl: string = '';

  isLoading: boolean = true;
  mapLoaded: boolean = false;
  private mapLoadTimeout: any;

  ngOnInit(): void {
    // Basic input validation
    if (this.latitude === undefined || this.longitude === undefined) {
      console.error(`MapLocationComponent: Latitude or Longitude is missing.
         Map functionality will be limited.`);
      // Immediately show fallback if core data is missing
      this.isLoading = false; 
      return;
    }

    this.center = { lat: this.latitude, lng: this.longitude };
    this.markerPosition = { lat: this.latitude, lng: this.longitude };

    this.mapOptions = {
      disableDefaultUI: true,
      zoomControl: true, 
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      scaleControl: false,
      panControl: false,
      rotateControl: false,
      clickableIcons: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
    };

    // this.markerOptions = {
    //   draggable: false,
    //   animation: google.maps.Animation.DROP,
    // };

    // Generate the direct Google Maps URL (free, no API key)
    this.generateDirectionsUrl();

  }

  ngAfterViewInit(): void {
    // Set a timeout to detect if the interactive map doesn't initialize
    // Give it a few seconds to load the Google Maps JS API script and render
    this.mapLoadTimeout = setTimeout(() => {
      if (!this.mapLoaded) {
        console.error('Interactive map did not initialize within expected time. Displaying fallback.');
        // Stop loading state, trigger fallback
        this.isLoading = false;
      }
    }, 5000);

  }

  /**
   * Called when the <google-map> component successfully initializes by whom ?
   */
  onMapInitialized(): void {
    // Map loaded clear the timeout to prevent backup
    clearTimeout(this.mapLoadTimeout); 
    this.mapLoaded = true;
    this.isLoading = false;
  }

  /**
   * Opens the info window associated with the clicked marker.
   * @param marker The MapMarker instance that was clicked.
   */
  openInfoWindow(marker: MapMarker): void {
    if (this.infoWindow) {
      this.infoWindow.open(marker);
    }
  }

  /**
   * Generates the URL to open Google Maps directly for directions.
   * This URL does not require an API key and is free to use.
   * It provides a robust backup for high-traffic scenarios.
   * On mobile, it will attempt to open the native Google Maps app.
   * On desktop, it will open in the browser.
   */
  private generateDirectionsUrl(): void {
    const encodedQuery = encodeURIComponent(`${this.clinicName}, ${this.clinicAddress}`);
    this.directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
  }

  /**
   * Helper function for the fallback button to open directions.
   */
  openDirections(): void {
    window.open(this.directionsUrl, '_blank', 'noopener noreferrer');
  }
}