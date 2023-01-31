import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  //useState([]) 빈배열로 초기화
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //useEffect 사용해서 페이지에 접속하면 바로 데이터 정보 가져옴.
  //다만 effect함수에서 사용하는 모든 의존성을 의존성 배열에 표시해두는 것이 가장 좋다.

  //프로미스 객체를 얻을 때에 then 호출 뒤에 then을 제차 호출해서 사용할 수 있지만 async와 await를 사용할 수도 있다.
  //함수 앞에 async 예약어를 추가하고, 프로미스 객체를 반환하는 작업 앞에 awaut 얘약어를 사용한다.
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    //then을 이용해 작업한다면, catch 쓰고 async await 사용해서 작업하면 try/catch쓴다.
    setError(null);
    try {
      //fetch는 브라우저가 사용할 수 있게 해주는 함수 (Fetch API)
      //두번째 인자를 통해 다양한 선택사항 지정할 수 있는 자바스크립트 객체를 전달할 수 있다.
      //header , body, http요청 메소드의 변경 등
      //하지만 여기서는 기본적으로 get 요청 보내고, get 요청으로 원하는거 할 수 있기 떄문에 필요없다 ~
      //fetch함수는 promise 객체 만드는데, 이 객체는 우리가 잠재적으로 발생할 수 있는 오류나 호출에 대한 응답에 반응할 수 있게 해준다.
      //Http 전송 방법 = 비동기식. 비동기식은 코드의 결과를 바로 확인하거나 사용할 수 없다. 대신 미래의 어느 시점에서 확인 가능.
      //프로미스 객체가 있는 이유가 바로, 어느 시점에서 확인 가능하게 하려고.
      const response = await fetch("https://swapi.dev/api/films/");

      //데이터가 파싱되기 전에 response가 ok인지 확인해줘야한다.
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      // .then((response) => {
      //여기서 들어온 response는 객체이며 요청 응답에 대한 많은 데이터를 가지고 있다.
      //ex) 응답 헤더를 읽거나, 상태 코드를 얻을 수도 있디.
      // return response.json();
      // })
      // .then((data) => {
      //map()을 사용해서 넘겨받은 배열의 모든 객체를 새로운 객체로 만들어준다.
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      //여기서 파싱되어 추출된 데이터를 받아온 것(data.results)을 movie에 대한 새로운 상태로 만듬.
      setMovies(transformedMovies);
      // });
      //fetch뒤에 .then()함수 추가하면 응답을 받을 때 호출된다.
      //그 뒤에 .catch()써서 잠재적 오류를 잡을 수 있음.(여기서 일단 넘김ㄴ)

      //catch에서 오류 받아와서 처리해준다.
      //다만 fetch API는 404 501 등의 에러 상태 코드를 실제 에러로 처리하지 않음(기술적인 오류)
      //axios는 처리 가능.
    } catch (error) {
      setError(error.message);
    }
    //제대로 된 결과를 받았어도 로딩 끝내줘야하니까. 마지막에 설정.
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(movie) {
    console.log(movie);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {
          /* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {isLoading && <p> Loading ...</p>}
        {!isLoading && error && <p>Loading...</p>} */
          content
        }
      </section>
    </React.Fragment>
  );
}

export default App;
