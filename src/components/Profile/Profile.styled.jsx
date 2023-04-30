import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #fff;
  border: 2px solid #363434;
  border-radius: 10px;
  width: 300px;
  margin-bottom: 50px;
`;

export const Description = styled.div`
    
`
export const Avatar = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 50px;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 25px;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  color: black;
  margin-bottom: 10px;
`;

export const Tags = styled.p`
  text-align: center;
  color: dimgrey;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Locations = styled.p`
  text-align: center;
  color: dimgrey;
  font-size: 20px;
  margin-bottom: 25px;
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  border-top: 1px solid #363434;
  background-color: #f3f6f9;
  margin: 0;
  padding: 0;
  justify-content: center;
  border-radius: 10px;
`;

export const StatsItem = styled.li`
  display: grid;
  column-gap: 20px;
  padding: 20px;
  justify-items: center;
`;

export const Label = styled.span`
  font-size: 15px;
  color: dimgrey;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;