import { Component, useState } from 'react'
import './css/counter.css'

export default function Counter () {
  const [count, setCount] = useState(0)

  function incrementCounterParentFunction (by) {
    setCount(count + by)
  }

  function decrementParentFunction (by) {
    setCount(count - by)
  }

  function resetButtonParentFunction () {
    setCount(0)
  }

  return (
    <div className='counter'>
      <span className='count'>{count}</span>
      <CounterButtons
        by={1}
        incrementMethod={incrementCounterParentFunction}
        decrementMethod={decrementParentFunction}
      />
      <CounterButtons
        by={2}
        incrementMethod={incrementCounterParentFunction}
        decrementMethod={decrementParentFunction}
      />
      <CounterButtons
        by={3}
        incrementMethod={incrementCounterParentFunction}
        decrementMethod={decrementParentFunction}
      />
      <ResetButton resetMethod={resetButtonParentFunction} />
    </div>
  )
}

function CounterButtons ({ by, incrementMethod, decrementMethod }) {
  const buttonStyle = {
    fontSize: '30px',
    backgroundColor: '#00a5ab',
    width: '100px',
    margin: '10px',
    color: 'white',
    padding: '15px',
    borderRadius: '30px',
    borderColor: 'black',
    borderWidth: '5px'
  }

  const [count, setCount] = useState(0)

  // function representation is show below
  //[initial value, function], count is holdint the initial value
  // [count, setCount] = useState(0);

  function incrementCounterFunction () {
    setCount(count + by)
    incrementMethod(by)
  }

  function decrementCounterFunction () {
    setCount(count - by)
    decrementMethod(by)
  }

  return (
    <div className='Counter'>
      <div className='counterButtons'>
        <button
          className='counterButton'
          onClick={incrementCounterFunction}
          style={buttonStyle}
        >
          +{by}
        </button>
        <button
          className='counterButton'
          onClick={decrementCounterFunction}
          style={buttonStyle}
        >
          -{by}
        </button>
      </div>
    </div>
  )
}

function ResetButton ({ resetMethod }) {
  function reset () {
    resetMethod()
  }

  return (
    <div className='resetButtonParent'>
      <button className='resetButton' onClick={reset}>
        Reset
      </button>
    </div>
  )
}

// Counter.prototype = {
//    by: PropTypes.number,
//   }
