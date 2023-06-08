const Head = (
  <div
    style={{
      width: "25px",
      height: "25px",
      borderRadius: "100%",
      border: "5px solid black",
      position: "absolute",
      top: "25px",
      right: "-15px",
    }}
  />
);

const Body = (
  <div
    style={{
      width: "5px",
      height: "51px",
      background: "black",
      position: "absolute",
      top: "59px",
      right: 0,
    }}
  />
);

const RightArm = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "75px",
      right: "-50px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LeftArm = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "75px",
      right: "5px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RightLeg = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "105px",
      right: "-45px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LeftLeg = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "105px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BodyParts.slice(0, numberOfGuesses).map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <div
        style={{
          width: "5px",
          height: "25px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />

      <div
        style={{
          width: "100px",
          height: "5px",
          background: "black",
          marginLeft: "60px",
        }}
      />

      <div
        style={{
          width: "5px",
          height: "200px",
          background: "black",
          marginLeft: "60px",
        }}
      />

      <div style={{ height: "5px", width: "125px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;
