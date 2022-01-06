import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5em auto;
  width: 50%;
`

const Text = styled.h1`
  font-size: 16px;
  color: #40a9ff;
  background-color: #d5e9fa;
  border: 0.1em solid #40a9ff;
  border-radius: 2px;
  text-align: center;
  padding: 5px;
  margin-bottom: 10px;
`



const FormResults = ({valuesArray, missingValue}) => {

    return (
        <Wrapper>
            <Text>Your numbers: {valuesArray.toString()} </Text>
            <Text>The first missing positive number: {missingValue}</Text>
        </Wrapper>
    )
}



export default FormResults