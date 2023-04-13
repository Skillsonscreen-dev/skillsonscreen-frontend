
import { Wrapper, ModalContainer, Content } from './styles';
import { MdOutlineCancel } from 'react-icons/md'
import Button from '../../../components/ui/button/Button';
import useDisclosure from '../../../../hooks/useDisclosure';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
const DeleteModal: React.FC<{ onClose: any }> = (props) => {
  const { isOpen: showPassword, onOpen: onShowPassword, onClose: onHidePassword } = useDisclosure();
  return (
    <Wrapper>
      <ModalContainer onClick={() => props.onClose()}>
        <div className="">

          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <Content>
              <div className="delete-account-box">
                <h1 className='modal-header'>Delete account <MdOutlineCancel onClick={() => props.onClose()} /></h1>

                <div className="delete-warning">
                  <p>Are you sure you want to delete your account?</p>
                </div>

                <div className="input-group">
                  <div className="label">Your Password</div>
                  <div className="input-subgroup">
                    <input type={showPassword ? 'text' : 'password'} placeholder="* * * * * * *" />
                    {
                      showPassword ?
                        <BsEyeSlash size={20} color="#898B8D" onClick={onHidePassword} /> :
                        <BsEye size={20} color="#898B8D" onClick={onShowPassword} />
                    }
                  </div>
                </div>

                <div>
                  <Button color='danger' size="md" br={5} onClick={() => props.onClose()}>Delete account</Button>
                </div>
              </div>
            </Content>

          </div>
        </div>
      </ModalContainer>
    </Wrapper>
  );
}

export default DeleteModal;