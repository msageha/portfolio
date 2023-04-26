import React, { useContext, useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";

const Career = () => {
  return (
    <>
      <section id="career" className="bg-gray-900 text-white items-center mx-auto ">
        <div className="">
          <Title title="Career" />
          <Fade duration={1000} delay={600} className="flex justify-center">
            <SubTitle title="経歴" />
            <div className="w-1/2">
              <div className="grid grid-cols-4 gap-4">
                <div className="font-semibold ">2021 / 5 - now</div>
                <div className="col-span-3">: JarvisML.inc</div>
                <div className="font-semibold ">2020 / 6 - 2021 / 4</div>
                <div className="col-span-3">: 株式会社スパイスコード</div>
                <div className="font-semibold ">2019 / 4 - 2020 / 5</div>
                <div className="col-span-3">: 株式会社メルカリ</div>
                <div className="font-semibold ">2019 / 4 - 2023 / 3</div>
                <div className="col-span-3">: 東京工業大学 情報理工学院 (博士課程中退)</div>
                <div className="font-semibold ">2017 / 4 - 2019 / 3</div>
                <div className="col-span-3">: 東京工業大学 情報理工学院 (修士課程修了)</div>
                <div className="font-semibold ">2013 / 4 - 2017 / 3</div>
                <div className="col-span-3">
                  : 東北大学工学部 情報知能システム総合学科 (学士課程修了)
                </div>
              </div>
            </div>
          </Fade>
          <br />
          <br />
          <Fade duration={1000} delay={600} className="flex justify-center">
            <SubTitle title="アルバイト / インターン / その他活動" />

            <div className="w-1/2">
              <div className="grid grid-cols-4 gap-4">
                <div className="font-semibold ">2017 / 9</div>
                <div className="col-span-3">
                  : 株式会社リクルートホールディングス データ分析 インターン
                </div>
                <div className="font-semibold ">2017 / 8 - 2018 / 3</div>
                <div className="col-span-3">: LINE株式会社 インターン・アルバイト</div>
                <div className="font-semibold ">2017 / 5 - 2018 / 3</div>
                <div className="col-span-3">: SecHack365 1期生 参加</div>
                <div className="font-semibold ">2015 / 8 - 2016 / 3</div>
                <div className="col-span-3">
                  : トロワ工科大学 (Université de technologie de Troyes) 留学
                </div>
                <div className="font-semibold ">2015 / 7</div>
                <div className="col-span-3">
                  : シンガポール国立大学 (National University of Singapore) 留学
                </div>
                <div className="font-semibold ">2014 / 4 - 2019 / 3</div>
                <div className="col-span-3">: Life is Tech! メンター</div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <svg className="bg-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#111827"
          d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,112C672,96,768,160,864,154.7C960,149,1056,75,1152,90.7C1248,107,1344,213,1392,266.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Career;
