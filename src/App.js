import React, {Component} from 'react';
import Fotografie from './components/fotografie';
import './App.css';



class App extends Component {
    constructor() {
      super();
      this.state = {
          fotografie: [],
          visualizzaHome: false
      };
      this.visualizzaHome = this.visualizzaHome.bind(this);
    }

    visualizzaHome() {
      this.setState({ visualizzaHome: true });
    }

    render() {
        
        let pulsante =  null;
        let avanzata =  null;

        if(this.state.showRicercaAvanzata) {
            pulsante = <button type="button" id="btnSemplice" class= "btnRicerca" onClick={this.apriRicSemplice}>Ricerca Semplice</button>;
            avanzata = (
                <div>
                    <table class="tabellaRicerca">
                        <tr>
                            <td>Intestazione:&nbsp; </td>
                            <td><input type='text' class="inputAvanzato" id="intestazione" /></td>
                        </tr>
                        <tr>
                            <td>Fondo:&nbsp; </td>
                            <td><input type='text' class="inputAvanzato" id="fondo" /></td>
                        </tr>
                        <tr>
                            <td>Identificazione del soggetto:&nbsp; </td>
                            <td><input type='text' class="inputAvanzato" id="soggetto" /></td>
                        </tr>
                        <tr>
                            <td>Titolo del soggetto:&nbsp; </td>
                            <td><input type='text' class="inputAvanzato" id="titolo_soggetto" /></td>
                        </tr>
                        <tr>
                            <td>Identificazione della serie:&nbsp; </td>
                            <td><input type='text' class="inputAvanzato" id="serie" /></td>
                        </tr>
                        <tr>
                            <td>Data di esecuzione - Da:&nbsp; </td>
                            <td><input type='date' class="inputAvanzato" id="data_da" /></td>
                        </tr>
                        <tr>
                            <td>Data di esecuzione - A:&nbsp; </td>
                            <td><input type='date' class="inputAvanzato" id="data_a" /></td>
                        </tr>
                    </table>

                    <button type="button" id="cerca" class= "cerca" onClick={this.ricercaAvanzata}>Cerca</button>
                </div>
            );
        }
        else {
            pulsante = <button type="button" id="btnAvanzata" class= "btnRicerca" onClick={this.apriRicAvanzata}>Ricerca Avanzata</button>;
            avanzata = "";
        }

        return (
            <div>
                <div>
                    <center>
                        <h1>Archivio fotografico Museo Storico Rovereto</h1>
                    </center>
                </div>

                <div id="menu">
                    <div>
                        &nbsp;&nbsp;<strong>Esplora</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input type='text' id="inputSemplice"/>
                        <button type="button" onClick={this.ricercaSemplice}>&#128269;</button>

                        {pulsante}
                    </div>
                    <div>
                        {avanzata}
                    </div>
                </div>

                <div>
                    <Fotografie fotografie={this.state.fotografie} />
                </div>
            </div>
        )
    }

    componentDidMount() {
         fetch('http://data.marconirovereto.it:8080/Dati')
            .then(res => res.json())
            .then((data) => {
                this.setState({ fotografie: data })
            })
            .catch(console.log)

        
    }

    apriRicSemplice = () => {
        this.setState({ showRicercaAvanzata: false })
    }

    apriRicAvanzata = () => {
        this.setState({ showRicercaAvanzata: true })
    }

    ricercaSemplice = () => {
        var s = "http://data.marconirovereto.it:8080/Dati";

        if(document.getElementById("inputSemplice").value !== ""){
            s += "/All/Contiene/" + document.getElementById("inputSemplice").value;
        }
        
        fetch(s)
            .then(res => res.json())
            .then((data) => {
                this.setState({ fotografie: data })
            })
            .catch(console.log)
    }
  

    ricercaAvanzata = () => {
        var s = "http://data.marconirovereto.it:8080/Dati";

        if (document.getElementById("intestazione").value !== "") {
          s += "/Intestazione/Contiene/" + document.getElementById("intestazione").value;
        } else if (document.getElementById("fondo").value !== "") {
          s += "/Fondo/" +  document.getElementById("fondo").value;
        } else if (document.getElementById("soggetto").value !== "") {
          s += "/Soggetto/Contiene/" +  document.getElementById("soggetto").value;
         }else if(document.getElementById("titolo_soggetto").value !== "") {
          s += "/Titolo/Contiene/" + document.getElementById("titolo_soggetto").value;
        } else if(document.getElementById("serie").value !== "") {
          s += "/Serie/" + document.getElementById("serie").value;
        } else if(document.getElementById("data_da").value !== ""){
          s += "/Data/GE/" + document.getElementById("data_da").value;
		    } else if(document.getElementById("data_a").value !== ""){
          s += "/Data/LE/" + document.getElementById("data_a").value;
		    }

        fetch(s)
            .then(res => res.json())
            .then((data) => {
                this.setState({ fotografie: data })
            })
            .catch(console.log)

	  }  



}
export default App;