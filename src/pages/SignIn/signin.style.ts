import styled from "styled-components";
import colors from "styles/constants";

export default styled.div`
  background: ${colors.darkBlue};
  padding: 75px 0;
  min-height: 100vh;

  .signin__title {
    font-size: 35px;
    font-weight: 500;
    color: ${colors.white};
    margin: 0 0 18px 0;
  }

  .signin__logo {
    margin: 0 auto 71px;
    display: block;
  }

  .signin__form-btn {
    margin-top: 28px;
  }

  @media screen and (max-width: 1600px) {
    & {
      padding: 30px 0;
    }
    .signin__logo {
      width: 300px;
      height: 300px;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 800px) {
    & {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .signin__logo,
    .signin__links {
      display: none;
    }
    .signin__form-container {
      max-width: 600px;
    }
  }

  @media screen and (max-width: 600px) {
    .signin__form-container {
      max-width: 246px;
    }

    .signin__form-wrapper {
      gap: 13px;
    }

    .signin__title {
      margin: 0 0 26px 0;
    }

    .signin__form-btn {
      margin-top: 26px;
    }
  }
`;
