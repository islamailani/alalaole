import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { PendingUser } from '../../shared/models/User';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-admin-statistics',
    templateUrl: './admin-statistics.component.html',
    styleUrls: ['./admin-statistics.component.scss']
})
export class AdminStatisticsComponent implements OnInit {

    constructor(
        public router: Router,
        private snackbar: MatSnackBar
    ) { }

    ngOnInit() {

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
