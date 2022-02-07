import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(( { done }: ContainerProps ) => (
    `
    display: flex;
    background-color: transparent;
    margin-top: 10px;
    padding: 12px;
    align-items: center;
    border-radius: 4px;
    border: ${done ? '2px solid #00ff00' : '2px solid #8D8D8D'};

    input {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        accent-color: #00ff00;
    }

    label {
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
    `
));