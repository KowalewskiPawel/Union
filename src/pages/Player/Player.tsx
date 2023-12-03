import "./style.css";

export const Player = (): JSX.Element => {
  return (
    <div className="index">
      <div className="div">
        <div className="text-wrapper">Now Playing</div>
        <img
          className="arrow-left"
          alt="Arrow left"
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/arrow-left.svg"
        />
        <p className="p">The Song that Fades Away</p>
        <div className="text-wrapper-2">Parallel White</div>
        <div className="group">
          <div className="overlap-group">
            <img
              className="vector"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656ce9a25b82b7da39f85718/img/vector-162.svg"
            />
            <img
              className="img"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656ce9a25b82b7da39f85718/img/vector-163.svg"
            />
            <div className="ellipse" />
          </div>
        </div>
        <div className="text-wrapper-3">00:50</div>
        <div className="text-wrapper-4">04:00</div>
        <div className="overlap">
          <img
            className="vector-2"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656ce9a25b82b7da39f85718/img/vector.svg"
          />
          <img
            className="vector-3"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656ce9a25b82b7da39f85718/img/vector-1.svg"
          />
          <div className="discovery">
            <div className="overlap-2">
              <img
                className="vector-4"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656ce9a25b82b7da39f85718/img/vector-3.svg"
              />
              <div className="ellipse-2" />
              <div className="frame">
                <div className="text-wrapper-5">D</div>
              </div>
            </div>
          </div>
          <img
            className="vector-5"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656ce9a25b82b7da39f85718/img/vector-2.svg"
          />
          <img
            className="UNION"
            alt="Union"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656ce9a25b82b7da39f85718/img/union-3@2x.png"
          />
        </div>
        <img
          className="heart"
          alt="Heart"
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656ce9a25b82b7da39f85718/img/heart.svg"
        />
        <img
          className="ic-round-repeat"
          alt="Ic round repeat"
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656ce9a25b82b7da39f85718/img/ic-round-repeat.svg"
        />
        <img
          className="PW-logo"
          alt="Pw logo"
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656ce9a25b82b7da39f85718/img/pw-logo-1@2x.png"
        />
      </div>
    </div>
  );
};