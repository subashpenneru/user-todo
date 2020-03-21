import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date = new Date().getUTCFullYear();
  fromYear: number;
  toYear: number;

  constructor() { }

  ngOnInit(): void {
    this.fromYear = this.date - 1;
    this.toYear = this.date;
  }

  /**
   * open author github page in new tab
   * @author Subash
   */
  openGithub() {
    window.open('https://github.com/subashpenneru/user-todo', '_blank')
  }
}
