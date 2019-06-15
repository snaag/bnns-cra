import React, { useState, useRef, useEffect } from 'react';
import img from './loading.gif'
const cheerio = require('cheerio');
const axios = require('axios');


const App = () => {
  const [seasons, setSeasons] = useState([]);
  const [seasonIdx, setSeasonIdx] = useState(-1);
  const [episodeNow, setEpisodeNow] = useState([]);
  const [episodeIdx, setEpisodeIdx] = useState(-1);
  const episodes = useRef([]);
  const mounted = useRef(false);
  const click = useRef(false);
  const [script, setScript] = useState('');
  const [title, setTitle] = useState('');
  const scriptClicked = useRef(false);

  const cors_url = 'https://cors-anywhere.herokuapp.com/';
  const bnn_url =
    'https://www.springfieldspringfield.co.uk/episode_scripts.php?tv-show=brooklyn-nine-nine';
  const scriptUrl =
    'https://www.springfieldspringfield.co.uk/view_episode_scripts.php?tv-show=brooklyn-nine-nine&episode=';

  const getSeasons = async () => {
    try {
      const html = await axios.get(cors_url + bnn_url, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      });

      const document = html.data;
      const str = document.replace(/<br> /g, '\n');
      let $ = cheerio.load(str);
      const cnt_seasons = $('.season-episodes').length;
      const newSeasons = [];

      for (let a = 1; a < cnt_seasons + 1; a++) {
        const name_season = $(`#season${a}`)
          .text()
          .trim();
        const e = $(`#season${a} ~ a`);
        newSeasons.push(name_season);

        const cntEpisode = e.length;
        const eachEpisodes = [];
        for (let b = 0; b < cntEpisode; b++) {
          eachEpisodes.push(e[b].children[0].data);
        }
        episodes.current.push(eachEpisodes);
      }
      setSeasons(prevSeasons => [...prevSeasons, ...newSeasons]);
    } catch (error) {
      console.error(error);
    }
  };


  const clickSeason = e => {
    click.current = true;
    const idx = e.target.name - 1;

    setSeasonIdx(idx + 1);

    setEpisodeNow(episodes.current[idx]);
    setEpisodeIdx(-1);

    scriptClicked.current = false;
    setTitle('');
    setScript('');
  };

  const clickEpisode = e => {
    setEpisodeIdx(e.target.name);
  };

  // 임의의 script, title을 가져오는 함수
  const getScripts = async () => {
    setTitle('');
    let info = 's';
    seasonIdx > 9 ? (info += seasonIdx) : (info += '0' + seasonIdx);
    info = info + 'e';
    episodeIdx > 9 ? (info += episodeIdx) : (info += '0' + episodeIdx);

    try {
      const html = await axios.get(cors_url + scriptUrl + info, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      });

      const str = html.data.replace(/<br> /g, '\n');
      let $ = cheerio.load(str);
      const title = $('h3')
        .text()
        .trim();
      const scripts = $('div.scrolling-script-container')
        .text()
        .trim();

      setTitle(title);
      setScript(scripts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (episodeIdx > 0) {
      getScripts();
    }
  }, [episodeIdx]);

  useEffect(() => {
    scriptClicked.current = true;
  }, [seasonIdx]);

  useEffect(() => {
    if (!mounted.current) {
      // componentDidMount
      mounted.current = true;
      getSeasons();
    } else {
      // componentDidUpdate
    }
  }, [seasons]);
  return (
    <>
      {episodes.current.length < 1 ? (
        <div style={{padding: "10px"}}>
          <img src={img} alt=""/>
        </div>
      ) : (
        <div style={{padding: "10px"}}>
          <h2>Brooklyn Nine-Nine Scripts  <small>브나나 너무좋아</small></h2>
          <h3>
            {seasons.map(v => {
              return (
                <button className="btn btn-info btn-lg" name={/\d+/.exec(v)} onClick={clickSeason} style={{margin: "2px"}} >
                  {v}
                </button>
              );
            })}
          </h3>
        </div>
      )}

      {click.current && (
        <div style={{padding: "10px"}}>
          {episodeNow.map(v => {
            return (
                <button className="btn btn-success" name={/^\d+/.exec(v)} 
                onClick={clickEpisode} style={{margin: "2px"}}
                >
                  {v}
                </button>
            );
          })}
          <h1> </h1>
        </div>
      )}

      {scriptClicked.current &&
        click.current &&
        (title.length < 2 ? (
          <p className="lead" style={{padding: "12px"}}>
            <mark>S{seasonIdx}-E{episodeIdx}</mark> script is loading...
          </p>
        ) : (
          <div className="" style={{padding: "12px"}}>
            <p class="lead"><mark>S{seasonIdx}-E{episodeIdx}</mark> {title}  </p>
            <pre>{script}</pre>
          </div>
        ))}
    </>
  );
};

export default App;