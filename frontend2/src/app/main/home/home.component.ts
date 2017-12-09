import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('search')
    public searchElementRef: ElementRef;
    @ViewChild(AgmMap)
    public agmMap: AgmMap;
    initialLocation = {
        longitude: 21.226788,
        latitude: 45.760696
    };
    constructor(
        private mapsAPILoader: MapsAPILoader,
        public router: Router,
    ) { }

    ngOnInit() {
        this.mapsAPILoader.load().then(() => {
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
            autocomplete.addListener('place_changed', () => {
                const place: google.maps.places.PlaceResult = autocomplete.getPlace();
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                this.initialLocation.latitude = place.geometry.location.lat();
                this.initialLocation.longitude = place.geometry.location.lng();
                this.agmMap.triggerResize();
                // console.log(this.agmMarker.longitude);
            });
        });
    }

}
