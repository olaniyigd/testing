import "./Search.css";
import React from "react"
import data from "../src/Data";
import { useState } from "react";
export default function Search(){
    const [searchTerm, setSearchTerm] = useState ("");
    return(
        <div className="container">
            <div className="search-container">
                <input id="search" type="text" placeholder="search" onChange={(event)=>{
                  setSearchTerm(event.target.value);  
                }}/>

            </div>
            <div className="flex">
                {
                    data
                    .filter((value)=>{
                        if(searchTerm == ""){
                            return;
                        }else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return value;
                        }
                    })
                    .map((value)=>{
                        return(
                            <div className="temp" key={value.id}>
                            <img className="image" src={value.image} alt="img"/>
                            <p>{value.title}</p>
                             </div>
                        )
                    })
                }
            </div>
        </div>
    )
}