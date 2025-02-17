import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { IoChevronBackOutline } from 'react-icons/io5';
import { IUser } from '../../store/interface';
import { userInfo, partnerInfo, showProfile } from '../../store/atom';

function ChatHeader(): JSX.Element {
	const [currentUser, setCurrentUser] = useRecoilState<IUser>(userInfo);
	const [partnerUser, setPartnerUser] = useRecoilState<IUser>(partnerInfo);
	const [profileNum, setProfileNum] = useRecoilState<number>(showProfile);
	const navigate = useNavigate();

	const handleToggleClick = () => {
		const tempUser: IUser = currentUser;
		setCurrentUser(partnerUser);
		setPartnerUser(tempUser);
	};

	const handleGoBack = () => {
		navigate(-1);
		setProfileNum(-1);
	}

	return (
		<>
			<Header>
				<BackButton onClick={handleGoBack}><IoChevronBackOutline size="30" /></BackButton>
				<UserName onClick={handleToggleClick}>{partnerUser.username}</UserName>
			</Header>

		</>
	)
}

export default ChatHeader;

const Header = styled.div`
    display : flex;
    align-items : center;
    padding : 10px;
    background-color: rgba(239, 239, 240, 0.85);
    margin-bottom: 5px;
`

const BackButton = styled.div`
    display: flex;
    align-items: center;
    min-width: 25px;
    padding: 10px 0px;
    margin-right: 15px;
    cursor: pointer;
`

const UserName = styled.span`
    width : 100%;
    font-size : 1.3rem;
    font-style : normal;
    font-weight : bold;
    user-select : none;
    cursor : pointer;
`
const CloseButton = styled.div`
    cursor : pointer;
`