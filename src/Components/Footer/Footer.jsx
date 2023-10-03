import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className="container my-5">
      <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#45526e'}}>
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a className="text-white">MDBootstrap</a>
                </p>
                <p>
                  <a className="text-white">MDWordPress</a>
                </p>
                <p>
                  <a className="text-white">BrandFlow</a>
                </p>
                <p>
                  <a className="text-white">Bootstrap Angular</a>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a className="text-white">Your Account</a>
                </p>
                <p>
                  <a className="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a className="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a className="text-white">Help</a>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3" /> info@gmail.com</p>
                <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
              </div>
            </div>
          </section>
          <hr className="my-3" />
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2020 Copyright:
                  <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-google" /></a>
                <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  )
}
export default Footer;
