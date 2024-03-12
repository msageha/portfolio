import React from "react";
import { Fade } from "react-awesome-reveal";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";

const Career = () => {
  return (
    <section
      id="career"
      className="bg-gray-900 text-white text-sm md:text-base lg:text-xl text-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#CBD5E1"
          fill-opacity="1"
          d="M0,192L30,202.7C60,213,120,235,180,245.3C240,256,300,256,360,256C420,256,480,256,540,224C600,192,660,128,720,128C780,128,840,192,900,208C960,224,1020,192,1080,202.7C1140,213,1200,267,1260,266.7C1320,267,1380,213,1410,186.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      <Title title="Career" />
      <Fade duration={1000} delay={600} className="md:flex md:justify-center">
        <SubTitle title="経歴" />
        <div className="md:w-1/2 2xl:w-1/3">
          <div className="flex my-2">
            <div className="w-2/5 font-semibold">2023 / 11 - 現在</div>
            <div className="w-3/5">株式会社Dope 代表取締役</div>
          </div>
          <div className="flex my-2">
            <div className="w-2/5 font-semibold">2021 / 5 - 現在</div>
            <div className="w-3/5">JarvisML.inc</div>
          </div>
          <div className="flex my-2">
            <span className="w-2/5 font-semibold">2020 / 6 - 2021 / 4</span>
            <span className="w-3/5">株式会社スパイスコード</span>
          </div>
          <div className="flex my-2">
            <span className="w-2/5 font-semibold">2019 / 4 - 2020 / 5</span>
            <span className="w-3/5">株式会社メルカリ</span>
          </div>
          <div className="flex my-2">
            <span className="w-2/5 font-semibold">2019 / 4 - 2023 / 3</span>
            <span className="w-3/5">東京工業大学 博士課程(中退)</span>
          </div>
          <div className="flex my-2">
            <span className="w-2/5 font-semibold">2017 / 4 - 2019 / 3</span>
            <span className="w-3/5">東京工業大学 修士課程(修了)</span>
          </div>
          <div className="flex my-2">
            <span className="w-2/5 font-semibold">2013 / 4 - 2017 / 3</span>
            <span className="w-3/5">東北大学 工学部(卒業)</span>
          </div>
        </div>
      </Fade>
      <br />
      <br />
      <Fade duration={1000} delay={600} className="md:flex md:justify-center">
        <SubTitle title="インターン / 業務委託 / その他" />
        <div className="md:w-1/2 2xl:w-1/3">
          <div className="flex my-2">
            <span className="w-2/5 font-semibold">2021 / 5 - 現在</span>
            <span className="w-3/5">株式会社アイモバイル 業務委託</span>
          </div>
          <div className="flex my-2">
            <span className="w-2/5 font-semibold">2017 / 9</span>
            <span className="w-3/5">株式会社リクルートホールディングス インターン</span>
          </div>
          <div className="flex my-2">
            <span className="w-2/5 font-semibold">2017 / 8 - 2018 / 3</span>
            <span className="w-3/5">LINE株式会社 インターン・アルバイト</span>
          </div>
          <div className="flex my-2">
            <span className="w-2/5 font-semibold">2017 / 5 - 2018 / 3</span>
            <span className="w-3/5">SecHack365 1期生</span>
          </div>
          <div className="flex my-2">
            <span className="w-2/5 font-semibold">2015 / 8 - 2016 / 3</span>
            <span className="w-3/5">トロワ工科大学 (Université de technologie de Troyes) 留学</span>
          </div>
          <div className="flex my-2">
            <span className="w-2/5 font-semibold">2015 / 7</span>
            <span className="w-3/5">
              シンガポール国立大学 (National University of Singapore) 留学
            </span>
          </div>
          <div className="flex">
            <span className="w-2/5 font-semibold">2014 / 4 - 2019 / 3</span>
            <span className="w-3/5">Life is Tech! メンター</span>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Career;
