import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header.js";


function TranslationCrud() {
const [id, setId] = useState("");
const [english, setEnglish] = useState("");
    const [spanish, setSpanish] = useState("");
    const [french, setFrench] = useState("");
    const [german, setGerman] = useState("");
    const[translations, setUsers] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("https://localhost:7257/api/Translations/getTranslations");
    setUsers(result.data);
    console.log(result.data);
  }
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7257/api/Translations/addTranslation", {
        english: english,
        french: french,
        spanish: spanish,
        german: german
      });
      alert("Translation added Successfully");
          setId("");
          setEnglish("");
          setFrench("");
          setSpanish("");
          setGerman("");
      Load();
    } catch (err) {
      alert(err);
    }
  }
  async function editTranslation(translations) {
    setEnglish(translations.english);
    setSpanish(translations.spanish);
    setFrench(translations.french);
    setGerman(translations.german);
    setId(translations.id);
  }
  async function deleteTranslation(id) {
  await axios.delete("https://localhost:7257/api/Translations/deleteTranslation/" + id);
   alert("Translation deleted Successfully");
           setId("");
          setEnglish("");
          setFrench("");
          setSpanish("");
          setGerman("");
   Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
  await axios.patch("https://localhost:7257/api/Translations/updateTranslation/"+ translations.find((u) => u.id === id).id || id,
        {
        id: id,
        english: english,
        french: french,
        spanish: spanish,
        german: german
        }
      );
      alert("Translation Updated!");
      setId("");
      setEnglish("");
          setFrench("");
          setSpanish("");
          setGerman("");
      Load();
    } catch (err) {
      alert(err);
    }
  }
    return (
      <div>
        <Header/>
        <h1>Translation Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label>English</label>
            <input
              type="text"
              class="form-control"
              id="english"
              value={english}
              onChange={(event) => {
                setEnglish(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Spanish</label>
            <input
              type="text"
              class="form-control"
              id="spanish"
              value={spanish}
              onChange={(event) => {
                setSpanish(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label>French</label>
            <input
              type="text"
              class="form-control"
              id="french"
              value={french}
              onChange={(event) => {
                setFrench(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label>German</label>
            <input
              type="text"
              class="form-control"
              id="german"
              value={german}
              onChange={(event) => {
                setGerman(event.target.value);
              }}
            />
          </div>
          <div>
            <button class="btn btn-primary mt-4" onClick={save} style={{width:"130px", height: "50px", marginRight:"20px "}}>
              Add
            </button>
            <button class="btn btn-warning mt-4" onClick={update} style={{width:"130px", height: "50px"}}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>
      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Translation Id</th>
            <th scope="col">English</th>
            <th scope="col">Spanish</th>
            <th scope="col">French</th>
            <th scope="col">German</th>
          </tr>
        </thead>
        {translations.map(function fn(translation) {
          return (
            <tbody>
              <tr>
                <th scope="row">{translation.id} </th>
                <td>{translation.english}</td>
                <td>{translation.spanish}</td>
                <td>{translation.french}</td>
                <td>{translation.german}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editTranslation(translation)}
                    style={{marginRight:"10px"}}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => deleteTranslation(translation.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      </div>
    );
  }
  export default TranslationCrud;









