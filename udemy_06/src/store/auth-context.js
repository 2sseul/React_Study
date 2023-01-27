//여러개의 전역 state에 대해 여러개의 context를 가질수 있다.
//더 큰 state에 하나의 context만을 가질수도 있고 ~

import React from 'react';

//context객체 생성
const AuthContext = React.createContext({
    isLoggedIn: false,
});

export default AuthContext;