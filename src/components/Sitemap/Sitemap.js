/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Sitemap extends React.Component {
    render() {
        return (
            <div>


                {/* <!-- Breadcrumb Section Begin --> */}
                <div class="breadcrumb-option set-bg" data-setbg="../img/hero/1_main_image.png">
                    <div class="container">

                        <div class="breadcrumb__text">
                            <h2>사이트맵</h2>
                        </div>
                    </div>
                </div>


                <div class="breadcrumb__links">
                    <a href="./index.html">홈</a>
                    <a href="./sitemap.html">사이트맵</a>
                    <span>사이트맵</span>
                </div>

                <div class="breadcrumb__content">


                    <nav class="header__menu mobile-menu">
                        <ul>
                            {/* <!-- First Tier Drop Down --> */}

                            <div class="sitemap">

                                <h1>교육연구단 소개</h1>

                                <li><Link to="/introduction/vision">비전과 전략</Link></li>
                                <li><Link to="/introduction/goal">교육연구단 목표</Link></li>
                                <li><Link to="/introduction/plan">교육프로그램 구성 및 계획</Link></li>
                                <li><Link to="/introduction/research">연구 역량 강화 계획</Link></li>
                                <li><Link to="/introduction/list">학문분야별 참여교수 현황</Link></li>



                                {/* <!-- First Tier Drop Down --> */}

                                <h1>교육연구단 구성</h1>


                                <li><Link to="/configuration/professor">참여교수</Link></li>
                                <li><Link to="/configuration/researcher">신진연구인력</Link></li>
                                <li><Link to="/configuration/student">참여 대학원생</Link></li>



                                {/* <!-- First Tier Drop Down --> */}

                                <h1>연구성과</h1>


                                <li><Link to="/research/business">사업신청서</Link></li>
                                <li><Link to="/research/performance">성과</Link></li>



                                <h1>자체 운영규정</h1>

                                <li><Link to="/instructions">자체 운영규정</Link></li>
                            </div>



                        </ul>
                    </nav>

                </div>

            </div>
        )
    }
}

export default Sitemap;