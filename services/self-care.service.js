const fs = require('fs');
const path = require('path');

const subscriber = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'subscriber.json'
);

const getSubscriberFromFile = cb => {
  fs.readFile(subscriber, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class SelfCare {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  static deleteById(id) {}

  static fetchAll(cb) {
    getSubscriberFromFile(cb);
  }

  static findById(id, cb) {
    getSubscriberFromFile(data => {
      const e = data.find(p => p.id === id);
      cb(e);
    });
  }
};
