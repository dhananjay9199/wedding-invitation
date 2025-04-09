import logo from "./logo.svg";
import "./App.css";
import Gallery from "./Gallery";
import Map from "./Map";

function App() {
  return (
    <div className="invite-container">
      <h1>🙏 आग्रहाचे निमंत्रण 🙏</h1><hr style={{border:"2px solid"}}/>
      <p className="names">
        चि. सतीश (Army Clerk) <br /> ❤️ <br /> चि.सौ.कां. मयुरी (M.Com)
      </p>
      <p>We’re getting married and would love for you to join us!</p>

      <div className="details">
        <p>
          <strong style={{color:"#f3c009"}}>☘ देवकार्य/हळदी ☘ :</strong>
          <br /> दि. ३०/०४/२०२५ बुधवार रोजी सायं.
        </p>
        <p>
          <strong style={{color:"red"}}>विवाह मुहूर्त :</strong>
          <br /> गुरुवार दि. ०१/०५/२०२५ दुपारी १२:३६ मि.
        </p>
        <p>
          <strong style={{color:"green"}}>विवाह स्थळ :</strong>
          <br /> राधाकृष्ण मंगलकार्यालय, ग्रीन पार्क - २, जिंतुर
        </p>
      </div>

      <div className="parentDetails">
        <table>
          <thead>
            <tr>
              <th style={{color:"#e12525"}}>
                चि. सतीश <br />
                (Army Clerk)
              </th>
              <th>
                <img
                  src="../images/photo_6314593985712211982_y.jpg"
                  style={{ width: "50px", height: "50px" }}
                ></img>
              </th>
              <th style={{color:"#e12525"}}>
                चि.सौ.कां. मयुरी <br />
                (M.Com)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>कै. साहेबराव विट्ठलराव देशमुख यांचे नातू</td>
              <td rowSpan={4} style={{ fontWeight: "bold", width:"34%" }}>
                यांचा
                <br />
                <p style={{color:"#f94060"}}>।। शुभविवाह।।</p>
              </td>
              <td>कै. कैलासराव त्र्यंबकराव जगताप देशमुख यांची नात</td>
            </tr>
            <tr>
              <td>श्री मारोतराव साहेबराव देशमुख</td>
              {/* <td></td> */}
              <td>श्री मंचकराव कैलासराव जगताप देशमुख</td>
            </tr>
            <tr>
              <td>
                रा. घोड़ा ता. पालम <br />
                जि. परभणी
              </td>
              {/* <td></td> */}
              <td>
                रा. पुंगळा ता. जिंतुर <br />
                जि. परभणी
              </td>
            </tr>
            <tr>
              <td>यांचे कनिष्ठ चिरंजीव</td>
              {/* <td></td> */}
              <td>यांची द्वितीय कन्या</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="rsvp">
        <strong style={{color:"gold"}}>☘ आपले विनीत ☘</strong>
        <br />
        <strong style={{color:"gold"}}>श्री मारोतराव साहेबराव देशमुख<br/>श्री मंचकराव कैलासराव जगताप देशमुख</strong>
        <hr style={{ width: "50%" }} />
        <br />
        <strong style={{color:"gold"}}>वडिलांच्या विनंतीस मान देऊन मंगल कार्यास अगत्य यावे</strong>
      </p>

      <Gallery />
      <Map />
    </div>
  );
}

export default App;
