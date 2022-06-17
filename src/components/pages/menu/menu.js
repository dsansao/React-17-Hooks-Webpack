import React, { useState } from 'react';
import Search from './search';

function Menu() {

    const [showSearch, setShowSearch] = useState(false);

    const showSearchContainer = e => {
        e.preventDefault();
        setShowSearch(!showSearch);
    }

    return (
        <header className="menu">
            <div className="menu-container">
                <div className="menu-holder">
                    <h1>ELC</h1>
                    <nav>
                        <a href="#" className="nav-item">HOLIDAY</a>
                        <a href="#" className="nav-item">WHAT'S NEW</a>
                        <a href="#" className="nav-item">PRODUCTS</a>
                        <a href="#" className="nav-item">BESTSELLERS</a>
                        <a href="#" className="nav-item">GOODBYES</a>
                        <a href="#" className="nav-item">STORES</a>
                        <a href="#" className="nav-item">INSPIRATION</a>

                        <a href="#" onClick={showSearchContainer}>
                            <i className="material-icons search">search</i>
                        </a>                            
                    </nav>
                    <Search onClose={showSearchContainer} show={showSearch}/>
                </div>
            </div>
            {/*<div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                <input type="text" onChange={(e) => this.onSearch(e)} />
                <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                    <i className="material-icons close">close</i>
                </a>
            </div>*/}                
        </header>
    );
}

// Export out the React Component
export default Menu;
