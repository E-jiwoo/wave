import styled from "styled-components";
import wave from "../../assets/wave.svg";
import led_gray from "../../assets/led_gray.svg";
import abw_gray from "../../assets/abw_gray.svg";
import led_red from "../../assets/led_red.svg";
import abw_down from "../../assets/abw_down.svg";
import led_green from "../../assets/led_green.svg";
import abw_up from "../../assets/abw_up.svg";

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

export const Contain1 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 955px;
  height: 225px;
  border: solid 1px white;
  border-radius: 30px;
  background: none;
  transform: translate(-50%, -140%);
  display: flex;
  align-items: center;
`;
export const Contain2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 955px;
  height: 380px;
  border: solid 1px white;
  border-radius: 30px;
  background: none;
  transform: translate(-50%, -15%);
`;

export const Circle1 = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: white;
`;

export const CircleContain1 = styled.div`
  padding-left: 30px;
`;

export const Circle2 = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #7b7b7b;
`;

export const CircleContain2 = styled.div`
  padding-top: 30px;
  padding-left: 30px;
`;

export const Team = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  color: #ffffff;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transform: translate(-600%, -340%);
`;

export const Project = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  color: #ffffff;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transform: translate(-28%, -730%);
`;

export const Line1 = styled.div`
  position: relative;
  width: 120px;
  border: solid 1px white;
  transform: translate(-13%, 520%);
`;
export const Line2 = styled.div`
  position: relative;
  width: 120px;
  border: solid 1px white;
  transform: translate(172%, -4520%);
`;

export const TeamName = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  color: #ffffff;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transform: translate(-170%, -260%);
`;

export const ArduinoState = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  color: #ffffff;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transform: translate(-28%, -930%);
`;

export const LED = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 440px;
  height: 190px;
  border: solid 1px white;
  border-radius: 30px;
  background: none;
  transform: translate(-101%, -13%);
`;

export const ABW = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 440px;
  height: 190px;
  border: solid 1px white;
  border-radius: 30px;
  background: none;
  transform: translate(2%, -13%);
`;

const getLEDImage = (A) => {
  switch (A) {
    case 1:
      return led_green;
    case 2:
      return led_red;
    default:
      return led_gray;
  }
};

const getABWImage = (A) => {
  switch (A) {
    case 1:
      return abw_down;
    case 2:
      return abw_up;
    default:
      return abw_gray;
  }
};

export const Img1 = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 274px;
  height: 123px;
  background-image: url(${(props) => getLEDImage(props.A)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: translate(-95%, -50%);
`;

export const Img2 = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 274px;
  height: 123px;
  background-image: url(${(props) => getABWImage(props.A)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: translate(-95%, -50%);
`;

export const Led = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  color: #ffffff;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transform: translate(-7%, -420%);
`;

export const Abw = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  color: #ffffff;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transform: translate(-7%, -420%);
`;

export const Line11 = styled.div`
  position: relative;
  width: 120px;
  border: solid 1px white;
  transform: translate(155%, -2900%);
`;
export const Line22 = styled.div`
  position: relative;
  width: 120px;
  border: solid 1px white;
  transform: translate(155%, -2900%);
`;

export const LEDState = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  color: #ffffff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transform: translate(-7%, -570%);
`;

export const ABWState = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  color: #ffffff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transform: translate(-7%, -570%);
`;
