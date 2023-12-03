export const Logo = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {

  const handleClick = () => {
    setCurrentPage('slash');
  };

  return (
    <img
      loading="lazy"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656ced6d0f49427113e95209/img/union-1.png"
    />
  );
};
