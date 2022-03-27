import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export default createGlobalStyle`
  * {  
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Poppins",serif !important;
  }
  #root {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "poppins",serif !important;
  }
  .bear-react-carousel__nav-icon{
    background-color: ${theme.colors.dark};
    opacity: .9;
    border-radius: 15px;
  }
  .sider {
    width: 343px !important;
    min-width: 343px !important;
    flex: 1 1 auto;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background-color: transparent;
  }
  .header {
    height: 86px !important;
    background-color: white;
    margin-bottom: 24px;
    padding: 0 !important;
  }
  .header-row{
    height: 100%;
    padding: 0 24px;
    box-shadow: 0px 3px 8px #60617029;

  }
  .content {
    margin-right: 16px;
    flex: 1 1 auto;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .grey-icon{
    color: #868B9A; 
    font-size: 16px;
  }
  .icon{
    font-size: 16px;
  }
  .large{
    font-size: 24px;
  }
  .small{
    font-size: 12px;
  }
  .white{
    color: #ffffff;
  }
  .red{
    color: #D90B0B;
  }
  .mb{
    margin-bottom: 5px;
  }
  .rotated{
    transform: rotate(90deg);
  }
  .purple{
    color: #6135FB;
  }
  .yellow{
    color: #FBCE5D;
  }
  .dark{
    color: #3F465D;
  }
  .blue {
    color:rgb(86,135,194);
  }
  .disabled{
    color: #222B45AD;
  }
  .layout{
    min-width: 100vw;
    max-width: 100vw;
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    background-color: #F8F7FA;
  }
  .bg{
    background-color: #F8F7FA;
  }
  .col-middle{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .col-right{
    justify-content: flex-end;
  }
  .ant-tooltip, .ant-tooltip-inner{
    padding: 0;
    border-radius: 8px;
  }
  .ant-tooltip{    
    width: auto !important;
    max-width: initial !important;
  }
  .ant-input-affix-wrapper{
    background-color: #F5F7FB;
    border-color: #F5F7FB;
    height: 42px !important;
    border-radius: 10px;
    color:#868B9A;
    .ant-input-prefix{
      margin-right: 12px;
    }
    .ant-input{
      background-color: #F5F7FB;
      color:#868B9A;
    }
  }
  .ant-drawer-body{
    padding: 38px;
  }
  .ant-switch{
    background-color: #E6F2EF;
  }
  .ant-switch-checked{
    background-color: #00D6A6;
  }
  .purple-switch{
    background-color: #6135FB;
  }

  .ant-radio .ant-radio-inner{
    border-color: #6135FB !important ;
    border-width: 2px;
  } 
  .ant-radio-disabled .ant-radio-inner{
    border-color: #C5C4C7 !important ;
  }
  .ant-radio-checked .ant-radio-inner{
    border-color: #6135FB !important ;
    border-width: 5px;
  }
  .ant-radio-checked .ant-radio-inner:after{
    background-color: white;
  }
  .ant-radio-disabled .ant-radio-inner{
    background-color: white;
  }
  .ant-input{
    background-color: #FAFBFD;
    border-color: transparent;
    border-bottom: solid 1px #D2DDEF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 11px 12px;
    color:#696F81CC;
    &::placeholder {
      font-family: Poppins,serif;
      font-size: 14px;
      line-height: 21px;
      color:#696F81CC;
      font-weight: 400;
    }
  }
  .ant-select{
    background-color: #FAFBFD;
    border-color: transparent;
    border-bottom: solid 1px #D2DDEF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 6px 12px;
    color:#696F81CC;
    .ant-select-selector{
      padding: 0!important;
      border-width: 0!important;
      background-color: transparent !important;
    }
  }
  .ant-picker{
    background-color: #FAFBFD;
    border-color: transparent;
    border-bottom: solid 1px #D2DDEF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 11px 12px;
    color:#696F81CC;
    width: 70%;
    .ant-picker-input{
      padding: 0!important;
      border-width: 0!important;
      background-color: transparent !important;
    }
    .ant-picker-clear{
      color: red !important;
    }
  }
  .Collapsible{
    width: 100%;
  }
  ::-webkit-scrollbar {
    width: 10px !important;
    height: 10px !important;
  }
  ::-webkit-scrollbar-track {
    background: #cccccc22;
  } 
  ::-webkit-scrollbar-thumb {
    background-color: #ccccccaa;
    border-radius: 20px;
  }
  .pad-small {
    @media (max-width: 768px) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`;
