import React, { useContext, useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title/Title";
import { StaticImage } from "gatsby-plugin-image";
const About = () => {
  return (
    <>
      <section id="about" className="bg-slate-300 text-black items-center mx-auto ">
        <div className="">
          <Title title="ABOUT ME" />

          <div className=" py-20 mx-20 grid grid-cols-2 gap-8">
            <Fade duration={1000} delay={600}>
              <div className="mx-8 col-span-1">
                <StaticImage src="../../images/profile.jpg" alt="profile picture" />
              </div>
              <div className="col-span-1">
                <div className="grid grid-cols-4 gap-4">
                  <div className="font-semibold ">氏名</div>
                  <div className="col-span-3">: 珊瑚 彩主紀 (さんご みずき)</div>
                  <div className="font-semibold ">生年月日</div>
                  <div className="col-span-3">: 1994年 6月 22日</div>
                  <div className="font-semibold ">mail</div>
                  <div className="col-span-3">
                    {": "}
                    <a
                      className="text-black no-underline hover:underline"
                      href={`mailto:msageha+info -at- gmail.com`}
                    >
                      msageha+info -at- gmail.com
                    </a>
                  </div>
                  <div className="font-semibold ">趣味</div>
                  <div className="col-span-3">
                    : 旅行、特に海外旅行が好き。
                    <br />
                    ワインが好きで特にフランスのブルゴーニュ地方のものが好き。
                  </div>
                  <div className="font-semibold ">
                    技術スタック
                    <br />
                    (業務経験3年以上)
                  </div>
                  <div className="col-span-3">
                    : Python, Golang, Typescript
                    <br />
                    MySQL, PostgreSQL, BigQuery
                    <br />
                    AWS, GCP, Docker, Kubernetes
                  </div>
                  <div className="col-span-4">左の写真は、台湾 九份で撮影したものです。</div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <svg className="bg-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#CBD5E1"
          d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,112C672,96,768,160,864,154.7C960,149,1056,75,1152,90.7C1248,107,1344,213,1392,266.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default About;
