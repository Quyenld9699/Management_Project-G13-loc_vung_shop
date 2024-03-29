import React from "react";
import { ImagesPath } from "../../../constants/ImagesPath";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/dist/client/image";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const shopInfor = useSelector((stores) => stores.shopSlice.value);
    return (
        <div className="footer">
            <Container>
                <div className="footer-get_email box_title">
                    <Row>
                        <Col xs={12} md={12} lg={6}>
                            <h3>Đăng ký nhận tin khuyến mãi</h3>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <Row className="input-email">
                                <Col xd={12} md={9}>
                                    <input placeholder="Nhập email ở đây..."></input>
                                </Col>
                                <Col xd={12} md={3}>
                                    <button>Đăng ký</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="footer-shop_information">
                    <Row>
                        <Col xs={12} sm={4}>
                            <div className="contact">
                                <h4 className="title-info">Liên hệ</h4>
                                <div className="contact-info">
                                    <Link href="/" passHref>
                                        <div className="contact-info-logo">
                                            <Image width={95} height={95} src={ImagesPath.LOGO}></Image>
                                        </div>
                                    </Link>
                                    <div className="contact-info-item">
                                        <div className="item">
                                            <b>{shopInfor.data?.bossName}</b>
                                        </div>
                                        <div className="item">
                                            <span>
                                                <span style={{ color: "#f6470e" }}>Địa chỉ: </span>
                                                <span>{shopInfor?.data?.address}</span>
                                            </span>
                                        </div>
                                        <div className="item">
                                            <span>
                                                <span style={{ color: "#f6470e" }}>Hotline: </span>
                                                <Link href={{ pathname: `tel:${shopInfor?.data?.phone}` }} passHref>
                                                    <span className="hotline-item">{shopInfor?.data?.phone}</span>
                                                </Link>
                                            </span>
                                        </div>
                                        <span>Giấy ĐKKD MST: 0601199076, Sở Kế Hoạch Và Đầu Tư Tỉnh Nam Định Cấp: 07/07/2020</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={2}>
                            <div className="list-info">
                                <h4 className="title-info">Về chúng tôi</h4>
                                <input id="toggle-footer-1" className="toggle-footer-menu" type="checkbox"></input>
                                <label htmlFor="toggle-footer-1" className="toggle-footer-menu-button"></label>
                                <ul className="list-info-ul">
                                    <li className="item-info">
                                        <Link href="/">
                                            <span>Trang chủ</span>
                                        </Link>
                                    </li>
                                    <li className="item-info">
                                        <Link href="/gioi-thieu">
                                            <span>Giới thiệu</span>
                                        </Link>
                                    </li>
                                    <li className="item-info">
                                        <Link href="/san-pham/all">
                                            <span>Sản phẩm</span>
                                        </Link>
                                    </li>
                                    <li className="item-info">
                                        <Link href="/tin-tuc">
                                            <span>Tin tức</span>
                                        </Link>
                                    </li>
                                    <li className="item-info">
                                        <Link href="/lien-he">
                                            <span>Liên hệ</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={3}>
                            <div className="list-info">
                                <h4 className="title-info">Chính sách</h4>
                                <input id="toggle-footer-2" className="toggle-footer-menu" type="checkbox"></input>
                                <label htmlFor="toggle-footer-2" className="toggle-footer-menu-button"></label>
                                <ul className="list-info-ul">
                                    <li className="item-policy">
                                        <Link href="/chinh-sach-bao-mat">
                                            <span>Chính sách bảo mật</span>
                                        </Link>
                                    </li>
                                    <li className="item-policy">
                                        <Link href="/chinh-sach-van-chuyen">
                                            <span>Chính sách vận chuyển</span>
                                        </Link>
                                    </li>
                                    <li className="item-policy">
                                        <Link href="/chinh-sach-bao-hanh">
                                            <span>Chính sách bảo hành</span>
                                        </Link>
                                    </li>
                                    <li className="item-policy">
                                        <Link href="/chinh-sach-doi-tra">
                                            <span>Chính sách đổi trả</span>
                                        </Link>
                                    </li>
                                    <li className="item-policy">
                                        <Link href="/chinh-sach-thanh-toan">
                                            <span>Chính sách thanh toán</span>
                                        </Link>
                                    </li>
                                    <li className="item-policy">
                                        <Link href="/quy-dinh-su-dung">
                                            <span>Quy định sử dụng</span>
                                        </Link>
                                    </li>
                                    <li className="item-policy">
                                        <Link href="/huong-dan-mua-hang">
                                            <span>Hướng dẫn mua hàng</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={3}>
                            <div className="payment">
                                <h4 className="title-info">Hỗ trợ thanh toán</h4>
                                <div className="payment-image">
                                    <img src={ImagesPath.PAYMENT_LOGO} style={{ width: "-webkit-fill-available" }}></img>
                                </div>
                                <div>
                                    <h4 className="title-info">Tổng đài hỗ trợ</h4>
                                </div>
                                <div className="tel-contact">
                                    <FontAwesomeIcon icon={faPodcast}></FontAwesomeIcon>
                                    <span style={{ marginLeft: "20px" }}>{shopInfor.data?.phone}</span>
                                </div>
                                <div className="social">
                                    <Link href={shopInfor.data?.facebook || "#"} passHref>
                                        <span style={{ color: "#1e3ad4" }}>
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </span>
                                    </Link>
                                    <Link href={shopInfor.data?.instagram || "#"} passHref>
                                        <span style={{ color: "#ff1e45" }}>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </span>
                                    </Link>
                                    <Link href={shopInfor.data?.youtube || "#"} passHref>
                                        <span style={{ color: "#f44336" }}>
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </span>
                                    </Link>
                                    <Link href={shopInfor.data?.zalo || "#"} passHref>
                                        <span style={{ color: "rgb(1 128 199)" }}>
                                            <Image src={ImagesPath.zaloIcon} alt="tiện ích lộc vừng" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="footer-copyright">
                <Container>
                    <Row>
                        <Col>
                            <span>
                                Bản quyền thuộc về
                                <span style={{ color: "#f6470e" }}>
                                    {" "}
                                    {shopInfor.data?.bossName} | {shopInfor.data?.phone}{" "}
                                </span>
                                <span className="hidden_sign"> | </span>
                            </span>
                            <span style={{ marginLeft: "10px" }}>
                                Cung cấp bởi
                                <span style={{ color: "#f6470e", marginLeft: "5px" }}>{shopInfor.data?.bossName}</span>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
