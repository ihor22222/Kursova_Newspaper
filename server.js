const mariadb = require('mariadb');
const cors = require('cors');
const express = require("express");

const app = express();
const port = 3001;

const pool = mariadb.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "vuebd"
});

app.use(cors());
app.use(express.json());

app.post('/user', async (req, res) => {
    const { name, pass } = req.body;

    let conn;
    try {
        conn = await pool.getConnection();
        const query = "SELECT id FROM `users` WHERE `name` = ? AND `password` = ?";
        const rows = await conn.query(query, [name, pass]);

        if (rows.length > 0) {
            res.json({ message: 'Login successful', login: true, id: rows[0].id });
        } else {
            res.json({ message: 'Login failed', login: false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to login' });
    }
});
// Роут для получения данных из базы данных
app.get('/posts', async (req, res) => {
    const query = "SELECT * FROM posts";
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(query);

        res.json(rows);
    } catch (err) {
        console.error(err);

        res.status(500).json({ error: 'Failed to fetch data' });
    } finally {
        if (conn) {
            conn.release();
        }
    }
});

app.put('/updatePosts/:id', async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;

    if (!id || !title || !content) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    const query = "UPDATE posts SET title=?, content=? WHERE id = ?";
    let conn;

    try {
        conn = await pool.getConnection();
        await conn.query(query, [title, content, id]);

        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update post' });
    } finally {
        if (conn) {
            conn.release();
        }
    }
});

app.delete('/deletePosts', async (req, res) => {
    const { id } = req.body;
    const query = "DELETE FROM posts WHERE id=?";
    let conn;

    try {
        conn = await pool.getConnection();
        await conn.query(query, id);

        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete post' });
    } finally {
        if (conn) {
            conn.release();
        }
    }
});
app.post('/createPost', async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }
    const post = {
        id: Date.now(), // Генерация уникального идентификатора (можно использовать БД для автоматической генерации)
        title,
        content,
    };
    const query = "INSERT INTO posts (title, content) VALUES (?, ?)";
    let conn;

    try {
        conn = await pool.getConnection();
        await conn.query(query, [title, content]);

        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create post' });
    } finally {
        if (conn) {
            conn.release();
        }
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

