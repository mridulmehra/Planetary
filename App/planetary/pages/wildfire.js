import axios from "axios";
import React, { useState } from "react";

const wildfire = () => {
  const [displayImage, setDisplayImage] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [date, setDate] = useState();
  const [result, setResult] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const apiKey = "ifAHb64rK915Dh2PmimBXrjt9dfmgRlsavYJSEbY";
  // const [thumbnailUrl, setThumbnailUrl] = useState();
  const url = "http://127.0.0.1:8000/api/";
  const options = [
    { lat: -3.23, lon: -62.23, date: "2019-03-03", name: "Amazon Forest" },
    { lat: 61.01, lon: 28.75, date: "2020-10-29", name: "Tiaga Forest" },
    {
      lat: -6.62,
      lon: 146.988,
      date: "2021-10-29",
      name: "New Guineau Rainforest",
    },
    { lat: 12.23, lon: 92.83, date: "2020-03-03", name: "Baratang" },
  ];
  const [drop, setDrop] = useState(options[0]);
  const callNasaApi = async (e) => {
    if (!show) {
      setLoading(true);
      if (longitude !== "" && latitude !== "" && date !== "") {
        e.preventDefault();
        console.log(longitude);
        console.log(latitude);
        try {
          let nasaUrl = `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=${date}&&dim=0.10&api_key=${apiKey}`;
          console.log(nasaUrl);
          const resp = await axios.get(nasaUrl);
          if (resp.data.url) {
            uploadModelInput(resp.data.url);
          }
        } catch (error) {
          console.log(error); // !toast
          // console.log(error.response.data.msg); // !toast
        }
      }
    } else {
      e.preventDefault();
      console.log(drop);
      try {
        let nasaUrl = `https://api.nasa.gov/planetary/earth/assets?lon=${drop.lon}&lat=${drop.lat}&date=${drop.date}&&dim=0.10&api_key=${apiKey}`;
        console.log(nasaUrl);
        const resp = await axios.get(nasaUrl);
        if (resp.data.url) {
          uploadModelInput(resp.data.url);
        }
      } catch (error) {
        console.log(error); // !toast
        // console.log(error.response.data.msg); // !toast
      }
    }
  };

  const uploadModelInput = async (thumbnail) => {
    // * code for download and querying
    let thumbnailUrl = thumbnail;
    await axios
      .get(thumbnailUrl, { responseType: "blob" })
      .then(function (response) {
        const formData = new FormData();

        formData.append("image", response.data, "1.png");

        axios
          .post(url, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(function (response) {
            console.log(response);
            setDisplayImage(response.data.image_path);
            setResult(response.data.result);
            setLoading(false);
          })
          .catch(function (error) {
            console.error("Request failed:", error);
          });
      })
      .catch(function (error) {
        console.error("Failed to download thumbnail image:", error);
      });
  };
  const handleSwitch = () => {
    setShow((prev) => !prev);
    setResult();
    setLoading(false);
  };
  return (
    <div className="flex flex-col bg-gradient-to-r from-orange-500 to-red-500   h-screen">
      <button
        className="text-white hover:scale-105 self-center my-8 mx-5 px-5 py-2 bg-white-500 bg-opacity-50 rounded-full xl:text-xl border-2"
        onClick={handleSwitch}
      >
        SWITCH
      </button>
      <div className="flex justify-center">
        {show ? (
          <>
            <form onSubmit={callNasaApi}>
              <select
                className="text-2xl p-2 rounded-xl"
                onChange={(e) => setDrop(options[e.target.value])}
              >
                {options.map((option, index) => (
                  <option key={index} value={index}>
                    {`${option.name}`}
                  </option>
                ))}
              </select>

              <button
                className="text-white hover:scale-105 self-center my-8 mx-5 px-5 py-2 bg-white-500 bg-opacity-50 rounded-full xl:text-xl border-2"
                type="submit"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-col">
              <form
                className="flex items-center justify-center"
                onSubmit={callNasaApi}
              >
                <label
                  className="text-white text-2xl font-semibold mx-2"
                  htmlFor="lat"
                >
                  latitude
                </label>
                <input
                  className="rounded-xl p-2"
                  step=".001"
                  type="number"
                  name="lat"
                  onChange={(e) => setLatitude(e.target.value)}
                />
                <label
                  className="text-2xl text-white mx-2 font-semibold"
                  htmlFor="lon"
                >
                  longitude
                </label>
                <input
                  className="rounded-xl p-2"
                  step=".001"
                  type="number"
                  name="lon"
                  onChange={(e) => setLongitude(e.target.value)}
                />
                <input
                  className="font-semibold mx-6 rounded-xl p-2"
                  type="date"
                  name="date"
                  onChange={(e) => setDate(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-2xl px-3 py-2 text-white rounded-3xl bg-white-400 border-2"
                >
                  Submit
                </button>

                {/* violated DRY :[ */}
              </form>
            </div>
          </div>
        )}
      </div>
      {result ? (
        <div className="flex justify-center items-center flex-col mt-5">
          <h1 className="text-5xl text-white font-semibold">{result}</h1>
          <img
            className="w-[500px] mt-5"
            src={`http://127.0.0.1:8000${displayImage}`}
            alt=""
          />
        </div>
      ) : (
        loading && (
          <div className="flex justify-center items-center">
            <div class="lds-roller w-36 mx-5">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h1 className="self-center text-white text-3xl">loading...</h1>
          </div>
        )
      )}
    </div>
  );
};

export default wildfire;
