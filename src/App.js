import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto'
import FullName from './Components/Profile/FullName'
import MyAddress1 from './Components/Profile/MyAddress1'

function App() {
  return (
    <div className="Container" >
      <ProfilePhoto />
      <FullName />
      <MyAddress1 />


    </div>
  );
}

export default App;
