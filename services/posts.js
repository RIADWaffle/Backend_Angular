const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getPosts(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(`SELECT post_id, title, author, post_body, date, category 
        FROM posts LIMIT ${offset}, ${
        config.listPerPage
    }`);
    const data = helper.emptyOrRows(rows);
    const meta = {
        page
    };

    return {data, meta};
}

module.exports = {
    getPosts
};