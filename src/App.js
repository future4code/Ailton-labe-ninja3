import React from "react";
import "./App.css";
import PaginaContratar from "./pages/PaginaContratar";
import PaginaHome from "./pages/PaginaHome";
import PaginaPrestador from "./pages/PaginaPrestador";
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PaginaCarrinho from "./pages/PaginaCarrinho";
import PaginaDetalhes from "./pages/PaginaDetalhes";

class App extends React.Component {
  state = {
    telaAtual: "paginaInicial",
    job: [],
    carrinho: [],
    detalhes: [],
  };

  removerItensCarrinho = (id) => {
    if(window.confirm("Quer realmente excluir ?")){
      const retirarTrabalhos = [...this.state.carrinho];
      const novoArrayRetirarCarrinho = retirarTrabalhos.filter((itens) => {
        const deleta = itens.id !== id;
        return deleta;
      });
      const carrinhoSemItem = [...novoArrayRetirarCarrinho];
      this.setState({ carrinho: carrinhoSemItem });
    }
  };

  adicionaItensCarrinho = (user) => {
    const addTrabalhos = [...this.state.job];
    const novoArray = addTrabalhos.filter((itens) => {
      const res = itens.id === user;
      return res;
    });
    const novoCarrinho = [...this.state.carrinho, ...novoArray];
    this.setState({ carrinho: novoCarrinho });
  };

  getAllJobs = () => {
    axios
      .get("https://labeninjas.herokuapp.com/jobs", {
        headers: {
          Authorization: "e537021a-ccc6-4427-a00f-e0a8e2d88c59",
        },
      })
      .then((response) => {
        this.setState({
          job: response.data.jobs,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  converterData = (data) => {
    return `${data.slice(8, -14)}-${data.slice(5, -17)}-${data.slice(0, -20)}`
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "paginaInicial":
        return (
          <PaginaHome
            irPaginaHome={this.irPaginaHome}
            irPaginaContratar={this.irPaginaContratar}
            irPaginaPrestador={this.irPaginaPrestador}
          />
        );
      case "paginaContratar":
        return (
          <PaginaContratar
            irPaginaHome={this.irPaginaHome}
            adicionaItensCarrinho={this.adicionaItensCarrinho}
            getAllJobs={this.getAllJobs}
            job={this.state.job}
            irPaginaDetalhes={this.irPaginaDetalhes}
            converterData={this.converterData}
          />
        );
      case "paginaPrestador":
        return <PaginaPrestador irPaginaHome={this.irPaginaHome} />;
      case "paginaCarrinho":
        return (
          <PaginaCarrinho
            removerItensCarrinho={this.removerItensCarrinho}
            carrinho={this.state.carrinho}
            irPaginaContratar={this.irPaginaContratar}
          />
        );
      case "paginaDetalhes":
        return (
          <PaginaDetalhes
            irPaginaDetalhes={this.irPaginaDetalhes}
            detalhes={this.state.detalhes}
            irPaginaContratar={this.irPaginaContratar}
            converterData={this.converterData}
          />
        );
      default:
        return (
          <PaginaHome
            irPaginaContratar={this.irPaginaContratar}
            irPaginaPrestador={this.irPaginaPrestador}
          />
        );
    }
  };

  irPaginaContratar = () => {
    this.setState({ telaAtual: "paginaContratar" });
  };

  irPaginaPrestador = () => {
    this.setState({ telaAtual: "paginaPrestador" });
  };

  irPaginaHome = () => {
    this.setState({ telaAtual: "paginaInicial" });
  };

  irPaginaCarrinho = () => {
    this.setState({ telaAtual: "paginaCarrinho" });
  };

  irPaginaDetalhes = (id) => {
    this.setState({ telaAtual: "paginaDetalhes" });

    axios
      .get(`https://labeninjas.herokuapp.com/jobs/${id}`, {
        headers: {
          Authorization: "e537021a-ccc6-4427-a00f-e0a8e2d88c59",
        },
      })
      .then((response) => {
        this.setState({ detalhes: response.data });
      })
      .catch((error) => {
        alert(error.message);
      });

  render() {
    return (
      <div>
        <Header
          irPaginaHome={this.irPaginaHome}
          irPaginaCarrinho={this.irPaginaCarrinho}
        />
        {this.escolheTela()}
        <Footer />
      </div>
    );
  }
}

export default App;
