import { Component } from '@angular/core';

import { StatusBar, Style } from '@capacitor/status-bar';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    StatusBar.setOverlaysWebView({ overlay: true });

    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Dark });
    };

    const setStatusBarStyleLight = async () => {
      await StatusBar.setStyle({ style: Style.Light });
    };

    const hideStatusBar = async () => {
      await StatusBar.hide();
    };

    const showStatusBar = async () => {
      await StatusBar.show();
    };
  }
}
