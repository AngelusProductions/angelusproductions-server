const { sendJson } = require('../handlers/util');
const { sendContactForm } = require('../data/contact');

exports.sendContactForm = async (req, res) => {
  const { isSuccess, error } = await sendContactForm(
    req.body.name,
    req.body.email,
    req.body.message
  )
  sendJson(res, 201, { isSuccess, error });
};
