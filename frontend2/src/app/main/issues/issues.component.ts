import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

}
