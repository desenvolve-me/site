import React from "react";
import { } from "react-router-dom";
import Modal from 'react-modal';
import InputMask from 'react-input-mask';
import axios from 'axios'

class LeadForm extends React.Component {

    state = {
        registerFormIsOpen: false,
        fullName: undefined,
        email: undefined,
        whatsapp: undefined,
    }

    handleNameChange = (event) => {
        this.setState({ fullName: event.target.value });
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handleWhatsappChange = (event) => {
        this.setState({ whatsapp: event.target.value });
    }

    open = () => {
        this.setState({ registerFormIsOpen: true })
    }

    close = () => {
        this.setState({ registerFormIsOpen: false })
    }

    send = async (event) => {
        event.preventDefault()

        axios.post(`${process.env.REACT_APP_DESENVOLVE_ME_API_URI}/cliente-potencial`, {
            nome: this.state.fullName,
            email: this.state.email,
            whatsapp: this.state.whatsapp,
        }).then(() => {
            console.log("deu bom")
            alert("Recebemos suas informações e entraremos em contato em breve.\nObrigado")
            this.close()
        }).catch((error) => {
            console.log(error)
            alert("Ocorreu um erro!\nPor favor tente novamente.\n")
        })
    }

    componentDidMount() {
        Modal.setAppElement("body")
    }

    render() {

        return (
            <div>
                <Modal
                    isOpen={this.state.registerFormIsOpen}
                    onAfterOpen={() => { }}
                    onRequestClose={this.close}
                    style={customStyles}
                    contentLabel="Lead Form Modal">

                    <label style={{ marginBottom: 50, paddingBottom: 50 }} className="title3">Insira seus dados e entraremos em contato</label>

                    <form id="lead_form" style={{ display: "flex", flexDirection: "column" }} onSubmit={this.send}>

                        <div style={formItemInputSytle}>
                            <label >* Nome Completo:</label>
                            <input
                                required
                                type="text"
                                defaultValue={this.state.fullName}
                                onChange={this.handleNameChange}
                                placeholder="exemplo: João da Silva"
                            />
                        </div>

                        <div style={formItemInputSytle}>
                            <label >* Email:</label>
                            <input
                                required
                                type="email"
                                defaultValue={this.state.email}
                                onChange={this.handleEmailChange}
                                placeholder="exemplo: joao.silva@gmail.com"
                            />
                        </div>

                        <div style={formItemInputSytle}>
                            <label >* Whatsapp:</label>
                            <InputMask
                                required type="tel"
                                defaultValue={this.state.whatsapp}
                                onChange={this.handleWhatsappChange}
                                pattern="\([0-9]{2}\) 9[0-9]{4}-[0-9]{4}"
                                placeholder="exemplo: (99)9 9999-9999"
                                mask="(99) 99999-9999"
                            />
                        </div>

                        <div>
                            <button type="submit" form="lead_form">Registrar</button>
                        </div>
                    </form>
                </Modal>
            </div>
        );
    }
}

const formItemInputSytle = {
    display: "flex",
    flexDirection: "column",
    paddingTop: 15,
    paddingBottom: 15
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: "none",
        background: "#0a0057",
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
};

export default LeadForm;