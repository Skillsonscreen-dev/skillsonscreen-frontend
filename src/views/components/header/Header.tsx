import react, { useRef } from 'react'
import { Container, NavWrapper, Wrapper } from './styles'
import { TbSearch } from 'react-icons/tb'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { VscMenu } from 'react-icons/vsc'
import { Link,  } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setNavigation } from '../../../slices/navigationSlice'
import { ProfileSliceInterface } from '../../../slices/profileSlice'

const Header: React.FC = () => {
    const userProfile: ProfileSliceInterface = useAppSelector(state => state.profile.state);
    const dispatch = useAppDispatch();
    const toggleState = useAppSelector(state => state.navigation.state);

    const sidebarRef = useRef(null)

    const closeMenu = (e: { target: any }) => {
        if (e.target === sidebarRef.current) {
            dispatch(setNavigation(false));
        }
    }

    return (
        <Wrapper>
            <Container>
                <Link className='site-logo' to="/">
                    <img className='logo-image' src="/assets/img/logo.png" alt="" />
                    <img className='icon-image' src="/assets/img/icon.png" alt="" />
                </Link>
                <div className="first-nav-sec">
                    <Link className='categories' to="/categories">Categories</Link>
                    <div className="search-wrapper">
                        <TbSearch />
                        <input type="text" placeholder='Search for a skill' />
                    </div>
                </div>
                <div className="cart-sec">
                    <HiOutlineShoppingCart />
                    <span onClick={() => alert(userProfile.fetchedProfile)}>1</span>
                </div>
                <NavWrapper ref={sidebarRef} onClick={e => closeMenu(e)} navigationState={toggleState}>
                    <div className="nav-wrapper">
                        <div className="nav-logo">
                            <Link className='site-logo' to="/">
                                <img src="/assets/img/logo.png" alt="" />
                            </Link>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to={'/signup?user-type=teacher'}>Become a Tutor</Link></li>
                                <li><a href="#">Blog</a></li>
                                {userProfile.fetchedProfile == true && userProfile.userType == "STUDENT" ? <li><Link to={'/mycourses/Making Pastries'}>My Courses</Link></li> : <></>}
                            </ul>
                        </nav>
                        <div className="auth-nav">
                            <ul>
                                <li><Link to="/signin">Log In</Link></li>
                                <li><Link to="/signup">Join for Free</Link></li>
                            </ul>
                        </div>
                    </div>
                </NavWrapper>
                <div className="toggle-menu" onClick={ () => dispatch(setNavigation(true)) }>
                    <VscMenu />
                </div>
            </Container>
        </Wrapper>
    )
}

export default Header