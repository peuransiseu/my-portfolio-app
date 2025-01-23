import React from "react";
import { motion } from "framer-motion";

const OrgsExp = () => {
  const orgStyle = {
    maxWidth: "80%",
    height: "40%",
    padding: "5%",
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="container d-flex flex-column reduce-scale  align-items-center org-adjust"
          // style={orgStyle}
        >
          {/* <h1>Organizational Affiliations</h1> */}
          <div className="row row-cols-1 row-cols-md-3 g-4 w-100 mb-0 p-0">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <a href="https://www.facebook.com/ThomasianGamingSociety">
                  <img
                    src="src\assets\tgs-logo-bg.jpg"
                    className="card-img-top logo-hover img-fluid"
                    alt="tgs-logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                </a>

                <div className="card-body">
                  <h5 className="card-title">UST Thomasian Gaming Society</h5>
                  <ul className="card-text fs-5">
                    <li>
                      Executive Vice President and Chief Relations Director
                    </li>
                    <p>(A.Y 2024-2025)</p>
                    <li>
                      Executive Coordinator to the Vice President and Chief
                      Relations Director
                    </li>
                    <p>(A.Y 2023-2024)</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <a href="https://www.facebook.com/USTICSSC">
                  <img
                    src="src\assets\icssc-logo-bg.jpg"
                    className="card-img-top logo-hover img-fluid"
                    alt="icssc-logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                </a>

                <div className="card-body">
                  <h5 className="card-title">UST ICS Student Council</h5>
                  <ul className="card-text fs-5">
                    <li>Director for Projects Management </li>
                    <p>(A.Y 2024-2025)</p>
                    <li>Executive Associate to the Internal Vice President</li>
                    <p>(A.Y 2023-2024)</p>
                    <li>Executive Associate to the President </li>
                    <p>(A.Y 2022-2023)</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <a href="https://facebook.com/people/AWS-Learning-Club-Espa%C3%B1a/61563942550637/">
                  <img
                    src="src\assets\awslc-logo.png"
                    className="card-img-top logo-hover img-fluid"
                    alt="awslc-logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                </a>

                <div className="card-body">
                  <h5 className="card-title">AWS Learning Club - España</h5>
                  <ul className="fs-5">
                    <li>Chief Operations Officer</li>
                    <p>(2024 - Present)</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <a href="https://facebook.com/cnagics">
                  <img
                    src="src\assets\cnag-logo.jpg"
                    className="card-img-top logo-hover img-fluid"
                    alt="cnag-logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                </a>

                <div className="card-body">
                  <h5 className="card-title">
                    UST Cisco Networking Academy Gateway - CICS
                  </h5>
                  <ul className="fs-5">
                    <li>External Relations Staff</li>
                    <p>(A.Y 2023-2024)</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <a href="https://www.facebook.com/pcushsstemsoc">
                  <img
                    src="src\assets\pcushsstem-logo.jpg"
                    className="card-img-top logo-hover img-fluid"
                    alt="pcushsstem-logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                </a>

                <div className="card-body">
                  <h5 className="card-title">PCU SHS STEM Society</h5>
                  <ul className="fs-5">
                    <li>Executive Treasurer </li>
                    <p>(A.Y 2019 - 2020)</p>
                    <li>CRTV Media - Videographer</li>
                    <p>(A.Y 2018 - 2019)</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <a href="https://www.facebook.com/olassc">
                  <img
                    src="src\assets\ola-logo.jpg"
                    className="card-img-top logo-hover img-fluid"
                    alt="ola-logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                </a>

                <div className="card-body">
                  <h5 className="card-title">
                    Oxford Louise Academy, Supreme Student Council
                  </h5>
                  <ul className="fs-5">
                    <li>President</li>
                    <p>(A.Y 2017 - 2018)</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OrgsExp;
