export const Music = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const onRecommendedTextClick = () => {
    setCurrentPage("recommended");
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#000",
        width: "100%",
        height: "896px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "18px",
        color: "#000",
        fontFamily: "Mulish",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "136px",
          left: "25px",
          borderRadius: "50px",
          backgroundColor: "#757574",
          width: "364px",
          height: "32px",
        }}
      />
      <img
        style={{
          position: "absolute",
          top: "140px",
          left: "32px",
          width: "24px",
          height: "24px",
          overflow: "hidden",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/search.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "834.92px",
          left: "334.41px",
          width: "35px",
          height: "35px",
          overflow: "hidden",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/user.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "835px",
          left: "32px",
          width: "35px",
          height: "35px",
          overflow: "hidden",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/music-2.svg"
      />
      <img
        style={{
          position: "absolute",
          height: "3.91%",
          width: "8.45%",
          top: "93.19%",
          right: "35.27%",
          bottom: "2.9%",
          left: "56.28%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector.svg"
      />
      <img
        style={{
          position: "absolute",
          height: "3.91%",
          width: "8.45%",
          top: "93.19%",
          right: "59.42%",
          bottom: "2.9%",
          left: "32.13%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-1.svg"
      />
      <b
        style={{
          position: "absolute",
          top: "867.04px",
          left: "25px",
          display: "inline-block",
          color: "rgba(246, 213, 37, 0.8)",
          width: "60.67px",
          height: "27.58px",
        }}
      >
        Music
      </b>
      <b
        style={{
          position: "absolute",
          top: "867.04px",
          left: "116.92px",
          display: "inline-block",
          color: "#757574",
          width: "75.37px",
          height: "27.58px",
        }}
      >
        Library
      </b>
      <b
        style={{
          position: "absolute",
          top: "867.04px",
          left: "217.6px",
          display: "inline-block",
          color: "#757574",
          width: "82.73px",
          height: "27.58px",
        }}
      >
        Hot List
      </b>
      <b
        style={{
          position: "absolute",
          top: "867px",
          left: "316px",
          display: "inline-block",
          color: "#757574",
          width: "72px",
          height: "28px",
        }}
      >
        Account
      </b>
      <b
        style={{
          position: "absolute",
          top: "78px",
          left: "24px",
          fontSize: "30px",
          color: "rgba(246, 213, 37, 0.8)",
        }}
      >
        Music
      </b>
      <b
        style={{
          position: "absolute",
          top: "84px",
          left: "120px",
          fontSize: "24px",
          color: "#757574",
          cursor: "pointer",
        }}
        onClick={onRecommendedTextClick}
      >
        Recommended
      </b>
      <b
        style={{
          position: "absolute",
          top: "424px",
          left: "25px",
          color: "#757574",
        }}
      >
        Hot List
      </b>
      <b
        style={{
          position: "absolute",
          top: "428px",
          left: "333px",
          fontSize: "13px",
          color: "#757574",
        }}
      >
        see more
      </b>
      <b
        style={{
          position: "absolute",
          top: "603px",
          left: "333px",
          fontSize: "13px",
          color: "#757574",
        }}
      >
        see more
      </b>
      <b
        style={{
          position: "absolute",
          top: "599px",
          left: "25px",
          color: "#757574",
        }}
      >
        Ground Selections
      </b>
      <div
        style={{
          position: "absolute",
          top: "113px",
          left: "44px",
          borderRadius: "50px",
          backgroundColor: "rgba(246, 213, 37, 0.8)",
          width: "45px",
          height: "5px",
        }}
      />
      <b
        style={{
          position: "absolute",
          top: "141px",
          left: "78px",
          fontSize: "16px",
          color: "#a3a3a3",
        }}
      >
        Search for artists,songs and album
      </b>
      <b
        style={{
          position: "absolute",
          top: "264px",
          left: "42px",
          fontSize: "13px",
        }}
      >
        SMILE
      </b>
      <b
        style={{
          position: "absolute",
          top: "266px",
          left: "42px",
          fontSize: "12px",
          display: "inline-block",
          width: "87px",
          height: "14px",
        }}
      >
        Wizkid ft H.E.R
      </b>
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "50px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 213, 37, 0.45)",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "70px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 213, 37, 0.45)",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "90px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 213, 37, 0.45)",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "110px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 213, 37, 0.45)",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "130px",
          borderRadius: "50%",
          backgroundColor: "rgba(173, 167, 133, 0.8)",
          filter: "blur(1px)",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "150px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 213, 37, 0.45)",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "170px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 213, 37, 0.45)",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "190px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 213, 37, 0.45)",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "210px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 213, 37, 0.45)",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "230px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 213, 37, 0.45)",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "250px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 213, 37, 0.45)",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "270px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 213, 37, 0.45)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "293px",
          left: "290px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 213, 37, 0.45)",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
          width: "10px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "278px",
          left: "327px",
          borderRadius: "50%",
          backgroundColor: "#000",
          width: "30px",
          height: "27px",
        }}
      />
      <img
        style={{
          position: "absolute",
          height: "1.67%",
          width: "3.62%",
          top: "32.37%",
          right: "17.39%",
          bottom: "65.96%",
          left: "78.99%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-2.svg"
      />
      <div
        style={{
          position: "absolute",
          top: "339px",
          left: "15px",
          width: "385px",
          height: "65px",
          fontSize: "14px",
          color: "#f6d525",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "15px",
            backgroundColor: "#000",
            boxShadow: "1px 1px 2px 1px rgba(246, 213, 37, 0.8)",
            width: "65px",
            height: "65px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "80px",
            borderRadius: "15px",
            backgroundColor: "#000",
            boxShadow: "1px 1px 2px 1px rgba(246, 213, 37, 0.8)",
            width: "65px",
            height: "65px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "160px",
            borderRadius: "15px",
            backgroundColor: "#000",
            boxShadow: "1px 1px 2px 1px rgba(246, 213, 37, 0.8)",
            width: "65px",
            height: "65px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "240px",
            borderRadius: "15px",
            backgroundColor: "#000",
            boxShadow: "1px 1px 2px 1px rgba(246, 213, 37, 0.8)",
            width: "65px",
            height: "65px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "320px",
            borderRadius: "15px",
            backgroundColor: "#000",
            boxShadow: "1px 1px 2px 1px rgba(246, 213, 37, 0.8)",
            width: "65px",
            height: "65px",
          }}
        />
        <img
          style={{
            position: "absolute",
            height: "36.1%",
            width: "8.13%",
            top: "13.89%",
            right: "87.79%",
            bottom: "50.01%",
            left: "4.08%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-5.svg"
        />
        <b style={{ position: "absolute", top: "37px", left: "11px" }}>
          charts
        </b>
        <b style={{ position: "absolute", top: "37px", left: "91px" }}>
          artists
        </b>
        <b style={{ position: "absolute", top: "37px", left: "169px" }}>
          albums
        </b>
        <b style={{ position: "absolute", top: "37px", left: "245px" }}>
          playlists
        </b>
        <b style={{ position: "absolute", top: "37px", left: "334px" }}>
          genre
        </b>
        <img
          style={{
            position: "absolute",
            height: "46.15%",
            width: "5.45%",
            top: "9.23%",
            right: "68.05%",
            bottom: "44.62%",
            left: "26.49%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-6.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "5.19px",
            left: "177px",
            width: "31px",
            height: "31px",
            overflow: "hidden",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/disc.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "3px",
            left: "256px",
            width: "33px",
            height: "33px",
            overflow: "hidden",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/playlist-121110-1.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "3px",
            left: "336px",
            width: "33px",
            height: "33px",
            overflow: "hidden",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/music-1.svg"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "753px",
          left: "0px",
          width: "413px",
          height: "83px",
          color: "rgba(246, 213, 37, 0.8)",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "88.62%",
            width: "100%",
            top: "11.38%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            backgroundColor: "#000",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "28.92%",
            width: "38.74%",
            top: "30.12%",
            left: "20.82%",
            display: "flex",
            alignItems: "center",
          }}
        >
          P.L.E.A.S.E.
        </div>
        <div
          style={{
            position: "absolute",
            height: "16.87%",
            width: "17.92%",
            top: "65.06%",
            left: "20.82%",
            fontSize: "10px",
            color: "rgba(246, 217, 62, 0.8)",
            display: "flex",
            alignItems: "center",
          }}
        >
          Parallel White
        </div>
        <img
          style={{
            position: "absolute",
            height: "27.7%",
            width: "5.56%",
            top: "41.84%",
            right: "7.5%",
            bottom: "30.46%",
            left: "86.94%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/vector-3.svg"
        />
        <img
          style={{
            position: "absolute",
            height: "27.7%",
            width: "5.56%",
            top: "41.84%",
            right: "28.33%",
            bottom: "30.46%",
            left: "66.11%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/next-3.svg"
        />
        <img
          style={{
            position: "absolute",
            height: "31.85%",
            width: "6.39%",
            top: "39.76%",
            right: "17.5%",
            bottom: "28.39%",
            left: "76.11%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/next-2.svg"
        />
        <img
          style={{
            position: "absolute",
            height: "4.82%",
            width: "100%",
            top: "8.67%",
            right: "0%",
            bottom: "86.51%",
            left: "0%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/next-2.svg"
        />
        <img
          style={{
            position: "absolute",
            height: "4.82%",
            width: "52.78%",
            top: "8.67%",
            right: "47.22%",
            bottom: "86.51%",
            left: "0%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/pw-logo-2-1@2x.png"
        />
        <div
          style={{
            position: "absolute",
            height: "22.16%",
            width: "4.44%",
            top: "0%",
            right: "45%",
            bottom: "77.84%",
            left: "50.56%",
            borderRadius: "50%",
            backgroundColor: "rgba(246, 213, 37, 0.8)",
          }}
        />
        <img
          style={{
            position: "absolute",
            height: "74.99%",
            width: "14.86%",
            top: "15.66%",
            right: "84.99%",
            bottom: "9.35%",
            left: "0.15%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "cover",
            display: "none",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/dunsin-oyekan-the-difference-1@2x.png"
        />
        <img
          style={{
            position: "absolute",
            height: "84.34%",
            width: "16.95%",
            top: "16.87%",
            right: "82.08%",
            bottom: "-1.2%",
            left: "0.97%",
            borderRadius: "100px",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "cover",
          }}
          alt=""
          src="/pw-logo-2@2x.png"
        />
      </div>
      <img
        style={{
          position: "absolute",
          height: "1.13%",
          width: "1.58%",
          top: "48.21%",
          right: "3.84%",
          bottom: "50.65%",
          left: "94.58%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        alt=""
        src="/vector5.svg"
      />
      <img
        style={{
          position: "absolute",
          height: "1.13%",
          width: "1.58%",
          top: "67.75%",
          right: "3.84%",
          bottom: "31.12%",
          left: "94.58%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        alt=""
        src="/vector6.svg"
      />
      <div
        style={{
          position: "absolute",
          top: "457px",
          left: "25px",
          borderRadius: "15px",
          backgroundColor: "#e7e1e5",
          width: "108px",
          height: "108px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "457px",
          left: "153px",
          borderRadius: "15px",
          backgroundColor: "#ffdf0e",
          width: "108px",
          height: "108px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "457px",
          left: "281px",
          borderRadius: "15px",
          backgroundColor: "#e9f3f5",
          width: "108px",
          height: "108px",
        }}
      />
      <b
        style={{
          position: "absolute",
          top: "570px",
          left: "25px",
          fontSize: "12px",
          lineHeight: "15px",
          color: "#f6d525",
        }}
      >
        Gospel Groove
      </b>
      <b
        style={{
          position: "absolute",
          top: "744px",
          left: "25px",
          fontSize: "12px",
          lineHeight: "15px",
          color: "#f6d525",
        }}
      >
        Let Me Know
      </b>
      <b
        style={{
          position: "absolute",
          top: "744px",
          left: "153px",
          fontSize: "12px",
          lineHeight: "15px",
          color: "#f6d525",
        }}
      >
        Essence
      </b>
      <b
        style={{
          position: "absolute",
          top: "744px",
          left: "281px",
          fontSize: "12px",
          lineHeight: "15px",
          color: "#f6d525",
        }}
      >
        Peru
      </b>
      <b
        style={{
          position: "absolute",
          top: "756px",
          left: "25px",
          fontSize: "9px",
          lineHeight: "15px",
          display: "none",
          color: "rgba(246, 213, 37, 0.5)",
        }}
      >
        Mayorkun
      </b>
      <b
        style={{
          position: "absolute",
          top: "756px",
          left: "153px",
          fontSize: "9px",
          lineHeight: "15px",
          display: "none",
          color: "rgba(246, 213, 37, 0.5)",
        }}
      >
        Wizid ft Tems, Justin Bieber
      </b>
      <b
        style={{
          position: "absolute",
          top: "756px",
          left: "281px",
          fontSize: "9px",
          lineHeight: "15px",
          display: "none",
          color: "rgba(246, 213, 37, 0.5)",
        }}
      >
        Fireboy DML
      </b>
      <b
        style={{
          position: "absolute",
          top: "570px",
          left: "153px",
          fontSize: "12px",
          lineHeight: "15px",
          color: "#f6d525",
        }}
      >
        2021 DANCEHALL
      </b>
      <b
        style={{
          position: "absolute",
          top: "570px",
          left: "281px",
          fontSize: "12px",
          lineHeight: "15px",
          color: "#f6d525",
        }}
      >
        AfroBeat TOP-100
      </b>
      <img
        style={{
          position: "absolute",
          top: "457px",
          left: "45px",
          borderRadius: "15px",
          width: "88px",
          height: "108px",
          objectFit: "cover",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/dunsin-oyekan-the-difference-1@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "496px",
          left: "26px",
          fontSize: "13px",
          lineHeight: "15px",
          fontWeight: "800",
          color: "#704a44",
          display: "inline-block",
          width: "64px",
        }}
      >
        GOSPEL GROOVE
      </div>
      <div
        style={{
          position: "absolute",
          top: "544px",
          left: "32px",
          width: "37.33px",
          height: "16px",
          fontSize: "7px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "-1px",
            borderRadius: "11.43px",
            backgroundColor: "rgba(246, 213, 37, 0.8)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            boxSizing: "border-box",
            width: "39.33px",
            height: "18px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "2px",
            left: "2px",
            width: "12px",
            height: "12px",
            objectFit: "cover",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/ear-1@2x.png"
        />
        <b
          style={{
            position: "absolute",
            top: "0px",
            left: "14px",
            lineHeight: "15px",
          }}
        >
          123.8k
        </b>
      </div>
      <img
        style={{
          position: "absolute",
          top: "457px",
          left: "309px",
          borderRadius: "15px",
          width: "81px",
          height: "108px",
          objectFit: "cover",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/burna-1@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "462px",
          left: "289px",
          fontSize: "13px",
          lineHeight: "15px",
          fontWeight: "800",
          color: "#903928",
          display: "inline-block",
          width: "64px",
        }}
      >
        AfroBeat TOP-100
      </div>
      <img
        style={{
          position: "absolute",
          top: "458px",
          left: "162px",
          borderRadius: "15px",
          width: "99px",
          height: "107px",
          objectFit: "cover",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/shenseea-by-keysus-bb17-2019-billboard-1548-compressed-1@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "469px",
          left: "162px",
          fontSize: "14px",
          lineHeight: "10px",
          fontWeight: "800",
          display: "inline-block",
          width: "35px",
        }}
      >
        2021
      </div>
      <div
        style={{
          position: "absolute",
          top: "484px",
          left: "157px",
          fontSize: "8px",
          lineHeight: "10px",
          fontWeight: "800",
          display: "inline-block",
          width: "52px",
        }}
      >
        DANCEHALL
      </div>
      <div
        style={{
          position: "absolute",
          top: "544px",
          left: "289px",
          width: "37.33px",
          height: "16px",
          fontSize: "7px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "-1px",
            borderRadius: "11.43px",
            backgroundColor: "rgba(246, 213, 37, 0.8)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            boxSizing: "border-box",
            width: "39.33px",
            height: "18px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "2px",
            left: "2px",
            width: "12px",
            height: "12px",
            objectFit: "cover",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/ear-1@2x.png"
        />
        <b
          style={{
            position: "absolute",
            top: "0px",
            left: "14px",
            lineHeight: "15px",
          }}
        >
          567.9k
        </b>
      </div>
      <div
        style={{
          position: "absolute",
          top: "544px",
          left: "161px",
          width: "37.33px",
          height: "16px",
          fontSize: "7px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "-1px",
            borderRadius: "11.43px",
            backgroundColor: "rgba(246, 213, 37, 0.8)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            boxSizing: "border-box",
            width: "39.33px",
            height: "18px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "2px",
            left: "2px",
            width: "12px",
            height: "12px",
            objectFit: "cover",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/ear-1@2x.png"
        />
        <b
          style={{
            position: "absolute",
            top: "0px",
            left: "14px",
            lineHeight: "15px",
          }}
        >
          234.3k
        </b>
      </div>
      <img
        style={{
          position: "absolute",
          top: "632px",
          left: "25px",
          borderRadius: "15px",
          width: "108px",
          height: "108px",
          objectFit: "cover",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/mayorkun-let-me-know-mp3-1@2x.png"
      />
      <img
        style={{
          position: "absolute",
          top: "632px",
          left: "153px",
          borderRadius: "15px",
          width: "108px",
          height: "108px",
          objectFit: "cover",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/essencee-cover-scaled-1@2x.png"
      />
      <img
        style={{
          position: "absolute",
          top: "632px",
          left: "281.25px",
          borderRadius: "15.43px",
          width: "108px",
          height: "108px",
          objectFit: "cover",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/fireboy-dml-peru-1@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "719px",
          left: "32px",
          width: "37.33px",
          height: "16px",
          fontSize: "7px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "-1px",
            borderRadius: "11.43px",
            backgroundColor: "rgba(246, 213, 37, 0.8)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            boxSizing: "border-box",
            width: "39.33px",
            height: "18px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "2px",
            left: "2px",
            width: "12px",
            height: "12px",
            objectFit: "cover",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/ear-1@2x.png"
        />
        <b
          style={{
            position: "absolute",
            top: "0px",
            left: "14px",
            lineHeight: "15px",
          }}
        >
          212.2k
        </b>
      </div>
      <div
        style={{
          position: "absolute",
          top: "719px",
          left: "161px",
          width: "37.33px",
          height: "16px",
          fontSize: "7px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "-1px",
            borderRadius: "11.43px",
            backgroundColor: "rgba(246, 213, 37, 0.8)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            boxSizing: "border-box",
            width: "39.33px",
            height: "18px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "2px",
            left: "2px",
            width: "12px",
            height: "12px",
            objectFit: "cover",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/ear-1@2x.png"
        />
        <b
          style={{
            position: "absolute",
            top: "0px",
            left: "14px",
            lineHeight: "15px",
          }}
        >
          812.2k
        </b>
      </div>
      <div
        style={{
          position: "absolute",
          top: "719px",
          left: "289px",
          width: "37.33px",
          height: "16px",
          fontSize: "7px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "-1px",
            borderRadius: "11.43px",
            backgroundColor: "rgba(246, 213, 37, 0.8)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            boxSizing: "border-box",
            width: "39.33px",
            height: "18px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "2px",
            left: "2px",
            width: "12px",
            height: "12px",
            objectFit: "cover",
          }}
          alt=""
          src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/ear-1@2x.png"
        />
        <b
          style={{
            position: "absolute",
            top: "0px",
            left: "14px",
            lineHeight: "15px",
          }}
        >
          412.7k
        </b>
      </div>
      <img
        style={{
          position: "absolute",
          top: "180px",
          left: "24px",
          borderRadius: "20px",
          width: "365px",
          height: "100px",
          objectFit: "cover",
        }}
        alt=""
        src="https://cdn.animaapp.com/projects/64b4de4905dc166a281390d9/releases/656cdc9b9b783cd1211b1a47/img/inv-1@2x.png"
      />
      <b
        style={{
          position: "absolute",
          top: "259px",
          left: "292px",
          fontSize: "24px",
          fontFamily: "Tangerine",
          color: "#fff",
          textAlign: "center",
          filter: "blur(1px)",
        }}
      >
        Selections
      </b>
    </div>
  );
};
