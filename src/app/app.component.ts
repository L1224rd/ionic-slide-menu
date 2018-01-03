import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { ToolsPage } from '../pages/tools/tools';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages =  [
    {name: 'Home', component: HomePage, scroll: 1},
    {name: 'Profile', component: ProfilePage, scroll: 2},
    {name: 'Tools', component: ToolsPage, scroll: 3},
    {name: 'Chat', component: ProfilePage, scroll: 4},
    {name: 'Photos', component: ProfilePage, scroll: 5},
    {name: 'Video', component: ProfilePage, scroll: 6},
    {name: 'Map', component: ProfilePage, scroll: 7},
    {name: 'Exit', component: ProfilePage, scroll: 8}
  ];

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  } 

  gotoPage(page){
    this.nav.setRoot(page.component);
    let scroll = document.getElementById('scrollmenu');
    scroll.scrollLeft = 2000;
    let each = scroll.scrollLeft/(this.pages.length - 5);
    scroll.scrollLeft = (page.scroll-1)*each - each*2;
  }
}

