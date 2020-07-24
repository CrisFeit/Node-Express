import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Booklist extends Component {
    static contextType = ThemeContext;
    state = {
        mystate : true
    }
    render() {
        const { isLightTheme , light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return (  
            <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{background: theme.ui}}>The way of Kings</li>
                    <li style={{background: theme.ui}}>The name of the wind</li>
                    <li style={{background: theme.ui}}>The Final Empire</li>
                </ul>
            </div>
        );
    }
}
 
export default Booklist;