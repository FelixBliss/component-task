import type { Procedure } from "../procedures";

export const rgnProcedures: Procedure[] = [
  {
    id: "rgn-001",
    title: "Measuring Temperature",
    category: "General Nursing (RGN)",

    overview:
      "Measurement of a patient's body temperature as part of routine assessment and monitoring of changes in clinical condition.",

    purpose: [
      "Establish the patient's baseline temperature.",
      "Monitor changes in body temperature.",
      "Assist in identifying fever or hypothermia."
    ],

    indications: [
      "Routine vital-sign assessment.",
      "Monitoring patients with suspected infection.",
      "Monitoring changes in a patient's clinical condition."
    ],

    equipment: [
      "Appropriate thermometer.",
      "Disposable probe cover where applicable.",
      "Gloves when indicated.",
      "Documentation chart or electronic record."
    ],

    steps: [
      "Perform hand hygiene and identify the patient correctly.",
      "Explain the procedure and provide privacy.",
      "Select the appropriate thermometer and measurement site.",
      "Position the patient appropriately.",
      "Measure the temperature according to the equipment manufacturer's instructions and facility protocol.",
      "Remove the equipment and ensure the patient is comfortable.",
      "Clean or dispose of the equipment appropriately.",
      "Record the temperature accurately.",
      "Report significant abnormal findings according to clinical protocol."
    ],

    precautions: [
      "Use the appropriate thermometer and measurement site.",
      "Follow infection-prevention precautions.",
      "Consider factors that may affect the accuracy of the reading.",
      "Reassess and report unexpected or significantly abnormal results."
    ],

    quiz: [
      {
        question: "What is one important purpose of measuring a patient's temperature?",
        options: [
          "To monitor changes in body temperature",
          "To determine the patient's height",
          "To measure blood glucose",
          "To determine blood group"
        ],
        answer: "To monitor changes in body temperature"
      }
    ]
  },

  {
    id: "rgn-002",
    title: "Measuring Pulse",
    category: "General Nursing (RGN)",

    overview:
      "Assessment of the patient's pulse to determine rate, rhythm and relevant characteristics.",

    purpose: [
      "Establish the patient's baseline pulse.",
      "Monitor cardiovascular status.",
      "Identify significant changes requiring further assessment."
    ],

    indications: [
      "Routine vital-sign assessment.",
      "Monitoring acutely ill patients.",
      "Monitoring patients before or after selected interventions."
    ],

    equipment: [
      "Watch or timer with a seconds display.",
      "Documentation chart or electronic record."
    ],

    steps: [
      "Perform hand hygiene and identify the patient.",
      "Explain the procedure.",
      "Position the patient comfortably.",
      "Locate an appropriate peripheral pulse site.",
      "Palpate the pulse using the appropriate fingers.",
      "Assess the rate and rhythm for an appropriate period.",
      "Observe other relevant characteristics of the pulse.",
      "Record the findings accurately.",
      "Report significant abnormalities."
    ],

    precautions: [
      "Do not use the thumb to palpate a peripheral pulse.",
      "Use an appropriate counting period when the rhythm is irregular.",
      "Consider the patient's clinical condition when interpreting the finding."
    ],

    quiz: [
      {
        question: "Which two characteristics are commonly assessed when measuring a pulse?",
        options: [
          "Rate and rhythm",
          "Height and weight",
          "Temperature and glucose",
          "Vision and hearing"
        ],
        answer: "Rate and rhythm"
      }
    ]
  },

  {
    id: "rgn-003",
    title: "Measuring Respiratory Rate",
    category: "General Nursing (RGN)",

    overview:
      "Observation and measurement of a patient's breathing as part of vital-sign assessment.",

    purpose: [
      "Establish baseline respiratory status.",
      "Detect changes in breathing.",
      "Support early recognition of clinical deterioration."
    ],

    indications: [
      "Routine vital-sign assessment.",
      "Patients with respiratory complaints.",
      "Monitoring patients at risk of deterioration."
    ],

    equipment: [
      "Watch or timer.",
      "Documentation chart or electronic record."
    ],

    steps: [
      "Perform hand hygiene and identify the patient.",
      "Position the patient comfortably.",
      "Observe the patient's breathing without unnecessarily altering the breathing pattern.",
      "Count the respirations for an appropriate period.",
      "Assess the rhythm and relevant characteristics of breathing.",
      "Record the respiratory rate and observations.",
      "Report significant abnormalities or signs of respiratory distress."
    ],

    precautions: [
      "Observe for signs of respiratory distress.",
      "Assess breathing pattern as well as rate.",
      "Escalate significant deterioration promptly."
    ],

    quiz: [
      {
        question: "Besides respiratory rate, what should the nurse observe?",
        options: [
          "Breathing pattern and other relevant characteristics",
          "Patient's shoe size",
          "Blood group",
          "Hair colour"
        ],
        answer: "Breathing pattern and other relevant characteristics"
      }
    ]
  },

  {
    id: "rgn-004",
    title: "Measuring Blood Pressure",
    category: "General Nursing (RGN)",

    overview:
      "Measurement of arterial blood pressure using an appropriate blood-pressure device and correctly sized cuff.",

    purpose: [
      "Establish baseline blood pressure.",
      "Monitor cardiovascular status.",
      "Identify abnormal readings requiring further assessment."
    ],

    indications: [
      "Routine vital-sign assessment.",
      "Monitoring patients with cardiovascular conditions.",
      "Assessment of patients whose condition requires blood-pressure monitoring."
    ],

    equipment: [
      "Validated blood-pressure device.",
      "Correctly sized cuff.",
      "Stethoscope when manual measurement is used.",
      "Documentation chart or electronic record."
    ],

    steps: [
      "Perform hand hygiene and identify the patient.",
      "Explain the procedure.",
      "Allow the patient to rest appropriately before measurement.",
      "Position the patient correctly.",
      "Select an appropriately sized cuff.",
      "Apply the cuff correctly.",
      "Measure the blood pressure using the appropriate technique.",
      "Remove the cuff and ensure patient comfort.",
      "Record the reading accurately.",
      "Report significant or unexpected abnormalities."
    ],

    precautions: [
      "Use the correct cuff size.",
      "Use an appropriate limb and measurement site.",
      "Avoid unnecessary talking or movement during measurement.",
      "Repeat unexpected readings according to clinical protocol."
    ],

    quiz: [
      {
        question: "Why is selecting the correct blood-pressure cuff size important?",
        options: [
          "It helps obtain an accurate measurement",
          "It determines the patient's pulse",
          "It measures temperature",
          "It prevents hypertension"
        ],
        answer: "It helps obtain an accurate measurement"
      }
    ]
  },

  {
    id: "rgn-005",
    title: "Bed Bath",
    category: "General Nursing (RGN)",

    overview:
      "Provision of bathing and personal hygiene care to a patient who requires assistance with bathing.",

    purpose: [
      "Maintain personal hygiene.",
      "Promote comfort and dignity.",
      "Observe the patient's skin condition.",
      "Promote physical and psychological wellbeing."
    ],

    indications: [
      "Patients unable to bathe independently.",
      "Patients requiring assistance with personal hygiene.",
      "Patients whose condition limits independent bathing."
    ],

    equipment: [
      "Clean water and bathing supplies.",
      "Washcloths or appropriate cleansing materials.",
      "Towels.",
      "Clean gown or clothing.",
      "Gloves and protective equipment as indicated.",
      "Waste receptacle."
    ],

    steps: [
      "Perform hand hygiene and identify the patient.",
      "Explain the procedure and obtain cooperation where possible.",
      "Provide privacy and maintain dignity.",
      "Prepare the environment and equipment.",
      "Assess the patient's ability to participate.",
      "Maintain appropriate warmth throughout the procedure.",
      "Clean the patient systematically while keeping unnecessary areas covered.",
      "Observe the skin, pressure areas and general condition.",
      "Dry the patient thoroughly.",
      "Assist the patient into clean clothing.",
      "Leave the patient comfortable and the environment tidy.",
      "Document relevant findings."
    ],

    precautions: [
      "Maintain privacy and dignity throughout.",
      "Use safe moving and handling techniques.",
      "Avoid excessively hot water.",
      "Observe vulnerable skin and pressure areas.",
      "Stop and reassess if the patient's condition deteriorates."
    ],

    quiz: [
      {
        question: "What should be maintained throughout a bed bath?",
        options: [
          "Patient dignity and privacy",
          "Complete exposure of the patient",
          "Very cold room temperature",
          "Continuous standing"
        ],
        answer: "Patient dignity and privacy"
      }
    ]
  },

  {
    id: "rgn-006",
    title: "Mouth Care",
    category: "General Nursing (RGN)",

    overview:
      "Provision of oral hygiene care to maintain oral cleanliness, comfort and health.",

    purpose: [
      "Maintain oral hygiene.",
      "Promote patient comfort.",
      "Reduce accumulation of oral debris.",
      "Promote healthy oral tissues."
    ],

    indications: [
      "Routine personal hygiene.",
      "Patients requiring assistance with oral hygiene.",
      "Patients unable to maintain adequate oral hygiene independently."
    ],

    equipment: [
      "Toothbrush or appropriate oral-care device.",
      "Toothpaste where appropriate.",
      "Water.",
      "Kidney dish or suitable receptacle.",
      "Towel or protective covering.",
      "Gloves when indicated."
    ],

    steps: [
      "Perform hand hygiene and identify the patient.",
      "Explain the procedure and provide privacy.",
      "Position the patient safely.",
      "Prepare the required oral-care equipment.",
      "Assist or provide oral hygiene according to the patient's condition.",
      "Observe the mouth for abnormalities.",
      "Assist the patient to rinse or clear the mouth when appropriate.",
      "Clean and dispose of equipment appropriately.",
      "Ensure patient comfort.",
      "Document significant findings."
    ],

    precautions: [
      "Use additional precautions for patients with reduced consciousness or swallowing difficulties.",
      "Take measures to reduce aspiration risk.",
      "Report abnormal oral findings."
    ],

    quiz: [
      {
        question: "What should the nurse observe during mouth care?",
        options: [
          "Abnormalities of the mouth",
          "Patient's shoe size",
          "Patient's blood group",
          "Room number only"
        ],
        answer: "Abnormalities of the mouth"
      }
    ]
  },

  {
    id: "rgn-007",
    title: "Bed Making",
    category: "General Nursing (RGN)",

    overview:
      "Preparation and maintenance of a clean, safe and comfortable patient bed.",

    purpose: [
      "Provide comfort to the patient.",
      "Maintain cleanliness and hygiene.",
      "Promote patient safety.",
      "Reduce risks associated with an unclean or poorly arranged bed."
    ],

    indications: [
      "Routine ward care.",
      "Preparation of a bed for a new patient.",
      "Changing soiled or wet linen.",
      "Improving patient comfort."
    ],

    equipment: [
      "Clean bed linen.",
      "Pillowcases.",
      "Protective sheet where required.",
      "Gloves when indicated.",
      "Laundry or waste receptacle."
    ],

    steps: [
      "Perform hand hygiene and identify the patient.",
      "Explain the procedure when the patient is present.",
      "Prepare the required linen and equipment.",
      "Apply appropriate infection-prevention measures.",
      "Remove used linen carefully and place it in the appropriate receptacle.",
      "Clean or inspect the bed as required.",
      "Apply clean linen securely and smoothly.",
      "Ensure the bed is safe and comfortable.",
      "Return the patient to a comfortable position.",
      "Dispose of used materials appropriately and perform hand hygiene."
    ],

    precautions: [
      "Avoid shaking used linen.",
      "Use safe moving and handling techniques.",
      "Keep the bed at a safe working height during care and return it to the appropriate position afterward.",
      "Ensure linen is dry and free of unnecessary folds."
    ],

    quiz: [
      {
        question: "What is one important purpose of bed making?",
        options: [
          "To promote patient comfort and safety",
          "To increase the patient's temperature",
          "To measure blood pressure",
          "To administer medication"
        ],
        answer: "To promote patient comfort and safety"
      }
    ]
  },

  {
    id: "rgn-008",
    title: "Pressure Area Care",
    category: "General Nursing (RGN)",

    overview:
      "Nursing care aimed at protecting vulnerable areas of skin and reducing the risk of pressure-related injury.",

    purpose: [
      "Prevent pressure-related skin injury.",
      "Maintain skin integrity.",
      "Promote comfort.",
      "Identify early changes in vulnerable areas."
    ],

    indications: [
      "Patients with limited mobility.",
      "Patients who remain in bed for prolonged periods.",
      "Patients with increased risk of pressure injury."
    ],

    equipment: [
      "Appropriate pressure-relieving equipment.",
      "Clean linen.",
      "Skin-care products as indicated.",
      "Pillows or positioning aids.",
      "Gloves when indicated."
    ],

    steps: [
      "Assess the patient's mobility and pressure-injury risk.",
      "Explain the care to the patient.",
      "Inspect vulnerable pressure areas.",
      "Reposition the patient according to the individual care plan.",
      "Use appropriate positioning aids or pressure-relieving devices.",
      "Keep the skin clean and dry.",
      "Avoid unnecessary friction and shearing.",
      "Encourage mobility or repositioning where appropriate.",
      "Document skin findings and care provided.",
      "Report signs of pressure injury or deterioration."
    ],

    precautions: [
      "Do not massage reddened or damaged skin.",
      "Use appropriate moving and handling techniques.",
      "Maintain skin cleanliness and dryness.",
      "Follow the patient's individual pressure-injury prevention plan."
    ],

    quiz: [
      {
        question: "What is a major goal of pressure area care?",
        options: [
          "Prevent pressure-related skin injury",
          "Increase blood pressure",
          "Measure temperature",
          "Administer medication"
        ],
        answer: "Prevent pressure-related skin injury"
      }
    ]
  },

  {
    id: "rgn-009",
    title: "Urinary Catheterisation",
    category: "General Nursing (RGN)",

    overview:
      "Insertion or withdrawal of a urinary catheter when clinically indicated and within the nurse's scope of practice, using appropriate infection-prevention measures and local protocol.",

    purpose: [
      "Assist with urinary drainage when clinically indicated.",
      "Obtain urine when an appropriate catheter-based specimen is required.",
      "Monitor urine output when clinically indicated."
    ],

    indications: [
      "Clinical conditions requiring urinary drainage.",
      "Selected situations requiring accurate urine-output monitoring.",
      "Other approved indications according to clinical protocol."
    ],

    equipment: [
      "Appropriate urinary catheter.",
      "Sterile equipment according to the required technique.",
      "Appropriate lubricant.",
      "Urine drainage system where required.",
      "Personal protective equipment.",
      "Cleaning materials.",
      "Specimen container where required."
    ],

    steps: [
      "Confirm the indication and identify the patient.",
      "Explain the procedure and obtain appropriate consent.",
      "Provide privacy and position the patient appropriately.",
      "Perform hand hygiene and prepare the equipment.",
      "Use the required aseptic technique according to facility protocol.",
      "Prepare the urethral area using the appropriate cleansing technique.",
      "Insert or withdraw the catheter using the approved technique for the specific catheter and clinical situation.",
      "Secure the catheter and drainage system appropriately when a catheter is left in place.",
      "Ensure urine drainage is unobstructed.",
      "Dispose of equipment safely.",
      "Ensure patient comfort and document the procedure and relevant findings."
    ],

    precautions: [
      "Catheterisation should only be performed when clinically indicated and within the practitioner's competence and scope.",
      "Maintain appropriate aseptic technique.",
      "Use the correct catheter type and size.",
      "Avoid unnecessary catheterisation.",
      "Monitor for pain, bleeding, infection or other complications."
    ],

    quiz: [
      {
        question: "What is particularly important during urinary catheterisation?",
        options: [
          "Appropriate aseptic technique",
          "Using any available catheter",
          "Ignoring patient discomfort",
          "Skipping patient identification"
        ],
        answer: "Appropriate aseptic technique"
      }
    ]
  },

  {
    id: "rgn-010",
    title: "Recording Nursing Observations",
    category: "General Nursing (RGN)",

    overview:
      "Accurate documentation of patient observations and nursing care to support continuity, communication and evaluation of patient care.",

    purpose: [
      "Provide an accurate record of patient condition.",
      "Support continuity of care.",
      "Communicate important findings to the healthcare team.",
      "Provide evidence of nursing care provided."
    ],

    indications: [
      "Routine patient assessment.",
      "After nursing interventions.",
      "When there is a change in patient condition.",
      "During admission, transfer or discharge processes as applicable."
    ],

    equipment: [
      "Approved nursing documentation chart or electronic health record.",
      "Relevant observation charts.",
      "Approved documentation tools."
    ],

    steps: [
      "Identify the patient correctly.",
      "Review the observations or care provided.",
      "Record findings promptly.",
      "Use clear, accurate and objective language.",
      "Record relevant vital signs and other required observations.",
      "Document nursing interventions and the patient's response where applicable.",
      "Record and communicate significant changes in condition.",
      "Complete the documentation according to facility policy.",
      "Maintain confidentiality and secure patient records appropriately."
    ],

    precautions: [
      "Document accurately and promptly.",
      "Do not falsify, erase or conceal clinical information.",
      "Use approved abbreviations where applicable.",
      "Maintain patient confidentiality.",
      "Report significant clinical changes through the appropriate communication pathway."
    ],

    quiz: [
      {
        question: "Why is accurate nursing documentation important?",
        options: [
          "It supports continuity and communication of patient care",
          "It replaces patient assessment",
          "It is only required for discharge",
          "It eliminates the need for verbal communication"
        ],
        answer: "It supports continuity and communication of patient care"
      }
    ]
  }
];
