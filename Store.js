
import { PORTRAIT } from './Constants';
import {action,observable, computed} from "mobx";

const CLIENT_ID = '0f9b67ef75f5b29'

const IMGUR_URL = 'https://api.imgur.com/3/';

const headersInit = {
  headers: {
    "Authorization": "Client-ID " + CLIENT_ID
  }
}

class Store {
  @observable orientation = PORTRAIT;
  @observable index = 0;
  @observable galleryPage = 0;
  @observable albums = new observable.map();

  @observable images = [];

  @observable screenSize = {
    width: null,
    height: null
  };

  @action updateScreenSize(width, height) {
    this.screenSize.width = width;
    this.screenSize.height = height;
  }


  @computed get currentImage(){
    _this = this;
    console.log('---currentImage--', _this.images)
    console.log('---currentImage in this--', this)
    return this.images.length ? this.images[this.index] : null;
  }


  @action prevImage() {
    console.log('previous');
    this.index = this.index - 1;

    if (this.index < 1) {
      this.index = 0;
    }
  }

  @action nextImage() {

    console.log('next');
    this.index = this.index + 1;
    console.log('---this.index, this.images--', this.index, this.images.length)
    this.images.forEach(img => console.log('img', img))
    if (this.index > this.images.length) {
      this.galleryPage = this.galleryPage+1;
      this.fetchImages();
    }
  }
  
  
  @action changeOrientation(orientation) {
    this.orientation = orientation;
  }


  @action fetchImages() {
    const URL = `${IMGUR_URL}gallery/hot/viral/${this.galleryPage}.json`
    console.log('---URL--', URL)
    fetch(URL, headersInit)
        .then(res => res.json())
        .then(json => {
          json.data.forEach(img => this.images.push(img));
        })
        .catch(err => console.log('ERROR', err.message));
  }

  @action fetchAlbum(id) {
    if (!this.albums.has(id)) {
      const URL = `${IMGUR_URL}album/${id}`
      console.log('--in FethcAlbum URL', URL)
      fetch(URL, headersInit)
          .then(res => res.json())
          .then(json => {
            console.log('IN fethc ALBUMS promise', json.data)
            this.albums.set(json.data.id, json.data);
          })
          .catch(err => console.log('ERROR', err.message, err));
    }
  }

}
