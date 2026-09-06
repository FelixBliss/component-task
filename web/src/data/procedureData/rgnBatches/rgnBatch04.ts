import type { Procedure, ProcedureQuizQuestion } from "../../procedureTypes";

const q = (
  question: string,
  options: string[],
  answer: string,
  explanation: string
): ProcedureQuizQuestion => ({
  question,
  options,
  answer,
  explanation,
});

const rgn_030Quiz: ProcedureQuizQuestion[] = [
  q(
    "What should the nurse confirm before educating a patient about a condition?",
    [
      "The patient's diagnosis and management plan",
      "The patient's preferred visiting hours",
      "The ward cleaning schedule",
      "The patient's meal preference",
    ],
    "The patient's diagnosis and management plan",
    "The diagnosis and current management plan should be confirmed before providing condition-specific education."
  ),
  q(
    "Why should the nurse assess the patient's existing knowledge first?",
    [
      "To build teaching on what the patient already understands",
      "To avoid answering patient questions",
      "To determine the patient's insurance status",
      "To reduce the need for documentation",
    ],
    "To build teaching on what the patient already understands",
    "Assessing existing knowledge allows teaching to be individualized and appropriate to the patient's level of understanding."
  ),
  q(
    "Which method can help the nurse confirm that the patient understood the education?",
    [
      "Teach-back or appropriate questioning",
      "Asking the patient to remain silent",
      "Giving information without discussion",
      "Allowing relatives to answer every question",
    ],
    "Teach-back or appropriate questioning",
    "Teach-back and appropriate questioning allow the nurse to assess whether the patient understands the information provided."
  ),
  q(
    "What should the nurse do when a patient's question is outside the nurse's scope of practice?",
    [
      "Refer the question to the appropriate healthcare professional",
      "Provide an unsupported answer",
      "Ignore the question",
      "Ask another patient for the answer",
    ],
    "Refer the question to the appropriate healthcare professional",
    "Questions outside the nurse's scope should be referred to the appropriate healthcare professional."
  ),
  q(
    "What should be documented after patient education?",
    [
      "The education provided and the patient's response",
      "Only the nurse's name",
      "Only the patient's meal",
      "Only the visiting time",
    ],
    "The education provided and the patient's response",
    "Documentation should include the education provided, the patient's response and relevant further teaching needs."
  ),
];

const rgn_031Quiz: ProcedureQuizQuestion[] = [
  q(
    "What should be prioritized when receiving a patient for admission?",
    [
      "Assessment and management of urgent clinical conditions",
      "Completing financial documentation first",
      "Introducing the patient to every visitor",
      "Changing the patient's clothing immediately",
    ],
    "Assessment and management of urgent clinical conditions",
    "Emergency or deteriorating conditions must be assessed and managed before routine admission activities."
  ),
  q(
    "Which assessment is included during admission?",
    [
      "General head-to-toe assessment",
      "Visitor assessment only",
      "Meal assessment only",
      "Ward furniture assessment only",
    ],
    "General head-to-toe assessment",
    "A general head-to-toe assessment helps establish the patient's condition and baseline findings."
  ),
  q(
    "What should be checked before administering prescribed medication?",
    [
      "The patient's allergies and medication order",
      "The visitor's occupation",
      "The patient's locker contents",
      "The ward cleaning schedule",
    ],
    "The patient's allergies and medication order",
    "Medication administration requires appropriate verification, including the prescribed order and allergy status."
  ),
  q(
    "Why should patient valuables be handled according to institutional protocol?",
    [
      "To protect the patient's property and provide proper documentation",
      "To allow relatives to keep all valuables",
      "To avoid documenting the admission",
      "To reduce the need for patient identification",
    ],
    "To protect the patient's property and provide proper documentation",
    "Institutional procedures help safeguard patient valuables and ensure appropriate documentation."
  ),
  q(
    "What should the nurse do when abnormal findings are identified during admission?",
    [
      "Report and escalate them promptly",
      "Ignore them until discharge",
      "Document them only after one week",
      "Ask another patient to monitor them",
    ],
    "Report and escalate them promptly",
    "Abnormal or urgent findings should be communicated promptly to the appropriate healthcare professional."
  ),
];

const rgn_032Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is a simple unoccupied bed?",
    [
      "An empty bed prepared with clean linen for use by a patient",
      "A bed occupied by a patient during linen change",
      "A bed used only during surgery",
      "A bed reserved only for fracture patients",
    ],
    "An empty bed prepared with clean linen for use by a patient",
    "A simple unoccupied bed is prepared while the patient is not in the bed."
  ),
  q(
    "Why should linen not be shaken during bed making?",
    [
      "It may disperse microorganisms into the environment",
      "It makes the mattress heavier",
      "It prevents the pillowcase from fitting",
      "It changes the patient's diagnosis",
    ],
    "It may disperse microorganisms into the environment",
    "Shaking linen can disperse microorganisms and should therefore be avoided."
  ),
  q(
    "What should be done with clean and soiled linen?",
    [
      "Keep them separate",
      "Place them together on the bed",
      "Shake them together before disposal",
      "Store them together on the trolley",
    ],
    "Keep them separate",
    "Clean and soiled linen should be kept separate to reduce contamination."
  ),
  q(
    "Why should wrinkles in bed linen be minimized?",
    [
      "To promote comfort and reduce pressure-related skin problems",
      "To increase the weight of the bed",
      "To make the bed difficult to enter",
      "To prevent the nurse from documenting care",
    ],
    "To promote comfort and reduce pressure-related skin problems",
    "Smooth linen promotes comfort and helps reduce unnecessary pressure and friction."
  ),
  q(
    "What should be performed after completing bed making?",
    [
      "Hand hygiene",
      "Medication administration to the patient",
      "Removal of the mattress",
      "Changing the patient's diagnosis",
    ],
    "Hand hygiene",
    "Hand hygiene should be performed after completing the procedure."
  ),
];

const rgn_033Quiz: ProcedureQuizQuestion[] = [
  q(
    "What distinguishes a simple occupied bed from an unoccupied bed?",
    [
      "The patient remains in bed during the procedure",
      "The bed contains no linen",
      "The procedure is performed only in theatre",
      "The patient must leave the ward",
    ],
    "The patient remains in bed during the procedure",
    "An occupied bed is made while the patient remains in bed."
  ),
  q(
    "What should the nurse assess before turning a patient during occupied bed making?",
    [
      "The patient's mobility and clinical condition",
      "The patient's favourite food",
      "The visitor's occupation",
      "The ward cleaning schedule",
    ],
    "The patient's mobility and clinical condition",
    "The patient's condition and ability to move should be assessed before repositioning."
  ),
  q(
    "Why should intravenous lines, drains and catheters be checked during repositioning?",
    [
      "To prevent displacement or injury",
      "To increase the patient's appetite",
      "To change the medication prescription",
      "To determine the patient's insurance category",
    ],
    "To prevent displacement or injury",
    "Attached devices can become displaced or damaged during repositioning if not monitored."
  ),
  q(
    "What should be maintained throughout the procedure?",
    [
      "Patient privacy and dignity",
      "Continuous exposure of the patient",
      "Removal of all monitoring equipment",
      "Silence without explanation",
    ],
    "Patient privacy and dignity",
    "The patient should remain appropriately covered and treated with dignity throughout the procedure."
  ),
  q(
    "What should the nurse do if the patient becomes unstable during bed making?",
    [
      "Stop the procedure and seek appropriate assistance",
      "Continue quickly without reassessment",
      "Leave the patient alone",
      "Remove all equipment immediately",
    ],
    "Stop the procedure and seek appropriate assistance",
    "Patient safety takes priority, and deterioration should be assessed and escalated."
  ),
];

const rgn_034Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is the main purpose of an admission bed?",
    [
      "To facilitate quick and safe admission of a patient",
      "To provide traction for fractures",
      "To support only cardiac patients",
      "To prepare a patient for discharge",
    ],
    "To facilitate quick and safe admission of a patient",
    "An admission bed is an open bed prepared to receive a patient promptly."
  ),
  q(
    "Why is the side nearest the entrance left open?",
    [
      "To facilitate easy admission of the patient",
      "To prevent the patient from entering",
      "To remove all bed linen",
      "To expose the mattress",
    ],
    "To facilitate easy admission of the patient",
    "The open arrangement allows the patient to be received into the bed more easily."
  ),
  q(
    "When should a hot water bottle be used?",
    [
      "Only when indicated and according to safety policy",
      "For every patient without assessment",
      "Only after the patient has been discharged",
      "Whenever the nurse wants to warm the mattress",
    ],
    "Only when indicated and according to safety policy",
    "Hot water bottles can cause burns and should only be used when indicated with appropriate precautions."
  ),
  q(
    "Which equipment may be prepared with an admission bed according to patient needs?",
    [
      "Oxygen and suction equipment",
      "Only a meal tray",
      "Only a writing desk",
      "Only a visitor chair",
    ],
    "Oxygen and suction equipment",
    "Oxygen and suction equipment may be prepared according to the patient's anticipated clinical needs."
  ),
  q(
    "What should be checked before an admission bed is used?",
    [
      "That the bed is stable and ready for safe patient admission",
      "That all linen has been removed",
      "That the mattress is wet",
      "That the trolley remains on the bed",
    ],
    "That the bed is stable and ready for safe patient admission",
    "The bed should be safe, clean, stable and appropriately prepared before receiving the patient."
  ),
];

const rgn_035Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is the main purpose of a cardiac bed?",
    [
      "To provide an upright position that can relieve breathing difficulty",
      "To immobilize a fractured limb",
      "To prepare a patient for discharge",
      "To provide traction for the spine",
    ],
    "To provide an upright position that can relieve breathing difficulty",
    "The cardiac bed is arranged to support an upright position and improve patient comfort during breathing difficulty."
  ),
  q(
    "How should the back rest be positioned for a cardiac bed?",
    [
      "Elevated at the top end of the bed",
      "Removed completely",
      "Placed under the mattress",
      "Placed at the foot of the bed",
    ],
    "Elevated at the top end of the bed",
    "The back rest is elevated to help create the supportive upright position."
  ),
  q(
    "Why is a heart table positioned within reach?",
    [
      "It provides support for the patient and allows essential items to be accessible",
      "It replaces the mattress",
      "It is used to store soiled linen",
      "It prevents the patient from sitting upright",
    ],
    "It provides support for the patient and allows essential items to be accessible",
    "The heart table can provide support and keep essential items within the patient's reach."
  ),
  q(
    "Which item should be placed within reach of the patient?",
    [
      "Bell",
      "Used linen",
      "Cleaning chemicals",
      "Dirty instruments",
    ],
    "Bell",
    "The bell should be within reach so the patient can call for assistance."
  ),
  q(
    "Why should the sides of the top clothing be tucked loosely?",
    [
      "To avoid restricting the patient's comfort and movement",
      "To immobilize the patient completely",
      "To make the bed impossible to enter",
      "To remove the need for pillows",
    ],
    "To avoid restricting the patient's comfort and movement",
    "The cardiac bed should provide support without unnecessarily restricting the patient."
  ),
];

const rgn_036Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is an operation bed prepared to receive?",
    [
      "A patient returning from theatre after surgery",
      "Only a patient attending clinic",
      "A patient coming for routine breakfast",
      "A patient waiting for discharge",
    ],
    "A patient returning from theatre after surgery",
    "An operation bed is prepared for a patient returning from theatre after an operation."
  ),
  q(
    "Why is a post-anaesthetic tray prepared beside the operation bed?",
    [
      "To provide equipment needed for immediate post-operative care",
      "To store clean bed linen",
      "To prepare the patient's meals",
      "To hold personal valuables",
    ],
    "To provide equipment needed for immediate post-operative care",
    "A post-anaesthetic tray contains items that may be needed when receiving and caring for the post-operative patient."
  ),
  q(
    "What should be done with hot water bottles before receiving the post-operative patient?",
    [
      "Remove them from the bed",
      "Place them under the patient's head",
      "Cover the patient with them",
      "Leave them directly beneath the operative site",
    ],
    "Remove them from the bed",
    "Hot water bottles should be removed before receiving the patient to prevent burns and other injury."
  ),
  q(
    "Which equipment may be arranged at the bedside according to patient needs?",
    [
      "Oxygen and suction apparatus",
      "Only a meal tray",
      "Only a visitor chair",
      "Only a wardrobe",
    ],
    "Oxygen and suction apparatus",
    "Oxygen and suction equipment may be required for immediate post-operative care."
  ),
  q(
    "Why should the patient's operative site be observed after arrival?",
    [
      "To identify bleeding or other abnormalities requiring attention",
      "To determine the patient's insurance status",
      "To decide the patient's meal preference",
      "To remove all documentation",
    ],
    "To identify bleeding or other abnormalities requiring attention",
    "Observation of the operative site helps identify bleeding and other post-operative concerns."
  ),
];

const rgn_037Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is the main feature of a fracture bed?",
    [
      "A firm support that helps maintain alignment and prevents sagging",
      "A soft mattress designed to increase movement",
      "A bed without any linen",
      "A bed used only for ambulatory patients",
    ],
    "A firm support that helps maintain alignment and prevents sagging",
    "A fracture bed provides firm support, including support under the mattress where required."
  ),
  q(
    "Why are fracture boards placed under the mattress?",
    [
      "To provide firm support and prevent sagging",
      "To make the mattress softer",
      "To increase the patient's mobility",
      "To remove the need for a draw sheet",
    ],
    "To provide firm support and prevent sagging",
    "Fracture boards provide a firm base and reduce mattress sagging."
  ),
  q(
    "What may be used at the foot end of a fracture bed?",
    [
      "A foot board or sand bags",
      "A suction catheter",
      "A meal tray",
      "A medication cupboard",
    ],
    "A foot board or sand bags",
    "A foot board or sand bags may be positioned at the foot end to provide appropriate support."
  ),
  q(
    "Why should linen be kept free from unnecessary wrinkles?",
    [
      "To promote comfort and reduce pressure on vulnerable areas",
      "To make the bed more difficult to use",
      "To prevent documentation",
      "To increase the patient's pain",
    ],
    "To promote comfort and reduce pressure on vulnerable areas",
    "Smooth linen promotes comfort and helps reduce unnecessary pressure and friction."
  ),
  q(
    "What should the nurse consider when attaching traction-related accessories?",
    [
      "The prescribed setup and safe positioning of the patient",
      "The patient's meal preference",
      "The visitor's schedule",
      "The colour of the ward walls",
    ],
    "The prescribed setup and safe positioning of the patient",
    "Traction-related equipment must be applied and maintained according to the prescribed clinical plan and safety requirements."
  ),
];

const rgn_038Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is the purpose of a divided bed?",
    [
      "To allow observation of a body part without disturbing the patient",
      "To prevent all patient movement",
      "To prepare a patient for discharge",
      "To replace the patient's mattress",
    ],
    "To allow observation of a body part without disturbing the patient",
    "The divided bed creates an opening that allows observation of a selected body part."
  ),
  q(
    "What device is used to create the visual window in a divided bed?",
    [
      "Bed cradle",
      "Drip stand",
      "Suction machine",
      "Foot board",
    ],
    "Bed cradle",
    "The bed cradle supports the divided top linen and creates the opening over the affected area."
  ),
  q(
    "Which patients may particularly benefit from a divided bed?",
    [
      "Patients with burns or amputations requiring regular observation",
      "Only patients preparing for discharge",
      "Only ambulatory patients",
      "Patients requiring routine meal service",
    ],
    "Patients with burns or amputations requiring regular observation",
    "The divided bed can help protect injured areas from the weight of bedclothes while allowing observation."
  ),
  q(
    "Why should the two sections of the top bed clothing overlap?",
    [
      "To maintain appropriate coverage while allowing the required opening",
      "To expose the entire patient",
      "To remove the need for a bed cradle",
      "To prevent all observation",
    ],
    "To maintain appropriate coverage while allowing the required opening",
    "The sections are arranged to maintain coverage while creating the intended observation window."
  ),
  q(
    "What should be done after completing the divided bed?",
    [
      "Ensure the patient area is safe and perform hand hygiene",
      "Leave the trolley beside the patient",
      "Remove all bed linen",
      "Leave used equipment on the bed",
    ],
    "Ensure the patient area is safe and perform hand hygiene",
    "The bed should be left safe and ready for use, followed by appropriate infection-prevention measures."
  ),
];

export const rgnBatch04: Procedure[] = [
  {
    id: "rgn-030",
    title: "EDUCATION ON CONDITION AND ITS MANAGEMENT",
    category: "General Nursing (RGN)",
    overview:
      "This is an ongoing interaction between the patient and the nurse through which the patient's condition and its management are discussed in detail using clear and simple language. It provides the patient with the opportunity to understand the condition, treatment, self-care and expected outcomes.",
    purpose: [
      "Provide the patient with adequate information about his/her condition",
      "Enhance the patient's knowledge of the condition",
      "Promote appropriate attitudinal or behavioural change",
      "Equip the patient with skills for caring for his/her condition",
      "Promote adherence to the agreed treatment and follow-up plan",
      "Promote early recognition and reporting of warning signs",
    ],
    indications: [
      "New diagnosis or newly identified health condition",
      "Admission or commencement of treatment for a condition",
      "Change in the patient's condition or management plan",
      "Before discharge when the patient requires self-care education",
      "When the patient or caregiver requires clarification about the condition or its management",
      "When the patient requires teaching on the use of a care device or treatment technique",
    ],
    equipment: [
      "Patient's folder (Manual or electronic)",
      "Treatment sheet (Manual or electronic)",
      "Chair",
      "Care devices/gadgets (if any)",
      "Pamphlets/source of readable information",
    ],
    steps: [
      "Confirm patient's diagnosis and relevant management plan against the patient's record",
      "Establish rapport with the patient",
      "Explain the purpose and need for the education",
      "Involve relatives or significant others when appropriate and with the patient's permission",
      "Ensure an enabling, relaxed and private environment",
      "Assist the patient into a comfortable position",
      "Sit comfortably by the patient",
      "Identify the suitable language and communication method for the patient",
      "Assess the patient's existing knowledge and understanding of the condition",
      "Build on what the patient already knows using accurate and appropriate information",
      "Assess the patient's understanding of the available management options",
      "Explain the rationale for relevant investigations and treatment",
      "Explain expected outcomes, prognosis and relevant warning signs",
      "Explain and demonstrate the use of devices/gadgets included in the management process",
      "Use teach-back or appropriate questioning to confirm understanding",
      "Allow the patient and significant other to ask questions",
      "Encourage cooperation with the healthcare team and appropriate follow-up",
      "Provide clear and simple written information where appropriate",
      "Thank the patient and relatives for their cooperation",
      "Document the education provided, patient's response and any further teaching required",
      "Report relevant concerns to the appropriate officer",
    ],
    precautions: [
      "Verify the diagnosis and current management plan before providing education",
      "Provide information within the nurse's scope of practice and authorized clinical plan",
      "Do not give misleading information or make unsupported promises about prognosis",
      "Maintain patient privacy, dignity and confidentiality",
      "Use language and teaching methods appropriate to the patient's literacy, culture and level of understanding",
      "Consider hearing, vision, cognitive, language and communication barriers",
      "Use a qualified interpreter when required",
      "Confirm patient understanding before concluding the teaching session",
      "Do not disclose confidential information to relatives or significant others without appropriate permission or legal basis",
      "Refer questions outside the nurse's scope to the appropriate healthcare professional",
    ],
    videoUrl: "https://www.youtube.com/watch?v=Lh0vnRTA6OI",
    quiz: rgn_030Quiz,
  },

  {
    id: "rgn-031",
    title: "ADMISSION OF A PATIENT",
    category: "General Nursing (RGN)",
    overview:
      "Admission is the process of receiving and settling a patient/client into a health facility for observation, investigation, treatment, nursing care or bed rest. Admission may be planned or unplanned.",
    purpose: [
      "Allow the patient to stay in the hospital for observation, investigation and treatment",
      "Provide appropriate nursing care and monitoring",
      "Establish baseline assessment findings",
      "Ensure continuity and coordination of care",
      "Provide orientation and promote patient safety",
    ],
    indications: [
      "Planned admission for investigation or treatment",
      "Unplanned or emergency admission requiring immediate care",
      "Admission following transfer from another clinical area",
      "Admission for observation and monitoring",
      "Admission for surgical or other specialized treatment",
    ],
    equipment: [
      "Admission bed and its accessories according to patient condition",
      "Manual or electronic folder",
      "Vital signs tray",
      "Oxygen apparatus",
      "Treatment or emergency tray",
      "Suction apparatus",
      "Admission and Discharge documents (Manual or Electronic)",
    ],
    steps: [
      "Welcome patient and relatives to the nurses' station",
      "Introduce self and any staff present",
      "Collect necessary documents, admission notes and relevant information from the accompanying nurse",
      "Assess the patient's condition and note any supportive gadgets or devices",
      "Identify and confirm the patient's identity and relevant particulars",
      "Reassure the patient and relatives appropriately",
      "Send the patient to the bedside and position according to the condition",
      "Make the relative comfortable in the appropriate waiting area where applicable",
      "Take a comprehensive history from the patient or relatives as appropriate",
      "Perform a general head-to-toe assessment",
      "Check and record vital signs",
      "Establish intravenous access and obtain specimens for requested investigations when indicated and authorized",
      "Send the patient for requested investigations when clinically appropriate",
      "Inform the charge nurse of urgent prescribed medication and ensure availability",
      "Administer prescribed medications",
      "Assist the patient to change into appropriate clothing",
      "Ask the patient to declare valuables according to institutional protocol",
      "Secure and document patient valuables according to institutional protocol",
      "Explain applicable National Health Insurance or other approved health insurance processes",
      "Process insurance requirements where applicable",
      "For cash-paying patients, follow the institution's approved payment/deposit process",
      "Orient the patient to the ward environment and routines",
      "Document the admission assessment, care provided and relevant findings",
    ],
    precautions: [
      "Confirm patient identity using appropriate identifiers",
      "Assess and prioritize emergency conditions before routine admission procedures",
      "Maintain patient privacy, dignity and confidentiality",
      "Perform hand hygiene and use appropriate infection-prevention precautions",
      "Check vital signs and report abnormal findings promptly",
      "Ensure oxygen, suction and emergency equipment are available when required",
      "Check allergies before administering medications",
      "Administer medications only as prescribed and according to facility policy",
      "Use aseptic technique for intravenous access and specimen collection",
      "Handle patient valuables according to institutional policy",
      "Ensure specimens are correctly identified and transported",
      "Escalate deterioration or urgent clinical findings immediately",
    ],
    videoUrl: "https://www.youtube.com/watch?v=s-LBEmMBUvU",
    quiz: rgn_031Quiz,
  },

  {
    id: "rgn-032",
    title: "SIMPLE UNOCCUPIED BED",
    category: "General Nursing (RGN)",
    overview:
      "This is an empty bed prepared with clean linen and covered appropriately so that it is protected from dust and dirt while awaiting admission or use by a patient.",
    purpose: [
      "Facilitate quick admission",
      "Provide a clean and comfortable sleeping surface",
      "Maintain cleanliness and readiness of the patient unit",
      "Promote patient safety and comfort",
    ],
    indications: [
      "Preparation of a bed before admission of a patient",
      "Preparation of an empty bed after discharge",
      "Routine replacement of bed linen when the bed is unoccupied",
      "Preparation of a bed for an ambulant patient who is not currently in bed",
    ],
    equipment: [
      "A trolley with the following items:",
      "Two large cotton sheets (Bed linen)",
      "One waterproof draw mackintosh or bed mat if necessary",
      "One draw sheet",
      "Pillow slips",
      "One top sheet",
      "Counterpane if necessary",
    ],
    steps: [
      "Perform hand hygiene",
      "Collect and arrange items on the trolley and send them to the bedside",
      "Arrange items in order of use on a chair or bedside/heart table",
      "Place the bottom sheet evenly on the bed",
      "Pull the sheet tight so that there are no creases",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or envelope corners",
      "Pull and tuck the sheet at the sides to prevent creases",
      "Place bed mat or draw mackintosh at the middle portion of the bed",
      "Cover the mackintosh or bed mat with the draw sheet and tuck in at the sides",
      "Put clean pillowcases on the pillows",
      "Place pillows on the bed with open ends away from the entrance",
      "Place the top sheet on the bed with the wrong side uppermost",
      "Fold over at the bottom and tuck in loosely",
      "Place the counterpane loosely over the bed if required",
      "Tuck the counterpane at the bottom end using mitered or envelope corners if required",
      "Fold the top sheet over the counterpane at the top end according to the required open or closed bed",
      "Tuck in the sides under the mattress to prevent creases",
      "Ensure the bed is safe, clean and ready for use",
      "Remove the trolley and chair/heart table",
      "Perform hand hygiene",
    ],
    precautions: [
      "Perform hand hygiene before and after bed making",
      "Use clean linen and keep it away from contaminated surfaces",
      "Do not shake linen because this may disperse microorganisms",
      "Keep clean and used linen separate",
      "Maintain correct body mechanics while making the bed",
      "Ensure the bed is stable and brakes are applied where applicable",
      "Keep the working area free from hazards",
      "Ensure there are no unnecessary wrinkles that may cause discomfort or pressure injury",
      "Follow facility policy for handling and disposal of soiled linen",
    ],
    videoUrl: "https://www.youtube.com/watch?v=K0c9fSd46JA",
    quiz: rgn_032Quiz,
  },

  {
    id: "rgn-033",
    title: "SIMPLE OCCUPIED BED",
    category: "General Nursing (RGN)",
    overview:
      "This is a type of bed made for an in-patient who remains in bed during the procedure. It is used when the patient has difficulty or is unable to get out of bed.",
    purpose: [
      "Conserve the patient's energy",
      "Ensure patient comfort and safety",
      "Maintain cleanliness of the patient's bed",
      "Reduce risk associated with prolonged exposure to soiled or wrinkled linen",
    ],
    indications: [
      "Changing the bottom sheet while the patient remains in bed",
      "Changing bed linen for a patient who cannot safely get out of bed",
      "Changing the bottom sheet from side to side",
      "Changing bed linen from top to bottom when clinically appropriate",
    ],
    equipment: [
      "A trolley with the following items:",
      "Two large cotton sheets (Bed linen)",
      "One waterproof draw mackintosh or bed mat if necessary",
      "One draw sheet",
      "Pillow slips",
      "One top sheet",
      "Counterpane if necessary",
    ],
    steps: [
      "Establish rapport",
      "Explain the procedure to the patient and obtain cooperation",
      "Ensure privacy",
      "Perform hand hygiene",
      "Collect and arrange items on the trolley and bring them to the bedside",
      "Arrange sheets in order of use on chairs or a heart table",
      "Remove or safely reposition equipment attached to the bed as appropriate",
      "Loosen sheets at the side of the bed and remove extra bedding while maintaining patient coverage",
      "Leave the patient with appropriate pillow support and cover with the top sheet",
      "Assist the patient to turn to the side away from the clean linen, using assistance where required",
      "Roll the dirty bottom sheet toward the patient and use gloves when indicated",
      "Place a clean rolled bottom sheet on the exposed portion of the bed",
      "Create a mitered or envelope corner at the ends",
      "Place the bed mat or draw mackintosh and draw sheet at the appropriate portion of the bed",
      "Assist the patient gently onto the clean sheet",
      "Remove the remaining dirty bottom sheet and place it in the appropriate receptacle",
      "Pull the clean bottom sheet tightly and tuck it in",
      "Assist the patient to turn onto the clean side as appropriate",
      "Complete the remaining side of the bed",
      "Spread the top sheet and counterpane if necessary",
      "Cover the patient appropriately",
      "Make the patient comfortable and ensure required items are within reach",
      "Clear equipment and remove the screen",
      "Perform hand hygiene",
      "Document relevant findings and report abnormalities",
    ],
    precautions: [
      "Maintain patient privacy and dignity",
      "Assess the patient's mobility and condition before repositioning",
      "Use adequate assistance when turning or repositioning",
      "Use safe body mechanics",
      "Maintain patient coverage to prevent unnecessary exposure",
      "Keep bed brakes locked during the procedure",
      "Use gloves when contact with body fluids or contaminated linen is anticipated",
      "Do not shake dirty linen",
      "Keep clean linen separate from soiled linen",
      "Check intravenous lines, drains, catheters and other devices before and after repositioning",
      "Avoid wrinkles in linen",
      "Stop and seek assistance if the patient becomes unstable or distressed",
    ],
    videoUrl: "https://www.youtube.com/watch?v=AN9pvC499P4",
    quiz: rgn_033Quiz,
  },

  {
    id: "rgn-034",
    title: "ADMISSION BED",
    category: "General Nursing (RGN)",
    overview:
      "This is an open bed prepared in readiness for immediate admission of a patient. It is arranged to facilitate easy and safe entry of the patient into bed.",
    purpose: [
      "Ensure quick and immediate admission",
      "Provide warmth and comfort",
      "Facilitate safe positioning of the newly admitted patient",
      "Prepare the bed for patients arriving from another clinical area",
    ],
    indications: [
      "New patient admission",
      "Patient returning from another clinical area when an admission bed is required",
      "Emergency admission requiring immediate placement in bed",
      "Preparation of a bed before an expected admission",
    ],
    equipment: [
      "General bed-making requirements",
      "Long mackintosh or waterproof sheet",
      "Two bath blankets or flannelette",
      "Drip stand",
      "Vital signs tray",
      "Oxygen apparatus",
      "Suction machine",
      "Medication tray",
      "Hot water bottle if necessary",
    ],
    steps: [
      "Perform hand hygiene",
      "Collect and arrange items on the trolley and send them to the bedside",
      "Arrange items in order of use on a chair or heart table",
      "Place the bottom sheet evenly on the bed",
      "Pull the sheet tight so that there are no creases",
      "Tuck the sheet evenly under the mattress at the top and bottom using envelope or mitered corners",
      "Place bed mat or draw mackintosh at the middle portion of the bed",
      "Cover the mackintosh with the draw sheet and tuck in at the sides",
      "Put clean pillowcases on the pillows",
      "Place pillows on the bed with open ends away from the entrance",
      "Place long mackintosh over the appropriate area and secure according to facility practice",
      "Place one bath blanket or flannelette over the mackintosh",
      "Place the second bath blanket over the bed as required",
      "Use a hot water bottle only when indicated and according to safety policy",
      "Put on the top bedclothes",
      "Place the counterpane loosely over the top bedclothes if required",
      "Tuck in the bedclothes on the far side",
      "Fold the bedclothes on the side nearest the entrance to facilitate admission",
      "Place required bed accessories appropriately",
      "Ensure oxygen and suction equipment are ready when indicated",
      "Perform hand hygiene",
      "Remove the trolley and chairs",
    ],
    precautions: [
      "Ensure the bed is stable and brakes are applied",
      "Maintain clean technique and infection-prevention precautions",
      "Avoid wrinkles in the linen",
      "Avoid unnecessary exposure of the patient",
      "Use hot water bottles only when indicated and monitor for burn risk",
      "Ensure oxygen and suction equipment are safe and functional when required",
      "Keep the admission pathway clear",
      "Ensure required emergency equipment is accessible",
    ],
    videoUrl: "https://www.youtube.com/watch?v=A-gC3C7uf_s",
    quiz: rgn_034Quiz,
  },

  {
    id: "rgn-035",
    title: "CARDIAC BED",
    category: "General Nursing (RGN)",
    overview:
      "A cardiac bed is a specialized bed arranged in an upright position to provide comfort and relief for a patient experiencing breathing difficulty.",
    purpose: [
      "Prevent unnecessary pressure on the heart and abdominal organs",
      "Relieve dyspnoea",
      "Promote comfort",
      "Provide support in an upright position",
    ],
    indications: [
      "Patients experiencing dyspnoea",
      "Patients requiring an upright or semi-upright position",
      "Patients with cardiac conditions requiring supportive positioning",
      "Patients who obtain improved comfort when sitting upright",
    ],
    equipment: [
      "A trolley with the following items:",
      "Two large cotton sheets (Bed linen)",
      "One waterproof draw mackintosh or bed mat if necessary",
      "One draw sheet",
      "Pillow slips",
      "One top sheet",
      "Counterpane if necessary",
    ],
    steps: [
      "Perform hand hygiene",
      "Collect and arrange items on the trolley and send them to the bedside",
      "Arrange items in order of use on a chair or heart table",
      "Place the bottom sheet evenly on the bed",
      "Pull the sheet tight so that there are no creases",
      "Tuck the sheet evenly under the mattress at the top and bottom using envelope or mitered corners",
      "Place bed mat or draw mackintosh at the middle portion of the bed",
      "Cover mackintosh with draw sheet and tuck in at the sides",
      "Place covered air rings between the mackintosh and draw sheet where indicated",
      "Put clean pillowcases on the pillows",
      "Place or elevate the back rest at the top end of the bed",
      "Arrange pillows in an armchair-like fashion",
      "Place top sheet on bed with the wrong side uppermost and fold the sheet over at the bottom",
      "Place foot rest or sand bags in position",
      "Tuck the sides of the top clothing loosely",
      "Place the heart table with covered pillows in position",
      "Place sputum mug and bell within reach of the patient",
      "Place writing materials within reach of the patient",
      "Clear chairs and trolley",
      "Perform hand hygiene",
    ],
    precautions: [
      "Assess the patient's breathing and tolerance of the position",
      "Avoid positioning that worsens respiratory distress",
      "Ensure the patient is adequately supported with pillows",
      "Keep the bell and essential items within reach",
      "Ensure the bed and back rest are stable",
      "Avoid excessive pressure from pillows or support devices",
      "Maintain patient privacy and comfort",
      "Report worsening dyspnoea or deterioration promptly",
    ],
    videoUrl: "https://www.youtube.com/watch?v=AdkoFiFrz7o",
    quiz: rgn_035Quiz,
  },

  {
    id: "rgn-036",
    title: "OPERATION BED",
    category: "General Nursing (RGN)",
    overview:
      "It is a special bed prepared to receive a patient returning from theatre after a surgical procedure has been performed.",
    purpose: [
      "Facilitate quick and safe reception of the patient from theatre",
      "Protect linen from body discharges",
      "Provide warmth and comfort",
      "Ensure equipment required for immediate post-operative care is available",
    ],
    indications: [
      "Patient returning from theatre after surgery",
      "Patient requiring immediate post-operative nursing care",
      "Patient returning after general or regional anaesthesia",
      "Patients requiring close observation after an operative procedure",
    ],
    equipment: [
      "A trolley with the following items:",
      "Two large cotton sheets (Bed linen)",
      "One waterproof draw mackintosh or bed mat if necessary",
      "One draw sheet",
      "Pillow slips",
      "One top sheet",
      "Counterpane if necessary",
      "Hot water bottles",
      "Vital signs tray",
      "Medication tray",
      "Post-anaesthetic tray",
      "Observation chart",
      "Drip stand",
      "Oxygen apparatus",
      "Suction machine",
    ],
    steps: [
      "Perform hand hygiene",
      "Collect and arrange items on the trolley and send them to the bedside",
      "Arrange items in order of use on a chair or heart table",
      "Place the bottom sheet evenly on the bed",
      "Pull the sheet tight so that there are no creases",
      "Tuck the sheet evenly under the mattress at the top and bottom using envelope or mitered corners",
      "Place bed mat or draw mackintosh at the middle portion of the bed",
      "Cover the mackintosh with the draw sheet and tuck in at the sides",
      "Place protective dressing towel at the top of the bed towards the sides",
      "Leave pillow on the chair by the bed",
      "Place hot water bottles on the bed before the patient's arrival when required",
      "Spread blanket on the bed",
      "Place top sheet with the wrong side uppermost and turn back the bottom end",
      "Fold the top bed clothes at the open side in three parts over the bed for easy admission",
      "Place a post-anaesthetic tray by the bedside",
      "Arrange other bed accessories by the bedside including drip stand, bed rails, vital signs tray, medication tray, suction machine and oxygen apparatus",
      "Remove hot water bottles before receiving the patient",
      "Perform hand hygiene",
    ],
    precautions: [
      "Remove hot water bottles before receiving the patient",
      "Ensure oxygen and suction equipment are available when indicated",
      "Ensure bed rails are available and used according to patient condition",
      "Maintain warmth without causing overheating",
      "Keep emergency and post-anaesthetic equipment accessible",
      "Ensure the bed is stable and brakes are applied",
      "Maintain privacy and dignity",
      "Observe the patient closely on arrival and report abnormalities promptly",
    ],
    videoUrl: "https://www.youtube.com/watch?v=jtXvhgaV08M",
    quiz: rgn_036Quiz,
  },

  {
    id: "rgn-037",
    title: "FRACTURE BED",
    category: "General Nursing (RGN)",
    overview:
      "This is a special bed with a firm base or support for nursing patients with fractures. The bed may have an overhead frame for traction apparatus and trapeze to aid lifting, exercise and movement.",
    purpose: [
      "Help maintain appropriate alignment of the fracture and support healing",
      "Prevent further injury",
      "Minimize pain",
      "Provide firm support for the patient",
      "Facilitate safe positioning and movement",
    ],
    indications: [
      "Patients with fractures requiring bed-based nursing care",
      "Patients requiring firm mattress support",
      "Patients receiving prescribed traction",
      "Patients requiring assistance with positioning or movement after fracture",
    ],
    equipment: [
      "A trolley with the following items:",
      "Two large cotton sheets (Bed linen)",
      "One waterproof draw mackintosh or bed mat if necessary",
      "One draw sheet",
      "Pillow slips",
      "One top sheet",
      "Counterpane if necessary",
      "Fracture boards",
      "Foot board or sand bags",
      "Traction or trapeze accessories if prescribed",
    ],
    steps: [
      "Perform hand hygiene",
      "Collect and arrange items on the trolley and send them to the bedside",
      "Arrange items in order of use on chairs or heart table",
      "Place fracture boards under the mattress to provide firm support and prevent sagging",
      "Place bottom sheet evenly on the bed",
      "Pull sheet tight so that there are no creases",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or envelope corners",
      "Pull and tuck sheet at the sides to prevent creases",
      "Place bed mat or draw mackintosh at the middle portion of the bed",
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
      "Place small mackintosh and dressing towel at the area where the fracture is located",
      "Put clean pillowcases on the pillows",
      "Place pillows on the bed with open ends away from the entrance",
      "Place top sheet on the bed with the wrong side uppermost",
      "Fold over at the bottom and tuck in loosely",
      "Place bed cover and counterpane loosely over the bed if necessary",
      "Fold over top bed clothing at the bottom end",
      "Place a foot board or sand bags at the foot end of the bed",
      "Tuck sheets loosely at the sides",
      "Attach prescribed bed accessories",
      "Remove trolley and chair or heart table",
      "Perform hand hygiene",
    ],
    precautions: [
      "Follow the prescribed fracture and traction management plan",
      "Avoid unnecessary movement of the fractured limb",
      "Maintain alignment of the affected body part",
      "Use adequate assistance when repositioning the patient",
      "Check traction equipment for correct positioning when applicable",
      "Do not alter prescribed traction weights without authorization",
      "Monitor circulation, sensation and movement as appropriate",
      "Avoid wrinkles and pressure points in the linen",
      "Maintain patient privacy and comfort",
      "Report increasing pain, swelling, colour change, numbness or other concerning findings promptly",
    ],
    quiz: rgn_037Quiz,
  },

  {
    id: "rgn-038",
    title: "DIVIDED BED",
    category: "General Nursing (RGN)",
    overview:
      "A divided bed is a special bed in which the top linen is separated into two parts with the aid of a bed cradle to create a visual window. It helps the nurse visualize a particular part of the body requiring regular observation without unnecessarily disturbing the patient.",
    purpose: [
      "Facilitate easy assessment of a body part",
      "Keep the affected body part in a stable position",
      "Lift the weight of the bed clothing off the patient",
      "Protect injured areas from unnecessary pressure",
    ],
    indications: [
      "Patients with burns requiring regular observation",
      "Patients with amputations requiring regular observation",
      "Patients with wounds requiring frequent inspection",
      "Patients with an injured body part that should not be covered by the weight of bedclothes",
    ],
    equipment: [
      "A trolley with the following items:",
      "Two large cotton sheets (Bed linen)",
      "One waterproof draw mackintosh or bed mat if necessary",
      "One draw sheet",
      "Pillow slips",
      "One top sheet",
      "Counterpane if necessary",
      "Bed cradle",
      "Extra mackintosh and dressing towel or bed linen",
    ],
    steps: [
      "Perform hand hygiene",
      "Collect and arrange items on the trolley and send them to the bedside",
      "Arrange items in order of use on chairs or heart table",
      "Place bottom sheet evenly on the bed",
      "Pull sheet tight so that there are no creases",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or envelope corners",
      "Pull and tuck the sheet at the sides to prevent creases",
      "Place bed mat or draw mackintosh at the middle portion of the bed",
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
      "Place extra mackintosh and dressing towel or bed linen at the site where the injury is located",
      "Place the bed cradle at the middle portion of the bed",
      "Put clean pillowcases on the pillows",
      "Place pillows on the bed with open ends away from the entrance",
      "Place the first top sheet at the upper half of the cradle and fold it over",
      "Place the second top sheet at the lower half of the cradle and fold it over",
      "Place counterpane if necessary in the same fashion as the top sheets",
      "Ensure that the two sections of the top bed clothing overlap appropriately",
      "Create an opening to aid observation of the affected body part",
      "Tuck in the sides under the mattress loosely",
      "Remove trolley and chair or heart table",
      "Perform hand hygiene",
    ],
    precautions: [
      "Ensure the bed cradle is stable and correctly positioned",
      "Avoid allowing bedclothes to rest directly on the injured area",
      "Maintain patient privacy while providing the required observation window",
      "Avoid unnecessary movement of the affected body part",
      "Keep the opening appropriate to the area requiring observation",
      "Maintain clean linen and infection-prevention measures",
      "Check the affected area regularly according to the care plan",
      "Report changes in the affected area promptly",
      "Ensure the patient remains comfortable and adequately covered",
    ],
    quiz: rgn_038Quiz,
  },
];
