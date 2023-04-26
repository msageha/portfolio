import React, { useContext, useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";

const PublishedPapre = () => {
  const Paper = ({ title, author, paper }: { title: string; author: any; paper: string }) => {
    return (
      <div className="mb-8">
        <h4>{title}</h4>
        <div>{author}</div>
        <div>{paper}</div>
      </div>
    );
  };
  return (
    <Fade duration={1000} delay={600} className="flex justify-center">
      <SubTitle title="Published paper" />

      <div className="w-1/2">
        <Paper
          title="Auto Content Moderation in C2C e-Commerce"
          author={
            <>
              Shunya Ueta, Suganprabu Nagarajan,
              <span className="underline">Mizuki Sango</span>
            </>
          }
          paper="2020 USENIX Conference on Operational Machine Learning (OpML’20)"
        />
        <Paper
          title="外界一人称と二人称を考慮する日本語述語項構造解析の分野適応"
          author={
            <>
              <span className="underline">珊瑚 彩主紀</span>
              {", 西川 仁, 徳永 健伸"}
            </>
          }
          paper="第5回自然言語処理シンポジウム（第238回自然言語処理研究発表会）"
        />
        <Paper
          title="Effectiveness of Domain Adaptation in Japanese Predicate-ArgumentStructure Analysis"
          author={
            <>
              <span className="underline">Mizuki Sango</span>
              {", Hitoshi Nishikawa, Takenobu Tokunaga"}
            </>
          }
          paper="The 32nd Pacific Asia Conference on Language(PACLIC 32)"
        />
        <Paper
          title="スマートスピーカーにおける文章読み上げの課題とその解決
                    "
          author={
            <>
              <span className="underline">珊瑚 彩主紀</span>
              {", 佐藤 敏紀, 植田 禎子, 橋本 泰一"}
            </>
          }
          paper="言語処理学会第24回年次大会(NLP2018)"
        />
        <Paper
          title="Monitoring Geographical Entities with Temporal Awareness in Tweets"
          author={
            <>
              {"Koji Matsuda, "}
              <span className="underline">Mizuki Sango</span>
              {", Naoaki Okazaki, Kentaro Inui"}
            </>
          }
          paper="International Conference on Computational Linguistics and Intelligent Text Processing (CICLing 2017)"
        />
        <Paper
          title="ツイート中の地理情報に対する時間的極性の自動推定"
          author={
            <>
              <span className="underline">珊瑚 彩主紀</span>
              {", 松田耕史, 岡崎直観, 乾健太郎"}
            </>
          }
          paper="2016年度 人工知能学会全国大会（第30回）"
        />
        <Paper
          title="ジャーナル"
          author={
            <>
              <span className="underline">珊瑚 彩主紀</span>
              {", 西川 仁, 徳永 健伸"}
            </>
          }
          paper="
                    会誌「自然言語処理」"
        />
      </div>
    </Fade>
  );
};

const Research = () => {
  return (
    <>
      <section id="publish" className="bg-slate-300 text-black items-center mx-auto ">
        <Title title="RESEARCH" />
        {/* 
                <Fade duration={1000} delay={600}>
                    <div className="mx-24">
                        <div className="mb-4">
                            {
                                "2013年4月、東北大学工学部入学。2017年3月卒業。卒業研究は、篠原、吉仲研究室にて、ミスマッチを許容した順序保存照合問題（Order-preserving pattern matching）の高速化。"
                            }
                        </div>
                        <div className="mb-4">
                            {
                                "同年4月、東京工業大学情報理工学院、徳永研究室入学。自然言語処理、その中でも特に述語項構造解析、及び、分野依存、分野適応の研究。2019年3月修士課程終了。"
                            }
                        </div>
                        <div className="mb-4">
                            {
                                "同年4月、東京工業大学情報理工学院、徳永研究室 博士課程進学。自然言語処理、その中でも特に述語項構造解析、及び、分野依存、分野適応の研究に従事。2023年3月、一身上の都合により、博士課程を中退。"
                            }
                        </div>
                        <div className="mb-4">
                            {
                                "その後、仕事ではe-Commerce向けの不正出品やアンチマネーロンダリングといった不正検知を行うための機械学習モデルの開発に従事。"
                            }
                        </div>
                        <div className="mb-4">
                            {
                                "現在は、同じくe-Commerceにおける売上・需要予測モデルや、Personalized-Ranking、リコメンデーションモデルの開発。"
                            }
                        </div>
                    </div>
                </Fade> */}

        <br />
        <br />
        <PublishedPapre />
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

export default Research;
