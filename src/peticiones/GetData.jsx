import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetData = () => {

    const [dataApi, setDataApi] = useState([])

    useEffect(() => {
        let url="http://localhost:8080/api/user"
        axios.get(url)
            .then(res=> setDataApi(res.data))
            .catch(err=> console.log(err))
    }, [])
    console.log(dataApi)
    const SendID=(id)=>{
        let url = `http://localhost:8080/api/user/${id}`;
        axios.delete(url)
            .then(res=> console.log(res.data))
            .catch(err=> console.log(err))
    }
  return (
    <div>
    <p>{dataApi.map((item, id) => <p>
        <div className="row" key={id} >
            <div className="col-sm-6">
                <div className="card">
                    <h5 className="card-title m-2"> <p>Id: {item.id}</p></h5>
                <div className="card-body">
                    <h5 className="card-title"> <p>{item.name} {item.lastName}</p></h5>
                    <p className="card-text">Este usuario tiene {item.age} años, nacio el {item.born} con el correo {item.email} ademas nacio el {item.date} y te puedes comunicar a {item.cell} </p>

                </div>
            <button onClick={()=>SendID(item.id)} className="btn btn-warning">Eliminar</button>
                </div>
            </div>
        </div>
    </p>)}</p>
        
    </div>
  )
}

export default GetData