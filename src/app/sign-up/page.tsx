import React,{useState, useEffect} from "react";
"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios';

// Déplacez l'interface à l'extérieur du composant
interface DataForm {
    name: string;
    username: string;
    email: string;
    password: string;
}

// Définissez l'URL de base d'axios en dehors du composant
axios.defaults.baseURL = 'http://localhost:7000';

export default function SignUp() {
    const [Users, setUsers] = useState<DataForm>({
        name: "",
        username: "",
        email: "",
        password: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setUsers({
            ...Users,
            [name]: value
        });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        try {
            await axios.post('/register/add-users', Users);
            localStorage.setItem('isConnect', 'true');
            alert('Connecté avec succès');
        } catch (error) {
            console.error(error);
        }
    }

    // Le reste de votre JSX reste inchangé
    return (
        <>

            <div className="card rounded-3xl" style={{width: '600px', marginLeft: '400px', borderColor: 'blue', marginTop: '200px', padding: 10}}>
                <div className="card-body">
                    <center><h2>S'inscrire</h2></center>
                    <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3 col-8">
                              
                              <input type="text" className="form-control" id="floatingInput" placeholder="Nom" name="name"onChange={handleChange} required value={Users.name} />

                              <label htmlFor="floatingInput">Nom</label>

                              <br />
                          </div>
                          <div className="form-floating mb-3 col-8">
                              
                              <input type="text" className="form-control" id="floatingInput" placeholder="Nom d'utilisateur" name="username"onChange={handleChange} required value={Users.username} />
                              <label htmlFor="floatingInput">Nom d'utilisateur</label>
                              <br />
                          </div>
                          <div className="form-floating mb-3 col-8">
                              
                              <input type="text" className="form-control" id="floatingInput" placeholder="Email" name="email"onChange={handleChange} required value={Users.email} />

                              <label htmlFor="floatingInput">Titre de l'article</label>

                              <br />
                          </div>
                          <div className="form-floating mb-3 col-8">
                              
                              <input type="password" className="form-control" id="floatingInput" placeholder="Password" name="password"onChange={handleChange} required value={Users.password}/>

                              <label htmlFor="floatingInput">Password</label>

                              <br />
                          </div>
                          <div className="card-footer">
                            <button type="submit" className="btn btn-outline-primary">S'inscrire</button>
                          </div>
                </form>

            </div>
        </div>
        
        </>
    );
}


