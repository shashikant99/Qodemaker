import React from "react";
import Styled from "styled-components";
function Loader() {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Loader;
const Wrapper = Styled.div`
    .wrapper{
  display: flex;
  position: fixed;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  justify-content: center;
  align-items: center;
  z-index:9999999;
}

.loader{
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 102px;
  height: 40px;
  perspective: 150px;
}

.loader > div {
  height: 100%;
  width: 4px;
  background-color: #333333;
  animation: flip 2.5s linear infinite;
}

@keyframes flip{
  to {
    transform: rotateX(360deg);
  }
}

.loader > div:nth-child(2){
  animation-delay: 0.1s;
}

.loader > div:nth-child(3){
  animation-delay: 0.2s;
}
.loader > div:nth-child(4){
  animation-delay: 0.3s;
}
.loader > div:nth-child(5){
  animation-delay: 0.4s;
}
.loader > div:nth-child(6){
  animation-delay: 0.5s;
}
.loader > div:nth-child(7){
  animation-delay: 0.6s;
}
.loader > div:nth-child(8){
  animation-delay: 0.7s;
}
.loader > div:nth-child(9){
  animation-delay: 0.8s;
}
.loader > div:nth-child(10){
  animation-delay: 0.9s;
}
.loader > div:nth-child(11){
  animation-delay: 1s;
}
.loader > div:nth-child(12){
  animation-delay: 1.1s;
}
.loader > div:nth-child(13){
  animation-delay: 1.2s;
}
.loader > div:nth-child(14){
  animation-delay: 1.3s;
}
.loader > div:nth-child(15){
  animation-delay: 1.4s;
}
`;
