# redux-saga-login-example

The redux-saga login example with unit tests.

Here we are focussing on functionality of the app. So you can create your styles for UI of the app.

How to tun the unit tests

```
$ npm install
$ npm test
```

# Test outputs

## Unit tests

```
 PASS  src/sagas/index.test.js
  login saga effects
    standard login flow
      ✓ it waits for a LOGIN_REQUEST action (4ms)
      ✓ then it forks the authorize method (1ms)
      ✓ then it waits for a LOGOUT or LOGIN_ERROR action
      ✓ then it cancels the authorize call on a LOGOUT action
      ✓ then it triggers a DELETE_TOKEN action
      ✓ and finally it waits again for a LOGIN_REQUEST action (1ms)
    login error flow
      ✓ if a LOGIN_ERROR action happens it doesn't cancel the authorize task (because it's the authorize task itself that triggers the LOGIN_ERROR action)
      ✓ neither it triggers a DELETE_TOKEN action (1ms)
  authorize saga effects
    standard login flow
      ✓ it calls the authorization method (1ms)
      ✓ then it triggers a LOGIN_SUCCESS action
      ✓ then it triggers a SAVE_TOKEN action
      ✓ finally it checks if it's been cancelled by another generator
    external cancellation
      ✓ It triggers a LOGIN_CANCELLED action if cancelled externally
    login error flow
      ✓ it triggers a LOGIN_ERROR action in case of login error

Test Suites: 1 passed, 1 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        1.613s

```
