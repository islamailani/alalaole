import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Issue } from '../../shared/models/Issues';
import { IssuesService } from '../issues.service';
import { root } from '../../shared/Global';

@Component({
  selector: 'app-my-issues',
  templateUrl: './my-issues.component.html',
  styleUrls: ['./my-issues.component.scss']
})
export class MyIssuesComponent implements OnInit {
  issues: Issue[];
  constructor(
    public router: Router,
    private issuesService: IssuesService
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

}
