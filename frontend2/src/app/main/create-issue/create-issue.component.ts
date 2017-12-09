import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { MapsAPILoader, AgmMap, AgmMarker } from '@agm/core';

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
  base64textImages = [];
  initialLocation = {
    longitude: 21.226788,
    latitude: 45.760696
  };
  constructor(
    public router: Router,
    private mapsAPILoader: MapsAPILoader,
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
    for (let i = 0; i < $event.target.files.length; i++) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString($event.target.files[i]);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textImages.push(btoa(binaryString));
    console.log('1');
  }

}
