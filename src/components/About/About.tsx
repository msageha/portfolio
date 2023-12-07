import React from "react";
import { Fade } from "react-awesome-reveal";
import Title from "../Title/Title";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <section id="about" className="bg-slate-300">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#111827"
          fill-opacity="1"
          d="M0,288L30,266.7C60,245,120,203,180,197.3C240,192,300,224,360,224C420,224,480,192,540,197.3C600,203,660,245,720,256C780,267,840,245,900,208C960,171,1020,117,1080,133.3C1140,149,1200,235,1260,245.3C1320,256,1380,192,1410,160L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <Title title="ABOUT ME" />
      <Fade duration={1000} delay={600} className="mx-8">
        <div className="text-black md:flex md:flex-row md:justify-evenly md:items-center">
          <div className="md:w-1/3">
            <StaticImage
              // src="https://github.com/mzk622/portfolio/blob/main/src/images/profile.jpg?raw=true"
              src="../../images/profile.jpg"
              alt="profile picture"
              className="rounded-lg"
            />
            <div className="text-sm md:text-base lg:text-xl">※台湾 九份で撮影したもの</div>
          </div>
          <div className="mt-6 md:w-1/3 text-sm md:text-base lg:text-xl">
            <div className="flex my-2">
              <span className="w-1/4 font-semibold">氏名</span>
              <span className="w-3/4">珊瑚 彩主紀 (さんご みずき)</span>
            </div>
            <div className="flex my-2">
              <span className="w-1/4 font-semibold">生年月日</span>
              <span className="w-3/4">1994年 6月 22日</span>
            </div>
            <div className="flex my-2">
              <span className="w-1/4 font-semibold">mail</span>
              <span className="w-3/4">
                <a
                  className="text-black no-underline hover:underline"
                  href={`mailto:msageha+info -at- gmail.com`}
                >
                  msageha+info -at- gmail.com
                </a>
              </span>
            </div>
            <div className="flex my-2">
              <span className="w-1/4 font-semibold">趣味、嗜好</span>
              <span className="w-3/4">
                旅行、特に海外旅行が好き。
                <br />
                フランス ブルゴーニュ地方のワインが好き。
              </span>
            </div>
            <div className="flex mt-2">
              <span className="w-1/4 font-semibold">
                技術スタック
                <br />
                (業務経験)
              </span>
              <span className="w-3/4">
                言語: Python, Golang, Typescript
                <br />
                データベース: MySQL, PostgreSQL, BigQuery, Redis, Elasticsearch
                <br />
                クラウド: AWS, GCP
                <br />
                コンテナ: Docker, Kubernetes
                <br />
                分散処理: Apache Beam, Apache Spark
                <br />
                その他: Apache Airflow, Terraform, Git, CircleCI
              </span>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
