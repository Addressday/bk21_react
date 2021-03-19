/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

class Student extends React.Component {
    render() {
        return (
            <div>
                {/* <!-- Breadcrumb Section Begin --> */}
                <div class="breadcrumb-option__configure set-bg">
                    <div class="container">

                        <div class="breadcrumb__text">
                            <h2>교육연구단 구성 / 참여 대학원생</h2>
                        </div>
                    </div>
                </div>


                <div class="breadcrumb__links">
                    <a href="./index.html">홈</a>
                    <a href="./configuration_professor.html">교육연구단 구성</a>
                    <span>참여 대학원생</span>
                </div>
                {/* <!-- Breadcrumb Section End --> */}

                <div class="breadcrumb__content">



                    <div class="content">
                        <table>
                            <colgroup>
                                <col width="120px" />
                                <col width="72px" />
                                <col width="72px" />
                                <col width="72px" />
                                <col width="72px" />
                                <col width="72px" />
                                <col width="72px" />
                                <col width="72px" />
                                <col width="72px" />
                                <col width="72px" />
                                <col width="72px" />
                                <col width="72px" />

                            </colgroup>

                            <tbody>
                                <tr>
                                    <th rowspan="3">대학원학과</th>
                                    <td colspan="12">대학원생 수</td>
                                </tr>
                                <tr>
                                    <td colspan="3">석사</td>
                                    <td colspan="3">박사</td>
                                    <td colspan="3">석·박사 통합</td>
                                    <td colspan="3">계</td>
                                </tr>
                                <tr>
                                    <td>전체</td>
                                    <td>참여</td>
                                    <td>참여
                                        비율
                                        (%)</td>
                                    <td>전체</td>
                                    <td>참여</td>
                                    <td>참여
                                        비율
                                        (%)</td>
                                    <td>전체</td>
                                    <td>참여</td>
                                    <td>참여
                                        비율
                                        (%)</td>
                                    <td>전체</td>
                                    <td>참여</td>
                                    <td>참여
                                        비율
                                        (%)</td>
                                </tr>
                                <tr>
                                    <th>생명과학과</th>
                                    <td align="center">3</td>
                                    <td align="center">2</td>
                                    <td align="center">66.7%</td>
                                    <td align="center">29</td>
                                    <td align="center">18</td>
                                    <td align="center">62.1%</td>
                                    <td align="center">172</td>
                                    <td align="center">140</td>
                                    <td align="center">81.4%</td>
                                    <td align="center">204</td>
                                    <td align="center">160</td>
                                    <td align="center">78.4%</td>
                                </tr>
                            </tbody>

                        </table>
                        <tfoot>
                            <tr>
                                <div class="showhideBtn">
                                    <td>
                                        <button id="hideBt" style="padding:7px;">상세명단보기</button>
                                    </td>
                                    <td>
                                        <button id="showBt" style="padding:7px;">상세명단숨기기</button>
                                    </td>

                                </div>


                                <div id="showHide" style="display: none;">
                                    <table>
                                        <colgroup>
                                            <col width="120px" />
                                            <col width="100px" />
                                            <col width="70px" />
                                            <col width="72px" />
                                            <col width="72px" />
                                            <col width="100px" />
                                            <col width="72px" />
                                            <col width="72px" />
                                            <col width="72px" />
                                            <col width="100px" />
                                            <col width="100px" />
                                        </colgroup>

                                        <tbody>
                                            <tr>
                                                <th>No</th>
                                                <th>사업년도</th>
                                                <th>학기</th>
                                                <th>한글성명</th>
                                                <th>영문성명</th>
                                                <th>학위과정</th>
                                                <th>재학학기수</th>
                                                <th>학번</th>
                                                <th>지도교수</th>
                                                <th>참여시작</th>
                                                <th>참여종료</th>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>배서윤</td>
                                                <td>Bae seoyoon</td>
                                                <td>박사</td>
                                                <td>3</td>
                                                <td>20182338</td>
                                                <td>고용송</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이영석</td>
                                                <td>Youngseok Lee</td>
                                                <td>석박사통합</td>
                                                <td>1</td>
                                                <td>20192701</td>
                                                <td>고용송</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>신하영</td>
                                                <td>SHIN HAYOUNG</td>
                                                <td>석박사통합</td>
                                                <td>2</td>
                                                <td>20192555</td>
                                                <td>고용송</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>전예인</td>
                                                <td>Jun Yein</td>
                                                <td>석박사통합</td>
                                                <td>3</td>
                                                <td>20182880</td>
                                                <td>고용송</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김상수</td>
                                                <td>Kim sang soo</td>
                                                <td>석박사통합</td>
                                                <td>4</td>
                                                <td>20182120</td>
                                                <td>고용송</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이재민</td>
                                                <td>Jaemin Lee</td>
                                                <td>석박사통합</td>
                                                <td>6</td>
                                                <td>20172782</td>
                                                <td>고용송</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>박민혁</td>
                                                <td>Min Hyuk Park</td>
                                                <td>석박사통합</td>
                                                <td>2</td>
                                                <td>20192162</td>
                                                <td>김상욱</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이광환</td>
                                                <td>LEEKWANGHWAN</td>
                                                <td>석박사통합</td>
                                                <td>4</td>
                                                <td>20182831</td>
                                                <td>김상욱</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>하도연</td>
                                                <td>DOYEON HA</td>
                                                <td>석박사통합</td>
                                                <td>4</td>
                                                <td>20182528</td>
                                                <td>김상욱</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>공정호</td>
                                                <td>Jung Ho Kong</td>
                                                <td>석박사통합</td>
                                                <td>6</td>
                                                <td>20172607</td>
                                                <td>김상욱</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김동효</td>
                                                <td>Kim Donghyo</td>
                                                <td>석박사통합</td>
                                                <td>8</td>
                                                <td>20162141</td>
                                                <td>김상욱</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>전형민</td>
                                                <td>JEON HyungMin</td>
                                                <td>박사</td>
                                                <td>1</td>
                                                <td>20192939</td>
                                                <td>김영진</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>13</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>TruongMyLinh</td>
                                                <td>My Linh Truong</td>
                                                <td>석박사통합</td>
                                                <td>1</td>
                                                <td>20192067</td>
                                                <td>김정훈</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>14</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>유종연</td>
                                                <td>Jongyeon Yu</td>
                                                <td>석박사통합</td>
                                                <td>2</td>
                                                <td>20192170</td>
                                                <td>김정훈</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>15</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이하민</td>
                                                <td>LEE HAMIN</td>
                                                <td>석박사통합</td>
                                                <td>2</td>
                                                <td>20192087</td>
                                                <td>김정훈</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>16</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>표중현</td>
                                                <td>Jung Hyun Pyo</td>
                                                <td>석박사통합</td>
                                                <td>2</td>
                                                <td>20192681</td>
                                                <td>김정훈</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>17</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이은재</td>
                                                <td>eunjae lee</td>
                                                <td>석박사통합</td>
                                                <td>4</td>
                                                <td>20182052</td>
                                                <td>김정훈</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>18</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이현용</td>
                                                <td>LEE HYUN YONG</td>
                                                <td>석박사통합</td>
                                                <td>5</td>
                                                <td>20172312</td>
                                                <td>김정훈</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>19</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>고범진</td>
                                                <td>Bum Jin Ko</td>
                                                <td>석박사통합</td>
                                                <td>11</td>
                                                <td>20142151</td>
                                                <td>김정훈</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>20</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김한빛</td>
                                                <td>han bit kim</td>
                                                <td>석박사통합</td>
                                                <td>1</td>
                                                <td>20192670</td>
                                                <td>김태경</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>21</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>심민아</td>
                                                <td>Sim Min A</td>
                                                <td>석박사통합</td>
                                                <td>1</td>
                                                <td>20192918</td>
                                                <td>김태경</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>22</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>강대시</td>
                                                <td>Dae Si Kang</td>
                                                <td>석박사통합</td>
                                                <td>2</td>
                                                <td>20192499</td>
                                                <td>김태경</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>23</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>HONGMINHTRIET</td>
                                                <td>MINH TRIET HONG</td>
                                                <td>석박사통합</td>
                                                <td>8</td>
                                                <td>20162707</td>
                                                <td>류성호</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>24</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>TRANDIEMNGHI</td>
                                                <td>TRAN DIEM NGHI</td>
                                                <td>석사</td>
                                                <td>1</td>
                                                <td>20192624</td>
                                                <td>박상기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>25</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>TRUONGTHIMYNHUNG</td>
                                                <td>My Nhung Truong Thi</td>
                                                <td>박사</td>
                                                <td>6</td>
                                                <td>20172515</td>
                                                <td>박상기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>26</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>지현아</td>
                                                <td>GI HYEON AH</td>
                                                <td>석박사통합</td>
                                                <td>1</td>
                                                <td>20192580</td>
                                                <td>박상기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>27</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>유진영</td>
                                                <td>Jinyeong Yoo</td>
                                                <td>석박사통합</td>
                                                <td>2</td>
                                                <td>20192118</td>
                                                <td>박상기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>28</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>조은별</td>
                                                <td>Eunbyul Cho</td>
                                                <td>석박사통합</td>
                                                <td>3</td>
                                                <td>20182785</td>
                                                <td>박상기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>29</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>원유빈</td>
                                                <td>YUBIN WON</td>
                                                <td>석박사통합</td>
                                                <td>4</td>
                                                <td>20182462</td>
                                                <td>박상기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>30</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김승현</td>
                                                <td>KimSeungHyun</td>
                                                <td>석박사통합</td>
                                                <td>7</td>
                                                <td>20162236</td>
                                                <td>박상기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>31</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>문동진</td>
                                                <td>Mun Dong jin</td>
                                                <td>석박사통합</td>
                                                <td>8</td>
                                                <td>20162929</td>
                                                <td>박상기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>32</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>구본성</td>
                                                <td>GOO BON SEONG</td>
                                                <td>석박사통합</td>
                                                <td>10</td>
                                                <td>20152869</td>
                                                <td>박상기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>33</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이수빈</td>
                                                <td>Lee Su Been</td>
                                                <td>석박사통합</td>
                                                <td>12</td>
                                                <td>20142037</td>
                                                <td>박상기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>34</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>박건유</td>
                                                <td>KunYou Park</td>
                                                <td>석박사통합</td>
                                                <td>1</td>
                                                <td>20192830</td>
                                                <td>박승열</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>35</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>윤하연</td>
                                                <td>Ha-Yeon Yoon</td>
                                                <td>박사</td>
                                                <td>1</td>
                                                <td>20192110</td>
                                                <td>손기훈</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>36</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>PANDEYANKITA</td>
                                                <td>Ankita Pandey</td>
                                                <td>박사</td>
                                                <td>7</td>
                                                <td>20162321</td>
                                                <td>손기훈</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>37</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이윤영</td>
                                                <td>Lee Yoonyoung</td>
                                                <td>석박사통합</td>
                                                <td>3</td>
                                                <td>20182410</td>
                                                <td>손기훈</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>38</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김하성</td>
                                                <td>Haseong Kim</td>
                                                <td>석박사통합</td>
                                                <td>6</td>
                                                <td>20172721</td>
                                                <td>손기훈</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>39</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>문하영</td>
                                                <td>Hayoung Moon</td>
                                                <td>석박사통합</td>
                                                <td>6</td>
                                                <td>20172734</td>
                                                <td>손기훈</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>40</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김성은</td>
                                                <td>SUNGEUN KIM</td>
                                                <td>박사</td>
                                                <td>5</td>
                                                <td>20172916</td>
                                                <td>신근유</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>41</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이주희</td>
                                                <td>Juhee Lee</td>
                                                <td>석박사통합</td>
                                                <td>1</td>
                                                <td>20192126</td>
                                                <td>신근유</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>42</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>최서영</td>
                                                <td>SEOYOUNG CHOI</td>
                                                <td>석박사통합</td>
                                                <td>2</td>
                                                <td>20192618</td>
                                                <td>신근유</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>43</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김은지</td>
                                                <td>KIM EUNJEE</td>
                                                <td>석박사통합</td>
                                                <td>5</td>
                                                <td>20172371</td>
                                                <td>신근유</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>44</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김태현</td>
                                                <td>Kim TaeHyeon</td>
                                                <td>박사</td>
                                                <td>2</td>
                                                <td>20192847</td>
                                                <td>유주연</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>45</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>윤혜리</td>
                                                <td>HYERI YUN</td>
                                                <td>석박사통합</td>
                                                <td>6</td>
                                                <td>20172871</td>
                                                <td>유주연</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>46</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>조아름</td>
                                                <td>AREUM JO</td>
                                                <td>석박사통합</td>
                                                <td>11</td>
                                                <td>20142687</td>
                                                <td>유주연</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>47</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이지은</td>
                                                <td>Jee Eun Lee</td>
                                                <td>석박사통합</td>
                                                <td>12</td>
                                                <td>20142809</td>
                                                <td>유주연</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>48</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이호진</td>
                                                <td>Hojin Lee</td>
                                                <td>석박사통합</td>
                                                <td>12</td>
                                                <td>20142626</td>
                                                <td>유주연</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>49</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김시은</td>
                                                <td>KimSieun</td>
                                                <td>석사</td>
                                                <td>4</td>
                                                <td>20182420</td>
                                                <td>이윤태</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>50</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>박종석</td>
                                                <td>PARK JONG SEOK</td>
                                                <td>석박사통합</td>
                                                <td>2</td>
                                                <td>20192797</td>
                                                <td>이윤태</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>51</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>박지호</td>
                                                <td>Park ji ho</td>
                                                <td>석박사통합</td>
                                                <td>5</td>
                                                <td>20172998</td>
                                                <td>이윤태</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>52</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이종은</td>
                                                <td>Lee Jongeun</td>
                                                <td>석박사통합</td>
                                                <td>5</td>
                                                <td>20172020</td>
                                                <td>이윤태</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>53</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>홍혜빈</td>
                                                <td>Hong Hyebeen</td>
                                                <td>석박사통합</td>
                                                <td>8</td>
                                                <td>20162451</td>
                                                <td>이윤태</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>54</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>박상순</td>
                                                <td>Sangsoon Park</td>
                                                <td>석박사통합</td>
                                                <td>10</td>
                                                <td>20152806</td>
                                                <td>이윤태</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>55</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>박종민</td>
                                                <td>JONGMIN PARK</td>
                                                <td>석박사통합</td>
                                                <td>11</td>
                                                <td>20142555</td>
                                                <td>이윤태</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>56</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>장석준</td>
                                                <td>JANGSEOKJOON</td>
                                                <td>석박사통합</td>
                                                <td>2</td>
                                                <td>20192313</td>
                                                <td>장승기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>57</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>유진배</td>
                                                <td>YU JINBAE</td>
                                                <td>석박사통합</td>
                                                <td>10</td>
                                                <td>20152971</td>
                                                <td>장승기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>58</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>구소현</td>
                                                <td>Sohyun Ku</td>
                                                <td>석박사통합</td>
                                                <td>12</td>
                                                <td>20142305</td>
                                                <td>장승기</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>59</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>오세윤</td>
                                                <td>Seyoun Oh</td>
                                                <td>석박사통합</td>
                                                <td>1</td>
                                                <td>20192428</td>
                                                <td>장지원</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>60</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>양승복</td>
                                                <td>YANG SEUNGBOK</td>
                                                <td>석박사통합</td>
                                                <td>2</td>
                                                <td>20192971</td>
                                                <td>장지원</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>61</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>오유정</td>
                                                <td>Oh Yu Jeong</td>
                                                <td>석박사통합</td>
                                                <td>3</td>
                                                <td>20182616</td>
                                                <td>장지원</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>62</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>정지홍</td>
                                                <td>Jeong Ji Hong</td>
                                                <td>석박사통합</td>
                                                <td>1</td>
                                                <td>20192478</td>
                                                <td>조윤제</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>63</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김지한</td>
                                                <td>JIHAN KIM</td>
                                                <td>석박사통합</td>
                                                <td>3</td>
                                                <td>20182897</td>
                                                <td>조윤제</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>64</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김준홍</td>
                                                <td>KIM JUNHONG</td>
                                                <td>석박사통합</td>
                                                <td>6</td>
                                                <td>20172769</td>
                                                <td>조윤제</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>65</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>신진우</td>
                                                <td>Jinwoo Shin</td>
                                                <td>석박사통합</td>
                                                <td>7</td>
                                                <td>20162021</td>
                                                <td>조윤제</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>66</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김유중</td>
                                                <td>Yoojoong Kim</td>
                                                <td>석박사통합</td>
                                                <td>8</td>
                                                <td>20162783</td>
                                                <td>조윤제</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>67</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>정은영</td>
                                                <td>Eunyoung Jeong</td>
                                                <td>석박사통합</td>
                                                <td>10</td>
                                                <td>20152560</td>
                                                <td>조윤제</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>68</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>박지혜</td>
                                                <td>JI-HYE PARK</td>
                                                <td>석박사통합</td>
                                                <td>4</td>
                                                <td>20182377</td>
                                                <td>최규하</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>69</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>여인철</td>
                                                <td>Inchul Yeo</td>
                                                <td>박사</td>
                                                <td>7</td>
                                                <td>20162720</td>
                                                <td>한진관</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>70</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>WANGYILI</td>
                                                <td>YILI WANG</td>
                                                <td>박사</td>
                                                <td>8</td>
                                                <td>20162722</td>
                                                <td>한진관</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>71</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>구영무</td>
                                                <td>Koo Youngmu</td>
                                                <td>석박사통합</td>
                                                <td>6</td>
                                                <td>20172482</td>
                                                <td>한진관</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>72</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>ChaiebLeila</td>
                                                <td>Leila Chaieb</td>
                                                <td>석박사통합</td>
                                                <td>7</td>
                                                <td>20162121</td>
                                                <td>한진관</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>73</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>금병락</td>
                                                <td>Keum Byeongrak</td>
                                                <td>석박사통합</td>
                                                <td>10</td>
                                                <td>20152430</td>
                                                <td>한진관</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>74</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>최상규</td>
                                                <td>CHOI SANG GYU</td>
                                                <td>석박사통합</td>
                                                <td>1</td>
                                                <td>20192791</td>
                                                <td>황일두</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>75</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이가람</td>
                                                <td>Lee Garam</td>
                                                <td>석박사통합</td>
                                                <td>4</td>
                                                <td>20182264</td>
                                                <td>황일두</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>76</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>박소영</td>
                                                <td>Park Soyoung</td>
                                                <td>석박사통합</td>
                                                <td>10</td>
                                                <td>20152058</td>
                                                <td>황일두</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>77</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>박찬영</td>
                                                <td>Chanyoung Park</td>
                                                <td>석박사통합</td>
                                                <td>10</td>
                                                <td>20152748</td>
                                                <td>황일두</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>78</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김재일</td>
                                                <td>Kim Jae Il</td>
                                                <td>석박사통합</td>
                                                <td>12</td>
                                                <td>20142995</td>
                                                <td>황일두</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>79</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>남희재</td>
                                                <td>Nam Heejae</td>
                                                <td>석박사통합</td>
                                                <td>12</td>
                                                <td>20142238</td>
                                                <td>황일두</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>80</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김상윤</td>
                                                <td>Kim Sang-yoon</td>
                                                <td>석박사통합</td>
                                                <td>1</td>
                                                <td>20192626</td>
                                                <td>황철상</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>81</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>양지혜</td>
                                                <td>Yang Jihye</td>
                                                <td>석박사통합</td>
                                                <td>4</td>
                                                <td>20182004</td>
                                                <td>황철상</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>82</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>이창석</td>
                                                <td>CHANG SEOK LEE</td>
                                                <td>석박사통합</td>
                                                <td>4</td>
                                                <td>20182739</td>
                                                <td>황철상</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>83</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>김다솜</td>
                                                <td>DASOM KIM</td>
                                                <td>석박사통합</td>
                                                <td>5</td>
                                                <td>20172986</td>
                                                <td>황철상</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                            <tr>
                                                <td>84</td>
                                                <td>2019</td>
                                                <td>2</td>
                                                <td>문상현</td>
                                                <td>MUN SANGHYEON</td>
                                                <td>석박사통합</td>
                                                <td>10</td>
                                                <td>20152429</td>
                                                <td>황철상</td>
                                                <td>2019-09-01</td>
                                                <td>2020-02-29</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="10"></td>
                                                <td><button id="hideBt" style="padding:7px;">숨기기</button></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </tr>
                        </tfoot>



                    </div>


                </div>

            </div>

        )
    }
}

export default Student;