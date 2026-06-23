async function getAdvice() {

    const data = {

        CGPA: parseFloat(document.getElementById("cgpa").value),

        Internships: parseInt(document.getElementById("internships").value),

        Projects: parseInt(document.getElementById("projects").value),

        AptitudeTestScore: parseInt(document.getElementById("aptitude").value),

        SoftSkillsRating: parseFloat(document.getElementById("softskills").value),

        ExtracurricularActivities: parseInt(document.getElementById("extra").value),

        PlacementTraining: parseInt(document.getElementById("training").value)

    };

    try {

        const response = await fetch(
            "https://student-career-analytics-api.onrender.com/career-advisor",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        if (!response.ok) {
            throw new Error("Server Error");
        }

        const result = await response.json();

        const recommendationList =
            document.getElementById("recommendationList");

        recommendationList.innerHTML = "";

        result.recommendations.forEach(rec => {

            const li = document.createElement("li");

            li.innerHTML = "✅ " + rec;

            recommendationList.appendChild(li);

        });

    }

    catch(error){

        console.error(error);

        document.getElementById("recommendationList").innerHTML =
        "<li>❌ Unable to connect to backend.</li>";
    }
}