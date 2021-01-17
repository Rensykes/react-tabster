import React, {useContext} from 'react'
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';


export default function HeaderContainer({page, setPage, children }) {
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    const headerContent = !user ? (
        <>
            <Header.Logo to={ROUTES.HOME} alt="Tabster" src="/logo.png" />

            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </>
    )
        : (
            <>
                <Header.Group>
                    <Header.Logo to={ROUTES.HOME} alt="Tabster" src="/logo.png" />

                    <Header.TextLink
                        active={page === 'browse' ? 'true' : 'false'}
                        onClick={() => setPage('browse')} //it will re render useEffect and it will change slideRows
                    >
                        Browse
                </Header.TextLink>
                    <Header.TextLink
                        active={page === 'add' ? 'true' : 'false'}
                        onClick={() => setPage('add')} //it will re render useEffect and it will change slideRows
                    >
                        Add Tab
                </Header.TextLink>
                </Header.Group>

                <Header.ButtonLink to={ROUTES.HOME} onClick={() => firebase.auth().signOut()}>Sign Out</Header.ButtonLink>
            </>
        )

    return (
        <Header>
            <Header.Frame>
                {headerContent}
            </Header.Frame>
        </Header>
    )
}
