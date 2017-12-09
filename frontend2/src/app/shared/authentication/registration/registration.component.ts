import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUser } from '../../models/User';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { } from 'googlemaps';
import { AgmCircle } from '@agm/core/directives/circle';
import { AgmMarker } from '@agm/core/directives/marker';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [FormBuilder]
})
export class RegistrationComponent implements OnInit {
  selectedGender;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  @ViewChild('images')
  public imagesElRef: ElementRef;
  @ViewChild(AgmMap)
  public agmMap: AgmMap;
  @ViewChild(AgmMarker)
  public agmMarker: AgmMarker;
  @ViewChild(AgmCircle)
  public agmCircle: AgmCircle;
  public registerForm: FormGroup;
  genders = [{
    id: 1,
    name: 'Male'
  },
  {
    id: 2,
    name: 'Female'
  }];
  public registerUser: RegisterUser = {
    email: '',
    password: '',
    name: '',
    location: {
      longitude: 0,
      latitude: 0
    },
    age: null,
    gender: null,
    radius: null
  };
  initialLocation = {
    longitude: 21.226788,
    latitude: 45.760696
  };

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private formBuilder: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.agmMarker.longitude = this.initialLocation.longitude;
    this.agmMarker.latitude = this.initialLocation.latitude;
    this.agmMap.zoom = 15;
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener('place_changed', () => {
        const place: google.maps.places.PlaceResult = autocomplete.getPlace();
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }
        console.log(place.geometry.location.lat());
        this.initialLocation.latitude = place.geometry.location.lat();
        this.initialLocation.longitude = place.geometry.location.lng();
        this.agmMap.triggerResize();
        this.agmMap.triggerResize();
        // console.log(this.agmMarker.longitude);
      });
    });
  }

  public register(): void {
    this.registerUser.radius = this.agmCircle.radius / 1000;
    this.registerUser.location.longitude = this.initialLocation.longitude;
    this.registerUser.location.latitude = this.initialLocation.latitude;
    this.genders.map(x => {
      if (x.name === this.selectedGender) {
        this.registerUser.gender = x.id;
      }
    });
    this.authService.register(this.registerUser)
      .subscribe(res => {
        this.handleResponse('Registration completed, wait for aproval!');
        this.router.navigate(['/']);
      },
      err => {
        this.handleResponse(`Error! ${err.statusText}`);
      });
  }


  markerClicked($event) {
    this.initialLocation.latitude = $event.coords.lat;
    this.initialLocation.longitude = $event.coords.lng;
  }

  radiusChanged($event) {
    this.agmCircle.radius = $event;
    this.registerUser.radius = $event;
  }

  radiusMoved($event) {
    this.initialLocation.latitude = $event.coords.lat;
    this.initialLocation.longitude = $event.coords.lng;
  }

  notify(status: any, text: any) {
    this.snackbar.open(status, text, {
      duration: 3000
    });
  }

  public handleResponse(text) {
    this.notify(text, ' ');
  }


}
