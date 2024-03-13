import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const PostData = () => {

const {handleSubmit, register, reset}= useForm()
const [dataPost, setDataPost] = useState()

const dataDefault={
    name:"",
    lastName:"",
    born:"",
    email:"",
    age:"",
    cell:""
}

useEffect(() => {
    let url="http://localhost:8080/api/user"
    axios.post(url, dataPost)
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
}, [dataPost])



const onSubmite=data=>{
        setDataPost(data)
        reset(dataDefault)
}
  return (
    
<div className='card m-2  p-4' style={{width: '30rem'}}>
        <form onSubmit={handleSubmit(onSubmite)}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label"> Nombre:</label>
                <input type="text" className="form-control" id={"nombre"} {...register('name')} aria-describedby="emailHelp"></input>
                <div id="nombre" className="form-text">Pon tu nombre</div>
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label"> Apellido:</label>
                <input type="text" className="form-control" id={"apellido"} {...register('lastName')} aria-describedby="emailHelp"></input>
                <div id="nombre" className="form-text">Pon tu apellido</div>
            </div>
            <div className="mb-3">
                <label htmlFor="born" className="form-label"> Edad:</label>
            <input type="date" className="form-control" id={"born"} {...register('born')} aria-describedby="emailHelp"></input>
                <div id="born" className="form-text">Pon tu nacimiento</div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label"> Correo:</label>
                <input type="email" className="form-control" id={"email"} {...register('email')} aria-describedby="emailHelp"></input>
                <div id="email" className="form-text">Pon tu email</div>
            </div>
            <div className="mb-3">
                <label htmlFor="edad" className="form-label"> Edad:</label>
            <input type="number" className="form-control" id={"edad"} {...register('age')} aria-describedby="emailHelp"></input>
                <div id="nombre" className="form-text">Pon tu edad</div>
            </div>
            <div className="mb-3">
                <label htmlFor="cell" className="form-label"> Telefono:</label>
            <input type="number" className="form-control" id={"cell"} {...register('cell')} aria-describedby="emailHelp"></input>
                <div id="nombre" className="form-text">Pon tu telefono</div>
            </div>

            <button type="submit" className="btn btn-primary m-2">Submit</button>
           
        </form>

    </div>
  )
}

export default PostData