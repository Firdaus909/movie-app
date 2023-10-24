import React from "react";
import { Button, Divider, Flex, Typography } from "antd";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquarePinterest,
} from "react-icons/fa6";

import "../assets/css/Footer.css";
import Logo from "../assets/image/Logo.svg";
import downloadButton from "../assets/image/download_button.png";

const Footer = () => {
  return (
    <div className="footer">
      <Flex className="footer-item">
        <Flex className="footer-logo">
          <img src={Logo} alt="Logo" />
          <Typography.Text className="footer-logo-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            aspernatur cupiditate ratione commodi, deserunt at et odio harum
            voluptates reprehenderit sed cum obcaecati quis, aliquam possimus
            necessitatibus quae, dignissimos sint eius optio autem. Cupiditate,
            ipsa?
          </Typography.Text>
        </Flex>
        <Divider className="footer-divider" />
        <Flex wrap="wrap" className="footer-link">
          <Typography.Link href="#" className="footer-link-item">
            Tentang Kami
          </Typography.Link>
          <Typography.Link href="#" className="footer-link-item">
            Blog
          </Typography.Link>
          <Typography.Link href="#" className="footer-link-item">
            Layanan
          </Typography.Link>
          <Typography.Link href="#" className="footer-link-item">
            Karir
          </Typography.Link>
          <Typography.Link href="#" className="footer-link-item">
            Pusat Media
          </Typography.Link>
        </Flex>
        <Divider className="footer-divider" />
        <Flex vertical>
          <Typography.Title level={2} className="footer-download-title">
            Download
          </Typography.Title>
          <Flex>
            <img
              src={downloadButton}
              alt="download"
              className="footer-download-button"
            />
          </Flex>
          <Typography.Title level={2} className="footer-download-title">
            Social media
          </Typography.Title>
          <Flex gap={10}>
            <a href="#">
              <FaSquareFacebook className="footer-media-button" />
            </a>
            <a href="#">
              <FaSquarePinterest className="footer-media-button" />
            </a>
            <a href="#">
              <FaSquareInstagram className="footer-media-button" />
            </a>
          </Flex>
        </Flex>
      </Flex>
      <Divider style={{ borderColor: "white" }} />
      <Flex align="center" justify="center">
        Copyright &copy;. All Rights Reserved
      </Flex>
    </div>
  );
};

export default Footer;
