import "./style.css";

export const Recommended = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }): JSX.Element => {

    const switchToMusic = () => {
        setCurrentPage("music");
    };

  return (
    <div className="index">
      <div className="div">
        <div className="overlap">
          <img
            className="search"
            alt="Search"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/search.svg"
          />
          <p className="text-wrapper">Search for artists,songs and album</p>
        </div>
        <div className="overlap-group">
          <img
            className="user"
            alt="User"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/user.svg"
          />
          <img
            className="music"
            alt="Music"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/music-2.svg"
          />
          <img
            className="vector"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector.svg"
          />
          <img
            className="img"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-1.svg"
          />
          <div className="text-wrapper-2">Music</div>
          <div className="text-wrapper-3">Library</div>
          <div className="text-wrapper-4">Hot List</div>
          <div className="text-wrapper-5">Account</div>
          <div className="rectangle" />
          <div className="text-wrapper-6">Wait</div>
          <div className="text-wrapper-7">Teni</div>
          <img
            className="heart"
            alt="Heart"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/heart-6.svg"
          />
          <div className="text-wrapper-8">6.7k</div>
          <div className="text-wrapper-9">2.7k</div>
          <div className="text-wrapper-10">1.7k</div>
          <div className="text-wrapper-11">2.8k</div>
          <img
            className="play-circle"
            alt="Play circle"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/play-circle-4.svg"
          />
          <img
            className="share"
            alt="Share"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/share-2-6.svg"
          />
          <img
            className="message-square"
            alt="Message square"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/message-square-6.svg"
          />
          <img
            className="teni-wait"
            alt="Teni wait"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/teni-wait-1@2x.png"
          />
          <div className="palying">
            <div className="overlap-group-2">
              <div className="rectangle-2" />
              <div className="text-wrapper-12">P.L.E.A.S.E.</div>
              <div className="dunsin">Parallel White</div>
              <img
                className="next"
                alt="Next"
                src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/next-2.svg"
              />
              <img
                className="next-2"
                alt="Next"
                src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/next-3.svg"
              />
              <img
                className="pause"
                alt="Pause"
                src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/pause-1.svg"
              />
              <img
                className="vector-2"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-162-1.svg"
              />
              <img
                className="vector-3"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-163-1.svg"
              />
              <div className="ellipse" />
            </div>
          </div>
          <img
            className="download"
            alt="Download"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/download-6.svg"
          />
          <img
            className="PW-logo"
            alt="Pw logo"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/pw-logo-2-1@2x.png"
          />
        </div>
        <div className="text-wrapper-13" onClick={switchToMusic}>Music</div>
        <div className="text-wrapper-14">Recommended</div>
        <div className="rectangle-3" />
        <div className="navbar">
          <div className="rectangle-4" />
          <img
            className="mayorkun-let-me-know"
            alt="Mayorkun let me know"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/mayorkun-let-me-know-mp3-2@2x.png"
          />
          <div className="text-wrapper-15">Let Me Know</div>
          <div className="text-wrapper-16">Mayorkun</div>
          <img
            className="heart-2"
            alt="Heart"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/heart.svg"
          />
          <div className="text-wrapper-17">6.7k</div>
          <div className="text-wrapper-18">2.7k</div>
          <div className="text-wrapper-19">2.8k</div>
          <div className="text-wrapper-20">1.7k</div>
          <img
            className="play-circle-2"
            alt="Play circle"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/play-circle.svg"
          />
          <img
            className="share-2"
            alt="Share"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/share-2.svg"
          />
          <img
            className="message-square-2"
            alt="Message square"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/message-square.svg"
          />
          <img
            className="download-2"
            alt="Download"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/download.svg"
          />
        </div>
        <div className="navbar-2">
          <div className="rectangle-4" />
          <div className="text-wrapper-21">Essence</div>
          <div className="text-wrapper-22">Wizkid ft Tems,Justin Bieber</div>
          <img
            className="heart-3"
            alt="Heart"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/heart-1.svg"
          />
          <div className="text-wrapper-23">6.7k</div>
          <div className="text-wrapper-24">2.7k</div>
          <div className="text-wrapper-25">1.7k</div>
          <div className="text-wrapper-26">2.8k</div>
          <img
            className="play-circle-3"
            alt="Play circle"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/play-circle.svg"
          />
          <img
            className="share-3"
            alt="Share"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/share-2-1.svg"
          />
          <img
            className="message-square-3"
            alt="Message square"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/message-square-1.svg"
          />
          <img
            className="essencee-cover"
            alt="Essencee cover"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/essencee-cover-scaled-2@2x.png"
          />
          <img
            className="download-3"
            alt="Download"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/download-1.svg"
          />
        </div>
        <div className="navbar-3">
          <div className="rectangle-5" />
          <div className="text-wrapper-21">Peru</div>
          <div className="text-wrapper-22">Fireboy DML</div>
          <img
            className="heart-3"
            alt="Heart"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/heart-2.svg"
          />
          <div className="text-wrapper-23">6.7k</div>
          <div className="text-wrapper-24">2.7k</div>
          <div className="text-wrapper-25">1.7k</div>
          <div className="text-wrapper-26">2.8k</div>
          <img
            className="play-circle-3"
            alt="Play circle"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/play-circle.svg"
          />
          <img
            className="share-3"
            alt="Share"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/share-2-2.svg"
          />
          <img
            className="message-square-3"
            alt="Message square"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/message-square-2.svg"
          />
          <img
            className="fireboy-DML-peru"
            alt="Fireboy DML peru"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/fireboy-dml-peru-2@2x.png"
          />
          <img
            className="download-3"
            alt="Download"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/download-2.svg"
          />
        </div>
        <div className="navbar-4">
          <div className="rectangle-6" />
          <div className="text-wrapper-27">Smile</div>
          <div className="text-wrapper-28">Wizkid ft H.E.R</div>
          <img
            className="heart-4"
            alt="Heart"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/heart-3.svg"
          />
          <div className="text-wrapper-29">6.7k</div>
          <div className="text-wrapper-30">2.7k</div>
          <div className="text-wrapper-31">1.7k</div>
          <div className="text-wrapper-32">2.8k</div>
          <img
            className="play-circle-4"
            alt="Play circle"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/play-circle.svg"
          />
          <img
            className="share-4"
            alt="Share"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/share-2-3.svg"
          />
          <img
            className="message-square-4"
            alt="Message square"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/message-square-3.svg"
          />
          <img
            className="wizkid-smile"
            alt="Wizkid smile"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/wizkid-smile-2@2x.png"
          />
          <img
            className="download-4"
            alt="Download"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/download-3.svg"
          />
        </div>
        <div className="overlap-2">
          <div className="rectangle-7" />
          <div className="text-wrapper-21">Lie</div>
          <div className="text-wrapper-22">Kizz Daniel</div>
          <img
            className="heart-3"
            alt="Heart"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/heart-4.svg"
          />
          <div className="text-wrapper-23">6.7k</div>
          <div className="text-wrapper-24">2.7k</div>
          <div className="text-wrapper-25">1.7k</div>
          <div className="text-wrapper-26">2.8k</div>
          <img
            className="play-circle-3"
            alt="Play circle"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/play-circle-4.svg"
          />
          <img
            className="share-3"
            alt="Share"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/share-2-4.svg"
          />
          <img
            className="message-square-3"
            alt="Message square"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/message-square-4.svg"
          />
          <img
            className="lie-art-scaled"
            alt="Lie art scaled"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/lie-art-scaled-1@2x.png"
          />
          <img
            className="download-3"
            alt="Download"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/download-4.svg"
          />
        </div>
        <div className="overlap-3">
          <div className="rectangle-8" />
          <div className="text-wrapper-21">Sare</div>
          <div className="text-wrapper-22">Ayra Starr</div>
          <img
            className="heart-3"
            alt="Heart"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/heart-5.svg"
          />
          <div className="text-wrapper-23">6.7k</div>
          <div className="text-wrapper-24">2.7k</div>
          <div className="text-wrapper-25">1.7k</div>
          <div className="text-wrapper-26">2.8k</div>
          <img
            className="play-circle-3"
            alt="Play circle"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/play-circle-4.svg"
          />
          <img
            className="share-3"
            alt="Share"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/share-2-5.svg"
          />
          <img
            className="message-square-3"
            alt="Message square"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/message-square-5.svg"
          />
          <img
            className="ayra-starr-scaled"
            alt="Ayra starr scaled"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/ayra-starr-scaled-1@2x.png"
          />
          <img
            className="download-3"
            alt="Download"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/download-5.svg"
          />
        </div>
      </div>
    </div>
  );
};