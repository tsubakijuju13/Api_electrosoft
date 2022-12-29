import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const url = "http://localhost:8000/api/usuarios/";

class App extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      name: "",
      last_name: "",
      email: "",
      password: "",
      re_password: "",
      role: "",
      active: "",

    },
  };

  peticionGet = () => {
    axios.get(url).then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <div className="App">
       {/*<br /> */} 
        <table className="table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Role</th>
              <th>Consumo</th>
              <th>Pago</th>
              <th>estado</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((usuario) => {
              return (
                <tr>
                  <td>{usuario.user_id}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;