import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { IssuesService } from '../issues.service';
import { Issue } from '../../shared/models/Issues';
import { root } from '../../shared/Global';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginUser } from '../../shared/models/User';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  issues: Issue[];
  currentUser: LoginUser;
  constructor(
    public router: Router,
    private issuesService: IssuesService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.issuesService.getIssues().subscribe((res: Issue[]) => {
      console.log(res);
      res.map(x => {
        x.photos.map(y => y.path = root + y.path);
        console.log(x.photos);
      });
      console.log(res);
      this.issues = res;
    });
  }

  navigateToIssue(issue: Issue) {
    this.router.navigate(['issues', issue.id]);
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

  markSolved(issue: Issue) {
    this.issuesService.markSolved(issue.id).subscribe(res => {
      this.issues = this.issues.filter(x => x.id !== issue.id);
      this.handleResponse('Issue marked as solved!');
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
