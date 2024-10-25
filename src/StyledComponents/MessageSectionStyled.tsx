import { Box, styled } from "@mui/material";
import { primaryColors } from "../mui-themes/_ThemeColors";

export const MessageSectionStyled = styled(Box)`
  height: 100%;
  .wrapperMsgMain {
    position: relative;
    display: flex;
    height: 100%;

    @media (max-width: 899px) {
      flex-wrap: wrap;
    }
    .wrapper_leftMsg {
      width: 370px;
      height: 100%;
      @media (max-width: 899px) {
        width: 100%;
        &.active {
          display: none;
        }
      }
      .innerAllInfoLeft {
        position: relative;
        background: ${primaryColors.white};
        box-shadow: 0px 1px 11.4px ${primaryColors.cmnCardBg};
        border-radius: 15px;
        height: 100%;
        .MuiInputBase-root {
          padding: 10px 14px;
          height: 40px;
        }
      }
      .chatSrch_top {
        position: relative;
        display: flex;
        padding: 30px 14px 24px;
        @media (max-width: 1299px) {
          padding: 20px 12px;
        }
        @media (max-width: 599px) {
          flex-wrap: wrap;
        }
        .searchBox {
          width: calc(100% - 109px);
          padding-right: 8px;

          @media (max-width: 599px) {
            width: 100%;
            padding: 0 0 10px;
          }
        }
        .MuiButton-containedPrimary {
          width: 109px;
          padding: 10px;
          height: 40px;
          font-size: 14px;

          @media (max-width: 599px) {
            width: 100%;
          }
        }
      }
      .topBtnTab_wrapper {
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 14px;
        button {
          min-width: auto;
          height: auto;
          font-size: 14px;
          font-weight: 600;
          padding: 0 8px 24px;
          color: ${primaryColors.color292D32};
          transition: 0.3s ease-in-out;
          background: transparent;
          &::before {
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            height: 5px;
            background: ${primaryColors.color5291D6};
            border-radius: 4px 4px 0 0;
            bottom: 0;
            opacity: 0;
            transition: 0.3s ease-in-out;
          }
          &.active {
            background: transparent;
            color: ${primaryColors.color5291D6};
            &::before {
              opacity: 1;
            }
          }
          &:hover {
            background: transparent;
            color: ${primaryColors.color5291D6};
            &::before {
              opacity: 1;
            }
          }
          &:not(:last-child) {
            margin-right: 24px;
          }
        }
      }
      .allChatList_infoWrap {
        position: relative;
        height: calc(100vh - 300px);
        overflow-y: auto;
        @media (max-width: 1299px) {
          height: calc(100vh - 260px);
        }
        @media (max-width: 599px) {
          height: calc(100vh - 261px);
        }
        &::-webkit-scrollbar {
          width: 2px;
          background: ${primaryColors.colorfdf8ff};
          border-radius: 44px;
        }

        &::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
        }

        &::-webkit-scrollbar-thumb {
          width: 6px;
          background: ${primaryColors.primary};
          border-radius: 44px;
        }

        &::-webkit-scrollbar-thumb:hover {
          background-color: ${primaryColors.primary};
        }

        .singleChatBox {
          display: flex;
          padding: 26px 17px;
          position: relative;
          transition: 0.3s ease-in-out;
          cursor: pointer;
          @media (max-width: 1299px) {
            padding: 20px 12px;
          }
          &.active {
            background: ${primaryColors.colorEDF9FF};
            &::before {
              opacity: 1;
            }
          }
          &::before {
            position: absolute;
            content: "";
            left: 0;
            height: 60px;
            width: 5px;
            background: ${primaryColors.color5291D6};
            border-radius: 0 4px 4px 0;
            top: 50%;
            transform: translateY(-50%);
            transition: 0.3s ease-in-out;
            opacity: 0;
          }
          &:hover {
            background: ${primaryColors.colorEDF9FF};
            &::before {
              opacity: 1;
            }
          }
          &:not(:last-child) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }
          figure {
            width: 55px;
            line-height: 0;
            height: 52px;
            img {
              width: 100%;
              height: 52px;
              border-radius: 20px;
              object-fit: cover;
            }
          }
          .chatInfoBox {
            width: calc(100% - 55px);
            padding-left: 10px;
            display: flex;
            .msgTxt {
              width: calc(100% - 50px);
              padding-right: 4px;
              .userName {
                font-weight: 600;
                font-size: 14px;
                color: ${primaryColors.color292D32};
              }
              .msgtxtInfo {
                font-size: 12px;
                font-weight: 400;
                color: ${primaryColors.color7F7F7F};
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
                line-height: 1.4;
              }
            }
            .timeBox {
              .timeTxt {
                text-align: right;
                font-weight: 600;
                font-size: 11px;
                color: ${primaryColors.color3FAFBB};
                margin-bottom: 12px;
              }
              .notificationNo {
                width: 23px;
                height: 23px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: ${primaryColors.colorF15F5F};
                border: 1px solid ${primaryColors.white};
                text-align: center;
                font-size: 10px;
                font-weight: 700;
                text-align: center;
                margin-left: auto;
                color: ${primaryColors.white};
              }
            }
          }
        }
      }
    }
    .wrapper_rightMsg {
      width: calc(100% - 305px);
      padding-left: 20px;
      height: 100%;
      @media (max-width: 1299px) {
        padding-left: 12px;
      }

      @media (max-width: 899px) {
        width: 100%;
        display: none;
        padding: 0;
        &.active {
          display: block;
        }
      }
      .wrapper_mainMsgBox {
        position: relative;
        background: ${primaryColors.white};
        box-shadow: 0px 1px 11.4px ${primaryColors.cmnCardBg};
        border-radius: 15px;
        height: 100%;
      }
      .topMsgBarChat {
        display: flex;
        align-items: center;
        padding: 5px 30px;
        border-radius: 20px;
        /* background-color: blue; */
        border-bottom: 1px solid ${primaryColors.colorF6F6F6};
        @media (max-width: 1299px) {
          padding: 20px 16px;
        }
        @media (max-width: 599px) {
          padding: 16px 12px;
        }
        .backMobileBtn {
          display: none;
          @media (max-width: 899px) {
            display: flex;
            align-items: center;
            width: 32px;
            height: 32px;
            background: linear-gradient(
              219.52deg,
              #5290d6 7.71%,
              #43a9c0 93.32%
            );
            border-radius: 8px;
            min-width: auto;
            margin-right: 10px;
            &:hover {
              background: ${primaryColors.black};
            }
          }
        }
        figure {
          width: 75px;
          height: 70px;
          line-height: 0;
          @media (max-width: 899px) {
            width: 60px;
            height: 60px;
            min-width: 60px;
          }
          img {
            width: 100%;
            height: 70px;
            object-fit: cover;
            border-radius: 20px;
            @media (max-width: 899px) {
              border-radius: 10px;
              height: 60px;
            }
          }
        }
        .infoName {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: calc(100% - 75px);
          padding-left: 13px;

          @media (max-width: 899px) {
            padding-left: 10px;
            width: calc(100% - 60px);
          }
          .textOnly {
            .userName {
              font-weight: 600;
              font-size: 16px;
              color: ${primaryColors.color292D32};
              margin-bottom: 6px;
              line-height: 1;

              @media (max-width: 899px) {
                margin-bottom: 2px;
                line-height: 1;
              }
            }
            .status {
              font-weight: 600;
              font-size: 14px;
              color: ${primaryColors.color5291D6};
              line-height: 1;
            }
          }
          button {
            padding: 0;
            min-width: auto;
            min-height: auto;
            background: transparent;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${primaryColors.tertiaryFont};
            &:hover {
              background: ${primaryColors.black};
              color: ${primaryColors.white};
            }
          }
        }
      }
      .innerAllMsg_mainWrap {
        position: relative;
        padding: 45px 29px 30px;
        height: calc(100vh - 350px);
        overflow-y: auto;
        @media (max-width: 1299px) {
          padding: 30px 16px 20px;
          height: calc(100vh - 310px);
        }
        @media (max-width: 599px) {
          padding: 16px 12px;
          height: calc(100vh - 280px);
        }
        &::-webkit-scrollbar {
          width: 2px;
          background: ${primaryColors.colorfdf8ff};
          border-radius: 44px;
        }

        &::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
        }

        &::-webkit-scrollbar-thumb {
          width: 6px;
          background: ${primaryColors.primary};
          border-radius: 44px;
        }

        &::-webkit-scrollbar-thumb:hover {
          background-color: ${primaryColors.primary};
        }

        .mainMsg_all {
          position: relative;
          &:not(:last-child) {
            margin-bottom: 58px;

            @media (max-width: 899px) {
              margin-bottom: 36px;
            }
          }
          .startDate {
            text-align: center;
            font-size: 13px;
            font-weight: 700;
            color: ${primaryColors.color292D32};
            margin-bottom: 30px;

            @media (max-width: 899px) {
              margin-bottom: 20px;
            }
            @media (max-width: 599px) {
              margin-bottom: 10px;
            }
          }
        }
        .msgLising_chat {
          position: relative;
          .singleMsgBox {
            position: relative;
            display: flex;
            align-items: flex-end;
            padding-top: 8px;
            &:not(:last-child) {
              margin-bottom: 30px;

              @media (max-width: 899px) {
                margin-bottom: 20px;
              }
            }
            .dateTxt {
              color: ${primaryColors.color7F7F7F};
              font-size: 13px;
              font-weight: 400;

              @media (max-width: 899px) {
                font-size: 11px;
              }
            }
            .threDotButton {
              position: absolute;
              top: 0;
              width: auto;
              min-width: auto;
              padding: 0;
              height: auto;
              background: transparent;
              right: 0;
              color: ${primaryColors.tertiaryFont};
              &:hover {
                opacity: 0.7;
              }
            }
            figure {
              width: 55px;
              line-height: 0;
              height: 52px;
              min-width: 55px;
              @media (max-width: 599px) {
                width: 40px;
                height: 40px;
                min-width: 40px;
              }
              img {
                width: 100%;
                height: 52px;
                border-radius: 20px;
                @media (max-width: 899px) {
                  border-radius: 10px;
                }
                @media (max-width: 599px) {
                  height: 40px;
                  border-radius: 8px;
                }
              }
            }
            &.sndr {
              padding-right: 10px;

              @media (max-width: 899px) {
                padding-right: 6px;
              }
              .innerChatTxt {
                border-radius: 30px 30px 30px 10px;
                background: ${primaryColors.colorEDF9FF};
                padding: 20px 26px;
                display: inline-flex;
                @media (max-width: 899px) {
                  padding: 16px 12px;
                  border-radius: 20px 20px 20px 6px;
                }
                @media (max-width: 599px) {
                  padding: 12px 10px;
                  border-radius: 10px 10px 10px 6px;
                }
                p {
                  max-width: 634px;
                }
              }
              .msgTxtBox {
                /* max-width: 860px; */
                padding: 0 15px;
                @media (max-width: 899px) {
                  padding: 0px 10px;
                }
                @media (max-width: 599px) {
                  padding: 0px 6px;
                }
              }
            }
            &.recvr {
              flex-direction: row-reverse;
              padding-right: 10px;

              @media (max-width: 899px) {
                padding-right: 6px;
              }
              .innerChatTxt {
                border-radius: 30px 30px 10px 30px;
                background: ${primaryColors.colorEDF4F8};
                padding: 20px 26px 20px 40px;
                @media (max-width: 899px) {
                  padding: 16px 12px;
                  border-radius: 20px 20px 6px 20px;
                }
                @media (max-width: 599px) {
                  padding: 12px 10px;
                  border-radius: 10px 10px 6px 10px;
                }
                p {
                  max-width: 566px;
                  margin: 0 0 0 auto;
                }
              }
              .msgTxtBox {
                max-width: 640px;
                padding: 0 3px 0 15px;

                @media (max-width: 899px) {
                  padding: 0 3px 0 10px;
                }
              }
            }
            .msgTxtBox {
              /* width: 100%; */
              .innerChatTxt {
                p {
                  font-size: 12px;
                  font-weight: 400;
                  color: ${primaryColors.color7F7F7F};
                }
              }
            }
          }
        }
      }
    }
  }
  .allMsgInfoMain {
    position: relative;
    height: 100%;
    padding-bottom: 140px;

    @media (max-width: 1299px) {
      padding-bottom: 120px;
    }
    @media (max-width: 899px) {
      padding-bottom: 80px;
    }
  }
  .wrapper_searchBtmFld {
    position: absolute;
    left: 10px;
    right: 10px;
    padding: 10px 40px;
    bottom: 30px;

    @media (max-width: 1299px) {
      bottom: 10px;
      padding: 10px 16px;
    }
    @media (max-width: 599px) {
      bottom: 10px;
      padding: 10px 0;
    }
    .MuiInputBase-root {
      position: relative;
      padding-right: 240px;
      border: 1px solid rgba(168, 206, 248, 0.22);
      @media (max-width: 899px) {
        padding-right: 160px;
      }
      @media (max-width: 599px) {
        padding-right: 140px;
      }
      input {
        font-size: 13px;

        @media (max-width: 899px) {
          font-size: 16px;
        }
      }
    }
    .btnWRap {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 50%;
      transform: translateY(-50%);
      right: 50px;

      @media (max-width: 1299px) {
        right: 30px;
      }
      @media (max-width: 899px) {
        right: 24px;
      }
      @media (max-width: 599px) {
        right: 4px;
      }
      .cmnBtnBg {
        min-width: auto;
        padding: 0;
        margin-right: 25px;
        position: relative;
        background: transparent;

        @media (max-width: 899px) {
          margin-right: 10px;
        }
        input {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          appearance: none;
          opacity: 0;
          font-size: 0;
        }
        &:hover {
          opacity: 0.7;
          background: transparent;
        }
      }
      .MuiButton-containedPrimary {
        width: 76px;
        height: 40px;
        padding: 10px;
        font-size: 14px;
      }
    }
  }
`;
