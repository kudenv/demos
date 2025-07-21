import { Component, signal } from '@angular/core';
import {RouterLink} from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-header',    
  templateUrl: './header.html',
  imports: [RouterLink, HlmButtonDirective],
})
export class Header {
	isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}
