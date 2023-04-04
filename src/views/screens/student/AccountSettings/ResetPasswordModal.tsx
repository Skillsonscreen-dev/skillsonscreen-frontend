
import { Wrapper, ModalContainer, Content } from './styles';
import { MdOutlineCancel } from 'react-icons/md'
import Button from '../../../components/ui/button/Button';
import useDisclosure from '../../../../hooks/useDisclosure';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const ResetPasswordModal: React.FC<{ onClose: any }> = (props) => {
  const { isOpen: showPassword, onOpen: onShowPassword, onClose: onHidePassword } = useDisclosure();
  const { isOpen: showConfirmPassword, onOpen: onShowConfirmPassword, onClose: onHideConfirmPassword } = useDisclosure();
  return (
    <Wrapper>
      <ModalContainer onClick={() => props.onClose()}>
        <div className="">

          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <Content>
              <div className="reset-password-box">
                <h1 className='modal-header'>Reset Password <MdOutlineCancel onClick={() => props.onClose()} /></h1>
                <br /><br />

                <div className="input-group">
                  <div className="label">New Password</div>
                  <div className="input-subgroup">
                    <input type={showPassword ? 'text' : 'password'} placeholder="* * * * * * *" />
                    {
                      showPassword ?
                        <BsEyeSlash size={20} color="#898B8D" onClick={onHidePassword} /> :
                        <BsEye size={20} color="#898B8D" onClick={onShowPassword} />
                    }
                  </div>
                </div>

                <div className="input-group">
                  <div className="label">Confirm Password</div>
                  <div className="input-subgroup">
                    <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Re-type new password" />
                    {
                      showConfirmPassword ?
                        <BsEyeSlash size={20} color="#898B8D" onClick={onHideConfirmPassword} /> :
                        <BsEye size={20} color="#898B8D" onClick={onShowConfirmPassword} />
                    }
                  </div>
                </div>
                <div>
                  <Button size="md" br={5} onClick={() => props.onClose()}>Set new password</Button>
                </div>
              </div>

              <div className="delete-warning">
                <p>If you need further assistance <Link to="#">contact our support team</Link></p>
              </div>
            </Content>

          </div>
        </div>
      </ModalContainer>
    </Wrapper>
  );
}

export default ResetPasswordModal;