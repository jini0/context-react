import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
// import React, { useContext } from 'react';
// import { ThemeContext } from '../context/ThemeContext';

//💚props로 전달했던 것을 각각 header/content/footer에 Context로 사용하기! -> 그래서 div안에 것들을 다 뺏음!!
const MainPage = () => {
    // const data = useContext(ThemeContext);
    // console.log(data);
    // const { isDark, setIsDark } = useContext(ThemeContext);
    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
};

//💛props로 전달한거!
// mainPage에서 props로 
// const MainPage = ({ isDark, setIsDark }) => {
//     return (
//         <div>
//             <Header isDark={isDark} />
//             <Content isDark={isDark} />
//             <Footer isDark={isDark} setIsDark={setIsDark} />
//             {/* 버튼이 footer에 있어서 footer에 setIsDark! */}
//         </div>
//     );
// };

export default MainPage;