import React from "react";
import StudentHeader from "../../student/header";
import Footer from "../../footer";
import StudentSideBar from "../sidebar";
import { Link } from "react-router-dom";

export default function StudentPayment() {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Payment"} />
      {/* Student Dashboard */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <StudentSideBar activeMenu={"Payment"} />
            {/* sidebar */}

            {/* Profile Details */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-inner-blk p-0">
                  <div className="profile-heading">
                    <h3>Payment Methods</h3>
                    <p>Primary payment method is used by default</p>
                  </div>
                  <div className="comman-space">
                    <div className="settings-btn-grp hvr-sweep-to-right">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#addpaymentMethod"
                      >
                        Add Payment Method
                      </Link>
                    </div>
                    <div className="payment-method-blk">
                      {/* Payment Method */}
                      <div className="payment-list d-flex align-items-center">
                        <div className="me-auto">
                          <h5>Visa ending in 1234</h5>
                          <p>Expires in 10/2021</p>
                        </div>
                        <div>
                          <ul className="grp-action-style inline-inline">
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                className="btn btn-action-style btn-action-primary"
                              >
                                primary
                              </Link>
                            </li>
                            <li className="list-inline-item ">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                className="btn btn-action-style btn-action-dark "
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                                {/* <span className="tooltipEdit">Edit</span> */}
                              </Link>
                            </li>
                            <li className="list-inline-item ">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Make it Primary"
                                className="btn btn-action-style btn-action-method "
                              >
                                <i className="fa-regular fa-credit-card"></i>
                                {/* <span className="tooltipMake">
                                  Make it Primary
                                </span> */}
                              </Link>
                            </li>
                            <li className="list-inline-item ">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove"
                                className="btn btn-action-style btn-action-delete"
                              >
                                <i className="fa-regular fa-trash-can"></i>
                                {/* <span className="tooltipRemove">Remove</span> */}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Payment Method */}

                      {/* Payment Method */}
                      <div className="payment-list d-flex align-items-center">
                        <div className="me-auto">
                          <h5>Mastercard ending in 1234</h5>
                          <p>Expires in 10/2021</p>
                        </div>
                        <div>
                          <ul className="grp-action-style inline-inline">
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                className="btn btn-action-style btn-action-primary"
                              >
                                primary
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                className="btn btn-action-style btn-action-dark"
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Make it Primary"
                                className="btn btn-action-style btn-action-method"
                              >
                                <i className="fa-regular fa-credit-card"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove"
                                className="btn btn-action-style btn-action-delete"
                              >
                                <i className="fa-regular fa-trash-can"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Payment Method */}

                      {/* Payment Method */}
                      <div className="payment-list d-flex align-items-center">
                        <div className="me-auto">
                          <h5>Discover ending in 1234</h5>
                          <p>Expires in 10/2021</p>
                        </div>
                        <div>
                          <ul className="grp-action-style inline-inline">
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                className="btn btn-action-style btn-action-primary"
                              >
                                primary
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                className="btn btn-action-style btn-action-dark"
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Make it Primary"
                                className="btn btn-action-style btn-action-method"
                              >
                                <i className="fa-regular fa-credit-card"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove"
                                className="btn btn-action-style btn-action-delete"
                              >
                                <i className="fa-regular fa-trash-can"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Payment Method */}

                      {/* Payment Method */}
                      <div className="payment-list d-flex align-items-center">
                        <div className="me-auto">
                          <h5>American Express ending in 1234</h5>
                          <p>Expires in 10/2021</p>
                        </div>
                        <div>
                          <ul className="grp-action-style inline-inline">
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                className="btn btn-action-style btn-action-primary"
                              >
                                primary
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                className="btn btn-action-style btn-action-dark"
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Make it Primary"
                                className="btn btn-action-style btn-action-method"
                              >
                                <i className="fa-regular fa-credit-card"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove"
                                className="btn btn-action-style btn-action-delete"
                              >
                                <i className="fa-regular fa-trash-can"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Payment Method */}

                      {/* Payment Method */}
                      <div className="payment-list d-flex align-items-center">
                        <div className="me-auto">
                          <h5>Paypal Express ending in 1234</h5>
                          <p>Expires in 10/2021</p>
                        </div>
                        <div>
                          <ul className="grp-action-style inline-inline">
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                className="btn btn-action-style btn-action-dark"
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Make it Primary"
                                className="btn btn-action-style btn-action-method"
                              >
                                <i className="fa-regular fa-credit-card"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#;"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove"
                                className="btn btn-action-style btn-action-delete"
                              >
                                <i className="fa-regular fa-trash-can"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Payment Method */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Details */}
          </div>
        </div>
      </div>
      {/* Student Dashboard */}
      <Footer />
    </div>
  );
}
