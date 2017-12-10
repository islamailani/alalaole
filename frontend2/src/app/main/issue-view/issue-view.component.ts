import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Issue, IssueView } from '../../shared/models/Issues';
import { IssuesService } from '../issues.service';
import { ActivatedRoute } from '@angular/router';
import { root } from '../../shared/Global';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    visitor = false;
    constructor(
        public router: Router,
        private activatedRoute: ActivatedRoute,
        private issuesService: IssuesService,
        private snackbar: MatSnackBar
    ) { }

    ngOnInit() {
        // const socket = new WebSocket('ws://dariuscostolas.me:8080');
        // socket.onopen = event => {
        //     socket.send({ type: 1, payload: 0 });
        // };
        this.activatedRoute.params.subscribe(param => {
            this.issuesService.getIssueById(param['id']).subscribe((res: IssueView) => {
                this.initialLocation.latitude = res.location.latitude;
                this.initialLocation.longitude = res.location.longitude;
                res.photos.map(y => y.path = root + y.path);
                console.log(res);
                this.issue = res;
            });
        });
        if (localStorage.length === 0) {
            this.visitor = true;
        }
    }

    postComment() {
        this.issuesService.postComment(this.issue, this.comment).subscribe(res => {
            console.log(res);
        });
    }

    upVoteIssue(issue: Issue) {
        this.issuesService.upVoteIssue(issue).subscribe(res => {
            if (issue.voteStatus === -1) {
                issue.score += 2;
            } else {
                issue.score += 1;
            }
            issue.voteStatus = 1;
        },
            (err: any) => {
                if (err.status === 304) {
                    this.handleResponse('Already Voted');
                }
                if (err.status === 400) {
                    this.handleResponse(`Can't vote on your own issues`);
                }
            }
        );
    }

    downVoteIssue(issue: Issue) {
        this.issuesService.downVoteIssue(issue).subscribe(res => {
            if (issue.voteStatus === 1) {
                issue.score -= 2;
            } else {
                issue.score -= 1;
            }
            issue.voteStatus = -1;
        },
            (err: any) => {
                if (err.status === 304) {
                    this.handleResponse('Already Voted');
                }
                if (err.status === 400) {
                    this.handleResponse(`Can't vote on your own issues`);
                }
            }
        );
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
