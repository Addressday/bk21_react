/* eslint-disable react/jsx-no-target-blank */
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
class Header extends React.Component {

    render() {
        return (

            <div>
                {/* <!-- Offcanvas Menu Begin --> */}
                {/* <div class="offcanvas-menu-overlay"></div>
                <div class="offcanvas-menu-wrapper">
                    <div class="offcanvas__logo">
                        <Link to="/">
                            <img src="../img/logo/1_bk21_logo.png" alt="logo" />
                        </Link>

                    </div>
                    <div id="mobile-menu-wrap"></div>
                    <div class="offcanvas__widget">
                        <li><Link to="/login" target="_blank">로그인</Link></li>
                        <li><Link to="/signup" target="_blank">회원가입</Link></li>
                        <li><Link to="/sitemap">사이트맵</Link></li>
                    </div>
                </div> */}
                {/* <!-- Offcanvas Menu End --> */}

                {/* <!-- Header Section Begin --> */}


                <header class="header">

                    <div class="header__logo">
                        <Link to="/">
                            <img src="../img/logo/1_bk21_logo_white.png" alt="logo" />
                        </Link>
                    </div>


                    <nav class="header__menu mobile-menu">
                        <ul>
                            {/* <!-- First Tier Drop Down --> */}
                            <li>
                                <Link to="/introduction/vision">교육연구단 소개</Link>

                                <ul class="dropdown">
                                    <li><Link to="/introduction/vision">비전과 전략</Link></li>
                                    <li><Link to="/introduction/goal">교육연구단 목표</Link></li>
                                    <li><Link to="/introduction/plan">교육프로그램 구성 및 계획</Link></li>
                                    <li><Link to="/introduction/research">연구 역량 강화 계획</Link></li>
                                    <li><Link to="/introduction/list">학문분야별 참여교수 현황</Link></li>
                                </ul>
                            </li>

                            {/* <!-- First Tier Drop Down --> */}
                            <li>
                                <Link to="/configuration/professor">교육연구단 구성</Link>

                                <ul class="dropdown">
                                    <li><Link to="/configuration/professor">참여교수</Link></li>
                                    <li><Link to="/configuration/researcher">신진연구인력</Link></li>
                                    <li><Link to="/configuration/student">참여 대학원생</Link></li>
                                </ul>
                            </li>

                            {/* <!-- First Tier Drop Down --> */}
                            <li>
                                <Link to="/research/business">연구성과</Link>

                                <ul class="dropdown">
                                    <li><Link to="/research/business">사업신청서</Link></li>
                                    <li><Link to="/research/performance">성과</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/instructions">자체 운영규정</Link>
                            </li>



                        </ul>
                    </nav>



                    <div class="header__widget">
                        <li><Link to="/login" target="_blank">로그인</Link></li>
                        <li><Link to="/signup" target="_blank">회원가입</Link></li>
                        <li><Link to="/sitemap">사이트맵</Link></li>
                    </div>



                    <div class="canvas__open"><i class="fa fa-bars"></i></div>


                  

                </header>
            </div>
        )
    }
}

export default Header;