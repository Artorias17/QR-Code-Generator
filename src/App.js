import QRCode from "qrcode"
import {useState} from "react";
import './App.css';

function App() {
    const [url, set_url] = useState();
    const [qrcode, set_qrcode] = useState();

    const generateQRCode = () => {
        QRCode.toDataURL(url,  {
            type: "image/png",
            quality: 1,
            width: 500,
            margin: 2},
            (err, url) => {
            if(err) console.log(err);
            else{
                console.log(url);
                set_qrcode(url);
            }
        })
    }

    return (
        <div className="App">
            <h1>QR Code Generator</h1>
            <form onSubmit={(evt) => {
                evt.preventDefault()
                generateQRCode()
            }}>
                <input
                    type="text"
                    placeholder="google.com"
                    value={url}
                    onChange={evt => set_url(evt.target.value)}
                />
                <input
                    type="submit"
                    value="Generate"
                />
            </form>
            {qrcode && <>
                <img src={qrcode} alt="QR Code"/>
                <a href={qrcode} download={`${url}.png`}>Download</a>
                </>
            }
        </div>
    );
}

export default App;
