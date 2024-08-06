import React from "react";
const Data = () => {
    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Data</h3>
                        </div>
                    </div>
                </section>
                <section className="department-details-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-3 col-xl-3">
                                <div className="sidebar">
                                    <div className="sidebar-widget-list-inner">
                                        <ul>
                                            <li><a href="services.html">IPH</a></li>
                                            <li><a href="services.html">JKS</a></li>
                                            <li><a href="services.html">KSS</a></li>
                                            <li><a href="services.html">BIWIS</a></li>
                                            <li><a href="services.html">INSIS</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card stretch stretch-full">
                                    <div className="card-header">
                                        <h5 className="card-title">Payment Record</h5>
                                        <div className="card-header-action">
                                            <div className="card-header-btn">
                                                <div data-bs-toggle="tooltip" title="Delete">
                                                    <a href="javascript:void(0);" className="avatar-text avatar-xs bg-danger" data-bs-toggle="remove"> </a>
                                                </div>
                                                <div data-bs-toggle="tooltip" title="Refresh">
                                                    <a href="javascript:void(0);" className="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"> </a>
                                                </div>
                                                <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                                                    <a href="javascript:void(0);" className="avatar-text avatar-xs bg-success" data-bs-toggle="expand"> </a>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a href="javascript:void(0);" className="avatar-text avatar-sm" data-bs-toggle="dropdown" data-bs-offset="25, 25">
                                                    <div data-bs-toggle="tooltip" title="Options">
                                                        <i className="feather-more-vertical"></i>
                                                    </div>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:void(0);" className="dropdown-item"><i className="feather-at-sign"></i>New</a>
                                                    <a href="javascript:void(0);" className="dropdown-item"><i className="feather-calendar"></i>Event</a>
                                                    <a href="javascript:void(0);" className="dropdown-item"><i className="feather-bell"></i>Snoozed</a>
                                                    <a href="javascript:void(0);" className="dropdown-item"><i className="feather-trash-2"></i>Deleted</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:void(0);" className="dropdown-item"><i className="feather-settings"></i>Settings</a>
                                                    <a href="javascript:void(0);" className="dropdown-item"><i className="feather-life-buoy"></i>Tips & Tricks</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body custom-card-action p-0">
                                        <div id="payment-records-chart"></div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row g-4">
                                            <div className="col-lg-3">
                                                <div className="p-3 border border-dashed rounded">
                                                    <div className="fs-12 text-muted mb-1">Awaiting</div>
                                                    <h6 className="fw-bold text-dark">$5,486</h6>
                                                    <div className="progress mt-2 ht-3">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{width:`81%`}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="p-3 border border-dashed rounded">
                                                    <div className="fs-12 text-muted mb-1">Completed</div>
                                                    <h6 className="fw-bold text-dark">$9,275</h6>
                                                    <div className="progress mt-2 ht-3">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{width:`82%`}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="p-3 border border-dashed rounded">
                                                    <div className="fs-12 text-muted mb-1">Rejected</div>
                                                    <h6 className="fw-bold text-dark">$3,868</h6>
                                                    <div className="progress mt-2 ht-3">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{width:`68%`}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="p-3 border border-dashed rounded">
                                                    <div className="fs-12 text-muted mb-1">Revenue</div>
                                                    <h6 className="fw-bold text-dark">$50,668</h6>
                                                    <div className="progress mt-2 ht-3">
                                                        <div className="progress-bar bg-dark" role="progressbar" style={{width:`75%`}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Data