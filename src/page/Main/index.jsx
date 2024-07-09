import React from "react";
import * as S from "./style";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <S.Container>
        <S.Logo />
        <S.Text>사용자 님, 반갑습니다. 오늘의 ABW 상태를 확인해 주세요.</S.Text>
        <Link to="/home">
          <S.Btn>
            <S.BtnText>ABW 확인하러 가기</S.BtnText>
          </S.Btn>
        </Link>
      </S.Container>
    </>
  );
};

export default Main;
