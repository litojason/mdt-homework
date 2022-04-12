import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthProvider";
import { balance, payees, transactions } from "../utils/api";
import { handleCurrencyFormat } from "../utils/globalMethod";
import { handleTransactionDate } from "../utils/moment";
import { colors, fonts, spacing } from "../constants/styles";
import Button from "components/Button";
import { Card, Row } from "components/Card";
import { SectionTitle, Text } from "components/Text";
import Screen from "components/Screen";

const Dashboard = () => {
  const { token } = useAuthContext();
  const navigate = useNavigate();

  const [balanceData, setBalanceData] = useState({
    // accountNo: "2970-111-3648",
    // balance: 0,
  });
  const [transactionsData, setTransactionsData] = useState([
    // {
    //   amount: 1,
    //   description: "testing",
    //   sender: {
    //     accountHolder: "Andy",
    //     accountNo: "6554-630-9653",
    //   },
    //   transactionDate: "2022-03-12T15:13:58.927Z",
    //   transactionId: "622cb8b68c7f3a5bcccf8ba4",
    //   transactionType: "transfer",
    // },
  ]);

  useEffect(() => {
    getBalance();
    getTransactions();
  }, []);

  const getBalance = async () => {
    const response = await balance(token);

    if (response.status === "success") {
      setBalanceData(response);
    }
  };

  const getTransactions = async () => {
    const response = await transactions(token);

    if (response.status === "success") {
      setTransactionsData(response.data);
    }
  };

  const renderTransactionCard = (item, index) => {
    const {
      amount,
      description,
      sender,
      receipient,
      transactionDate,
      transactionId,
      transactionType,
    } = item;

    return (
      <Card key={transactionId}>
        <Row>
          <Text weight="bold" oneLine>
            {transactionType === "received"
              ? sender.accountHolder
              : transactionType === "transfer"
              ? receipient.accountHolder
              : "-"}
          </Text>

          <Text
            color={transactionType === "transfer" ? colors.red : colors.green}
          >{`${
            transactionType === "transfer" ? "-" : "+"
          }${handleCurrencyFormat(amount)}`}</Text>
        </Row>

        <Row>
          <Text oneLine size={fonts.size.description}>
            {transactionType === "received"
              ? sender.accountNo
              : transactionType === "transfer"
              ? receipient.accountNo
              : "-"}
          </Text>
          <Text size={fonts.size.description}>
            {handleTransactionDate(transactionDate)}
          </Text>
        </Row>

        <Text>{description}</Text>
      </Card>
    );
  };

  return (
    <Screen hasNavbar>
      <Card>
        <Text>Current Balance</Text>
        <Text
          size={fonts.size.title}
          weight={"600"}
          style={{ marginBottom: spacing.quarter }}
        >{`SGD ${handleCurrencyFormat(balanceData.balance)}`}</Text>

        <Text>Account No: {balanceData.accountNo}</Text>
      </Card>

      <Button onClick={() => navigate("/transfer")}>Transfer</Button>

      <SectionTitle style={{ marginTop: spacing.base }}>
        Recent Transactions
      </SectionTitle>
      {transactionsData.length !== 0 ? (
        transactionsData.map((item, index) =>
          renderTransactionCard(item, index)
        )
      ) : (
        <Text>No transaction yet.</Text>
      )}
    </Screen>
  );
};

export default Dashboard;
