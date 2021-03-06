import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//๐props๋ก ์ ๋ฌํ๋ ๊ฒ์ Context๋ก ์ฌ์ฉํ๊ธฐ!
const Content = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <div className={isDark? 'content dark' : 'content'}>
            ์ข์ํ๋ฃจ ๋์ธ์
        </div>
    );
};

//๐props๋ก ์ ๋ฌํ๊ฑฐ!
//์ด๋, ์์ import์๋
//import React from 'react'; ๋ง!
// const Content = ({isDark}) => {
//     return (
//         <div className={isDark? 'content dark' : 'content'}>
//             ์ข์ํ๋ฃจ ๋์ธ์
//         </div>
//     );
// };

export default Content;