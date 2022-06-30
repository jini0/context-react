import './App.css';
import MainPage from './components/MainPage';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  //상태 만들어주기
  const [ isDark, setIsDark ] = useState(false);
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      {/* value값을 객체로 넣어줄거라서 {isDark, setIsDark}형태의 객체로 넣어준거임!    */}
    <div className="App">
      <MainPage/>
      {/* ThemeContext가 받을거라 지워줌! */}

      {/* 💛props로 전달한거! */}
      {/* <MainPage isDark={isDark} setIsDark={setIsDark} /> */}
      {/* isDark={isDark} setIsDark={setIsDark} MainPage가 props로 받을거임 */}
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
