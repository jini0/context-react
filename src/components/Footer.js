import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//๐props๋ก ์ ๋ฌํ๋ ๊ฒ์ Context๋ก ์ฌ์ฉํ๊ธฐ!
const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);
    const onClickDark = ()=>{
        setIsDark(!isDark)
    }
    return (
        <div className={isDark ? 'footer dark' : 'footer'}>
            <button onClick={onClickDark}>๋คํฌ๋ชจ๋</button>
        </div>
    );
};

// ๐props๋ก ์ ๋ฌํ๊ฑฐ!
//์ด๋, ์์ import์๋
//import React from 'react'; ๋ง!
// const Footer = ({isDark, setIsDark}) => {
//     const onClickDark = ()=>{
//         setIsDark(!isDark)
//     }
//     return (
//         <div className={isDark ? 'footer dark' : 'footer'}>
//             <button onClick={onClickDark}>๋คํฌ๋ชจ๋</button>
//         </div>
//     );
// };

export default Footer;