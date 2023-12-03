import "./style.css";

interface Props {
  className: unknown;
}

export const Palying = ({ className }: Props): JSX.Element => {
  return (
    <div className={`palying ${className}`}>
      <div className="overlap-group">
        <div className="rectangle" />
        <div className="text-wrapper">P.L.E.A.S.E.</div>
        <div className="dunsin">Parallel White</div>
        <img className="next" alt="Next" />
        <img className="img" alt="Next" />
        <img className="pause" alt="Pause" />
        <img className="vector" alt="Vector" />
        <img className="vector-2" alt="Vector" />
        <div className="ellipse" />
        <img className="PW-logo" alt="Pw logo" />
      </div>
    </div>
  );
};