import styled from 'styled-components';

const Item = styled.div`
  background: #333333;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: inline-block;
  margin-right: 10px;
  min-height:400px;
  img {
    width: 100%;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .image-container {
    position: relative;
  }
  .char-name-container {
    position: absolute;
    background: rgba(0,0,0,0.6);
    bottom: 0;
    width: 100%;
    color: #ccc;
  }
  ul {
    padding: 0 20px;
    list-style: none;
    li {
      font-size: 1.2rem;
      border-bottom: 1px solid ${props => props.theme.lightgrey};
      padding: 10px 0;
    }
    .desc-label {
      text-transform: uppercase;
      color: ${props => props.theme.offWhite};
    }
    .desc-value {
      color: ${props => props.theme.terracotta};
      float: right;
      margin-right: 20px;
    }
  }
  }`;

export default Item;