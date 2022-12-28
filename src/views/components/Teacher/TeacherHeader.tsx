import react, { useRef } from 'react'
import { THeader, NavWrapper, Wrapper } from './styles'
import { VscMenu } from 'react-icons/vsc'
import { Link,  } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setNavigation } from '../../../slices/navigationSlice'
import { MdNotificationsNone } from 'react-icons/md'

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const toggleState = useAppSelector(state => state.navigation.state);

    const sidebarRef = useRef(null)

    const closeMenu = (e: { target: any }) => {
        if (e.target === sidebarRef.current) {
            dispatch(setNavigation(false));
        }
    }

    return (
        <Wrapper >
            <div className='container'>
            <THeader>
                <Link className='site-logo' to="/">
                    <img className='logo-image' src="/assets/img/logo.png" alt="" />
                    <img className='icon-image' src="/assets/img/icon.png" alt="" />
                </Link>
                <NavWrapper ref={sidebarRef} onClick={e => closeMenu(e)} navigationState={toggleState}>
                    <div className="nav-wrapper">
                        <div className="nav-logo">
                            <Link className='site-logo' to="/">
                                <img src="/assets/img/logo.png" alt="" />
                            </Link>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="#">Student View</a></li>
                                <li><a href="#">Blog</a></li>
                                <li>
                                    <a href="#">
                                    <MdNotificationsNone />
                                    <span>Notifications</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className="teacher">
                                    <div className="img-wrapper">
                                    <img src="https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/2021/12/human-rights-exhibits.jpg?itok=aZyiPOl1" alt="teacher" />
                                    </div>
                                    {/* <a href="#"> */}
                                    Adekunle Ciroma
                                    {/* </a> */}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </NavWrapper>
                <div className="toggle-menu" onClick={ () => dispatch(setNavigation(true)) }>
                    <VscMenu />
                </div>
            </THeader>
            </div>
            
        </Wrapper>
    )
}

export default Header