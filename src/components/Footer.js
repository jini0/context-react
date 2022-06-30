import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//💚props로 전달했던 것을 Context로 사용하기!
const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);
    const onClickDark = ()=>{
        setIsDark(!isDark)
    }
    return (
        <div className={isDark ? 'footer dark' : 'footer'}>
            <button onClick={onClickDark}>다크모드</button>
        </div>
    );
};

// 💛props로 전달한거!
//이땐, 위에 import에는
//import React from 'react'; 만!
// const Footer = ({isDark, setIsDark}) => {
//     const onClickDark = ()=>{
//         setIsDark(!isDark)
//     }
//     return (
//         <div className={isDark ? 'footer dark' : 'footer'}>
//             <button onClick={onClickDark}>다크모드</button>
//         </div>
//     );
// };

export default Footer;