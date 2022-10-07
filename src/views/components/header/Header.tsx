import react from 'react'
import { Container, Wrapper } from './styles'
import { TbSearch } from 'react-icons/tb'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { VscMenu } from 'react-icons/vsc'

const Header: React.FC = () => {

    return (
        <Wrapper>
            <Container>
                <a className='site-logo' href="#">
                    <img className='logo-image' src="/assets/img/logo.png" alt="" />
                    <img className='icon-image' src="/assets/img/icon.png" alt="" />
                </a>
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
                <div className="nav-wrapper">
                    <nav>
                        <ul>
                            <li><a href="#">Become a Tutor</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">My Courses</a></li>
                        </ul>
                    </nav>
                    <div className="auth-nav">
                        <ul>
                            <li><a href="#">Log In</a></li>
                            <li><a href="#">Join for Free</a></li>
                        </ul>
                    </div>
                </div>
                    <div className="toggle-menu">
                        <VscMenu />
                    </div>
            </Container>
        </Wrapper>
    )
}

export default Header