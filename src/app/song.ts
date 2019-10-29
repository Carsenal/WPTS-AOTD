import { Url } from 'url';

export class Song {
    name: string;
    album: string;
    artist: string;
    link: Url;
    preview: Url;
    cover: Url; 
}

export function fromJSON(input): Song{
    let song  = new Song();
    song.name = input['name'];
    song.album = input['album'];
    song.artist = input['artist'];
    song.link = new URL(input['link']);
    song.preview = new URL(input['preview']);
    song.cover = new URL(input['cover']);
    return song;
}

export function listFromJSON(input): Song[]{
    let arr = [];
    for(var i=0; i < input['songs'].length; i ++){
        arr.push(fromJSON(input['songs'][i]));
    }
    return arr;
}