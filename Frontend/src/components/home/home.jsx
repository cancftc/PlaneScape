import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [flightDetails, setFlightDetails] = useState([]);
  const [fromDateTime, setFromDateTime] = useState("");
  const [toDateTime, setToDateTime] = useState("");

  // Uçuşların Tarihlere göre Filtreleme yapmasını sağlar
  const filterDate = async () => {
    if (fromDateTime === "" && toDateTime === "") {
      getFlights();
    } else {
      const response = await axios.get(
        `https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime&fromDateTime=${fromDateTime}T00:00:00&toDateTime=${toDateTime}T00:00:00`,
        {
          headers: {
            ResourceVersion: "v4",
            app_id: "57fde0e3",
            Accept: "application/json",
            app_key: "751fb8c85164554f47c4576a7298ca1c",
          },
        }
      );
      const flights = response.data.flights;
      console.log(flights);

      const airportCountryMap = {
        FAO: "Portekiz",
        MAD: "İspanya",
        LHR: "İngiltere",
        NCE: "Fransa",
        PMI: "İspanya",
        IBZ: "İspanya",
        OPO: "Portekiz",
        FUE: "İspanya",
        MIA: "Amerika Birleşik Devletleri",
        LPA: "İspanya",
        VLC: "İspanya",
        RHO: "Yunanistan",
        LCA: "Kıbrıs",
        HER: "Yunanistan",
        TFS: "İspanya",
        PFO: "Kıbrıs",
        ATH: "Yunanistan",
        GRO: "İspanya",
        ADB: "Türkiye",
        ALC: "İspanya",
      };

      const flightInfo = flights.map((flightData) => ({
        departureAirportCode: flightData.route.eu,
        arrivalAirport: flightData.route.destinations[0],
        departureTime: flightData.scheduleDateTime,
        arrivalTime: flightData.estimatedLandingTime,
        airline: flightData.prefixIATA,
        arrivalCountry: airportCountryMap[flightData.route.destinations[0]],
        flightDuration:
          (new Date(flightData.estimatedLandingTime) -
            new Date(flightData.scheduleDateTime)) /
          (1000 * 60),
      }));

      setFlightDetails(flightInfo);
    }
  };

  // Uçuşların listesini getirir
  const getFlights = async () => {
    const response = await axios.get(
      "https://api.schiphol.nl/public-flights/flights",
      {
        headers: {
          ResourceVersion: "v4",
          app_id: "57fde0e3",
          Accept: "application/json",
          app_key: "751fb8c85164554f47c4576a7298ca1c",
        },
      }
    );
    const flights = response.data.flights;
    console.log(flights);

    const airportCountryMap = {
      FAO: "Portekiz",
      MAD: "İspanya",
      LHR: "İngiltere",
      NCE: "Fransa",
      PMI: "İspanya",
      IBZ: "İspanya",
      OPO: "Portekiz",
      FUE: "İspanya",
      MIA: "Amerika Birleşik Devletleri",
      LPA: "İspanya",
      VLC: "İspanya",
      RHO: "Yunanistan",
      LCA: "Kıbrıs",
      HER: "Yunanistan",
      TFS: "İspanya",
      PFO: "Kıbrıs",
      ATH: "Yunanistan",
      GRO: "İspanya",
      ADB: "Türkiye",
      ALC: "İspanya",
    };

    const flightInfo = flights.map((flightData) => ({
      departureAirportCode: flightData.route.eu,
      arrivalAirport: flightData.route.destinations[0],
      departureTime: flightData.scheduleDateTime,
      arrivalTime: flightData.actualLandingTime,
      flightName: flightData.flightName,
      airline: flightData.prefixIATA,
      arrivalCountry: airportCountryMap[flightData.route.destinations[0]],
      flightDuration:
        (new Date(flightData.actualLandingTime) -
          new Date(flightData.scheduleDateTime)) /
        (1000 * 60),
    }));

    setFlightDetails(flightInfo);
  };

  // Uçuşlar uçuşlarım sayfasına ekleme sini sağlar
  const addFlights = (
    departureTime,
    arrivalTime,
    airline,
    flightDuration,
    arrivalAirport,
    flightName
  ) => {
    const data = {
      departureTime: departureTime,
      arrivalTime: arrivalTime,
      airline: airline,
      flightDuration: flightDuration,
      arrivalAirport: arrivalAirport,
      flightName: flightName,
    };
    console.log(data);
    axios
      .post("http://localhost:5000/api/flights/add", data)
      .then((res) => {
        alert(res.data.message);
        navigate("my-flights");
      })
      .catch((err) => {
        alert(err.data.message);
      });
  };
  useEffect(() => {
    getFlights();
  }, []);

  return (
    <div className="container">
      <div className="home-wrapper">
        <div className="home-left">
          <div className="search-section">
            <div className="search-header">
              <div className="search-title">
                <i className="fa-solid fa-plane"></i>
                BOOK YOUR FLİGHT
              </div>
              <div>
                <button className="round-trip-button">Round trip</button>
                <button className="one-way-button">One way</button>
              </div>
            </div>
            <div className="filter-section">
              <div className="departure-arrival-inputs">
                <div>
                  <i className="fa-solid fa-plane-departure"></i>
                  <input type="text" />
                </div>
                <div>
                  <i className="fa-solid fa-plane-arrival"></i>
                  <input type="text" />
                </div>
              </div>
              <div className="date-inputs">
                <div>
                  <i className="fa-solid fa-calendar-day"></i>
                  <input
                    type="text"
                    onChange={(e) => setFromDateTime(e.target.value)}
                    placeholder="YYYY-AA-GG"
                  />
                </div>
                <div>
                  <i className="fa-solid fa-calendar-day"></i>
                  <input
                    type="text"
                    onChange={(e) => setToDateTime(e.target.value)}
                    placeholder="YYYY-AA-GG"
                  />
                </div>
              </div>
            </div>
            <button onClick={filterDate} className="show-flights-button">
              Show flights
            </button>
          </div>
          <div className="flight-results">
            <div className="flights-list">
              {flightDetails.map((flight, index) => (
                <div key={index} className="flight-card">
                  <div className="flight-info">
                    <div className="title">
                      Belirtilmemiş - {flight.arrivalCountry}
                    </div>
                    <div className="route">
                      <div className="departure-details">
                        <div className="route-header-top">
                          <i className="fa-solid fa-plane-departure"></i>
                          <div>Departure</div>
                        </div>
                        <div className="departure-time">
                          {new Date(flight.departureTime).toLocaleString(
                            "tr-TR",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              timeZone: "Europe/Berlin",
                            }
                          )}
                          AM
                        </div>
                        <div>Airport: Belirtilmemiş</div>
                      </div>
                      <strong></strong>
                      <div className="flight-airline">
                        <div className="airline-name">{flight.airline}</div>
                        <i className="fa-solid fa-plane"></i>
                        <div className="flightDuration">
                          {Math.floor(flight.flightDuration)}m (Nonstop)
                        </div>
                      </div>
                      <strong className="strong strong2"></strong>
                      <div>
                        <div className="arrival-details">
                          <i className="fa-solid fa-plane-arrival"></i>
                          <div>Arrival</div>
                        </div>
                        <div className="departure-time">
                          {new Date(flight.arrivalTime).toLocaleString(
                            "tr-TR",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              timeZone: "Europe/Berlin",
                            }
                          )}
                          AM
                        </div>
                        <div>Airport: {flight.arrivalAirport}</div>
                      </div>
                    </div>
                    <div className="booking-info">
                      <div className="left">
                        <div>Price: $200</div>
                        <div>Round Trip</div>
                      </div>
                      <div
                        onClick={() =>
                          addFlights(
                            flight.departureTime,
                            flight.arrivalTime,
                            flight.airline,
                            flight.flightDuration,
                            flight.arrivalAirport,
                            flight.flightName
                          )
                        }
                        className="rigth"
                      >
                        Book Fligth
                      </div>
                    </div>
                  </div>
                  <div className="tickets-details">
                    <a href="#">Check the details</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="filter-sidebar">
              <div className="sort">
                <div>
                  <strong>Sort by:</strong>
                </div>
                <div className="custom-select">
                  <select>
                    <option value="">Lowest Price</option>
                  </select>
                </div>
              </div>
              <div className="arrival-time">
                <div>
                  <strong>Arrvial Time </strong>
                </div>
                <div className="radio">
                  <input type="radio" />
                  <div>5:00 AM - 11:59 AM</div>
                </div>
                <div className="radio">
                  <input type="radio" />
                  <div>5:00 AM - 11:59 AM</div>
                </div>
              </div>
              <div className="stops">
                <div>
                  <strong>Stops</strong>
                </div>
                <div className="stop-option">
                  <div className="radio">
                    <input type="radio" />
                    <div>Nonstop</div>
                  </div>
                  <div>$230</div>
                </div>
                <div className="stop-option">
                  <div className="radio">
                    <input type="radio" />
                    <div>1 Stop</div>
                  </div>
                  <div>$230</div>
                </div>
                <div className="stop-option">
                  <div className="radio">
                    <input type="radio" />
                    <div>2+ Stops</div>
                  </div>
                  <div>$230</div>
                </div>
              </div>
              <div className="airlens">
                <div>
                  <strong>Airlines Included</strong>
                </div>
                <div className="stop-option">
                  <div className="radio">
                    <input type="radio" />
                    <div>Alitalia</div>
                  </div>
                  <div>$230</div>
                </div>
                <div className="stop-option">
                  <div className="radio">
                    <input type="radio" />
                    <div>Lufthansa</div>
                  </div>
                  <div>$230</div>
                </div>
                <div className="stop-option">
                  <div className="radio">
                    <input type="radio" />
                    <div>Air France</div>
                  </div>
                  <div>$230</div>
                </div>
                <div className="stop-option">
                  <div className="radio">
                    <input type="radio" />
                    <div>Brusseis Airlenes</div>
                  </div>
                  <div>$230</div>
                </div>
                <div className="stop-option">
                  <div className="radio">
                    <input type="radio" />
                    <div>Air Italy</div>
                  </div>
                  <div>$230</div>
                </div>
                <div className="stop-option">
                  <div className="radio">
                    <input type="radio" />
                    <div>Air Sİberia</div>
                  </div>
                  <div>$230</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="additional-services">
          <div className="additional-services-item car-rentals2">
            <img
              src="https://www.promponasrentacar.com/wp-content/uploads/2023/04/car-summer-1.jpg"
              alt=""
            />
            <div className="car-rentals-text">CAR RENTALS</div>
            <i className="fa-solid fa-car-rear"></i>
          </div>
          <div className="additional-services-item hotels">
            <img
              src="https://images.bubbleup.com/width1920/quality35/mville2017/1-brand/1-margaritaville.com/gallery-media/220803-compasshotel-medford-pool-73868-1677873697-78625-1694019828.jpg"
              alt=""
            />
            <div className="car-rentals-text">HOTELS</div>
            <i className="fa-solid fa-hotel"></i>
          </div>
          <div className="additional-services-item travel">
            <img
              src="https://blog.obilet.com/wp-content/uploads/2019/11/Kolay-Bavul-Haz%C4%B1rlama-1.jpg"
              alt=""
            />
            <div className="car-rentals-text">TRAVEL PACKAGES</div>
            <i className="fa-solid fa-umbrella-beach"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
