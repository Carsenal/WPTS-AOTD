import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song, listFromJSON } from './song';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit{
  private list: Song[];
  private loaded: boolean;

  constructor(private http: HttpClient) { this.loaded = false; }

  ngOnInit(): void {
    // TODO: implement this.http.get()
  }
}
