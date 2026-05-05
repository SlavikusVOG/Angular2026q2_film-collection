import { Component, inject } from "@angular/core";
import { RouterLink} from "@angular/router";

@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [
    RouterLink,
  ],
})
export class Header {}
