import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addpatiant() {

    const nav = useNavigate()

    const [name, setname] = useState()
    const [age, setage] = useState()
    const [village, setvillage] = useState()
    const [pincode, setpincode] = useState()
    const [father, setfather] = useState()
    const [phone, setphone] = useState()
    const [bednumber, setbednumber] = useState()

    function getname(e) {
        setname(e.target.value)
    }
    function getage(e) {
        setage(e.target.value)
    }
    function getvillage(e) {
        setvillage(e.target.value)
    }
    function getpincode(e) {
        setpincode(e.target.value)
    }
    function getfather(e) {
        setfather(e.target.value)
    }
    function getphone(e) {
        setphone(e.target.value)
    }
    function getbednumber(e) {
        setbednumber(e.target.value)
    }


    function submithandle(e) {
        e.preventDefault()

        axios.post("http://localhost:3000/patiant", { name, age, village, pincode, father, phone, bednumber })
            .then(res => console.log(res))
            .catch(err => alert(err))


    }
    return (
        <><div>
            <form onSubmit={submithandle}>
                <input type="text" placeholder="entre patiant name" onChange={e => { getname(e) }} /> <br />
                <input type="text" placeholder="entre patiant age" onChange={e => { getage(e) }} /> <br />
                <input type="text" placeholder="entre patiant village" onChange={e => { getvillage(e) }} /> <br />
                <input type="text" placeholder="entre patiant pincode" onChange={e => { getpincode(e) }} /> <br />
                <input type="text" placeholder="entre patiant father" onChange={e => { getfather(e) }} /> <br />
                <input type="text" placeholder="entre patiant phone" onChange={e => { getphone(e) }} /> <br />
                <input type="text" placeholder="entre patiant bednumber" onChange={e => { getbednumber(e) }} /> <br />
                <button type="submit" >submit</button>

            </form>
        </div>
        </>
    )
}
export default Addpatiant;