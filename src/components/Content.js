import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//💚props로 전달했던 것을 Context로 사용하기!
const Content = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <div className={isDark? 'content dark' : 'content'}>
            좋은하루 되세요
        </div>
    );
};

//💛props로 전달한거!
//이땐, 위에 import에는
//import React from 'react'; 만!
// const Content = ({isDark}) => {
//     return (
//         <div className={isDark? 'content dark' : 'content'}>
//             좋은하루 되세요
//         </div>
//     );
// };

export default Content;