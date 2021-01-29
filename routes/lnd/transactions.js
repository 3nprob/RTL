const TransactionsController = require("../../controllers/lnd/transactions");
const express = require("express");
const router = express.Router();
const authCheck = require("../shared/authCheck");

router.get("/", authCheck, TransactionsController.getTransactions);
router.post("/", authCheck, TransactionsController.postTransactions);
router.post("/label", authCheck, TransactionsController.labelTransaction);

module.exports = router;
