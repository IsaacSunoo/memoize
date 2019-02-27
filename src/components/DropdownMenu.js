import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DropdownMenu extends Component {
    render() {
        return (
            <div className='menu-dropdown'>
                <ul>
                    <li><Link className='dropdown-link' onClick={() => { this.props.displayDropdown() }} to='/'>Home</Link></li>
                    <li><Link className='dropdown-link' onClick={() => { this.props.displayDropdown() }} to='/flashCards'>FlashCards</Link></li>
                    <li><Link className='dropdown-link' onClick={() => { this.props.displayDropdown() }} to='/quiz'>Prototypes Quiz</Link></li>
                    <li><Link className='dropdown-link' onClick={() => { this.props.displayDropdown() }} to='/results'>Quiz Results</Link></li>
                    <li><Link className='dropdown-link' onClick={() => { this.props.displayDropdown() }} to='/coding'>Practice Coding</Link></li>
                </ul>
            </div>
        )
    }
}

export default DropdownMenu;