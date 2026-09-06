import type { Procedure } from "../../procedureTypes";
import type { ProcedureQuizQuestion } from "../../procedureTypes";

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

const rgn_021Quiz: ProcedureQuizQuestion[] = [
  q(
    "What should be confirmed before pre-operative preparation begins?",
    [
      "The procedure and operative site",
      "The patient's meal preference",
      "The visitor list",
      "The ward cleaning schedule",
    ],
    "The procedure and operative site",
    "Confirming the procedure and operative site supports safe surgical preparation and helps prevent wrong-patient or wrong-site errors."
  ),
  q(
    "Which item helps protect the bed during site preparation?",
    [
      "Mackintosh and dressing towel",
      "Thermometer only",
      "Prescription pad",
      "Pill crusher",
    ],
    "Mackintosh and dressing towel",
    "A mackintosh and dressing towel help protect the bed and linen from moisture and contamination during preparation."
  ),
  q(
    "Why are patient accessories and dentures removed before theatre when indicated?",
    [
      "To promote safety during the procedure",
      "To improve appetite",
      "To reduce documentation",
      "To increase mobility",
    ],
    "To promote safety during the procedure",
    "Removing accessories and dentures when indicated reduces risks during anaesthesia and surgery."
  ),
  q(
    "Which assessment should be recorded before sending the patient to theatre?",
    [
      "Vital signs",
      "Room temperature only",
      "Visitor count",
      "Meal intake only",
    ],
    "Vital signs",
    "Pre-operative vital signs provide a baseline and help identify changes in the patient's condition."
  ),
  q(
    "What should the nurse verify about investigations before theatre?",
    [
      "Required laboratory results are available",
      "Only the patient's blood group is written on the wall",
      "All visitors have arrived",
      "The patient's locker is empty",
    ],
    "Required laboratory results are available",
    "Required investigations and results should be available and reviewed according to the operative plan."
  ),
  q(
    "What is an important infection-prevention action after using the preparation trolley?",
    [
      "Decontaminate the trolley and perform hand hygiene",
      "Leave used items on the trolley",
      "Reuse contaminated gauze",
      "Skip hand hygiene if gloves were worn",
    ],
    "Decontaminate the trolley and perform hand hygiene",
    "Cleaning reusable equipment and performing hand hygiene help reduce transmission of microorganisms."
  ),
  q(
    "What should accompany the patient during handover to theatre?",
    [
      "Medical records and required items",
      "Only the patient's clothing",
      "Only the bed linen",
      "Only the visitor's phone",
    ],
    "Medical records and required items",
    "Relevant records, investigations, medications and required items should accompany the patient according to facility protocol."
  ),
  q(
    "What should the nurse do if the patient is not clinically ready for theatre?",
    [
      "Escalate the concern and follow the authorized clinical plan",
      "Send the patient immediately without review",
      "Ignore abnormal findings",
      "Cancel the operation independently",
    ],
    "Escalate the concern and follow the authorized clinical plan",
    "Abnormal findings should be escalated to the appropriate clinician rather than ignored."
  ),
  q(
    "Why is documentation part of pre-operative preparation?",
    [
      "It provides a record of care, findings and handover",
      "It replaces patient identification",
      "It removes the need for consent",
      "It prevents all surgical complications",
    ],
    "It provides a record of care, findings and handover",
    "Accurate documentation supports continuity, accountability and safe communication."
  ),
  q(
    "What is the final safety principle when transferring a patient to theatre?",
    [
      "Maintain correct identification and safe handover",
      "Transfer without checking records",
      "Send the patient alone",
      "Remove all monitoring regardless of condition",
    ],
    "Maintain correct identification and safe handover",
    "Correct identification, clinical safety and structured handover are essential when transferring a patient to theatre."
  ),
];

const rgn_022Quiz: ProcedureQuizQuestion[] = [
  q(
    "What type of water is used for tepid sponging?",
    ["Lukewarm water", "Ice water", "Boiling water", "Very cold water"],
    "Lukewarm water",
    "Tepid sponging uses lukewarm water to assist controlled heat loss."
  ),
  q(
    "What is the stated water temperature range in this procedure?",
    ["27–37°C", "10–15°C", "40–45°C", "50–60°C"],
    "27–37°C",
    "The procedure specifies tepid water between 27–37°C."
  ),
  q(
    "What should be checked before beginning tepid sponging?",
    [
      "The patient's temperature",
      "The visitor's temperature",
      "The ward clock only",
      "The patient's meal order",
    ],
    "The patient's temperature",
    "The patient's temperature should be assessed before beginning and monitored during the procedure."
  ),
  q(
    "Why are wet towels placed in the axillae and groin?",
    [
      "To support heat loss from areas used during the procedure",
      "To increase body temperature",
      "To dry the skin",
      "To prevent all sweating",
    ],
    "To support heat loss from areas used during the procedure",
    "These areas can assist heat exchange during tepid sponging."
  ),
  q(
    "What should be done with wet towels during the procedure?",
    [
      "Change them frequently to keep them tepid",
      "Leave them until completely dry",
      "Heat them continuously",
      "Freeze them before reuse",
    ],
    "Change them frequently to keep them tepid",
    "Towels should remain appropriately tepid rather than becoming excessively cold or warm."
  ),
  q(
    "How much should the temperature be reduced at a time according to the procedure?",
    ["Not more than 1°C", "Exactly 5°C", "At least 4°C", "10°C"],
    "Not more than 1°C",
    "The procedure states that the temperature should be reduced gradually by not more than 1°C at a time."
  ),
  q(
    "What should be done after the sponging period?",
    [
      "Recheck and record the temperature",
      "Ignore the temperature",
      "Immediately discharge the patient",
      "Remove all documentation",
    ],
    "Recheck and record the temperature",
    "Reassessment determines the response to the procedure."
  ),
  q(
    "Which action helps prevent chilling during tepid sponging?",
    [
      "Keep the patient appropriately covered and expose only areas being sponged",
      "Leave the patient completely uncovered",
      "Use ice water",
      "Open all windows",
    ],
    "Keep the patient appropriately covered and expose only areas being sponged",
    "Maintaining privacy and covering unexposed areas helps prevent unnecessary chilling."
  ),
  q(
    "What should be done if the patient cannot tolerate the procedure?",
    [
      "Stop or modify the procedure and report the concern appropriately",
      "Continue regardless of symptoms",
      "Increase the water temperature sharply",
      "Ignore the patient",
    ],
    "Stop or modify the procedure and report the concern appropriately",
    "Patient tolerance and clinical condition should guide continuation of the procedure."
  ),
  q(
    "What should be documented after tepid sponging?",
    [
      "The procedure, temperature readings and findings",
      "Only the patient's name",
      "Only the time of lunch",
      "Nothing unless the patient asks",
    ],
    "The procedure, temperature readings and findings",
    "Documentation should include the procedure, temperature observations and relevant findings."
  ),
];

const rgn_023Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is the main purpose of a ward round?",
    [
      "To review patients and coordinate management",
      "To distribute meals",
      "To clean the ward",
      "To count visitors",
    ],
    "To review patients and coordinate management",
    "Ward rounds facilitate multidisciplinary review, decision-making and care planning."
  ),
  q(
    "What should be done with patient records before the round?",
    [
      "Ensure they are up to date and arranged appropriately",
      "Remove all records from the ward",
      "Discard old observations",
      "Leave them unfiled",
    ],
    "Ensure they are up to date and arranged appropriately",
    "Accurate and accessible records support effective ward rounds."
  ),
  q(
    "What should the nurse present during the ward round?",
    [
      "Patient problems, concerns and progress",
      "Only the patient's meal preference",
      "Only the visitor list",
      "Only the room number",
    ],
    "Patient problems, concerns and progress",
    "The nurse provides relevant information about the patient's condition, concerns and progress."
  ),
  q(
    "Why should the ward environment be prepared before rounds?",
    [
      "To support safe and efficient review of patients",
      "To prevent documentation",
      "To delay the clinical team",
      "To keep patients asleep",
    ],
    "To support safe and efficient review of patients",
    "A prepared environment promotes an organized and safe ward round."
  ),
  q(
    "What opportunity should patients be given during rounds?",
    [
      "An opportunity to ask questions",
      "An opportunity to alter medical orders independently",
      "An opportunity to remove records",
      "An opportunity to discharge themselves",
    ],
    "An opportunity to ask questions",
    "Patients should be given appropriate opportunities to ask questions and participate in their care."
  ),
  q(
    "What should the nurse record during rounds?",
    [
      "Changes, directives and assigned tasks",
      "Only the names of visitors",
      "Only the ward temperature",
      "Nothing until the next shift",
    ],
    "Changes, directives and assigned tasks",
    "Important changes, instructions and assigned responsibilities should be documented."
  ),
  q(
    "Why are investigative request forms kept available?",
    [
      "They may be needed for investigations ordered during care",
      "They replace patient identification",
      "They are used for meal ordering",
      "They are used to clean equipment",
    ],
    "They may be needed for investigations ordered during care",
    "Investigations may be requested during a ward round and appropriate forms may therefore be required."
  ),
  q(
    "Who benefits from effective ward rounds?",
    [
      "Patients and the multidisciplinary healthcare team",
      "Only visitors",
      "Only porters",
      "Only administrative staff",
    ],
    "Patients and the multidisciplinary healthcare team",
    "Effective ward rounds improve communication, planning and continuity of care."
  ),
  q(
    "What should happen to patient notes after the round?",
    [
      "Return them to the proper place securely",
      "Leave them on the bedside floor",
      "Give them to visitors",
      "Discard them",
    ],
    "Return them to the proper place securely",
    "Patient records must be kept secure and accessible to authorized healthcare workers."
  ),
  q(
    "What is a key nursing responsibility during ward rounds?",
    [
      "Accurate communication and documentation",
      "Making unauthorized prescriptions",
      "Changing diagnoses independently",
      "Ignoring patient concerns",
    ],
    "Accurate communication and documentation",
    "The nurse contributes accurate clinical information and records relevant decisions and instructions."
  ),
];

const rgn_024Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is the main aim of establishing rapport?",
    [
      "To build a therapeutic relationship and trust",
      "To shorten every interaction",
      "To avoid patient questions",
      "To replace clinical assessment",
    ],
    "To build a therapeutic relationship and trust",
    "Rapport supports therapeutic communication and trust between the nurse and patient."
  ),
  q(
    "How should the nurse address the patient?",
    [
      "Using the patient's preferred name or appropriate title",
      "Using a nickname without permission",
      "By bed number only",
      "By diagnosis only",
    ],
    "Using the patient's preferred name or appropriate title",
    "Respectful forms of address promote dignity and therapeutic communication."
  ),
  q(
    "What type of language should be used?",
    [
      "Simple and clear language",
      "Unexplained technical jargon",
      "Threatening language",
      "Ambiguous language",
    ],
    "Simple and clear language",
    "Clear language improves understanding and communication."
  ),
  q(
    "Why is confidentiality important when establishing rapport?",
    [
      "It helps protect privacy and supports trust",
      "It prevents all communication",
      "It eliminates the need for consent",
      "It allows information to be shared freely",
    ],
    "It helps protect privacy and supports trust",
    "Confidentiality protects patient privacy and strengthens trust."
  ),
  q(
    "What communication behavior supports rapport?",
    [
      "Active listening and appropriate eye contact",
      "Interrupting constantly",
      "Ignoring the patient",
      "Avoiding all communication",
    ],
    "Active listening and appropriate eye contact",
    "Active listening and appropriate non-verbal communication support therapeutic relationships."
  ),
  q(
    "What should the nurse encourage the patient to do?",
    [
      "Express needs and concerns",
      "Hide important symptoms",
      "Avoid questions",
      "Speak only to other patients",
    ],
    "Express needs and concerns",
    "Patients should be encouraged to communicate their needs and concerns."
  ),
  q(
    "How should inappropriate requests be managed?",
    [
      "Firmly and professionally within nursing boundaries",
      "By agreeing to everything",
      "By threatening the patient",
      "By ending all care",
    ],
    "Firmly and professionally within nursing boundaries",
    "Professional boundaries should be maintained while continuing therapeutic care."
  ),
  q(
    "Why should the nurse explain what the patient can expect from nurses?",
    [
      "To clarify the care relationship and reduce uncertainty",
      "To avoid patient participation",
      "To replace the care plan",
      "To prevent questions",
    ],
    "To clarify the care relationship and reduce uncertainty",
    "Clear explanations help establish expectations and reduce anxiety."
  ),
  q(
    "What should the nurse do after the interaction?",
    [
      "Express appreciation for the patient's cooperation",
      "Ignore the patient",
      "Share private information",
      "Discuss the patient publicly",
    ],
    "Express appreciation for the patient's cooperation",
    "Appreciating cooperation helps maintain a respectful therapeutic interaction."
  ),
  q(
    "What is a professional boundary in rapport building?",
    [
      "Maintaining a respectful therapeutic relationship",
      "Becoming personally dependent on the patient",
      "Sharing confidential information",
      "Accepting inappropriate requests",
    ],
    "Maintaining a respectful therapeutic relationship",
    "Professional boundaries protect both the patient and nurse."
  ),
];

const rgn_025Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is the main purpose of orienting an ambulant patient to the ward?",
    [
      "To help the patient adapt safely to the ward environment",
      "To replace all patient education",
      "To prevent mobility",
      "To avoid introducing staff",
    ],
    "To help the patient adapt safely to the ward environment",
    "Orientation helps patients understand their environment, routines and available support."
  ),
  q(
    "What should the nurse identify first about the ward?",
    [
      "The ward name and relevant environment",
      "The nurse's personal address",
      "Another patient's diagnosis",
      "The hospital's payroll",
    ],
    "The ward name and relevant environment",
    "Patients should be introduced to their ward environment and relevant routines."
  ),
  q(
    "Which area should the patient be shown?",
    [
      "The nurse's station",
      "Only the staff changing room",
      "The pharmacy store only",
      "The operating theatre only",
    ],
    "The nurse's station",
    "Knowing the nurse's station helps the patient know where to seek assistance."
  ),
  q(
    "Why should the patient be shown the bathroom and toilet?",
    [
      "To support safe and independent use of the facilities",
      "To replace hygiene teaching",
      "To prevent questions",
      "To restrict mobility",
    ],
    "To support safe and independent use of the facilities",
    "Orientation to sanitary facilities promotes safe use of the ward environment."
  ),
  q(
    "What should the patient be told about ward routines?",
    [
      "Relevant routines and activities",
      "Only staff salaries",
      "Only other patients' diagnoses",
      "Nothing about the ward",
    ],
    "Relevant routines and activities",
    "Knowing ward routines helps patients adapt to their new environment."
  ),
  q(
    "Who should the patient be told to contact for concerns?",
    [
      "The appropriate ward staff member",
      "Any visitor",
      "Another patient's relative",
      "A random person outside the ward",
    ],
    "The appropriate ward staff member",
    "Patients should know who to approach when they need assistance."
  ),
  q(
    "What should the nurse do if the patient has questions?",
    [
      "Encourage questions and clarify them",
      "Tell the patient not to ask",
      "Ignore the questions",
      "Refer every question to another patient",
    ],
    "Encourage questions and clarify them",
    "Questions provide an opportunity to identify and address patient concerns."
  ),
  q(
    "Why is introducing the patient to staff useful?",
    [
      "It helps the patient know who can provide assistance",
      "It prevents communication",
      "It replaces identification",
      "It is only for visitors",
    ],
    "It helps the patient know who can provide assistance",
    "Introducing relevant staff supports communication and orientation."
  ),
  q(
    "What should be done after orientation?",
    [
      "Thank the patient and ensure they are safely settled",
      "Leave the patient standing",
      "Send the patient outside the ward",
      "Remove the patient's belongings",
    ],
    "Thank the patient and ensure they are safely settled",
    "The patient should be safely settled after orientation."
  ),
  q(
    "What should be reported after orientation when required?",
    [
      "Relevant concerns or findings to the appropriate officer",
      "Only the patient's meal choice",
      "Nothing under any circumstance",
      "Only visitor complaints",
    ],
    "Relevant concerns or findings to the appropriate officer",
    "Relevant concerns identified during orientation should be communicated appropriately."
  ),
];

const rgn_026Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is a transfer-in?",
    [
      "Receiving a patient from another unit or place of admission",
      "Discharging a patient home",
      "Moving equipment between rooms",
      "Sending records to storage",
    ],
    "Receiving a patient from another unit or place of admission",
    "Transfer-in involves receiving a patient into a new unit or department."
  ),
  q(
    "What should be confirmed before receiving a transfer?",
    [
      "The transfer with the referring unit or hospital",
      "The visitor's identity only",
      "The patient's meal preference",
      "The ward television schedule",
    ],
    "The transfer with the referring unit or hospital",
    "Confirmation allows the receiving unit to prepare appropriately."
  ),
  q(
    "What equipment may need to be prepared for a transfer-in?",
    [
      "Oxygen and suction equipment when indicated",
      "Only a meal tray",
      "Only a visitor chair",
      "Only a blanket",
    ],
    "Oxygen and suction equipment when indicated",
    "Equipment should be prepared according to the patient's condition and anticipated needs."
  ),
  q(
    "What is important when confirming patient identity?",
    [
      "Use reliable identifiers and the accompanying handover",
      "Use the bed number alone",
      "Ask another patient",
      "Skip identification",
    ],
    "Use reliable identifiers and the accompanying handover",
    "Reliable patient identification is essential during transfers."
  ),
  q(
    "What should be done with the transfer notes?",
    [
      "Receive and review them as part of handover",
      "Discard them",
      "Give them to visitors",
      "Leave them unread",
    ],
    "Receive and review them as part of handover",
    "Transfer documentation contains important information for continuity of care."
  ),
  q(
    "What should the nurse assess immediately after admission to the receiving unit?",
    [
      "The patient's current condition and safety",
      "Only the patient's clothing",
      "Only the visitor count",
      "Only the room temperature",
    ],
    "The patient's current condition and safety",
    "The receiving nurse should assess the patient's condition and immediate safety."
  ),
  q(
    "What should be checked about tubes and drains?",
    [
      "That they are present, secure and appropriately connected",
      "That they are removed routinely",
      "That they are ignored",
      "That they are disconnected without assessment",
    ],
    "That they are present, secure and appropriately connected",
    "Lines, tubes and drains should be assessed for security and appropriate connection."
  ),
  q(
    "Why is orientation sometimes repeated after transfer-in?",
    [
      "The patient may need to understand the new unit's environment and routines",
      "Because records are unnecessary",
      "Because staff should not communicate",
      "Because transfers eliminate patient rights",
    ],
    "The patient may need to understand the new unit's environment and routines",
    "A new unit may have different routines and facilities."
  ),
  q(
    "What should be documented after transfer-in?",
    [
      "Assessment, findings, treatment and handover information",
      "Only the patient's name",
      "Only the transport method",
      "Nothing",
    ],
    "Assessment, findings, treatment and handover information",
    "Documentation supports continuity and accountability."
  ),
  q(
    "What is the overall goal of transfer-in care?",
    [
      "Safe continuity of care in the receiving unit",
      "Rapid movement without assessment",
      "Avoiding communication",
      "Delaying treatment",
    ],
    "Safe continuity of care in the receiving unit",
    "The primary goal is safe continuation of patient care."
  ),
];

const rgn_027Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is a transfer-out?",
    [
      "Moving a patient from the current unit to another authorized destination",
      "Admitting a new patient",
      "Moving a bed only",
      "Changing a patient's meal",
    ],
    "Moving a patient from the current unit to another authorized destination",
    "Transfer-out involves moving a patient to another authorized unit, department or facility."
  ),
  q(
    "What should be confirmed before transfer-out?",
    [
      "The authorized transfer order",
      "The visitor's permission",
      "The patient's meal",
      "The ward television schedule",
    ],
    "The authorized transfer order",
    "The transfer should be authorized before the patient is moved."
  ),
  q(
    "Why should the receiving unit be informed before transfer?",
    [
      "To ensure it is prepared to receive the patient",
      "To delay the transfer",
      "To replace documentation",
      "To avoid handover",
    ],
    "To ensure it is prepared to receive the patient",
    "Prior communication allows the receiving unit to prepare for the patient's needs."
  ),
  q(
    "What should be assessed before moving the patient?",
    [
      "The patient's current clinical condition",
      "Only the patient's belongings",
      "Only the ward temperature",
      "Only the visitor list",
    ],
    "The patient's current clinical condition",
    "The patient's condition determines the safest means and timing of transfer."
  ),
  q(
    "What should accompany the patient when required?",
    [
      "Relevant records, medications and investigation results",
      "Only personal clothing",
      "Only a meal tray",
      "Only a blanket",
    ],
    "Relevant records, medications and investigation results",
    "Relevant clinical information should accompany the patient according to facility policy."
  ),
  q(
    "What is important when selecting transport?",
    [
      "Use a safe means appropriate to the patient's condition",
      "Always use a wheelchair",
      "Always make the patient walk",
      "Use any available method regardless of condition",
    ],
    "Use a safe means appropriate to the patient's condition",
    "Transport should match the patient's clinical condition and mobility needs."
  ),
  q(
    "What should be done during handover?",
    [
      "Transfer responsibility with relevant clinical information",
      "Give no information",
      "Hand over only the patient's clothes",
      "Leave without notifying the receiving nurse",
    ],
    "Transfer responsibility with relevant clinical information",
    "Effective handover communicates the patient's condition, treatment and ongoing needs."
  ),
  q(
    "What should happen to the vacated bed?",
    [
      "Remove used linen and decontaminate it according to policy",
      "Leave it unchanged",
      "Give it to visitors",
      "Store contaminated linen on the bed",
    ],
    "Remove used linen and decontaminate it according to policy",
    "The bed and reusable equipment should be appropriately cleaned and decontaminated before reuse."
  ),
  q(
    "Why is documentation important during transfer-out?",
    [
      "It supports continuity, accountability and communication",
      "It replaces clinical assessment",
      "It prevents handover",
      "It is only administrative decoration",
    ],
    "It supports continuity, accountability and communication",
    "Accurate documentation supports safe continuity of care."
  ),
  q(
    "What is the safest principle when transferring a patient?",
    [
      "Maintain patient identification, clinical safety and clear handover",
      "Move the patient as quickly as possible regardless of condition",
      "Skip the receiving team's confirmation",
      "Send the patient without records",
    ],
    "Maintain patient identification, clinical safety and clear handover",
    "Safe transfer requires identification, clinical assessment and effective handover."
  ),
];

const rgn_028Quiz: ProcedureQuizQuestion[] = [
  q(
    "When is hand and foot care commonly performed?",
    [
      "After the patient's bath when appropriate",
      "Only before admission",
      "Only during surgery",
      "Only after discharge",
    ],
    "After the patient's bath when appropriate",
    "Hand and foot care is commonly incorporated into routine personal hygiene."
  ),
  q(
    "Why may hands or feet be soaked before nail care?",
    [
      "To soften the nails",
      "To increase swelling",
      "To sterilize the patient",
      "To cause numbness",
    ],
    "To soften the nails",
    "Soaking can soften nails and make nail care easier."
  ),
  q(
    "What should be assessed before nail care?",
    [
      "Skin condition and abnormalities",
      "Only the patient's height",
      "Only the patient's appetite",
      "Only the visitor list",
    ],
    "Skin condition and abnormalities",
    "Inspection can identify sores, swelling or other abnormalities requiring attention."
  ),
  q(
    "How should toenails generally be cut to reduce the risk of ingrowing?",
    [
      "Across the nail",
      "Deep into both corners",
      "As short as possible into the skin",
      "By tearing them",
    ],
    "Across the nail",
    "Cutting toenails across rather than deeply into the corners helps reduce the risk of ingrowing nails."
  ),
  q(
    "Where should nail clippings be placed?",
    [
      "In a receiver or appropriate waste container",
      "On the patient's bed",
      "On the floor",
      "In the wash basin",
    ],
    "In a receiver or appropriate waste container",
    "Nail clippings should be collected and disposed of appropriately."
  ),
  q(
    "Why is warm water used?",
    [
      "To support cleansing and soften nails",
      "To burn the skin",
      "To freeze the nails",
      "To replace hand hygiene",
    ],
    "To support cleansing and soften nails",
    "Warm water supports cleansing and helps soften nails."
  ),
  q(
    "What should be done after washing the hands and feet?",
    [
      "Rinse and dry them thoroughly",
      "Leave them wet",
      "Cover them with contaminated linen",
      "Apply antiseptic without drying",
    ],
    "Rinse and dry them thoroughly",
    "Thorough drying helps maintain skin integrity and comfort."
  ),
  q(
    "Why should the skin be inspected during the procedure?",
    [
      "To identify sores, swelling or other abnormalities",
      "To diagnose every disease",
      "To avoid speaking to the patient",
      "To replace vital signs",
    ],
    "To identify sores, swelling or other abnormalities",
    "Inspection helps identify abnormalities that may require further assessment."
  ),
  q(
    "What should be done with used equipment?",
    [
      "Dispose of waste appropriately and decontaminate reusable equipment",
      "Return dirty equipment to storage",
      "Reuse contaminated water",
      "Leave instruments at the bedside",
    ],
    "Dispose of waste appropriately and decontaminate reusable equipment",
    "Reusable equipment should be appropriately cleaned and decontaminated."
  ),
  q(
    "What should be documented after hand and foot care?",
    [
      "The procedure and relevant findings",
      "Only the patient's name",
      "Nothing",
      "Only the visitor's name",
    ],
    "The procedure and relevant findings",
    "Relevant care and findings should be documented."
  ),
];

const rgn_029Quiz: ProcedureQuizQuestion[] = [
  q(
    "What does intake and output monitoring measure?",
    [
      "Fluids entering and leaving the body",
      "Only oral food",
      "Only urine color",
      "Only body temperature",
    ],
    "Fluids entering and leaving the body",
    "Intake and output monitoring records fluid entering and leaving the body."
  ),
  q(
    "Over what period is the fluid balance commonly totaled in this procedure?",
    ["24 hours", "1 hour", "5 minutes", "7 days"],
    "24 hours",
    "The procedure describes a 24-hour fluid balance."
  ),
  q(
    "Which is an example of fluid intake?",
    [
      "Oral or intravenous fluid",
      "Urine",
      "Vomitus",
      "Diarrhoeal stool",
    ],
    "Oral or intravenous fluid",
    "Oral and intravenous fluids are examples of intake."
  ),
  q(
    "Which is an example of fluid output?",
    ["Urine", "Oral water", "Intravenous fluid", "Enteral feed given"],
    "Urine",
    "Urine is a measurable form of fluid output."
  ),
  q(
    "In what unit should fluid measurements be recorded?",
    ["Milliliters", "Kilograms", "Centimeters", "Degrees Celsius"],
    "Milliliters",
    "Fluid measurements are recorded in milliliters."
  ),
  q(
    "How is fluid retained determined in the procedure?",
    [
      "Intake minus output",
      "Output minus temperature",
      "Weight minus height",
      "Pulse minus respiration",
    ],
    "Intake minus output",
    "The procedure calculates fluid retained as intake minus output."
  ),
  q(
    "What should be done when urine output is abnormally low?",
    [
      "Inform the nurse in charge or doctor promptly",
      "Ignore it until discharge",
      "Increase fluids without an order",
      "Delete the observation",
    ],
    "Inform the nurse in charge or doctor promptly",
    "Abnormally low output may indicate a clinically important problem and should be escalated."
  ),
  q(
    "Why should intake and output be recorded with date and time?",
    [
      "To maintain an accurate chronological fluid record",
      "To make the chart longer",
      "To replace patient identification",
      "To avoid measuring fluids",
    ],
    "To maintain an accurate chronological fluid record",
    "Time-stamped measurements allow accurate monitoring of fluid balance."
  ),
  q(
    "Which equipment can measure urine output?",
    [
      "A measuring jug",
      "A thermometer",
      "A stethoscope",
      "A pulse oximeter",
    ],
    "A measuring jug",
    "A measuring jug can be used to measure urine volume."
  ),
  q(
    "Why is accurate fluid balance important?",
    [
      "It helps monitor hydration and fluid overload",
      "It replaces all clinical assessments",
      "It diagnoses every condition",
      "It eliminates the need for vital signs",
    ],
    "It helps monitor hydration and fluid overload",
    "Fluid balance monitoring assists assessment of hydration status and possible fluid excess or deficit."
  ),
];

export const rgnBatch03: Procedure[] = [
  {
    id: "rgn-021",
    title: "PRE-OPERATIVE PREPARATION OF A PATIENT",
    category: "General Nursing (RGN)",
    overview:
      "This is the care given to patients before a surgical procedure. The nurse/midwife has a role to ensure that the patient is physically, psychologically and physiologically fit for the intended procedure.",
    purpose: [
      "Relieve patient’s anxiety",
      "Ensure successful operation",
      "Prevent complications after surgery",
    ],
    indications: [
      "Patient scheduled for an operative or surgical procedure",
      "Preparation required before transfer to theatre",
      "Pre-operative investigations, identification and safety checks are required",
    ],
    equipment: [
      "A trolley containing the following:",
      "Vital signs tray",
      "Theatre gown",
      "Name tag",
      "Mackintosh and dressing towel",
      "Sterile gauze in a gallipot",
      "Antiseptic solution",
      "Bowl of water",
      "Soap and sponge",
      "Sterile drape",
      "Adhesive strip",
      "Urinal/bedpan",
    ],
    steps: [
      "Confirm the type of surgical procedure and site against physician/doctor’s order",
      "Establish rapport with patient (Refer to steps)",
      "Prepare and send trolley to bedside",
      "Provide privacy",
      "Ask patient to empty bladder/bowel",
      "Place patient into a desirable position",
      "Expose the site to be prepared",
      "Protect the bed clothes with a mackintosh and dressing towel",
      "Wear gloves",
      "Wash the area with mild soap and water",
      "Dry and clean area with antiseptic lotion",
      "Cover area with sterile drape and secure it in position with adhesive strapping",
      "Dress patient with a clean theatre gown",
      "Label and apply the name tag as per facility’s protocol",
      "Remove accessories and dentures if any",
      "Check and record vital signs",
      "Assist patient to sign the consent form as per facility’s protocol",
      "Confirm if all laboratory results, items for surgery and medications are ready for the procedure",
      "Dispose off used items and decontaminate trolley",
      "Perform hand hygiene",
      "Give prescribed pre-medication when patient is ready for the theatre",
      "Send patient to the theater either on a stretcher or wheelchair",
      "Hand over patient, medical records and items to the theater staff",
      "Document procedure in the appropriate notes (manual/electronic)",
      "Prepare an operation bed to receive the patient",
    ],
    precautions: [
      "Confirm patient identity, procedure and operative site according to facility protocol",
      "Verify required consent and pre-operative orders before proceeding",
      "Check allergies and relevant clinical information before applying preparations or administering prescribed medication",
      "Maintain privacy and dignity throughout the procedure",
      "Use appropriate infection-prevention measures and hand hygiene",
      "Do not proceed with unresolved abnormal findings; escalate concerns to the appropriate clinician",
      "Ensure safe transfer and complete handover to theatre staff",
    ],
    videoUrl: "https://www.youtube.com/watch?v=2WT8z8KsHJo",
    quiz: rgn_021Quiz,
  },

  {
    id: "rgn-022",
    title: "TEPID SPONGING",
    category: "General Nursing (RGN)",
    overview:
      "Tepid sponging is the application of lukewarm water on the skin surface when the body temperature is above 39℃. The temperature of the water used should be between 27-37℃. The procedure is based on the principle of conduction and evaporation of heat.",
    purpose: [
      "Gradually reduce a patient’s body temperature by not more than 1℃ at a time",
      "Ultimately reduce the body’s temperature to a value between the normal range (36.5 – 37.2℃)",
    ],
    indications: [
      "Patient with elevated body temperature requiring tepid sponging",
      "Pyrexia where tepid sponging is indicated as part of the patient's care plan",
      "When prescribed or authorized according to facility protocol",
    ],
    equipment: [
      "A trolley containing the following:",
      "Top shelf:",
      "Two bowls/basin",
      "6-8 small towels",
      "Vital signs tray",
      "Bath thermometer (if available)",
    ],
    steps: [
      "Establish rapport with patient and relatives (Refer to steps)",
      "Explain procedure to patient and relatives (Refer to steps)",
      "Provide privacy",
      "Perform hand hygiene",
      "Prepare trolley and send to the bedside",
      "Check and record patient’s temperature",
      "Arrange top bed/counterpane clothes leaving top sheet",
      "Protect bottom sheet with a long mackintosh and bath blanket",
      "Undress the patient leaving him/her covered with the top sheet",
      "Prepare the tepid water in the bowel/basin, test the water with the bath thermometer or elbow",
      "Place the pieces of towels into the basin with tepid water",
      "Squeeze out excess water, place a wet towel in each axilla and groin",
      "Change the wet towel frequently to keep them tepid",
      "Sponge lower limbs, trunk, back and upper arms in strokes",
      "Wash and dry the face of the patient to refresh him/her",
      "Place the wet towel on the forehead of patient",
      "Leave small drops of water on the skin",
      "Change water as often as necessary",
      "Leave patient for 15-20 minutes",
      "Cover the patient with the top bedclothing",
      "Recheck temperature and record",
      "Repeat procedure till temperatures falls by 1℃",
      "Remove long mackintosh and bath blanket",
      "Assist patient to dress up and put him/her into a desirable position",
      "Perform hand hygiene",
      "Serve cold drink if patient can tolerate",
      "Serve prescribed antipyretic",
      "Document procedures, charts temperature and report findings to appropriate officer",
    ],
    precautions: [
      "Assess the patient's temperature and clinical condition before and during the procedure",
      "Use tepid rather than excessively cold or hot water",
      "Avoid excessive exposure of the patient and maintain privacy",
      "Observe for shivering, discomfort, deterioration or intolerance",
      "Stop or modify the procedure and escalate if the patient's condition worsens",
      "Administer antipyretics only when prescribed or otherwise authorized according to applicable protocol",
      "Perform hand hygiene and maintain appropriate infection-prevention measures",
    ],
    videoUrl: "https://www.youtube.com/watch?v=qZN4_9gRecc",
    quiz: rgn_022Quiz,
  },

  {
    id: "rgn-023",
    title: "PREPARATION FOR WARD ROUNDS",
    category: "General Nursing (RGN)",
    overview:
      "Ward rounds is an organized review of in-patients by the health care team members. It is to discuss, make decisions and assign responsibilities to various practitioners in relation to the management of patients’ condition. The nurse/midwife has the responsibility to ensure that the needed gadgets or devices are readily available for the activity. The nurse/midwife ensures that accurate documentation is done.",
    purpose: [
      "Enhance effective communication among health team members",
      "Provide plan of care for patients",
      "Keep patients informed about progress of care",
      "Serve as teaching and learning experience for staff and interns",
    ],
    indications: [
      "Planned or routine ward round",
      "Ad hoc or emergency clinical review",
      "Multidisciplinary review of patient progress and management",
      "Review requiring new clinical decisions or allocation of responsibilities",
    ],
    equipment: [
      "A trolley containing the following:",
      "Top shelf",
      "Adequate supply of tablet for documentation or the following stationery:",
      "Patient’s Medical Records",
      "Nurse’s changes book",
      "Continuation sheet",
      "Treatment sheet",
      "Investigative request forms e.g. X’ray, laboratory",
      "Prescription form",
      "Stapler with pins",
    ],
    steps: [
      "Ensure the ward and its annexes are clean",
      "Ensure all patients and visitors are in bed and out of the ward respectively",
      "Conduct charge nurse’s round, note down concerns and complaints of patients",
      "Classify patients according to their needs or depending on the protocol of the unit",
      "Ensure all reports are dully filed and records are up to date",
      "Arrange patient’s medical records in the correct sequence for the rounds",
      "Facilitate rounds, present patients’ problems, concerns and progress",
      "Assist when doctor is examining the patients",
      "Give patients’ opportunity to ask questions",
      "Provide appropriate answers to patients’ questions",
      "Record all changes, directives and tasks assigned in appropriate documents",
      "Ensure patient’s notes are returned to their proper place on the rack after the procedure",
    ],
    precautions: [
      "Maintain patient confidentiality during discussions and documentation",
      "Use patient information only for legitimate clinical purposes",
      "Ensure records are available only to authorized healthcare personnel",
      "Confirm patient identity before discussing individual clinical information",
      "Maintain patient dignity and privacy during examination",
      "Record clinical decisions and directives accurately",
      "Do not independently alter medical orders or treatment plans outside the nurse's scope of practice",
    ],
    videoUrl: "https://www.youtube.com/watch?v=GL1JG9U6RGk",
    quiz: rgn_023Quiz,
  },

  {
    id: "rgn-024",
    title: "DEVELOPING INTERPERSONAL RELATIONSHIP WITH THE PATIENT/CLIENT (ESTABLISHING RAPPORT)",
    category: "General Nursing (RGN)",
    overview:
      "This is the process of building a therapeutic relationship with patient/client and family who visits the hospital. It makes the patient/client and family feel at ease to discuss his/her needs with the nurse. This action is performed by the nurse immediately he/she comes into contact with a patient/client and family.",
    purpose: [
      "Develop mutual trust between patient/client and the nurse",
      "Reduce anxiety",
      "Maintain the dignity of patient/client",
      "Promote effective communication",
    ],
    indications: [
      "At the initial contact with a patient/client",
      "During admission and orientation",
      "Before nursing procedures or clinical assessment",
      "Whenever therapeutic communication is required",
    ],
    equipment: [
      "N/A",
    ],
    steps: [
      "Introduce yourself to the patient/client",
      "Maintain a relaxed attitude when interacting with patient/client",
      "Identify patient/client’s name, title and address him/her as such",
      "Speak to patient/client using simple and clear language",
      "Assure patient/client of total confidentiality",
      "Establish eye contact with the patient/client during the interaction",
      "Enquire from the patient/client the purpose of visit (if applicable)",
      "Encourage patient/client to express his/her needs and listen attentively",
      "Explain to patient/client what he/she should expect from the nurses",
      "Show consistency in approaching the patient/client",
      "Demonstrate firmness in dealing with inappropriate requests and behaviour by the patient/client if any",
      "Express appreciation to patient/client for his/her cooperation",
    ],
    precautions: [
      "Maintain professional boundaries throughout the interaction",
      "Protect patient confidentiality and privacy",
      "Use respectful, culturally appropriate communication",
      "Avoid judgmental, threatening or discriminatory language",
      "Do not make promises that cannot be fulfilled",
      "Use an interpreter or appropriate communication support when required",
      "Escalate safeguarding or communication concerns according to facility policy",
    ],
    videoUrl: "https://www.youtube.com/watch?v=t_59thyrje8",
    quiz: rgn_024Quiz,
  },

  {
    id: "rgn-025",
    title: "ORIENTATION OF PATIENT TO WARD ENVIRONMENT (AMBULANT)",
    category: "General Nursing (RGN)",
    overview:
      "Is the practice of introducing the in-patient to the staff and ward setting. This activity enables the patient and relatives to adapt to his/her new setting and know the routines of the ward.",
    purpose: [
      "Ensure patient safety",
      "Aid easy movement with the ward",
      "Know the ward environment",
    ],
    indications: [
      "New ambulant patient admitted to the ward",
      "Patient transferred to a new ward or unit",
      "Patient requiring orientation to ward routines and facilities",
      "Patient or relatives requiring clarification about ward services",
    ],
    equipment: [
      "N/A",
    ],
    steps: [
      "Establish rapport with patient and relatives (Refer to steps)",
      "Mention the name of the ward to patient and relatives",
      "Introduce patient to ward staff around",
      "Show patient the nurse’s station",
      "Show patient his/her bed",
      "Show patient his/her bed side cabinet/locker and how it operates",
      "Introduce him/her to other patients if any",
      "Show patient the bathroom, toilet and how the sanitary fittings operates",
      "Show patient the kitchen, day room and its uses (if available)",
      "Inform patient of ward routines and activities",
      "Inform patient whom to contact for any information or complaints",
      "Encourage patient to ask questions for clarity",
      "Thank patient and send him/her to bed",
      "Report to appropriate officer",
    ],
    precautions: [
      "Protect patient confidentiality when introducing the patient to staff or other patients",
      "Do not disclose another patient's diagnosis or private information",
      "Assess mobility and fall risk before directing the patient around the ward",
      "Explain emergency procedures and relevant safety arrangements",
      "Ensure the patient understands how to call for assistance",
      "Respect cultural, communication and accessibility needs",
      "Report safety concerns or abnormal findings appropriately",
    ],
    videoUrl: "https://www.youtube.com/watch?v=GL1JG9U6RGk",
    quiz: rgn_025Quiz,
  },

  {
    id: "rgn-026",
    title: "TRANSFER-IN (TRANS-IN)",
    category: "General Nursing (RGN)",
    overview:
      "This is when a patient is received from another unit or place of first admission to a new unit or department. The patient can be received from a wheelchair, bed or trolley within the same facility. The ambulance can be used when the patient is being transferred from one unit/department to the other within the same hospital.",
    purpose: [
      "Mostly for specialty treatment",
      "Investigations e.g. C.T. scan, MRI etc.",
      "Ensure continuity of care in the receiving unit",
    ],
    indications: [
      "Unit to unit transfer",
      "Unit to a center",
      "Unit to department",
      "Transfer for specialist treatment",
      "Transfer for investigations such as CT scan or MRI",
    ],
    equipment: [
      "Patient’s medical records (Manual or electronic)",
      "Referral notes (Manual or electronic)",
    ],
    steps: [
      "Confirm transfer of patient/client with the referring unit or hospital",
      "Make appropriate bed to receive the patient/client",
      "Assemble necessary equipment e.g. oxygen cylinders, suction machine, vital signs tray etc.",
      "Assemble documentation and investigation forms (Manual or electronic)",
      "Receive incoming patient/client, relatives and accompanying nurse warmly",
      "Confirm identity of patient/client with accompanying nurse",
      "Explain the importance of the transfer to the patient to obtain his/her cooperation",
      "Take over transfer notes and personal belongings from accompanying nurse",
      "Ask for clarification on vital issues pertaining to patients/clients condition from the accompanying nurse",
      "Introduce yourself and other staff to patient/client and relatives",
      "Admit patient into bed ensuring patient safety",
      "Do quick assessment of patients/clients condition and compare with patient/clients medical records",
      "Assess for any drainage or tubings and connects appropriately e.g. oxygen, intravenous line, urinary catheter etc.",
      "Review patients notes, treatment plan and act accordingly",
      "Orientate patient/client and relatives on environment and routine of the unit if necessary",
      "Document all assessments, findings and treatments in nurses’ notes (manually or electronically)",
      "Plan care for the patient/client",
    ],
    precautions: [
      "Confirm patient identity using appropriate identifiers",
      "Receive and verify the clinical handover and transfer documentation",
      "Assess the patient's condition immediately on arrival",
      "Ensure oxygen, IV lines, urinary catheters, drains and other devices are secure",
      "Use appropriate infection-prevention precautions",
      "Maintain confidentiality of medical records",
      "Escalate deterioration or discrepancies in treatment or documentation",
      "Ensure the receiving bed and necessary emergency equipment are ready",
    ],
    videoUrl: "https://www.youtube.com/watch?v=GL1JG9U6RGk",
    quiz: rgn_026Quiz,
  },

  {
    id: "rgn-027",
    title: "TRANSFER-OUT (TRANS-OUT)",
    category: "General Nursing (RGN)",
    overview:
      "This is when a patient is moved out from one unit of admission within the same hospital for update treatment. It is done at the discretion of the medical team or at the request of the patient. A good knowledge of patients/clients condition is very important.",
    purpose: [
      "Mostly for specialty treatment",
      "Investigations e.g. C.T. scan, MRI etc.",
      "On patient’s request",
      "Ensure continuity and safe handover of care",
    ],
    indications: [
      "Unit to unit transfer",
      "Unit to a center",
      "Unit to department",
      "Transfer for specialty treatment",
      "Transfer for investigations",
      "Transfer requested or clinically required according to authorized plan",
    ],
    equipment: [
      "Patient’s medical records (Manual or electronic)",
      "Referral notes (Manual or electronic)",
    ],
    steps: [
      "Confirm patients trans-out order with medical team",
      "Assess patients/clients condition",
      "Inform the receiving unit or facility about the intended transfer and the state of patient",
      "Explain reason for the trans out to patient and relatives",
      "Arrange for accompanying nurse and appropriate means of transportation",
      "Collect all necessary data",
      "Pack patient’s personal belongings",
      "Collect patient’s medication, laboratory results and transfer",
      "Ensure patient settle bills where applicable",
      "Assist patient onto stretcher, wheel chair or ambulance where applicable",
      "Hand over patient’s notes and belongings to the accompanying nurse",
      "Ensure linen are removed",
      "Decontaminate beds and its accessories",
      "Make new bed for next patient",
    ],
    precautions: [
      "Confirm the authorized transfer order",
      "Assess the patient's clinical stability before transfer",
      "Notify and confirm readiness of the receiving unit",
      "Use transport appropriate to the patient's condition",
      "Ensure required medications, records and investigation results accompany the patient",
      "Maintain patient identification throughout the transfer",
      "Provide complete clinical handover to the receiving nurse or team",
      "Maintain confidentiality of records and personal information",
      "Clean and decontaminate the vacated bed and reusable equipment according to policy",
    ],
    videoUrl: "https://www.youtube.com/watch?v=GL1JG9U6RGk",
    quiz: rgn_027Quiz,
  },

  {
    id: "rgn-028",
    title: "CARE OF THE HANDS AND FEET",
    category: "General Nursing (RGN)",
    overview:
      "This is the act of maintaining cleanliness of the hands and feet of a patient while on admission. It is recommended that this procedure is performed after the bath of a patient/client. Nail care can also be given after soaking the hands or feet in a basin of warm water for 10-15 minutes to soften the nails.",
    purpose: [
      "Keep hands and feet clean",
      "Prevent skin injury and infections",
      "Detect or examine abnormalities",
      "Improve grooming",
      "Promote self esteem",
    ],
    indications: [
      "Routine personal hygiene for an admitted patient",
      "Patient unable to independently perform hand and foot care",
      "Need for nail care and grooming",
      "Need to inspect hands and feet for skin abnormalities",
    ],
    equipment: [
      "A trolley containing the following:",
      "Top Shelf",
      "Two bowls or basins",
      "Nail clipper and file in a receiver",
      "Soap in a dish",
      "Nail brush",
      "Sponge",
      "Hand or bath towel",
      "Mackintosh and dressing towel",
      "Hand cream or lotion",
      "Orange stick (toothpick)",
    ],
    steps: [
      "Establish rapport (Refer to steps)",
      "Explain procedure to patient",
      "Perform hand hygiene",
      "Provide privacy and take trolley to bedside",
      "Position patient in a desirable position",
      "Inspect the skin of hands and feet for callous, swelling and any sores",
      "Protect the bed with a mackintosh and dressing towel",
      "Mix and allow patient to check the temperature of the water",
      "Place bowl of warm water on the mackintosh and towel",
      "Wet fingers in a bowl of warm water",
      "Immerse feet in a bowl of water",
      "Cut finger nails to the shape of finger tips using a pair of scissors or nail clipper",
      "Cut toe nails across to prevent in-growing toe nails",
      "Put all nail clippings into a receiver",
      "Put hands into the bowl of warm water and scrub nails gently with nail brush",
      "Use orange stick to remove debris",
      "Wash hands thoroughly using soap and sponge",
      "Alternatively put feet into the bowl of warm water and scrub nails gently with a nail brush",
      "Use orange stick to remove debris",
      "Wash feet thoroughly using soap and sponge",
      "Change warm water and rinse the hands and feet alternatively",
      "Dry hands and feet thoroughly",
      "Apply hand cream or lotion to the hands and feet",
      "Remove mackintosh and towel",
      "Assist patient into a desirable position",
      "Dispose off used items and decontaminate instruments",
      "Perform hand hygiene",
      "Document procedure and report findings (manual or electronic)",
    ],
    precautions: [
      "Assess the skin for wounds, infection, swelling or other abnormalities before nail care",
      "Use clean equipment and appropriate infection-prevention measures",
      "Check water temperature before use to prevent burns",
      "Use extra caution in patients with impaired sensation or poor circulation",
      "Do not cut into surrounding skin",
      "Avoid aggressive cleaning beneath nails that could injure tissue",
      "Report significant abnormalities such as ulcers, infection or severe swelling",
      "Dispose of nail clippings and waste appropriately",
      "Decontaminate reusable equipment after use",
    ],
    videoUrl: "https://www.youtube.com/watch?v=QUGwjC1ZxIA",
    quiz: rgn_028Quiz,
  },

  {
    id: "rgn-029",
    title: "RECORDING OF INTAKE AND OUTPUT",
    category: "General Nursing (RGN)",
    overview:
      "It is the process of measuring and noting the amount and type of fluids introduced into the body and excreted from the body over a 24-hour period. This procedure assists the nurse to maintain an accurate record of a patient’s fluid balance.",
    purpose: [
      "Assess the therapeutic effects of medication",
      "Monitor fluid overload and dehydration",
    ],
    indications: [
      "Patients requiring strict fluid balance monitoring",
      "Patients at risk of fluid overload or dehydration",
      "Patients receiving significant intravenous or enteral fluids",
      "Patients with conditions requiring close monitoring of urine output",
      "Patients with significant fluid losses such as vomiting or diarrhoea",
    ],
    equipment: [
      "A trolley containing the following:",
      "Top shelf: Drinking cup (To measure fluid input)",
      "Bottom Shelf",
      "Urinal or bedpan",
      "Measuring jug (To measure output)",
    ],
    steps: [
      "Establish rapport (Refer to steps)",
      "Explain the importance of keeping the fluid balance chart to patient and relatives",
      "Obtain fluid intake and output chart (manually or electronically) and confirm with patient’s identity",
      "Determine the types of fluid intake or output",
      "Observe amount of fluids given to patient",
      "Record the amount of oral and intravenous fluids prescribed at the intake column indicating the date and time",
      "Add together the values for oral and parenteral fluids",
      "Assist patient to void into a bedpan or urinal if possible, empty content into the measuring jug and note the volume OR if there is urine in a urine bag, empty content into the measuring jug and note the volume",
      "Record other forms of output such as watery stools, vomitus at the output column indicating date, time and the amount",
      "Record all measurements in milliliters",
      "Add together all the values obtained for outputs",
      "Total the intake and output at the end of every 24 hours",
      "Find out amount of fluid retained by subtracting the values of fluid output from the intake",
      "Perform hand hygiene",
      "Inform the nurse in charge/doctor immediately if amount put out is greater than the amount taken in or when there is abnormally low output",
      "Record findings in the appropriate recording software and observation chart",
      "Dispose off used items and decontaminate trolley (manual or electronic)",
    ],
    precautions: [
      "Confirm patient identity before recording measurements",
      "Use accurate measuring equipment and record measurements in milliliters",
      "Record each intake and output with the correct date and time",
      "Include relevant oral, intravenous, enteral and other prescribed fluid intake",
      "Include relevant urine, vomitus, stool and other measurable output",
      "Do not estimate fluid volumes when accurate measurement is possible",
      "Check unusual or unexpected measurements before recording where appropriate",
      "Escalate significant abnormalities or deterioration promptly",
      "Maintain confidentiality of fluid balance records",
      "Clean and decontaminate reusable equipment after use",
    ],
    videoUrl: "https://www.youtube.com/watch?v=QUGwjC1ZxIA",
    quiz: rgn_029Quiz,
  },
];
