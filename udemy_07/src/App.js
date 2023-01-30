import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  //useState([]) 빈배열로 초기화
  const [movies, setMovies] = useState([]);
  //프로미스 객체를 얻을 때에 then 호출 뒤에 then을 제차 호출해서 사용할 수 있지만 async와 await를 사용할 수도 있다.
  //함수 앞에 async 예약어를 추가하고, 프로미스 객체를 반환하는 작업 앞에 awaut 얘약어를 사용한다.
  async function fetchMoviesHandler() {
    //fetch는 브라우저가 사용할 수 있게 해주는 함수 (Fetch API)
    //두번째 인자를 통해 다양한 선택사항 지정할 수 있는 자바스크립트 객체를 전달할 수 있다.
    //header , body, http요청 메소드의 변경 등
    //하지만 여기서는 기본적으로 get 요청 보내고, get 요청으로 원하는거 할 수 있기 떄문에 필요없다 ~
    //fetch함수는 promise 객체 만드는데, 이 객체는 우리가 잠재적으로 발생할 수 있는 오류나 호출에 대한 응답에 반응할 수 있게 해준다.
    //Http 전송 방법 = 비동기식. 비동기식은 코드의 결과를 바로 확인하거나 사용할 수 없다. 대신 미래의 어느 시점에서 확인 가능.
    //프로미스 객체가 있는 이유가 바로, 어느 시점에서 확인 가능하게 하려고.
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    // .then((response) => {
    //여기서 들어온 response는 객체이며 요청 응답에 대한 많은 데이터를 가지고 있다.
    //ex) 응답 헤더를 읽거나, 상태 코드를 얻을 수도 있디.
    // return response.json();
    // })
    // .then((data) => {
    //map()을 사용해서 넘겨받은 배열의 모든 객체를 새로운 객체로 만들어준다.
    const transFormedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    //여기서 파싱되어 추출된 데이터를 받아온 것(data.results)을 movie에 대한 새로운 상태로 만듬.
    setMovies(transFormedMovies);
    // });
    //fetch뒤에 .then()함수 추가하면 응답을 받을 때 호출된다.
    //그 뒤에 .catch()써서 잠재적 오류를 잡을 수 있음.(여기서 일단 넘김ㄴ)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
