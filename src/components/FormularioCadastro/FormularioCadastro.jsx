import React, { Component } from 'react'
import "./estilo.css"

class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
    this.state = { categorias: [] };
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias })
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (

      <form className="formulario-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <select
          className="formulario-cadastro-select"
          onChange={this._handleMudancaCategoria.bind(this)}>
          <option>Sem categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>
          })}
        </select>

        <input
          className="formulario-cadastro-input"
          type="text"
          placeholder="Titulo"
          onChange={this._handleMudancaTitulo.bind(this)} />
        <textarea
          rows={15}
          className="formulario-cadastro-input"
          placeholder="Escreva sua nota"
          onChange={this._handleMudancaTexto.bind(this)} />
        <button
          className="formulario-cadastro-input formulario-cadastro-submit">
          Criar nota
        </button>
      </form>

    );
  }
}

export default FormularioCadastro;