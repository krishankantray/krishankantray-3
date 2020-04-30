import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import style from "../styles/post.module.css";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <table>
      <tr>
        <td>
          <p align="left">
            <h2>Contact Me :</h2>
            Email : &nbsp; &nbsp; &nbsp;
            <a href="mailto:krishankant_rai@rediffmail.com">
              krishankant_rai@rediffmail.com
            </a>
            <br />
            Phone : &nbsp; &nbsp;&nbsp; <a href="tel:9560621994">+91 9560621994</a>
            <br />
            LinkedIn : &nbsp;  <a href="https://www.linkedin.com/in/krishankantray">@krishankantray</a>
            <br />
            Facebook : &nbsp;  <a href="https://www.facebook.com/krishankantray.1561">@krishankantray.1561</a>
          </p>
        </td>
      </tr>
    </table>
  </Layout>
);

export default Contact;
