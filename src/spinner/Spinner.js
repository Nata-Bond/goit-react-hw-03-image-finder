import React from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import s from "./spinner.module.css";

export default class Spinner extends React.Component {
  render() {
    return (
      <Loader
        className={s.loader}
        type="Puff"
        color="#00BFFF"
        height={50}
        width={100}
        // timeout={3000} //3 secs
      />
    );
  }
}
