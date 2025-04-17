import Contact from "../models/contactModel.js";

export const addContacts = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    //  contact already exists with the same email or phone
    const contactExists = await Contact.findOne({
      $or: [{ email: email }, { phone: phone }],
    });

    if (contactExists) {
      return res
        .status(400)
        .json({ message: "Contact with this email or phone already exists" });
    }

    const newContact = new Contact({ name, email, phone });
    await newContact.save();

    res.status(201).json({ message: "Contact added successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error adding contact", error: err.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching contacts", error: err });
  }
};
