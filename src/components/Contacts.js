import React,{useState, useEffect} from "react";
import Header from "./Header";
import "../styles/Contacts.css";
import { FcContacts } from "react-icons/fc";
import About from "./About";
import FadeLoader from "react-spinners/FadeLoader";
import Footer from "./Footer";

export default function Contacts(){
    const [loader, setLoader] = useState(false);
    const [syncContacts, setSyncContacts] = useState("contacts_synced_deactivated")

    useEffect(()=>{
      setLoader(true);
      setTimeout(()=>{
        setLoader(false);
      },1000)
    },[])

    function syncContactFuntion(){
        if(syncContacts==="contacts_synced_deactivated"){
            setSyncContacts("contacts_synced_activated");
        }
        else{
            setSyncContacts("contacts_synced_deactivated");
        }
    }
    return(
        <>
        <Header></Header>
        {loader ? <FadeLoader className="loader" color={"#ccc"} loading={loader} size={50}/>:
        <div className="contacts">
            <div className="saved_contacts">
                <h2>Saved contacts</h2>
            </div>
            <div className="contact_feed">
                <div className="contact_feed_header">
                    <p>0 Imported Contacts</p>
                </div>
                <div className="contact_feed_body">
                    <div className="contact_feed_img">
                        <FcContacts></FcContacts>
                    </div>
                    <div className="contact_feed_content">
                        <h2>Connect with people you know, fast</h2>
                        <p>Importing contacts helps you keep in touch with your connections.</p>
                        <p className="contact_link" onClick={syncContactFuntion}>Sync your contacts</p>
                    </div>
                </div>
            </div>
            <div className="contact_widget">
               {/* <button className="contact_buttons">Add more contacts</button>
               <button className="contact_buttons">Export contacts</button>
               <button className="contact_buttons">Manage synced contacts</button> */}
               <div className="bottom_contact_widget">
                <About></About>
               </div>
            </div>
        </div>}
        <div className="contact_footer">
            <Footer></Footer>
        </div>
        <div className={syncContacts}>
            <div className="contacts_synced_popup">
                <h1>Contacts synced</h1>
                <button onClick={syncContactFuntion}>OKAY</button>
            </div>
        </div>
        
        </>
    )
}