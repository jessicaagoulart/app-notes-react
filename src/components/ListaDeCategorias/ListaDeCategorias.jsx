import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {

	constructor() {
		super();
		this.state = { categorias: [] }
		this._novasCategorias = this._novasCategorias.bind(this)
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

	_handleEventoInput(evento) {
		if (evento.key === "Enter") {
			let valorCategoria = evento.target.value;
			this.props.adicionarCategoria(valorCategoria)
		}
	}

	render() {
		return (
			<section className="categorias">
				<ul className="lista-categorias">
					{this.state.categorias.map((categoria, index) => {
						return <li key={index} className="lista-categorias-item">{categoria}</li>;
					})}

				</ul>

				<input
					className="categorias-input"
					type="text"
					placeholder="Adicionar Categoria"
					onKeyUp={this._handleEventoInput.bind(this)}
				></input>
			</section>
		);
	}
}

export default ListaDeCategorias;
