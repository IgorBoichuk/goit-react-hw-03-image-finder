import { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image-gallery/ImageGallery';
import { LoadMoreBtn } from './button/Button';
import { Loader } from './loader/Loader';
import axios from 'axios';
import { Modal } from './modal/Modal';

export class App extends Component {
  state = {
    query: '',
    loading: false,
    imgStore: [],
    page: 1,
    perPage: 6,
    largeImg: [],
    error: null,
  };

  myAPI_KEY = '33589434-498505a5cafca5b4759d2d286';
  getImageApi = (query = this.state.query) => {
    // this.setState({ loading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${this.state.page}&key=${this.myAPI_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
      )

      .then(response =>
        this.setState({
          ...this.state,
          loading: false,
          imgStore: response.data.hits,
        })
      )
      .catch(error => this.setState({ error: error.message }))
      .finally(this.setState({ loading: false }));
  };

  componentDidUpdate() {
    if (this.state.loading) {
      this.getImageApi();
    }
  }
  onSubmitForm = query => {
    this.setState({
      ...this.state,
      query,
      page: 1,
      loading: true,
    });
    this.getImageApi(query);
  };

  onLoadMoreHandler = () => {
    this.setState({
      ...this.state,
      loading: true,
      page: this.state.page + 1,
    });
  };

  onPictureClick = event => {
    console.log(event.currentTarget);
  };

  render() {
    // console.log(this.state.imgStore);
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitForm} />
        {this.state.loading && <Loader />}
        {!this.state.loading && (
          <ImageGallery
            imgStore={this.state.imgStore}
            onPictureClick={this.onPictureClick}
          />
        )}
        {this.state.error ||
          (this.state.imgStore.length === 0 && <h1>Is bad query</h1>)}
        <Modal largeImg={this.state.largeImg} />

        <LoadMoreBtn
          onLoadMoreHandler={this.onLoadMoreHandler}
          isLoadingImg={
            this.state.imgStore.length < this.state.perPage ? false : true
          }
        />
      </div>
    );
  }
}
