const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Mock database
const teachers = {
    'teacher1': {
        username: 'teacher1',
        password: 'password123',
        accessKey: 'abc123',
        name: 'John Doe',
        courses: [
            { name: 'Math 101', time: '10:00 AM', day: 'Monday' },
            { name: 'Physics 202', time: '2:00 PM', day: 'Wednesday' }
        ]
    }
};

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.post('/signin', (req, res) => {
    const { username, password, accessKey } = req.body;
    const teacher = teachers[username];

    if (teacher && teacher.password === password && teacher.accessKey === accessKey) {
        res.json({ success: true, teacherName: teacher.name });
    } else {
        res.json({ success: false, message: 'Invalid credentials or access key' });
    }
});

app.post('/getCourses', (req, res) => {
    const { teacherName } = req.body;
    const teacher = Object.values(teachers).find(t => t.name === teacherName);

    if (teacher) {
        res.json({ courses: teacher.courses });
    } else {
        res.status(404).json({ message: 'Teacher not found' });
    }
});

app.post('/turnOnPower', (req, res) => {
    const { teacherName, courseName } = req.body;
    const teacher = Object.values(teachers).find(t => t.name === teacherName);

    if (teacher) {
        const course = teacher.courses.find(c => c.name === courseName);
        if (course) {
            res.json({ success: true, message: `Power supply turned on for ${courseName}` });
        } else {
            res.json({ success: false, message: `Course not found` });
        }
    } else {
        res.json({ success: false, message: `Teacher not found` });
    }
});

app.post('/turnOffPower', (req, res) => {
    const { teacherName, courseName } = req.body;
    const teacher = Object.values(teachers).find(t => t.name === teacherName);

    if (teacher) {
        const course = teacher.courses.find(c => c.name === courseName);
        if (course) {
            res.json({ success: true, message: `Power supply turned off for ${courseName}` });
        } else {
            res.json({ success: false, message: `Course not found` });
        }
    } else {
        res.json({ success: false, message: `Teacher not found` });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
