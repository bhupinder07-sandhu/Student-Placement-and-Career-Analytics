async function predictPlacement() {

    const data = {

        CGPA: parseFloat(document.getElementById("cgpa").value),

        Internships: parseInt(document.getElementById("internships").value),

        Projects: parseInt(document.getElementById("projects").value),

        Workshops: parseInt(document.getElementById("workshops").value),

        AptitudeTestScore: parseInt(document.getElementById("aptitude").value),

        SoftSkillsRating: parseFloat(document.getElementById("softskills").value),

        ExtracurricularActivities: parseInt(document.getElementById("extra").value),

        PlacementTraining: parseInt(document.getElementById("training").value),

        SSC_Marks: parseInt(document.getElementById("ssc").value),

        HSC_Marks: parseInt(document.getElementById("hsc").value)

    };

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/predict-placement",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        const predictionElement =
            document.getElementById("predictionResult");

        const probabilityElement =
            document.getElementById("probabilityResult");

        const progressBar =
            document.getElementById("progressBar");

        if(result.prediction === "Placed"){

            predictionElement.innerHTML =
            "✅ Placed";

            predictionElement.style.color =
            "#16a34a";

        }

        else{

            predictionElement.innerHTML =
            "❌ Not Placed";

            predictionElement.style.color =
            "#dc2626";

        }

        probabilityElement.innerHTML =
        `Placement Probability: ${result.probability}%`;

        progressBar.style.width =
        result.probability + "%";

    }

    catch(error){

        console.error(error);

        alert(
            "Unable to connect to backend."
        );

    }

}