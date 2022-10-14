import React from "react";
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import { TbBrandDiscord } from "react-icons/tb";
import { AiOutlineReddit } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { TbBrandTiktok } from "react-icons/tb";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h3>Stay in the loop</h3>
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </p>
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Your email address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h3>Join the community</h3>
            <div>
              <ul>
                <li>
                  <TbBrandTwitter />
                </li>
                <li>
                  <TbBrandInstagram />
                </li>
                <li>
                  <TbBrandDiscord />
                </li>
                <li>
                <AiOutlineReddit />
              </li>
                <li>
                  <TbBrandTwitter />
                </li>
                <li>
                  <FiYoutube />
                </li>
                <li>
                  <TbBrandTiktok />
                </li>
                <li>
                  <CgMail />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
