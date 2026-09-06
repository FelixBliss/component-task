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
    "Confirming the procedure and operative site helps prevent wrong-patient, wrong-procedure and wrong-site errors."
  ),
  q(
    "Which item helps protect the bed during site preparation?",
    ["Mackintosh and dressing towel", "Thermometer only", "Prescription pad", "Pill crusher"],
    "Mackintosh and dressing towel",
    "A mackintosh and dressing towel protect the bed and linen during preparation."
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
    "Removable items may interfere with anaesthesia, surgery or patient safety and should be managed according to facility policy."
  ),
  q(
    "Which assessment should be recorded before sending the patient to theatre?",
    ["Vital signs", "Room temperature only", "Visitor count", "Meal intake only"],
    "Vital signs",
    "Pre-operative vital signs provide important information about the patient's current condition."
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
    "Required investigations and results should be available and reviewed according to the surgical plan."
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
    "Cleaning equipment and performing hand hygiene help reduce infection transmission."
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
    "Relevant records, investigations, medications and other required items support continuity and safety."
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
    "Abnormal findings should be reported and managed through the appropriate clinical chain."
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
    "Accurate documentation supports continuity, accountability and patient safety."
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
    "Correct identification and effective handover are essential during theatre transfer."
  ),
];

const rgn_022Quiz: ProcedureQuizQuestion[] = [
  q(
    "What type of water is used for tepid sponging?",
    ["Lukewarm water", "Ice water", "Boiling water", "Very cold water"],
    "Lukewarm water",
    "Tepid sponging uses lukewarm or tepid water."
  ),
  q(
    "What is the stated water temperature range in this procedure?",
    ["27–37°C", "10–15°C", "40–45°C", "50–60°C"],
    "27–37°C",
    "The procedure specifies tepid water within this range."
  ),
  q(
    "What should be checked before beginning tepid sponging?",
    ["The patient's temperature", "The visitor's temperature", "The ward clock only", "The patient's meal order"],
    "The patient's temperature",
    "The patient's baseline temperature should be assessed before the procedure."
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
    "These areas can assist heat exchange during cooling."
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
    "Towels should remain appropriately tepid during the procedure."
  ),
  q(
    "How much should the temperature be reduced at a time according to the procedure?",
    ["Not more than 1°C", "Exactly 5°C", "At least 4°C", "10°C"],
    "Not more than 1°C",
    "The procedure specifies gradual reduction rather than rapid cooling."
  ),
  q(
    "What should be done after the sponging period?",
    ["Recheck and record the temperature", "Ignore the temperature", "Immediately discharge the patient", "Remove all documentation"],
    "Recheck and record the temperature",
    "Temperature should be reassessed and documented after the procedure."
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
    "Limiting exposure helps maintain comfort and prevent chilling."
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
    "Patient tolerance and clinical response must be monitored throughout the procedure."
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
    "Documentation provides a record of the intervention and patient response."
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
    "Ward rounds facilitate clinical review, decision-making and coordination of patient care."
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
    "Complete and accessible records support accurate clinical review."
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
    "The nurse provides relevant nursing observations, concerns and patient progress."
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
    "A prepared environment allows the team to conduct the round safely and efficiently."
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
    "Patient participation and clarification promote effective communication."
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
    "Accurate recording ensures continuity and accountability."
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
    "Investigations may be requested as part of the patient's management."
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
    "Effective rounds support coordinated patient-centred care."
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
    "Patient records must be secured after use."
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
    "The nurse contributes accurate clinical information and documents relevant decisions."
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
    "Rapport supports trust and therapeutic communication."
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
    "Respectful forms of address promote dignity."
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
    "Clear language promotes understanding."
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
    "Confidentiality is an essential component of professional nursing practice."
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
    "Active listening demonstrates attention and respect."
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
    "Encouraging expression helps identify patient needs."
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
    "Professional boundaries protect both the patient and nurse."
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
    "Clear expectations support therapeutic relationships."
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
    "Professional courtesy helps maintain a respectful relationship."
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
    "The nurse should maintain professional therapeutic boundaries."
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
    "Orientation helps patients understand their environment and ward routines."
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
    "Knowing the ward environment helps patients navigate safely."
  ),
  q(
    "Which area should the patient be shown?",
    ["The nurse's station", "Only the staff changing room", "The pharmacy store only", "The operating theatre only"],
    "The nurse's station",
    "The nurse's station is an important point of contact for patient assistance."
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
    "Patients should know where essential facilities are located."
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
    "Understanding routines helps the patient adapt to the ward."
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
    "Patients should know who to approach when assistance is needed."
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
    "Questions help confirm understanding."
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
    "Familiarity with staff promotes communication and safety."
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
    "Relevant concerns should be communicated through the appropriate reporting structure."
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
    "Equipment should be prepared according to the patient's condition and needs."
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
    "Reliable patient identification is essential during transfer."
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
    "Transfer documentation contains important clinical information."
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
    "A receiving assessment helps identify immediate clinical and safety needs."
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
    "Lines, drains and tubes should be assessed and maintained safely."
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
    "The overall aim is safe continuation of care."
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
    "Transfer-out involves moving the patient to another authorized destination."
  ),
  q(
    "What should be confirmed before transfer-out?",
    ["The authorized transfer order", "The visitor's permission", "The patient's meal", "The ward television schedule"],
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
    "Advance communication supports safe continuity of care."
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
    "The patient's condition determines the safest transfer method and support required."
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
    "Relevant information and items support continuity of care."
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
    "Transport should match the patient's clinical needs."
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
    "Effective handover ensures continuity and safe transfer of responsibility."
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
    "The bed should be cleaned and prepared according to infection-prevention policy."
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
    "Accurate documentation provides a clear record of the transfer."
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
    "Safe transfer requires correct identification, appropriate transport and effective handover."
  ),
];

const rgn_028Quiz: ProcedureQuizQuestion[] = [
  q(
    "When is hand and foot care commonly performed?",
    ["After the patient's bath when appropriate", "Only before admission", "Only during surgery", "Only after discharge"],
    "After the patient's bath when appropriate",
    "Hand and foot care may appropriately be performed after bathing."
  ),
  q(
    "Why may hands or feet be soaked before nail care?",
    ["To soften the nails", "To increase swelling", "To sterilize the patient", "To cause numbness"],
    "To soften the nails",
    "Warm water helps soften nails before trimming."
  ),
  q(
    "What should be assessed before nail care?",
    ["Skin condition and abnormalities", "Only the patient's height", "Only the patient's appetite", "Only the visitor list"],
    "Skin condition and abnormalities",
    "Assessment can identify sores, swelling, infection or other abnormalities."
  ),
  q(
    "How should toenails generally be cut to reduce the risk of ingrowing?",
    ["Across the nail", "Deep into both corners", "As short as possible into the skin", "By tearing them"],
    "Across the nail",
    "Toenails are generally trimmed across rather than deeply into the corners."
  ),
  q(
    "Where should nail clippings be placed?",
    ["In a receiver or appropriate waste container", "On the patient's bed", "On the floor", "In the wash basin"],
    "In a receiver or appropriate waste container",
    "Nail clippings should be collected and disposed of appropriately."
  ),
  q(
    "Why is warm water used?",
    ["To support cleansing and soften nails", "To burn the skin", "To freeze the nails", "To replace hand hygiene"],
    "To support cleansing and soften nails",
    "Warm water supports cleansing and softening of nails."
  ),
  q(
    "What should be done after washing the hands and feet?",
    ["Rinse and dry them thoroughly", "Leave them wet", "Cover them with contaminated linen", "Apply antiseptic without drying"],
    "Rinse and dry them thoroughly",
    "Thorough drying helps maintain skin integrity."
  ),
  q(
    "Why should the skin be inspected during the procedure?",
    ["To identify sores, swelling or other abnormalities", "To diagnose every disease", "To avoid speaking to the patient", "To replace vital signs"],
    "To identify sores, swelling or other abnormalities",
    "Inspection helps identify abnormalities that may require reporting."
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
    "Proper disposal and decontamination reduce infection risks."
  ),
  q(
    "What should be documented after hand and foot care?",
    ["The procedure and relevant findings", "Only the patient's name", "Nothing", "Only the visitor's name"],
    "The procedure and relevant findings",
    "Relevant care and findings should be documented."
  ),
];

const rgn_029Quiz: ProcedureQuizQuestion[] = [
  q(
    "What does intake and output monitoring measure?",
    ["Fluids entering and leaving the body", "Only oral food", "Only urine color", "Only body temperature"],
    "Fluids entering and leaving the body",
    "Fluid balance monitoring measures fluid entering and leaving the body."
  ),
  q(
    "Over what period is the fluid balance commonly totaled in this procedure?",
    ["24 hours", "1 hour", "5 minutes", "7 days"],
    "24 hours",
    "The procedure describes monitoring over a 24-hour period."
  ),
  q(
    "Which is an example of fluid intake?",
    ["Oral or intravenous fluid", "Urine", "Vomitus", "Diarrhoeal stool"],
    "Oral or intravenous fluid",
    "Oral and parenteral fluids are examples of intake."
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
    ["Intake minus output", "Output minus temperature", "Weight minus height", "Pulse minus respiration"],
    "Intake minus output",
    "Fluid balance is calculated by subtracting output from intake."
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
    "Abnormally low output may indicate a clinically important problem and should be reported."
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
    "Date and time allow accurate tracking of fluid changes."
  ),
  q(
    "Which equipment can measure urine output?",
    ["A measuring jug", "A thermometer", "A stethoscope", "A pulse oximeter"],
    "A measuring jug",
    "A graduated measuring jug can be used to measure urine output."
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
    "Accurate fluid balance assists in monitoring hydration and fluid status."
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
      "Relieve patient's anxiety",
      "Ensure successful operation",
      "Prevent complications after surgery",
    ],
    indications: [
      "Scheduled/elective surgical procedure",
      "Emergency surgical procedure requiring pre-operative preparation",
      "Surgical procedures requiring preparation of an operative site",
      "Procedures requiring transfer to theatre",
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
      "Confirm the type of surgical procedure and site against physician/doctor's order",
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
      "Label and apply the name tag as per facility's protocol",
      "Remove accessories and dentures if any",
      "Check and record vital signs",
      "Assist patient to sign the consent form as per facility's protocol",
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
      "Verify patient identity, procedure and operative site before preparation",
      "Confirm that informed consent requirements have been completed according to facility policy",
      "Check allergies, fasting status, required investigations and other pre-operative requirements",
      "Verify prescribed medications and pre-medications before administration",
      "Maintain privacy, dignity and standard infection-prevention precautions",
      "Check and record vital signs and report abnormal findings before theatre transfer",
      "Manage dentures, jewellery and other removable items according to facility and anaesthetic policy",
      "Ensure safe transportation and complete handover with the patient's records",
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
      "Gradually reduce a patient's body temperature by not more than 1℃ at a time",
      "Ultimately reduce the body's temperature to a value between the normal range (36.5 – 37.2℃)",
    ],
    indications: [
      "Fever or elevated body temperature when tepid sponging is clinically appropriate",
      "Patient discomfort associated with elevated temperature",
      "Adjunctive cooling when prescribed or included in the patient's plan of care",
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
      "Check and record patient's temperature",
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
      "Document procedures, chart temperature and report findings to appropriate officer",
    ],
    precautions: [
      "Use tepid/lukewarm water and avoid ice-cold water",
      "Monitor the patient's temperature and response throughout the procedure",
      "Avoid excessive exposure of the patient and prevent chilling",
      "Stop the procedure if the patient develops shivering, marked discomfort, cyanosis or deterioration",
      "Use additional caution in vulnerable patients and follow facility protocol",
      "Maintain standard infection-prevention precautions",
      "Administer antipyretics only when prescribed or otherwise authorized",
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
      "Multidisciplinary review of admitted patients",
      "Review of patients with changing or complex clinical needs",
      "Ad hoc or emergency clinical review",
    ],
    equipment: [
      "A trolley containing the following:",
      "Top shelf",
      "Adequate supply of tablet for documentation or the following stationery:",
      "Patient's Medical Records",
      "Nurse's changes book",
      "Continuation sheet",
      "Treatment sheet",
      "Investigative request forms e.g. X'ray, laboratory",
      "Prescription form",
      "Stapler with pins",
    ],
    steps: [
      "Ensure the ward and its annexes are clean",
      "Ensure all patients and visitors are in bed and out of the ward respectively",
      "Conduct charge nurse's round, note down concerns and complaints of patients",
      "Classify patients according to their needs or depending on the protocol of the unit",
      "Ensure all reports are duly filed and records are up to date",
      "Arrange patient's medical records in the correct sequence for the rounds",
      "Facilitate rounds, present patients' problems, concerns and progress",
      "Assist when doctor is examining the patients",
      "Give patients opportunity to ask questions",
      "Provide appropriate answers to patients' questions",
      "Record all changes, directives and tasks assigned in appropriate documents",
      "Ensure patient's notes are returned to their proper place on the rack after the procedure",
    ],
    precautions: [
      "Maintain patient privacy, dignity and confidentiality during the ward round",
      "Use appropriate standard precautions and personal protective equipment where indicated",
      "Avoid discussing confidential patient information where unauthorized persons can hear",
      "Ensure patient records are complete and available before the round",
      "Record clinical decisions, directives and assigned responsibilities accurately",
      "Clarify unclear instructions before implementing them according to facility policy",
      "Do not leave patient records unattended or accessible to unauthorized persons",
    ],
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
      "At the beginning of the nurse-patient relationship",
      "On admission or first contact with a patient/client",
      "When establishing therapeutic communication with a patient/client and family",
      "When the patient/client requires emotional support or clarification",
    ],
    equipment: ["N/A"],
    steps: [
      "Introduce yourself to the patient/client",
      "Maintain a relaxed attitude when interacting with patient/client",
      "Identify patient/client's name, title and address him/her as such",
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
      "Maintain professional therapeutic boundaries",
      "Protect patient/client confidentiality and privacy",
      "Use respectful, culturally appropriate and non-judgmental communication",
      "Avoid making promises that cannot be fulfilled",
      "Do not disclose confidential information to unauthorized persons",
      "Recognize and respect the patient's right to refuse communication or participation",
      "Seek assistance when communication barriers affect safe care",
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
      "New admission to the ward",
      "Transfer of an ambulant patient to a new ward",
      "When a patient requires orientation to a new ward environment",
      "When ward routines or facilities need to be explained to the patient",
    ],
    equipment: ["N/A"],
    steps: [
      "Establish rapport with patient and relatives (Refer to steps)",
      "Mention the name of the ward to patient and relatives",
      "Introduce patient to ward staff around",
      "Show patient the nurse's station",
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
      "Maintain patient privacy and dignity during orientation",
      "Provide information appropriate to the patient's level of understanding",
      "Do not disclose other patients' diagnoses or confidential information",
      "Identify potential environmental hazards and explain relevant safety measures",
      "Ensure the patient knows whom to contact for assistance",
      "Consider mobility, sensory and cognitive limitations when providing orientation",
    ],
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
      "To ensure continuity of care between units",
    ],
    indications: [
      "Unit to unit",
      "Unit to a center",
      "Unit to department",
      "Transfer between healthcare facilities",
      "Transfer for specialty treatment or investigation",
    ],
    equipment: [
      "Patient's medical records (Manual or electronic)",
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
      "Document all assessments, findings and treatments in nurses' notes (manually or electronically)",
      "Plan care for the patient/client",
    ],
    precautions: [
      "Confirm the transfer with the referring and receiving units",
      "Verify patient identity using appropriate identifiers",
      "Assess the patient's clinical condition before and immediately after transfer",
      "Ensure oxygen, suction, intravenous lines, drains and other devices are secure",
      "Use appropriate transportation according to the patient's condition",
      "Ensure relevant medical records, medications, investigation results and belongings accompany the patient as required",
      "Maintain patient privacy, dignity and confidentiality during transfer",
      "Provide complete clinical handover to the receiving nurse/team",
      "Document the transfer, assessment findings and handover",
    ],
    videoUrl: "https://www.youtube.com/watch?v=GtrykPRGbao",
    quiz: rgn_026Quiz,
  },

  {
    id: "rgn-027",
    title: "TRANSFER-OUT (TRANS-OUT)",
    category: "General Nursing (RGN)",
    overview:
      "This is when a patient is moved out from one unit of admission within the same hospital for updated treatment. It is done at the discretion of the medical team or at the request of the patient. A good knowledge of patient's/client's condition is very important.",
    purpose: [
      "Mostly for specialty treatment",
      "Investigations e.g. C.T. scan, MRI etc.",
      "On patient's request",
    ],
    indications: [
      "Transfer to another unit for specialist treatment",
      "Transfer to another department for investigation",
      "Transfer to another healthcare facility",
      "Transfer authorized by the medical team",
      "Transfer requested by the patient when clinically and administratively appropriate",
    ],
    equipment: [
      "Patient's medical records (Manual or electronic)",
      "Referral notes (Manual or electronic)",
    ],
    steps: [
      "Confirm patient's trans-out order with medical team",
      "Assess patient's/clients condition",
      "Inform the receiving unit or facility about the intended transfer and the state of patient",
      "Explain reason for the trans out to patient and relatives",
      "Arrange for accompanying nurse and appropriate means of transportation",
      "Collect all necessary data",
      "Pack patient's personal belongings",
      "Collect patient's medication, laboratory results and transfer documents",
      "Ensure patient settles bills where applicable",
      "Assist patient onto stretcher, wheel chair or ambulance where applicable",
      "Hand over patient's notes and belongings to the accompanying nurse",
      "Ensure linen are removed",
      "Decontaminate beds and its accessories",
      "Make new bed for next patient",
    ],
    precautions: [
      "Confirm the authorized transfer order before moving the patient",
      "Assess the patient's clinical condition and stability before transfer",
      "Inform and confirm acceptance with the receiving unit or facility",
      "Use transportation appropriate to the patient's clinical condition",
      "Ensure oxygen, intravenous lines, drains, catheters and other devices are secure",
      "Ensure relevant records, medications, investigation results and belongings accompany the patient",
      "Maintain patient privacy, dignity and confidentiality",
      "Give a complete clinical handover to the receiving nurse/team",
      "Document the transfer and condition of the patient",
    ],
    videoUrl: "https://www.youtube.com/watch?v=GtrykPRGbao",
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
      "Routine personal hygiene and grooming",
      "Patient unable to independently maintain hand and foot hygiene",
      "Need for nail care",
      "Assessment of the skin of the hands and feet",
      "Prevention of skin problems associated with poor hygiene",
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
      "Assess the skin for wounds, infection, swelling, poor circulation or other abnormalities before nail care",
      "Use appropriate infection-prevention precautions",
      "Avoid causing cuts or injury while trimming nails",
      "Cut toenails across rather than deeply into the corners",
      "Use extra caution in patients with diabetes, poor circulation or reduced sensation",
      "Do not perform nail cutting when there is significant infection or tissue injury without appropriate clinical direction",
      "Ensure the water temperature is safe and acceptable to the patient",
      "Dispose of nail clippings and contaminated materials appropriately",
    ],
    videoUrl: "https://www.youtube.com/watch?v=QUGwjC1ZxIA",
    quiz: rgn_028Quiz,
  },

  {
    id: "rgn-029",
    title: "RECORDING OF INTAKE AND OUTPUT",
    category: "General Nursing (RGN)",
    overview:
      "It is the process of measuring and noting the amount and type of fluids introduced into the body and excreted from the body over a 24-hour period. This procedure assists the nurse to maintain an accurate record of a patient's fluid balance.\n\nFluid intake includes:\n1. Oral fluids\n2. Intravenous fluids\n3. Nasopharyngeal fluids\n4. Intragastric fluids\n\nFluid output includes:\nUrine\nVomitus\nAspirates\nDiarrhoeal stool\nSweat",
    purpose: [
      "Assess the therapeutic effects of medication",
      "Monitor fluid overload and dehydration",
    ],
    indications: [
      "Patients requiring monitoring of fluid balance",
      "Patients at risk of dehydration",
      "Patients at risk of fluid overload",
      "Patients receiving intravenous or other significant fluid therapy",
      "Patients with conditions affecting fluid balance",
      "Patients with significant fluid losses such as vomiting, diarrhoea or excessive drainage",
      "Patients requiring accurate urine output monitoring",
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
      "Obtain fluid intake and output chart (manually or electronically) and confirm with patient's identity",
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
      "Dispose off used items and decontaminate trolley",
    ],
    precautions: [
      "Confirm the patient's identity before recording intake or output",
      "Use appropriately calibrated or graduated measuring equipment",
      "Record all measurements accurately in milliliters",
      "Record the date and time of each measurement",
      "Measure urine, vomitus, drainage and other measurable fluid losses accurately",
      "Use standard precautions when handling body fluids",
      "Avoid contamination and spills during measurement",
      "Report abnormally low output, excessive losses or significant changes in fluid balance promptly",
      "Follow the prescribed monitoring frequency and facility fluid-balance policy",
      "Document totals accurately at the required interval and at the end of the 24-hour period",
    ],
    videoUrl: "https://www.youtube.com/watch?v=k3QNri_QCV8",
    quiz: rgn_029Quiz,
  },
];
