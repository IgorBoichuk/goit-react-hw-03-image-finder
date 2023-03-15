import style from './style.module.css';

export const Modal = ({ largeImg }) => {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <img src={largeImg} alt="" />
      </div>
    </div>
  );
};
