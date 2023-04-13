import React, { useRef } from 'react';
import ProfileNavContent from './profileNaveContent';
import { NavContent, Wrapper } from './styles'

interface ProfileNavProps {
    onClose: () => void;
    isOpen: boolean;
}

const ProfileNav: React.FC<ProfileNavProps> = (props) => {
    const navRef = useRef(null);

    const closeNav = (e: React.MouseEvent<HTMLDivElement>) => {
        if(e.target == navRef.current) props.onClose();
    }

    return (
        <Wrapper onClick={closeNav} isOpen={props.isOpen} ref={navRef}>
            <NavContent isOpen={props.isOpen}>
                <ProfileNavContent />
            </NavContent>
        </Wrapper>
    )
}

export default ProfileNav;