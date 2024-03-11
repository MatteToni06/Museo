import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visualizzaApp: false
    };
    this.visualizzaApp = this.visualizzaApp.bind(this);
    this.visualizzaHome = this.visualizzaHome.bind(this);
  }

  visualizzaHome() {
    this.setState({ visualizzaApp: false });
  }

  visualizzaApp() {
    this.setState({ visualizzaApp: true });
  }

  render() {
    const { visualizzaApp } = this.state;

    if (visualizzaApp) {
      return <App />;
    }

    return (
      <div style={{ 
        backgroundColor: '#f8f9fa',
        backgroundImage: 'linear-gradient(to right, #e6e9f0, #eef1f5)',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <h1 style={{ 
          fontSize: '5em', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: '#2c3e50', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' 
        }}>
          Archivio Storico Fotografico
        </h1>
        <p style={{ 
          fontSize: '2em', 
          textAlign: 'center', 
          color: '#57606f', 
          margin: '1em 0',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' 
        }}>
          Benvenuto nell'archivio storico fotografico di Rovereto
        </p>
        <button style={
          { 
          fontSize: '1.7em', 
          color: '#fff', 
          backgroundColor: '#007bff', 
          border: 'none', 
          padding: '1em 2em', 
          borderRadius: '0.5em', 
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out'
          }
        } onClick={this.visualizzaApp}
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#0056b3'; }}
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#007bff'; }}>
          Vai all'Archivio Fotografico
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));