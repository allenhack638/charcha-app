import { Container, Grid, Row, Col, Panel, Button, Icon, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';
import firebase from 'firebase/app';
const Signin = () => {
  const siginWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
          email: user.email,
        });
      }
      Alert.success('Signed in', 2000);
    } catch (error) {
      Alert.error(error.message, 2000);
    }
  };

  return (
    <Container className="mt-page">
      <Grid>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Charcha</h2>
                <p>Progressive chat application for genetics</p>
              </div>

              <div className="mt-3">
                <Button
                  color="blue"
                  block
                  onClick={() => {
                    siginWithProvider(new firebase.auth.FacebookAuthProvider());
                  }}
                >
                  <Icon icon="facebook">Continue with Facebook</Icon>
                </Button>
                <Button
                  color="green"
                  block
                  onClick={() => {
                    siginWithProvider(new firebase.auth.GoogleAuthProvider());
                  }}
                >
                  <Icon icon="google">Continue with Google</Icon>
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Signin;
