import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import Spinner from "./spinner/Spinner";
import ImageGallery from "./imageGallery/ImageGallery";
import imagesApi from "././services/imagesApi";
import s from "./app.module.css";
import Button from "./button/Button";

export default class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    error: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    if (nextQuery.length > 0) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState((prevState) => ({ ...prevState, loading: true }));
    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() =>
        this.setState((prevState) => ({ ...prevState, loading: false }))
      );
  };

  handleSearchbarSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  render() {
    const { images } = this.state;
    return (
      <>
        {this.state.loading && <Spinner />}
        <div className={s.App}>
          <Searchbar onSubmit={this.handleSearchbarSubmit} />

          {images.length > 0 && <ImageGallery images={images} />}
          {images.length > 0 && <Button fetchImages={this.fetchImages} />}
        </div>
      </>
    );
  }
}
