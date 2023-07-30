import styled from '@emotion/styled';

export const FormLogin = styled.form`
    width: 350px;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 5px;
    padding: 40px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: rgb(105, 186, 221);
`;

export const LabelLogin = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    gap: 5px;
`;

export const ButtonLogin = styled.button`
    border-radius: 4px;
    padding: 5px 10px;
    background: rgb(45, 88, 227);
    color: white;
    font-size: 18px;
    cursor: pointer;
`;

export const InputLogin = styled.input`
    border-radius: 5px;
    font-size: 20px;
    padding: 10px;
`;

export const H2 = styled.h2`
    margin-bottom: 15px;
    text-align: center;
    color: #3b3737;
`;
