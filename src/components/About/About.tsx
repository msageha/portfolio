import React from "react";
import { Fade } from "react-awesome-reveal";
import Title from "../Title/Title";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const About: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteMetaData {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  const image = data.file.childImageSharp.gatsbyImageData;

  return (
    <section id="about" className="bg-slate-300">
      <Title title="About me" />
      <Fade duration={1000} delay={600} className="mx-8">
        <div className="text-black md:flex md:flex-row md:justify-evenly md:items-center">
          <div className="md:w-1/3">
            <GatsbyImage
              image={image}
              alt="Profile picture of Mizuki Sango in Tokyo, Japan"
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
                  href="mailto:msageha+info@gmail.com"
                  aria-label="Send Email"
                >
                  msageha+info -at- gmail.com
                </a>
              </span>
            </div>
            <div className="flex my-2">
              <span className="w-1/4 font-semibold">趣味、嗜好</span>
              <span className="w-3/4">
                オンラインゲーム、旅行。
                <br />
                海外は20ヶ国以上。
                <br />
                フランス ブルゴーニュ地方のワインが好き。
              </span>
            </div>
            <div className="flex mt-2">
              <span className="w-1/4 font-semibold">
                技術スタック
                <br />
                (業務経験
                <br />
                1年以上)
              </span>
              <span className="w-3/4">
                言語: Python, Golang, Typescript, Dart(Flutter)
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
