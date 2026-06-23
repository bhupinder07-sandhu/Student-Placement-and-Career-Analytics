async function predictCluster() {

    const data = {

        CGPA: parseFloat(document.getElementById("cgpa").value),

        AptitudeTestScore: parseInt(document.getElementById("aptitude").value),

        SoftSkillsRating: parseFloat(document.getElementById("softskills").value),

        Projects: parseInt(document.getElementById("projects").value),

        SSC_Marks: parseInt(document.getElementById("ssc").value),

        HSC_Marks: parseInt(document.getElementById("hsc").value)

    };

    try {

        const response = await fetch(
    "https://student-career-analytics-api.onrender.com/predict-cluster",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
);

        const result = await response.json();

        const title =
            document.getElementById("clusterResult");

        const desc =
            document.getElementById("clusterDescription");

        if(result.cluster === "High Potential Student"){

            title.innerHTML =
            "🟢 High Potential Student";

            title.style.color =
            "#16a34a";

            desc.innerHTML =
            "Excellent academic and placement potential.";
        }

        else if(result.cluster === "Average Student"){

            title.innerHTML =
            "🟡 Average Student";

            title.style.color =
            "#f59e0b";

            desc.innerHTML =
            "Good profile but there is room for improvement.";
        }

        else{

            title.innerHTML =
            "🔴 At-Risk Student";

            title.style.color =
            "#dc2626";

            desc.innerHTML =
            "Needs improvement in academics and career readiness.";
        }

    }

    catch(error){

        console.error(error);

        alert("Backend connection failed");

    }

}