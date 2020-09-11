import React, { useEffect, useState } from 'react'

const useMultiAudio = urls => {
  const [sources] = useState(
    urls.map(url => {
      return {
        url,
        audio: new Audio(url)
      };
    })
  );

  const [players, setPlayers] = useState(
    urls.map(url => {
      return {
        url,
        playing: false
      };
    })
  );

  const toggle = targetIndex => () => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex(p => p.playing === true);
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
  };

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause();
    });
  }, [sources, players]);

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = false;
        setPlayers(newPlayers);
      });
    });
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener("ended", () => {
          const newPlayers = [...players];
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      });
    };
  }, [sources, players]);

  return [players, toggle];
}

const MultiPlayer = ({ urls }) => {
  const [players, toggle] = useMultiAudio(urls);
  return (
    <>
      {players.map((player, i) => (
        <Player key={i} player={player} toggle={toggle(i)} />
      ))}
    </>
  )
}

const Player = ({ player, toggle }) => (
  <>
    <button onClick={toggle} type="button" className="btn btn-play">
      <span className="sr-only">{player.playing ? "Pause" : "Play"}</span>
      <ion-icon name={player.playing ? "pause-circle" : "play-circle"} size="large" />
    </button>
  </>
)

export default MultiPlayer;
