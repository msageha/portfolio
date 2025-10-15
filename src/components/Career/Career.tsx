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
      <Title title="Career" />
      <Fade duration={1000} delay={600} className="md:flex md:justify-center">
        <SubTitle title="経歴" />
        <div className="md:w-1/2 2xl:w-1/3">
          <div className="flex my-2">
            <div className="w-2/5 font-semibold">2023 / 11 - 現在</div>
            <a
              href="https://sakana.ai/"
              target="_blank"
              aria-label="SakanaAI Inc."
              className="w-3/5 no-underline hover:underline"
            >
              <div>Sakana AI株式会社</div>
            </a>
          </div>
          <div className="flex my-2">
            <div className="w-2/5 font-semibold">2025 / 8 - 現在</div>
            <a
              href="https://dope-inc.com/"
              target="_blank"
              aria-label="Dope Inc."
              className="w-3/5 no-underline hover:underline"
            >
              <div>株式会社Dope 代表取締役</div>
            </a>
          </div>
          <div className="flex my-2">
            <div className="w-2/5 font-semibold">2021 / 5 - 現在</div>
            <a
              href="https://aidaptive.com/about/"
              target="_blank"
              aria-label="JarvisML Inc."
              className="w-3/5 no-underline hover:underline"
            >
              <div>JarvisML Inc.</div>
            </a>
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
            <span className="w-2/5 font-semibold">2024 / 5 - 現在</span>
            <span className="w-3/5">株式会社テクノフェイス 業務委託</span>
          </div>
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
