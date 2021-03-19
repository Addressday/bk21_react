/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <!-- Hero Section Begin --> */}
                <section class="hero">
                    <div class="hero__slider owl-carousel">
                        <div class="hero__items set-bg" data-setbg="../img/hero/1_main_image.png">
                            <div class="hero__text">
                                <h2>차세대 바이오리더 교육연구단</h2>
                                <p>BRAIN KOREA 21</p>
                                <a href="/">바로가기</a>
                            </div>
                        </div>
                        <div class="hero__items set-bg" data-setbg="../img/hero/1_main_image.png">
                            <div class="hero__text">
                                <h2>차세대 바이오리더 교육연구단</h2>
                                <p>BRAIN KOREA 21</p>
                                <a href="/">바로가기</a>
                            </div>
                        </div>

                        <div class="hero__items set-bg" data-setbg="../img/hero/1_main_image.png">
                            <div class="hero__text">
                                <h2>차세대 바이오리더 교육연구단</h2>
                                <p>BRAIN KOREA 21</p>
                                <a href="/">바로가기</a>
                            </div>
                        </div>
                    </div>

                    <div class="slide-num" id="snh-1"></div>
                    <div class="slider__progress">
                        <span></span>

                    </div>

                </section>
                {/* <!-- Hero Section End --> */}

                {/* <!-- Project Section Begin --> */}
                <section>
                    <div class="card-container">

                        <div class="card_main">
                            <div class="card-body">
                                <h1>교육연구단 소개</h1>
                                <p>차세대 바이오리더 교육연구단을<br />소개합니다.</p>
                                <Link to="/introduction/vision">자세히보기</Link>
                            </div>
                        </div>

                        <div class="card">
                            <img src="../img/logo/2_main_icon(1).png" alt="Random photo" class="card-img" />
                            <div class="card-body">
                                <h3>비전과 전략</h3>
                                <p>교육연구단의 비전과<br />전략을 확인해 보세요.</p>
                            </div>
                        </div>

                        <div class="card">
                            <img src="../img/logo/2_main_icon(2).png" alt="Random photo" class="card-img" />
                            <div class="card-body">
                                <h3>교육연구단 목표</h3>
                                <p>차세대 바이오리더 교육연구단<br />목표를 알아보세요.</p>
                            </div>
                        </div>

                        <div class="card">
                            <img src="../img/logo/2_main_icon(3).png" alt="Random photo" class="card-img" />
                            <div class="card-body">
                                <h3>교육프로그램 구성 및 계획</h3>
                                <p>주요 문제 해결 교육프로그램의<br />구성 및 운영계획 입니다.</p>
                            </div>
                        </div>

                        <div class="card">
                            <img src="../img/logo/2_main_icon(4).png" alt="Random photo" class="card-img" />
                            <div class="card-body">
                                <h3>연구 역량 강화 계획</h3>
                                <p>연구 역량 강화 계획 및 전략을<br /> 확인해 보세요.</p>
                            </div>
                        </div>
                    </div>



                </section>
                {/* <!-- Project Section End --> */}



                {/* <!-- Call To Action Section Begin --> */}

                <div class="callto__wrapper">

                    <section class="callto set-bg" data-setbg="../img/logo/3_image_1.png">

                        <div class="container">

                            <div class="callto__text">
                                <img src="../img/logo/3_icon(1).png" alt="img" />
                                <span>연구성과</span>
                            </div>
                            <Link to='/research/business'>
                                <a class="rightBtn"><img src="../img/logo/3_box_icon.png" /></a>
                            </Link>

                        </div>

                    </section>

                    <section class="callto set-bg" data-setbg="../img/logo/3_image_2.png">

                        <div class="container">

                            <div class="callto__text">
                                <img src="../img/logo/3_icon(2).png" alt="img" />
                                <span>자체 운영규정</span>
                            </div>
                            <Link to='/instructions'>
                                <a class="rightBtn"><img src="../img/logo/3_box_icon.png" /></a>
                            </Link>

                        </div>

                    </section>
                </div>

                {/* <!-- Call To Action Section End --> */}

                <section>

                    <div class="Three__card-container">

                        <div class="Three__card_main">
                            <div class="card-body">
                                <h1>교육연구단 구성</h1>
                                <p>차세대 바이오리더 교육연구단을<br />구성하는 멤버를 소개합니다.</p>
                                <Link to="/configuration/professor">자세히보기</Link>
                            </div>
                        </div>

                        <div class="Three__card">
                            <Link to="/configuration/professor"><img src="../img/logo/4_image(1).png" alt="Random photo" /></Link>
                            <div class="Three__card-body">
                                <p>참여교수</p>
                            </div>
                        </div>

                        <div class="Three__card">
                            <Link to="/configuration/researcher"><img src="../img/logo/4_image(2).png" alt="Random photo" /></Link>
                            <div class="Three__card-body">
                                <p>신진연구인력</p>
                            </div>
                        </div>

                        <div class="Three__card">
                            <Link to="/configuration/student"><img src="../img/logo/4_image(3).png" alt="Random photo" /></Link>
                            <div class="Three__card-body">
                                <p>참여대학원생</p>
                            </div>
                        </div>

                    </div>

                </section>

            </div>

        )
    }
}

export default Home;
