import React, { Component } from "react";
import image from "../assets/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const url = `http://localhost:5000/videos`;
export default class uploadPage extends Component {
  uploadVideo = event => {
    event.preventDefault();

    if (!event.target.channel.value || !event.target.title.value) {
      alert("Please enter A title, channel and video link. Thank you!");
    } else {
      axios
        .post(url, {
          channel: event.target.channel.value,
          title: event.target.title.value,
          image: image
        })
        .then(res => {
          console.log(res);
        });
      event.target.reset();
      // this.props.history.push("/");
    }
  };

  render() {
    return (
      <form
        action='/'
        method='POST'
        className='upload'
        onSubmit={this.uploadVideo}>
        <h1 className='upload__heading'>Upload Video</h1>
        <div className='upload__flex'>
          <div className='upload__heading-div-main'>
            <h4 className='upload__heading-small'>VIDEO THUMBNAIL</h4>
            <img
              src={image}
              alt='video'
              name='image'
              className='upload__input-image'
            />
          </div>
          <div className='upload__heading-div-small'>
            <div className='upload__heading-div'>
              <h4 className='upload__heading-small'>TITLE YOUR VIDEO</h4>
              <input
                type='text'
                name='title'
                placeholder='Add a title to your video'
                className='upload__input-one'
              />
            </div>

            <div className='upload__heading-div'>
              <h4 className='upload__heading-small'>ADD A VIDEO DESCRIPTION</h4>
              <input
                type='text'
                name='channel'
                placeholder='Add a description of your video'
                className='upload__input-two'
              />
            </div>
          </div>
        </div>

        <div className='upload__button-div'>
          <Link to={"/"} className='upload__button-cancel'>
            CANCEL
          </Link>

          <button className='upload__button'>PUBLISH</button>
        </div>
      </form>
    );
  }
}
