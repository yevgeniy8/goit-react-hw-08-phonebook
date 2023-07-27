import styled from '@emotion/styled';

export const Form = styled.form`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(128, 201, 135);
    box-shadow: gray 1px 1px 5px;
`;

export const FormLabel = styled.label`
    font-size: 28px;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    gap: 5px;
`;

export const Input = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 4px;
    font-size: 20px;
`;

export const Button = styled.button`
    margin: 0px auto;
    border-radius: 4px;
    padding: 5px 10px;
    background: rgb(98, 134, 157);
    color: white;
    font-size: 18px;
`;
