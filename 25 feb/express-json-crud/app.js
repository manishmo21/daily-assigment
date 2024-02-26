// app.js

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Routes
app.get('/api/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.get('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const records = JSON.parse(data);
            const record = records.find(item => item.id === id);
            if (record) {
                res.json(record);
            } else {
                res.status(404).json({ error: 'Record not found' });
            }
        }
    });
});

app.post('/api/data', (req, res) => {
    const newData = req.body;
    // Validate required fields
    if (!newData.id || !newData.name) {
        return res.status(400).json({ error: 'ID and name are required' });
    }
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const records = JSON.parse(data);
            records.push(newData);
            fs.writeFile('data.json', JSON.stringify(records), err => {
                if (err) {
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    res.status(201).json(newData);
                }
            });
        }
    });
});

app.put('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    // Validate required fields
    if (!updatedData.name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            let records = JSON.parse(data);
            const index = records.findIndex(item => item.id === id);
            if (index !== -1) {
                records[index].name = updatedData.name;
                fs.writeFile('data.json', JSON.stringify(records), err => {
                    if (err) {
                        res.status(500).json({ error: 'Internal Server Error' });
                    } else {
                        res.json(records[index]);
                    }
                });
            } else {
                res.status(404).json({ error: 'Record not found' });
            }
        }
    });
});

app.delete('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            let records = JSON.parse(data);
            const index = records.findIndex(item => item.id === id);
            if (index !== -1) {
                records.splice(index, 1);
                fs.writeFile('data.json', JSON.stringify(records), err => {
                    if (err) {
                        res.status(500).json({ error: 'Internal Server Error' });
                    } else {
                        res.status(204).send();
                    }
                });
            } else {
                res.status(404).json({ error: 'Record not found' });
            }
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
