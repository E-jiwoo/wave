import styled from "styled-components";
import wave from "../../assets/wave.svg";
import logo from "../../assets/logo.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${wave});
  background-size: cover;
  background-position: center;
  overflow: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 274px;
  height: 123px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: translate(-50%, -150%);
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: #ffffff;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transform: translate(-50%, 200%);
`;

export const Btn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 240px;
  height: 66px;
  border: solid 3px white;
  background: none;
  transform: translate(-50%, 250%);
`;
export const BtnText = styled.p`
  position: relative;
  color: #ffffff;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
