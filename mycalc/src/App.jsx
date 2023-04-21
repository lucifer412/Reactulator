import './App.css'
import Wrapper from './Components/wrapper/wrapper'
import Screen from './Components/screen/screen'
import ButtonBox from './Components/buttonbox/buttonBOx'
import Button from './Components/button/button'
import { React, useState } from 'react'

const mynums = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
function App() {
  let [calc, setCalc] = useState({
    sign: "",
    res: "",
    num: 0,
  });
  // console.log('rendered')
  // var upScr = ;

  const handleClick = (e) => {
    // console.log(e)
    switch (true) {
      case e == 'C':
        setCalc(prevState => {
          return ({ ...prevState, num: 0 })
        });
        break;
      case e === "+-":
        var val= calc.num *-1;

        setCalc(prevState =>{
          return({...prevState , num : val})
        });
        break;
      case e=== "=":
        var val=eval(calc.num);
        console.log(val)
        setCalc(prevState => {
          return ({ ...prevState, num: val })
        })  
        break;
      default:
        // var value= String(calc.num).substring(0,1) === "0" ? Number(String(calc.num).slice(0,1)) : calc.num ;

        // console.log(Number(String(calc.num).slice(0,1)));

        var value= String(calc.num) + String(e);
        var result=value.substring(0,1) ==="0" ? value.slice(-1) : value;
        console.log();
        setCalc(prevState => {
          return ({ ...prevState, num: result })
        })  
        break;
    }
  }



  return (
    <>
      <Wrapper>
        <Screen value={calc.num}></Screen>
        <ButtonBox>
          {
            mynums.flat().map((btn, i) => {
              return (
                //if you want to pass a parameter in the onclick function then 
                //use a fat arrow function and inside it call the function with the parameter
                <Button key={i} value={btn} className={btn === '=' ? 'equals' : ''} onClick={() => { handleClick(btn) }} />
              )
            })
          }
        </ButtonBox>
      </Wrapper>

    </>
  )
}

export default App
