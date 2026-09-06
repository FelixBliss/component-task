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
    "Confirming the procedure and operative site helps prevent wrong-procedure and wrong-site errors."
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
    "The mackintosh and dressing towel protect the patient's bed linen from moisture and contamination during preparation."
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
    "Removing accessories and dentures when indicated reduces potential hazards during anaesthesia and surgery."
  ),
  q(
    "Which assessment should be recorded before sending the patient to theatre?",
    ["Vital signs", "Room temperature only", "Visitor count", "Meal intake only"],
    "Vital signs",
    "Pre-operative vital signs provide a baseline for assessing the patient's condition before surgery."
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
    "Required investigations and results should be available so the clinical team can assess the patient's readiness for surgery."
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
    "Decontamination and hand hygiene reduce the risk of transmitting microorganisms."
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
    "The patient's records and required items support continuity of care and safe handover to theatre staff."
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
    "An unexpected clinical concern should be communicated promptly to the appropriate clinician rather than ignored or independently acted upon."
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
    "Accurate documentation provides evidence of care and communicates important information to the receiving team."
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
    "Correct identification and structured handover are essential for maintaining patient safety during transfer."
  ),
];

const rgn_022Quiz: ProcedureQuizQuestion[] = [
  q(
    "What type of water is used for tepid sponging?",
    ["Lukewarm water", "Ice water", "Boiling water", "Very cold water"],
    "Lukewarm water",
    "Tepid sponging uses lukewarm water to promote heat loss without exposing the patient to extremes of temperature."
  ),
  q(
    "What is the stated water temperature range in this procedure?",
    ["27–37°C", "10–15°C", "40–45°C", "50–60°C"],
    "27–37°C",
    "The procedure specifies water between 27°C and 37°C for tepid sponging."
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
    "The patient's temperature should be assessed before the procedure to establish a baseline and determine the response to treatment."
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
    "The axillae and groin are included as part of the procedure to promote heat loss."
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
    "Changing the towels helps maintain the appropriate tepid temperature during the procedure."
  ),
  q(
    "How much should the temperature be reduced at a time according to the procedure?",
    ["Not more than 1°C", "Exactly 5°C", "At least 4°C", "10°C"],
    "Not more than 1°C",
    "The procedure states that the patient's temperature should be reduced gradually by not more than 1°C at a time."
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
    "Rechecking the temperature determines the patient's response and provides an objective record of the procedure."
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
    "Maintaining appropriate coverage helps preserve patient comfort and reduces unnecessary heat loss."
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
    "Patient tolerance and safety should be monitored throughout the procedure. Problems should be reported appropriately."
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
    "Documentation should show that the procedure was performed and include relevant temperature readings and findings."
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
    "Ward rounds allow healthcare team members to review patients, make decisions and coordinate care."
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
    "Accurate and properly arranged records allow the healthcare team to review relevant patient information efficiently."
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
    "The nurse communicates relevant patient problems, concerns and progress to support clinical decision-making."
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
    "Preparing the ward and records helps the healthcare team conduct the round safely and efficiently."
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
    "Allowing patients to ask questions promotes communication and helps clarify their care."
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
    "Recording changes, directives and assigned tasks supports continuity and accountability."
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
    "Investigative request forms may be required when investigations are requested during the patient's care."
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
    "Effective rounds improve communication, coordination and continuity of care for patients and healthcare professionals."
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
    "Patient records contain confidential information and should be returned securely to their proper location."
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
    "The nurse contributes to safe care by communicating relevant information and documenting decisions and assigned tasks accurately."
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
    "Rapport helps establish a therapeutic relationship based on trust, respect and effective communication."
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
    "Using the patient's name or appropriate title demonstrates respect and helps maintain dignity."
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
    "Clear language improves understanding and supports effective communication with the patient."
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
    "Assuring confidentiality appropriately protects patient privacy and helps build therapeutic trust."
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
    "Active listening and appropriate eye contact demonstrate attention and encourage the patient to communicate."
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
    "Encouraging patients to express their needs allows the nurse to identify concerns and provide appropriate care."
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
    "Professional boundaries help maintain a safe and therapeutic nurse-patient relationship."
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
    "Explaining what the patient can expect promotes understanding and reduces uncertainty about the care relationship."
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
    "Expressing appreciation promotes respectful communication and acknowledges the patient's participation."
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
    "Professional boundaries protect both the patient and nurse while maintaining a therapeutic relationship."
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
    "Ward orientation helps patients understand their new environment, routines and sources of assistance."
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
    "Identifying the ward helps the patient understand where they are receiving care."
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
    "The nurse's station is an important location because the patient can identify where to seek nursing assistance."
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
    "Knowing the location and operation of sanitary facilities promotes safety and independence."
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
    "Understanding ward routines helps the patient adapt to the environment and participate appropriately in care."
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
    "Patients should know which appropriate staff member to approach when they need information or have concerns."
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
    "Encouraging questions helps identify misunderstandings and supports patient participation."
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
    "Introducing relevant staff helps the patient identify people who can provide care and assistance."
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
    "The patient should be safely settled after orientation and given an opportunity to clarify any remaining concerns."
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
    "Relevant concerns identified during orientation should be communicated to the appropriate officer."
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
    "Transfer-in involves receiving a patient into a new unit or department and assuming responsibility for ongoing care."
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
    "Confirmation allows the receiving unit to prepare appropriately and supports continuity of care."
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
    "The receiving unit should prepare equipment appropriate to the patient's condition, including oxygen and suction when required."
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
    "Reliable patient identification helps prevent errors during transfer and admission."
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
    "Reviewing transfer information ensures that important clinical information is communicated to the receiving team."
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
    "A prompt assessment establishes the patient's current status and identifies immediate safety or clinical concerns."
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
    "Tubes and drains should be checked to ensure continuity of therapy and patient safety."
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
    "A new unit may have different staff, routines and facilities, making additional orientation useful."
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
    "Accurate documentation supports continuity, accountability and communication between healthcare professionals."
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
    "The central objective of transfer-in is to safely continue the patient's care after arrival in the receiving unit."
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
    "Transfer-out involves moving a patient from the current unit to another authorized unit, department or facility."
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
    "The transfer should be authorized and confirmed before the patient is moved."
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
    "Advance communication allows the receiving unit to prepare appropriate staff, equipment and care."
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
    "Assessment helps determine whether the patient can be safely transferred and what support is required."
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
    "Relevant clinical information and required items should accompany the patient to support continuity of care."
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
    "The patient's clinical condition determines the safest method of transportation."
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
    "Effective handover communicates the patient's condition, treatment and other relevant information to the receiving team."
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
    "Cleaning and decontamination of the vacated bed help prepare it safely for another patient."
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
    "Accurate transfer documentation provides a record of the patient's movement and information communicated between teams."
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
    "Safe transfer requires correct identification, assessment, appropriate transport and effective communication."
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
    "The procedure states that hand and foot care is recommended after the patient's bath."
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
    "Soaking the hands or feet in warm water for 10–15 minutes helps soften the nails before nail care."
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
    "Inspecting the skin can identify calluses, swelling, sores or other abnormalities that may require attention."
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
    "Cutting toenails across helps reduce the risk of ingrowing toenails."
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
    "Nail clippings should be collected hygienically and disposed of appropriately."
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
    "Warm water supports cleansing and helps soften the nails for easier care."
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
    "Thorough drying helps maintain skin integrity and prevents unnecessary moisture from remaining on the skin."
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
    "Inspection helps the nurse identify abnormalities that may need further assessment or reporting."
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
    "Appropriate waste disposal and decontamination reduce the risk of infection transmission."
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
    "Documentation should record the care provided and relevant findings observed during the procedure."
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
    "Intake and output monitoring measures the amount and type of fluids entering and leaving the body."
  ),
  q(
    "Over what period is the fluid balance commonly totaled in this procedure?",
    ["24 hours", "1 hour", "5 minutes", "7 days"],
    "24 hours",
    "The procedure describes measuring and recording fluid intake and output over a 24-hour period."
  ),
  q(
    "Which is an example of fluid intake?",
    ["Oral or intravenous fluid", "Urine", "Vomitus", "Diarrhoeal stool"],
    "Oral or intravenous fluid",
    "Oral and intravenous fluids are examples of fluid entering the body and therefore belong in the intake record."
  ),
  q(
    "Which is an example of fluid output?",
    ["Urine", "Oral water", "Intravenous fluid", "Enteral feed given"],
    "Urine",
    "Urine is a major measurable form of fluid output."
  ),
  q(
    "In what unit should fluid measurements be recorded?",
    ["Milliliters", "Kilograms", "Centimeters", "Degrees Celsius"],
    "Milliliters",
    "The procedure specifies recording fluid measurements in milliliters."
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
    "The procedure determines fluid retained by subtracting total output from total intake."
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
    "Abnormally low output can indicate a clinically important problem and should be reported promptly."
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
    "Date and time make it possible to interpret fluid measurements accurately over the observation period."
  ),
  q(
    "Which equipment can measure urine output?",
    ["A measuring jug", "A thermometer", "A stethoscope", "A pulse oximeter"],
    "A measuring jug",
    "A measuring jug is used to measure the volume of urine and other measurable fluid outputs."
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
    "Accurate fluid balance assists the nurse in identifying changes related to dehydration, fluid retention or fluid overload."
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
    indications: ["N/A"],
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
      "Dispose of used items and decontaminate trolley",
      "Perform hand hygiene",
      "Give prescribed pre-medication when patient is ready for the theatre",
      "Send patient to the theatre either on a stretcher or wheelchair",
      "Hand over patient, medical records and items to the theatre staff",
      "Document procedure in the appropriate notes (manual/electronic)",
      "Prepare an operation bed to receive the patient",
    ],
    precautions: [],
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
    indications: ["N/A"],
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
      "Prepare the tepid water in the bowl/basin, test the water with the bath thermometer or elbow",
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
      "Repeat procedure till temperature falls by 1℃",
      "Remove long mackintosh and bath blanket",
      "Assist patient to dress up and put him/her into a desirable position",
      "Perform hand hygiene",
      "Serve cold drink if patient can tolerate",
      "Serve prescribed antipyretic",
      "Document procedure, chart temperature and report findings to appropriate officer",
    ],
    precautions: [],
    videoUrl: "https://www.youtube.com/watch?v=qZN4_9gRecc",
    quiz: rgn_022Quiz,
  },

  {
    id: "rgn-023",
    title: "PREPARATION FOR WARD ROUNDS",
    category: "General Nursing (RGN)",
    overview:
      "Ward rounds are an organized review of in-patients by healthcare team members. They are used to discuss patients, make decisions and assign responsibilities to various practitioners in relation to the management of patients’ conditions. The nurse/midwife has the responsibility to ensure that the needed gadgets or devices are readily available for the activity. The nurse/midwife also ensures that accurate documentation is done.",
    purpose: [
      "Enhance effective communication among health team members",
      "Provide plan of care for patients",
      "Keep patients informed about progress of care",
      "Serve as teaching and learning experience for staff and interns",
    ],
    indications: ["Planned/Routine", "Adhoc/Emergency"],
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
      "Ensure all reports are duly filed and records are up to date",
      "Arrange patient’s medical records in the correct sequence for the rounds",
      "Facilitate rounds, present patients’ problems, concerns and progress",
      "Assist when doctor is examining the patients",
      "Give patients’ opportunity to ask questions",
      "Provide appropriate answers to patients’ questions",
      "Record all changes, directives and tasks assigned in appropriate documents",
      "Ensure patient’s notes are returned to their proper place on the rack after the procedure",
    ],
    precautions: [],
    quiz: rgn_023Quiz,
  },

  {
    id: "rgn-024",
    title:
      "DEVELOPING INTERPERSONAL RELATIONSHIP WITH THE PATIENT/CLIENT (ESTABLISHING RAPPORT)",
    category: "General Nursing (RGN)",
    overview:
      "This is the process of building a therapeutic relationship with patient/client and family who visits the hospital. It makes the patient/client and family feel at ease to discuss his/her needs with the nurse. This action is performed by the nurse immediately he/she comes into contact with a patient/client and family.",
    purpose: [
      "Develop mutual trust between patient/client and the nurse",
      "Reduce anxiety",
      "Maintain the dignity of patient/client",
      "Promote effective communication",
    ],
    indications: ["N/A"],
    equipment: ["N/A"],
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
    precautions: [],
    videoUrl: "https://www.youtube.com/watch?v=t_59thyrje8",
    quiz: rgn_024Quiz,
  },

  {
    id: "rgn-025",
    title: "ORIENTATION OF PATIENT TO WARD ENVIRONMENT (AMBULANT)",
    category: "General Nursing (RGN)",
    overview:
      "This is the practice of introducing the in-patient to the staff and ward setting. This activity enables the patient and relatives to adapt to his/her new setting and know the routines of the ward.",
    purpose: [
      "Ensure patient safety",
      "Aid easy movement within the ward",
      "Know the ward environment",
    ],
    indications: ["N/A"],
    equipment: ["N/A"],
    steps: [
      "Establish rapport with patient and relatives (Refer to steps)",
      "Mention the name of the ward to patient and relatives",
      "Introduce patient to ward staff around",
      "Show patient the nurse’s station",
      "Show patient his/her bed",
      "Show patient his/her bedside cabinet/locker and how it operates",
      "Introduce him/her to other patients if any",
      "Show patient the bathroom, toilet and how the sanitary fittings operate",
      "Show patient the kitchen, day room and its uses (if available)",
      "Inform patient of ward routines and activities",
      "Inform patient whom to contact for any information or complaints",
      "Encourage patient to ask questions for clarity",
      "Thank patient and send him/her to bed",
      "Report to appropriate officer",
    ],
    precautions: [],
    quiz: rgn_025Quiz,
  },

  {
    id: "rgn-026",
    title: "TRANSFER-IN (TRANS-IN)",
    category: "General Nursing (RGN)",
    overview:
      "This is when a patient is received from another unit or place of first admission to a new unit or department. The patient can be received from a wheelchair, bed or trolley within the same facility. The ambulance can be used when the patient is being transferred from one unit/department to the other within the same hospital.",
    purpose: ["Mostly for specialty treatment Investigations e.g. C.T. scan, MRI etc."],
    indications: [
      "Unit to unit",
      "Unit to a center",
      "Unit to department",
      "The reverse of (2) and (3) above",
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
      "Assess for any drainage or tubings and connect appropriately e.g. oxygen, intravenous line, urinary catheter etc.",
      "Review patients notes, treatment plan and act accordingly",
      "Orientate patient/client and relatives on environment and routine of the unit if necessary",
      "Document all assessments, findings and treatments in nurses’ notes (manually or electronically)",
      "Plan care for the patient/client",
    ],
    precautions: [],
    videoUrl: "https://www.youtube.com/watch?v=GL1JG9U6RGk",
    quiz: rgn_026Quiz,
  },

  {
    id: "rgn-027",
    title: "TRANSFER-OUT (TRANS-OUT)",
    category: "General Nursing (RGN)",
    overview:
      "This is when a patient is moved out from one unit of admission within the same hospital for further treatment. It is done at the discretion of the medical team or at the request of the patient. A good knowledge of the patient’s/client’s condition is very important.",
    purpose: [
      "Mostly for specialty treatment",
      "Investigations e.g. C.T. scan, MRI etc.",
      "On patient’s request",
    ],
    indications: [
      "Unit to unit",
      "Unit to a center",
      "Unit to department",
      "The reverse of (2) and (3) above",
    ],
    equipment: [
      "Patient’s medical records (Manual or electronic)",
      "Referral notes (Manual or electronic)",
    ],
    steps: [
      "Confirm patient’s trans-out order with medical team",
      "Assess patient’s/client’s condition",
      "Inform the receiving unit or facility about the intended transfer and the state of patient",
      "Explain reason for the trans-out to patient and relatives",
      "Arrange for accompanying nurse and appropriate means of transportation",
      "Collect all necessary data",
      "Pack patient’s personal belongings",
      "Collect patient’s medication, laboratory results and transfer documents",
      "Ensure patient settles bills where applicable",
      "Assist patient onto stretcher, wheelchair or ambulance where applicable",
      "Hand over patient’s notes and belongings to the accompanying nurse",
      "Ensure linen are removed",
      "Decontaminate beds and its accessories",
      "Make new bed for next patient",
    ],
    precautions: [],
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
    indications: ["N/A"],
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
      "Dispose of used items and decontaminate instruments",
      "Perform hand hygiene",
      "Document procedure and report findings (manual or electronic)",
    ],
    precautions: [],
    videoUrl: "https://www.youtube.com/watch?v=QUGwjC1ZxIA",
    quiz: rgn_028Quiz,
  },

  {
    id: "rgn-029",
    title: "RECORDING OF INTAKE AND OUTPUT",
    category: "General Nursing (RGN)",
    overview:
      "It is the process of measuring and noting the amount and type of fluids introduced into the body and excreted from the body over a 24-hour period. This procedure assists the nurse to maintain an accurate record of a patient’s fluid balance.\n\nFluid intake includes:\n1. Oral fluids\n2. Intravenous fluids\n3. Nasopharyngeal fluids\n4. Intragastric fluids\n\nFluid output includes:\nUrine\nVomitus\nAspirates\nDiarrhoeal stool\nSweat",
    purpose: [
      "Assess the therapeutic effects of medication",
      "Monitor fluid overload and dehydration",
    ],
    indications: ["N/A"],
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
      "Record other forms of output such as watery stools and vomitus at the output column indicating date, time and the amount",
      "Record all measurements in milliliters",
      "Add together all the values obtained for outputs",
      "Total the intake and output at the end of every 24 hours",
      "Find out amount of fluid retained by subtracting the values of fluid output from the intake",
      "Perform hand hygiene",
      "Inform the nurse in charge/doctor immediately if amount put out is greater than the amount taken in or when there is abnormally low output",
      "Record findings in the appropriate recording software and observation chart",
      "Dispose of used items and decontaminate trolley (manual or electronic)",
    ],
    precautions: [],
    quiz: rgn_029Quiz,
  },
];
