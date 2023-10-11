import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

class ImageGallery extends Component {
  render() {
    console.log(this.props.searchQuery);

    return (
      <ul className="gallery">
        {/* {searchQuery.map((item, idx) => {
          <ImageGalleryItem key={item.id} webformatURL={item.webformatURL} />;
        })} */}
        <ImageGalleryItem></ImageGalleryItem>
      </ul>
    );
  }
}

export { ImageGallery };
