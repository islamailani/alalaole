import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'app-issue-view',
    templateUrl: './issue-view.component.html',
    styleUrls: ['./issue-view.component.scss']
})
export class IssuesViewComponent implements OnInit {
    initialLocation = {
        longitude: 21.226788,
        latitude: 45.760696
    };
    constructor(
        public router: Router,
    ) { }

    ngOnInit() {
    }

}
