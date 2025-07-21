import { Component, signal, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',  
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
OnInit(){
	// You can initialize any data or services here if needed
	console.log('App initialized with title:', this.title());
}
  
}
