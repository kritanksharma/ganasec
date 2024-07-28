import React from "react";
import Icon from "@mdi/react";
import logo from "../Static/logo6.png";
import { mdiFacebook, mdiLinkedin, mdiTwitter, mdiPost, mdiYoutubeSubscription } from "@mdi/js";
import { registerVersion } from "firebase/app";
export default function FooterSection1(props) {
  return (
    <div
      id="footer"
      className="card w-100 bg-light py-1"
      style={{
        height: "100%",
        borderRadius: "0px",
        margin: "0px",
      }}
    >
      <div className="container my-3 mx-3">
        <div className="row" style={{ width: "100vw" }}>
          <div className="col-md-6 text-start">
            <div className="card bg-light" style={{ border: "none" }}>
              <div className="card-body m-0 p-0">
                <h4 className="card-title mb-2">
                  <img
                    src={logo}
                    alt="GanaSec"
                    width="60"
                    height="60"
                    className="justify-content-start h-3"
                  />
                  <b>{props.footer.title}</b>
                </h4>
                <p className="fs-6" style={{paddingRight : '12px'}}>
                  <small>{props.footer.block}</small>
                </p>
                <p className="p-1 bg-light">
                  <a href={props.footer.facebook} className="text-dark icon">
                    <Icon className="p-1" path={mdiFacebook} size={1} title="Facebook" />
                  </a>
                  <a href={props.footer.linkedin} className="text-dark icon">
                    <Icon className="p-1" path={mdiLinkedin} size={1} title="LinkedIn" />
                  </a>
                  <a href={props.footer.twitter} className="text-dark icon">
                    <Icon className="p-1" path={mdiTwitter} size={1} title="Twitter" />
                  </a>
                  <a href={props.footer.blog} className="text-dark icon">
                    <Icon className="p-1" path={mdiPost} size={1} title="Medium" />
                  </a>
                  <a href={props.footer.youtube} className="text-dark icon">
                    <Icon className="p-1" path={mdiYoutubeSubscription} size={1} title="You Tube" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 text-start">
            <div className="card bg-light" style={{ border: "none" }}>
              <div className="card-body m-0 p-0">
                <h4 className="card-title mb-2">
                  <b>About Us</b>
                </h4>
                <p className="fs-6 fw-semibold icon">
                  <small>
                    <a
                      className="nav-link"
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    >
                      Usage Agreement{" "}
                    </a>
                  </small>
                </p>
                <div
                  className="modal fade"
                  id="exampleModal1"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Usage Agreement
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body fw-normal text-secondary">
                        <p>
                          <small>
                            This Usage Agreement (the "Agreement") is entered into between Ganasec,
                            referred to as "we," "our," or "us," and the user, referred to as "you"
                            or "user," for the utilization of our services and products. By
                            accessing, browsing, or using GanaSec's website, applications, or any of
                            our offerings, you acknowledge and agree to comply with the terms
                            outlined in this Agreement. If you do not agree with these terms, please
                            refrain from using our services.
                          </small>
                        </p>
                        <p>
                          {" "}
                          <small>
                            <b>1. Acceptable Use:</b> You agree to use GanaSec's services solely for
                            lawful purposes and in accordance with applicable laws and regulations.
                            You will not engage in any activities that could harm, disrupt, or
                            compromise our services, infrastructure, or other users' experience.
                          </small>
                        </p>
                        <p>
                          {" "}
                          <small>
                            <b>2. Intellectual Property:</b> All content, materials, trademarks, and
                            intellectual property provided by Ganasec are protected by copyright and
                            other applicable laws. You may not modify, distribute, reproduce, or use
                            our intellectual property without explicit consent.
                          </small>
                        </p>
                        <p>
                          {" "}
                          <small>
                            <b>3. Privacy and Data:</b> Your use of GanaSec's services is subject to
                            our Privacy Policy. By using our services, you consent to the
                            collection, use, and processing of your data as described in the Privacy
                            Policy
                          </small>
                        </p>
                        <p>
                          {" "}
                          <small>
                            <b>4. Security:</b> You are responsible for maintaining the security of
                            your account credentials and any actions taken under your account.
                            Inform us immediately if you suspect any unauthorized access or breach
                            of security.
                          </small>
                        </p>
                        <p>
                          {" "}
                          <small>
                            <b>5. Disclaimer: </b>GanaSec's services are provided on an "as-is"
                            basis, and we do not make any warranties, express or implied, regarding
                            their accuracy, reliability, or suitability for your needs. We shall not
                            be liable for any damages arising from your use of our services.
                          </small>
                        </p>
                        <p>
                          {" "}
                          <small>
                            <b>6. Termination:</b> We reserve the right to suspend or terminate your
                            access to our services at any time, without prior notice, if we suspect
                            violation of this Agreement or any unlawful activities.
                          </small>
                        </p>
                        <p>
                          {" "}
                          <small>
                            <b>7. Governing Law: </b>This Agreement is governed by and construed in
                            accordance with the laws of [Jurisdiction], without regard to its
                            conflict of law principles.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-semibold icon">
                  <small>
                    <a
                      className="nav-link"
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      Privacy Policy & Terms of Use
                    </a>
                  </small>
                </p>

                <div
                  className="modal fade"
                  id="exampleModal2"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Privacy Policy & Terms of Use
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body fw-normal text-secondary">
                        <p>
                          <small>
                            At Ganasec, we are committed to protecting your privacy and ensuring the
                            security of your personal information. This Privacy Policy outlines how
                            we collect, use, and safeguard your data when you use our services.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>Information Collection:</b> We may collect certain personal
                            information, including but not limited to your name, email address, and
                            contact details, when you interact with our website or engage with our
                            services. We use this information for purposes such as communication,
                            account management, and service improvement.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>Data Usage:</b> We use your personal information to provide and
                            enhance our services, respond to your inquiries, and customize your
                            experience. We may also use aggregated and anonymized data for
                            analytical purposes to better understand user behavior and preferences.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>Data Protection:</b> We implement appropriate security measures to
                            protect your personal information from unauthorized access, disclosure,
                            alteration, or destruction. However, please be aware that no data
                            transmission over the internet can be entirely secure.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>Third-Party Services:</b> We may use third-party services that
                            collect and process data. These services have their own privacy
                            policies, and we encourage you to review them.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>Cookies:</b> Our website may use cookies to enhance user experience.
                            You can adjust your browser settings to refuse cookies, but this may
                            limit certain functionalities.
                          </small>
                        </p>
                        <p>
                          <small>
                            By accessing or using GanaSec's services, you agree to the following
                            Terms of Use:
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>1. Acceptable Use:</b> You agree to use our services responsibly and
                            in compliance with applicable laws. You will not engage in any
                            activities that may disrupt, damage, or compromise our services or
                            infringe upon the rights of others.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>2. Intellectual Property:</b> All content and materials on our
                            website and services are protected by copyright and other intellectual
                            property laws. You may not reproduce, distribute, or modify any content
                            without our explicit consent.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>3. User Conduct:</b> You are responsible for your actions while using
                            our services. Any abusive, harassing, or unauthorized behavior will
                            result in the termination of your access.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>4. Limitation of Liability:</b> Ganasec is not liable for any damages
                            or losses arising from your use of our services. We provide our services
                            "as is" and do not guarantee their accuracy or availability.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>5. Termination:</b> We reserve the right to suspend or terminate your
                            access to our services if you violate these Terms of Use or engage in
                            unlawful activities.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>6. Changes to Terms:</b> Ganasec may update or modify these Terms of
                            Use at any time. Your continued use of our services after such changes
                            constitutes your acceptance of the updated terms.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-semibold icon">
                  <small>
                    <a
                      className="nav-link"
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    >
                      Disclaimer Agreement
                    </a>
                  </small>
                </p>
                <div
                  className="modal fade"
                  id="exampleModal3"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Disclaimer Agreement
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body fw-normal text-secondary">
                        <p>
                          <small>
                            This Disclaimer Agreement ("Agreement") is entered into between Ganasec,
                            referred to as "we," "our," or "us," and the user, referred to as "you"
                            or "user," for the purpose of providing information and services. By
                            accessing, browsing, or using GanaSec's website, applications, or any of
                            our offerings, you acknowledge and agree to comply with the terms
                            outlined in this Agreement. If you do not agree with these terms, please
                            refrain from using our services.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>1. Information Accuracy:</b> The information provided on GanaSec's
                            website and services is for general informational purposes only. We make
                            no representations or warranties regarding the accuracy, completeness,
                            or reliability of the content.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>2. No Professional Advice:</b> The content provided by Ganasec does
                            not constitute professional advice, and you should not rely on it as
                            such. You are encouraged to seek advice from qualified professionals
                            regarding specific matters.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>3. No Endorsement:</b> Ganasec may provide links to external websites
                            or resources for convenience. We do not endorse or assume any
                            responsibility for the content, products, or services offered by third
                            parties.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>4. Limitation of Liability:</b> Ganasec shall not be liable for any
                            damages or losses arising from your use of our services or reliance on
                            the information provided. We are not responsible for any errors,
                            omissions, or inaccuracies in the content.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>5. Changes to Agreement:</b> Ganasec may update or modify this
                            Agreement at any time. Your continued use of our services after any such
                            changes constitutes your acceptance of the updated terms.
                          </small>
                        </p>
                        <p>
                          <small>
                            <b>6. Governing Law:</b> This Agreement is governed by and construed in
                            accordance with the laws of [Jurisdiction], without regard to its
                            conflict of law principles.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-start">
            <div className="card bg-light" style={{ border: "none" }}>
              <div className="card-body m-0 p-0">
                <h4 className="card-title mb-2">
                  <b>Contact Us</b>
                </h4>
                <p className="fs-6">
                  <small>
                    <b>Address</b> : {props.footer.address}
                  </small>
                </p>
                <p className="fs-6">
                  <small>
                    <b>Email</b> : {props.footer.email}
                  </small>
                </p>
                {props.footer.number && (
                  <p className="fs-6">
                    <small>
                      <b>Telephone</b>: {props.footer.number}
                    </small>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
