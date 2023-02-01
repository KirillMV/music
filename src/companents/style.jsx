import styled from "styled-components";

const body = styled.body`
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
`;

const container = styled.container`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`;

const wrapper = styled.wrapper`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`;
const main = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
const main__nav = styled.main__nav`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
    flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
    justify-content: space-between;
}
`;

const main__centerblock = styled.main__centerblock`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`;
const main__sidebar = styled.main__sidebar`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`;

const nav__logo = styled.nav__logo`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;
const nav__burger = styled.nav__burger`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
const nav__menu = styled.nav__menu`
  display: block;
  visibility: visible;
`;
const logo__image = styled.logo__image`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;
const burger__line = styled.burger__line`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`;
const menu__list = styled.menu__list`
  padding: 18px 0 10px 0;
`;
const menu__item = styled.menu__item`
  padding: 5px 0;
  margin-bottom: 16px;
`;

const menu__link = styled.menu__link`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
const centerblock__search = styled.centerblock__search`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const centerblock__h2 = styled.centerblock__h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;
const centerblock__filter = styled.centerblock__filter`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`;
const centerblock__content = styled.centerblock__content`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
const search__svg = styled.search__svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`;
const search__text = styled.search__text`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  :-webkit-input-placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  :-ms-input-placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  :placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
const filter__title = styled.filter__title`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
const filter__button = styled.filter__button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
const content__title = styled.content__title`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
const content__playlist = styled.content__playlist`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
overflow-y: auto;

`;
const playlist-title__col = styled.playlist-title__col`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

const col01 = styled.col01`
width: 447px;
`;
const col02  = styled.col02`
width: 321px;
`;
const col03 = styled.col03`
width: 245px;
`;
const ccol04  = styled.col04`
width: 60px;
  text-align: end;
  `;

  const playlist__item  = styled.playlist__item`
  width: 100%;
  display: block;
  margin-bottom: 12px;
  `;
  const playlist__track  = styled.playlist__track`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
    `;
    const track__title = styled.track__title`
    display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 447px;
      `;
      const track__title-image = styled.track__title-image`
      width: 51px;
      height: 51px;
      padding: 16px;
      background: #313131;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      margin-right: 17px;
        `;
        const track__title-svg  = styled.track__title-svg`
        width: 18px;
        height: 17px;
        fill: transparent;
        stroke: #4E4E4E;
          `;
          const track__title-link   = styled.track__title-link `
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #FFFFFF;
            `;
            const track__title-span  = track__title-span `
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #4E4E4E;
          
              `;
              const track__author  = track__author`
              width: 321px;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: start;
              -ms-flex-pack: start;
              justify-content: flex-start;
                `;
                const track__author-link  = track__author-link `
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #FFFFFF;
                text-align: left;
                  `;

// export default Swrapper;
