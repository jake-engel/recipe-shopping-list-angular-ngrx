import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAoo3bbBXjzQob3alD-chw3A2470kjol-M",
      authDomain: "ng-recipe-book-c8864.firebaseio.com/"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
