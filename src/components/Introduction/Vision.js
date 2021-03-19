import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/sub_style.css';

class Vision extends React.Component {
    render() {
        return (
            <div>

                {/* <!-- Breadcrumb Section Begin --> */}
                <div class="breadcrumb-option__intro set-bg">

                    <div class="breadcrumb__text">
                        <h2>교육연구단 소개 / 비전과 전략</h2>
                    </div>
                </div>



                {/* <!-- Breadcrumb content begin --> */}
                <div class="breadcrumb__links">
                    <Link to="/">홈</Link>
                    <Link to="/introduction/vision">교육연구단 소개</Link>
                    <span>비전과 전략</span>
                </div>

                <div class="breadcrumb__content">
                    <div class="breadcrumb__image">
                        <img src="../img/sub/sub_3.png" alt="img" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Vision;