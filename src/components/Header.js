import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//💚props로 전달했던 것을 Context로 사용하기!
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

//💛props로 전달한거!
//이땐, 위에 import에는
//import React from 'react'; 만!
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