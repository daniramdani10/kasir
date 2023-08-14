import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import axios from "axios";
import { API_URL } from "../utils/constant";

export default class TotalBayar extends Component {
  submitTotalBayar = (TotalBayar) => {
    const pesanan = {
      total_bayar: TotalBayar,
      menus: this.props.keranjangs,
    };
    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      this.props.history.push("/sukses");
    });
  };
  render() {
    const TotalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              total harga :
              <strong className="float-end me-2 ">
                Rp.{numberWithCommas(TotalBayar)}
              </strong>
            </h4>

            <div className="d-grid gap-2 mb-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => this.submitTotalBayar(TotalBayar)}
              >
                <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                BAYAR
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
