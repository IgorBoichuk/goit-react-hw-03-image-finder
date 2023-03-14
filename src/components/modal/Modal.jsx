import * as basicLightbox from 'basiclightbox';
import style from './style.module.css';

export const Modal = ({ largeImg }) => {
  const instance = basicLightbox.create(`
        <h1>Dynamic Content</h1>
        <p>You can set the content of the lightbox with JS.</p>
    `);
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};
