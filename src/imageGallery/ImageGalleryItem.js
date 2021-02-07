import React from "react";
import s from "./imageGalleryItem.module.css";

const ImageGallaryItem = ({
  tags,
  webformatURL,
  largeImageURL,
  handleOpenModal,
}) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItemImage}
        data-largeimg={largeImageURL}
        onClick={handleOpenModal}
      />
    </li>
  );
};

export default ImageGallaryItem;
