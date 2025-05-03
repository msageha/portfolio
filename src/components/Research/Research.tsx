import React, { useContext, useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";

interface PaperProps {
  title: string;
  author: React.ReactNode;
  paper: string;
}

const Paper: React.FC<PaperProps> = ({ title, author, paper }) => {
  return (
    <div className="mb-12">
      <h4>{title}</h4>
      <div>{author}</div>
      <div>{paper}</div>
    </div>
  );
};

const PublishedPapre = () => {
  return (
    <Fade duration={1000} delay={600} className="mx-8 flex justify-center">
      <SubTitle title="執筆論文" />
      <div className="md:w-1/2 2xl:w-1/3 text-sm md:text-base lg:text-xl">
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
          title="スマートスピーカーにおける文章読み上げの課題とその解決"
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
    <section id="publish" className="bg-slate-300 text-black mx-auto">
      <Title title="成果" />
      <Fade duration={1000} delay={600} className="mx-8 flex justify-center">
        <SubTitle title="特許" />
        <div className="md:w-1/2 2xl:w-1/3 text-sm md:text-base lg:text-xl">
          <div className="mb-12">
            <a
              className="text-black no-underline hover:underline"
              href="https://patents.google.com/patent/JP2021189670A"
            >
              <h4>プログラム、情報処理方法、及び情報処理装置</h4>
              <div>株式会社メルカリ</div>
              <div>
                新井 康平, 本間 和尊, 東原 秀亮, 櫻木 善将,{" "}
                <span className="underline">珊瑚 彩主紀</span>, 紫藤 佑介
              </div>
            </a>
          </div>
          <div className="mb-12">
            <a
              className="text-black no-underline hover:underline"
              href="https://patents.google.com/patent/JP2021092890A"
            >
              <h4>端末装置、データ共有方法及びプログラム</h4>
              <div>株式会社メルカリ</div>
              <div>
                <span className="underline">珊瑚 彩主紀</span>
              </div>
            </a>
          </div>
          <div className="mb-12">
            <a
              className="text-black no-underline hover:underline"
              href="https://patents.google.com/patent/JP2020009249A"
            >
              <h4>情報処理方法、情報処理装置、及びプログラム</h4>
              <div>LINE株式会社</div>
              <div>
                佐藤 敏紀, <span className="underline">珊瑚 彩主紀</span>
              </div>
            </a>
          </div>
        </div>
      </Fade>
      <PublishedPapre />
    </section>
  );
};

export default Research;
