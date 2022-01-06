import 'antd/dist/antd.css'
import { useState } from "react";
import Form from "./components/Form"
import FormResults from "./components/FormResults";



const App = () => {

    const [inputValue, setInputValue] = useState('')
    const [valuesArray, setValuesArray] = useState([])
    const [missingValue, setMissingValue] = useState(null)
    const [displayMissingValue, setDisplayMissingValue] = useState(false)


    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }


    const findMissingValue = (array) => {
        let n = array.length;

        for(let i = 0; i < n; i++) {
            while (array[i] >= 1 && array[i] <= n && array[i] !== array[array[i] - 1]) {
                let temp = array[array[i]-1];
                array[array[i]-1] = array[i];
                array[i] = temp;
            }
        }

        for(let i = 0; i < n; i++) {
            if (array[i] !== i + 1) {
                return (i + 1);
            }
        }

        return (n + 1);
    }


    const submitHandler = () => {
        const values = inputValue.split(',').map(val => Number(val))
        setValuesArray(values)

        const missedNumber = findMissingValue(values)
        setMissingValue(missedNumber)

        setDisplayMissingValue(true)
    }


  return (
      <>
          <Form onChange={inputHandler} onSubmit={submitHandler} value={inputValue}/>
          {displayMissingValue && <FormResults valuesArray={valuesArray} missingValue={missingValue} />}
      </>
  )
}



export default App;


