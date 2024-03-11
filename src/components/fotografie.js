import React from 'react';
import ReactDOM from 'react-dom';

const serverPath="http://daas.marconirovereto.it/img/album";

class Fotografie extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <h2>trovate {this.props.fotografie.length}</h2>
                </center>
    
                <div className="card-group">
                    {this.props.fotografie.map((foto) => (
                        <div className="col-sm-4" key={foto.codice}> 
                            <div className="card" style={{ height: "475px" }}> 
                                <img className="card-img-top" src={`${serverPath}${foto.file_path}`} alt="Card image" style={{ height: "200px" }} /> 
                                <div className="card-body">
                                    <h4 className="card-title">{foto.codice}</h4>
                                    <p className="card-text">{foto.soggetto_titolo}</p>
                                    <button className="card-button" onClick={() => this.apriInfo(foto)}>Mostra tutto</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>  
    
                <div id="info" className="overlay"></div>
            </div>
        )
    }
    


    
    apriInfo = (foto) => {
        
        var informazioni = (
            <div>
                <div class="contenutoInfo">					   
                    <InfoFotografia foto={foto} />
                    <button type="button" class= "btnInfo" onClick={this.chiudiInfo}>x</button>
                </div>
                
            </div>
        );

        ReactDOM.render(informazioni, document.getElementById('info'))
        document.getElementById("info").style.bottom = "0";
    }

    chiudiInfo = () => {
        document.getElementById("info").style.bottom = "100%";
    }
}



class InfoFotografia extends React.Component {
    render() {
        return (
            <div class="infoContainer">
                <div class="immagineInfo">
                    <img id={`${this.props.foto.codice}`} src={`${serverPath}${this.props.foto.file_path}`} alt="Image" />
                </div>
                <div class="textInfo">
                    <table>
                        <tr>
                            <td>Intestazione:&nbsp; </td>
                            <td>{this.props.foto.intestazione}</td>
                        </tr>
                        <tr>
                            <td>Soggetto:&nbsp; </td>
                            <td>{this.props.foto.soggetto}</td>
                        </tr>
                        <tr>
                            <td>Soggetto Titolo:&nbsp; </td>
                            <td>{this.props.foto.soggetto_titolo}</td>
                        </tr>
                        <tr>
                            <td>Data da:&nbsp; </td>
                            <td>{this.props.foto.data_da}</td>
                        </tr>
                        <tr>
                            <td>Data a:&nbsp; </td>
                            <td>{this.props.foto.data_a}</td>
                        </tr>
                        <tr>
                            <td>Codice:&nbsp; </td>
                            <td>{this.props.foto.codice}</td>
                        </tr>
                        <tr>
                            <td>Fondo:&nbsp; </td>
                            <td>{this.props.foto.id_fondo}</td>
                        </tr>
                        <tr>
                            <td>Serie:&nbsp; </td>
                            <td>{this.props.foto.id_serie}</td>
                        </tr>
                        <tr>
                            <td>Data Esecuzione da:&nbsp; </td>
                            <td>{this.props.foto.data_esecuz_da}</td>
                        </tr>
                        <tr>
                            <td>Validità:&nbsp; </td>
                            <td>{this.props.foto.data_esecuz_da_valid}</td>
                        </tr>
                        <tr>
                            <td>Data Esecuzione a:&nbsp; </td>
                            <td>{this.props.foto.data_esecuz_a}</td>
                        </tr>
                        <tr>
                            <td>Validità:&nbsp; </td>
                            <td>{this.props.foto.data_esecuz_a_valid}</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}


export default Fotografie