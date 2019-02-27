import React, { Component } from 'react';
import DropdownMenu from '../DropdownMenu';

class Header extends Component {

    state = {
        showDropdown: false
    }

    displayDropdown = () => {
        this.setState({ showDropdown: !this.state.showDropdown})
    }

    render() {
        return (
          <div>
              <div className='header-container'>
                  <div className='title-menu'>
                      <h1 className='header-title'>MasterPrototypes.</h1>
                        <div className='dropdown-container'>
                            <button type='submit' className='menu-button' onClick={this.displayDropdown}>
                                <i className="fas fa-grip-lines"></i>
                            </button>
                        </div>
                        <div>
                            {
                                this.state.showDropdown ? <DropdownMenu displayDropdown={this.displayDropdown}/> : ''
                            }

                        </div>
                  </div>
              </div>
          </div>
        )

    }
}

export default Header;