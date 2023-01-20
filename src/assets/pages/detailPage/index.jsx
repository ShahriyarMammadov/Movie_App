import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const detailData = async () => {
    try {
      let response = await axios.get(
        `https://www.omdbapi.com/?apikey=b94162b4&i=${id}`
      );
      setData(await response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    detailData();
  }, []);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 50,
      }}
      spin
    />
  );

  return (
    <>
      {loading ? (
        <div>
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <div className="detail">
          <div className="aboutRight">
            <div className="title">
              <h2>{data?.Title}</h2>
            </div>

            <div className="header">
              <p>IMDB Rating: {data?.imdbRating}</p>
              <p>IMDB Votes: {data?.imdbVotes}</p>
              <p>RunTime: {data?.Runtime}</p>
              <p>Year: {data?.Released}</p>
            </div>

            <div className="text">
              <h3>{data?.Plot}</h3>
            </div>

            <div className="footer">
              <div className="director">
                <h3>Director</h3>
                <p>{data?.Director}</p>
              </div>
              <div className="actor">
                <h3>Actors</h3>
                <p>{data?.Actors}</p>
              </div>
              <div className="language">
                <h3>Languages</h3>
                <p>{data?.Language}</p>
              </div>
              <div className="awards">
                <h3>Awards</h3>
                <p>{data?.Awards}</p>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={data?.Poster} alt={data?.title} />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
