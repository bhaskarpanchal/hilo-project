import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./sidebar/sidebar";
import { Feed } from "./feed/feed";
import { Stories } from "./stories/stories";
import { Suggestions } from "./suggestions/suggestions";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  Sidebar, Feed, Stories, Suggestions],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cloneApp');
}
