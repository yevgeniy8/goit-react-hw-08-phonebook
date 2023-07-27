import styled from '@emotion/styled';

export const ContactListWrapper = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ContactListItem = styled.li`
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 6px;
    margin-bottom: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 26px;
`;

export const ContactName = styled.p`
    margin-bottom: 10px;
`;

export const ContactButton = styled.button`
    border-radius: 4px;
    padding: 5px 10px;
    background: rgb(6, 106, 45);
    color: white;
    font-size: 18px;
	cursor: pointer;
`;