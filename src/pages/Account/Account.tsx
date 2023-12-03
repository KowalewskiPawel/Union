import { Palying } from "../../components/Palying";
import "./style.css";

export const Account = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }): JSX.Element => {
  return (
    <div className="index">
      <div className="div">
        <div className="overlap">
          <div className="rectangle-2" />
          <img
            className="user"
            alt="User"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/user-2.svg"
          />
          <img
            className="music"
            alt="Music"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/music-3.svg"
          />
          <img
            className="vector-3"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector.svg"
          />
          <img
            className="vector-4"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-1.svg"
          />
          <div className="text-wrapper-2">Music</div>
          <div className="text-wrapper-3">Library</div>
          <div className="text-wrapper-4">Hot List</div>
          <div className="text-wrapper-5">Account</div>
          <Palying className="playing" />
          <div className="group">
            <div className="text-wrapper-6">Notifications</div>
            <div className="text-wrapper-7">Language</div>
            <div className="text-wrapper-8">Contact Us</div>
            <div className="text-wrapper-9">FAQs</div>
            <div className="text-wrapper-10">Settings</div>
            <img
              className="bell"
              alt="Bell"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/bell.svg"
            />
            <img
              className="globe"
              alt="Globe"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/globe.svg"
            />
            <img
              className="message-square"
              alt="Message square"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/message-square-7.svg"
            />
            <img
              className="help-circle"
              alt="Help circle"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/help-circle.svg"
            />
            <img
              className="settings"
              alt="Settings"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/settings.svg"
            />
            <img
              className="vector-5"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-11.svg"
            />
            <img
              className="vector-6"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-11.svg"
            />
            <img
              className="vector-7"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-11.svg"
            />
            <img
              className="vector-8"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-11.svg"
            />
            <img
              className="vector-9"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-11.svg"
            />
          </div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-11">Account</div>
          <img
            className="arrow-left"
            alt="Arrow left"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/arrow-left.svg"
          />
          <div className="group-2">
            <div className="text-wrapper-12">Parallel White</div>
            <img
              className="edit"
              alt="Edit"
              src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/edit.svg"
            />
          </div>
          <img
            className="UNION"
            alt="Union"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/union-2@2x.png"
          />
          <div className="ellipse-wrapper">
            <div className="ellipse-2" />
          </div>
          <img
            className="PW-logo-2"
            alt="Pw logo"
            src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/pw-logo-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
