import "./SlashStyles.css";
import BackgroundImage from "./background.png";
import BackgroundHeadset from "./BACKGROUND-headset.png";
import DiscoverButton from "./discover-button.png";

export const Slash = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }): JSX.Element => {

  const handleClick = () => {
    setCurrentPage("music");
  };

    return (
      <div className="slash">
        <div className="overlap-wrapper">
          <div className="overlap">
            <img className="element-dsbtsyga" alt="Element dsbtsyga" src={BackgroundImage} />
            <div className="bubble-background">
              <div className="overlap-group">
                <div className="ellipse" />
                <div className="div" />
                <div className="ellipse-2" />
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="ellipse" />
                <div className="div" />
                <div className="ellipse-2" />
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper">Just Streaming!</div>
            </div>
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <img className="BACKGROUND-headset" alt="Background headset" src={BackgroundHeadset} />
            <img className="action-button" alt="Action button" src={DiscoverButton} onClick={handleClick}/>
          </div>
        </div>
      </div>
    );
  };