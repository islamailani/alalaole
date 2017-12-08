import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-my-issues',
  templateUrl: './my-issues.component.html',
  styleUrls: ['./my-issues.component.scss']
})
export class MyIssuesComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

}
