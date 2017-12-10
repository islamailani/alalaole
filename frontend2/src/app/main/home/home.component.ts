import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { Issue } from '../../shared/models/Issues';
import { IssuesService } from '../issues.service';
import { root } from '../../shared/Global';

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
    issues: Issue[] = [];
    boolIssues = false;
    constructor(
        private mapsAPILoader: MapsAPILoader,
        public router: Router,
        private issueService: IssuesService
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
                this.issueService.getIssuesWithParam(this.initialLocation).subscribe((res: Issue[]) => {
                    if (!res.length) {
                        this.boolIssues = true;
                    } else {
                        this.boolIssues = false;
                    }
                    res.map(x => {
                        x.photos.map(y => y.path = root + y.path);
                    });
                    this.issues = res;
                    // this.scrollPage();
                });
            });
        });
    }

    // scrollPage() {
    //     const element = document.querySelector('#scrollTo');
    //     console.log(element.scrollHeight);
    // }

    navigateToIssue(issue: Issue) {
        this.router.navigate(['issues', issue.id]);
    }

}
