import {Component, Directive, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  title="KeepingUpWithTwitch"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginClicked(): void {
    window.location.href = 'http://localhost:8080/auth';
  }
}
