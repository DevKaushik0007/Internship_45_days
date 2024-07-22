document.getElementById('submit').addEventListener('click', function() {
    const grades = {
        math: document.getElementById('math').value,
        chemistry: document.getElementById('chemistry').value,
        hv: document.getElementById('hv').value,
        pps: document.getElementById('pps').value,
        bee: document.getElementById('bee').value,
        ecLab: document.getElementById('ec-lab').value,
        hvLab: document.getElementById('hv-lab').value,
        cpLab: document.getElementById('cp-lab').value,
        beeLab: document.getElementById('bee-lab').value,
        caeg: document.getElementById('caeg').value,
        sodeca: document.getElementById('sodeca').value
    };

    const gradePoints = {
        'A+': 10,
        'A': 9,
        'B+': 8,
        'B': 7,
        'C+': 6,
        'C': 5,
        'D': 4,
        'F': 0
    };

    let totalPoints = 0;
    let totalSubjects = 0;

    for (let subject in grades) {
        let grade = grades[subject].toUpperCase().trim();
        if (gradePoints[grade] !== undefined) {
            totalPoints += gradePoints[grade];
            totalSubjects++;
        }
    }

    let cgpa = totalPoints / totalSubjects;
    if (totalSubjects === 0) {
        cgpa = 0;
    }

    document.getElementById('result').textContent = 'Your CGPA is: ' + cgpa.toFixed(2);
});
