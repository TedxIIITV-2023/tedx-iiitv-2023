import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileFooter.scss";
import "font-awesome/css/font-awesome.min.css";
import { CSSTransition } from "react-transition-group";

const MobileFooter = () => {
  const [joinEventSection, setjoinEventSection] = useState(false);
  const [speakersSection, setSpeakersSection] = useState(false);
  const [getUpdatesSection, setGetUpdatesSection] = useState(false);
  const [socialMediaSection, setSocialMediaSection] = useState(false);
  return (
    <div className="mobilefooter">
      <div className="mobilefooter__partionhr" />

      <div className="mobilefooter__joinevent">
        <div className="mobilefooter__joinevent__heading">
          <h2>Join Our Event</h2>
          <div>
            {joinEventSection ? (
              <button
                onClick={() => {
                  setjoinEventSection(false);
                }}
              >
                --
              </button>
            ) : (
              <button
                onClick={() => {
                  setjoinEventSection(true);
                }}
              >
                +
              </button>
            )}
          </div>
        </div>
        <CSSTransition
          in={joinEventSection}
          timeout={300}
          classNames="mobilefooter__joinevent__content-transition"
          unmountOnExit
        >
          <div className="mobilefooter__joinevent__content">
            <div className="mobilefooter__joinevent__content__hrline" />
            <div className="mobilefooter__joinevent__content__para">
              Would you like to attend TEDx ?
            </div>
            <form action="https://formspree.io/f/mnqleayp" method="POST">
              <div className="mobilefooter__joinevent__content__flexcontainer">
                <input
                  className="mobilefooter__joinevent__content__flexcontainer__inputbox"
                  placeholder="Email"
                  name="_replyto"
                />
                <button
                  className="mobilefooter__joinevent__content__flexcontainer__button"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </CSSTransition>
      </div>

      <div className="mobilefooter__speakers">
        <div className="mobilefooter__speakers__heading">
          <h2>Speakers</h2>
          <div>
            {speakersSection ? (
              <button
                onClick={() => {
                  setSpeakersSection(false);
                }}
              >
                --
              </button>
            ) : (
              <button
                onClick={() => {
                  setSpeakersSection(true);
                }}
              >
                +
              </button>
            )}
          </div>
        </div>
        <CSSTransition
          in={speakersSection}
          timeout={300}
          classNames="mobilefooter__joinevent__content-transition"
          unmountOnExit
        >
          <div className="mobilefooter__speakers__content">
            <div className="mobilefooter__speakers__content__hrline" />
            <div className="mobilefooter__speakers__content__links">
              <Link
                className="mobilefooter__speakers__content__links__link"
                to="/speakers"
              >
                Anuj Kumar Sharma
              </Link>
              <Link
                className="mobilefooter__speakers__content__links__link"
                to="/speakers"
              >
                Nandini Agrawal
              </Link>
            </div>
          </div>
        </CSSTransition>
      </div>

      <div className="mobilefooter__getupdates">
        <div className="mobilefooter__getupdates__heading">
          <h2>Get Updates</h2>
          <div>
            {getUpdatesSection ? (
              <button
                onClick={() => {
                  setGetUpdatesSection(false);
                }}
              >
                --
              </button>
            ) : (
              <button
                onClick={() => {
                  setGetUpdatesSection(true);
                }}
              >
                +
              </button>
            )}
          </div>
        </div>
        <CSSTransition
          in={getUpdatesSection}
          timeout={300}
          classNames="mobilefooter__joinevent__content-transition"
          unmountOnExit
        >
          <div className="mobilefooter__getupdates__content">
            <div className="mobilefooter__getupdates__content__hrline" />
            <div className="mobilefooter__getupdates__content__para">
              Find us at tedxiiitv@gmail.com
            </div>
            <div className="mobilefooter__getupdates__content__flexcontainer">
              <div className="mobilefooter__getupdates__content__flexcontainer__flexitem">
                <p>Tejas Joshi</p>
                <p>+91 87886 28759 </p>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>

      <div className="mobilefooter__socialmedia">
        <div className="mobilefooter__socialmedia__heading">
          <h2>Social Media</h2>
          <div>
            {socialMediaSection ? (
              <button
                onClick={() => {
                  setSocialMediaSection(false);
                }}
              >
                --
              </button>
            ) : (
              <button
                onClick={() => {
                  setSocialMediaSection(true);
                }}
              >
                +
              </button>
            )}
          </div>
        </div>
        <CSSTransition
          in={socialMediaSection}
          timeout={300}
          classNames="mobilefooter__joinevent__content-transition"
          unmountOnExit
        >
          <div className="mobilefooter__socialmedia__content">
            <div className="mobilefooter__socialmedia__content__hrline" />
            <div className="mobilefooter__socialmedia__content__socialcontainer fa fa-lg">
              <a
                className="mobilefooter__socialmedia__content__socialcontainer__link"
                href="https://twitter.com/tedxiiitv"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter icon"></i>
              </a>
              <a
                className="mobilefooter__socialmedia__content__socialcontainer__link"
                href="https://www.instagram.com/tedxiiitv"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                className="mobilefooter__socialmedia__content__socialcontainer__link"
                href="https://www.youtube.com/channel/UC4mwsjxwalruq9tga_3a92g"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-youtube-play"></i>
              </a>
              <a
                className="mobilefooter__socialmedia__content__socialcontainer__link"
                href="https://www.linkedin.com/company/tedxiiitv"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </CSSTransition>
      </div>

      <div className="mobilefooter__disclaimer">
        TEDxIIITV © | This independent TEDx event is operated under a license
        from TED. All opinions shared through the post are that of the team and
        not that of IIIT Vadodara.
      </div>
    </div>
  );
};

export default MobileFooter;