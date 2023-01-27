import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  //state가 변경되면 App()을 다시 실행하기 때문에
  //가장 최근 실행에서 얻은 모든 변수는 사라지게 된다.
  //즉 다시 시작할 때 모든 데이터가 사라지기 때문에 데이터를 다시 시작해도 유지되는 곳에 저장하는게 좋다.
  //데이터 저장을 위해 useState를 사용한다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //다만 이렇게 접근하는 방법은 무한루프에 빠질 수 있는데
  // const storedUserLoggedInInformation = localStorage.getItem('IsLoggedIn');
  // //저장되었는지 확인하고,
  // if(storedUserLoggedInInformation === '1'){
  //   //저장되어있으면 true로 설정한다
  //   setIsLoggedIn(true);
  // }
  //state가 갱신될때마다 얘네는 다시 실행된다..이러면 무한루프
  //useEffect 쓰면 언제 실행될 지 제어할 수 있으니 useEffect를 사용하자.
  //useEffect 함수 내부에 정의하면, 얘네는 리액트에서 실행하게 된다.
  //다만, 모든 컴포넌트를 재평가 한 후에 실행되기 때문에 무한루프에 빠지지 X
  //근데 모든 컴포넌트 평가 후에 실행되는것이 아님. 지정된 의존성 변경시에만 !!
  //ex)앱을 다시 실행했을 경우.
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    //저장되었는지 확인하고,
    if (storedUserLoggedInInformation === "1") {
      //저장되어있으면 true로 설정한다
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    //여기에 로그인 브라우저의 데이터를 저장하려는 것
    //보통 쿠키 또는 로컬스토리지를 사용한다.
    //여기서는 로컬스토리지를 사용해볼 예정임
    //localStorage.setItem(문자열, 문자열);
    //두번째 인자는 사용자가 로그인 되었을 시 1을 출력하기 위함임.
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  //AuthContext자체는 컴포넌트가 되지 않는다.
  //그래서 공급자를 지정해줘야 한다. AuthContext.Provider
  //AuthContex로 감싼 모든 자손 컴포넌트들은 전부 AuthContext에 접근 가능하다 ~
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: false,
      }}
    >
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
