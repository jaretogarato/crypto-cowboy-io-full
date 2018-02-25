import styled from 'styled-components';
// import '../css/fonts.css';
// ------------ v1 ---------------
export const HeroHeader = styled.div`
  ${'' /* z-index:1000 !important; */}
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  background-image: url(${ props => props.bgImage}) !important;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  min-height: 30em;
  padding: 0;
  margin: 0;
  color: '#FFF';

  @media (max-width: 64em) {
    top: 10%;
    width: 120%;
    margin-left: -10%;
    padding: 0 10%;
  }

  @media (max-width: 50em) {
    top: 20%;
    width: 160%;
    margin-left: -30%;
    padding: 0 30%;
  }
`
export const HhTextContainer = styled.div`
  width: 98%;
  max-width:98%;
  min-width:51%;
  margin: 0;
  padding: 5% 0 0 6%;
  text-align: center;

  @media (max-width: 50em) {
    padding: 7% 0 0 7%;
  }
`
export const HhH1 = styled.div`
  width:95%;
  max-width:95%;
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 5em;
  line-height: 1em;
  padding-bottom: 1em;
`
export const HhH2 = styled.div`
  width: 95%;
  max-width:95%;
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 3em;
  line-height: 1em;
  padding-bottom: 0.8em;
`

export const NavStyled = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10000;
  background:rgba(255, 255, 255 ,0.2);
  width: 100%;
  padding: 10px 0;
  text-align: right;
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const FlexContent = styled.div`
  flex: 1 0 auto;
  border-top: solid 1px;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`
export const FooterStyled = styled.div`
  flex-shrink: 0;
`


export const HeroHeaderTextContainerLeft = styled.div`
  z-index: 2;
  position: relative;

  /* Internet Explorer 10 */
  display:-ms-flexbox;
  -ms-flex-pack:start;
  -ms-flex-align:start;

  /* Firefox */
  display:-moz-box;
  -moz-box-pack:start;
  -moz-box-align:start;

  /* Safari, Opera, and Chrome */
  display:-webkit-box;
  -webkit-box-pack:start;
  -webkit-box-align:start;

  /* W3C */
  display:box;
  box-pack:start;
  box-align:start;

  display: block;
  min-height: 10em;
  overflow: hidden;
  margin: 0;
  padding: 5% 0 0 6%;
  text-align:left;

  :after {
    content: ' ';
    clear: both;
    display: table;
  }

  @media (max-width: 50em) {
    padding: 7% 0 0 7%;
  }
`
export const HeroHeaderTextContainerRight = styled.div`
  z-index: 2;
  position: relative;

  /* Internet Explorer 10 */
  display:-ms-flexbox;
  -ms-flex-pack:end;
  -ms-flex-align:end;

  /* Firefox */
  display:-moz-box;
  -moz-box-pack:end;
  -moz-box-align:end;

  /* Safari, Opera, and Chrome */
  display:-webkit-box;
  -webkit-box-pack:end;
  -webkit-box-align:end;

  /* W3C */
  display:box;
  box-pack:end;
  box-align:end;

  min-height: 10em;
  overflow: hidden;
  margin: 0;
  padding: 0 6% 2% 0;
  text-align: right;
  vertical-align: bottom !important;

  :after {
    content: ' ';
    clear: both;
    display: table;
  }

  @media (max-width: 50em) {
    padding: 0 7% 7% 0;
  }
`
export const HeroHeaderH1LowerRight = styled.h1`
  position: relative;
  color: white;
  display: inline-block;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 3em;
  text-align: right !important;
  padding-right: 6% !important;
  vertical-align: bottom !important;

  ${'' /* @media (max-width: 50em) {
    font-size: 2em;
  } */}
`
export const HeroHeaderH1UpperLeft = styled.h1`
  position: relative;
  color: white;
  display: block;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 3em;
  text-align: left !important;
  padding-left: 6%;
  padding-top: 5%;

  ${'' /* @media (max-width: 50em) {
    font-size: 2em;
  } */}
`
