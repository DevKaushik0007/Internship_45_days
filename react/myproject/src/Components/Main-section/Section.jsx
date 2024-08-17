import React from 'react'
import './Section.css'

function Section() {
  return (
    <>
    <h1>CGPA Calculator</h1>
    <div class="container">
        <div class="left">
            <h2>SEM-1</h2>
            <label for="math1">Engineering Mathematics-1</label>
            <input type="text" class="input" placeholder="Enter Grade" id="math1"/>
            <label for="chemistry">Engineering Chemistry</label>
            <input type="text" class="input" placeholder="Enter Grade" id="chemistry"/>
            <label for="hv">Human Values</label>
            <input type="text" class="input" placeholder="Enter Grade" id="hv"/>
            <label for="pps">PPS</label>
            <input type="text" class="input" placeholder="Enter Grade" id="pps"/>
            <label for="bee">BEE</label>
            <input type="text" class="input" placeholder="Enter Grade" id="bee"/>
            <label for="ec-lab">EC-Lab</label>
            <input type="text" class="input" placeholder="Enter Grade" id="ec-lab"/>
            <label for="hv-lab">HV-Lab</label>
            <input type="text" class="input" placeholder="Enter Grade" id="hv-lab"/>
            <label for="cp-lab">CP-Lab</label>
            <input type="text" class="input" placeholder="Enter Grade" id="cp-lab"/>
            <label for="bee-lab">BEE-Lab</label>
            <input type="text" class="input" placeholder="Enter Grade" id="bee-lab"/>
            <label for="caeg">CAEG</label>
            <input type="text" class="input" placeholder="Enter Grade" id="caeg"/>
            <label for="sodeca1">SODECA</label>
            <input type="text" class="input" placeholder="Enter Grade" id="sodeca1"/>
            <div id="result1"></div>
            <button id="submit-sem1">Calculate SEM-1 SGPA</button>
        </div>
        <div class="right">
            <h2>SEM-2</h2>
            <label for="math2">Engineering Mathematics-2</label>
            <input type="text" class="input" placeholder="Enter Grade" id="math2"/>
            <label for="physics">Engineering Physics</label>
            <input type="text" class="input" placeholder="Enter Grade" id="physics"/>
            <label for="cs">Communication Skills</label>
            <input type="text" class="input" placeholder="Enter Grade" id="cs"/>
            <label for="bme">BME</label>
            <input type="text" class="input" placeholder="Enter Grade" id="bme"/>
            <label for="bce">BCE</label>
            <input type="text" class="input" placeholder="Enter Grade" id="bce"/>
            <label for="ep-lab">EP-Lab</label>
            <input type="text" class="input" placeholder="Enter Grade" id="ep-lab"/>
            <label for="l-lab">Language-Lab</label>
            <input type="text" class="input" placeholder="Enter Grade" id="l-lab"/>
            <label for="mpw">Manufacturing Practices workshop</label>
            <input type="text" class="input" placeholder="Enter Grade" id="mpw"/>
            <label for="bce-lab">BCE-Lab</label>
            <input type="text" class="input" placeholder="Enter Grade" id="bce-lab"/>
            <label for="camd">CAMD</label>
            <input type="text" class="input" placeholder="Enter Grade" id="camd"/>
            <label for="sodeca2">SODECA</label>
            <input type="text" class="input" placeholder="Enter Grade" id="sodeca2"/>
            <div id="result2"></div>
            <button id="submit-sem2">Calculate SEM-2 SGPA</button>

        </div>
    </div>
    <button id="submit-overall" class="submit-overall">Calculate Overall CGPA</button>
    <div id="result"></div>
    </>
  )
}

export default Section