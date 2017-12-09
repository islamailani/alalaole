import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Issue, IssueView } from '../../shared/models/Issues';
import { IssuesService } from '../issues.service';
import { ActivatedRoute } from '@angular/router';
import { root } from '../../shared/Global';

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
    issue: IssueView = {
        id: null,
        title: '',
        description: '',
        location: {
            longitude: null,
            latitude: null
        },
        score: null,
        voteStatus: null,
        photos: [
            {
                id: null,
                path: ''
            }],
        commentNumber: null,
        comments: [
            {
                id: null,
                text: '',
                createdAt: '',
                user: {
                    name: ''
                }
            }
        ],
        createdAt: ''
    };
    comment: string;
    constructor(
        public router: Router,
        private activatedRoute: ActivatedRoute,
        private issuesService: IssuesService
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(param => {
            this.issuesService.getIssueById(param['id']).subscribe((res: IssueView) => {
                this.initialLocation.latitude = res.location.latitude;
                this.initialLocation.longitude = res.location.longitude;
                res.photos.map(y => y.path = root + y.path);
                console.log(res);
                this.issue = res;
            });
        });
        // this.issuesService.
    }

    postComment() {
        this.issuesService.postComment(this.issue, this.comment).subscribe(res => {
            console.log(res);
        });
    }

}
