import react from 'react'
import { Container, NavWrapper, Wrapper } from './styles'
import { TbSearch } from 'react-icons/tb'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { VscMenu } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {

    return (
        <Wrapper>
            <Container>
                <Link className='site-logo' to="/">
                    <img className='logo-image' src="/assets/img/logo.png" alt="" />
                    <img className='icon-image' src="/assets/img/icon.png" alt="" />
                </Link>
                <div className="first-nav-sec">
                    <a className='categories' href="#">Categories</a>
                    <div className="search-wrapper">
                        <TbSearch />
                        <input type="text" placeholder='Search for a skill' />
                    </div>
                </div>
                <div className="cart-sec">
                    <HiOutlineShoppingCart />
                    <span>1</span>
                </div>
                <NavWrapper>
                    <nav>
                        <ul>
                            <li><a href="#">Become a Tutor</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">My Courses</a></li>
                        </ul>
                    </nav>
                    <div className="auth-nav">
                        <ul>
                            <li><Link to="/signin">Log In</Link></li>
                            <li><Link to="/signup">Join for Free</Link></li>
                        </ul>
                    </div>
                </NavWrapper>
                <div className="toggle-menu">
                    <VscMenu />
                </div>
            </Container>
        </Wrapper>
    )
}

export default Header