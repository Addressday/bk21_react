/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer class="footer set-bg">
                    <div class="container">
                        <div class="footer__top">
                            <a href="http://postech.ac.kr" target="_blank"><img src="../img/logo/5_logo(1).png" alt="logo" /></a>
                            <a href="https://adm-g.postech.ac.kr" target="_blank"><img src="../img/logo/5_logo(2).png" alt="logo" /></a>
                            <a href="https://life.postech.ac.kr" target="_blank"><img src="../img/logo/5_logo(3).png" alt="logo" /></a>
                            <a href="https://bk21four.nrf.re.kr/" target="_blank"><img src="../img/logo/5_logo(4).png" alt="logo" /></a>
                            <a href="https://bk21four.nrf.re.kr/bkms/nxui/index.do" target="_blank"><img src="../img/logo/5_logo(5).png" alt="logo" /></a>
                        </div>


                        <div class="footer__widget__wrapper">


                            <div class="footer__widget">

                                <div class="footer__logo">
                                    <a href="/"><img src="../img/logo/6_footer_logo.png" alt="logo" /></a>
                                </div>

                                <div class="footer__address">

                                    <li><a href="/">개인정보처리방침</a></li>
                                    <li><a href="/">이메일무단수집거부</a></li>
                                    <li><a href="/">사이트맵</a></li>
                                    <li><a href="/">찾아오시는 길</a></li>


                                    <p>790-784 SAN 31, HYOJA-DONG, NAM-GU, POHANG, GYUNGBUK. KOREA 생체분자기능연구사업단 TEL : 054-279-2997<br />
                                        COPYRIGHT 2016 POSTECH. Department of Life Sciences.All RIGHTS RESERVED.</p>

                                </div>



                            </div>




                        </div>



                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;