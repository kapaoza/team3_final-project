/* the final project team 3 login routes code into react

*/
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: true,
      right: 0,
    }
  }

  handleClick(button) {
    if(this.state.newUser && button != 'signUp') {
      this.setState({newUser: false})
    } else if(!this.state.newUser && button != 'signIn') {
      this.setState({newUser: true})
    }
  }
  
  
  render() {
    return(
           <div className='formContainer'>
              <div className='formHeader'>
                  <div 
                    className={ this.state.newUser ? 'headerActive' : 'headerInActive' } 
                    onClick={() => this.handleClick('signUp')}
                    >
                    <button className='headerButton'> Sign Up </button>
                  </div>
                  <div 
                    className={ this.state.newUser ? 'headerInActive' : 'headerActive' } 
                    onClick={() => this.handleClick('signIn')}
                    >
                    <button className='headerButton'> Sign In </button>
                  </div>
              </div>
              <div className='formBody'>
                {
                  this.state.newUser ? <SignUp />: <SignIn />
                }
              </div>
              <div className='formFooter'>
                <button className='saveForm'> { this.state.newUser ? 'Submit' : 'Login'} </button>
              </div>
           </div>
    ) 

  }
}


class SignUp extends React.Component {
  render() {
    return(      
      <div className='signUpContainer'>
        <h4 className='headerText'>Join Us Today</h4>
        <div className='inputSectionSplit'>
          <input type='text' className='firstName' required/>
          <label className='inputLabel'>First Name</label>
        </div>
        <div className='inputSectionSplit'>
          <input type='text' className='lastName' required/>
          <label className='inputLabel'>Last Name</label>
        </div>
        <div className='inputSection'>
          <input type='text' className='emailAddress' required/>
          <label className='inputLabel'>Email Address</label>
        </div>
        <div className='inputSection'>
          <input type='password' className='password' required/>
          <label className='inputLabel'>Password</label>
        </div>
      </div>
    )
  }
}

class SignIn extends React.Component {
  render() {
    return(
      <div className='signInContainer'>
        <h4 className='headerText'>Welcome Back team 3  </h4>
        <div className='inputSection'>
          <input type='text'
           className='userName' required/>
          <label className='inputLabel'>User Name</label>
        </div>
        <div className='inputSection'>
          <input type='text' className='password' required/>
          <label className='inputLabel'>Password</label>
        </div>
        
      </div>
    )
  }
}


React.render(<App />, 
document.getElementById('app'))
