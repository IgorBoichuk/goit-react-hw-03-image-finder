import style from './style.module.css';

export const ImageGalleryItem = ({ imageSrc, imageAlt, onPictureClick }) => {
  console.log(imageSrc);
  return (
    <li
      className={style.galleryitem}
      onClick={e => {
        onPictureClick(e.target.src);
      }}
    >
      <img src={imageSrc} alt={imageAlt} className={style.image} />
    </li>
  );
};
