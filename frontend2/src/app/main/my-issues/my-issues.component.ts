import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Issue } from '../../shared/models/Issues';
import { IssuesService } from '../issues.service';
import { root } from '../../shared/Global';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-issues',
  templateUrl: './my-issues.component.html',
  styleUrls: ['./my-issues.component.scss']
})
export class MyIssuesComponent implements OnInit {
  issues: Issue[];
  constructor(
    public router: Router,
    private snackbar: MatSnackBar,
    private issuesService: IssuesService
  ) { }

  ngOnInit() {
    this.issuesService.getMyIssues().subscribe((res: Issue[]) => {
      res.map(x => {
        x.photos.map(y => y.path = root + y.path);
      });
      this.issues = res;
    });
  }

  navigateToIssue(issue: Issue) {
    this.router.navigate(['issues', issue.id]);
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
