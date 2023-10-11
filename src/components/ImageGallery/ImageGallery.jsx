import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

class ImageGallery extends Component {
  render() {
    console.log(this.props.searchQuery);

    return (
      <ul className="gallery">
        <ImageGalleryItem></ImageGalleryItem>
      </ul>
    );
  }
}

export { ImageGallery };
