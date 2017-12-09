import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { IssuesService } from '../issues.service';
import { Issue } from '../../shared/models/Issues';
import { root } from '../../shared/Global';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  issues: Issue[];
  constructor(
    public router: Router,
    private issuesService: IssuesService,
  ) { }

  ngOnInit() {
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
    this.router.navigate(['home', 'issues', issue.id]);
  }

  upVoteIssue(issue: Issue) {
    this.issuesService.upVoteIssue(issue).subscribe(res => {
      console.log(res);
    });
  }

}
