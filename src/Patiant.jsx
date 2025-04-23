import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Patiant() {
    const [data, setdata] = useState()
    let { id } = useParams()

    useEffect(() => {
        axios("http://localhost:3000/patiant")
            .then(res => setdata(res.data))
            .catch(err => console.log(err))

    }, [])

    const getdelete = (id) => {
        axios.delete("http://localhost:3000/patiant/" + id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    function getedit(id) {
        nav("/editpatiant/" + id)
    }

    return (
        <>
            <div className="main" >
                <h1 class="d-flex justify-content-center">patiant information</h1>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <td>name</td>
                            <td>age</td>
                            <td>village</td>
                            <td>pincode</td>
                            <td>father</td>
                            <td>phone</td>
                            <td>bednumber</td>
                            <td>Aditional</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.name}</td>
                                    <td>{d.age}</td>
                                    <td>{d.village}</td>
                                    <td>{d.pincode}</td>
                                    <td>{d.father}</td>
                                    <td>{d.phone}</td>
                                    <td>{d.bednumber}</td>
                                    <td>
                                        <button onClick={() => { getdelete(d.id) }}>Delete</button>
                                        <button onClick={() => { getedit(d.id) }}>Edit</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Patiant;