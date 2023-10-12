import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

import { ImageGalleryUl } from './ImageGallery.styled';

class ImageGallery extends Component {
  render() {
    // console.log(this.props.searchQuery);

    return (
      <ImageGalleryUl className="gallery">
        {/* {searchQuery.map((item, idx) => {
          <ImageGalleryItem key={item.id} webformatURL={item.webformatURL} />;
        })} */}
        <ImageGalleryItem></ImageGalleryItem>
      </ImageGalleryUl>
    );
  }
}

export { ImageGallery };
