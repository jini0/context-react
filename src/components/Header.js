import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//๐props๋ก ์ ๋ฌํ๋ ๊ฒ์ Context๋ก ์ฌ์ฉํ๊ธฐ!
const Header = () => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className={isDark? 'header dark' : 'header'}>
            <h1>
                Green
            </h1>
            <ul>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
                <li>menu4</li>
            </ul>
        </div>
    );
};

//๐props๋ก ์ ๋ฌํ๊ฑฐ!
//์ด๋, ์์ import์๋
//import React from 'react'; ๋ง!
// const Header = ({isDark}) => {
//     return (
//         <div className={isDark? 'header dark' : 'header'}>
//             <h1>
//                 Green
//             </h1>
//             <ul>
//                 <li>menu1</li>
//                 <li>menu2</li>
//                 <li>menu3</li>
//                 <li>menu4</li>
//             </ul>
//         </div>
//     );
// };

export default Header;