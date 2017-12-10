import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { AdminService } from './admin.service';
import { PendingUser } from '../../shared/models/User';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
    @ViewChild(AgmMap)
    public agmMap: AgmMap;
    initialLocation = {
        longitude: 21.226788,
        latitude: 45.760696
    };
    users: PendingUser[];
    constructor(
        private mapsAPILoader: MapsAPILoader,
        public router: Router,
        public adminService: AdminService,
        private snackbar: MatSnackBar
    ) { }

    ngOnInit() {
        this.adminService.getPendingUsers().subscribe((res: PendingUser[]) => {
            this.users = res;
        });
    }

    updateMap(user: PendingUser) {
        this.initialLocation.latitude = user.location.latitude;
        this.initialLocation.longitude = user.location.longitude;
        this.agmMap.triggerResize();
    }

    approveUser(id) {
        this.adminService.approveUser(id).subscribe(res => {
            this.users = this.users.filter(x => x.id !== id);
            this.handleResponse('Succes! User was approved');
        });
    }

    disapproveUser(id) {
        this.adminService.disapproveUser(id).subscribe(res => {
            this.users = this.users.filter(x => x.id !== id);
            this.handleResponse('Succes! User was disapproved');
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
