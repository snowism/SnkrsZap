import React, { Component } from 'react';
import { navigate } from '@reach/router';
import Axios from "axios";
import SiteButton from './SiteButton';
import Modal from "./Modal";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';




var whiteBtnStyle = {
    width: "120px",
    height: "26px",
    background: "white",
    color: "black",
    border: "none",
    borderRadius: "20px",
}

export default class SingleCard extends Component {

    constructor(props) {
        super(props);
        //state matches express model - the model is case-sensitive
        this.state = {
            name: "",
            price: "",
            filepath: "",
            brand: "",
            id: Date.now(),
            showmodal: false,
            uid: 0

        };
    }

    goToDetails = e => {

        navigate(`/product-details`, { state: { id: this.props.id } });
        console.log("go to single info")
    }

    goToUpdate = e => {
        navigate(`/update`, { state: { id: this.props.id } });
        console.log("go to update")
    }

    onDelete = e => {


        Axios.get(`http://localhost:4000/api/sneakers/${this.props.id}`).then(
            (res) => {
                console.table(res);

                if (res.statusText === "OK") {
                    console.log("showmodal");
                    this.setState({ showmodal: true });
                }
            })
    }


    onConfirm = e => {

        console.log("clicked confirm")
        navigate(`/`);
        Axios.delete(`http://localhost:4000/api/sneakers/${this.props.id}`).then(
            res => {
                console.log(res)


                if (res.data.deletedCount >= 1) {
                    this.setState({ showmodal: false });
                    this.props.onSuccessfulDeletion();
                    console.log(">>>>> successful deletion, reload data to see changes");
                }
                else {
                    console.log(">>>> nothing deleted");
                }
            }
        );

    }


    keepCard = e => {
        this.setState({ showmodal: false })
    }






    render() {
        return (



            <div className="card">


                <img onClick={this.goToDetails} src={"./images/" + this.props.filepath} className="product-img" alt="" />
                <p>{this.props.brand}</p>
                <p>{this.props.name}</p>

                <p>NZD $ {this.props.price}</p>

                <div className="icon-box">
                    <SiteButton action={this.goToUpdate} icon={<EditIcon />} />
                    <SiteButton action={this.onDelete} icon={<DeleteIcon />} />
                </div>

                <Modal
                    showmodal={this.state.showmodal}
                    title={`Are you sure to delete this card?`}
                    action={this.onConfirm}

                    message={"Delete"}
                >
                    <SiteButton action={this.keepCard} message={"NOPE"} style={whiteBtnStyle} />
                </Modal>
            </div>


        )
    }
}
