import { Component } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrl: './header.css',
    standalone: true //This is not Required but it is a good practice to make components standalone if they are not going to be used in other modules.
})
export class Header {}