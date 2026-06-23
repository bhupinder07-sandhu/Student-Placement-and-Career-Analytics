async function getAdvice(){

    const data = {

        CGPA: parseFloat(document.getElementById("cgpa").value),

        Internships: parseInt(document.getElementById("internships").value),

        Projects: parseInt(document.getElementById("projects").value),

        AptitudeTestScore: parseInt(document.getElementById("aptitude").value),

        SoftSkillsRating: parseFloat(document.getElementById("softskills").value),

        ExtracurricularActivities: parseInt(document.getElementById("extra").value),

        PlacementTraining: parseInt(document.getElementById("training").value)

    };

    const response = await fetch(
        "http://127.0.0.1:5000/career-advisor",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
    );

    const result = await response.json();

    let html = "";

    result.recommendations.forEach(rec => {
        html += `<li>${rec}</li>`;
    });

    document.getElementById("recommendationList").innerHTML = html;
}