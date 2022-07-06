const path = require('path');

const express = require('express');

const selfCareController = require("../controllers/self-care.controller");

const router = express.Router();

router.get('/get-subscriber-self-care', selfCareController.subscriber);
router.get('/get-balance', selfCareController.balance);
router.get('/current-notification-bar', selfCareController.notificationBar);
router.get('/get-all-bundles', selfCareController.bundles);
router.get('/get-contact-by-subscriber/', selfCareController.contactBySubscriber);
router.get('/postpaid-bills/', selfCareController.postPaidBillsBySubscriber);
router.get('/purchase-history-by-subscriber', selfCareController.purchaseHistoryBySubscriber);
router.get('/payments-by-subscriber', selfCareController.paymentsBySubscriber);
router.get('/get-sms-counter-by-token', selfCareController.smsCounterByToken);
router.get('/cdr-by-subscription-uuid/3/VOICE', selfCareController.cdrVoice);
router.get('/cdr-by-subscription-uuid/3/TOPUP', selfCareController.cdrTopup);
router.get('/cdr-by-subscription-uuid/3/DATA', selfCareController.cdrData);
router.get('/get-bundles-by-type/Mobile/PrePaid', selfCareController.prePaidBundles);

router.get('/scratch-card/:code', selfCareController.topUpWithScratchCard);
router.post('/generate-top-up-link', selfCareController.generateRedirectUrl);

router.get('/pgw-form', selfCareController.getPgwPage);

module.exports = router;
