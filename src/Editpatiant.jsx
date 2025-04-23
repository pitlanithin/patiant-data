import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Editoatiant(){

    let nav =useNavigate()

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

        useEffect(()=>{
            axios.get("http://localhost:3000/patiant/"+id).then(res=>{
                setname(res.data.name)
                setage(res.data.age)
                setvillage(res.data.village)
                setpincode(res.data.pincode)
                setfather(res.data.father)
                setphone(res.data.phone)
                setbednumber(res.data.bednumber)
               
            })
            .catch(err=>console.log(err))

        },[])





        function edithandle(e) {
            e.preventDefault()
    
            axios.put("http://localhost:3000/patiant/"+id, { name, age, village, pincode, father, phone, bednumber })
                .then(res => nav("/patiant"))
                .catch(err => alert(err))
    
    
        }

    return(
        <>
        <form onSubmit={edithandle}>
                <input type="text" placeholder="entre patiant name" onChange={e => { getname(e) }}  defaultValue={name}/> <br />
                <input type="text" placeholder="entre patiant age" onChange={e => { getage(e) }} defaultValue={age} />  <br />
                <input type="text" placeholder="entre patiant village" onChange={e => { getvillage(e)}} defaultValue={village}/> <br />
                <input type="text" placeholder="entre patiant pincode" onChange={e => { getpincode(e) }} defaultValue={pincode} /> <br />
                <input type="text" placeholder="entre patiant father" onChange={e => { getfather(e) }}  defaultValue={father}/> <br />
                <input type="text" placeholder="entre patiant phone" onChange={e => { getphone(e) }}  defaultValue={phone}/> <br />
                <input type="text" placeholder="entre patiant bednumber" onChange={e => { getbednumber(e)  }}defaultValue={bednumber} /> <br />
                <button type="submit" >submit</button>

            </form>

        </>
    )
}
export default Editoatiant;