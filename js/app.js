const blogBtn = document.getElementById('blog-btn');
blogBtn.addEventListener('click', ()=>{
  window.location.href = ('../pages/blog.html')
})


// ============  GET ALL CALCULATE BUTTON ===============
// ================ TRIANGLE CALCULATION FUNCTION
const calculateBtns = document.querySelectorAll("#calculate-btn");
// ============= ARIA ITEM ===============
const ariaItem = document.getElementById("aria-item");
//=============== TRACK THE SERIAL NUMBER ================
let serialNumber = 0;

// const calculateBtn = document.getElementById("calculate-btn");
const getInputValue = (id1, id2, errorId, number = 1) => {
  const element1 = document.getElementById(id1);
  const element2 = document.getElementById(id2);
  const error = document.getElementById(errorId);

  const elementValue1 = parseFloat(element1.value);
  const elementValue2 = parseFloat(element2.value);
  const value = number * elementValue1 * elementValue2;

  // ============ check input field ===============
  if (
    element1.value === "" ||
    element2.value === "" ||
    element1.value < 0 ||
    element2.value < 0
  ) {
    error.innerText = "Please type a valid number";
  } else {
    error.innerText = "";
  }

  const fixedValue = parseFloat(value.toFixed(2));
  // element1.value = "";
  // element2.value = "";

  // ===== CHECK VALUE NUMBER OR STRING =======
  if (isNaN(fixedValue)) {
    error.innerText = "Please type a valid number";
  }

  // ======  RETURN VALUE ========
  return {
    fixedValue,
  };
};




// ============== CALCULATE BUTTON 1 EVENTLISTENER =============
calculateBtns[0].addEventListener("click", (e) => {
  
  serialNumber++;
  const { fixedValue } = getInputValue(
    "triangle-input1",
    "triangle-input2",
    "error",
    0.5
  );


  // ============ check value empty or not ================
  if (!isNaN(fixedValue)) {
    const title = getTitle("triangle-title");
    const div = setValueInCalculateAria(title, fixedValue, serialNumber);

    ariaItem.appendChild(div);
  }

// GET INPUT FIELD 
const {input1, input2} = getInputField('triangle-input1', 'triangle-input2');
// GET TEXT SIZE FIELD 
const {text1, text2} = getCardSizeText('triangle-value1', 'triangle-value2');

text1.textContent = input1.value;
text2.textContent = input2.value;

// ==== CLEAR INPUT FIELD ===========
input1.value = '';
input2.value = ''; 

});


// ============== CALCULATE BUTTON 2 EVENTLISTENER =============
calculateBtns[1].addEventListener("click", () => {
  serialNumber++;

  const { fixedValue } = getInputValue(
    "rectangle-input1",
    "rectangle-input2",
    "rect-error"
  );

  // ============ check value empty or not ================
  if (!isNaN(fixedValue)) {
    const title = getTitle("rectangle-title");
    const div = setValueInCalculateAria(title, fixedValue, serialNumber);

    ariaItem.appendChild(div);
  }

  // GET INPUT FIELD
  const { input1, input2 } = getInputField(
    "rectangle-input1",
    "rectangle-input2"
  );
  // GET TEXT SIZE FIELD
  const { text1, text2 } = getCardSizeText(
    "rectangle-value1",
    "rectangle-value2"
  );

  text1.textContent = input1.value;
  text2.textContent = input2.value;

  // ==== CLEAR INPUT FIELD ===========
  input1.value = "";
  input2.value = "";
});

// ============== CALCULATE BUTTON 3 EVENTLISTENER =============
calculateBtns[2].addEventListener("click", () => {
  serialNumber++;

  const { fixedValue } = getInputValue(
    "parall-input1",
    "parall-input2",
    "parall-error"
  );

  // ============ check value empty or not ================
  if (!isNaN(fixedValue)) {
    const title = getTitle("parall-title");
    const div = setValueInCalculateAria(title, fixedValue, serialNumber);

    ariaItem.appendChild(div);
  }

  // GET INPUT FIELD
  const { input1, input2 } = getInputField(
    "parall-input1",
    "parall-input2"
  );
  // GET TEXT SIZE FIELD
  const { text1, text2 } = getCardSizeText(
    "parall-value1",
    "parall-value2"
  );

  text1.textContent = input1.value;
  text2.textContent = input2.value;

  // ==== CLEAR INPUT FIELD ===========
  input1.value = "";
  input2.value = "";
});



// ============== CALCULATE BUTTON 4 EVENTLISTENER =============
calculateBtns[3].addEventListener("click", () => {
  serialNumber++;

  const { fixedValue } = getInputValue(
    "rhombus-input1",
    "rhombus-input2",
    "rhombus-error",
    0.5
  );

  // ============ check value empty or not ================
  if (!isNaN(fixedValue)) {
    const title = getTitle("rhombus-title");
    const div = setValueInCalculateAria(title, fixedValue, serialNumber);

    ariaItem.appendChild(div);
  }

  // GET INPUT FIELD
  const { input1, input2 } = getInputField(
    "rhombus-input1",
    "rhombus-input2"
  );
  // GET TEXT SIZE FIELD
  const { text1, text2 } = getCardSizeText(
    "rhombus-value1",
    "rhombus-value2"
  );

  text1.textContent = input1.value;
  text2.textContent = input2.value;

  // ==== CLEAR INPUT FIELD ===========
  input1.value = "";
  input2.value = "";
});



// ============== CALCULATE BUTTON 5 EVENTLISTENER =============
calculateBtns[4].addEventListener("click", () => {
  serialNumber++;

  const { fixedValue } = getInputValue(
    "pentagon-input1",
    "pentagon-input2",
    "pentagon-error",
    0.5
  );

  // ============ check value empty or not ================
  if (!isNaN(fixedValue)) {
    const title = getTitle("pentagon-title");
    const div = setValueInCalculateAria(title, fixedValue, serialNumber);

    ariaItem.appendChild(div);
  }

  // GET INPUT FIELD
  const { input1, input2 } = getInputField(
    "pentagon-input1",
    "pentagon-input2"
  );
  // GET TEXT SIZE FIELD
  const { text1, text2 } = getCardSizeText(
    "pentagon-value1",
    "pentagon-value2"
  );

  text1.textContent = input1.value;
  text2.textContent = input2.value;

  // ==== CLEAR INPUT FIELD ===========
  input1.value = "";
  input2.value = "";
});



// ============== CALCULATE BUTTON 6 EVENTLISTENER =============
calculateBtns[5].addEventListener("click", () => {
  serialNumber++;

  const { fixedValue } = getInputValue(
    "ellipse-input1",
    "ellipse-input2",
    "ellipse-error",
    3.14
  );

  // ============ check value empty or not ================
  if (!isNaN(fixedValue)) {
    const title = getTitle("ellipse-title");
    const div = setValueInCalculateAria(title, fixedValue, serialNumber);

    ariaItem.appendChild(div);
  }

  // GET INPUT FIELD
  const { input1, input2 } = getInputField(
    "ellipse-input1",
    "ellipse-input2"
  );
  // GET TEXT SIZE FIELD
  const { text1, text2 } = getCardSizeText(
    "ellipse-value1",
    "ellipse-value2"
  );

  text1.textContent = input1.value;
  text2.textContent = input2.value;

  // ==== CLEAR INPUT FIELD ===========
  input1.value = "";
  input2.value = "";
});

// ============= set value in calculate aria =============
function setValueInCalculateAria(title, value, serialNum) {
  // ====== CREATE DIV ELEMENT ==========
  const div = document.createElement("div");

  div.innerHTML = `
  <p class="space-y-5 border-b-2 p-2">
    <span class="font-bold">${serialNum}.</span>${title} ${value} <span class="font-semibold">cm<sup>2</sup></span> <button class="text-sm bg-green-600 p-1 rounded-sm text-slate-100">Convert to <span>m<sup>2</sup></span></button>
    <i class="ri-delete-bin-7-line text-rose-600 cursor-pointer bg-red-100 p-[3px] rounded-sm"></i>
  </p>
  `;
  return div;
}

// ============ GET FIELD TITLE FUNCTION ==============
function getTitle(id) {
  const title = document.getElementById(id).innerText;
  return title;
}



// ================= input field updated function =================


const inputFieldEdit = (inputF1, inputF2, txt1,txt2) => {
  const { text1, text2 } = getCardSizeText(
   txt1,
    txt2
  );
  const { input1, input2 } = getInputField(
    inputF1,
    inputF2
  );

  input1.value = text1.textContent;
  input2.value = text2.textContent;

  triangleCheckBox.checked = false;
};

// =========== REUSES FUNCTION ==========
const getCardSizeText = (textId1, textId2) => {
  const text1 = document.getElementById(textId1)
  const text2 = document.getElementById(textId2)

  return {
    text1,
    text2
  }

}

// ============ REUSES FUNCTION =============
const getInputField = (inputId1, inputId2) => {
  const input1 = document.getElementById(inputId1)
  const input2 = document.getElementById(inputId2)

  return{
    input1,
    input2
  }
}




// ============= VALUE EDIT ===========
const allEditBtns = document.querySelectorAll(".ri-edit-box-line");


allEditBtns[0].addEventListener('click',()=>{
  inputFieldEdit('triangle-input1', 'triangle-input2','triangle-value1', 'triangle-value2');
})

allEditBtns[1].addEventListener('click',()=>{
  inputFieldEdit('rectangle-input1', 'rectangle-input2','rectangle-value1', 'rectangle-value2');
})
allEditBtns[2].addEventListener('click',()=>{
  inputFieldEdit('parall-input1', 'parall-input2','parall-value1', 'parall-value2');
})
allEditBtns[3].addEventListener('click',()=>{
  inputFieldEdit('rhombus-input1', 'rhombus-input2','rhombus-value1', 'rhombus-value2');
})
allEditBtns[4].addEventListener('click',()=>{
  inputFieldEdit('pentagon-input1', 'pentagon-input2','pentagon-value1', 'pentagon-value2');
})
allEditBtns[5].addEventListener('click',()=>{
  inputFieldEdit('ellipse-input1', 'ellipse-input2','ellipse-value1', 'ellipse-value2');
})



// ========= updated input value ============

const allCheckBox = document.querySelectorAll('input[type="checkbox"]');

allCheckBox[0].addEventListener('click',()=>{
  updateTextField('triangle-input1','triangle-input2','triangle-value1', 'triangle-value2', 'triangle-checkbox');
})

allCheckBox[1].addEventListener('click',()=>{
  updateTextField('rectangle-input1','rectangle-input2','rectangle-value1', 'rectangle-value2', 'rectangle-checkbox');
})

allCheckBox[2].addEventListener('click',()=>{
  updateTextField('parall-input1','parall-input2','parall-value1', 'parall-value2', 'parall-checkbox');
})


allCheckBox[3].addEventListener('click',()=>{
  updateTextField('rhombus-input1','rhombus-input2','rhombus-value1', 'rhombus-value2', 'rhombus-checkbox');
})

allCheckBox[4].addEventListener('click',()=>{
  updateTextField('pentagon-input1','pentagon-input2','pentagon-value1', 'pentagon-value2', 'pentagon-checkbox');
})


allCheckBox[5].addEventListener('click',()=>{
  updateTextField('ellipse-input1','ellipse-input2','ellipse-value1', 'ellipse-value2', 'ellipse-checkbox');
})




const updateTextField = (inputF1,inputF2, txt1, txt2, checkbox) => {
  const checkBox = document.getElementById(checkbox)
  const { text1, text2 } = getCardSizeText(
    txt1,
    txt2
  );
  const { input1, input2 } = getInputField(
    inputF1,
    inputF2
  );

  if (checkBox.checked) {
    text1.textContent = input1.value;
    text2.textContent = input2.value;
  }
};







// ============ GENERATE RANDOM COLOR FUNCTION ============

function generateRandomColor() {
  // Generate random values for red, green, and blue color channels
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Combine the color channels into a CSS color string
  const color = `rgb(${red}, ${green}, ${blue})`;

  // Return the color string
  return color;
}


const cards = document.querySelectorAll('#card');
cards.forEach((card)=>{
  card.addEventListener('mouseenter',()=>{
    const color = generateRandomColor();
    card.style.backgroundColor = color;
    card.style.transition = '.4s'
  })

  card.addEventListener('mouseleave',()=>{

    card.style.backgroundColor = 'white'
  })
})

