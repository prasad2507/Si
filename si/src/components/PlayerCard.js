import React, { useEffect, useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
// import profilePhoto from "../player-images/63706.jpg";

const PlayerCard = (props) => {
  const [ascArray, setAscArray] = useState([]);
  const [searchPlayer, setSearchPlayer] = useState("");

  useEffect(() => {
    const propsValue =
      props.items.playerList &&
      props.items.playerList.sort((a, b) => a.Value - b.Value);
    setAscArray(propsValue);
  });
  return (
    <div>
      <Col md={6} className="mx-auto">
        <Form>
          <Form.Control
            type="text"
            placeholder="Search Players"
            onChange={(event) => {
              setSearchPlayer(event.target.value);
            }}
          />
        </Form>
      </Col>

      <Row className="mt-3">
        {ascArray &&
          ascArray
            .filter((val) => {
              if (searchPlayer === "") {
                return val;
              } else if (
                val.PFName.toLowerCase().includes(searchPlayer.toLowerCase())
              ) {
                return val;
              }
            })
            .map((data) => (
              <Col key={data.Id} md={4} className="mb-2">
                <Card className="text-center">
                  <Card.Body>
                    <div>
                      <img
                        src={`../player-images/${data.Id}.jpg`}
                        alt="user_img"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <span>
                      <strong>{data.PFName}</strong>
                    </span>
                    <div>
                      <span>
                        <strong>$:&nbsp;</strong>
                        {data.Value}
                      </span>
                    </div>
                    <div>
                      {data.UpComingMatchesList.map((data1) => (
                        <div>
                          <div>
                            <span>
                              <strong>Upcoming Match:&nbsp;</strong>
                              {data1.CCode} vs {data1.VsCCode}
                            </span>
                          </div>
                          {data1.MDate ? (
                            <div>
                              <span>
                                <strong>Match Time:&nbsp;</strong>
                                {Date(data1.MDate)}
                              </span>
                            </div>
                          ) : (
                            "No Upcoming match yet"
                          )}
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        <Col md={4}></Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
};

export default PlayerCard;
