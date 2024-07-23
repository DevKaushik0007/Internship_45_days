const gradePoints = {
    'A++': 10,
    'A+': 9,
    'A': 8.5,
    'B+': 8,
    'B': 7.5,
    'C+': 7,
    'C': 6.5,
    'D+': 6,
    'D': 5.5,
    'E+': 5,
    'E': 4,
    'F': 0
};

const subjectCredits = {
    math1: 4,         
    chemistry: 4,
    hv: 2,           
    pps: 2, 
    bee: 2, 
    ecLab: 1,  
    hvLab: 1,  
    cpLab: 1.5,  
    beeLab: 1,  
    caeg: 1.5, 
    sodeca1: 0.5, 
    math2: 4,        
    physics: 4,    
    cs: 2,           
    bme: 2, 
    bce: 2, 
    epLab: 1,  
    lLab: 1,        
    mpw: 1.5,   
    bceLab: 1,  
    camd: 1.5, 
    sodeca2: 0.5  
};

function calculateCGPA(grades) {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let subject in grades) {
        let grade = grades[subject].toUpperCase().trim();
        let credits = subjectCredits[subject] || 0;
        if (gradePoints[grade] !== undefined && gradePoints[grade] >= 4) {
            totalPoints += gradePoints[grade] * credits;
            totalCredits += credits;
        }
    }

    let cgpa = totalPoints / totalCredits;
    if (totalCredits === 0) {
        cgpa = 0;
    }
    return cgpa.toFixed(2);
}

document.getElementById('submit-sem1').addEventListener('click', function() {
    const gradesSem1 = {
        math1: document.getElementById('math1').value,
        chemistry: document.getElementById('chemistry').value,
        hv: document.getElementById('hv').value,
        pps: document.getElementById('pps').value,
        bee: document.getElementById('bee').value,
        ecLab: document.getElementById('ec-lab').value,
        hvLab: document.getElementById('hv-lab').value,
        cpLab: document.getElementById('cp-lab').value,
        beeLab: document.getElementById('bee-lab').value,
        caeg: document.getElementById('caeg').value,
        sodeca1: document.getElementById('sodeca1').value
    };
    const cgpa = calculateCGPA(gradesSem1);
    document.getElementById('result1').textContent = 'Your SEM-1 SGPA is: ' + cgpa;
});

document.getElementById('submit-sem2').addEventListener('click', function() {
    const gradesSem2 = {
        math2: document.getElementById('math2').value,
        physics: document.getElementById('physics').value,
        cs: document.getElementById('cs').value,
        bme: document.getElementById('bme').value,
        bce: document.getElementById('bce').value,
        epLab: document.getElementById('ep-lab').value,
        lLab: document.getElementById('l-lab').value,
        mpw: document.getElementById('mpw').value,
        bceLab: document.getElementById('bce-lab').value,
        camd: document.getElementById('camd').value,
        sodeca2: document.getElementById('sodeca2').value
    };
    const cgpa = calculateCGPA(gradesSem2);
    document.getElementById('result2').textContent = 'Your SEM-2 SGPA is: ' + cgpa;
});

document.getElementById('submit-overall').addEventListener('click', function() {
    const grades = {
        math1: document.getElementById('math1').value,
        chemistry: document.getElementById('chemistry').value,
        hv: document.getElementById('hv').value,
        pps: document.getElementById('pps').value,
        bee: document.getElementById('bee').value,
        ecLab: document.getElementById('ec-lab').value,
        hvLab: document.getElementById('hv-lab').value,
        cpLab: document.getElementById('cp-lab').value,
        beeLab: document.getElementById('bee-lab').value,
        caeg: document.getElementById('caeg').value,
        sodeca1: document.getElementById('sodeca1').value,
        math2: document.getElementById('math2').value,
        physics: document.getElementById('physics').value,
        cs: document.getElementById('cs').value,
        bme: document.getElementById('bme').value,
        bce: document.getElementById('bce').value,
        epLab: document.getElementById('ep-lab').value,
        lLab: document.getElementById('l-lab').value,
        mpw: document.getElementById('mpw').value,
        bceLab: document.getElementById('bce-lab').value,
        camd: document.getElementById('camd').value,
        sodeca2: document.getElementById('sodeca2').value
    };

    const cgpa = calculateCGPA(grades);
    document.getElementById('result').textContent = 'Your Overall CGPA is: ' + cgpa;
});

const inputs = document.querySelectorAll('.input');
inputs.forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            const nextInput = inputs[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            const previousInput = inputs[index - 1];
            if (previousInput) {
                previousInput.focus();
            }
        }
    });
});
