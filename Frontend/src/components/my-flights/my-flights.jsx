import { useEffect, useState } from "react";
import "./my-flights.css";
import axios from "axios";

function MyFlights() {
  const [flights, SetFlights] = useState([]);
  
  // Uçuşlarımın listesini getirir
  const getFlights = () => {
    axios.get("http://localhost:5000/api/flights/getAll").then((res) => {
      SetFlights(res.data);
    });
  };
  useEffect(() => {
    getFlights();
  }, []);
  return (
    <div className="my-flights">
      <div className="my-flights-wrapper">
        <div className="my-flights-header">
          <div className="header-left">
            <div>
            <button>Times</button>
            <button>Stops</button>
            <button>Airlines</button>
            </div>
            <div>
            <button>Airports</button>
            <button>Amenities</button>
            <select name="" id="">
              <option value="">Edit Search</option>
            </select>
            </div>
          </div>
          <div className="header-rigth">
            <div className="start">
              <div>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <strong></strong>
            <div className="start">
              <div>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star color"></i>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <strong></strong>
            <div className="start">
              <div>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star color"></i>
              </div>
              <div>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <strong></strong>
            <div className="start">
              <div>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star color"></i>
              </div>
              <div>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <strong></strong>
            <div className="start">
              <div>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star color"></i>
              </div>
              <div>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star color"></i>
                <i className="fa-solid fa-star color"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="my-flights-content">
          <div className="content-header">
            <div className="content-left">
              <div>Sort by:</div>
              <select name="" id="">
                <option value="">Recommended</option>
              </select>
            </div>
            <div className="content-rigth">
              <i className="fa-solid fa-circle-info"></i>
              Avg Fare: $225
            </div>
          </div>
          {flights.map((val, index) => {
            return (
              <div key={index} className="content-content">
                <div className="content-content-left">
                  <div>
                    <img
                      src="https://images.flightroutes.com/airlines/100/DL_100px.png"
                      alt=""
                    />
                  </div>
                  <div className="content-bottom-left">
                    <div className="content-date">
                      {new Date(val.departureTime).toLocaleString("tr-TR", {
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZone: "Europe/Berlin",
                      })}{" "}
                      AM -{" "}
                      {new Date(val.arrivalTime).toLocaleString("tr-TR", {
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZone: "Europe/Berlin",
                      })}{" "}
                      AM
                    </div>
                    <div className="content-bottom">
                      <div className="delta">
                        <div>{val.airline}</div>
                        <select name="" id="">
                          <option value="">Flight Details</option>
                        </select>
                      </div>
                      <div>
                        <div>Nonstop</div>
                        <div className="none">
                          {Math.floor(val.flightDuration)}m
                        </div>
                      </div>
                      <div>
                        <div>Belirtilmemiş to {val.arrivalAirport}</div>
                        <div className="none">{val.flightName}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-rigth">
                  <button>
                    <div className="price">$156</div>
                    <div className="main">Main</div>
                  </button>
                  <button>
                    <div className="price">$156</div>
                    <div className="main">Confort+</div>
                  </button>
                  <button className="dock-wrapper">
                    <div className="dock">...</div>
                  </button>
                  <button>
                    <div className="price">$156</div>
                    <div className="main">Delta One</div>
                  </button>
                  <button className="dock-wrapper">
                    <div className="dock">...</div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyFlights;
