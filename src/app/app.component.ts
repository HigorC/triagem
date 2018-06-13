import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  constructor(private _electronService: ElectronService) { }
  launchWindow(){
    this._electronService.shell.openExternal('http://google.com');
  }
}
