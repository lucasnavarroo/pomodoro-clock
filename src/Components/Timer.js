import React, { Component } from "react";
import { Typography, Button, IconButton, Icon } from "@material-ui/core";
import PlayIcon from "@material-ui/icons/PlayCircleFilled";
import PauseIcon from "@material-ui/icons/PauseCircleFilled";
import StopIcon from "@material-ui/icons/Stop";

// const styles = {
// }

class Timer extends Component {
  state = {
    isPlaying: false,
    sessionMinutes: 1,
    sessionSeconds: 10,
    sessionLength: 25,
    breakLength: 5
  };

  countDownTimer = () => {
    let { sessionSeconds, sessionMinutes } = this.state;

    if (sessionSeconds > 0) {
      setTimeout(() => {
        this.setState(prevstate => ({
          sessionSeconds: prevstate.sessionSeconds - 1
        }));
      }, 1000);
    }
    if (sessionMinutes > 0 && sessionSeconds === 0) {
      setTimeout(() => {
        this.setState(prevstate => ({
          sessionMinutes: prevstate.sessionMinutes - 1,
          sessionSeconds: 60
        }));
      }, 1000);
    }
  };

  render() {
    let { sessionMinutes, sessionSeconds, isPlaying } = this.state;
    return (
      <div>
        {isPlaying ? this.countDownTimer() : null}
        <Typography>{`${sessionMinutes}.${
          sessionSeconds >= 10 ? sessionSeconds : "0" + sessionSeconds
        }`}</Typography>
        <IconButton
          onClick={() => {
            isPlaying
              ? this.setState({
                  isPlaying: false
                })
              : this.setState({ isPlaying: true });
          }}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </IconButton>
        <IconButton
            onClick={() => {
                this.setState({
                    isPlaying: false,
                    sessionMinutes: 25,
                    sessionSeconds: 1
                })
            }}
        >
            <StopIcon/>
        </IconButton>
      </div>
    );
  }
}

export default Timer;
