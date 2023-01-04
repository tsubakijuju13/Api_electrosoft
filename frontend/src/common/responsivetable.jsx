import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";





/**/

const url = "http://localhost:8000/usuarios/";


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
    axios
      .get(url)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPost = async () => {
    delete this.state.form.id;
    await axios
      .post(url, this.state.form)
      .then((response) => {
        this.modalInsertar();
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPut = () => {
    axios
      .put(url + this.state.form.id + "/", this.state.form)
      .then((response) => {
        this.modalInsertar();
        this.peticionGet();
      });
  };

  peticionDelete = () => {
    axios.delete(url + this.state.form.id).then((response) => {
      this.setState({ modalEliminar: false });
      this.peticionGet();
    });
  };

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };

  seleccionarUsuario = (usuario) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        id: usuario.user_id,
        email: usuario.email,
        password: usuario.password,
        role: usuario.role,
        active: usuario.active,
      },
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
    const { form } = this.state;
    return (
      <div className="App">
        <br />
        <br />
        <br />
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ form: null, tipoModal: "insertar" });
            this.modalInsertar();
          }}
        >
          Agregar Usuario
        </button>
        {/* Caja de busqueda
        <input class="form-control mt-3" id="myInput" type="text" placeholder="Search.."></input> */}
        <br />
        <br />
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((usuario) => {
                return (
                  <tr>
                    <td>{usuario.user_id}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.password}</td>
                    <td>{usuario.role}</td>
                    <td>{usuario.active ? "True" : "false"}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          this.seleccionarUsuario(usuario);
                          this.modalInsertar();
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      {"   "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.seleccionarUsuario(usuario);
                          this.setState({ modalEliminar: true });
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          
        </div>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader style={{ display: "block" }}>
            <span
              style={{ float: "right" }}
              onClick={() => this.modalInsertar()}
            ></span>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                className="form-control"
                type="text"
                name="id"
                id="id"
                readOnly
                onChange={this.handleChange}
                value={form ? form.id : this.state.data.length + 1}
              />
              <br />
              <label htmlFor="nombre">Nombre</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="nombre"
                onChange={this.handleChange}
                value={form ? form.name : ""}
              />

              <br />
              <label htmlFor="apellido">Apellido</label>
              <input
                className="form-control"
                type="text"
                name="last_name"
                id="apellido"
                onChange={this.handleChange}
                value={form ? form.last_name : ""}
              />
              <br />

              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                onChange={this.handleChange}
                value={form ? form.email : ""}
              />
              <br />
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                onChange={this.handleChange}
                value={form ? form.password : ""}
              />
              <br />
              <label htmlFor="password2">Password2</label>
              <input
                className="form-control"
                type="password"
                name="re_password"
                id="password2"
                onChange={this.handleChange}
                value={form ? form.re_password : ""}
              />
              <br />
              <label htmlFor="role">Role</label>
              <input
                className="form-control"
                type="text"
                name="role"
                id="role"
                onChange={this.handleChange}
                value={form ? form.role : ""}
              />
              <br />
              <label htmlFor="active">Active</label>
              <input
                className="form-control"
                type="boolean"
                name="active"
                id="active"
                onChange={this.handleChange}
                value={form ? form.active : ""}
              />
            </div>
          </ModalBody>

          <ModalFooter>
            {this.state.tipoModal === "insertar" ? (
              <button
                className="btn btn-success"
                onClick={() => /*console.log(this.state)*/ this.peticionPost()}
              >
                Insertar
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => this.peticionPut()}
              >
                Actualizar
              </button>
            )}
            <button
              className="btn btn-danger"
              onClick={() => this.modalInsertar()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEliminar}>
          <ModalBody>
            Estás seguro que deseas eliminar a este usuario{" "}
            {form && form.nombre}
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-danger"
              onClick={() => this.peticionDelete()}
            >
              Sí
            </button>
            <button
              className="btn btn-secundary"
              onClick={() => this.setState({ modalEliminar: false })}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default App;
