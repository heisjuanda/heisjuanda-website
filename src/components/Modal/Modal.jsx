import { useEffect } from "react";

import PropTypes from "prop-types";

import { LoaderCircle } from "./component/Loader/Loader";

import { gsap } from "gsap";

import passedIcon from "../../assets/img/icons/passedW.png";
import alertIcon from "../../assets/img/icons/alertW.png";
import errorIcon from "../../assets/img/icons/errorW.png";

import "./Modal.css";

export const Modal = (props) => {
  const { title, message, type, setShowModal, loading } = props;

  const handleCloseModal = () => {
    const tl = gsap.timeline();
    tl.to(".modal-body", 0.5, {
      translateY: "10%",
      opacity: 0,
      ease: "power1.out",
    });
    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".modal-body", {
      duration: 0.5,
      translateY: "0%",
      opacity: 1,
      ease: "power1.in",
    });
  }, []);

  return (
    <main onClick={handleCloseModal} className="modal-container">
      <section className="modal-body">
        {loading ? (
          <div className="modal-body__container">
            <LoaderCircle />
            <header className="modal-body__title">
              <h2>Loading</h2>
            </header>
          </div>
        ) : (
          <>
            <div className="modal-body__close">
              <button onClick={handleCloseModal}>X</button>
            </div>
            <div className="modal-body__container">
              <div className="modal-body__icon">
                {type === "passed" ? (
                  <img src={passedIcon} alt="icon that shows a passed symbol" />
                ) : null}
                {type === "alert" ? (
                  <img src={alertIcon} alt="icon that shows an alert symbol" />
                ) : null}
                {type === "error" ? (
                  <img src={errorIcon} alt="icon that shows an error symbol" />
                ) : null}
              </div>
              <header className="modal-body__title">
                <h2>{title}</h2>
              </header>
              <article className="modal-body__message">
                <p>{message}</p>
              </article>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
