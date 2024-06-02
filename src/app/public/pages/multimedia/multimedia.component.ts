import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrl: './multimedia.component.css'
})

export class MultimediaComponent implements OnInit{
  channels: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/channels').subscribe((data: any) => {
      this.channels = data;
    });
  }
}
