import React, { useState } from 'react'
import {connect, useDispatch} from 'react-redux';
import {changeTabActive} from '../redux/action';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = ({activeTab}) => {
    const [listNav] = useState(['Home', 'Skills', 'Projetos', 'Contatos']);
    const dispath = useDispatch();
    const changeTab = (value) => {
        dispath(changeTabActive(value));
        toggleNav();
    }
    const [statusNav, setStatusNav] = useState(null);
    const toggleNav = () => {
        setStatusNav(statusNav === 'active' ? null : 'active');
    }
  return (
    <header>
        <div className='logo'>
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt='logo'/>
        </div>
        <nav className={statusNav}>
            {
                listNav.map((value, key) => (
                    <span key={key} 
                    className={activeTab === value ? 'active' : ''}
                    onClick={() => changeTab(value)}
                    >{value}</span>
                ))
            }
        </nav>
        <div className='icon-bar' onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars}/>
        </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
})

export default connect(mapStateToProps, {changeTabActive})(NavBar)