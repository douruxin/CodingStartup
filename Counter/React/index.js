/* class-based Component */

class App extends React.Component {
  state = {
    count: 12
  }

  subtract = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  changeHandler = (e) => {
    let newValue = parseInt(e.target.value)
    if (!isNaN(newValue)) {
      this.setState({
        count: newValue
      })
    }
  }

  render () {
    return (
      <div id="counter">
        <button onClick={ this.subtract }>-</button>
        <input type="text" value={ this.state.count } onChange={ this.changeHandler } />
        <button onClick={ this.add }>+</button>
      </div>
    )
  }
}

/* Functional Component */

// const App = (props) => {
//   // Hooks：通过 React.useState 设定预设值（16.8+）
//   const [count, setCount] = React.useState(12)

//   const add = () => {
//     setCount(count + 1)
//   }

//   const subtract = () => {
//     setCount(count - 1)
//   }

//   const changeHandler = (e) => {
//     let newValue = parseInt(e.target.value)
//     if (!isNaN(newValue)) {
//       setCount(newValue)
//     }
//   }

//   return (
//     <div id="counter">
//       <button onClick={ subtract }>-</button>
//       <input type="text" value={ count } onChange={ changeHandler } />
//       <button onClick={ add }>+</button>
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById('app'))