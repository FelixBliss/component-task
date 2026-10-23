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
    "What must be confirmed before beginning pre-operative preparation?",
    ["The type of surgery and operative site against the doctor's order", "The patient's preferred meal", "The visiting hours", "The ward cleaning schedule"],
    "The type of surgery and operative site against the doctor's order",
    "Step 1 requires confirming the planned procedure and site against the physician/doctor's order."
  ),
  q(
    "Which action supports communication before the procedure?",
    ["Establish rapport with the patient", "Begin site preparation without speaking", "Ask a visitor to explain the procedure", "Complete documentation without patient interaction"],
    "Establish rapport with the patient",
    "Step 2 calls for establishing rapport with the patient."
  ),
  q(
    "What should the nurse do with the preparation trolley?",
    ["Prepare it and send it to the bedside", "Leave it in the store", "Send it to the theatre without preparation", "Ask the patient to collect it"],
    "Prepare it and send it to the bedside",
    "Step 3 specifies preparing the trolley and sending it to the bedside."
  ),
  q(
    "What should be provided before exposing the patient?",
    ["Privacy", "A visitor's approval", "A meal", "A discharge form"],
    "Privacy",
    "Step 4 requires providing privacy to protect the patient's dignity."
  ),
  q(
    "What should the patient be asked to do before positioning for preparation?",
    ["Empty the bladder/bowel", "Remove all hospital identification", "Eat a full meal", "Walk to the theatre independently"],
    "Empty the bladder/bowel",
    "Step 5 states that the patient should be asked to empty the bladder/bowel."
  ),
  q(
    "How should the patient be placed for the procedure?",
    ["In a desirable position for the preparation", "In any position regardless of access", "Standing throughout the procedure", "In a position chosen by a visitor"],
    "In a desirable position for the preparation",
    "Step 6 requires positioning the patient desirably for the task."
  ),
  q(
    "Which area should be exposed during site preparation?",
    ["The site to be prepared", "The entire body unnecessarily", "Only the patient's feet", "The area selected by a visitor"],
    "The site to be prepared",
    "Step 7 specifies exposing the site that requires preparation."
  ),
  q(
    "What protects the bed clothes during site preparation?",
    ["A mackintosh and dressing towel", "A theatre gown only", "A name tag", "A consent form"],
    "A mackintosh and dressing towel",
    "Step 8 names a mackintosh and dressing towel as protection for the bed clothes."
  ),
  q(
    "What should the nurse wear at the step specified before washing the area?",
    ["Gloves", "A name tag instead of gloves", "Sterile footwear only", "No protective equipment"],
    "Gloves",
    "Step 9 instructs the nurse to wear gloves before washing the area."
  ),
  q(
    "What should be used to wash the operative area at this stage?",
    ["Mild soap and water", "Dry gauze only", "Perfume and tissue", "Alcohol gel alone"],
    "Mild soap and water",
    "Step 10 specifies washing the area with mild soap and water."
  ),
  q(
    "After washing the area, what does the supplied procedure specify?",
    ["Dry and clean the area with antiseptic lotion", "Cover it immediately without drying", "Apply body powder", "Leave the area wet"],
    "Dry and clean the area with antiseptic lotion",
    "Step 11 specifies drying and cleaning the area with antiseptic lotion."
  ),
  q(
    "How should the prepared area be covered according to the supplied steps?",
    ["With a sterile drape secured using adhesive strapping", "With an ordinary blanket only", "With used gauze", "With the patient's personal clothing"],
    "With a sterile drape secured using adhesive strapping",
    "Step 12 specifies a sterile drape secured in position with adhesive strapping."
  ),
  q(
    "What should the patient be dressed in after the site is covered?",
    ["A clean theatre gown", "The used preparation towel", "A wet dressing towel", "The nurse's uniform"],
    "A clean theatre gown",
    "Step 13 instructs dressing the patient in a clean theatre gown."
  ),
  q(
    "What should be done with the patient's name tag?",
    ["Label and apply it according to facility protocol", "Leave identification until after surgery", "Give it to a visitor", "Attach another patient's tag"],
    "Label and apply it according to facility protocol",
    "Step 14 requires labelling and applying the name tag according to facility protocol."
  ),
  q(
    "Which items should be removed if present, as directed by the supplied steps?",
    ["Accessories and dentures", "The patient's name tag", "All clinical records", "The sterile drape"],
    "Accessories and dentures",
    "Step 15 specifies removing accessories and dentures if any."
  ),
  q(
    "Which observations must be checked and recorded?",
    ["Vital signs", "Only the visitor count", "Only the room temperature", "Only the patient's meal choice"],
    "Vital signs",
    "Step 16 requires checking and recording vital signs."
  ),
  q(
    "What should the nurse assist the patient to do regarding consent?",
    ["Sign the consent form according to facility protocol", "Sign another patient's form", "Skip the consent process", "Ask a visitor to sign without authorization"],
    "Sign the consent form according to facility protocol",
    "Step 17 says to assist the patient to sign the consent form according to facility protocol; consent must be handled through the facility's authorized process."
  ),
  q(
    "What should be confirmed about investigations and preparation before surgery?",
    ["Required laboratory results, surgical items and medications are ready", "Only the patient's meal is ready", "Only visitors have arrived", "The ward television is switched off"],
    "Required laboratory results, surgical items and medications are ready",
    "Step 18 requires checking readiness of laboratory results, items for surgery and medications."
  ),
  q(
    "What should be done with used items and the trolley?",
    ["Dispose of used items and decontaminate the trolley", "Leave used items for the next patient", "Return contaminated items to clean storage", "Skip trolley cleaning if gloves were worn"],
    "Dispose of used items and decontaminate the trolley",
    "Step 19 requires safe disposal of used items and trolley decontamination."
  ),
  q(
    "Which infection-prevention action follows trolley decontamination in the supplied sequence?",
    ["Perform hand hygiene", "Put on the same used gloves", "Touch clean supplies with contaminated hands", "Skip hand hygiene after removing gloves"],
    "Perform hand hygiene",
    "Step 20 specifies hand hygiene."
  ),
  q(
    "When should the prescribed pre-medication be given according to the supplied procedure?",
    ["When the patient is ready for the theatre", "Whenever the nurse chooses, regardless of the prescription", "Only after discharge", "Before checking the prescription"],
    "When the patient is ready for the theatre",
    "Step 21 states to give prescribed pre-medication when the patient is ready for theatre, following the valid prescription and facility checks."
  ),
  q(
    "Which transport options are named for sending the patient to theatre?",
    ["A stretcher or wheelchair", "A visitor's private chair only", "Walking in every case", "A trolley used for dirty equipment"],
    "A stretcher or wheelchair",
    "Step 22 names a stretcher or wheelchair for transfer to theatre."
  ),
  q(
    "To whom should the patient, medical records and items be handed over?",
    ["The theatre staff", "Visitors in the waiting area", "Uninvolved patients", "The cleaning staff only"],
    "The theatre staff",
    "Step 23 requires handover of the patient, records and items to theatre staff."
  ),
  q(
    "Where should the nurse record the procedure?",
    ["In the appropriate manual or electronic notes", "Only in a personal notebook", "Only in a message to a visitor", "Nowhere if the patient has been transferred"],
    "In the appropriate manual or electronic notes",
    "Step 24 requires documentation in the appropriate manual or electronic notes."
  ),
  q(
    "What should be prepared to receive the patient after the procedure?",
    ["An operation bed", "A visitor's chair", "A meal trolley", "A storage cupboard"],
    "An operation bed",
    "Step 25 ends by directing the nurse to prepare an operation bed to receive the patient."
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
    types: [
  "N/A"
],
    overview:
      "This is the care given to patients before a surgical procedure. The nurse/midwife has a role to ensure that the patient is physically, psychologically and physiologically fit for the intended procedure.",
    purpose: [],
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
  "Consent form",
  "Pre-medication as ordered",
  "Patient’s medical records (Manual or electronic)"
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
  "Prepare an operation bed to receive the patient"
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
    videoUrl: "https://www.youtube.com/watch?v=oKFokcxPuwI",
    quiz: [
  {
    "question": "The nurse is carrying out pre-operative preparation of a patient. Which action best matches this part of the procedure?",
    "options": [
      "Confirm the type of surgical procedure and site against physician/doctor’s order",
      "Ask patient to empty bladder/bowel",
      "Check and record vital signs",
      "Prepare and send trolley to bedside"
    ],
    "answer": "Confirm the type of surgical procedure and site against physician/doctor’s order",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete pre-operative preparation of a patient safely, which action should the nurse take at this point?",
    "options": [
      "Wash the area with mild soap and water",
      "Establish rapport with patient (Refer to steps)",
      "Cover area with sterile drape and secure it in position with adhesive strapping",
      "Hand over patient, medical records and items to the theater staff"
    ],
    "answer": "Establish rapport with patient (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during pre-operative preparation of a patient?",
    "options": [
      "Place patient into a desirable position",
      "Assist patient to sign the consent form as per facility’s protocol",
      "Prepare and send trolley to bedside",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Prepare and send trolley to bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "A patient is about to undergo pre-operative preparation of a patient. Which action protects their dignity during preparation?",
    "options": [
      "Confirm the type of surgical procedure and site against physician/doctor’s order",
      "Dress patient with a clean theatre gown",
      "Document procedure in the appropriate notes (manual/electronic)",
      "Provide privacy"
    ],
    "answer": "Provide privacy",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "The nurse is carrying out pre-operative preparation of a patient. Which action best matches this part of the procedure?",
    "options": [
      "Ask patient to empty bladder/bowel",
      "Wear gloves",
      "Perform hand hygiene",
      "Expose the site to be prepared"
    ],
    "answer": "Ask patient to empty bladder/bowel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for pre-operative preparation of a patient, what should guide the nurse's choice of position?",
    "options": [
      "Label and apply the name tag as per facility’s protocol",
      "Place patient into a desirable position",
      "Check and record vital signs",
      "Establish rapport with patient (Refer to steps)"
    ],
    "answer": "Place patient into a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Which step should be performed now during pre-operative preparation of a patient?",
    "options": [
      "Wash the area with mild soap and water",
      "Give prescribed pre-medication when patient is ready for the theatre",
      "Expose the site to be prepared",
      "Hand over patient, medical records and items to the theater staff"
    ],
    "answer": "Expose the site to be prepared",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of pre-operative preparation of a patient?",
    "options": [
      "Ask patient to empty bladder/bowel",
      "Assist patient to sign the consent form as per facility’s protocol",
      "Prepare and send trolley to bedside",
      "Protect the bed clothes with a mackintosh and dressing towel"
    ],
    "answer": "Protect the bed clothes with a mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out pre-operative preparation of a patient. Which action best matches this part of the procedure?",
    "options": [
      "Wear gloves",
      "Dress patient with a clean theatre gown",
      "Document procedure in the appropriate notes (manual/electronic)",
      "Dry and clean area with antiseptic lotion"
    ],
    "answer": "Wear gloves",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete pre-operative preparation of a patient safely, which action should the nurse take at this point?",
    "options": [
      "Confirm if all laboratory results, items for surgery and medications are ready for the procedure",
      "Wash the area with mild soap and water",
      "Perform hand hygiene",
      "Place patient into a desirable position"
    ],
    "answer": "Wash the area with mild soap and water",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during pre-operative preparation of a patient?",
    "options": [
      "Label and apply the name tag as per facility’s protocol",
      "Prepare an operation bed to receive the patient",
      "Dry and clean area with antiseptic lotion",
      "Establish rapport with patient (Refer to steps)"
    ],
    "answer": "Dry and clean area with antiseptic lotion",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for pre-operative preparation of a patient, what should guide the nurse's choice of position?",
    "options": [
      "Wear gloves",
      "Give prescribed pre-medication when patient is ready for the theatre",
      "Expose the site to be prepared",
      "Cover area with sterile drape and secure it in position with adhesive strapping"
    ],
    "answer": "Cover area with sterile drape and secure it in position with adhesive strapping",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "The nurse is carrying out pre-operative preparation of a patient. Which action best matches this part of the procedure?",
    "options": [
      "Dress patient with a clean theatre gown",
      "Assist patient to sign the consent form as per facility’s protocol",
      "Prepare and send trolley to bedside",
      "Remove accessories and dentures if any"
    ],
    "answer": "Dress patient with a clean theatre gown",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete pre-operative preparation of a patient safely, which action should the nurse take at this point?",
    "options": [
      "Send patient to the theater either on a stretcher or wheelchair",
      "Label and apply the name tag as per facility’s protocol",
      "Document procedure in the appropriate notes (manual/electronic)",
      "Wash the area with mild soap and water"
    ],
    "answer": "Label and apply the name tag as per facility’s protocol",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during pre-operative preparation of a patient?",
    "options": [
      "Confirm if all laboratory results, items for surgery and medications are ready for the procedure",
      "Provide privacy",
      "Remove accessories and dentures if any",
      "Place patient into a desirable position"
    ],
    "answer": "Remove accessories and dentures if any",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "While providing pre-operative preparation of a patient, why must the nurse complete the prescribed observations at the specified intervals?",
    "options": [
      "Dress patient with a clean theatre gown",
      "Prepare an operation bed to receive the patient",
      "Dry and clean area with antiseptic lotion",
      "Check and record vital signs"
    ],
    "answer": "Check and record vital signs",
    "explanation": "Trended observations help detect deterioration early. Record the measurements, compare them with previous findings and escalate abnormal values or clinical concern according to local policy."
  },
  {
    "question": "Before carrying out pre-operative preparation of a patient, what should the nurse do to support informed cooperation?",
    "options": [
      "Assist patient to sign the consent form as per facility’s protocol",
      "Give prescribed pre-medication when patient is ready for the theatre",
      "Expose the site to be prepared",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Assist patient to sign the consent form as per facility’s protocol",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Confirm the type of surgical procedure and site against physician/doctor’s order",
      "Confirm if all laboratory results, items for surgery and medications are ready for the procedure",
      "Prepare and send trolley to bedside",
      "Label and apply the name tag as per facility’s protocol"
    ],
    "answer": "Confirm if all laboratory results, items for surgery and medications are ready for the procedure",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "After the hands-on part of pre-operative preparation of a patient, how should used equipment and waste be managed?",
    "options": [
      "Send patient to the theater either on a stretcher or wheelchair",
      "Protect the bed clothes with a mackintosh and dressing towel",
      "Dispose off used items and decontaminate trolley",
      "Wash the area with mild soap and water"
    ],
    "answer": "Dispose off used items and decontaminate trolley",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with pre-operative preparation of a patient, what infection-prevention action is required at this point?",
    "options": [
      "Assist patient to sign the consent form as per facility’s protocol",
      "Provide privacy",
      "Remove accessories and dentures if any",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Give prescribed pre-medication when patient is ready for the theatre",
      "Prepare an operation bed to receive the patient",
      "Dry and clean area with antiseptic lotion",
      "Hand over patient, medical records and items to the theater staff"
    ],
    "answer": "Give prescribed pre-medication when patient is ready for the theatre",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete pre-operative preparation of a patient safely, which action should the nurse take at this point?",
    "options": [
      "Ask patient to empty bladder/bowel",
      "Send patient to the theater either on a stretcher or wheelchair",
      "Expose the site to be prepared",
      "Confirm if all laboratory results, items for surgery and medications are ready for the procedure"
    ],
    "answer": "Send patient to the theater either on a stretcher or wheelchair",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during pre-operative preparation of a patient?",
    "options": [
      "Confirm the type of surgical procedure and site against physician/doctor’s order",
      "Cover area with sterile drape and secure it in position with adhesive strapping",
      "Hand over patient, medical records and items to the theater staff",
      "Label and apply the name tag as per facility’s protocol"
    ],
    "answer": "Hand over patient, medical records and items to the theater staff",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After completing this part of pre-operative preparation of a patient, what makes the clinical record useful for continuity of care?",
    "options": [
      "Give prescribed pre-medication when patient is ready for the theatre",
      "Protect the bed clothes with a mackintosh and dressing towel",
      "Dispose off used items and decontaminate trolley",
      "Document procedure in the appropriate notes (manual/electronic)"
    ],
    "answer": "Document procedure in the appropriate notes (manual/electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "The nurse is carrying out pre-operative preparation of a patient. Which action best matches this part of the procedure?",
    "options": [
      "Prepare an operation bed to receive the patient",
      "Provide privacy",
      "Remove accessories and dentures if any",
      "Establish rapport with patient (Refer to steps)"
    ],
    "answer": "Prepare an operation bed to receive the patient",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },

  {
    id: "rgn-022",
    title: "TEPID SPONGING",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "Tepid sponging is the application of lukewarm water on the skin surface when the body temperature is above 39℃. The temperature of the water used should be between 27-37℃. The procedure is based on the principle of conduction and evaporation of heat.",
    purpose: [],
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
  "Bottom shelf:",
  "Two jugs with hot and cold water respectively",
  "Disposable gloves",
  "Long mackintosh and bath blanket",
  "Receptacle for soiled linen",
  "Receptacle for used water",
  "New linen and clothing",
  "Bath towel"
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
  "Document procedures, charts temperature and report findings to appropriate officer"
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
    quiz: [
  {
    "question": "The nurse is carrying out tepid sponging. Which action best matches this part of the procedure?",
    "options": [
      "Establish rapport with patient and relatives (Refer to steps)",
      "Prepare trolley and send to the bedside",
      "Place the wet towel on the forehead of patient",
      "Document procedures, charts temperature and report findings to appropriate officer"
    ],
    "answer": "Establish rapport with patient and relatives (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out tepid sponging, what should the nurse do to support informed cooperation?",
    "options": [
      "Protect bottom sheet with a long mackintosh and bath blanket",
      "Explain procedure to patient and relatives (Refer to steps)",
      "Squeeze out excess water, place a wet towel in each axilla and groin",
      "Remove long mackintosh and bath blanket"
    ],
    "answer": "Explain procedure to patient and relatives (Refer to steps)",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "A patient is about to undergo tepid sponging. Which action protects their dignity during preparation?",
    "options": [
      "Perform hand hygiene",
      "Wash and dry the face of the patient to refresh him/her",
      "Provide privacy",
      "Leave patient for 15-20 minutes"
    ],
    "answer": "Provide privacy",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "Before proceeding with tepid sponging, what infection-prevention action is required at this point?",
    "options": [
      "Serve prescribed antipyretic",
      "Place the pieces of towels into the basin with tepid water",
      "Repeat procedure till temperatures falls by 1℃",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "The nurse is carrying out tepid sponging. Which action best matches this part of the procedure?",
    "options": [
      "Prepare trolley and send to the bedside",
      "Arrange top bed/counterpane clothes leaving top sheet",
      "Change water as often as necessary",
      "Explain procedure to patient and relatives (Refer to steps)"
    ],
    "answer": "Prepare trolley and send to the bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete tepid sponging safely, which action should the nurse take at this point?",
    "options": [
      "Prepare the tepid water in the bowel/basin, test the water with the bath thermometer or elbow",
      "Check and record patient’s temperature",
      "Sponge lower limbs, trunk, back and upper arms in strokes",
      "Serve cold drink if patient can tolerate"
    ],
    "answer": "Check and record patient’s temperature",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during tepid sponging?",
    "options": [
      "Prepare trolley and send to the bedside",
      "Leave small drops of water on the skin",
      "Arrange top bed/counterpane clothes leaving top sheet",
      "Recheck temperature and record"
    ],
    "answer": "Arrange top bed/counterpane clothes leaving top sheet",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of tepid sponging?",
    "options": [
      "Establish rapport with patient and relatives (Refer to steps)",
      "Change the wet towel frequently to keep them tepid",
      "Assist patient to dress up and put him/her into a desirable position",
      "Protect bottom sheet with a long mackintosh and bath blanket"
    ],
    "answer": "Protect bottom sheet with a long mackintosh and bath blanket",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out tepid sponging. Which action best matches this part of the procedure?",
    "options": [
      "Undress the patient leaving him/her covered with the top sheet",
      "Protect bottom sheet with a long mackintosh and bath blanket",
      "Cover the patient with the top bedclothing",
      "Perform hand hygiene"
    ],
    "answer": "Undress the patient leaving him/her covered with the top sheet",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete tepid sponging safely, which action should the nurse take at this point?",
    "options": [
      "Squeeze out excess water, place a wet towel in each axilla and groin",
      "Prepare the tepid water in the bowel/basin, test the water with the bath thermometer or elbow",
      "Place the wet towel on the forehead of patient",
      "Document procedures, charts temperature and report findings to appropriate officer"
    ],
    "answer": "Prepare the tepid water in the bowel/basin, test the water with the bath thermometer or elbow",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during tepid sponging?",
    "options": [
      "Arrange top bed/counterpane clothes leaving top sheet",
      "Leave patient for 15-20 minutes",
      "Place the pieces of towels into the basin with tepid water",
      "Remove long mackintosh and bath blanket"
    ],
    "answer": "Place the pieces of towels into the basin with tepid water",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of tepid sponging?",
    "options": [
      "Provide privacy",
      "Wash and dry the face of the patient to refresh him/her",
      "Serve prescribed antipyretic",
      "Squeeze out excess water, place a wet towel in each axilla and groin"
    ],
    "answer": "Squeeze out excess water, place a wet towel in each axilla and groin",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out tepid sponging. Which action best matches this part of the procedure?",
    "options": [
      "Change the wet towel frequently to keep them tepid",
      "Prepare the tepid water in the bowel/basin, test the water with the bath thermometer or elbow",
      "Repeat procedure till temperatures falls by 1℃",
      "Check and record patient’s temperature"
    ],
    "answer": "Change the wet towel frequently to keep them tepid",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete tepid sponging safely, which action should the nurse take at this point?",
    "options": [
      "Change the wet towel frequently to keep them tepid",
      "Sponge lower limbs, trunk, back and upper arms in strokes",
      "Change water as often as necessary",
      "Explain procedure to patient and relatives (Refer to steps)"
    ],
    "answer": "Sponge lower limbs, trunk, back and upper arms in strokes",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during tepid sponging?",
    "options": [
      "Undress the patient leaving him/her covered with the top sheet",
      "Recheck temperature and record",
      "Wash and dry the face of the patient to refresh him/her",
      "Serve cold drink if patient can tolerate"
    ],
    "answer": "Wash and dry the face of the patient to refresh him/her",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of tepid sponging?",
    "options": [
      "Prepare trolley and send to the bedside",
      "Leave small drops of water on the skin",
      "Establish rapport with patient and relatives (Refer to steps)",
      "Place the wet towel on the forehead of patient"
    ],
    "answer": "Place the wet towel on the forehead of patient",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out tepid sponging. Which action best matches this part of the procedure?",
    "options": [
      "Leave small drops of water on the skin",
      "Squeeze out excess water, place a wet towel in each axilla and groin",
      "Assist patient to dress up and put him/her into a desirable position",
      "Protect bottom sheet with a long mackintosh and bath blanket"
    ],
    "answer": "Leave small drops of water on the skin",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete tepid sponging safely, which action should the nurse take at this point?",
    "options": [
      "Wash and dry the face of the patient to refresh him/her",
      "Change water as often as necessary",
      "Cover the patient with the top bedclothing",
      "Perform hand hygiene"
    ],
    "answer": "Change water as often as necessary",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during tepid sponging?",
    "options": [
      "Place the pieces of towels into the basin with tepid water",
      "Remove long mackintosh and bath blanket",
      "Leave patient for 15-20 minutes",
      "Document procedures, charts temperature and report findings to appropriate officer"
    ],
    "answer": "Leave patient for 15-20 minutes",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of tepid sponging?",
    "options": [
      "Arrange top bed/counterpane clothes leaving top sheet",
      "Change water as often as necessary",
      "Provide privacy",
      "Cover the patient with the top bedclothing"
    ],
    "answer": "Cover the patient with the top bedclothing",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out tepid sponging. Which action best matches this part of the procedure?",
    "options": [
      "Recheck temperature and record",
      "Sponge lower limbs, trunk, back and upper arms in strokes",
      "Serve prescribed antipyretic",
      "Prepare the tepid water in the bowel/basin, test the water with the bath thermometer or elbow"
    ],
    "answer": "Recheck temperature and record",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete tepid sponging safely, which action should the nurse take at this point?",
    "options": [
      "Leave small drops of water on the skin",
      "Repeat procedure till temperatures falls by 1℃",
      "Recheck temperature and record",
      "Check and record patient’s temperature"
    ],
    "answer": "Repeat procedure till temperatures falls by 1℃",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during tepid sponging?",
    "options": [
      "Change the wet towel frequently to keep them tepid",
      "Serve cold drink if patient can tolerate",
      "Remove long mackintosh and bath blanket",
      "Explain procedure to patient and relatives (Refer to steps)"
    ],
    "answer": "Remove long mackintosh and bath blanket",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for tepid sponging, what should guide the nurse's choice of position?",
    "options": [
      "Undress the patient leaving him/her covered with the top sheet",
      "Cover the patient with the top bedclothing",
      "Prepare trolley and send to the bedside",
      "Assist patient to dress up and put him/her into a desirable position"
    ],
    "answer": "Assist patient to dress up and put him/her into a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Before proceeding with tepid sponging, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Leave small drops of water on the skin",
      "Establish rapport with patient and relatives (Refer to steps)",
      "Change the wet towel frequently to keep them tepid"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete tepid sponging safely, which action should the nurse take at this point?",
    "options": [
      "Leave patient for 15-20 minutes",
      "Serve cold drink if patient can tolerate",
      "Remove long mackintosh and bath blanket",
      "Protect bottom sheet with a long mackintosh and bath blanket"
    ],
    "answer": "Serve cold drink if patient can tolerate",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Wash and dry the face of the patient to refresh him/her",
      "Document procedures, charts temperature and report findings to appropriate officer",
      "Serve prescribed antipyretic",
      "Perform hand hygiene"
    ],
    "answer": "Serve prescribed antipyretic",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "After completing this part of tepid sponging, what makes the clinical record useful for continuity of care?",
    "options": [
      "Place the pieces of towels into the basin with tepid water",
      "Repeat procedure till temperatures falls by 1℃",
      "Arrange top bed/counterpane clothes leaving top sheet",
      "Document procedures, charts temperature and report findings to appropriate officer"
    ],
    "answer": "Document procedures, charts temperature and report findings to appropriate officer",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  }
],
  },

  {
    id: "rgn-023",
    title: "PREPARATION FOR WARD ROUNDS",
    category: "General Nursing (RGN)",
    types: [
  "Planned/Routine",
  "Adhoc/Emergency"
],
    overview:
      "Ward rounds is an organized review of in-patients by the health care team members. It is to discuss, make decisions and assign responsibilities to various practitioners in relation to the management of patients' condition. The nurse/midwife has the responsibility to ensure that the needed gadgets or devices are readily available for the activity. The nurse/midwife ensures that accurate documentation is done.",
    purpose: [],
    indications: [
      "Planned or routine ward round",
      "Multidisciplinary review of admitted patients",
      "Review of patients with changing or complex clinical needs",
      "Ad hoc or emergency clinical review",
    ],
    equipment: [
  "A trolley containing the following: \\n Top shelf",
  "Adequate supply of tablet for documentation or the following stationery:",
  "Patient’s Medical Records",
  "Nurse’s changes book",
  "Continuation sheet",
  "Treatment sheet",
  "Investigative request forms e.g. X’ray, laboratory",
  "Prescription form",
  "Stapler with pins",
  "Bottom shelf",
  "Vital signs tray",
  "Diagnostic set",
  "Pocket torch light",
  "Measuring tape",
  "Disposable tongue depressors/padded spatula",
  "Neurological set",
  "Receiver for used articles",
  "Other trays may be set depending on the specific needs of patient"
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
  "Ensure patient’s notes are returned to their proper place on the rack after the procedure"
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
    quiz: [
  {
    "question": "The nurse is carrying out preparation for ward rounds. Which action best matches this part of the procedure?",
    "options": [
      "Ensure the ward and its annexes are clean",
      "Ensure all reports are dully filed and records are up to date",
      "Ensure all patients and visitors are in bed and out of the ward respectively",
      "Conduct charge nurse’s round, note down concerns and complaints of patients"
    ],
    "answer": "Ensure the ward and its annexes are clean",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete preparation for ward rounds safely, which action should the nurse take at this point?",
    "options": [
      "Conduct charge nurse’s round, note down concerns and complaints of patients",
      "Ensure all patients and visitors are in bed and out of the ward respectively",
      "Ensure patient’s notes are returned to their proper place on the rack after the procedure",
      "Ensure the ward and its annexes are clean"
    ],
    "answer": "Ensure all patients and visitors are in bed and out of the ward respectively",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during preparation for ward rounds?",
    "options": [
      "Ensure the ward and its annexes are clean",
      "Ensure all patients and visitors are in bed and out of the ward respectively",
      "Conduct charge nurse’s round, note down concerns and complaints of patients",
      "Assist when doctor is examining the patients"
    ],
    "answer": "Conduct charge nurse’s round, note down concerns and complaints of patients",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of preparation for ward rounds?",
    "options": [
      "Conduct charge nurse’s round, note down concerns and complaints of patients",
      "Ensure the ward and its annexes are clean",
      "Ensure all patients and visitors are in bed and out of the ward respectively",
      "Classify patients according to their needs or depending on the protocol of the unit"
    ],
    "answer": "Classify patients according to their needs or depending on the protocol of the unit",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out preparation for ward rounds. Which action best matches this part of the procedure?",
    "options": [
      "Ensure all reports are dully filed and records are up to date",
      "Record all changes, directives and tasks assigned in appropriate documents",
      "Ensure the ward and its annexes are clean",
      "Ensure all patients and visitors are in bed and out of the ward respectively"
    ],
    "answer": "Ensure all reports are dully filed and records are up to date",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete preparation for ward rounds safely, which action should the nurse take at this point?",
    "options": [
      "Ensure all patients and visitors are in bed and out of the ward respectively",
      "Arrange patient’s medical records in the correct sequence for the rounds",
      "Facilitate rounds, present patients’ problems, concerns and progress",
      "Ensure the ward and its annexes are clean"
    ],
    "answer": "Arrange patient’s medical records in the correct sequence for the rounds",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during preparation for ward rounds?",
    "options": [
      "Ensure the ward and its annexes are clean",
      "Conduct charge nurse’s round, note down concerns and complaints of patients",
      "Facilitate rounds, present patients’ problems, concerns and progress",
      "Ensure all patients and visitors are in bed and out of the ward respectively"
    ],
    "answer": "Facilitate rounds, present patients’ problems, concerns and progress",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of preparation for ward rounds?",
    "options": [
      "Provide appropriate answers to patients’ questions",
      "Ensure the ward and its annexes are clean",
      "Ensure all patients and visitors are in bed and out of the ward respectively",
      "Assist when doctor is examining the patients"
    ],
    "answer": "Assist when doctor is examining the patients",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out preparation for ward rounds. Which action best matches this part of the procedure?",
    "options": [
      "Give patients’ opportunity to ask questions",
      "Ensure all reports are dully filed and records are up to date",
      "Ensure the ward and its annexes are clean",
      "Ensure all patients and visitors are in bed and out of the ward respectively"
    ],
    "answer": "Give patients’ opportunity to ask questions",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete preparation for ward rounds safely, which action should the nurse take at this point?",
    "options": [
      "Conduct charge nurse’s round, note down concerns and complaints of patients",
      "Provide appropriate answers to patients’ questions",
      "Ensure the ward and its annexes are clean",
      "Ensure all patients and visitors are in bed and out of the ward respectively"
    ],
    "answer": "Provide appropriate answers to patients’ questions",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After completing this part of preparation for ward rounds, what makes the clinical record useful for continuity of care?",
    "options": [
      "Ensure the ward and its annexes are clean",
      "Ensure all patients and visitors are in bed and out of the ward respectively",
      "Record all changes, directives and tasks assigned in appropriate documents",
      "Assist when doctor is examining the patients"
    ],
    "answer": "Record all changes, directives and tasks assigned in appropriate documents",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "Which nursing action is required at this stage of preparation for ward rounds?",
    "options": [
      "Classify patients according to their needs or depending on the protocol of the unit",
      "Ensure the ward and its annexes are clean",
      "Ensure all patients and visitors are in bed and out of the ward respectively",
      "Ensure patient’s notes are returned to their proper place on the rack after the procedure"
    ],
    "answer": "Ensure patient’s notes are returned to their proper place on the rack after the procedure",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },

  {
    id: "rgn-024",
    title: "DEVELOPING INTERPERSONAL RELATIONSHIP WITH THE PATIENT/CLIENT (ESTABLISHING RAPPORT)",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "This is the process of building a therapeutic relationship with patient/client and family who visits the hospital. It makes the patient/client and family feel at ease to discuss his/her needs with the nurse. This action is performed by the nurse immediately he/she comes into contact with a patient/client and family.",
    purpose: [],
    indications: [
      "At the beginning of the nurse-patient relationship",
      "On admission or first contact with a patient/client",
      "When establishing therapeutic communication with a patient/client and family",
      "When the patient/client requires emotional support or clarification",
    ],
    equipment: [
  "N/A"
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
  "Express appreciation to patient/client for his/her cooperation"
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
    quiz: [
  {
    "question": "The nurse is carrying out developing interpersonal relationship with the patient/client (establishing rapport). Which action best matches this part of the procedure?",
    "options": [
      "Introduce yourself to the patient/client",
      "Assure patient/client of total confidentiality",
      "Maintain a relaxed attitude when interacting with patient/client",
      "Identify patient/client’s name, title and address him/her as such"
    ],
    "answer": "Introduce yourself to the patient/client",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete developing interpersonal relationship with the patient/client (establishing rapport) safely, which action should the nurse take at this point?",
    "options": [
      "Identify patient/client’s name, title and address him/her as such",
      "Maintain a relaxed attitude when interacting with patient/client",
      "Express appreciation to patient/client for his/her cooperation",
      "Introduce yourself to the patient/client"
    ],
    "answer": "Maintain a relaxed attitude when interacting with patient/client",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during developing interpersonal relationship with the patient/client (establishing rapport)?",
    "options": [
      "Introduce yourself to the patient/client",
      "Maintain a relaxed attitude when interacting with patient/client",
      "Identify patient/client’s name, title and address him/her as such",
      "Encourage patient/client to express his/her needs and listen attentively"
    ],
    "answer": "Identify patient/client’s name, title and address him/her as such",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of developing interpersonal relationship with the patient/client (establishing rapport)?",
    "options": [
      "Identify patient/client’s name, title and address him/her as such",
      "Introduce yourself to the patient/client",
      "Maintain a relaxed attitude when interacting with patient/client",
      "Speak to patient/client using simple and clear language"
    ],
    "answer": "Speak to patient/client using simple and clear language",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out developing interpersonal relationship with the patient/client (establishing rapport). Which action best matches this part of the procedure?",
    "options": [
      "Assure patient/client of total confidentiality",
      "Demonstrate firmness in dealing with inappropriate requests and behaviour by the patient/client if any",
      "Introduce yourself to the patient/client",
      "Maintain a relaxed attitude when interacting with patient/client"
    ],
    "answer": "Assure patient/client of total confidentiality",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete developing interpersonal relationship with the patient/client (establishing rapport) safely, which action should the nurse take at this point?",
    "options": [
      "Maintain a relaxed attitude when interacting with patient/client",
      "Establish eye contact with the patient/client during the interaction",
      "Enquire from the patient/client the purpose of visit (if applicable)",
      "Introduce yourself to the patient/client"
    ],
    "answer": "Establish eye contact with the patient/client during the interaction",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during developing interpersonal relationship with the patient/client (establishing rapport)?",
    "options": [
      "Introduce yourself to the patient/client",
      "Identify patient/client’s name, title and address him/her as such",
      "Enquire from the patient/client the purpose of visit (if applicable)",
      "Maintain a relaxed attitude when interacting with patient/client"
    ],
    "answer": "Enquire from the patient/client the purpose of visit (if applicable)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of developing interpersonal relationship with the patient/client (establishing rapport)?",
    "options": [
      "Show consistency in approaching the patient/client",
      "Introduce yourself to the patient/client",
      "Maintain a relaxed attitude when interacting with patient/client",
      "Encourage patient/client to express his/her needs and listen attentively"
    ],
    "answer": "Encourage patient/client to express his/her needs and listen attentively",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out developing interpersonal relationship with the patient/client (establishing rapport), what should the nurse do to support informed cooperation?",
    "options": [
      "Explain to patient/client what he/she should expect from the nurses",
      "Assure patient/client of total confidentiality",
      "Introduce yourself to the patient/client",
      "Maintain a relaxed attitude when interacting with patient/client"
    ],
    "answer": "Explain to patient/client what he/she should expect from the nurses",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "To complete developing interpersonal relationship with the patient/client (establishing rapport) safely, which action should the nurse take at this point?",
    "options": [
      "Identify patient/client’s name, title and address him/her as such",
      "Show consistency in approaching the patient/client",
      "Introduce yourself to the patient/client",
      "Maintain a relaxed attitude when interacting with patient/client"
    ],
    "answer": "Show consistency in approaching the patient/client",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during developing interpersonal relationship with the patient/client (establishing rapport)?",
    "options": [
      "Introduce yourself to the patient/client",
      "Maintain a relaxed attitude when interacting with patient/client",
      "Demonstrate firmness in dealing with inappropriate requests and behaviour by the patient/client if any",
      "Encourage patient/client to express his/her needs and listen attentively"
    ],
    "answer": "Demonstrate firmness in dealing with inappropriate requests and behaviour by the patient/client if any",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of developing interpersonal relationship with the patient/client (establishing rapport)?",
    "options": [
      "Speak to patient/client using simple and clear language",
      "Introduce yourself to the patient/client",
      "Maintain a relaxed attitude when interacting with patient/client",
      "Express appreciation to patient/client for his/her cooperation"
    ],
    "answer": "Express appreciation to patient/client for his/her cooperation",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },

  {
    id: "rgn-025",
    title: "ORIENTATION OF PATIENT TO WARD ENVIRONMENT (AMBULANT)",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "Is the practice of introducing the in-patient to the staff and ward setting. This activity enables the patient and relatives to adapt to his/her new setting and know the routines of the ward.",
    purpose: [],
    indications: [
      "New admission to the ward",
      "Transfer of an ambulant patient to a new ward",
      "When a patient requires orientation to a new ward environment",
      "When ward routines or facilities need to be explained to the patient",
    ],
    equipment: [
  "N/A"
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
  "Report to appropriate officer"
],
    precautions: [
      "Maintain patient privacy and dignity during orientation",
      "Provide information appropriate to the patient's level of understanding",
      "Do not disclose other patients' diagnoses or confidential information",
      "Identify potential environmental hazards and explain relevant safety measures",
      "Ensure the patient knows whom to contact for assistance",
      "Consider mobility, sensory and cognitive limitations when providing orientation",
    ],
    quiz: [
  {
    "question": "The nurse is carrying out orientation of patient to ward environment (ambulant). Which action best matches this part of the procedure?",
    "options": [
      "Establish rapport with patient and relatives (Refer to steps)",
      "Show patient his/her bed",
      "Introduce patient to ward staff around",
      "Report to appropriate officer"
    ],
    "answer": "Establish rapport with patient and relatives (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete orientation of patient to ward environment (ambulant) safely, which action should the nurse take at this point?",
    "options": [
      "Show patient the bathroom, toilet and how the sanitary fittings operates",
      "Mention the name of the ward to patient and relatives",
      "Encourage patient to ask questions for clarity",
      "Inform patient of ward routines and activities"
    ],
    "answer": "Mention the name of the ward to patient and relatives",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during orientation of patient to ward environment (ambulant)?",
    "options": [
      "Show patient the nurse’s station",
      "Establish rapport with patient and relatives (Refer to steps)",
      "Introduce patient to ward staff around",
      "Show patient his/her bed side cabinet/locker and how it operates"
    ],
    "answer": "Introduce patient to ward staff around",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of orientation of patient to ward environment (ambulant)?",
    "options": [
      "Thank patient and send him/her to bed",
      "Inform patient whom to contact for any information or complaints",
      "Show patient the kitchen, day room and its uses (if available)",
      "Show patient the nurse’s station"
    ],
    "answer": "Show patient the nurse’s station",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out orientation of patient to ward environment (ambulant). Which action best matches this part of the procedure?",
    "options": [
      "Show patient his/her bed",
      "Introduce him/her to other patients if any",
      "Show patient the nurse’s station",
      "Mention the name of the ward to patient and relatives"
    ],
    "answer": "Show patient his/her bed",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete orientation of patient to ward environment (ambulant) safely, which action should the nurse take at this point?",
    "options": [
      "Inform patient of ward routines and activities",
      "Show patient his/her bed side cabinet/locker and how it operates",
      "Report to appropriate officer",
      "Encourage patient to ask questions for clarity"
    ],
    "answer": "Show patient his/her bed side cabinet/locker and how it operates",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during orientation of patient to ward environment (ambulant)?",
    "options": [
      "Show patient his/her bed",
      "Introduce patient to ward staff around",
      "Introduce him/her to other patients if any",
      "Show patient the bathroom, toilet and how the sanitary fittings operates"
    ],
    "answer": "Introduce him/her to other patients if any",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of orientation of patient to ward environment (ambulant)?",
    "options": [
      "Establish rapport with patient and relatives (Refer to steps)",
      "Thank patient and send him/her to bed",
      "Inform patient whom to contact for any information or complaints",
      "Show patient the bathroom, toilet and how the sanitary fittings operates"
    ],
    "answer": "Show patient the bathroom, toilet and how the sanitary fittings operates",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out orientation of patient to ward environment (ambulant). Which action best matches this part of the procedure?",
    "options": [
      "Show patient the kitchen, day room and its uses (if available)",
      "Show patient the bathroom, toilet and how the sanitary fittings operates",
      "Show patient his/her bed side cabinet/locker and how it operates",
      "Show patient the nurse’s station"
    ],
    "answer": "Show patient the kitchen, day room and its uses (if available)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out orientation of patient to ward environment (ambulant), what should the nurse do to support informed cooperation?",
    "options": [
      "Encourage patient to ask questions for clarity",
      "Inform patient of ward routines and activities",
      "Mention the name of the ward to patient and relatives",
      "Report to appropriate officer"
    ],
    "answer": "Inform patient of ward routines and activities",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before carrying out orientation of patient to ward environment (ambulant), what should the nurse do to support informed cooperation?",
    "options": [
      "Introduce him/her to other patients if any",
      "Show patient his/her bed",
      "Inform patient whom to contact for any information or complaints",
      "Show patient the kitchen, day room and its uses (if available)"
    ],
    "answer": "Inform patient whom to contact for any information or complaints",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Which nursing action is required at this stage of orientation of patient to ward environment (ambulant)?",
    "options": [
      "Introduce patient to ward staff around",
      "Establish rapport with patient and relatives (Refer to steps)",
      "Thank patient and send him/her to bed",
      "Encourage patient to ask questions for clarity"
    ],
    "answer": "Encourage patient to ask questions for clarity",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out orientation of patient to ward environment (ambulant). Which action best matches this part of the procedure?",
    "options": [
      "Thank patient and send him/her to bed",
      "Inform patient of ward routines and activities",
      "Show patient the bathroom, toilet and how the sanitary fittings operates",
      "Show patient his/her bed side cabinet/locker and how it operates"
    ],
    "answer": "Thank patient and send him/her to bed",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete orientation of patient to ward environment (ambulant) safely, which action should the nurse take at this point?",
    "options": [
      "Thank patient and send him/her to bed",
      "Report to appropriate officer",
      "Show patient the nurse’s station",
      "Mention the name of the ward to patient and relatives"
    ],
    "answer": "Report to appropriate officer",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },

  {
    id: "rgn-026",
    title: "TRANSFER-IN (TRANS-IN)",
    category: "General Nursing (RGN)",
    types: [
  "Unit to unit",
  "Unit to a center",
  "Unit to department",
  "The reverse of (2) and (3) above"
],
    overview:
      "This is when a patient is received from another unit or place of first admission to a new unit or department. The patient can be received from a wheelchair, bed or trolley within the same facility. The ambulance can be used when the patient is being transferred from one unit/department to the other within the same hospital.",
    purpose: [],
    indications: [
      "Unit to unit",
      "Unit to a center",
      "Unit to department",
      "Transfer between healthcare facilities",
      "Transfer for specialty treatment or investigation",
    ],
    equipment: [
  "Patient’s medical records (Manual or electronic)",
  "Referral notes (Manual or electronic)"
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
  "Plan care for the patient/client"
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
    videoUrl: "https://vimeo.com/691787237",
    quiz: [
  {
    "question": "The nurse is carrying out transfer-in (trans-in). Which action best matches this part of the procedure?",
    "options": [
      "Confirm transfer of patient/client with the referring unit or hospital",
      "Receive incoming patient/client, relatives and accompanying nurse warmly",
      "Document all assessments, findings and treatments in nurses’ notes (manually or electronically)",
      "Admit patient into bed ensuring patient safety"
    ],
    "answer": "Confirm transfer of patient/client with the referring unit or hospital",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete transfer-in (trans-in) safely, which action should the nurse take at this point?",
    "options": [
      "Confirm transfer of patient/client with the referring unit or hospital",
      "Make appropriate bed to receive the patient/client",
      "Do quick assessment of patients/clients condition and compare with patient/clients medical records",
      "Explain the importance of the transfer to the patient to obtain his/her cooperation"
    ],
    "answer": "Make appropriate bed to receive the patient/client",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "While providing transfer-in (trans-in), why must the nurse complete the prescribed observations at the specified intervals?",
    "options": [
      "Review patients notes, treatment plan and act accordingly",
      "Ask for clarification on vital issues pertaining to patients/clients condition from the accompanying nurse",
      "Assemble necessary equipment e.g. oxygen cylinders, suction machine, vital signs tray etc.",
      "Make appropriate bed to receive the patient/client"
    ],
    "answer": "Assemble necessary equipment e.g. oxygen cylinders, suction machine, vital signs tray etc.",
    "explanation": "Trended observations help detect deterioration early. Record the measurements, compare them with previous findings and escalate abnormal values or clinical concern according to local policy."
  },
  {
    "question": "After completing this part of transfer-in (trans-in), what makes the clinical record useful for continuity of care?",
    "options": [
      "Introduce yourself and other staff to patient/client and relatives",
      "Receive incoming patient/client, relatives and accompanying nurse warmly",
      "Document all assessments, findings and treatments in nurses’ notes (manually or electronically)",
      "Assemble documentation and investigation forms (Manual or electronic)"
    ],
    "answer": "Assemble documentation and investigation forms (Manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "The nurse is carrying out transfer-in (trans-in). Which action best matches this part of the procedure?",
    "options": [
      "Receive incoming patient/client, relatives and accompanying nurse warmly",
      "Plan care for the patient/client",
      "Do quick assessment of patients/clients condition and compare with patient/clients medical records",
      "Explain the importance of the transfer to the patient to obtain his/her cooperation"
    ],
    "answer": "Receive incoming patient/client, relatives and accompanying nurse warmly",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete transfer-in (trans-in) safely, which action should the nurse take at this point?",
    "options": [
      "Review patients notes, treatment plan and act accordingly",
      "Confirm identity of patient/client with accompanying nurse",
      "Take over transfer notes and personal belongings from accompanying nurse",
      "Make appropriate bed to receive the patient/client"
    ],
    "answer": "Confirm identity of patient/client with accompanying nurse",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out transfer-in (trans-in), what should the nurse do to support informed cooperation?",
    "options": [
      "Introduce yourself and other staff to patient/client and relatives",
      "Assemble documentation and investigation forms (Manual or electronic)",
      "Explain the importance of the transfer to the patient to obtain his/her cooperation",
      "Orientate patient/client and relatives on environment and routine of the unit if necessary"
    ],
    "answer": "Explain the importance of the transfer to the patient to obtain his/her cooperation",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Which nursing action is required at this stage of transfer-in (trans-in)?",
    "options": [
      "Receive incoming patient/client, relatives and accompanying nurse warmly",
      "Plan care for the patient/client",
      "Do quick assessment of patients/clients condition and compare with patient/clients medical records",
      "Take over transfer notes and personal belongings from accompanying nurse"
    ],
    "answer": "Take over transfer notes and personal belongings from accompanying nurse",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out transfer-in (trans-in). Which action best matches this part of the procedure?",
    "options": [
      "Ask for clarification on vital issues pertaining to patients/clients condition from the accompanying nurse",
      "Assess for any drainage or tubings and connects appropriately e.g. oxygen, intravenous line, urinary catheter etc.",
      "Explain the importance of the transfer to the patient to obtain his/her cooperation",
      "Make appropriate bed to receive the patient/client"
    ],
    "answer": "Ask for clarification on vital issues pertaining to patients/clients condition from the accompanying nurse",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete transfer-in (trans-in) safely, which action should the nurse take at this point?",
    "options": [
      "Ask for clarification on vital issues pertaining to patients/clients condition from the accompanying nurse",
      "Introduce yourself and other staff to patient/client and relatives",
      "Assemble necessary equipment e.g. oxygen cylinders, suction machine, vital signs tray etc.",
      "Orientate patient/client and relatives on environment and routine of the unit if necessary"
    ],
    "answer": "Introduce yourself and other staff to patient/client and relatives",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during transfer-in (trans-in)?",
    "options": [
      "Receive incoming patient/client, relatives and accompanying nurse warmly",
      "Plan care for the patient/client",
      "Admit patient into bed ensuring patient safety",
      "Introduce yourself and other staff to patient/client and relatives"
    ],
    "answer": "Admit patient into bed ensuring patient safety",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of transfer-in (trans-in)?",
    "options": [
      "Confirm transfer of patient/client with the referring unit or hospital",
      "Assess for any drainage or tubings and connects appropriately e.g. oxygen, intravenous line, urinary catheter etc.",
      "Explain the importance of the transfer to the patient to obtain his/her cooperation",
      "Do quick assessment of patients/clients condition and compare with patient/clients medical records"
    ],
    "answer": "Do quick assessment of patients/clients condition and compare with patient/clients medical records",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "During transfer-in (trans-in), what should the nurse verify about any relevant tube or drainage system?",
    "options": [
      "Assess for any drainage or tubings and connects appropriately e.g. oxygen, intravenous line, urinary catheter etc.",
      "Take over transfer notes and personal belongings from accompanying nurse",
      "Assemble necessary equipment e.g. oxygen cylinders, suction machine, vital signs tray etc.",
      "Orientate patient/client and relatives on environment and routine of the unit if necessary"
    ],
    "answer": "Assess for any drainage or tubings and connects appropriately e.g. oxygen, intravenous line, urinary catheter etc.",
    "explanation": "Check that the system is secure, patent and functioning as intended, without kinks or avoidable contamination. Assess output and report unexpected changes."
  },
  {
    "question": "To complete transfer-in (trans-in) safely, which action should the nurse take at this point?",
    "options": [
      "Receive incoming patient/client, relatives and accompanying nurse warmly",
      "Review patients notes, treatment plan and act accordingly",
      "Document all assessments, findings and treatments in nurses’ notes (manually or electronically)",
      "Introduce yourself and other staff to patient/client and relatives"
    ],
    "answer": "Review patients notes, treatment plan and act accordingly",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during transfer-in (trans-in)?",
    "options": [
      "Confirm transfer of patient/client with the referring unit or hospital",
      "Do quick assessment of patients/clients condition and compare with patient/clients medical records",
      "Orientate patient/client and relatives on environment and routine of the unit if necessary",
      "Confirm identity of patient/client with accompanying nurse"
    ],
    "answer": "Orientate patient/client and relatives on environment and routine of the unit if necessary",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After completing this part of transfer-in (trans-in), what makes the clinical record useful for continuity of care?",
    "options": [
      "Assess for any drainage or tubings and connects appropriately e.g. oxygen, intravenous line, urinary catheter etc.",
      "Take over transfer notes and personal belongings from accompanying nurse",
      "Assemble necessary equipment e.g. oxygen cylinders, suction machine, vital signs tray etc.",
      "Document all assessments, findings and treatments in nurses’ notes (manually or electronically)"
    ],
    "answer": "Document all assessments, findings and treatments in nurses’ notes (manually or electronically)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "The nurse is carrying out transfer-in (trans-in). Which action best matches this part of the procedure?",
    "options": [
      "Plan care for the patient/client",
      "Assemble documentation and investigation forms (Manual or electronic)",
      "Orientate patient/client and relatives on environment and routine of the unit if necessary",
      "Introduce yourself and other staff to patient/client and relatives"
    ],
    "answer": "Plan care for the patient/client",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },

  {
    id: "rgn-027",
    title: "TRANSFER-OUT (TRANS-OUT)",
    category: "General Nursing (RGN)",
    types: [
  "Unit to unit",
  "Unit to a center",
  "Unit to department",
  "The reverse of (2) and (3) above"
],
    overview:
      "This is when a patient is moved out from one unit of admission within the same hospital for update treatment. It is done at the discretion of the medical team or at the request of the patient. A good knowledge of patients/clients condition is very important.",
    purpose: [],
    indications: [
      "Transfer to another unit for specialist treatment",
      "Transfer to another department for investigation",
      "Transfer to another healthcare facility",
      "Transfer authorized by the medical team",
      "Transfer requested by the patient when clinically and administratively appropriate",
    ],
    equipment: [
  "Patient’s medical records (Manual or electronic)",
  "Referral notes (Manual or electronic)"
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
  "Make new bed for next patient"
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
    videoUrl: "https://vimeo.com/691787237",
    quiz: [
  {
    "question": "The nurse is carrying out transfer-out (trans-out). Which action best matches this part of the procedure?",
    "options": [
      "Confirm patients trans-out order with medical team",
      "Arrange for accompanying nurse and appropriate means of transportation",
      "Inform the receiving unit or facility about the intended transfer and the state of patient",
      "Make new bed for next patient"
    ],
    "answer": "Confirm patients trans-out order with medical team",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete transfer-out (trans-out) safely, which action should the nurse take at this point?",
    "options": [
      "Collect patient’s medication, laboratory results and transfer",
      "Assess patients/clients condition",
      "Ensure linen are removed",
      "Assist patient onto stretcher, wheel chair or ambulance where applicable"
    ],
    "answer": "Assess patients/clients condition",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out transfer-out (trans-out), what should the nurse do to support informed cooperation?",
    "options": [
      "Explain reason for the trans out to patient and relatives",
      "Confirm patients trans-out order with medical team",
      "Inform the receiving unit or facility about the intended transfer and the state of patient",
      "Collect all necessary data"
    ],
    "answer": "Inform the receiving unit or facility about the intended transfer and the state of patient",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before carrying out transfer-out (trans-out), what should the nurse do to support informed cooperation?",
    "options": [
      "Decontaminate beds and its accessories",
      "Hand over patient’s notes and belongings to the accompanying nurse",
      "Ensure patient settle bills where applicable",
      "Explain reason for the trans out to patient and relatives"
    ],
    "answer": "Explain reason for the trans out to patient and relatives",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "The nurse is carrying out transfer-out (trans-out). Which action best matches this part of the procedure?",
    "options": [
      "Arrange for accompanying nurse and appropriate means of transportation",
      "Pack patient’s personal belongings",
      "Explain reason for the trans out to patient and relatives",
      "Assess patients/clients condition"
    ],
    "answer": "Arrange for accompanying nurse and appropriate means of transportation",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete transfer-out (trans-out) safely, which action should the nurse take at this point?",
    "options": [
      "Assist patient onto stretcher, wheel chair or ambulance where applicable",
      "Collect all necessary data",
      "Make new bed for next patient",
      "Ensure linen are removed"
    ],
    "answer": "Collect all necessary data",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during transfer-out (trans-out)?",
    "options": [
      "Arrange for accompanying nurse and appropriate means of transportation",
      "Inform the receiving unit or facility about the intended transfer and the state of patient",
      "Pack patient’s personal belongings",
      "Collect patient’s medication, laboratory results and transfer"
    ],
    "answer": "Pack patient’s personal belongings",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Confirm patients trans-out order with medical team",
      "Decontaminate beds and its accessories",
      "Hand over patient’s notes and belongings to the accompanying nurse",
      "Collect patient’s medication, laboratory results and transfer"
    ],
    "answer": "Collect patient’s medication, laboratory results and transfer",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "The nurse is carrying out transfer-out (trans-out). Which action best matches this part of the procedure?",
    "options": [
      "Ensure patient settle bills where applicable",
      "Collect patient’s medication, laboratory results and transfer",
      "Collect all necessary data",
      "Explain reason for the trans out to patient and relatives"
    ],
    "answer": "Ensure patient settle bills where applicable",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete transfer-out (trans-out) safely, which action should the nurse take at this point?",
    "options": [
      "Ensure linen are removed",
      "Assist patient onto stretcher, wheel chair or ambulance where applicable",
      "Assess patients/clients condition",
      "Make new bed for next patient"
    ],
    "answer": "Assist patient onto stretcher, wheel chair or ambulance where applicable",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during transfer-out (trans-out)?",
    "options": [
      "Pack patient’s personal belongings",
      "Arrange for accompanying nurse and appropriate means of transportation",
      "Hand over patient’s notes and belongings to the accompanying nurse",
      "Ensure patient settle bills where applicable"
    ],
    "answer": "Hand over patient’s notes and belongings to the accompanying nurse",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of transfer-out (trans-out)?",
    "options": [
      "Inform the receiving unit or facility about the intended transfer and the state of patient",
      "Confirm patients trans-out order with medical team",
      "Decontaminate beds and its accessories",
      "Ensure linen are removed"
    ],
    "answer": "Ensure linen are removed",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After the hands-on part of transfer-out (trans-out), how should used equipment and waste be managed?",
    "options": [
      "Decontaminate beds and its accessories",
      "Assist patient onto stretcher, wheel chair or ambulance where applicable",
      "Collect patient’s medication, laboratory results and transfer",
      "Collect all necessary data"
    ],
    "answer": "Decontaminate beds and its accessories",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "To complete transfer-out (trans-out) safely, which action should the nurse take at this point?",
    "options": [
      "Decontaminate beds and its accessories",
      "Make new bed for next patient",
      "Explain reason for the trans out to patient and relatives",
      "Assess patients/clients condition"
    ],
    "answer": "Make new bed for next patient",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },

  {
    id: "rgn-028",
    title: "CARE OF THE HANDS AND FEET",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "This is the act of maintaining cleanliness of the hands and feet of a patient while on admission. It is recommended that this procedure is performed after the bath of a patient/client. Nail care can also be given after soaking the hands or feet in a basin of warm water for 10-15 minutes to soften the nails.",
    purpose: [],
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
  "Two bowels or basins",
  "Two bowels or basins",
  "Nail clipper and file in a receiver",
  "Soap in a dish",
  "Nail brush",
  "Sponge",
  "Hand or bath towel",
  "Mackintosh and dressing towel",
  "Hand cream or lotion",
  "Orange stick (toothpick)",
  "Bottom Shelf",
  "Two jugs containing hot and cold water",
  "Bucket to receive used water",
  "Heart table",
  "Chair"
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
  "Immerse feet in a bowel of water",
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
  "Document procedure and report findings (manual or electronic)"
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
    quiz: [
  {
    "question": "The nurse is carrying out care of the hands and feet. Which action best matches this part of the procedure?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Position patient in a desirable position",
      "Use orange stick to remove debris",
      "Explain procedure to patient"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out care of the hands and feet, what should the nurse do to support informed cooperation?",
    "options": [
      "Place bowl of warm water on the mackintosh and towel",
      "Explain procedure to patient",
      "Cut finger nails to the shape of finger tips using a pair of scissors or nail clipper",
      "Remove mackintosh and towel"
    ],
    "answer": "Explain procedure to patient",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with care of the hands and feet, what infection-prevention action is required at this point?",
    "options": [
      "Position patient in a desirable position",
      "Use orange stick to remove debris",
      "Perform hand hygiene",
      "Wash feet thoroughly using soap and sponge"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "A patient is about to undergo care of the hands and feet. Which action protects their dignity during preparation?",
    "options": [
      "Document procedure and report findings (manual or electronic)",
      "Cut finger nails to the shape of finger tips using a pair of scissors or nail clipper",
      "Remove mackintosh and towel",
      "Provide privacy and take trolley to bedside"
    ],
    "answer": "Provide privacy and take trolley to bedside",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "When positioning the patient for care of the hands and feet, what should guide the nurse's choice of position?",
    "options": [
      "Position patient in a desirable position",
      "Mix and allow patient to check the temperature of the water",
      "Wash feet thoroughly using soap and sponge",
      "Provide privacy and take trolley to bedside"
    ],
    "answer": "Position patient in a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "To complete care of the hands and feet safely, which action should the nurse take at this point?",
    "options": [
      "Cut finger nails to the shape of finger tips using a pair of scissors or nail clipper",
      "Inspect the skin of hands and feet for callous, swelling and any sores",
      "Put hands into the bowl of warm water and scrub nails gently with nail brush",
      "Document procedure and report findings (manual or electronic)"
    ],
    "answer": "Inspect the skin of hands and feet for callous, swelling and any sores",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during care of the hands and feet?",
    "options": [
      "Mix and allow patient to check the temperature of the water",
      "Wash feet thoroughly using soap and sponge",
      "Protect the bed with a mackintosh and dressing towel",
      "Apply hand cream or lotion to the hands and feet"
    ],
    "answer": "Protect the bed with a mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of care of the hands and feet?",
    "options": [
      "Perform hand hygiene",
      "Put hands into the bowl of warm water and scrub nails gently with nail brush",
      "Document procedure and report findings (manual or electronic)",
      "Mix and allow patient to check the temperature of the water"
    ],
    "answer": "Mix and allow patient to check the temperature of the water",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out care of the hands and feet. Which action best matches this part of the procedure?",
    "options": [
      "Place bowl of warm water on the mackintosh and towel",
      "Immerse feet in a bowel of water",
      "Apply hand cream or lotion to the hands and feet",
      "Protect the bed with a mackintosh and dressing towel"
    ],
    "answer": "Place bowl of warm water on the mackintosh and towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete care of the hands and feet safely, which action should the nurse take at this point?",
    "options": [
      "Put hands into the bowl of warm water and scrub nails gently with nail brush",
      "Wet fingers in a bowl of warm water",
      "Alternatively put feet into the bowl of warm water and scrub nails gently with a nail brush",
      "Perform hand hygiene"
    ],
    "answer": "Wet fingers in a bowl of warm water",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during care of the hands and feet?",
    "options": [
      "Wet fingers in a bowl of warm water",
      "Apply hand cream or lotion to the hands and feet",
      "Immerse feet in a bowel of water",
      "Dispose off used items and decontaminate instruments"
    ],
    "answer": "Immerse feet in a bowel of water",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of care of the hands and feet?",
    "options": [
      "Inspect the skin of hands and feet for callous, swelling and any sores",
      "Alternatively put feet into the bowl of warm water and scrub nails gently with a nail brush",
      "Perform hand hygiene",
      "Cut finger nails to the shape of finger tips using a pair of scissors or nail clipper"
    ],
    "answer": "Cut finger nails to the shape of finger tips using a pair of scissors or nail clipper",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out care of the hands and feet. Which action best matches this part of the procedure?",
    "options": [
      "Cut toe nails across to prevent in-growing toe nails",
      "Put all nail clippings into a receiver",
      "Dispose off used items and decontaminate instruments",
      "Wet fingers in a bowl of warm water"
    ],
    "answer": "Cut toe nails across to prevent in-growing toe nails",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete care of the hands and feet safely, which action should the nurse take at this point?",
    "options": [
      "Alternatively put feet into the bowl of warm water and scrub nails gently with a nail brush",
      "Put all nail clippings into a receiver",
      "Dry hands and feet thoroughly",
      "Inspect the skin of hands and feet for callous, swelling and any sores"
    ],
    "answer": "Put all nail clippings into a receiver",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during care of the hands and feet?",
    "options": [
      "Cut toe nails across to prevent in-growing toe nails",
      "Dispose off used items and decontaminate instruments",
      "Put hands into the bowl of warm water and scrub nails gently with nail brush",
      "Explain procedure to patient"
    ],
    "answer": "Put hands into the bowl of warm water and scrub nails gently with nail brush",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of care of the hands and feet?",
    "options": [
      "Place bowl of warm water on the mackintosh and towel",
      "Dry hands and feet thoroughly",
      "Inspect the skin of hands and feet for callous, swelling and any sores",
      "Use orange stick to remove debris"
    ],
    "answer": "Use orange stick to remove debris",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with care of the hands and feet, what infection-prevention action is required at this point?",
    "options": [
      "Wash hands thoroughly using soap and sponge",
      "Use orange stick to remove debris",
      "Explain procedure to patient",
      "Cut toe nails across to prevent in-growing toe nails"
    ],
    "answer": "Wash hands thoroughly using soap and sponge",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete care of the hands and feet safely, which action should the nurse take at this point?",
    "options": [
      "Dry hands and feet thoroughly",
      "Alternatively put feet into the bowl of warm water and scrub nails gently with a nail brush",
      "Assist patient into a desirable position",
      "Place bowl of warm water on the mackintosh and towel"
    ],
    "answer": "Alternatively put feet into the bowl of warm water and scrub nails gently with a nail brush",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during care of the hands and feet?",
    "options": [
      "Wash hands thoroughly using soap and sponge",
      "Explain procedure to patient",
      "Use orange stick to remove debris",
      "Position patient in a desirable position"
    ],
    "answer": "Use orange stick to remove debris",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of care of the hands and feet?",
    "options": [
      "Cut finger nails to the shape of finger tips using a pair of scissors or nail clipper",
      "Assist patient into a desirable position",
      "Place bowl of warm water on the mackintosh and towel",
      "Wash feet thoroughly using soap and sponge"
    ],
    "answer": "Wash feet thoroughly using soap and sponge",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out care of the hands and feet. Which action best matches this part of the procedure?",
    "options": [
      "Change warm water and rinse the hands and feet alternatively",
      "Wash feet thoroughly using soap and sponge",
      "Position patient in a desirable position",
      "Use orange stick to remove debris"
    ],
    "answer": "Change warm water and rinse the hands and feet alternatively",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete care of the hands and feet safely, which action should the nurse take at this point?",
    "options": [
      "Assist patient into a desirable position",
      "Dry hands and feet thoroughly",
      "Establish rapport (Refer to steps)",
      "Cut finger nails to the shape of finger tips using a pair of scissors or nail clipper"
    ],
    "answer": "Dry hands and feet thoroughly",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during care of the hands and feet?",
    "options": [
      "Wash feet thoroughly using soap and sponge",
      "Position patient in a desirable position",
      "Apply hand cream or lotion to the hands and feet",
      "Mix and allow patient to check the temperature of the water"
    ],
    "answer": "Apply hand cream or lotion to the hands and feet",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of care of the hands and feet?",
    "options": [
      "Put hands into the bowl of warm water and scrub nails gently with nail brush",
      "Establish rapport (Refer to steps)",
      "Cut finger nails to the shape of finger tips using a pair of scissors or nail clipper",
      "Remove mackintosh and towel"
    ],
    "answer": "Remove mackintosh and towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for care of the hands and feet, what should guide the nurse's choice of position?",
    "options": [
      "Assist patient into a desirable position",
      "Apply hand cream or lotion to the hands and feet",
      "Mix and allow patient to check the temperature of the water",
      "Wash feet thoroughly using soap and sponge"
    ],
    "answer": "Assist patient into a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "After the hands-on part of care of the hands and feet, how should used equipment and waste be managed?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Dispose off used items and decontaminate instruments",
      "Provide privacy and take trolley to bedside",
      "Put hands into the bowl of warm water and scrub nails gently with nail brush"
    ],
    "answer": "Dispose off used items and decontaminate instruments",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with care of the hands and feet, what infection-prevention action is required at this point?",
    "options": [
      "Remove mackintosh and towel",
      "Place bowl of warm water on the mackintosh and towel",
      "Perform hand hygiene",
      "Cut finger nails to the shape of finger tips using a pair of scissors or nail clipper"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "After completing this part of care of the hands and feet, what makes the clinical record useful for continuity of care?",
    "options": [
      "Alternatively put feet into the bowl of warm water and scrub nails gently with a nail brush",
      "Provide privacy and take trolley to bedside",
      "Put hands into the bowl of warm water and scrub nails gently with nail brush",
      "Document procedure and report findings (manual or electronic)"
    ],
    "answer": "Document procedure and report findings (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  }
],
  },

  {
    id: "rgn-029",
    title: "RECORDING OF INTAKE AND OUTPUT",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "It is the process of measuring and noting the amount and type of fluids introduced into the body and excreted from the body over a 24-hour period. This procedure assists the nurse to maintain an accurate record of a patient's fluid balance. Fluid intake includes: oral fluids, intravenous fluids, nasopharyngeal fluids, intragastric fluids. Fluid output includes: urine, vomitus, aspirates, diarrhoeal stool, sweat.",
    purpose: [],
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
  "Fluid chart (manual/ electronic)"
],
    steps: [
  "Establish rapport (Refer to steps)",
  "Explain the importance of keeping the fluid balance chart to patient and relatives",
  "Obtain fluid intake and output chart (manually or electronically) and confirm with patient’s identity",
  "Determine the types of fluid intake or output",
  "Observe amount of fluids given to patient",
  "Record the amount of oral and intravenous fluids prescribed at the intake column indicating the date and time",
  "Add together the values for oral and parenteral fluids",
  "Assist patient to void into a bedpan or urinal if possible, empty content into the measuring jug and note the volume OR If there is urine in a urine bag, empty content into the measuring jug and note the volume",
  "Record other forms of output such as watery stools, vomitus at the output column indicating date, time and the amount",
  "Record all measurements in milliliters",
  "Add together all the values obtained for outputs",
  "Total the intake and output at the end of every 24 hours",
  "Find out amount of fluid retained by subtracting the values of fluid output from the intake",
  "Perform hand hygiene",
  "Inform the nurse in charge/doctor immediately if amount put out is greater than the amount taken in or when there is abnormally low output",
  "Record findings in the appropriate recording software and observation chart",
  "Dispose off used items and decontaminate trolley (manual or electronic)"
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
    quiz: [
  {
    "question": "The nurse is carrying out recording of intake and output. Which action best matches this part of the procedure?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Observe amount of fluids given to patient",
      "Record findings in the appropriate recording software and observation chart",
      "Add together all the values obtained for outputs"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out recording of intake and output, what should the nurse do to support informed cooperation?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Explain the importance of keeping the fluid balance chart to patient and relatives",
      "Total the intake and output at the end of every 24 hours",
      "Add together the values for oral and parenteral fluids"
    ],
    "answer": "Explain the importance of keeping the fluid balance chart to patient and relatives",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Which step should be performed now during recording of intake and output?",
    "options": [
      "Perform hand hygiene",
      "Record other forms of output such as watery stools, vomitus at the output column indicating date, time and the amount",
      "Obtain fluid intake and output chart (manually or electronically) and confirm with patient’s identity",
      "Explain the importance of keeping the fluid balance chart to patient and relatives"
    ],
    "answer": "Obtain fluid intake and output chart (manually or electronically) and confirm with patient’s identity",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of recording of intake and output?",
    "options": [
      "Record all measurements in milliliters",
      "Observe amount of fluids given to patient",
      "Record findings in the appropriate recording software and observation chart",
      "Determine the types of fluid intake or output"
    ],
    "answer": "Determine the types of fluid intake or output",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out recording of intake and output. Which action best matches this part of the procedure?",
    "options": [
      "Observe amount of fluids given to patient",
      "Dispose off used items and decontaminate trolley (manual or electronic)",
      "Total the intake and output at the end of every 24 hours",
      "Add together the values for oral and parenteral fluids"
    ],
    "answer": "Observe amount of fluids given to patient",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Perform hand hygiene",
      "Record the amount of oral and intravenous fluids prescribed at the intake column indicating the date and time",
      "Assist patient to void into a bedpan or urinal if possible, empty content into the measuring jug and note the volume OR If there is urine in a urine bag, empty content into the measuring jug and note the volume",
      "Explain the importance of keeping the fluid balance chart to patient and relatives"
    ],
    "answer": "Record the amount of oral and intravenous fluids prescribed at the intake column indicating the date and time",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which step should be performed now during recording of intake and output?",
    "options": [
      "Record all measurements in milliliters",
      "Determine the types of fluid intake or output",
      "Add together the values for oral and parenteral fluids",
      "Inform the nurse in charge/doctor immediately if amount put out is greater than the amount taken in or when there is abnormally low output"
    ],
    "answer": "Add together the values for oral and parenteral fluids",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of recording of intake and output, which principle protects the reliability of the result?",
    "options": [
      "Observe amount of fluids given to patient",
      "Dispose off used items and decontaminate trolley (manual or electronic)",
      "Total the intake and output at the end of every 24 hours",
      "Assist patient to void into a bedpan or urinal if possible, empty content into the measuring jug and note the volume OR If there is urine in a urine bag, empty content into the measuring jug and note the volume"
    ],
    "answer": "Assist patient to void into a bedpan or urinal if possible, empty content into the measuring jug and note the volume OR If there is urine in a urine bag, empty content into the measuring jug and note the volume",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "The nurse is carrying out recording of intake and output. Which action best matches this part of the procedure?",
    "options": [
      "Record other forms of output such as watery stools, vomitus at the output column indicating date, time and the amount",
      "Find out amount of fluid retained by subtracting the values of fluid output from the intake",
      "Add together the values for oral and parenteral fluids",
      "Explain the importance of keeping the fluid balance chart to patient and relatives"
    ],
    "answer": "Record other forms of output such as watery stools, vomitus at the output column indicating date, time and the amount",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete recording of intake and output safely, which action should the nurse take at this point?",
    "options": [
      "Record other forms of output such as watery stools, vomitus at the output column indicating date, time and the amount",
      "Record all measurements in milliliters",
      "Obtain fluid intake and output chart (manually or electronically) and confirm with patient’s identity",
      "Inform the nurse in charge/doctor immediately if amount put out is greater than the amount taken in or when there is abnormally low output"
    ],
    "answer": "Record all measurements in milliliters",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during recording of intake and output?",
    "options": [
      "Observe amount of fluids given to patient",
      "Dispose off used items and decontaminate trolley (manual or electronic)",
      "Add together all the values obtained for outputs",
      "Record all measurements in milliliters"
    ],
    "answer": "Add together all the values obtained for outputs",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of recording of intake and output?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Find out amount of fluid retained by subtracting the values of fluid output from the intake",
      "Add together the values for oral and parenteral fluids",
      "Total the intake and output at the end of every 24 hours"
    ],
    "answer": "Total the intake and output at the end of every 24 hours",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out recording of intake and output. Which action best matches this part of the procedure?",
    "options": [
      "Find out amount of fluid retained by subtracting the values of fluid output from the intake",
      "Assist patient to void into a bedpan or urinal if possible, empty content into the measuring jug and note the volume OR If there is urine in a urine bag, empty content into the measuring jug and note the volume",
      "Obtain fluid intake and output chart (manually or electronically) and confirm with patient’s identity",
      "Inform the nurse in charge/doctor immediately if amount put out is greater than the amount taken in or when there is abnormally low output"
    ],
    "answer": "Find out amount of fluid retained by subtracting the values of fluid output from the intake",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with recording of intake and output, what infection-prevention action is required at this point?",
    "options": [
      "Observe amount of fluids given to patient",
      "Perform hand hygiene",
      "Record findings in the appropriate recording software and observation chart",
      "Record all measurements in milliliters"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which step should be performed now during recording of intake and output?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Total the intake and output at the end of every 24 hours",
      "Inform the nurse in charge/doctor immediately if amount put out is greater than the amount taken in or when there is abnormally low output",
      "Record the amount of oral and intravenous fluids prescribed at the intake column indicating the date and time"
    ],
    "answer": "Inform the nurse in charge/doctor immediately if amount put out is greater than the amount taken in or when there is abnormally low output",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After completing this part of recording of intake and output, what makes the clinical record useful for continuity of care?",
    "options": [
      "Find out amount of fluid retained by subtracting the values of fluid output from the intake",
      "Assist patient to void into a bedpan or urinal if possible, empty content into the measuring jug and note the volume OR If there is urine in a urine bag, empty content into the measuring jug and note the volume",
      "Obtain fluid intake and output chart (manually or electronically) and confirm with patient’s identity",
      "Record findings in the appropriate recording software and observation chart"
    ],
    "answer": "Record findings in the appropriate recording software and observation chart",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "After the hands-on part of recording of intake and output, how should used equipment and waste be managed?",
    "options": [
      "Dispose off used items and decontaminate trolley (manual or electronic)",
      "Determine the types of fluid intake or output",
      "Inform the nurse in charge/doctor immediately if amount put out is greater than the amount taken in or when there is abnormally low output",
      "Record all measurements in milliliters"
    ],
    "answer": "Dispose off used items and decontaminate trolley (manual or electronic)",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  }
],
  },
];
