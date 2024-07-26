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
    AEM: 3,         
    TC: 2,
    DE: 3,           
    DSA: 3, 
    OOP: 3, 
    SE: 3,  
    DSALab: 1.5,  
    OOPLab: 1.5,  
    SELab: 1.5,  
    DELab: 1.5,  
    IT: 1, 
    sodeca1: 0.5, 
    DMA: 3,        
    MEFA: 2,    
    TOC: 3,           
    DBMS: 3, 
    MPI: 3, 
    DCCN: 3,  
    MPILab: 1,        
    DBMSLab: 1.5,   
    NPLab: 1.5,  
    LSPLab: 1,  
    JAVALab: 1, 
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
        AEM: document.getElementById('AEM').value,
        TC: document.getElementById('TC').value,
        DE: document.getElementById('DE').value,
        DSA: document.getElementById('DSA').value,
        OOP: document.getElementById('OOP').value,
        SE: document.getElementById('SE').value,
        DSALab: document.getElementById('DSA-lab').value,
        OOPLab: document.getElementById('OOP-lab').value,
        DELab: document.getElementById('DE-lab').value,
        IT: document.getElementById('IT').value,
        sodeca1: document.getElementById('sodeca1').value
    };
    const cgpa = calculateCGPA(gradesSem1);
    document.getElementById('result1').textContent = 'Your SEM-1 SGPA is: ' + cgpa;
});

document.getElementById('submit-sem2').addEventListener('click', function() {
    const gradesSem2 = {
        DMA: document.getElementById('DMA').value,
        MEFA: document.getElementById('MEFA').value,
        TOC: document.getElementById('TOC').value,
        DBMS: document.getElementById('DBMS').value,
        MPI: document.getElementById('MPI').value,
        DCCN: document.getElementById('DCCN').value,
        MPILab: document.getElementById('MPI-lab').value,
        DBMSLab: document.getElementById('DBMS-lab').value,
        NPLab: document.getElementById('NP-lab').value,
        LSPLab: document.getElementById('LSP-lab').value,
        JAVALab: document.getElementById('JAVA-lab').value,
        
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
