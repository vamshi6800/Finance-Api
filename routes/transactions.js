const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/transactions', transactionController.addTransaction);
router.get('/transactions', transactionController.getAllTransactions);
router.get('/transactions/:id', transactionController.getTransactionById);
router.put('/transactions/:id', transactionController.updateTransaction);
router.delete('/transactions/:id', transactionController.deleteTransaction);
router.get('/summary', transactionController.getSummary);

module.exports = router;
