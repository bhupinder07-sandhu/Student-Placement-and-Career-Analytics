# Student Career Analytics System

## Overview

The Student Career Analytics System is an AI-powered web application that helps students analyze their placement readiness, identify their academic category, and receive personalized career improvement suggestions.

The system combines Machine Learning models with an interactive web interface to provide insights that can help students improve their employability and career prospects.

---

## Features

### 1. Placement Prediction

Predicts whether a student is likely to get placed based on academic performance, skills, projects, internships, and training.

**Inputs:**

* CGPA
* Internships
* Projects
* Workshops/Certifications
* Aptitude Test Score
* Soft Skills Rating
* Extracurricular Activities
* Placement Training
* SSC Marks
* HSC Marks

**Output:**

* Placement Status (Placed / Not Placed)
* Placement Probability (%)

---

### 2. Student Segmentation

Uses K-Means Clustering to categorize students into different groups.

**Categories:**

* High Potential Student
* Average Student
* At-Risk Student

**Inputs:**

* CGPA
* Aptitude Test Score
* Soft Skills Rating
* Projects
* SSC Marks
* HSC Marks

---

### 3. Career Advisor

Provides personalized recommendations to improve placement readiness.

**Suggestions Include:**

* Improve CGPA
* Increase Aptitude Score
* Complete More Projects
* Gain Internship Experience
* Improve Communication Skills
* Join Placement Training Programs

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Python
* Flask
* Flask-CORS

### Machine Learning

* Scikit-Learn
* Logistic Regression
* K-Means Clustering
* StandardScaler

### Deployment

* Render (Backend)
* Vercel (Frontend)

---

## Project Structure

```text
Student-Placement-and-Career-Analytics
│
├── backend
│   ├── app.py
│   ├── requirements.txt
│   ├── placement_model.pkl
│   ├── placement_scaler.pkl
│   ├── kmeans_model.pkl
│   └── cluster_scaler.pkl
│
├── frontend
│   ├── index.html
│   ├── placement.html
│   ├── segmentation.html
│   ├── career.html
│   ├── *.css
│   └── *.js
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/bhupinder07-sandhu/Student-Placement-and-Career-Analytics.git
```

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

python app.py
```

### Frontend Setup

Open:

```text
frontend/index.html
```

in your browser.

---

## Future Enhancements

* Resume Analysis
* Job Recommendation System
* Student Performance Dashboard
* Interview Preparation Module
* AI Chatbot Career Assistant

---

## Team Members

* Bhupinder Sandhu
* Kriti
* Bavneet
* Deepti

All team members contributed equally to the design, development, testing, and deployment of the project.

---

## Project Outcome

The project successfully demonstrates the application of Machine Learning and Data Analytics in educational and career guidance systems by helping students understand their placement potential and identify areas for improvement.
