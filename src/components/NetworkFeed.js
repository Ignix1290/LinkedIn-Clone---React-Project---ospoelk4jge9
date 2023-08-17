import React, { useEffect, useState } from "react";
import '../styles/NetworkFeed.css';
import { BsPersonAdd } from "react-icons/bs";


export default function NetworkFeed(){
    
    // const [records, setRecords] = useState([]);
    // const [connect, setConnect] = useState("Connect");
    
    // const getUsers = async()=>{
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     setRecords(await response.json());
    //     // const data = await response.json();
    //     // console.log(data);
    // }

    // useEffect(()=>{
    //     getUsers();
    // },[]);

    // function connectFunction(index){
    //     //console.log(index);
    //     const connected = records.filter((ind)=>{
    //         if(index+1===ind.id){
    //             console.log(index);
    //             console.log(ind.id);
    //         }     
    //     })
    //     setConnect(connected);
    // }
    const [records, setRecords] = useState([]);
    const [connectionStatus, setConnectionStatus] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setRecords(data);
        setConnectionStatus(Array(data.length).fill("Connect")); // Initialize connection status array
    }

    useEffect(() => {
        getUsers();
    }, []);

    function connectFunction(index) {
        const newConnectionStatus = [...connectionStatus]; // Create a copy of the connection status array
        newConnectionStatus[index] = "Connected"; // Update the connection status for the clicked user
        setConnectionStatus(newConnectionStatus);
    }
    return(
        <div className="network_feed_body">
            <div className="network_feed_header">
                <p className="invitaions">No pending invitations</p>
                <p className="manage">Manage</p>
            </div>

            <div className="network_feed_bottom">
                <div className="network_bottom_header">
                    <p className="header_left">People you may know</p>
                    <p className="header_right">See all</p>
                </div>

                <div className="network_feed_cards">
                    {records.map((currentElement, index)=>{
                        return(
                                <div className="card" key={index}>
                                    <img className="background_img" src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"}></img>
                                    <img className="profile_img" src="data:image/jpeg;base64,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"></img>
                                    <h3 className="name">{currentElement.name}</h3>
                                    <p className="company_name">{currentElement.company.name}</p>
                                    {/* <button className="connect" onClick={()=>connectFunction(index)}><BsPersonAdd></BsPersonAdd>{connect}</button> */}
                                    <button className="connect" onClick={() => connectFunction(index)}><BsPersonAdd />{connectionStatus[index]}</button>
                                </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}