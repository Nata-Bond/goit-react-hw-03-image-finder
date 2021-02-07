import React, { Component } from "react";
import s from "./modal.module.css";

export default class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log("escape pushing");
      this.props.closeModal();
    }
  };

  render() {
    const { closeModal, largeImageURL, tags } = this.props;
    return (
      <div className={s.Overlay} onClick={closeModal}>
        <div className={s.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

// const Modal = ({ largeImageURL, closeModal }) => {
//   return (
//     <div className={s.Overlay} onClick={closeModal}>
//       <div className={s.Modal}>
//         <img src={largeImageURL} />
//       </div>
//     </div>
//   );
// };

// export default Modal;
