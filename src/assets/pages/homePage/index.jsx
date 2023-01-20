import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Space } from "antd";
import {
  movieAction,
  movieSection2sAction,
  movieSection3sAction,
} from "../../../redux/action/movie.action";
import { Card } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
import LoadingComp from "../../../components/loading";
import ScrollToTop from "../../../components/scroolToTopBtn";
import SearchComp from "../../../components/search";

const { Meta } = Card;
const HomePage = () => {
  const [count, setCount] = useState(5);
  const [count2, setCount2] = useState(5);
  const [count3, setCount3] = useState(5);
  const [selectValue, setSelectValue] = useState("movie");
  const movieData = useSelector((store) => store.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction(`&s=potter&type=${selectValue}`));
    dispatch(movieSection2sAction(`&s=avengers&type=${selectValue}`));
    dispatch(movieSection3sAction(`&s=legend&type=${selectValue}`));
  }, [selectValue]);

  const handleChange = (value) => {
    setSelectValue(value);
  };

  return (
    <>
      {movieData.loading ? (
        <LoadingComp />
      ) : (
        <>
          <div className={"headerBottom"}>
            <SearchComp />

            <Select
              defaultValue={selectValue}
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "movie",
                  label: "movie",
                },
                {
                  value: "series",
                  label: "series",
                },
              ]}
            />
          </div>
          <div className="cards">
            {movieData?.data?.Search?.slice(0, count).map((e) => {
              return (
                <Link to={`/detail/${e.imdbID}`}>
                  <Card
                    key={e.imdbID}
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt={e.Title} src={e.Poster} />}
                  >
                    <Meta title={e.Title} description={e.Year} />
                  </Card>
                </Link>
              );
            })}
          </div>
          {movieData?.data?.Search?.length > 0 ? (
            <div className="button">
              <button
                className="button-85"
                role="button"
                onClick={() => {
                  setCount(count + 5);
                }}
              >
                MORE
              </button>
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              <h1>The requested movie is not available</h1>
            </div>
          )}

          <div className="cards">
            {movieData?.sec2Data?.Search?.slice(0, count2).map((data) => {
              return (
                <>
                  <Link to={`/detail/${data?.imdbID}`}>
                    <Card
                      key={data?.imdbID}
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={<img alt={data?.Title} src={data?.Poster} />}
                    >
                      <Meta title={data?.Title} description={data?.Year} />
                    </Card>
                  </Link>
                </>
              );
            })}
            <div className="button">
              <button
                className="button-85"
                role="button"
                onClick={() => {
                  setCount2(count2 + 5);
                }}
              >
                MORE
              </button>
            </div>
          </div>
          <div className="cards">
            {movieData?.sec3Data?.Search?.slice(0, count3).map((data) => {
              return (
                <>
                  <Link to={`/detail/${data?.imdbID}`}>
                    <Card
                      key={data?.imdbID}
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={<img alt={data?.Title} src={data?.Poster} />}
                    >
                      <Meta title={data?.Title} description={data?.Year} />
                    </Card>
                  </Link>
                </>
              );
            })}
            <div className="button">
              <button
                className="button-85"
                role="button"
                onClick={() => {
                  setCount3(count3 + 5);
                }}
              >
                MORE
              </button>
            </div>
          </div>
        </>
      )}
      <ScrollToTop />
    </>
  );
};

export default HomePage;
