import styled from '@emotion/styled';

export const Section = styled.section`
    padding: 30px;
    background-color: #d0c1c1;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h2`
    font-size: 18px;
    color: black;
    text-align: center;
    margin-bottom: 10px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
`;

export const Item = styled.li`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.span``;

export const Percentage = styled.span`
    font-size: 18px;
    font-weight: 700;
`;