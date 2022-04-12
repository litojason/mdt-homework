import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthProvider";
import { payees, transfer } from "../utils/api";
import Button from "components/Button";
import {
  Form,
  Input,
  InputContainer,
  Label,
  Selection,
  TextArea,
} from "components/Form";
import Screen from "components/Screen";
import Modal from "components/Modal";

const Transfer = () => {
  const { token } = useAuthContext();
  const navigate = useNavigate();

  const [payeesData, setPayeesData] = useState([
    // {
    //   accountNo: "6554-630-9653",
    //   id: "616d65d1d1b6fd6f12aeede8",
    //   name: "Andy",
    // },
  ]);
  const [payee, setPayee] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: null,
    description: null,
    buttonText: null,
    buttonPress: null,
  });

  useEffect(() => {
    getPayees();
  }, []);

  const getPayees = async () => {
    const response = await payees(token);

    if (response.status === "success") {
      setPayeesData(response.data);
    }
  };

  const handleSelectPayee = (e) => {
    let text = e.target.value;
    setPayee(text);
  };

  const handleAmount = (e) => {
    let text = e.target.value;
    setAmount(text);
  };

  const handleDescription = (e) => {
    let text = e.target.value;
    setDescription(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount) {
      setModalVisible(true);
      setModalData({
        title: "Failed",
        description: "Amount is required.",
        buttonText: "Okay",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await transfer(token, payee, amount, description);

      if (response.status === "success") {
        setModalVisible(true);
        setModalData({
          title: "Success",
          description: "Transfer success.",
          buttonText: "Okay",
          buttonPress: () => navigate("/dashboard"),
        });
        setLoading(false);
      } else {
        setModalVisible(true);
        setModalData({
          title: "Failed",
          description: response.error,
          buttonText: "Try Again",
        });
        setLoading(false);
      }
    } catch (error) {
      setModalVisible(true);
      setModalData({
        title: "Failed",
        description: "Something went wrong, please try again.",
        buttonText: "Try Again",
      });
      setLoading(false);
    }
  };

  return (
    <>
      {modalVisible && (
        <Modal
          setModalVisible={setModalVisible}
          title={modalData.title}
          description={modalData.description}
          buttonText={modalData.buttonText}
          buttonPress={modalData.buttonPress}
        />
      )}

      <Screen hasNavbar>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label htmlFor="payee">Payee</Label>
            <Selection
              id="payee"
              name="payee"
              value={payee}
              onChange={handleSelectPayee}
            >
              {payeesData.length !== 0 &&
                payeesData.map((item, index) => (
                  <option key={item.id} value={item.accountNo}>
                    {item.name}
                  </option>
                ))}
            </Selection>

            <Label htmlFor="amount">Amount</Label>
            <Input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={handleAmount}
            />

            <Label htmlFor="description">Description</Label>
            <TextArea
              id="description"
              name="description"
              value={description}
              onChange={handleDescription}
            />
          </InputContainer>

          <Button type="submit" loading={loading}>
            Transfer
          </Button>
        </Form>
      </Screen>
    </>
  );
};

export default Transfer;
