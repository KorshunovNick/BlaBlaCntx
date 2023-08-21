import { useState, FC } from "react";

interface AddressProps {
  city: string;
  geo: { lat: string; lng: string };
  street: string;
  suite: string;
  zipcode: string;
}
const Address: FC<AddressProps> = ({ city, geo, street, suite }) => {
  const [showCordinates, setShowCordinates] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4>Adress</h4>
      <div style={{ textAlign: "left" }}>
        <p>
          <b>City:</b> {city}
        </p>
        <p>
          <b>Street:</b> {street}
        </p>
        <p>
          <b>Suite:</b> {suite}
        </p>
      </div>
      {!showCordinates ? (
        <p
          style={{
            border: "1px solid black",
            cursor: "pointer",
            background:
              "linear-gradient(145deg,rgb(130, 213, 130),rgb(17, 103, 17),darkgreen)",
            color: "white",
            width: "50%",
            transition: "background 1s linear 500ms",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setShowCordinates(!showCordinates);
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(145deg,darkgreen,rgb(17, 103, 17),rgb(130, 213, 130))";
            if (e.currentTarget.firstChild)
              e.currentTarget.firstChild.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(145deg,rgb(130, 213, 130),rgb(17, 103, 17),darkgreen)";
            if (e.currentTarget.firstChild)
              e.currentTarget.firstChild.style.transform = "scale(1)";
          }}
        >
          <p>
            <b>Show cordinates</b>
          </p>
        </p>
      ) : (
        <>
          <p>SW: {geo.lat}</p>
          <p>EH: {geo.lng}</p>
          <p
            onClick={(e) => {
              e.stopPropagation();
              setShowCordinates(!showCordinates);
            }}
            style={{
              border: "1px solid black",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            <b>Hide cordinates</b>
          </p>
        </>
      )}
    </div>
  );
};

export default Address;
