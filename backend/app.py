from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

placement_model = joblib.load("placement_model.pkl")
placement_scaler = joblib.load("placement_scaler.pkl")

kmeans_model = joblib.load("kmeans_model.pkl")
cluster_scaler = joblib.load("cluster_scaler.pkl")


@app.route("/")
def home():
    return jsonify({
        "message": "Student Career Analytics API Running"
    })


@app.route("/predict-placement", methods=["POST"])
def predict_placement():

    data = request.json

    features = [[
        data["CGPA"],
        data["Internships"],
        data["Projects"],
        data["Workshops"],
        data["AptitudeTestScore"],
        data["SoftSkillsRating"],
        data["ExtracurricularActivities"],
        data["PlacementTraining"],
        data["SSC_Marks"],
        data["HSC_Marks"]
    ]]

    scaled = placement_scaler.transform(features)

    prediction = placement_model.predict(scaled)[0]

    probability = placement_model.predict_proba(scaled)[0][1]

    return jsonify({
        "prediction": "Placed" if prediction == 1 else "Not Placed",
        "probability": round(float(probability * 100), 2)
    })


@app.route("/predict-cluster", methods=["POST"])
def predict_cluster():

    data = request.json

    features = [[
        data["CGPA"],
        data["AptitudeTestScore"],
        data["SoftSkillsRating"],
        data["Projects"],
        data["SSC_Marks"],
        data["HSC_Marks"]
    ]]

    scaled = cluster_scaler.transform(features)

    cluster = int(kmeans_model.predict(scaled)[0])

    labels = {
        0: "Average Student",
        1: "At-Risk Student",
        2: "High Potential Student"
    }
    print("Predicted Cluster =", cluster)
    return jsonify({
        "cluster": labels[cluster]
    })


@app.route("/career-advisor", methods=["POST"])
def career_advisor():

    data = request.json

    recommendations = []

    if data["AptitudeTestScore"] < 75:
        recommendations.append(
            "Improve Aptitude Score to 75+."
        )

    if data["PlacementTraining"] == 0:
        recommendations.append(
            "Join Placement Training Programs."
        )

    if data["ExtracurricularActivities"] == 0:
        recommendations.append(
            "Participate in Extracurricular Activities."
        )

    if data["CGPA"] < 7:
        recommendations.append(
            "Improve CGPA above 7.0."
        )

    if data["Projects"] < 2:
        recommendations.append(
            "Complete at least 2 projects."
        )

    if data["Internships"] < 1:
        recommendations.append(
            "Gain internship experience."
        )

    if data["SoftSkillsRating"] < 4:
        recommendations.append(
            "Improve communication skills."
        )

    if len(recommendations) == 0:
        recommendations.append(
            "Excellent profile. Focus on interviews."
        )

    return jsonify({
        "recommendations": recommendations
    })


if __name__ == "__main__":
    app.run(debug=True)