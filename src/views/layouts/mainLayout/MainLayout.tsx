import React, { useEffect } from 'react'
import { Content, MainLayoutWrapper } from './styles'
import { fetchProfileAction } from '../../../actions/profileAction'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { ProfileSliceInterface } from '../../../slices/profileSlice'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const MainLayout: React.FC<{children: React.ReactNode}> = ({ children}) => {
    // const { height, width } = useWindowDimensions()
    const dispatch = useAppDispatch()
    const userProfile: ProfileSliceInterface = useAppSelector(state => state.profile.state);

    const fetchProfile = async () => {
        if (userProfile.fetchedProfile) {
            return;
        }

        fetchProfileAction(dispatch);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchProfile()
    }, [])
    return (
        <MainLayoutWrapper>
            <Content>
                <Header />
                {children}
                <Footer />
            </Content>
        </MainLayoutWrapper>
    )
}

export default MainLayout