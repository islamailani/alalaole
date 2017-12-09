import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { MapsAPILoader, AgmMap, AgmMarker } from '@agm/core';
import { IssuesService } from '../issues.service';
import { CreateIssue } from '../../shared/models/Issues';
import { RequestOptions } from '@angular/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit {
  @ViewChild('search')
  public searchElementRef: ElementRef;
  @ViewChild(AgmMap)
  public agmMap: AgmMap;
  @ViewChild(AgmMarker)
  public agmMarker: AgmMarker;
  noOfImages = 0;
  initialLocation = {
    longitude: 21.226788,
    latitude: 45.760696
  };
  createIssue: CreateIssue = {
    title: '',
    description: '',
    location: {
      longitude: null,
      latitude: null
    },
    photos: []
  };
  uploadingPhotos = false;

  constructor(
    public router: Router,
    private mapsAPILoader: MapsAPILoader,
    private issuesService: IssuesService,
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

  markerClicked($event) {
    this.initialLocation.latitude = $event.coords.lat;
    this.initialLocation.longitude = $event.coords.lng;
  }

  submitIssue($event) {
    const formData = new FormData();
    for (let i = 0; i < $event.target.files.length; i++) {
      formData.append('photos', $event.target.files[i]);
      this.noOfImages++;
    }
    this.uploadingPhotos = true;
    this.issuesService.uploadPhoto(formData).subscribe((res: number[]) => {
      this.createIssue.photos = res;
      this.uploadingPhotos = false;
    });
  }

  createNewIssue() {
    this.createIssue.location.latitude = this.initialLocation.latitude;
    this.createIssue.location.longitude = this.initialLocation.longitude;
    this.issuesService.createIssue(this.createIssue).subscribe((res: any) => {
      this.handleResponse(res.message);
    });
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
