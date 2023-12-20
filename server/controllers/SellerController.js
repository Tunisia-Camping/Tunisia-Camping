const conn= require('../../database-mysql/index')

const getAll = (req, res) => {
  const query = `SELECT * FROM products WHERE userId=${req.params.id} `;
  conn.query(query, (err, result) => {
    err ? console.error(err) : res.send(result);
  });
};

const add = (req, res) => {
  const query = `insert into products set ?`;
  conn.query(query, req.body, (err, result) => {
    err ? console.error(err) : res.send(result);
  });
};

const updateProduct = (req, res) => {
  const query = `update products set ? where id=${req.params.id}`;
  conn.query(query, req.body, (err, result) => {
    err ? console.error(err) : res.send(result);
  });
};

const remove = (req, res) => {
  const query = `delete from products where id=${req.params.id}`;
  conn.query(query, (err, result) => {
    err ? console.error(err) : res.send(result);
  });
};

const updateProfile = (req, res) => {
  const query = `update users set ? where id=${req.params.id}`;
  conn.query(query, req.body, (err, result) => {
    err ? console.error(err) : res.send(result);
  });
};

module.exports={getAll, add, updateProduct, remove, updateProfile}
