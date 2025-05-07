import React, { useState } from "react";
import "./style.css";
import Trash from "../../assets/lixeira.svg";
import Imagem from "../../assets/fundo.svg";

function Home() {
  const [users, setUsers] = useState([
    {
      id: "20240001tads",
      name: "Jotapê",
      email: "jotape@gmail.com",
      senha: "*******",
    },
    {
      id: "20240002tads",
      name: "Priscila",
      email: "Pris@gmail.com",
      senha: "********",
    },
  ]);

  const [form, setForm] = useState({ nome: "", email: "", senha: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const novoUsuario = {
      id: Date.now().toString(),
      name: form.nome,
      email: form.email,
      senha: form.senha,
    };
    setUsers([...users, novoUsuario]);
    setForm({ nome: "", email: "", senha: "" });
  }

  return (
    <div className="main-container">
      <div className="form-image-wrapper">
        <div className="form-side">
          <form onSubmit={handleSubmit}>
            <h1>Cadastro de Usuários</h1>
            <input
              placeholder="Nome"
              name="nome"
              type="text"
              value={form.nome}
              onChange={handleChange}
            />
            <input
              placeholder="E-mail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              placeholder="Senha"
              name="senha"
              type="password"
              value={form.senha}
              onChange={handleChange}
            />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <div className="image-side">
          <img src={Imagem} alt="Fundo" />
        </div>
      </div>
      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>
                Nome: <span>{user.name}</span>{" "}
              </p>
              <p>
                Email: <span>{user.email}</span>{" "}
              </p>
              <p>
                Senha: <span>{user.senha}</span>{" "}
              </p>
            </div>
            <button>
              <img src={Trash} alt="Remover" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
