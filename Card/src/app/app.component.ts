import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Flower 1',
      imageUrl: '/assets/flower1.jpg',
      username: 'Flower1',
      content: 'Mini flower1',
    },
    {
      title: 'Flower 2',
      imageUrl: '/assets/flower2.jpeg',
      username: 'Flower2',
      content: 'Mini flower2',
    },
    {
      title: 'Flower 3',
      imageUrl: '/assets/flower3.jpg',
      username: 'Flower3',
      content: 'Mini flower3',
    },
  ];
}
