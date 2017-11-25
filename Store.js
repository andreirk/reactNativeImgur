import { observable, action } from 'mobx';
import { PORTRAIT } from './Constants';

class Store {
  @observable orientation = PORTRAIT;

  @action changeOrientation(orientation) {
    this.orientation = orientation;
  }

  @action prevImage() {
    console.log('previous');
  }

  @action nextImage() {
    console.log('next');
  }

  // @computed get currentImage() {
  //   return this.images.length ? this.images[this.index] : null;
  // }

}

export default new Store();

// import { observable, action, computed } from 'mobx';
// import { PORTRAIT } from './Constants';
//
//
// const CLIENT_ID = '0f9b67ef75f5b29'
//
// const IMGUR_URL = 'https://api.imgur.com/3/';
//
//
//
// var myHeaders = new Headers()
// myHeaders.append('Authorization', `Client-ID ${CLIENT_ID}`);
//
// var myInit = {
//   headers: myHeaders,
// };
//
// // fetch.setDefaultHeaders({
// //   Authorization: `Client-ID ${CLIENT_ID}`
// // });
//
// class Store {
//   @observable orientation = PORTRAIT;
//   @observable images = [];
//   @observable index = 0;
//   @observable galleryPage = 0;
//
//   @action changeOrientation(orientation) {
//     this.orientation = orientation;
//   }
//
//   @action prevImage() {
//     this.index = this.index - 1;
//
//     if (this.index < 1) {
//       this.index = 0;
//     }
//   }
//
//   @action nextImage() {
//     this.index = this.index + 1;
//
//     if (this.index > this.images.length) {
//       this.galleryPage = this.galleryPage+1;
//       this.fetchImages();
//     }
//   }
//
//   @action fetchImages() {
//     fetch(`${IMGUR_URL}gallery/hot/viral/${this.galleryPage}.json`, myInit)
//         .then(res => res.json())
//         .then(json => {
//           json.data.forEach(img => this.images.push(img));
//         })
//         .catch(err => console.log('ERROR', err.message));
//   }
//
//   @computed get currentImage() {
//     return this.images.length ? this.images[this.index] : null;
//   }
// }
//
// export default new Store();