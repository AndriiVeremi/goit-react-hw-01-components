import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 400px;
  height: 170px;
  background-color: #fff;
  margin-bottom: 50px;
`;

export const Titles = styled.h2`
  text-align: center;
  color: dimgrey;
  font-size: 25px;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 10px;
`;

export const StatsItem = styled.li`
  height: 40px;
  width: 40px;
  display: grid;
  column-gap: 20px;
  padding: 20px;
  justify-items: center;
`;

export const Label = styled.span`
  color: #fff;
  margin-bottom: 5px;
  text-shadow: 1px 1px 1px #333;
`;

export const Percentage = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 1px 1px 1px #333;
`;
