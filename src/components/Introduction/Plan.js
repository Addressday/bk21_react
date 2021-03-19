/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Plan extends React.Component {
    render() {
        return (
            <div>

                {/* <!-- Breadcrumb Section Begin --> */}
                <div class="breadcrumb-option__intro set-bg">
                    <div class="container">

                        <div class="breadcrumb__text">
                            <h2>교육연구단 소개 / 교육프로그램 구성 및 계획</h2>
                        </div>
                    </div>
                </div>

                {/* <!-- Breadcrumb content begin --> */}
                <div class="breadcrumb__links">
                    <Link to="/">홈</Link>
                    <Link to="/introduction/vision">교육연구단 소개</Link>
                    <span>교육프로그램 구성 및 계획</span>
                </div>

                <div class="breadcrumb__content">
                    <div class="breadcrumb__image">
                        <img src="../img/sub/sub_2.png" alt="img" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Plan;