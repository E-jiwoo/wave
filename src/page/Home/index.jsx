import React, { useState, useEffect } from "react";
import * as S from "./style";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [A, setA] = useState(2);

  const renderArduinoState = () => {
    if (A === 0) return "연결 중입니다...";
    if (A === 1) return "현재 안전합니다.";
    if (A === 2) return "현재 위험합니다. ABW가 활성화 중입니다.";
  };
  const renderLEDState = () => {
    if (A === 0) return "현재 상태를 파악 중입니다...";
    if (A === 1) return "Green LED ON";
    if (A === 2) return "Red LED ON";
  };
  const renderABWState = () => {
    if (A === 0) return "현재 상태를 파악 중입니다...";
    if (A === 1) return "ABW 비활성화 상태입니다.";
    if (A === 2) return "ABW 활성화 상태입니다.";
  };

  return (
    <>
      <S.Container>
        <S.Contain1>
          <S.CircleContain1>
            <S.Circle1 />
          </S.CircleContain1>
          <S.Team>파 랑</S.Team>
          <S.Line1 />
          <S.TeamName>김동현 김은안 김혜미 박강은 이지우</S.TeamName>
        </S.Contain1>
        <S.Contain2>
          <S.CircleContain2>
            <S.Circle2 />
          </S.CircleContain2>
          <S.Project>Arduino Nano</S.Project>
          <S.Line2 />
          <S.ArduinoState>{renderArduinoState()}</S.ArduinoState>
          <S.LED>
            <S.Img1 A={A} />
            <S.Led>LED State</S.Led>
            <S.Line11 />
            <S.LEDState>{renderLEDState()}</S.LEDState>
          </S.LED>
          <S.ABW>
            <S.Img2 A={A} />
            <S.Abw>ABW State</S.Abw>
            <S.Line22 />
            <S.ABWState>{renderABWState()}</S.ABWState>
          </S.ABW>
        </S.Contain2>
      </S.Container>
    </>
  );
};

export default Home;
