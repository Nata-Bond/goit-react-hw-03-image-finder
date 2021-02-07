import React, { Component } from "react";
import s from "./imageGallery.module.css";

import Modal from "../modal/Modal";
import ImageGallaryItem from "./ImageGalleryItem";

export default class ImageGallery extends Component {
  state = {
    largeImg: null,
  };

  handleOpenModal = (e) => {
    this.setState({ largeImg: e.target.dataset.largeimg });
  };

  closeModal = () => {
    this.setState({ largeImg: null });
  };

  render() {
    return (
      <>
        <ul className={s.ImageGallery}>
          {this.props.images.map((image) => {
            const { id, tags, webformatURL, largeImageURL } = image;
            return (
              <ImageGallaryItem
                key={id}
                alt={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                handleOpenModal={this.handleOpenModal}
              />
            );
          })}
        </ul>
        {this.state.largeImg && (
          <Modal
            largeImageURL={this.state.largeImg}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}
