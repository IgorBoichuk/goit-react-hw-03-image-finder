import { ImageGalleryItem } from 'components/image-gallery-item/ImageGalleryItem';

import style from './style.module.css';

export const ImageGallery = ({ imgStore }) => {
  const galleryElements = imgStore.map(image => {
    return (
      <ImageGalleryItem
        key={image.id}
        imageSrc={image.webformatURL}
        imageAlt={image.tags}
      />
    );
  });
  // console.log(galleryElements);
  return <ul className={style.gallery}>{galleryElements}</ul>;
};
