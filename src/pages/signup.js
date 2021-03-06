import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form, BoxContainer } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [username, setUsername] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const isInvalid = password === '' || emailAddress === '' || username === ''; //TODO add proper validation
    const handleSignUp = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user.updateProfile({
                    displayName: username,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }).then(() => {
                    history.push(ROUTES.BROWSE);
                })
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setUsername('');
                setError(error.message);
            })
    }

    return (
        <>
            <BoxContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            placeholder="Username"
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}
                        />
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="Submit">
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>Already a user? <Form.Link to={ROUTES.SIGN_IN}>Switch to sign in.</Form.Link></Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you are not a bot. Learn More.</Form.TextSmall>
                </Form>
            </BoxContainer>
        </>
    )
}
