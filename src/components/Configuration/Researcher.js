/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

class Researcher extends React.Component {
    render() {
        return (
            <div>
            
                {/* <!-- Breadcrumb Section Begin --> */}
                <div class="breadcrumb-option set-bg" data-setbg="../img/hero/1_main_image.png">
                    <div class="container">

                        <div class="breadcrumb__text">
                            <h2>교육연구단 구성 / 신진연구인력</h2>
                        </div>
                    </div>
                </div>


                <div class="breadcrumb__links">
                    <a href="./index.html">홈</a>
                    <a href="./configuration_professor.html">교육연구단 구성</a>
                    <span>신진연구인력</span>
                </div>


                <div class="breadcrumb__content">



                    <div class="content">

                        <div class="title_info">
                            <div class="t_titl">1. 연구교수</div>

                            <p>-지원자격: 박사학위 취득 후 산업체 또는 연구경력 1년 이상인 자를 원칙으로 한다.</p>
                            <p>-지원시기: 사업단에서 지원계획을 수립(연1회)하면 종합적인 연구성과를 검토/심사하여 지원한다.</p>

                            <div class="t_titl">2. 박사후연구원</div>
                            <p>-지원자격: 박사학위 취득 후 지원 가능하다.</p>
                            <p>-지원시기: 사업단에서 지원계획을 수립(연1회)하면 종합적인 연구성과를 검토/심사하여 지원한다.</p>

                            <div class="t_titl">3. 지원 현황</div>
                            <p>-지원자격: 박사학위 취득 후 지원 가능하다.</p>
                            <p>-지원시기: 사업단에서 지원계획을 수립(연1회)하면 종합적인 연구성과를 검토/심사하여 지원한다.</p>
                        </div>


                        <table>
                            <tbody>
                                <tr>
                                    <th>No</th>
                                    <th>구분</th>
                                    <th>직급</th>
                                    <th>성명</th>
                                    <th>영문</th>
                                    <th>학사출신</th>
                                    <th>박사출신</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>타교</td>
                                    <td>연구교수</td>
                                    <td>최나현</td>
                                    <td>Nahyun Choi</td>
                                    <td>부산대</td>
                                    <td>부산대</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>타교</td>
                                    <td>연구교수</td>
                                    <td>권오빈</td>
                                    <td>Oh-Bin Kwon</td>
                                    <td>청주대</td>
                                    <td>한림대</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>타교</td>
                                    <td>박사후연구원</td>
                                    <td>한승민</td>
                                    <td>Seungmin Han</td>
                                    <td>POSTECH(수학과)</td>
                                    <td>POSTECH(I-Bio)</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>타교</td>
                                    <td>박사후연구원</td>
                                    <td>김류련</td>
                                    <td>Ryuryun Kim</td>
                                    <td>충남대</td>
                                    <td>U. of Hamburg</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>자교</td>
                                    <td>박사후연구원</td>
                                    <td>김나리</td>
                                    <td>Nari Kim</td>
                                    <td>POSTECH</td>
                                    <td>POSTECH</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>





                </div>

            </div>


        )
    }
}

export default Researcher;