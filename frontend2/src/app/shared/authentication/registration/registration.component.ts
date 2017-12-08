import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUser } from '../../models/User';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { } from 'googlemaps';
import { AgmCircle } from '@agm/core/directives/circle';
import { AgmMarker } from '@agm/core/directives/marker';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [FormBuilder]
})
export class RegistrationComponent implements OnInit {

  @ViewChild('search')
  public searchElementRef: ElementRef;
  @ViewChild(AgmMap)
  public agmMap: AgmMap;
  @ViewChild(AgmMarker)
  public agmMarker: AgmMarker;
  @ViewChild(AgmCircle)
  public agmCircle: AgmCircle;
  public registerForm: FormGroup;
  public registerUser: RegisterUser = {
    email: '',
    password: '',
    name: '',
    location: {
      longitude: 0,
      latitude: 0
    },
    age: null,
    gender: '',
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
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.bindForm();
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

  public bindForm(): void {
    this.registerForm = this.formBuilder.group({
      email: [this.registerUser.email, Validators.compose([Validators.email, Validators.required])],
      password: [this.registerUser.password, Validators.required],
      name: [this.registerUser.name, Validators.required],
      age: [this.registerUser.age, Validators.required],
      gender: [this.registerUser.gender, Validators.required],
      location: {
        latitude: [this.registerUser.location.latitude, Validators.required],
        longitude: [this.registerUser.location.longitude, Validators.required]
      },
      radius: [this.registerUser.radius, Validators.required]
    });
  }

  public login(): void {
    // this.authService.login(this.loginForm.value)
    //   .subscribe(res => {
    //     sessionStorage.setItem('user', JSON.stringify(res));
    //     localStorage.setItem('AuthToken', res.token.value);
    //     this.router.navigate(['users', 'all']);
    //   });
  }

  markerClicked($event) {
    this.initialLocation.latitude = $event.coords.lat;
    this.initialLocation.longitude = $event.coords.lng;
  }

}
