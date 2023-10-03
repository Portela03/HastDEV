
import "./Login.css"


const Login: React.FC = () => {

  
  return (<div  >
    <div className="main">
      <p className="sign">
        Sign in
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="Username" />
        <input className="password" type="password" placeholder="Password" />
        <a className="submit" >
          Sign in
        </a>
        
      </form>

    
     
        
    </div>


  </div>)
  ;
};

export default Login;