import { useState, useContext } from 'react';
import "./auth.css";
import axios from "axios";
import { AuthContext } from '../../context/authContext';

const Auth = () => {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [register, setRegister] = useState(false);
  const [nom , setNom] = useState('');

  const { login } = useContext(AuthContext);

  const { currentUser } = useContext(AuthContext);

  const Url = "http://localhost:3000/auth/";

  
  const registerUser = async () => {
    // try {
    //   await axios.post(Url + "/register", {
    //     username: username,
    //     nom : nom,
    //     email: email,
    //     password: password
    //   })
    //   setSuccess("Inscription réussie");
    //   setEmail('');
    //   setPassword('');
    //   setUserName('');
    // } catch (error) {
    //   console.log(error.message);
    // }
  }
// 


  const registerMod = () => {
    setRegister(!register);
  }

  const handleLogin = async (event)=>{
    event.preventDefault();
    await login(email,password);
   }

  return (
    <>
      <div className='flex flex-row h-96 w-3/5 text-center mt-40 m-auto justify-center items-center shadow-lg shadow-black-500/40'>
        <div className='w-1/2 h-full '>
          <img src='https://i.pinimg.com/736x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg' alt="Login" className='w-full h-full rounded-l' />
        </div>
        <div className='flex flex-col box-border  w-1/2 p-4 bg-blue-300  text-center items-center h-full rounded-r'>
          {register ? (
            <>
              <h3 className='text-3xl font-semibold text-blue-700 '>Inscription</h3>
              <input type="text" name="username" value={username} onChange={(e) => setUserName(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder="Entrez votre fullNom d'utilisateur" />
              <input type="text" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder="Entrez votre nom " />
              <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder="Entrez votre adresse email" />
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder="Entrez votre mot de passe" />
              <input type='button' value="S'inscrire" className='mt-8 bg-blue-500 p-3 w-32 cursor-pointer rounded' onClick={registerUser} />
              {success && <p className='text-blue-700 mt-8'>{success}</p>}
              <p className='text-blue-700 mt-8 cursor-pointer font-semibold underline' onClick={registerMod}>Connectez-vous ici si vous avez déjà un compte !</p>
            </>
          ) : (
            <>
              <h3 className='text-3xl font-semibold text-blue-700 '>Connexion</h3>
              <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder="Entrez votre adresse email" />
              <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder="Entrez votre mot de passe" />
              <input type='button' value='Connexion' onClick={handleLogin} className='mt-8 bg-blue-500 p-3 w-32 cursor-pointer rounded'  />
              { <p className='text-blue-900'></p>}
              <p className='text-blue-700 mt-8 cursor-pointer font-semibold underline' onClick={registerMod}>Inscrivez-vous ici si vous n'avez pas de compte !</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
