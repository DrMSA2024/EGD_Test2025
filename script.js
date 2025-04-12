function generateQuestions() {
  // Get student details
  const name = document.getElementById("name").value;
  const rollNumber = document.getElementById("rollNumber").value;
  const enrollmentNumber = document.getElementById("enrollmentNumber").value;
  const className = document.getElementById("class").value;

  // Display student details
  const studentDetailsDiv = document.getElementById("studentDetails");
  studentDetailsDiv.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Roll Number:</strong> ${rollNumber}</p>
    <p><strong>Enrollment Number:</strong> ${enrollmentNumber}</p>
    <p><strong>Class:</strong> ${className}</p>
  `;

  // List of questions for Q1 (must be selected)
  const q1Questions = [
  "Write your full name initials and year of joining college (e.g., A.S.2021) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite superhero name and year (e.g., BATMAN2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your dream profession and birth year (e.g., DOCTOR2003) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite season and any year (e.g., WINTER2019) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your school name initials and pass-out year (e.g., D.P.S.2020) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your best friend’s name and their birth year (e.g., RAVI2002) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your current city name and year (e.g., MUMBAI2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a motivational word and any year (e.g., BELIEVE2021) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite sport and a year (e.g., CRICKET2018) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a country name you want to visit and year (e.g., JAPAN2025) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your surname and graduation year (e.g., SINGH2024) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘GROWTH’ and any year (e.g., GROWTH2026) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘FOCUS’ and a meaningful year (e.g., FOCUS2020) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘POWER’ and a lucky year (e.g., POWER2005) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your pet’s name and adoption year (e.g., BRUNO2019) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘MIND’ and a year (e.g., MIND2024) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘BRAVE’ and any year (e.g., BRAVE2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘UNITY’ and a year of significance (e.g., UNITY1947) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the name of a mountain and any year (e.g., EVEREST2010) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the name of a river and a historical year (e.g., GANGA1984) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘ENERGY’ and any year (e.g., ENERGY2027) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite subject and a random year (e.g., MATH2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a planet name and a futuristic year (e.g., MARS2070) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a flower name and a random year (e.g., LOTUS2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a tree name and year (e.g., NEEM2016) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘SKY’ and a past year (e.g., SKY2011) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘RACE’ and any year (e.g., RACE2009) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘CALM’ and a peaceful year (e.g., CALM2001) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite bird name and year (e.g., PARROT2014) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘HAPPY’ and a birthday year (e.g., HAPPY1998) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘TRUST’ and a random year (e.g., TRUST2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘HONEST’ and a memorable year (e.g., HONEST2017) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘SKILL’ and a practice year (e.g., SKILL2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a movie title and year (e.g., AVATAR2009) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite animal and any year (e.g., TIGER2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘NEVERGIVEUP’ and a recent year (e.g., NEVERGIVEUP2024) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your college abbreviation and a current year (e.g., IITD2025) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘ENGINEER’ and your graduation year (e.g., ENGINEER2026) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘LEADER’ and any meaningful year (e.g., LEADER2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the name of a god or goddess and a year (e.g., SHIVA2020) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘FAMILY’ and your family’s founding year (e.g., FAMILY1980) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the name of a festival and year (e.g., DIWALI2021) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘CARE’ and any year (e.g., CARE2013) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘RESPECT’ and year (e.g., RESPECT2012) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘HUSTLE’ and a work year (e.g., HUSTLE2019) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite car brand and model year (e.g., HONDA2020) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a positive word and a motivational year (e.g., SMILE2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘ACHIEVE’ and your goal year (e.g., ACHIEVE2025) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘BALANCE’ and a year (e.g., BALANCE2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘VISION’ and future year (e.g., VISION2030) in 35mm height uppercase double-stroke Gothic letters.",
];

  // List of other questions (except Q1)

const otherQuestions = [
  // INVOLUTE
  "Draw the involute of a square with a side of 20 mm.",
  "Draw the involute of an equilateral triangle with a side of 20 mm.",
  "Draw the involute of a pentagon with a side of 20 mm.",
  "Draw the involute of a hexagon with a side of 20 mm.",
  "Draw the involute of an octagon with a side of 20 mm.",
  "Draw the involute of a circle of 30 mm diameter.",
  "Draw the involute of a semicircle of radius 25 mm.",
  "Draw the involute of a rectangle measuring 40 mm × 20 mm.",
  "Draw the involute of a regular heptagon with side 20 mm.",
  "Draw the involute of a square having a side of 30 mm using the string unwinding method.",

  // PLAIN SCALE
  "Construct a plain scale to read kilometers and hectometers, capable of measuring up to 5 km with an RF of 1:30,000. Mark the distances 3.5 km and 2.4 km on the scale.",
  "Construct a plain scale with an RF of 1:50,688 to read miles, furlongs, and chains, capable of measuring up to 5 miles. Mark 3 miles, 5 furlongs, and 3 chains.",
  "Construct a plain scale to read kilometers and hectometers, capable of measuring up to 4 km with an RF of 1:25,000. Mark the distances 2.3 km and 1.1 km.",
  "Construct a plain scale to show metres and decimetres, RF 1:100, measure up to 5 m and mark 3.6 m.",
  "Construct a plain scale of RF = 1:40 to show centimetres and millimetres up to 6 cm and mark 4.3 cm.",
  "Construct a plain scale of RF = 1:20 to measure decimetres and centimetres up to 2 dm and mark 1.4 dm.",
  "Construct a plain scale to show inches and eighths, RF = 1:2, to read up to 6 inches and mark 4.5 inches.",
  "Construct a plain scale to show metres and centimetres for a maximum length of 8 metres with RF = 1:100.",
  "Construct a plain scale to show yards and feet with an RF = 1:300, to measure up to 6 yards and mark 3 yards 2 feet.",
  "Construct a plain scale with RF = 1:500 to show decametres and metres up to 10 dam and mark 6.3 dam.",

  // DIAGONAL SCALE
  "Construct a diagonal scale to read up to 6 km with an RF of 1:40,000. Mark the distances 4.2 km and 3.6 km.",
  "Construct a diagonal scale of RF = 1:25,000 to read up to 5 km. Mark 3.5 km.",
  "Construct a diagonal scale of RF = 1:20 to show metres, decimetres, and centimetres up to 4 m. Mark 2.74 m.",
  "Construct a diagonal scale to show inches, tenths, and hundredths up to 5 inches with an RF of 1:2. Mark 3.27 inches.",
  "Construct a diagonal scale to measure up to 7 km with an RF of 1:35,000 and mark 5.3 km and 2.6 km.",
  "Construct a diagonal scale with RF = 1:100 to measure decimetres and mark 6.7 dm and 4.9 dm.",
  "Construct a diagonal scale of RF = 1:2500 for metres and mark 4.35 m and 3.28 m.",
  "Construct a diagonal scale of RF = 1:50,000 to read up to 10 km and mark 6.4 km.",
  "Construct a diagonal scale to read up to 6 miles with RF = 1:63,360 and mark 4.5 miles and 2.75 miles.",
  "Construct a diagonal scale with RF = 1:200 for metres and centimetres up to 5 m. Mark 2.45 m.",

  // CONIC SECTIONS
  "Draw an ellipse using the concentric circle method with major and minor axes of 120 mm and 60 mm.",
  "Draw an ellipse using the four-centre method with major and minor axes of 90 mm and 60 mm.",
  "Draw an ellipse using the rhombus method with major and minor axes of 100 mm and 50 mm.",
  "Draw an ellipse using the intersecting arcs method with major and minor axes of 100 mm and 50 mm.",
  "Draw a parabola using the rectangle method with base 60 mm and height 40 mm.",
  "Draw a parabola using the offset method for a base of 80 mm and height of 60 mm.",
  "Construct a parabola by the focus-directrix method where distance between focus and directrix is 40 mm.",
  "Construct a hyperbola using the asymptote and vertex method.",
  "Construct a hyperbola by the rectangle method, given transverse axis 60 mm and conjugate axis 40 mm.",
  "Draw a hyperbola when a point moves such that the difference of distances from two fixed points is constant and equal to 40 mm.",

  // CYCLOID CURVES
  "Draw a cycloid for a circle of diameter 50 mm rolling along a straight line for one complete revolution.",
  "Draw an epicycloid generated by a rolling circle of 30 mm diameter on another circle of 90 mm diameter.",
  "Draw a hypocycloid generated by a rolling circle of 40 mm diameter inside another circle of 120 mm diameter.",
  "Draw a cycloid for a circle of diameter 40 mm rolling along a horizontal line.",
  "Draw an epicycloid when the diameter of the rolling circle is 25 mm and the base circle is 75 mm.",
  "Draw a hypocycloid when the rolling circle diameter is 20 mm and the directing circle diameter is 60 mm.",
  "Construct a cycloid when a circle of diameter 30 mm rolls without slipping for one revolution.",
  "Draw a curtate cycloid when the tracing point is inside the rolling circle of diameter 40 mm.",
  "Draw a prolate cycloid for a point outside the circumference of a circle of diameter 50 mm.",
  "Construct an epicycloid where the rolling circle has a diameter of 20 mm and the base circle has a diameter of 80 mm."
];


  // Randomly select one question from Q1
  const q1Index = Math.floor(Math.random() * q1Questions.length);
  const q1Selected = q1Questions[q1Index];

  // Randomly select two other questions from the remaining list
  const otherQuestionsCopy = [...otherQuestions];
  const randomOtherQuestions = [];
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * otherQuestionsCopy.length);
    randomOtherQuestions.push(otherQuestionsCopy[randomIndex]);
    otherQuestionsCopy.splice(randomIndex, 1); // Remove selected question to avoid duplication
  }

  // Combine Q1 question with two randomly selected questions
  const allQuestions = [q1Selected, ...randomOtherQuestions];

  // Display the selected questions
  const questionListDiv = document.getElementById("questionList");
  questionListDiv.innerHTML = `
    <div class="question"><strong>Q1:</strong> ${allQuestions[0]}</div>
    <div class="question"><strong>Q2:</strong> ${allQuestions[1]}</div>
    <div class="question"><strong>Q3:</strong> ${allQuestions[2]}</div>
  `;

  // Show the question section and hide the form
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("questionsSection").style.display = "block";
}

function restartExam() {
  // Reset the form and hide the question section
  document.getElementById("studentForm").style.display = "block";
  document.getElementById("questionsSection").style.display = "none";
  document.getElementById("studentDetails").innerHTML = '';
  document.getElementById("questionList").innerHTML = '';
  document.querySelector('form').reset();
}





