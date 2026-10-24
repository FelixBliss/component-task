import type { Procedure } from "../../procedureTypes";

function stepQuestion(title: string, step: string, index: number): string {
  const s = step.toLowerCase();
  if (/establish rapport/.test(s)) return "How should the nurse begin the interaction before providing " + title.toLowerCase() + "?";
  if (/identify patient by name/.test(s)) return "What should the nurse do to confirm the identity of the person receiving care?";
  if (/review doctor\/physician/.test(s)) return "What must be reviewed before urinary catheterization begins?";
  if (/explain procedure|inform and explain/.test(s)) return "What should the nurse explain to the patient before starting the procedure?";
  if (/provide privacy/.test(s) || /provide privacy/.test(s)) return "Which action protects the patient's privacy during care?";
  if (/perform hand hygiene/.test(s)) return "Which infection-prevention action is required at this point in the procedure?";
  if (/assess patient (ability|capabilities)/.test(s)) return "What should be assessed before deciding how much assistance the patient needs?";
  if (/prepare and take trolley|prepare and send trolley/.test(s)) return "How should the nurse prepare and bring the required equipment to the bedside?";
  if (/arrange requirement|collect the necessary articles/.test(s)) return "How should the nurse prepare the required articles before care begins?";
  if (/offer bedpan or urinal/.test(s)) return "What should be offered before bathing if the patient needs to eliminate?";
  if (/loosen and remove top bed clothes/.test(s)) return "How should the top bedclothes be managed before bathing?";
  if (/remove patient.?s clothes and cover/.test(s)) return "How should the nurse prepare the patient while maintaining body coverage?";
  if (/protect bed/.test(s)) return "Which measure protects the bed from moisture during care?";
  if (/maintain individuality/.test(s) && /temperature of water/.test(s)) return "How should the nurse include the patient’s preference about water temperature?";
  if (/maintain individuality/.test(s)) return "How can the nurse preserve the patient's choices during personal care?";
  if (/wash, rinse and dry patient.?s face/.test(s) && /canthus/.test(s)) return "What technique should be used when washing the face around the eyes?";
  if (/wash, rinse and dry the rest of the face/.test(s)) return "Which areas should be washed after the face and eyes?";
  if (/arm farther away/.test(s)) return "Which arm should be washed first during the bed bath?";
  if (/arm near to the nurse/.test(s)) return "After washing the farther arm, which arm is washed next?";
  if (/chest and abdomen/.test(s)) return "Which areas require attention to skin folds during the bath?";
  if (/wash, rinse and dry the legs/.test(s)) return "How should the legs be washed during the bed bath?";
  if (/wash, rinse and dry the back/.test(s)) return "How should the nurse access and clean the patient's back?";
  if (/pressure areas/.test(s)) return "What skin-care action is required while bathing the patient?";
  if (/change bottom linen/.test(s)) return "What should the nurse do when changing the bottom linen during the bath?";
  if (/genitalia/.test(s)) return "Which personal-hygiene task is required after washing the body?";
  if (/groom and dress/.test(s)) return "How should the nurse finish the patient's personal hygiene care?";
  if (/make bed and reposition/.test(s)) return "What should be done to restore comfort after the procedure?";
  if (/dispose off used items|decontaminate/.test(s)) return "How should used supplies and equipment be managed after care?";
  if (/document|record procedure/.test(s)) return "What should be documented or reported when the procedure is complete?";
  if (/prepare bathroom/.test(s)) return "What environment should be prepared before assisting the patient to bathe?";
  if (/send patient to the bathroom/.test(s)) return "How should the patient be assisted to reach the bathroom safely?";
  if (/assist patient to undress/.test(s)) return "What assistance may be required before the patient bathes?";
  if (/chair or stool/.test(s)) return "What should be provided in the bathroom when the patient needs support?";
  if (/allow the patient to do as much/.test(s)) return "How should the nurse promote the patient's independence during bathing?";
  if (/complete the areas/.test(s)) return "What should the nurse do for body areas the patient cannot wash independently?";
  if (/collect toiletries and tidy/.test(s)) return "What should be done to restore order in the bathroom after bathing?";
  if (/arrange requirement within patient.?s reach/.test(s)) return "How should oral-care equipment be arranged before starting?";
  if (/assist patient into a desirable position/.test(s)) return "How should the patient be positioned before oral care?";
  if (/jaconet cape|adult bib/.test(s)) return "What should be placed under the patient's chin to protect clothing during mouth care?";
  if (/give brush with paste/.test(s)) return "What should be given to the patient to begin cleaning the teeth or mouth?";
  if (/encourage patient to brush/.test(s)) return "How should the nurse support the patient's participation in brushing the teeth?";
  if (/cleans the mouth thoroughly/.test(s)) return "Which oral surfaces should be cleaned thoroughly and gently?";
  if (/rinse the mouth/.test(s)) return "How should rinse water be managed during mouth care?";
  if (/mouth wash/.test(s)) return "How should mouthwash be used when it is part of the care plan?";
  if (/apply lip balm/.test(s)) return "Which actions help maintain oral and lip comfort after cleaning?";
  if (/place bedpan under patient and wash perineum/.test(s)) return "How should the perineum be cleaned before catheter insertion?";
  if (/supine position/.test(s)) return "How should the patient be positioned for catheterization according to the NMC procedure?";
  if (/wash and dry perineal area/.test(s)) return "What hygiene step is required before preparing the sterile field?";
  if (/retract the prepuce/.test(s)) return "When necessary, what should be done to expose the male urethral meatus?";
  if (/sterile field/.test(s)) return "How should the sterile catheter supplies be prepared?";
  if (/drape/.test(s) && /fenestrated/.test(s)) return "How should the sterile drape be positioned to expose the urinary meatus?";
  if (/wear new sterile gloves/.test(s)) return "What should the nurse wear before continuing the aseptic part of catheterization?";
  if (/part the labia/.test(s)) return "How should the labia be held during female catheterization?";
  if (/labia majora/.test(s)) return "What is the correct method for cleansing the labia majora with antiseptic?";
  if (/labia minora/.test(s)) return "Which area is cleansed after the labia majora during female catheterization?";
  if (/clean the area with antiseptic/.test(s)) return "How should the male urethral meatus be cleaned with antiseptic?";
  if (/angle of 90/.test(s)) return "How should the penis be positioned to help straighten the male urethra?";
  if (/lubricate catheter/.test(s)) return "What preparation is required immediately before catheter insertion?";
  if (/insert catheter into the urethral orifice/.test(s)) return "In female catheterization, how should the catheter be advanced into the urethra?";
  if (/insert the catheter gently/.test(s)) return "During male catheterization, what guides advancement of the catheter?";
  if (/inflate the balloon/.test(s)) return "When should the catheter balloon be inflated, and what should be used?";
  if (/collect a urine specimen/.test(s)) return "How should a urine specimen be collected without contaminating the container?";
  if (/connect catheter to urine bag/.test(s)) return "What should be connected to the catheter after insertion?";
  if (/hang urine bag/.test(s)) return "How should the urine bag be positioned and secured?";
  if (/observe colour and note amount/.test(s)) return "What urine characteristics should be observed and recorded?";
  if (/resistance will often be met/.test(s)) return "What should the nurse do if resistance is encountered at the external sphincter?";
  if (/remove drapes/.test(s)) return "Which items should be removed after catheterization is completed?";
  if (/assist patient into a desirable position/.test(s)) return "What should be done to restore the patient's comfort after the procedure?";
  return "During " + title.toLowerCase() + ", which action is required to " + step.replace(/[.]+$/,"").replace(/^./,c=>c.toLowerCase()) + "?";
}

function stepExplanation(step: string, title: string): string {
  const s = step.toLowerCase();
  if (/hand hygiene|gloves|sterile|antiseptic|decontaminate/.test(s)) return "This step supports infection prevention during " + title.toLowerCase() + ". Maintain aseptic technique and follow current local policy.";
  if (/privacy|rapport|explain|identify/.test(s)) return "This step supports patient dignity, communication and cooperation during " + title.toLowerCase() + ".";
  if (/assess/.test(s)) return "Assessment helps the nurse tailor assistance to the patient's condition and ability to participate.";
  if (/document|record|report|observe colour|note amount/.test(s)) return "Accurate recording and reporting support continuity of care and prompt follow-up of abnormal findings.";
  if (/position|bed|chair|stool|supine/.test(s)) return "Appropriate positioning supports patient safety, access to care and comfort.";
  if (/urine|catheter|urethra|labia|penis|perineum|balloon/.test(s)) return "This is a procedure-specific step. Use aseptic technique, observe the patient's response, and follow the catheter and institutional guidance.";
  if (/wash|rinse|dry|mouth|teeth|face|skin|genitalia/.test(s)) return "This step provides the specified hygiene care while preserving comfort, skin or mucosal integrity, and dignity.";
  return "This action is specified in the NMC Ghana RGN procedure for " + title.toLowerCase() + "; complete it safely and assess the patient's response.";
}

function createStepQuiz(title: string, steps: string[]): NonNullable<Procedure["quiz"]> {
  return steps.map((step, index) => {
    const distractors: string[] = [];
    for (const offset of [3, 7, 11, 5, 13, 2]) {
      const candidate = steps[(index + offset) % steps.length];
      if (candidate !== step && !distractors.includes(candidate)) distractors.push(candidate);
      if (distractors.length === 3) break;
    }
    const options = [...distractors];
    options.splice(index % 4, 0, step);
    return {
      question: stepQuestion(title, step, index),
      options,
      answer: step,
      explanation: stepExplanation(step, title)
    };
  });
}

function withStepQuiz(procedure: Omit<Procedure, "quiz">): Procedure {
  return { ...procedure, quiz: createStepQuiz(procedure.title, procedure.steps) };
}

export const rgnBatch01: Procedure[] = [
  {
    id: "rgn-001",
    title: "IMMEDIATE POST OPERATIVE CARE OF A PATIENT",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "This is the nursing management of a patient after a surgical procedure. The nurse/midwife has a role to ensure that the patient recovers fully from the effect of anaesthesia.",
    purpose: [],
    indications: [
      "Patient returning from an operation.",
      "Patient recovering from anaesthesia.",
      "Patient requiring immediate post-operative monitoring."
    ],
    equipment: [
  "Operation bed with side rails",
  "Post anaethestic tray e.g. vomit bowl, wound dressing set, padded spatula or tongue holding forceps, receiver for soiled swab, adhesive tape, sterile gauze etc",
  "Oxygen apparatus",
  "Suction machine",
  "Vital signs tray",
  "Medication tray",
  "Infusion stand",
  "Mouth care tray",
  "Observation chart"
],
    steps: [
  "Assess patient level of consciousness by the use of stimulus e.g. pointed object or by calling patient by name",
  "Remove hot water bottles and receive patient gently into bed",
  "Place patient flat on bed with the head turned to one side or in the appropriate position according to the operation performed",
  "Reassure patient if conscious",
  "Provide side rails for safety if necessary",
  "Read through the patient’s case notes for post-operative instructions",
  "Observe operational site for bleeding and report for possible reinforcement",
  "Monitor vital signs for 15minutes for first one hour, 30 minutes for the next hour, 1 hour for the next 4 hours and 4 hourly intervals as condition stabilizes",
  "Ensure cannula is in situ, check the flow rate of the intravenous fluid and regulate as ordered",
  "Check and ensure that all drainage tubes e.g. naso-gastric tube and catheter are in situ and are draining well",
  "Record intake and output accurately",
  "Assess for pain, administer prescribed analgesics and record",
  "Check and administer all prescribed medication per the appropriate route",
  "Maintain personal and oral hygiene",
  "Observe any abnormality in the patient’s condition",
  "Put patient in a desirable position or as ordered by surgeon when he/she is fully conscious",
  "Follow nutritional orders as prescribed by the surgeon",
  "Educate patient and relatives on post-operative restrictions if any",
  "Document findings and nursing interventions in appropriate notes (manual or electronic)"
],
    precautions: [
      "Maintain appropriate infection-prevention measures.",
      "Do not leave an unstable patient unattended.",
      "Report deterioration promptly.",
      "Observe closely for bleeding, respiratory compromise and altered consciousness.",
      "Follow institutional post-operative protocols."
    ],
    videoUrl: "https://www.youtube.com/watch?v=2WT8z8KsHJo",
    quiz: [
  {
    "question": "During immediate post operative care of a patient, which action specifically evaluates the patient's responsiveness?",
    "options": [
      "Assess patient level of consciousness by the use of stimulus e.g. pointed object or by calling patient by name",
      "Provide side rails for safety if necessary",
      "Put patient in a desirable position or as ordered by surgeon when he/she is fully conscious",
      "Ensure cannula is in situ, check the flow rate of the intravenous fluid and regulate as ordered"
    ],
    "answer": "Assess patient level of consciousness by the use of stimulus e.g. pointed object or by calling patient by name",
    "explanation": "Assess responsiveness using an appropriate verbal stimulus and, when necessary, a suitable response assessment. Escalate reduced or deteriorating consciousness promptly."
  },
  {
    "question": "To complete immediate post operative care of a patient safely, which action should the nurse take at this point?",
    "options": [
      "Put patient in a desirable position or as ordered by surgeon when he/she is fully conscious",
      "Remove hot water bottles and receive patient gently into bed",
      "Assess for pain, administer prescribed analgesics and record",
      "Provide side rails for safety if necessary"
    ],
    "answer": "Remove hot water bottles and receive patient gently into bed",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for immediate post operative care of a patient, what should guide the nurse's choice of position?",
    "options": [
      "Assess for pain, administer prescribed analgesics and record",
      "Provide side rails for safety if necessary",
      "Place patient flat on bed with the head turned to one side or in the appropriate position according to the operation performed",
      "Document findings and nursing interventions in appropriate notes (manual or electronic)"
    ],
    "answer": "Place patient flat on bed with the head turned to one side or in the appropriate position according to the operation performed",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Which nursing action is required at this stage of immediate post operative care of a patient?",
    "options": [
      "Monitor vital signs for 15minutes for first one hour, 30 minutes for the next hour, 1 hour for the next 4 hours and 4 hourly intervals as condition stabilizes",
      "Document findings and nursing interventions in appropriate notes (manual or electronic)",
      "Assess for pain, administer prescribed analgesics and record",
      "Reassure patient if conscious"
    ],
    "answer": "Reassure patient if conscious",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out immediate post operative care of a patient. Which action best matches this part of the procedure?",
    "options": [
      "Provide side rails for safety if necessary",
      "Observe any abnormality in the patient’s condition",
      "Monitor vital signs for 15minutes for first one hour, 30 minutes for the next hour, 1 hour for the next 4 hours and 4 hourly intervals as condition stabilizes",
      "Document findings and nursing interventions in appropriate notes (manual or electronic)"
    ],
    "answer": "Provide side rails for safety if necessary",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete immediate post operative care of a patient safely, which action should the nurse take at this point?",
    "options": [
      "Monitor vital signs for 15minutes for first one hour, 30 minutes for the next hour, 1 hour for the next 4 hours and 4 hourly intervals as condition stabilizes",
      "Read through the patient’s case notes for post-operative instructions",
      "Place patient flat on bed with the head turned to one side or in the appropriate position according to the operation performed",
      "Observe any abnormality in the patient’s condition"
    ],
    "answer": "Read through the patient’s case notes for post-operative instructions",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which assessment during immediate post operative care of a patient can reveal a potentially urgent complication?",
    "options": [
      "Place patient flat on bed with the head turned to one side or in the appropriate position according to the operation performed",
      "Observe any abnormality in the patient’s condition",
      "Observe operational site for bleeding and report for possible reinforcement",
      "Record intake and output accurately"
    ],
    "answer": "Observe operational site for bleeding and report for possible reinforcement",
    "explanation": "Inspect for bleeding and assess the patient's overall condition. Report fresh, increasing or otherwise concerning bleeding immediately and follow the relevant escalation protocol."
  },
  {
    "question": "While providing immediate post operative care of a patient, why must the nurse complete the prescribed observations at the specified intervals?",
    "options": [
      "Educate patient and relatives on post-operative restrictions if any",
      "Record intake and output accurately",
      "Place patient flat on bed with the head turned to one side or in the appropriate position according to the operation performed",
      "Monitor vital signs for 15minutes for first one hour, 30 minutes for the next hour, 1 hour for the next 4 hours and 4 hourly intervals as condition stabilizes"
    ],
    "answer": "Monitor vital signs for 15minutes for first one hour, 30 minutes for the next hour, 1 hour for the next 4 hours and 4 hourly intervals as condition stabilizes",
    "explanation": "Trended observations help detect deterioration early. Record the measurements, compare them with previous findings and escalate abnormal values or clinical concern according to local policy."
  },
  {
    "question": "The nurse is carrying out immediate post operative care of a patient. Which action best matches this part of the procedure?",
    "options": [
      "Ensure cannula is in situ, check the flow rate of the intravenous fluid and regulate as ordered",
      "Read through the patient’s case notes for post-operative instructions",
      "Educate patient and relatives on post-operative restrictions if any",
      "Record intake and output accurately"
    ],
    "answer": "Ensure cannula is in situ, check the flow rate of the intravenous fluid and regulate as ordered",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "During immediate post operative care of a patient, what should the nurse verify about any relevant tube or drainage system?",
    "options": [
      "Educate patient and relatives on post-operative restrictions if any",
      "Check and ensure that all drainage tubes e.g. naso-gastric tube and catheter are in situ and are draining well",
      "Maintain personal and oral hygiene",
      "Read through the patient’s case notes for post-operative instructions"
    ],
    "answer": "Check and ensure that all drainage tubes e.g. naso-gastric tube and catheter are in situ and are draining well",
    "explanation": "Check that the system is secure, patent and functioning as intended, without kinks or avoidable contamination. Assess output and report unexpected changes."
  },
  {
    "question": "Which step should be performed now during immediate post operative care of a patient?",
    "options": [
      "Maintain personal and oral hygiene",
      "Read through the patient’s case notes for post-operative instructions",
      "Record intake and output accurately",
      "Remove hot water bottles and receive patient gently into bed"
    ],
    "answer": "Record intake and output accurately",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "A patient reports discomfort during immediate post operative care of a patient. Which care action addresses pain safely?",
    "options": [
      "Ensure cannula is in situ, check the flow rate of the intravenous fluid and regulate as ordered",
      "Remove hot water bottles and receive patient gently into bed",
      "Maintain personal and oral hygiene",
      "Assess for pain, administer prescribed analgesics and record"
    ],
    "answer": "Assess for pain, administer prescribed analgesics and record",
    "explanation": "Assess pain and relevant contraindications, administer only prescribed analgesia within scope, then reassess the response and document both the intervention and effect."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check and administer all prescribed medication per the appropriate route",
      "Follow nutritional orders as prescribed by the surgeon",
      "Ensure cannula is in situ, check the flow rate of the intravenous fluid and regulate as ordered",
      "Remove hot water bottles and receive patient gently into bed"
    ],
    "answer": "Check and administer all prescribed medication per the appropriate route",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete immediate post operative care of a patient safely, which action should the nurse take at this point?",
    "options": [
      "Ensure cannula is in situ, check the flow rate of the intravenous fluid and regulate as ordered",
      "Maintain personal and oral hygiene",
      "Provide side rails for safety if necessary",
      "Follow nutritional orders as prescribed by the surgeon"
    ],
    "answer": "Maintain personal and oral hygiene",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during immediate post operative care of a patient?",
    "options": [
      "Provide side rails for safety if necessary",
      "Follow nutritional orders as prescribed by the surgeon",
      "Observe any abnormality in the patient’s condition",
      "Assess for pain, administer prescribed analgesics and record"
    ],
    "answer": "Observe any abnormality in the patient’s condition",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for immediate post operative care of a patient, what should guide the nurse's choice of position?",
    "options": [
      "Assess patient level of consciousness by the use of stimulus e.g. pointed object or by calling patient by name",
      "Assess for pain, administer prescribed analgesics and record",
      "Provide side rails for safety if necessary",
      "Put patient in a desirable position or as ordered by surgeon when he/she is fully conscious"
    ],
    "answer": "Put patient in a desirable position or as ordered by surgeon when he/she is fully conscious",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Follow nutritional orders as prescribed by the surgeon",
      "Monitor vital signs for 15minutes for first one hour, 30 minutes for the next hour, 1 hour for the next 4 hours and 4 hourly intervals as condition stabilizes",
      "Assess patient level of consciousness by the use of stimulus e.g. pointed object or by calling patient by name",
      "Assess for pain, administer prescribed analgesics and record"
    ],
    "answer": "Follow nutritional orders as prescribed by the surgeon",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete immediate post operative care of a patient safely, which action should the nurse take at this point?",
    "options": [
      "Assess patient level of consciousness by the use of stimulus e.g. pointed object or by calling patient by name",
      "Educate patient and relatives on post-operative restrictions if any",
      "Observe any abnormality in the patient’s condition",
      "Monitor vital signs for 15minutes for first one hour, 30 minutes for the next hour, 1 hour for the next 4 hours and 4 hourly intervals as condition stabilizes"
    ],
    "answer": "Educate patient and relatives on post-operative restrictions if any",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After completing this part of immediate post operative care of a patient, what makes the clinical record useful for continuity of care?",
    "options": [
      "Observe any abnormality in the patient’s condition",
      "Monitor vital signs for 15minutes for first one hour, 30 minutes for the next hour, 1 hour for the next 4 hours and 4 hourly intervals as condition stabilizes",
      "Document findings and nursing interventions in appropriate notes (manual or electronic)",
      "Reassure patient if conscious"
    ],
    "answer": "Document findings and nursing interventions in appropriate notes (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  }
]

  },
  {
    id: "rgn-002",
    title: "CARE OF STOMA OR OSTOMY AND CHANGING OF POUCH",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "It is the removal of the pouch and cleaning of an artificial opening created on the lower abdominal surface of a patient. The opening may be temporary or permanent.",
    purpose: [],
    indications: [
      "Patient with an established stoma.",
      "Pouch is full or leaking.",
      "Pouch requires routine replacement.",
      "Peristomal skin requires assessment."
    ],
    equipment: [
  "A trolley containing the following:",
  "New stoma pouch",
  "Sterile gloves",
  "Disposable gloves",
  "Wipes or tissue",
  "Measuring template",
  "Gallipot with gauze swabs",
  "Mackintosh and dressing towel",
  "Towel",
  "Bowl of tepid water",
  "Barrier cream",
  "Large receiver",
  "Deodorizing tablet or liquid",
  "Plastic bag",
  "Scissors",
  "Soap/mild detergent"
],
    steps: [
  "Establish rapport with patient (Refer to steps)",
  "Explain procedure to patient (Refer to steps)",
  "Provide privacy",
  "Prepare and send trolley to bedside",
  "Position the patient and turn down top sheet to expose stoma",
  "Protect site with mackintosh and dressing towel",
  "Preform hand hygiene and put on disposable gloves",
  "Gently remove soiled pouch and places in large receiver/plastic bag",
  "Remove disposable gloves and perform hand hygiene",
  "Put on sterile gloves",
  "Examine the stoma and note any abnormalities",
  "Clean the stoma with the wipes/tissue",
  "Wash area around the stoma with mild soap/detergent and tepid water",
  "Dry area gently with sterile swabs",
  "Cover the stoma with a swab while you prepare a new pouch",
  "Estimate stoma using the measuring template and cut the desired opening on the pouch",
  "Apply barrier cream",
  "Put few drops of the deodorizing liquid or tablets in the pouch if available",
  "Attach the one side of the edge of the pouch to the skin, rolling it up and over the stoma",
  "Press the edges of the pouch to secure it in position",
  "Remove gloves and perform hand hygiene",
  "Reposition patient",
  "Remove mackintosh and dressing towel",
  "Dispose off, decontaminate, clean and stores used items",
  "Document procedure and report findings to appropriate officer"
],
    precautions: [
      "Avoid unnecessary trauma to the stoma.",
      "Observe for abnormal colour, bleeding or swelling.",
      "Protect peristomal skin from moisture and effluent.",
      "Use the appropriate pouch size.",
      "Report significant abnormalities."
    ],
    videoUrl: "https://www.youtube.com/watch?v=VM-WZqF6xhw",
    quiz: [
  {
    "question": "The nurse is carrying out care of stoma or ostomy and changing of pouch. Which action best matches this part of the procedure?",
    "options": [
      "Establish rapport with patient (Refer to steps)",
      "Position the patient and turn down top sheet to expose stoma",
      "Estimate stoma using the measuring template and cut the desired opening on the pouch",
      "Provide privacy"
    ],
    "answer": "Establish rapport with patient (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out care of stoma or ostomy and changing of pouch, what should the nurse do to support informed cooperation?",
    "options": [
      "Put on sterile gloves",
      "Explain procedure to patient (Refer to steps)",
      "Clean the stoma with the wipes/tissue",
      "Remove mackintosh and dressing towel"
    ],
    "answer": "Explain procedure to patient (Refer to steps)",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "A patient is about to undergo care of stoma or ostomy and changing of pouch. Which action protects their dignity during preparation?",
    "options": [
      "Protect site with mackintosh and dressing towel",
      "Apply barrier cream",
      "Provide privacy",
      "Attach the one side of the edge of the pouch to the skin, rolling it up and over the stoma"
    ],
    "answer": "Provide privacy",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "Which nursing action is required at this stage of care of stoma or ostomy and changing of pouch?",
    "options": [
      "Establish rapport with patient (Refer to steps)",
      "Wash area around the stoma with mild soap/detergent and tepid water",
      "Dispose off, decontaminate, clean and stores used items",
      "Prepare and send trolley to bedside"
    ],
    "answer": "Prepare and send trolley to bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for care of stoma or ostomy and changing of pouch, what should guide the nurse's choice of position?",
    "options": [
      "Position the patient and turn down top sheet to expose stoma",
      "Remove disposable gloves and perform hand hygiene",
      "Press the edges of the pouch to secure it in position",
      "Preform hand hygiene and put on disposable gloves"
    ],
    "answer": "Position the patient and turn down top sheet to expose stoma",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "To complete care of stoma or ostomy and changing of pouch safely, which action should the nurse take at this point?",
    "options": [
      "Dry area gently with sterile swabs",
      "Protect site with mackintosh and dressing towel",
      "Estimate stoma using the measuring template and cut the desired opening on the pouch",
      "Explain procedure to patient (Refer to steps)"
    ],
    "answer": "Protect site with mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with care of stoma or ostomy and changing of pouch, what infection-prevention action is required at this point?",
    "options": [
      "Put on sterile gloves",
      "Remove gloves and perform hand hygiene",
      "Preform hand hygiene and put on disposable gloves",
      "Remove mackintosh and dressing towel"
    ],
    "answer": "Preform hand hygiene and put on disposable gloves",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which aspect of stoma care is most directly supported by this action?",
    "options": [
      "Position the patient and turn down top sheet to expose stoma",
      "Apply barrier cream",
      "Provide privacy",
      "Gently remove soiled pouch and places in large receiver/plastic bag"
    ],
    "answer": "Gently remove soiled pouch and places in large receiver/plastic bag",
    "explanation": "Stoma care requires assessment of stoma appearance, protection of surrounding skin and a correctly sized, securely fitted pouch. Report significant changes and follow the patient's care plan."
  },
  {
    "question": "Before proceeding with care of stoma or ostomy and changing of pouch, what infection-prevention action is required at this point?",
    "options": [
      "Remove disposable gloves and perform hand hygiene",
      "Wash area around the stoma with mild soap/detergent and tepid water",
      "Dispose off, decontaminate, clean and stores used items",
      "Examine the stoma and note any abnormalities"
    ],
    "answer": "Remove disposable gloves and perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete care of stoma or ostomy and changing of pouch safely, which action should the nurse take at this point?",
    "options": [
      "Put few drops of the deodorizing liquid or tablets in the pouch if available",
      "Put on sterile gloves",
      "Press the edges of the pouch to secure it in position",
      "Protect site with mackintosh and dressing towel"
    ],
    "answer": "Put on sterile gloves",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which aspect of stoma care is most directly supported by this action?",
    "options": [
      "Dry area gently with sterile swabs",
      "Document procedure and report findings to appropriate officer",
      "Examine the stoma and note any abnormalities",
      "Explain procedure to patient (Refer to steps)"
    ],
    "answer": "Examine the stoma and note any abnormalities",
    "explanation": "Stoma care requires assessment of stoma appearance, protection of surrounding skin and a correctly sized, securely fitted pouch. Report significant changes and follow the patient's care plan."
  },
  {
    "question": "Which aspect of stoma care is most directly supported by this action?",
    "options": [
      "Remove disposable gloves and perform hand hygiene",
      "Remove gloves and perform hand hygiene",
      "Preform hand hygiene and put on disposable gloves",
      "Clean the stoma with the wipes/tissue"
    ],
    "answer": "Clean the stoma with the wipes/tissue",
    "explanation": "Stoma care requires assessment of stoma appearance, protection of surrounding skin and a correctly sized, securely fitted pouch. Report significant changes and follow the patient's care plan."
  },
  {
    "question": "Which aspect of stoma care is most directly supported by this action?",
    "options": [
      "Wash area around the stoma with mild soap/detergent and tepid water",
      "Apply barrier cream",
      "Provide privacy",
      "Cover the stoma with a swab while you prepare a new pouch"
    ],
    "answer": "Wash area around the stoma with mild soap/detergent and tepid water",
    "explanation": "Stoma care requires assessment of stoma appearance, protection of surrounding skin and a correctly sized, securely fitted pouch. Report significant changes and follow the patient's care plan."
  },
  {
    "question": "When collecting a specimen as part of care of stoma or ostomy and changing of pouch, which principle protects the reliability of the result?",
    "options": [
      "Reposition patient",
      "Dry area gently with sterile swabs",
      "Dispose off, decontaminate, clean and stores used items",
      "Put on sterile gloves"
    ],
    "answer": "Dry area gently with sterile swabs",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "Which aspect of stoma care is most directly supported by this action?",
    "options": [
      "Put few drops of the deodorizing liquid or tablets in the pouch if available",
      "Prepare and send trolley to bedside",
      "Cover the stoma with a swab while you prepare a new pouch",
      "Protect site with mackintosh and dressing towel"
    ],
    "answer": "Cover the stoma with a swab while you prepare a new pouch",
    "explanation": "Stoma care requires assessment of stoma appearance, protection of surrounding skin and a correctly sized, securely fitted pouch. Report significant changes and follow the patient's care plan."
  },
  {
    "question": "Which aspect of stoma care is most directly supported by this action?",
    "options": [
      "Wash area around the stoma with mild soap/detergent and tepid water",
      "Document procedure and report findings to appropriate officer",
      "Examine the stoma and note any abnormalities",
      "Estimate stoma using the measuring template and cut the desired opening on the pouch"
    ],
    "answer": "Estimate stoma using the measuring template and cut the desired opening on the pouch",
    "explanation": "Stoma care requires assessment of stoma appearance, protection of surrounding skin and a correctly sized, securely fitted pouch. Report significant changes and follow the patient's care plan."
  },
  {
    "question": "The nurse is carrying out care of stoma or ostomy and changing of pouch. Which action best matches this part of the procedure?",
    "options": [
      "Apply barrier cream",
      "Remove gloves and perform hand hygiene",
      "Preform hand hygiene and put on disposable gloves",
      "Attach the one side of the edge of the pouch to the skin, rolling it up and over the stoma"
    ],
    "answer": "Apply barrier cream",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which aspect of stoma care is most directly supported by this action?",
    "options": [
      "Establish rapport with patient (Refer to steps)",
      "Put few drops of the deodorizing liquid or tablets in the pouch if available",
      "Provide privacy",
      "Dry area gently with sterile swabs"
    ],
    "answer": "Put few drops of the deodorizing liquid or tablets in the pouch if available",
    "explanation": "Stoma care requires assessment of stoma appearance, protection of surrounding skin and a correctly sized, securely fitted pouch. Report significant changes and follow the patient's care plan."
  },
  {
    "question": "Which aspect of stoma care is most directly supported by this action?",
    "options": [
      "Reposition patient",
      "Gently remove soiled pouch and places in large receiver/plastic bag",
      "Attach the one side of the edge of the pouch to the skin, rolling it up and over the stoma",
      "Put on sterile gloves"
    ],
    "answer": "Attach the one side of the edge of the pouch to the skin, rolling it up and over the stoma",
    "explanation": "Stoma care requires assessment of stoma appearance, protection of surrounding skin and a correctly sized, securely fitted pouch. Report significant changes and follow the patient's care plan."
  },
  {
    "question": "When positioning the patient for care of stoma or ostomy and changing of pouch, what should guide the nurse's choice of position?",
    "options": [
      "Apply barrier cream",
      "Prepare and send trolley to bedside",
      "Cover the stoma with a swab while you prepare a new pouch",
      "Press the edges of the pouch to secure it in position"
    ],
    "answer": "Press the edges of the pouch to secure it in position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Before proceeding with care of stoma or ostomy and changing of pouch, what infection-prevention action is required at this point?",
    "options": [
      "Remove gloves and perform hand hygiene",
      "Document procedure and report findings to appropriate officer",
      "Examine the stoma and note any abnormalities",
      "Remove mackintosh and dressing towel"
    ],
    "answer": "Remove gloves and perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "When positioning the patient for care of stoma or ostomy and changing of pouch, what should guide the nurse's choice of position?",
    "options": [
      "Position the patient and turn down top sheet to expose stoma",
      "Reposition patient",
      "Preform hand hygiene and put on disposable gloves",
      "Put few drops of the deodorizing liquid or tablets in the pouch if available"
    ],
    "answer": "Reposition patient",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Which step should be performed now during care of stoma or ostomy and changing of pouch?",
    "options": [
      "Establish rapport with patient (Refer to steps)",
      "Clean the stoma with the wipes/tissue",
      "Remove mackintosh and dressing towel",
      "Dry area gently with sterile swabs"
    ],
    "answer": "Remove mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After the hands-on part of care of stoma or ostomy and changing of pouch, how should used equipment and waste be managed?",
    "options": [
      "Remove gloves and perform hand hygiene",
      "Gently remove soiled pouch and places in large receiver/plastic bag",
      "Attach the one side of the edge of the pouch to the skin, rolling it up and over the stoma",
      "Dispose off, decontaminate, clean and stores used items"
    ],
    "answer": "Dispose off, decontaminate, clean and stores used items",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "After completing this part of care of stoma or ostomy and changing of pouch, what makes the clinical record useful for continuity of care?",
    "options": [
      "Document procedure and report findings to appropriate officer",
      "Prepare and send trolley to bedside",
      "Cover the stoma with a swab while you prepare a new pouch",
      "Explain procedure to patient (Refer to steps)"
    ],
    "answer": "Document procedure and report findings to appropriate officer",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  }
]
  },
  {
    id: "rgn-003",
    title: "TREATMENT OF PRESSURE AREAS",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "It is the specific care rendered to the skin and bony prominences of a bedridden patient. It is performed to prevent pressure sores or decubitus ulcers. Untreated pressure areas may lead to tissue ischeamia and death.",
    purpose: [],
    indications: [
      "Patients with reduced mobility.",
      "Patients confined to bed or chair.",
      "Patients with impaired sensation.",
      "Patients at increased risk of pressure injury."
    ],
    equipment: [
  "A trolley with the following items:",
  "Top shelf",
  "A bowl",
  "Soap in a dish",
  "Barrier cream",
  "2/3 hand towels",
  "Bottom shelf",
  "Jug of warm water",
  "Bucket for used water",
  "Mackintosh and dressing towel",
  "Bed linen"
],
    steps: [
  "Explain procedure to patient",
  "Assess patient’s skin",
  "Perform hand hygiene",
  "Set trolley and send to patient bedside",
  "Provide privacy",
  "Remove patient’s bedclothes and cover with a sheet",
  "Protect bed with long mackintosh and bath towel/blanket",
  "Pour water into the basin",
  "Roll patient onto the side, left/right lateral or prone, with head turned to one side",
  "Examine and note any abnormality",
  "Clean all pressure areas (back of the head, ears, hand, scapula, sacrum, elbows, hips, buttocks, knees, ankles, heels and toes) with soap and water in a soft towel with gloved hands",
  "Knead or rub in a circular motion all pressure areas with tip of fingers, or pad of one area at a time",
  "Rinse and dry skin with a soft dry towel",
  "Ensure skin is dry without any moisture",
  "Apply moisturizing cream or barrier cream",
  "Groom and dress patient in a clean clothing",
  "Position patient intermittently in any of the following positions at 30° angle: prone, supine, right or left lateral, right or left sim’s",
  "Remove long mackintosh and dressing towel",
  "Dispose off used items, decontaminate trolley and used linen",
  "Perform hand hygiene",
  "Document procedure and report findings",
  "Inform the appropriate officer of any abnormality"
],
    precautions: [
      "Do not massage damaged skin.",
      "Avoid prolonged pressure on vulnerable areas.",
      "Maintain skin hygiene.",
      "Use appropriate repositioning techniques.",
      "Report deterioration promptly."
    ],
    videoUrl: "https://www.youtube.com/watch?v=FSGgPkG-x1U",
    quiz: [
  {
    "question": "Before carrying out treatment of pressure areas, what should the nurse do to support informed cooperation?",
    "options": [
      "Explain procedure to patient",
      "Provide privacy",
      "Groom and dress patient in a clean clothing",
      "Protect bed with long mackintosh and bath towel/blanket"
    ],
    "answer": "Explain procedure to patient",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "To complete treatment of pressure areas safely, which action should the nurse take at this point?",
    "options": [
      "Ensure skin is dry without any moisture",
      "Assess patient’s skin",
      "Knead or rub in a circular motion all pressure areas with tip of fingers, or pad of one area at a time",
      "Perform hand hygiene"
    ],
    "answer": "Assess patient’s skin",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with treatment of pressure areas, what infection-prevention action is required at this point?",
    "options": [
      "Examine and note any abnormality",
      "Inform the appropriate officer of any abnormality",
      "Perform hand hygiene",
      "Dispose off used items, decontaminate trolley and used linen"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which nursing action is required at this stage of treatment of pressure areas?",
    "options": [
      "Remove patient’s bedclothes and cover with a sheet",
      "Position patient intermittently in any of the following positions at 30° angle: prone, supine, right or left lateral, right or left sim’s",
      "Pour water into the basin",
      "Set trolley and send to patient bedside"
    ],
    "answer": "Set trolley and send to patient bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "A patient is about to undergo treatment of pressure areas. Which action protects their dignity during preparation?",
    "options": [
      "Provide privacy",
      "Rinse and dry skin with a soft dry towel",
      "Perform hand hygiene",
      "Apply moisturizing cream or barrier cream"
    ],
    "answer": "Provide privacy",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "To complete treatment of pressure areas safely, which action should the nurse take at this point?",
    "options": [
      "Explain procedure to patient",
      "Remove patient’s bedclothes and cover with a sheet",
      "Document procedure and report findings",
      "Clean all pressure areas (back of the head, ears, hand, scapula, sacrum, elbows, hips, buttocks, knees, ankles, heels and toes) with soap and water in a soft towel with gloved hands"
    ],
    "answer": "Remove patient’s bedclothes and cover with a sheet",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during treatment of pressure areas?",
    "options": [
      "Remove long mackintosh and dressing towel",
      "Roll patient onto the side, left/right lateral or prone, with head turned to one side",
      "Protect bed with long mackintosh and bath towel/blanket",
      "Remove patient’s bedclothes and cover with a sheet"
    ],
    "answer": "Protect bed with long mackintosh and bath towel/blanket",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of treatment of pressure areas?",
    "options": [
      "Ensure skin is dry without any moisture",
      "Set trolley and send to patient bedside",
      "Groom and dress patient in a clean clothing",
      "Pour water into the basin"
    ],
    "answer": "Pour water into the basin",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for treatment of pressure areas, what should guide the nurse's choice of position?",
    "options": [
      "Roll patient onto the side, left/right lateral or prone, with head turned to one side",
      "Inform the appropriate officer of any abnormality",
      "Knead or rub in a circular motion all pressure areas with tip of fingers, or pad of one area at a time",
      "Assess patient’s skin"
    ],
    "answer": "Roll patient onto the side, left/right lateral or prone, with head turned to one side",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "To complete treatment of pressure areas safely, which action should the nurse take at this point?",
    "options": [
      "Roll patient onto the side, left/right lateral or prone, with head turned to one side",
      "Examine and note any abnormality",
      "Protect bed with long mackintosh and bath towel/blanket",
      "Dispose off used items, decontaminate trolley and used linen"
    ],
    "answer": "Examine and note any abnormality",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during treatment of pressure areas?",
    "options": [
      "Provide privacy",
      "Position patient intermittently in any of the following positions at 30° angle: prone, supine, right or left lateral, right or left sim’s",
      "Clean all pressure areas (back of the head, ears, hand, scapula, sacrum, elbows, hips, buttocks, knees, ankles, heels and toes) with soap and water in a soft towel with gloved hands",
      "Apply moisturizing cream or barrier cream"
    ],
    "answer": "Clean all pressure areas (back of the head, ears, hand, scapula, sacrum, elbows, hips, buttocks, knees, ankles, heels and toes) with soap and water in a soft towel with gloved hands",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of treatment of pressure areas?",
    "options": [
      "Explain procedure to patient",
      "Rinse and dry skin with a soft dry towel",
      "Perform hand hygiene",
      "Knead or rub in a circular motion all pressure areas with tip of fingers, or pad of one area at a time"
    ],
    "answer": "Knead or rub in a circular motion all pressure areas with tip of fingers, or pad of one area at a time",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out treatment of pressure areas. Which action best matches this part of the procedure?",
    "options": [
      "Rinse and dry skin with a soft dry towel",
      "Pour water into the basin",
      "Document procedure and report findings",
      "Examine and note any abnormality"
    ],
    "answer": "Rinse and dry skin with a soft dry towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete treatment of pressure areas safely, which action should the nurse take at this point?",
    "options": [
      "Remove long mackintosh and dressing towel",
      "Ensure skin is dry without any moisture",
      "Groom and dress patient in a clean clothing",
      "Remove patient’s bedclothes and cover with a sheet"
    ],
    "answer": "Ensure skin is dry without any moisture",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during treatment of pressure areas?",
    "options": [
      "Rinse and dry skin with a soft dry towel",
      "Set trolley and send to patient bedside",
      "Apply moisturizing cream or barrier cream",
      "Assess patient’s skin"
    ],
    "answer": "Apply moisturizing cream or barrier cream",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of treatment of pressure areas?",
    "options": [
      "Roll patient onto the side, left/right lateral or prone, with head turned to one side",
      "Inform the appropriate officer of any abnormality",
      "Clean all pressure areas (back of the head, ears, hand, scapula, sacrum, elbows, hips, buttocks, knees, ankles, heels and toes) with soap and water in a soft towel with gloved hands",
      "Groom and dress patient in a clean clothing"
    ],
    "answer": "Groom and dress patient in a clean clothing",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for treatment of pressure areas, what should guide the nurse's choice of position?",
    "options": [
      "Position patient intermittently in any of the following positions at 30° angle: prone, supine, right or left lateral, right or left sim’s",
      "Groom and dress patient in a clean clothing",
      "Protect bed with long mackintosh and bath towel/blanket",
      "Dispose off used items, decontaminate trolley and used linen"
    ],
    "answer": "Position patient intermittently in any of the following positions at 30° angle: prone, supine, right or left lateral, right or left sim’s",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "To complete treatment of pressure areas safely, which action should the nurse take at this point?",
    "options": [
      "Provide privacy",
      "Remove long mackintosh and dressing towel",
      "Perform hand hygiene",
      "Ensure skin is dry without any moisture"
    ],
    "answer": "Remove long mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After the hands-on part of treatment of pressure areas, how should used equipment and waste be managed?",
    "options": [
      "Explain procedure to patient",
      "Knead or rub in a circular motion all pressure areas with tip of fingers, or pad of one area at a time",
      "Dispose off used items, decontaminate trolley and used linen",
      "Examine and note any abnormality"
    ],
    "answer": "Dispose off used items, decontaminate trolley and used linen",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with treatment of pressure areas, what infection-prevention action is required at this point?",
    "options": [
      "Remove long mackintosh and dressing towel",
      "Roll patient onto the side, left/right lateral or prone, with head turned to one side",
      "Document procedure and report findings",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "After completing this part of treatment of pressure areas, what makes the clinical record useful for continuity of care?",
    "options": [
      "Document procedure and report findings",
      "Set trolley and send to patient bedside",
      "Apply moisturizing cream or barrier cream",
      "Remove patient’s bedclothes and cover with a sheet"
    ],
    "answer": "Document procedure and report findings",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "To complete treatment of pressure areas safely, which action should the nurse take at this point?",
    "options": [
      "Rinse and dry skin with a soft dry towel",
      "Inform the appropriate officer of any abnormality",
      "Clean all pressure areas (back of the head, ears, hand, scapula, sacrum, elbows, hips, buttocks, knees, ankles, heels and toes) with soap and water in a soft towel with gloved hands",
      "Assess patient’s skin"
    ],
    "answer": "Inform the appropriate officer of any abnormality",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
]
  },
  withStepQuiz({
    id: "rgn-005",
    title: "ASSISTED MOUTH CARE",
    category: "General Nursing (RGN)",
    types: ["N/A"],
    overview: "This is the act of the nurse assisting the patient in the cleaning of the buccal cavity.",
    purpose: [],
    indications: [],
    equipment: [
      "A tray containing the following:",
      "Tooth brush, chewing sponge or stick and tooth paste",
      "A jug of water and a cup",
      "Mouth wash (Optional)",
      "Vomitus bowel",
      "Bowl for dentures if any",
      "Lip balm e.g. glycerine or vaseline",
      "Orange sticks (toothpick)",
      "Jaconet cape/adult bib"
    ],
    steps: [
      "Establish rapport (Refer to steps)",
      "Explain procedure to patient",
      "Assess patient capabilities to participate in the care",
      "Perform hand hygiene",
      "Arrange requirement within patient’s reach",
      "Assist patient into a desirable position",
      "Place jaconet cape/adult bib under the chin of patient (manual or electronic)",
      "Give brush with paste/chewing sponge/stick to patient",
      "Encourage patient to brush the teeth or assist patient to brush the teeth",
      "Ensure patient cleans the mouth thoroughly and gently paying attention to the cheeks, both sides of gums, tongue and palates",
      "Give water to rinse the mouth and void content into the vomitus bowel",
      "Dilute the mouth wash, encourage patient to gargle and void content into the vomitus bowel",
      "Clean patient mouth and apply lip balm",
      "Assist patient in a desirable in bed",
      "Dispose off and clean used items",
      "Perform hand hygiene",
      "Record procedure and report findings (manual or electronic)"
    ],
    precautions: [],
    references: [{ title: "Nursing and Midwifery Council Ghana — Registered General Nurse Procedures", url: "https://nmc.gov.gh/procedures/view/RGN" }]
  }),
  withStepQuiz({
    id: "rgn-006",
    title: "BED BATHING",
    category: "General Nursing (RGN)",
    types: ["N/A"],
    overview: "This is the act of cleaning a patient who is bedridden and solely dependent on the nurse to maintain his/her self-care needs.",
    purpose: [],
    indications: [],
    equipment: [
      "A trolley containing the following:",
      "Top Shelf",
      "Two basins or bowls",
      "Sponge",
      "Soap in a dish",
      "Towel",
      "Pomade",
      "Bath thermometer",
      "Bottom shelf",
      "Two jugs of water (hot and cold)",
      "Bucket or bowel for used water",
      "Receptacle for soiled linen",
      "Long mackintosh",
      "Bath blanket or sheet",
      "Clean bedsheet or linen",
      "Patient’s clothing",
      "Bed pan or urinal"
    ],
    steps: [
      "Establish rapport with patient (Refer to steps)",
      "Explain the procedure to the patient and provide privacy",
      "Perform hand hygiene",
      "Prepare and take trolley to bedside",
      "Offer bedpan or urinal if required",
      "Loosen and remove top bed clothes and arranges on a chair/bed table",
      "Remove patient’s clothes and cover him/her with a bed linen",
      "Protect bed and pillow with long mackintosh and a bath towel/blanket",
      "Maintain individuality of patients by asking him/her if he/she would like soap on the face, temperature of water or if he/she will like to clean the genitalia himself/herself",
      "Wash, rinse and dry patient’s face beginning from the inner to the outer canthus of each eye",
      "Wash, rinse and dry the rest of the face, ears and neck",
      "Wash, rinse and dry patient’s arm farther away from the nurse",
      "Wash, rinse and dry patient’s arm near to the nurse",
      "Wash, rinse and dry the chest and abdomen paying attention to the skin folds",
      "Wash, rinse and dry the legs in the same way as the arms",
      "Turn patient on his/her sides and wash, rinse and dry the back",
      "Examine and treat pressure areas",
      "Turn patient on his/her side, remove long mackintosh and change bottom linen",
      "Clean patient’s genitalia (performs vulva toileting if a female)",
      "Groom and dress patient in clean clothes",
      "Make bed and reposition patient",
      "Dispose off used items and decontaminate trolley and used linen",
      "Perform hand hygiene",
      "Document procedure and report findings (manual or electronic)"
    ],
    precautions: [],
    references: [{ title: "Nursing and Midwifery Council Ghana — Registered General Nurse Procedures", url: "https://nmc.gov.gh/procedures/view/RGN" }]
  }),
  {
    id: "rgn-007",
    title: "Measurement of Vital Signs",
    category: "General Nursing (RGN)",
    overview:
      "Systematic assessment and documentation of temperature, pulse, respiration and blood pressure to monitor a patient's condition.",
    purpose: [
      "Establish baseline observations.",
      "Monitor changes in patient condition.",
      "Identify deterioration early.",
      "Evaluate response to illness and treatment."
    ],
    indications: [
      "Routine nursing assessment.",
      "Admission assessment.",
      "Monitoring illness or treatment.",
      "When a patient's condition changes."
    ],
    equipment: [
      "Thermometer",
      "Watch or timer",
      "Blood pressure equipment",
      "Stethoscope where required",
      "Documentation chart or electronic record"
    ],
    steps: [
      "Explain the procedure to the patient.",
      "Perform hand hygiene.",
      "Assess the patient and select appropriate equipment.",
      "Measure temperature using the appropriate method.",
      "Measure pulse and assess relevant characteristics.",
      "Count respirations appropriately.",
      "Measure blood pressure using appropriate technique and equipment.",
      "Record the measurements accurately.",
      "Compare findings with baseline or expected values.",
      "Report significant abnormalities promptly."
    ],
    precautions: [
      "Use appropriate equipment and technique.",
      "Select an appropriate blood-pressure cuff size.",
      "Allow the patient to rest when required.",
      "Avoid inaccurate measurement conditions.",
      "Document and report abnormal findings."
    ],
    videoUrl: "https://www.youtube.com/watch?v=gUWJ-6nL5-8",
    quiz: [
      {
        question: "What is one purpose of measuring vital signs?",
        options: ["Monitor changes in patient condition", "Determine occupation", "Select meals", "Determine room allocation"],
        answer: "Monitor changes in patient condition"
      },
      {
        question: "Which is a vital sign?",
        options: ["Blood pressure", "Hair colour", "Shoe size", "Occupation"],
        answer: "Blood pressure"
      },
      {
        question: "Why is baseline information useful?",
        options: ["It allows comparison with later findings", "It replaces future observations", "It prevents documentation", "It eliminates assessment"],
        answer: "It allows comparison with later findings"
      },
      {
        question: "What can affect blood-pressure accuracy?",
        options: ["Incorrect cuff size", "Correct positioning", "Appropriate rest", "Correct technique"],
        answer: "Incorrect cuff size"
      },
      {
        question: "What should be done with significant abnormal findings?",
        options: ["Report them promptly", "Ignore them", "Delete them", "Wait indefinitely"],
        answer: "Report them promptly"
      },
      {
        question: "Which observation is assessed by counting breaths?",
        options: ["Respiratory rate", "Blood pressure", "Temperature", "Oxygen prescription"],
        answer: "Respiratory rate"
      },
      {
        question: "What should be used to measure temperature?",
        options: ["An appropriate thermometer", "A blood-pressure cuff", "A stethoscope only", "A weighing scale"],
        answer: "An appropriate thermometer"
      },
      {
        question: "What should happen after measurement?",
        options: ["Record the findings accurately", "Discard all results", "Avoid comparison", "Hide abnormal findings"],
        answer: "Record the findings accurately"
      },
      {
        question: "Why should appropriate technique be used?",
        options: ["To obtain reliable measurements", "To increase errors", "To avoid documentation", "To delay assessment"],
        answer: "To obtain reliable measurements"
      },
      {
        question: "Which observations are commonly included in a full set of vital signs?",
        options: ["Temperature, pulse, respiration and blood pressure", "Height, hair colour and shoe size", "Weight and occupation only", "Diet and sleep pattern only"],
        answer: "Temperature, pulse, respiration and blood pressure"
      }
    ]
  },
  withStepQuiz({
    id: "rgn-008",
    title: "CATHETERIZATION OF A FEMALE PATIENT",
    category: "General Nursing (RGN)",
    types: ["N/A"],
    overview: "Urinary catheterization is the process of inserting a fine latex or silicon catheter into the urinary bladder to aid urine flow or keep the urethra open. This procedure is mostly done for patient/client who have urinary condition that affects their micturition. It is also passed for patients who are to undergo major surgical procedures. It is an invasive procedure which requires strict aseptic technique. There are two main types of catheters namely: indwelling (Two-way and three-way) and external (Condom).",
    purpose: [],
    indications: [],
    equipment: [
      "A trolley containing the following:",
      "Top Shelf: A sterile pack or field containing the following:",
      "Two gallipots",
      "Three sterile drape, one sterile fenestrated drape",
      "Sterile cotton wool swabs",
      "Artery forceps",
      "Kidney dish",
      "Bottom Shelf : Various catheters of different sizes used",
      "14\" and 16\" for female",
      "18\" and 20\" for male",
      "8\" and 10\" for children",
      "Lubricant (e.g. K.Y. or xylocaine jelly)",
      "Diluted antiseptic solution",
      "Receiver for used swabs",
      "Mackintosh and dressing towel",
      "Urine bag",
      "Sterile water",
      "Specimen bottles if necessary",
      "Hypo-allergic tape or plaster",
      "Hand lamp if necessary",
      "Sterile gloves",
      "10-20mls syringe and needle",
      "Spigot if necessary",
      "Jug of warm water and bowel/bucket",
      "Soap and towel",
      "Bedpan",
      "Intake and output chart"
    ],
    steps: [
      "Review doctor/physician’s order for catheterization",
      "Establish rapport with patient (Refer to steps)",
      "Explain procedure to patient (Refer to steps)",
      "Provide privacy",
      "Perform hand hygiene",
      "Prepare and send trolley to the bedside",
      "Protect bed with mackintosh, dressing towel and ensure adequate lighting",
      "Perform hand hygiene and wear gloves",
      "Turn back sheet covering the patient or ask an assistant to do this if available or necessary",
      "Instruct assistant to place patient in the supine position with knees flexed and legs separated",
      "Place bedpan under patient and wash perineum thoroughly with soap and water",
      "Clean patient and remove bedpan",
      "Remove the gloves and perform hand hygiene",
      "Open the packs of sterile dressing and catheter container and place the contents onto the sterile field",
      "Drape the patient with a sterile towel and place the fenestrated drape over the perineum exposing the urinary meatus",
      "Wear new sterile gloves",
      "Use the non-dominant hand to part the labia and establishes a firm but gentle position",
      "Pick a cotton wool ball soaked in antiseptic solution with forceps in the dominant hand and swab one side of the labia majora from top to bottom, uses a new ball for opposite side",
      "Repeat procedure for the labia minora, uses another cotton wool ball to clean over the meatus",
      "Lubricate catheter with K.Y. or xylocaine jelly",
      "Retract the labia to fully expose the urinary meatus with your non-dominant hand",
      "Insert catheter into the urethral orifice and then gently push it in an upward and backward direction for about 5-7.5cm (2-3inches) leaving the open end in the receiver between the patient’s thighs",
      "Inflate the balloon of the catheter with the sterile water according to manufacturer’s direction",
      "Collect a urine specimen if necessary and allows 20 – 30mls to flow into bottle without bottle touching the catheter",
      "Connect catheter to urine bag",
      "Hang urine bag to the bed and secure in position",
      "Observe colour and note amount of urine",
      "Remove drapes, mackintosh and dressing towel",
      "Remove gloves and perform hand hygiene",
      "Assist patient into a desirable position",
      "Dispose off used items, decontaminate instruments and trolley",
      "Perform hand hygiene",
      "Document the procedure, urine output and any abnormalities in the nurses’ note, intake and output chart (manual or electronic)"
    ],
    precautions: [],
    references: [{ title: "Nursing and Midwifery Council Ghana — Registered General Nurse Procedures", url: "https://nmc.gov.gh/procedures/view/RGN" }]
  }),
  {
    id: "rgn-009",
    title: "DRESSING OF SIMPLE WOUND (WITHOUT ASSISTANT)",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "It is the process of aseptically caring for an injury to body tissues or break in the continuity of the skin or mucous membrane.",
    purpose: [],
    indications: [
      "Patients with wounds requiring nursing care.",
      "Wounds requiring dressing changes.",
      "Post-operative wounds according to applicable orders and protocols."
    ],
    equipment: [
  "A trolley containing the following:",
  "Top shelf ( a Sterile field with the following sterile items)",
  "Two (2) or three (3) gallipots for lotions",
  "Two (2) kidney dish",
  "Two (2) pairs of dressing forceps",
  "Two (2) pairs of dissecting forceps",
  "Sinus forceps",
  "Probe",
  "Bottom shelf with the following:",
  "Dressing lotion",
  "Sterile cotton and gauze swab in a drum/ pack",
  "Mackintosh and dressing towel",
  "Adhesive tape/strip",
  "Bandage",
  "Scissors",
  "Apron",
  "Disposable gloves",
  "Sterile gloves",
  "Receiver for used dressings"
],
    steps: [
  "Establish rapport (Refer to steps)",
  "Explain procedure to patient (Refer to steps)",
  "Ensure privacy",
  "Put on mask perform hand hygiene",
  "Prepare and send trolley aseptically to the patient’s bedside",
  "Assist patient into a desirable position",
  "Protect bed clothes with mackintosh and dressing towel",
  "Assembly instruments and pours lotions into gallipots",
  "Perform hand hygiene",
  "Wear disposable gloves",
  "Expose area of wound and removes plaster or bandage",
  "Remove soiled dressing with dissecting forceps or disposable gloves, assess for the type of exudate and discard",
  "Perform hand hygiene",
  "Dab or clean wound with sterile forceps/gloves using prescribed lotion from within outwards",
  "Where necessary gently irrigates wound with syringe and saline",
  "Clean or dab wound with series of swabs until wound is clean",
  "Clean the surrounding skin",
  "Apply sterile dressing using prescribed dressing lotion",
  "Add enough sterile dressing and secures into position or leaves exposed where necessary",
  "Apply adhesive tape or bandage to the site where necessary",
  "Remove mackintosh and dressing towel",
  "Reposition patient in bed",
  "Inform patient about the state of the wound",
  "Dispose off used items, decontaminate used instruments and trolley",
  "Perform hand hygiene",
  "Documents and reports state of the wound in the nurse notes (manually or electronically)"
],
    precautions: [
      "Use appropriate infection-prevention measures.",
      "Avoid unnecessary contamination.",
      "Use prescribed or approved wound-care products.",
      "Report signs of infection or deterioration.",
      "Follow institutional wound-care protocols."
    ],
    videoUrl: "https://www.youtube.com/watch?v=VC0O-7BQSO8",
    quiz: [
  {
    "question": "The nurse is carrying out dressing of simple wound (without assistant). Which action best matches this part of the procedure?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Prepare and send trolley aseptically to the patient’s bedside",
      "Clean the surrounding skin",
      "Put on mask perform hand hygiene"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out dressing of simple wound (without assistant), what should the nurse do to support informed cooperation?",
    "options": [
      "Expose area of wound and removes plaster or bandage",
      "Explain procedure to patient (Refer to steps)",
      "Remove soiled dressing with dissecting forceps or disposable gloves, assess for the type of exudate and discard",
      "Dispose off used items, decontaminate used instruments and trolley"
    ],
    "answer": "Explain procedure to patient (Refer to steps)",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "A patient is about to undergo dressing of simple wound (without assistant). Which action protects their dignity during preparation?",
    "options": [
      "Protect bed clothes with mackintosh and dressing towel",
      "Add enough sterile dressing and secures into position or leaves exposed where necessary",
      "Ensure privacy",
      "Apply adhesive tape or bandage to the site where necessary"
    ],
    "answer": "Ensure privacy",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "Before proceeding with dressing of simple wound (without assistant), what infection-prevention action is required at this point?",
    "options": [
      "Explain procedure to patient (Refer to steps)",
      "Where necessary gently irrigates wound with syringe and saline",
      "Establish rapport (Refer to steps)",
      "Put on mask perform hand hygiene"
    ],
    "answer": "Put on mask perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "The nurse is carrying out dressing of simple wound (without assistant). Which action best matches this part of the procedure?",
    "options": [
      "Prepare and send trolley aseptically to the patient’s bedside",
      "Wear disposable gloves",
      "Reposition patient in bed",
      "Perform hand hygiene"
    ],
    "answer": "Prepare and send trolley aseptically to the patient’s bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for dressing of simple wound (without assistant), what should guide the nurse's choice of position?",
    "options": [
      "Clean the surrounding skin",
      "Assist patient into a desirable position",
      "Apply sterile dressing using prescribed dressing lotion",
      "Put on mask perform hand hygiene"
    ],
    "answer": "Assist patient into a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Which step should be performed now during dressing of simple wound (without assistant)?",
    "options": [
      "Remove soiled dressing with dissecting forceps or disposable gloves, assess for the type of exudate and discard",
      "Dispose off used items, decontaminate used instruments and trolley",
      "Protect bed clothes with mackintosh and dressing towel",
      "Documents and reports state of the wound in the nurse notes (manually or electronically)"
    ],
    "answer": "Protect bed clothes with mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of dressing of simple wound (without assistant)?",
    "options": [
      "Protect bed clothes with mackintosh and dressing towel",
      "Apply adhesive tape or bandage to the site where necessary",
      "Assist patient into a desirable position",
      "Assembly instruments and pours lotions into gallipots"
    ],
    "answer": "Assembly instruments and pours lotions into gallipots",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with dressing of simple wound (without assistant), what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Clean or dab wound with series of swabs until wound is clean",
      "Explain procedure to patient (Refer to steps)",
      "Where necessary gently irrigates wound with syringe and saline"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete dressing of simple wound (without assistant) safely, which action should the nurse take at this point?",
    "options": [
      "Reposition patient in bed",
      "Wear disposable gloves",
      "Inform patient about the state of the wound",
      "Perform hand hygiene"
    ],
    "answer": "Wear disposable gloves",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during dressing of simple wound (without assistant)?",
    "options": [
      "Apply sterile dressing using prescribed dressing lotion",
      "Put on mask perform hand hygiene",
      "Expose area of wound and removes plaster or bandage",
      "Prepare and send trolley aseptically to the patient’s bedside"
    ],
    "answer": "Expose area of wound and removes plaster or bandage",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of dressing of simple wound (without assistant)?",
    "options": [
      "Dab or clean wound with sterile forceps/gloves using prescribed lotion from within outwards",
      "Documents and reports state of the wound in the nurse notes (manually or electronically)",
      "Expose area of wound and removes plaster or bandage",
      "Remove soiled dressing with dissecting forceps or disposable gloves, assess for the type of exudate and discard"
    ],
    "answer": "Remove soiled dressing with dissecting forceps or disposable gloves, assess for the type of exudate and discard",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with dressing of simple wound (without assistant), what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Remove mackintosh and dressing towel",
      "Protect bed clothes with mackintosh and dressing towel",
      "Apply adhesive tape or bandage to the site where necessary"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Explain procedure to patient (Refer to steps)",
      "Dab or clean wound with sterile forceps/gloves using prescribed lotion from within outwards",
      "Ensure privacy",
      "Clean or dab wound with series of swabs until wound is clean"
    ],
    "answer": "Dab or clean wound with sterile forceps/gloves using prescribed lotion from within outwards",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which step should be performed now during dressing of simple wound (without assistant)?",
    "options": [
      "Inform patient about the state of the wound",
      "Perform hand hygiene",
      "Where necessary gently irrigates wound with syringe and saline",
      "Wear disposable gloves"
    ],
    "answer": "Where necessary gently irrigates wound with syringe and saline",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of dressing of simple wound (without assistant), which principle protects the reliability of the result?",
    "options": [
      "Add enough sterile dressing and secures into position or leaves exposed where necessary",
      "Prepare and send trolley aseptically to the patient’s bedside",
      "Apply sterile dressing using prescribed dressing lotion",
      "Clean or dab wound with series of swabs until wound is clean"
    ],
    "answer": "Clean or dab wound with series of swabs until wound is clean",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "The nurse is carrying out dressing of simple wound (without assistant). Which action best matches this part of the procedure?",
    "options": [
      "Clean the surrounding skin",
      "Establish rapport (Refer to steps)",
      "Remove soiled dressing with dissecting forceps or disposable gloves, assess for the type of exudate and discard",
      "Documents and reports state of the wound in the nurse notes (manually or electronically)"
    ],
    "answer": "Clean the surrounding skin",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Protect bed clothes with mackintosh and dressing towel",
      "Apply sterile dressing using prescribed dressing lotion",
      "Assembly instruments and pours lotions into gallipots",
      "Remove mackintosh and dressing towel"
    ],
    "answer": "Apply sterile dressing using prescribed dressing lotion",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "When positioning the patient for dressing of simple wound (without assistant), what should guide the nurse's choice of position?",
    "options": [
      "Ensure privacy",
      "Where necessary gently irrigates wound with syringe and saline",
      "Add enough sterile dressing and secures into position or leaves exposed where necessary",
      "Clean or dab wound with series of swabs until wound is clean"
    ],
    "answer": "Add enough sterile dressing and secures into position or leaves exposed where necessary",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Which nursing action is required at this stage of dressing of simple wound (without assistant)?",
    "options": [
      "Dispose off used items, decontaminate used instruments and trolley",
      "Wear disposable gloves",
      "Inform patient about the state of the wound",
      "Apply adhesive tape or bandage to the site where necessary"
    ],
    "answer": "Apply adhesive tape or bandage to the site where necessary",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out dressing of simple wound (without assistant). Which action best matches this part of the procedure?",
    "options": [
      "Remove mackintosh and dressing towel",
      "Assist patient into a desirable position",
      "Apply sterile dressing using prescribed dressing lotion",
      "Prepare and send trolley aseptically to the patient’s bedside"
    ],
    "answer": "Remove mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for dressing of simple wound (without assistant), what should guide the nurse's choice of position?",
    "options": [
      "Remove soiled dressing with dissecting forceps or disposable gloves, assess for the type of exudate and discard",
      "Reposition patient in bed",
      "Dab or clean wound with sterile forceps/gloves using prescribed lotion from within outwards",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Reposition patient in bed",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Before carrying out dressing of simple wound (without assistant), what should the nurse do to support informed cooperation?",
    "options": [
      "Assembly instruments and pours lotions into gallipots",
      "Apply adhesive tape or bandage to the site where necessary",
      "Inform patient about the state of the wound",
      "Remove mackintosh and dressing towel"
    ],
    "answer": "Inform patient about the state of the wound",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "After the hands-on part of dressing of simple wound (without assistant), how should used equipment and waste be managed?",
    "options": [
      "Put on mask perform hand hygiene",
      "Clean or dab wound with series of swabs until wound is clean",
      "Ensure privacy",
      "Dispose off used items, decontaminate used instruments and trolley"
    ],
    "answer": "Dispose off used items, decontaminate used instruments and trolley",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with dressing of simple wound (without assistant), what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Remove soiled dressing with dissecting forceps or disposable gloves, assess for the type of exudate and discard",
      "Dispose off used items, decontaminate used instruments and trolley",
      "Expose area of wound and removes plaster or bandage"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "After completing this part of dressing of simple wound (without assistant), what makes the clinical record useful for continuity of care?",
    "options": [
      "Apply sterile dressing using prescribed dressing lotion",
      "Documents and reports state of the wound in the nurse notes (manually or electronically)",
      "Add enough sterile dressing and secures into position or leaves exposed where necessary",
      "Assist patient into a desirable position"
    ],
    "answer": "Documents and reports state of the wound in the nurse notes (manually or electronically)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  }
]
  },
  {
    id: "rgn-010",
    title: "Documentation and Recording of Patient Care",
    category: "General Nursing (RGN)",
    overview:
      "Accurate recording of relevant patient assessment, nursing care, interventions and response in the appropriate clinical record.",
    purpose: [
      "Provide an accurate record of patient care.",
      "Support continuity of care.",
      "Communicate relevant clinical information.",
      "Provide evidence of care and patient response."
    ],
    indications: [
      "After relevant nursing assessments.",
      "After nursing interventions.",
      "When significant changes occur.",
      "As required by clinical documentation policy."
    ],
    equipment: [
      "Approved patient record",
      "Approved documentation system",
      "Appropriate writing or electronic documentation tools"
    ],
    steps: [
      "Confirm the correct patient record.",
      "Review relevant information before documenting.",
      "Record assessments and care accurately.",
      "Use clear and appropriate clinical language.",
      "Record significant patient responses and changes.",
      "Document medications and interventions according to policy.",
      "Complete entries promptly.",
      "Identify the person making the entry according to policy.",
      "Maintain confidentiality and security of records.",
      "Communicate significant findings to the appropriate healthcare professional."
    ],
    precautions: [
      "Maintain patient confidentiality.",
      "Do not falsify or alter records improperly.",
      "Use the approved documentation system.",
      "Record objectively and accurately.",
      "Follow institutional documentation policies."
    ],
    videoUrl: "https://www.youtube.com/watch?v=-taPZmUCbbs",
    quiz: [
      {
        question: "What is a major purpose of nursing documentation?",
        options: ["Support continuity of care", "Hide clinical findings", "Replace patient assessment", "Prevent communication"],
        answer: "Support continuity of care"
      },
      {
        question: "What should be confirmed before documenting?",
        options: ["The correct patient record", "The patient's favourite food", "The ward television", "The patient's occupation"],
        answer: "The correct patient record"
      },
      {
        question: "How should clinical information be recorded?",
        options: ["Accurately and objectively", "By guessing", "By deleting abnormal findings", "By using misleading statements"],
        answer: "Accurately and objectively"
      },
      {
        question: "What should be documented when relevant?",
        options: ["Patient response and significant changes", "Only the patient's name", "Only the room number", "Nothing"],
        answer: "Patient response and significant changes"
      },
      {
        question: "Why should documentation be completed promptly?",
        options: ["To maintain an accurate contemporaneous record", "To increase errors", "To avoid communication", "To delay care"],
        answer: "To maintain an accurate contemporaneous record"
      },
      {
        question: "What must be protected in patient records?",
        options: ["Confidentiality", "Public access", "Uncontrolled sharing", "Unauthorized editing"],
        answer: "Confidentiality"
      },
      {
        question: "Which practice is unacceptable?",
        options: ["Falsifying patient records", "Accurate documentation", "Recording patient response", "Using approved systems"],
        answer: "Falsifying patient records"
      },
      {
        question: "What should significant findings be accompanied by?",
        options: ["Appropriate communication to the healthcare team", "Silence", "Deletion", "Delayed reporting"],
        answer: "Appropriate communication to the healthcare team"
      },
      {
        question: "Why is documentation important for nursing care?",
        options: ["It communicates relevant patient information", "It replaces nursing care", "It prevents teamwork", "It eliminates assessment"],
        answer: "It communicates relevant patient information"
      },
      {
        question: "What is an important principle of clinical documentation?",
        options: ["Accuracy and confidentiality", "Guessing and sharing", "Deleting abnormal findings", "Leaving records incomplete"],
        answer: "Accuracy and confidentiality"
      }
    ]
  },
  withStepQuiz({
    id: "rgn-075",
    title: "ASSISTED BED BATH",
    category: "General Nursing (RGN)",
    types: ["N/A"],
    overview: "This is the act of cleaning a patient who is confined to bed but has the ability to perform some aspects of self-care with assistance from a nurse.",
    purpose: [],
    indications: [],
    equipment: [
      "A trolley containing the following:",
      "Top Shelf",
      "Two basins or bowls",
      "Sponge",
      "Soap in a dish",
      "Towel",
      "Pomade",
      "Bath thermometer",
      "Face towel (if available)",
      "Bottom shelf",
      "Two jugs of water (hot and cold)",
      "Bucket or bowel for used water",
      "Receptacle for soiled linen",
      "Long mackintosh",
      "Bath blanket or sheet",
      "Clean bedsheet or linen",
      "Patient’s clothing",
      "Bed pan or urinal",
      "Bucket of tepid water",
      "Small pale",
      "Soap in a dish",
      "Towel",
      "Sponge",
      "Chair or stool",
      "Clean cloth or dress"
    ],
    steps: [
      "Establish rapport and identify patient by name",
      "Inform and explain procedure to patient",
      "Assess patient ability to assist in the procedure",
      "Prepare bathroom",
      "Collect the necessary articles and arranges them for easy access",
      "Send patient to the bathroom with the aid of an adaptive equipment e.g. wheelchair, zimna frame etc.",
      "Maintain individuality of patient by asking him/her for the correct temperature of the water",
      "Provide privacy",
      "Assist patient to undress",
      "Provide chair or stool in bathroom when necessary",
      "Allow the patient to do as much for him/herself as condition permits",
      "Complete the areas were patient needs assistance",
      "Make bed and allow patient to assume a desired position",
      "Collect toiletries and tidy up the bathroom",
      "Perform hand hygiene",
      "Document procedure and report any findings (manual/electronic)"
    ],
    precautions: [],
    references: [{ title: "Nursing and Midwifery Council Ghana — Registered General Nurse Procedures", url: "https://nmc.gov.gh/procedures/view/RGN" }]
  }),
  withStepQuiz({
    id: "rgn-076",
    title: "ASSISTED BATHROOM BATHING",
    category: "General Nursing (RGN)",
    types: ["N/A"],
    overview: "This is a type of bathing which is performed in the bathroom for a patient who is not confined to bed but weak or convalescing/recovering requiring some level of assistance from a nurse to maintain his/her self-care needs.",
    purpose: [],
    indications: [],
    equipment: [
      "Bucket of tepid water",
      "Small pale",
      "Soap in a dish",
      "Towel",
      "Sponge",
      "Chair or stool",
      "Clean cloth or dress"
    ],
    steps: [
      "Establish rapport and identify patient by name",
      "Inform and explain procedure to patient",
      "Assess patient ability to assist in the procedure",
      "Prepare bathroom",
      "Collect the necessary articles and arranges them for easy access",
      "Send patient to the bathroom with the aid of an adaptive equipment e.g. wheelchair, zimna frame etc.",
      "Maintain individuality of patient by asking him/her for the correct temperature of the water",
      "Provide privacy",
      "Assist patient to undress",
      "Provide chair or stool in bathroom when necessary",
      "Allow the patient to do as much for him/herself as condition permits",
      "Complete the areas were patient needs assistance",
      "Make bed and allow patient to assume a desired position",
      "Collect toiletries and tidy up the bathroom",
      "Perform hand hygiene",
      "Document procedure and report any findings (manual/electronic)"
    ],
    precautions: [],
    references: [{ title: "Nursing and Midwifery Council Ghana — Registered General Nurse Procedures", url: "https://nmc.gov.gh/procedures/view/RGN" }]
  }),
  withStepQuiz({
    id: "rgn-077",
    title: "CATHETERIZATION OF A MALE PATIENT",
    category: "General Nursing (RGN)",
    types: ["N/A"],
    overview: "Urinary catheterization is the process of inserting a fine latex or silicon catheter into the urinary bladder to aid urine flow or keep the urethra open. This procedure is mostly done for patient/client who have urinary condition that affects their micturition. It is also passed for patients who are to undergo major surgical procedures. It is an invasive procedure which requires strict aseptic technique. There are two main types of catheters namely: indwelling (Two-way and three-way) and external (Condom).",
    purpose: [],
    indications: [],
    equipment: [
      "A trolley containing the following:",
      "Top Shelf: A sterile pack or field containing the following:",
      "Two gallipots",
      "Three sterile drape, one sterile fenestrated drape",
      "Sterile cotton wool swabs",
      "Artery forceps",
      "Kidney dish",
      "Bottom Shelf: Various catheters of different sizes used",
      "14\" and 16\" for female",
      "18\" and 20\" for male",
      "8\" and 10\" for children",
      "Lubricant (e.g. K.Y. or xylocaine jelly)",
      "Diluted antiseptic solution",
      "Receiver for used swabs",
      "Mackintosh and dressing towel",
      "Urine bag",
      "Sterile water",
      "Specimen bottles if necessary",
      "Hypo-allergic tape or plaster",
      "Light source",
      "Sterile gloves",
      "10-20mls syringe and needle",
      "Spigot if necessary",
      "Jug of warm water and bowel/bucket",
      "Bedpan",
      "Soap and towel",
      "Intake and output chart (manual or electronic)",
      "Condom catheter",
      "Urinal"
    ],
    steps: [
      "Review doctor/physician’s order for catheterization",
      "Establish rapport with patient (Refer to steps)",
      "Explain procedure to patient (Refer to steps)",
      "Provide privacy",
      "Perform hand hygiene",
      "Prepare and send trolley to the bedside",
      "Protect bed with mackintosh and dressing towel",
      "Perform hand hygiene and wear gloves",
      "Instruct assistant to place patient in the supine position with knees flexed and legs separated",
      "Cover patient’s upper body with a top sheet and fold the down over to expose the penis",
      "Place bedpan under patient, wash and dry perineal area thoroughly with soap and water",
      "Where necessary retract the prepuce so that the urethral meatus is exposed",
      "Clean patient and remove bedpan",
      "Remove the gloves and perform hand hygiene",
      "Open the packs of sterile dressing and catheter container and place the contents onto the sterile field",
      "Drape with a sterile towel and place the fenestrated drape over the penis exposing the urinary meatus",
      "Wear new sterile gloves",
      "Clean the area with antiseptic lotion wiping with backward motion from the urethral meatus",
      "To straighten the urethra, lift the penis to an angle of 90°",
      "Lubricate catheter with K.Y. or xylocaine jelly",
      "Insert the catheter gently for about 16cm or until urine begins to flow leaving the open end in the receiver between the patient’s thighs",
      "Inflate the balloon of the catheter with the sterile water according to manufacturer’s direction when urine flows out",
      "Collect a urine specimen if necessary and allows 20 – 30mls to flow into bottle without bottle touching the catheter",
      "Note: Slight resistance will often be met as the catheter encounters the external sphincter, therefore paus briefly and encourage the patient to breathe in deeply resulting in sufficient relaxation for the catheter to be passed readily for the urine to flow",
      "Connect catheter to urine bag",
      "Hang urine bag to the bed and secure in position",
      "Observe colour and note amount of urine",
      "Remove drapes, mackintosh and dressing towel",
      "Remove gloves and perform hand hygiene",
      "Assist patient into a desirable position",
      "Dispose off used items, decontaminate and trolley",
      "Perform hand hygiene",
      "Document the procedure, urine output and any abnormalities in the nurses’ note, intake and output chart (manual or electronic)"
    ],
    precautions: [],
    references: [{ title: "Nursing and Midwifery Council Ghana — Registered General Nurse Procedures", url: "https://nmc.gov.gh/procedures/view/RGN" }]
  })
];
