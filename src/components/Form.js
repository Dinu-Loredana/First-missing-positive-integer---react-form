import { Button, Form as FormAntd, Input } from "antd";
import styled from "styled-components";
const { Item } = FormAntd



const FormStyled = styled(FormAntd)`
  margin: 8em auto;
  width: 50%;
`


const ButtonStyled = styled(Button)`
  width: 100%;
`



const Form = ({onChange, onSubmit}) => {
    return (
        <FormStyled layout="vertical" size="large" onFinish={onSubmit}>
            <Item label="Add your numbers" name="array"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your numbers!',
                      },
                  ]}
            >
                <Input htmlFor='array' onChange={onChange} allowClear />
            </Item>

            <Item>
                <ButtonStyled type="primary" htmlType="submit">Find Number</ButtonStyled>
            </Item>
        </FormStyled>
    )
}

export default Form;