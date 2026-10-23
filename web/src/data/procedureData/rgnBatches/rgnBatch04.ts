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
  q(
    "Which communication approach is most appropriate when teaching a patient with a language barrier?",
    [
      "Use a qualified interpreter and an appropriate communication method",
      "Ask another patient to translate confidential information",
      "Speak louder in the same language",
      "Skip the education until discharge",
    ],
    "Use a qualified interpreter and an appropriate communication method",
    "A qualified interpreter and suitable communication method help the patient receive accurate information while protecting confidentiality."
  ),
  q(
    "When may a relative be included in condition-management education?",
    [
      "When appropriate and with the patient's permission",
      "Whenever the relative arrives, without asking the patient",
      "Only after the nurse has discussed confidential details publicly",
      "Never, even when the patient requests support",
    ],
    "When appropriate and with the patient's permission",
    "Relatives or significant others may support learning when the patient agrees and it is appropriate to the care situation."
  ),
  q(
    "Which information should be included when explaining warning signs?",
    [
      "What to watch for and when to report it",
      "A promise that complications cannot occur",
      "Only the name of the condition",
      "Instructions to wait until the next routine visit for every concern",
    ],
    "What to watch for and when to report it",
    "Specific warning signs and clear reporting instructions help the patient recognize deterioration early."
  ),
  q(
    "How should the nurse confirm that a patient can use a care device safely?",
    [
      "Demonstrate its use and ask the patient to show the technique back",
      "Leave the device at the bedside without explanation",
      "Ask a relative to use it without teaching the patient",
      "Provide only the device manufacturer's name",
    ],
    "Demonstrate its use and ask the patient to show the technique back",
    "Demonstration followed by return demonstration checks practical skill and identifies teaching needs."
  ),
  q(
    "Why should the rationale for an investigation or treatment be explained?",
    [
      "It helps the patient understand the management plan and cooperate with care",
      "It replaces the need to verify the patient's diagnosis",
      "It allows the nurse to promise a specific outcome",
      "It prevents the patient from asking questions",
    ],
    "It helps the patient understand the management plan and cooperate with care",
    "Explaining why an investigation or treatment is needed supports informed participation and cooperation."
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
  q(
    "Why should the patient's identity be confirmed using appropriate identifiers during admission?",
    [
      "To ensure records, investigations and treatment belong to the correct patient",
      "To decide which visitor may enter the ward",
      "To replace the admission assessment",
      "To avoid recording vital signs",
    ],
    "To ensure records, investigations and treatment belong to the correct patient",
    "Correct identification prevents errors involving documentation, specimens, investigations and treatment."
  ),
  q(
    "Why are vital signs recorded during admission?",
    [
      "To establish a baseline and identify immediate changes in condition",
      "To determine the patient's insurance payment",
      "To replace the patient's history",
      "To decide where relatives should sit",
    ],
    "To establish a baseline and identify immediate changes in condition",
    "Admission vital signs provide baseline information and may reveal a condition requiring prompt attention."
  ),
  q(
    "What technique should be used for intravenous access or specimen collection during admission?",
    [
      "Aseptic technique",
      "The same gloves for every patient",
      "A dry cloth without hand hygiene",
      "Unlabelled containers until the end of the shift",
    ],
    "Aseptic technique",
    "Aseptic technique reduces contamination and infection risk during invasive procedures and specimen collection."
  ),
  q(
    "Which orientation should be included after a patient is settled on the ward?",
    [
      "Ward routines, the call bell and relevant safety information",
      "Only the location of the visitors' lounge",
      "Instructions to walk around without assistance",
      "A promise that the patient will not need monitoring",
    ],
    "Ward routines, the call bell and relevant safety information",
    "Orientation helps the patient use the ward safely and know how to request assistance."
  ),
  q(
    "What is essential when sending a specimen collected during admission?",
    [
      "Correct patient identification, labelling and prompt transport",
      "Leaving the container open at the nurses' station",
      "Sending it without a request form",
      "Asking a visitor to choose the test",
    ],
    "Correct patient identification, labelling and prompt transport",
    "Accurate identification, labelling and transport preserve specimen integrity and prevent patient-result errors."
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
  q(
    "What should be done before bringing linen to the bedside for an unoccupied bed?",
    [
      "Perform hand hygiene and arrange the items in order of use",
      "Shake all sheets over the bed",
      "Place clean linen on the floor",
      "Mix clean and soiled linen on the trolley",
    ],
    "Perform hand hygiene and arrange the items in order of use",
    "Hand hygiene and orderly preparation reduce contamination and make the bed-making procedure safer."
  ),
  q(
    "Why is the bottom sheet pulled tight and secured with mitered or envelope corners?",
    [
      "To keep the sheet secure and reduce creases during use",
      "To make the mattress difficult to access",
      "To prevent the patient from using the bed",
      "To replace the need for a draw sheet",
    ],
    "To keep the sheet secure and reduce creases during use",
    "A secure, smooth bottom sheet improves comfort and reduces movement and pressure from loose linen."
  ),
  q(
    "How should pillows be placed on a simple unoccupied bed?",
    [
      "With the open ends of the pillowcases away from the entrance",
      "With the open ends facing the entrance",
      "Under the mattress without pillowcases",
      "On the floor beside the bed",
    ],
    "With the open ends of the pillowcases away from the entrance",
    "Positioning the open ends away from the entrance gives a neater and more protected bed arrangement."
  ),
  q(
    "What should be checked before making an unoccupied bed?",
    [
      "That the bed is stable and its brakes are applied where applicable",
      "That the wheels are free to roll",
      "That the mattress is removed",
      "That the trolley is left across the entrance",
    ],
    "That the bed is stable and its brakes are applied where applicable",
    "A stable bed with brakes applied reduces movement and injury risk during bed making."
  ),
  q(
    "How should used linen be handled after making the unoccupied bed?",
    [
      "Place it directly into the appropriate receptacle without shaking it",
      "Shake it over the clean bed before disposal",
      "Put it back on the clean-linen shelf",
      "Leave it on the floor until the end of the shift",
    ],
    "Place it directly into the appropriate receptacle without shaking it",
    "Used linen should be handled according to policy and without shaking, which can disperse microorganisms."
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
  q(
    "What should the nurse do before starting an occupied bed procedure?",
    [
      "Explain the procedure, obtain cooperation and provide privacy",
      "Remove the patient's cover without explanation",
      "Unlock the bed wheels",
      "Place soiled linen on the bedside table",
    ],
    "Explain the procedure, obtain cooperation and provide privacy",
    "Explanation, cooperation and privacy protect dignity and help the patient participate safely."
  ),
  q(
    "Why should the bed brakes remain locked during occupied bed making?",
    [
      "To prevent the bed from moving while the patient is repositioned",
      "To make turning the patient more difficult",
      "To keep the trolley attached to the bed",
      "To prevent linen from being changed",
    ],
    "To prevent the bed from moving while the patient is repositioned",
    "Locked brakes provide a stable surface and reduce the risk of falls or staff injury."
  ),
  q(
    "How should the patient be protected while the dirty bottom sheet is changed?",
    [
      "Keep the patient covered with the top sheet and expose only the working area",
      "Leave the patient fully uncovered",
      "Remove all pillows and covers before explaining the procedure",
      "Ask the patient to stand on the bed",
    ],
    "Keep the patient covered with the top sheet and expose only the working area",
    "Maintaining coverage protects warmth, privacy and dignity during an occupied bed change."
  ),
  q(
    "What should be checked before and after turning the patient during occupied bed making?",
    [
      "Intravenous lines, drains, catheters and other attached devices",
      "The ward meal schedule only",
      "The visitor's identity only",
      "The colour of the bed frame",
    ],
    "Intravenous lines, drains, catheters and other attached devices",
    "Checking attached devices before and after movement helps prevent displacement, kinking or injury."
  ),
  q(
    "How should soiled linen be handled during an occupied bed change?",
    [
      "Roll it inward, avoid shaking it and place it in the appropriate receptacle",
      "Shake it beside the patient to remove dust",
      "Place it on top of the clean linen",
      "Carry it through the ward uncovered",
    ],
    "Roll it inward, avoid shaking it and place it in the appropriate receptacle",
    "Rolling contaminated linen inward and using the correct receptacle limits environmental contamination."
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
  q(
    "Why are the bedclothes folded on the side nearest the entrance of an admission bed?",
    [
      "To create an open pathway for easy and safe admission",
      "To expose the mattress to dust",
      "To prevent the patient from entering the bed",
      "To store the trolley on the mattress",
    ],
    "To create an open pathway for easy and safe admission",
    "Folding the bedclothes toward the entrance makes it easier to transfer or settle the patient safely."
  ),
  q(
    "What is the purpose of the long mackintosh and bath blankets in an admission bed?",
    [
      "To protect the bed and provide warmth and comfort during admission",
      "To replace the need for clean sheets",
      "To restrain the patient in the bed",
      "To cover the oxygen outlet",
    ],
    "To protect the bed and provide warmth and comfort during admission",
    "The protective layer helps protect linen while the blankets provide warmth for the newly admitted patient."
  ),
  q(
    "What should be done with oxygen and suction equipment prepared for an admission bed?",
    [
      "Check that it is accessible and ready when the patient's condition requires it",
      "Hide it under the mattress",
      "Connect it to the patient before assessment",
      "Leave it in the storeroom",
    ],
    "Check that it is accessible and ready when the patient's condition requires it",
    "Required emergency-support equipment should be accessible and functional without being used unnecessarily."
  ),
  q(
    "Why must a hot water bottle be removed or checked carefully before admission?",
    [
      "To prevent burns and other heat-related injury",
      "To keep the bedclothes folded",
      "To make the mattress less firm",
      "To prevent the patient from using the call bell",
    ],
    "To prevent burns and other heat-related injury",
    "Hot water bottles can cause burns, so they require an indication, safety precautions and removal when appropriate."
  ),
  q(
    "What should be kept clear when preparing an admission bed?",
    [
      "The pathway for transferring and settling the patient",
      "The patient's access to the call bell",
      "The area around the bed brakes",
      "The surface used for clean equipment",
    ],
    "The pathway for transferring and settling the patient",
    "A clear pathway supports safe transfer and reduces the risk of trips, collisions and delays."
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
  q(
    "What should the nurse assess while positioning a patient in a cardiac bed?",
    [
      "Breathing, comfort and tolerance of the upright position",
      "The patient's preferred visiting hours",
      "The colour of the counterpane",
      "The number of chairs in the room",
    ],
    "Breathing, comfort and tolerance of the upright position",
    "The upright position is intended to improve comfort, so the patient's response and respiratory status must be observed."
  ),
  q(
    "Why must the elevated back rest and pillows be stable in a cardiac bed?",
    [
      "To support the patient safely and prevent slipping or collapse",
      "To prevent the patient from breathing deeply",
      "To keep the heart table away from the patient",
      "To replace the need for a call bell",
    ],
    "To support the patient safely and prevent slipping or collapse",
    "Stable support reduces falls and helps the patient maintain the therapeutic position comfortably."
  ),
  q(
    "What is the purpose of the heart table with covered pillows in a cardiac bed?",
    [
      "To support the patient in the forward-leaning position when needed",
      "To store soiled linen",
      "To replace the back rest",
      "To block access to the patient",
    ],
    "To support the patient in the forward-leaning position when needed",
    "A supported forward-leaning position may help a patient with breathing difficulty feel more comfortable."
  ),
  q(
    "Which items should be kept within reach in a cardiac bed?",
    [
      "The bell, sputum mug and writing materials",
      "Cleaning chemicals and used linen",
      "A hot water bottle and sharp instruments",
      "The soiled-linen receptacle and trolley",
    ],
    "The bell, sputum mug and writing materials",
    "These items support communication, comfort and safe management of secretions without unnecessary movement."
  ),
  q(
    "What should the nurse do if the patient's dyspnoea worsens in the cardiac bed?",
    [
      "Reassess promptly and report or escalate the deterioration",
      "Lower the back rest without checking the patient",
      "Leave the patient alone to recover",
      "Remove the call bell to reduce stimulation",
    ],
    "Reassess promptly and report or escalate the deterioration",
    "Worsening dyspnoea may indicate deterioration and requires prompt assessment and appropriate escalation."
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
  q(
    "Why is the pillow left on the chair beside an operation bed before the patient arrives?",
    [
      "It allows the patient's airway and post-anaesthetic positioning to be assessed before support is added",
      "It keeps the pillowcase away from clean linen",
      "It prevents the bed from being made",
      "It is used to store the post-anaesthetic tray",
    ],
    "It allows the patient's airway and post-anaesthetic positioning to be assessed before support is added",
    "A patient returning from anaesthesia should be assessed and positioned safely before a pillow is placed as appropriate."
  ),
  q(
    "What is the purpose of the protective dressing towel at the top of an operation bed?",
    [
      "To protect the bed from body discharges during immediate post-operative care",
      "To cover the oxygen apparatus",
      "To replace the observation chart",
      "To keep the patient from seeing the bed",
    ],
    "To protect the bed from body discharges during immediate post-operative care",
    "The protective towel helps protect the linen while the post-operative patient is being received and assessed."
  ),
  q(
    "Why are the top bedclothes folded in three parts on the open side of an operation bed?",
    [
      "To allow the patient to be transferred into the bed quickly and safely",
      "To expose the patient throughout recovery",
      "To prevent access to the operative site",
      "To store used linen beside the patient",
    ],
    "To allow the patient to be transferred into the bed quickly and safely",
    "The folded arrangement makes transfer from theatre easier while keeping the bed ready for immediate care."
  ),
  q(
    "Which bedside equipment should be accessible for a patient returning from theatre?",
    [
      "Drip stand, bed rails, vital-signs equipment, oxygen and suction as indicated",
      "Only a meal tray and visitor chair",
      "Only a wardrobe and writing desk",
      "Only a clean pillow and counterpane",
    ],
    "Drip stand, bed rails, vital-signs equipment, oxygen and suction as indicated",
    "Accessible equipment supports safe transfer, monitoring and immediate response to post-operative needs."
  ),
  q(
    "What should be monitored and documented when the patient arrives on an operation bed?",
    [
      "Airway, breathing, vital signs, consciousness and operative-site observations",
      "Only the patient's meal preference",
      "Only the number of visitors",
      "Only whether the counterpane is straight",
    ],
    "Airway, breathing, vital signs, consciousness and operative-site observations",
    "Immediate post-operative observations help identify complications early and provide a clear baseline for ongoing care."
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
  q(
    "Why are fracture boards placed under the mattress in a fracture bed?",
    [
      "To provide a firm base and prevent the mattress from sagging",
      "To make the mattress softer and less stable",
      "To allow the bed to roll during repositioning",
      "To replace all prescribed traction equipment",
    ],
    "To provide a firm base and prevent the mattress from sagging",
    "A firm base supports alignment and reduces sagging that could increase discomfort or strain."
  ),
  q(
    "What is the purpose of a foot board or sand bags at the foot of a fracture bed?",
    [
      "To provide support and help maintain the prescribed position",
      "To lift the patient's head above the mattress",
      "To store the patient's valuables",
      "To loosen the fracture bed linen",
    ],
    "To provide support and help maintain the prescribed position",
    "Foot support can help maintain safe positioning when included in the patient's prescribed plan."
  ),
  q(
    "Why may a small mackintosh and dressing towel be placed at the fracture site?",
    [
      "To protect the bed from drainage while keeping the area clean and observable",
      "To apply traction without a prescription",
      "To cover the patient's entire body",
      "To replace the fracture board",
    ],
    "To protect the bed from drainage while keeping the area clean and observable",
    "A local protective layer helps manage drainage and supports observation without replacing clinical treatment."
  ),
  q(
    "Which findings should be monitored in a limb affected by a fracture?",
    [
      "Circulation, sensation, movement, pain, swelling and colour",
      "Only the patient's meal intake",
      "Only the room temperature",
      "Only the number of visitors",
    ],
    "Circulation, sensation, movement, pain, swelling and colour",
    "Neurovascular observations help identify compromised circulation or nerve function requiring prompt attention."
  ),
  q(
    "What should the nurse do if a patient with a fracture bed develops increasing pain, swelling or numbness?",
    [
      "Report the findings promptly and follow the clinical escalation plan",
      "Change the traction weights independently",
      "Massage the injured area without an order",
      "Ignore the findings until the next routine bed change",
    ],
    "Report the findings promptly and follow the clinical escalation plan",
    "Increasing pain, swelling or numbness may indicate a complication and should be escalated without independently altering treatment."
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
  q(
    "Why is an extra mackintosh and dressing towel placed at the injured area of a divided bed?",
    [
      "To protect the bed from drainage while allowing the area to be observed",
      "To cover the bed cradle completely",
      "To prevent all inspection of the injury",
      "To replace the clean bottom sheet",
    ],
    "To protect the bed from drainage while allowing the area to be observed",
    "The extra protective layer helps manage drainage and keeps the observation area clean."
  ),
  q(
    "Where should the bed cradle be positioned in a divided bed?",
    [
      "Over the middle portion so the bedclothes are lifted from the affected area",
      "Under the mattress at the foot end",
      "Beside the bed on the floor",
      "Across the entrance to the room",
    ],
    "Over the middle portion so the bedclothes are lifted from the affected area",
    "Correct positioning of the cradle creates the space needed to protect and observe the affected body part."
  ),
  q(
    "Why should the two top-sheet sections overlap appropriately in a divided bed?",
    [
      "To maintain warmth and coverage while preserving the observation opening",
      "To place the bedclothes directly on the wound",
      "To prevent the nurse from seeing the affected area",
      "To remove the need for a bed cradle",
    ],
    "To maintain warmth and coverage while preserving the observation opening",
    "The overlap balances privacy and warmth with access to the area that requires regular observation."
  ),
  q(
    "How large should the observation opening in a divided bed be?",
    [
      "Only as large as needed to observe the affected body part",
      "Large enough to expose the entire patient",
      "Too small to see the affected area",
      "The same size for every patient",
    ],
    "Only as large as needed to observe the affected body part",
    "A focused opening protects privacy and warmth while giving adequate access for assessment."
  ),
  q(
    "What should the nurse do when a change is noted in the body part exposed by a divided bed?",
    [
      "Document and report the change promptly according to the care plan",
      "Cover it permanently and make no record",
      "Ask a visitor to assess it",
      "Remove the bed cradle without assessment",
    ],
    "Document and report the change promptly according to the care plan",
    "Prompt documentation and reporting support timely management of changes in the affected area."
  ),
];

export const rgnBatch04: Procedure[] = [
  {
    id: "rgn-030",
    title: "EDUCATION ON CONDITION AND ITS MANAGEMENT",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "This is an ongoing interaction between the patient and the nurse, through which the patient's condition and its management are discussed into details using clear and simple language. This procedure is very essential in the health care process as it provides the patient the opportunity to know about the possible diagnoses, treatment and prognoses.",
    purpose: [],
    indications: [
      "New diagnosis or newly identified health condition",
      "Admission or commencement of treatment for a condition",
      "Change in the patient's condition or management plan",
      "Before discharge when the patient requires self-care education",
      "When the patient or caregiver requires clarification about the condition or its management",
      "When the patient requires teaching on the use of a care device or treatment technique",
    ],
    equipment: [
  "Patient’s folder (Manual or electronic)",
  "Treatment sheet (Manual or electronic)",
  "Chair",
  "Care devices/gadgets (if any)",
  "Pamphlets/source of readable information"
],
    steps: [
  "Confirm patient’s diagnoses against the patient’s record (manually or electronic)",
  "Establish rapport with the patient (Refer to steps)",
  "Explain the need for education to patient",
  "Involve relatives or significant other if any",
  "Ensure enabling and relaxed environment to maintain privacy and individuality of patient",
  "Assist patient into a desirable position",
  "Sit comfortably by the patient",
  "Identify the suitable language for the patient",
  "Find patient’s level or awareness of condition",
  "Build on what the patient knows about the condition with scientific data of condition",
  "Find patient’s level or awareness on possible management options",
  "Explain to patient the rationale for the various investigations and treatment adopted",
  "Explain the possible outcome of condition and prognoses",
  "Explain and demonstrate the use of devices/gadgets (if any) included in the management process e.g. glucometer, clutches, spirometer etc.",
  "Ensure patient and significant other understands the teaching and clarify where need be",
  "Allow patient and significant other to ask questions for clarity",
  "Encourage patient and significant other to co-operate with health team and ask questions whenever he/she is in doubt",
  "Provide patient with clear simple pamphlets or other sources of readable information",
  "Thank patient and relatives for the cooperation",
  "Document procedure and report to appropriate officer"
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
    quiz: [
  {
    "question": "Which action is listed as step 1 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Confirm patient’s diagnoses against the patient’s record (manually or electronic)",
      "Ensure enabling and relaxed environment to maintain privacy and individuality of patient",
      "Allow patient and significant other to ask questions for clarity",
      "Identify the suitable language for the patient"
    ],
    "answer": "Confirm patient’s diagnoses against the patient’s record (manually or electronic)",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Ensure patient and significant other understands the teaching and clarify where need be",
      "Establish rapport with the patient (Refer to steps)",
      "Explain to patient the rationale for the various investigations and treatment adopted",
      "Involve relatives or significant other if any"
    ],
    "answer": "Establish rapport with the patient (Refer to steps)",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Find patient’s level or awareness on possible management options",
      "Establish rapport with the patient (Refer to steps)",
      "Explain the need for education to patient",
      "Thank patient and relatives for the cooperation"
    ],
    "answer": "Explain the need for education to patient",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Sit comfortably by the patient",
      "Provide patient with clear simple pamphlets or other sources of readable information",
      "Build on what the patient knows about the condition with scientific data of condition",
      "Involve relatives or significant other if any"
    ],
    "answer": "Involve relatives or significant other if any",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Ensure enabling and relaxed environment to maintain privacy and individuality of patient",
      "Explain and demonstrate the use of devices/gadgets (if any) included in the management process e.g. glucometer, clutches, spirometer etc.",
      "Assist patient into a desirable position",
      "Encourage patient and significant other to co-operate with health team and ask questions whenever he/she is in doubt"
    ],
    "answer": "Ensure enabling and relaxed environment to maintain privacy and individuality of patient",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Involve relatives or significant other if any",
      "Assist patient into a desirable position",
      "Confirm patient’s diagnoses against the patient’s record (manually or electronic)",
      "Explain the possible outcome of condition and prognoses"
    ],
    "answer": "Assist patient into a desirable position",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Document procedure and report to appropriate officer",
      "Explain to patient the rationale for the various investigations and treatment adopted",
      "Sit comfortably by the patient",
      "Find patient’s level or awareness of condition"
    ],
    "answer": "Sit comfortably by the patient",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Allow patient and significant other to ask questions for clarity",
      "Sit comfortably by the patient",
      "Thank patient and relatives for the cooperation",
      "Identify the suitable language for the patient"
    ],
    "answer": "Identify the suitable language for the patient",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Find patient’s level or awareness of condition",
      "Explain the need for education to patient",
      "Ensure patient and significant other understands the teaching and clarify where need be",
      "Assist patient into a desirable position"
    ],
    "answer": "Find patient’s level or awareness of condition",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Explain and demonstrate the use of devices/gadgets (if any) included in the management process e.g. glucometer, clutches, spirometer etc.",
      "Build on what the patient knows about the condition with scientific data of condition",
      "Find patient’s level or awareness on possible management options",
      "Establish rapport with the patient (Refer to steps)"
    ],
    "answer": "Build on what the patient knows about the condition with scientific data of condition",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Find patient’s level or awareness of condition",
      "Confirm patient’s diagnoses against the patient’s record (manually or electronic)",
      "Find patient’s level or awareness on possible management options",
      "Provide patient with clear simple pamphlets or other sources of readable information"
    ],
    "answer": "Find patient’s level or awareness on possible management options",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Ensure enabling and relaxed environment to maintain privacy and individuality of patient",
      "Encourage patient and significant other to co-operate with health team and ask questions whenever he/she is in doubt",
      "Identify the suitable language for the patient",
      "Explain to patient the rationale for the various investigations and treatment adopted"
    ],
    "answer": "Explain to patient the rationale for the various investigations and treatment adopted",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Explain the possible outcome of condition and prognoses",
      "Explain to patient the rationale for the various investigations and treatment adopted",
      "Involve relatives or significant other if any",
      "Allow patient and significant other to ask questions for clarity"
    ],
    "answer": "Explain the possible outcome of condition and prognoses",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Explain the need for education to patient",
      "Explain and demonstrate the use of devices/gadgets (if any) included in the management process e.g. glucometer, clutches, spirometer etc.",
      "Document procedure and report to appropriate officer",
      "Find patient’s level or awareness on possible management options"
    ],
    "answer": "Explain and demonstrate the use of devices/gadgets (if any) included in the management process e.g. glucometer, clutches, spirometer etc.",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Thank patient and relatives for the cooperation",
      "Build on what the patient knows about the condition with scientific data of condition",
      "Ensure patient and significant other understands the teaching and clarify where need be",
      "Sit comfortably by the patient"
    ],
    "answer": "Ensure patient and significant other understands the teaching and clarify where need be",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Explain and demonstrate the use of devices/gadgets (if any) included in the management process e.g. glucometer, clutches, spirometer etc.",
      "Assist patient into a desirable position",
      "Provide patient with clear simple pamphlets or other sources of readable information",
      "Allow patient and significant other to ask questions for clarity"
    ],
    "answer": "Allow patient and significant other to ask questions for clarity",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Encourage patient and significant other to co-operate with health team and ask questions whenever he/she is in doubt",
      "Establish rapport with the patient (Refer to steps)",
      "Explain the possible outcome of condition and prognoses",
      "Ensure enabling and relaxed environment to maintain privacy and individuality of patient"
    ],
    "answer": "Encourage patient and significant other to co-operate with health team and ask questions whenever he/she is in doubt",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Explain to patient the rationale for the various investigations and treatment adopted",
      "Provide patient with clear simple pamphlets or other sources of readable information",
      "Find patient’s level or awareness of condition",
      "Confirm patient’s diagnoses against the patient’s record (manually or electronic)"
    ],
    "answer": "Provide patient with clear simple pamphlets or other sources of readable information",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Identify the suitable language for the patient",
      "Document procedure and report to appropriate officer",
      "Thank patient and relatives for the cooperation",
      "Allow patient and significant other to ask questions for clarity"
    ],
    "answer": "Thank patient and relatives for the cooperation",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of EDUCATION ON CONDITION AND ITS MANAGEMENT?",
    "options": [
      "Involve relatives or significant other if any",
      "Ensure patient and significant other understands the teaching and clarify where need be",
      "Sit comfortably by the patient",
      "Document procedure and report to appropriate officer"
    ],
    "answer": "Document procedure and report to appropriate officer",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  }
],
  },

  {
    id: "rgn-031",
    title: "ADMISSION OF A PATIENT",
    category: "General Nursing (RGN)",
    types: [
  "Planned: The patient is informed well ahead of time to allow him or her prepare for the admission. The patient usually walks in to the facility alone or accompanied by a relative. The patients are usually admitted for investigations and planned treatment.",
  "Unplanned (Emergency): The patients usually has no plans of being admitted and arrive on the ward in an unprepared state. Patients for emergency admission are usually very ill and may be transported into the ward in a wheel chair or on a trolley through the emergency units. However, occasionally a patient for unplanned admission may walk into the ward. The patients are admitted with an acute condition requiring immediate treatment."
],
    overview:
      "Admission is an act of allowing the patient/client to stay in the health facility for a period. This brings about a change in the patient(s) environment which could be: a. Sudden and drastic due to an emergency or b. Planned. The first impression created is very important therefore the nurse should be understanding, courteous, confident and efficient.",
    purpose: [],
    indications: [
      "Planned admission for investigation or treatment",
      "Unplanned or emergency admission requiring immediate care",
      "Admission following transfer from another clinical area",
      "Admission for observation and monitoring",
      "Admission for surgical or other specialized treatment",
    ],
    equipment: [
  "Admission bed and its accessories (Per patient condition)",
  "Manual or electronic folder",
  "Vital signs tray",
  "Oxygen apparatus",
  "Treatment or emergency tray",
  "Suction apparatus",
  "Admission and Discharge documents (Manual or Electronic)"
],
    steps: [
  "Welcome patient and relatives to the nurses station",
  "Introduce self (nurse) and any staff present",
  "Collect necessary documents, admission notes and any other information from the accompanying nurse",
  "Assess the patients conditions and note any supportive gadgets/devices",
  "Identify and confirm patient’s name, particulars and reassures him/her and relatives",
  "Send patient to bedside and position him/her as per the conditions permits",
  "Make relative comfortable in the waiting area",
  "Take comprehensive history from the patient or relatives",
  "Perform general head to toe assessment",
  "Check vital signs and records",
  "Secure intravenous access and extracts sample for requested laboratory investigations",
  "Send patient to do other requested investigations e.g. X-rays, C.T. Scan etc. (if any)",
  "Inform charge nurse of any urgent prescribed medication and ensure they are available",
  "Administer prescribed medications",
  "Assist patient to change into appropriate clothing",
  "Ask patient to declare valuables if any according to the institution’s protocol",
  "Keep patient valuables according to the institution’s protocol",
  "Explain National Health/Mutual Insurance Schemes to patient and relative(s)",
  "If client is a scheme holder, go ahead and process",
  "If client is a cash-in client, request for deposit per the institutional protocol",
  "Introduce him/her to other patients near him/her in the ward",
  "Orientate patient/relative(s) to ward if condition permits",
  "Inform patients/relatives about the routine ward activities",
  "Enter patient’s name into admission, discharges book and daily ward state (manually or electronically)",
  "Instruct patient/relatives to read and sign consent form if necessary",
  "Allow relative(s) to see patient and bid goodbye",
  "Document all assessments, findings and treatments in appropriate notes charts (manually or electronically)",
  "Plan care for the patient using the nursing process approach"
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
    quiz: [
  {
    "question": "Which action is listed as step 1 of ADMISSION OF A PATIENT?",
    "options": [
      "Welcome patient and relatives to the nurses station",
      "Identify and confirm patient’s name, particulars and reassures him/her and relatives",
      "Ask patient to declare valuables if any according to the institution’s protocol",
      "Document all assessments, findings and treatments in appropriate notes charts (manually or electronically)"
    ],
    "answer": "Welcome patient and relatives to the nurses station",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of ADMISSION OF A PATIENT?",
    "options": [
      "Make relative comfortable in the waiting area",
      "Introduce self (nurse) and any staff present",
      "Send patient to do other requested investigations e.g. X-rays, C.T. Scan etc. (if any)",
      "Inform patients/relatives about the routine ward activities"
    ],
    "answer": "Introduce self (nurse) and any staff present",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of ADMISSION OF A PATIENT?",
    "options": [
      "Introduce self (nurse) and any staff present",
      "Administer prescribed medications",
      "Collect necessary documents, admission notes and any other information from the accompanying nurse",
      "If client is a scheme holder, go ahead and process"
    ],
    "answer": "Collect necessary documents, admission notes and any other information from the accompanying nurse",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of ADMISSION OF A PATIENT?",
    "options": [
      "Allow relative(s) to see patient and bid goodbye",
      "Check vital signs and records",
      "Introduce him/her to other patients near him/her in the ward",
      "Assess the patients conditions and note any supportive gadgets/devices"
    ],
    "answer": "Assess the patients conditions and note any supportive gadgets/devices",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of ADMISSION OF A PATIENT?",
    "options": [
      "Identify and confirm patient’s name, particulars and reassures him/her and relatives",
      "Send patient to bedside and position him/her as per the conditions permits",
      "Keep patient valuables according to the institution’s protocol",
      "Plan care for the patient using the nursing process approach"
    ],
    "answer": "Identify and confirm patient’s name, particulars and reassures him/her and relatives",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of ADMISSION OF A PATIENT?",
    "options": [
      "Take comprehensive history from the patient or relatives",
      "Send patient to bedside and position him/her as per the conditions permits",
      "Inform charge nurse of any urgent prescribed medication and ensure they are available",
      "Enter patient’s name into admission, discharges book and daily ward state (manually or electronically)"
    ],
    "answer": "Send patient to bedside and position him/her as per the conditions permits",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of ADMISSION OF A PATIENT?",
    "options": [
      "Collect necessary documents, admission notes and any other information from the accompanying nurse",
      "Assist patient to change into appropriate clothing",
      "Make relative comfortable in the waiting area",
      "If client is a cash-in client, request for deposit per the institutional protocol"
    ],
    "answer": "Make relative comfortable in the waiting area",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of ADMISSION OF A PATIENT?",
    "options": [
      "Document all assessments, findings and treatments in appropriate notes charts (manually or electronically)",
      "Secure intravenous access and extracts sample for requested laboratory investigations",
      "Orientate patient/relative(s) to ward if condition permits",
      "Take comprehensive history from the patient or relatives"
    ],
    "answer": "Take comprehensive history from the patient or relatives",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of ADMISSION OF A PATIENT?",
    "options": [
      "Perform general head to toe assessment",
      "Send patient to bedside and position him/her as per the conditions permits",
      "Explain National Health/Mutual Insurance Schemes to patient and relative(s)",
      "Welcome patient and relatives to the nurses station"
    ],
    "answer": "Perform general head to toe assessment",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of ADMISSION OF A PATIENT?",
    "options": [
      "Take comprehensive history from the patient or relatives",
      "Check vital signs and records",
      "Administer prescribed medications",
      "Instruct patient/relatives to read and sign consent form if necessary"
    ],
    "answer": "Check vital signs and records",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of ADMISSION OF A PATIENT?",
    "options": [
      "Assess the patients conditions and note any supportive gadgets/devices",
      "Ask patient to declare valuables if any according to the institution’s protocol",
      "Secure intravenous access and extracts sample for requested laboratory investigations",
      "Introduce him/her to other patients near him/her in the ward"
    ],
    "answer": "Secure intravenous access and extracts sample for requested laboratory investigations",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of ADMISSION OF A PATIENT?",
    "options": [
      "Plan care for the patient using the nursing process approach",
      "Secure intravenous access and extracts sample for requested laboratory investigations",
      "Inform patients/relatives about the routine ward activities",
      "Send patient to do other requested investigations e.g. X-rays, C.T. Scan etc. (if any)"
    ],
    "answer": "Send patient to do other requested investigations e.g. X-rays, C.T. Scan etc. (if any)",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of ADMISSION OF A PATIENT?",
    "options": [
      "Inform charge nurse of any urgent prescribed medication and ensure they are available",
      "Make relative comfortable in the waiting area",
      "If client is a scheme holder, go ahead and process",
      "Introduce self (nurse) and any staff present"
    ],
    "answer": "Inform charge nurse of any urgent prescribed medication and ensure they are available",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of ADMISSION OF A PATIENT?",
    "options": [
      "Perform general head to toe assessment",
      "Administer prescribed medications",
      "Assist patient to change into appropriate clothing",
      "Allow relative(s) to see patient and bid goodbye"
    ],
    "answer": "Administer prescribed medications",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of ADMISSION OF A PATIENT?",
    "options": [
      "Identify and confirm patient’s name, particulars and reassures him/her and relatives",
      "Keep patient valuables according to the institution’s protocol",
      "Assist patient to change into appropriate clothing",
      "Orientate patient/relative(s) to ward if condition permits"
    ],
    "answer": "Assist patient to change into appropriate clothing",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of ADMISSION OF A PATIENT?",
    "options": [
      "Welcome patient and relatives to the nurses station",
      "Send patient to do other requested investigations e.g. X-rays, C.T. Scan etc. (if any)",
      "Enter patient’s name into admission, discharges book and daily ward state (manually or electronically)",
      "Ask patient to declare valuables if any according to the institution’s protocol"
    ],
    "answer": "Ask patient to declare valuables if any according to the institution’s protocol",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of ADMISSION OF A PATIENT?",
    "options": [
      "Keep patient valuables according to the institution’s protocol",
      "Take comprehensive history from the patient or relatives",
      "If client is a cash-in client, request for deposit per the institutional protocol",
      "Collect necessary documents, admission notes and any other information from the accompanying nurse"
    ],
    "answer": "Keep patient valuables according to the institution’s protocol",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of ADMISSION OF A PATIENT?",
    "options": [
      "Check vital signs and records",
      "Explain National Health/Mutual Insurance Schemes to patient and relative(s)",
      "Assist patient to change into appropriate clothing",
      "Document all assessments, findings and treatments in appropriate notes charts (manually or electronically)"
    ],
    "answer": "Explain National Health/Mutual Insurance Schemes to patient and relative(s)",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of ADMISSION OF A PATIENT?",
    "options": [
      "Send patient to bedside and position him/her as per the conditions permits",
      "Keep patient valuables according to the institution’s protocol",
      "If client is a scheme holder, go ahead and process",
      "Inform patients/relatives about the routine ward activities"
    ],
    "answer": "If client is a scheme holder, go ahead and process",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of ADMISSION OF A PATIENT?",
    "options": [
      "Introduce self (nurse) and any staff present",
      "Inform charge nurse of any urgent prescribed medication and ensure they are available",
      "Instruct patient/relatives to read and sign consent form if necessary",
      "If client is a cash-in client, request for deposit per the institutional protocol"
    ],
    "answer": "If client is a cash-in client, request for deposit per the institutional protocol",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 21 of ADMISSION OF A PATIENT?",
    "options": [
      "Introduce him/her to other patients near him/her in the ward",
      "Perform general head to toe assessment",
      "If client is a cash-in client, request for deposit per the institutional protocol",
      "Assess the patients conditions and note any supportive gadgets/devices"
    ],
    "answer": "Introduce him/her to other patients near him/her in the ward",
    "explanation": "This checks recall of step 21 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 22 of ADMISSION OF A PATIENT?",
    "options": [
      "Secure intravenous access and extracts sample for requested laboratory investigations",
      "Orientate patient/relative(s) to ward if condition permits",
      "Ask patient to declare valuables if any according to the institution’s protocol",
      "Plan care for the patient using the nursing process approach"
    ],
    "answer": "Orientate patient/relative(s) to ward if condition permits",
    "explanation": "This checks recall of step 22 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 23 of ADMISSION OF A PATIENT?",
    "options": [
      "Make relative comfortable in the waiting area",
      "Explain National Health/Mutual Insurance Schemes to patient and relative(s)",
      "Inform patients/relatives about the routine ward activities",
      "Enter patient’s name into admission, discharges book and daily ward state (manually or electronically)"
    ],
    "answer": "Inform patients/relatives about the routine ward activities",
    "explanation": "This checks recall of step 23 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 24 of ADMISSION OF A PATIENT?",
    "options": [
      "Collect necessary documents, admission notes and any other information from the accompanying nurse",
      "Administer prescribed medications",
      "Allow relative(s) to see patient and bid goodbye",
      "Enter patient’s name into admission, discharges book and daily ward state (manually or electronically)"
    ],
    "answer": "Enter patient’s name into admission, discharges book and daily ward state (manually or electronically)",
    "explanation": "This checks recall of step 24 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 25 of ADMISSION OF A PATIENT?",
    "options": [
      "Instruct patient/relatives to read and sign consent form if necessary",
      "Check vital signs and records",
      "Introduce him/her to other patients near him/her in the ward",
      "Identify and confirm patient’s name, particulars and reassures him/her and relatives"
    ],
    "answer": "Instruct patient/relatives to read and sign consent form if necessary",
    "explanation": "This checks recall of step 25 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 26 of ADMISSION OF A PATIENT?",
    "options": [
      "Send patient to do other requested investigations e.g. X-rays, C.T. Scan etc. (if any)",
      "Allow relative(s) to see patient and bid goodbye",
      "Keep patient valuables according to the institution’s protocol",
      "Welcome patient and relatives to the nurses station"
    ],
    "answer": "Allow relative(s) to see patient and bid goodbye",
    "explanation": "This checks recall of step 26 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 27 of ADMISSION OF A PATIENT?",
    "options": [
      "Take comprehensive history from the patient or relatives",
      "If client is a scheme holder, go ahead and process",
      "Document all assessments, findings and treatments in appropriate notes charts (manually or electronically)",
      "Enter patient’s name into admission, discharges book and daily ward state (manually or electronically)"
    ],
    "answer": "Document all assessments, findings and treatments in appropriate notes charts (manually or electronically)",
    "explanation": "This checks recall of step 27 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 28 of ADMISSION OF A PATIENT?",
    "options": [
      "Assess the patients conditions and note any supportive gadgets/devices",
      "Assist patient to change into appropriate clothing",
      "Allow relative(s) to see patient and bid goodbye",
      "Plan care for the patient using the nursing process approach"
    ],
    "answer": "Plan care for the patient using the nursing process approach",
    "explanation": "This checks recall of step 28 in the procedure sequence."
  }
],
  },

  {
    id: "rgn-032",
    title: "SIMPLE UNOCCUPIED BED",
    category: "General Nursing (RGN)",
    types: [
  "Closed Bed: All the top sheets are drawn up to the head end of the bed and all sides tucked in to prevent dust and dirt to the bottom sheet.",
  "Open Bed: The top sheets are folded back to aid quick entry of new or ambulatory patient."
],
    overview:
      "This is an empty bed covered with top linen so that all linen beneath are fully protected from dust and dirt while waiting for the admission of patient.",
    purpose: [],
    indications: [
      "Preparation of a bed before admission of a patient",
      "Preparation of an empty bed after discharge",
      "Routine replacement of bed linen when the bed is unoccupied",
      "Preparation of a bed for an ambulant patient who is not currently in bed",
    ],
    equipment: [
  "A trolley with the following items:",
  "Two large cotton sheet (Bed linen)",
  "One water proof draw mackintosh or bed mat if necessary",
  "One draw sheet",
  "Pillow slips",
  "One top sheet",
  "Counterpane if necessary",
  "Two chairs or heart table",
  "Mattress",
  "One or two pillows"
],
    steps: [
  "Perform hand hygiene",
  "Collect, arranges items on trolley and send to bedside",
  "3. Arrange items in order of use on chairs or heart table",
  "Place bottom sheet evenly on the bed",
  "Pull sheet tight so that there are no creases",
  "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
  "Pull and tuck sheet at the sides to prevent creases",
  "Place bed mat or draw mackintosh at the mid portion of the bed",
  "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
  "Slip the pillow cases on the pillows with an assistant",
  "Place pillows on bed with open ends away from the entrance",
  "Place top sheet on bed with the wrong side uppermost",
  "Fold over at the bottom and tuck in loosely",
  "Place counterpane (if necessary) loosely over the bed",
  "Tuck counterpane (if necessary) at the bottom end using mitered or envelop corners",
  "Fold top sheet over the counterpane at the top end (per either Open or Closed bed)",
  "Tuck in sides under the mattress to prevent creases",
  "Remove trolley and chair or heart table",
  "Perform hand hygiene"
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
    quiz: [
  {
    "question": "Which action is listed as step 1 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Perform hand hygiene",
      "Pull sheet tight so that there are no creases",
      "Fold top sheet over the counterpane at the top end (per either Open or Closed bed)",
      "Slip the pillow cases on the pillows with an assistant"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Tuck in sides under the mattress to prevent creases",
      "Collect, arranges items on trolley and send to bedside",
      "Place top sheet on bed with the wrong side uppermost",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners"
    ],
    "answer": "Collect, arranges items on trolley and send to bedside",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Fold over at the bottom and tuck in loosely",
      "Pull and tuck sheet at the sides to prevent creases",
      "3. Arrange items in order of use on chairs or heart table",
      "Perform hand hygiene"
    ],
    "answer": "3. Arrange items in order of use on chairs or heart table",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
      "Collect, arranges items on trolley and send to bedside",
      "Place counterpane (if necessary) loosely over the bed",
      "Place bottom sheet evenly on the bed"
    ],
    "answer": "Place bottom sheet evenly on the bed",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Pull sheet tight so that there are no creases",
      "Fold top sheet over the counterpane at the top end (per either Open or Closed bed)",
      "Slip the pillow cases on the pillows with an assistant",
      "3. Arrange items in order of use on chairs or heart table"
    ],
    "answer": "Pull sheet tight so that there are no creases",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Place pillows on bed with open ends away from the entrance",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
      "Pull sheet tight so that there are no creases",
      "Tuck in sides under the mattress to prevent creases"
    ],
    "answer": "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
      "Remove trolley and chair or heart table",
      "Pull and tuck sheet at the sides to prevent creases",
      "Fold over at the bottom and tuck in loosely"
    ],
    "answer": "Pull and tuck sheet at the sides to prevent creases",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Collect, arranges items on trolley and send to bedside",
      "Place counterpane (if necessary) loosely over the bed",
      "Pull and tuck sheet at the sides to prevent creases",
      "Place bed mat or draw mackintosh at the mid portion of the bed"
    ],
    "answer": "Place bed mat or draw mackintosh at the mid portion of the bed",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
      "Slip the pillow cases on the pillows with an assistant",
      "3. Arrange items in order of use on chairs or heart table",
      "Tuck counterpane (if necessary) at the bottom end using mitered or envelop corners"
    ],
    "answer": "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Place bottom sheet evenly on the bed",
      "Slip the pillow cases on the pillows with an assistant",
      "Tuck in sides under the mattress to prevent creases",
      "Place pillows on bed with open ends away from the entrance"
    ],
    "answer": "Slip the pillow cases on the pillows with an assistant",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Remove trolley and chair or heart table",
      "Place top sheet on bed with the wrong side uppermost",
      "Place pillows on bed with open ends away from the entrance",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners"
    ],
    "answer": "Place pillows on bed with open ends away from the entrance",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Place counterpane (if necessary) loosely over the bed",
      "Pull and tuck sheet at the sides to prevent creases",
      "Perform hand hygiene",
      "Place top sheet on bed with the wrong side uppermost"
    ],
    "answer": "Place top sheet on bed with the wrong side uppermost",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Fold over at the bottom and tuck in loosely",
      "3. Arrange items in order of use on chairs or heart table",
      "Tuck counterpane (if necessary) at the bottom end using mitered or envelop corners",
      "Place bed mat or draw mackintosh at the mid portion of the bed"
    ],
    "answer": "Fold over at the bottom and tuck in loosely",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Fold top sheet over the counterpane at the top end (per either Open or Closed bed)",
      "Place counterpane (if necessary) loosely over the bed",
      "Slip the pillow cases on the pillows with an assistant",
      "Place bottom sheet evenly on the bed"
    ],
    "answer": "Place counterpane (if necessary) loosely over the bed",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Place pillows on bed with open ends away from the entrance",
      "Pull sheet tight so that there are no creases",
      "Tuck counterpane (if necessary) at the bottom end using mitered or envelop corners",
      "Remove trolley and chair or heart table"
    ],
    "answer": "Tuck counterpane (if necessary) at the bottom end using mitered or envelop corners",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Pull and tuck sheet at the sides to prevent creases",
      "Perform hand hygiene",
      "Place top sheet on bed with the wrong side uppermost",
      "Fold top sheet over the counterpane at the top end (per either Open or Closed bed)"
    ],
    "answer": "Fold top sheet over the counterpane at the top end (per either Open or Closed bed)",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Tuck in sides under the mattress to prevent creases",
      "Place counterpane (if necessary) loosely over the bed",
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Collect, arranges items on trolley and send to bedside"
    ],
    "answer": "Tuck in sides under the mattress to prevent creases",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
      "Remove trolley and chair or heart table",
      "Place bottom sheet evenly on the bed",
      "Tuck counterpane (if necessary) at the bottom end using mitered or envelop corners"
    ],
    "answer": "Remove trolley and chair or heart table",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of SIMPLE UNOCCUPIED BED?",
    "options": [
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
      "Tuck in sides under the mattress to prevent creases",
      "Perform hand hygiene",
      "Place top sheet on bed with the wrong side uppermost"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  }
],
  },

  {
    id: "rgn-033",
    title: "SIMPLE OCCUPIED BED",
    category: "General Nursing (RGN)",
    types: [
  "Changing bottom sheet of a patient from side to side",
  "Changing bottom sheet of a patient from top to bottom"
],
    overview:
      "This is a type of bed made for an in-patient. It may also be made for a patient who has difficulty in moving out of bed. During the procedure, the patient stays in bed while the bed is made.",
    purpose: [],
    indications: [
      "Changing the bottom sheet while the patient remains in bed",
      "Changing bed linen for a patient who cannot safely get out of bed",
      "Changing the bottom sheet from side to side",
      "Changing bed linen from top to bottom when clinically appropriate",
    ],
    equipment: [
  "A trolley with the following items:",
  "Two large cotton sheet (Bed linen)",
  "One water proof draw mackintosh or bed mat if necessary",
  "One draw sheet",
  "Pillow slips",
  "One top sheet",
  "Counterpane if necessary",
  "Two chairs or heart table",
  "Mattress",
  "One or two pillows",
  "Linen bin or receptacle",
  "Disposable gloves if necessary"
],
    steps: [
  "Establish rapport (Refer to steps)",
  "Explain procedure to patient to gain his/her cooperation and participation",
  "Ensure patient privacy",
  "Perform hand hygiene",
  "Collect and arrange items on trolley and bring them to the bedside",
  "Arrange sheets in order of use on chairs or a heart table",
  "Remove any equipment attached to the bed e.g. drip stand, side rails etc.",
  "Loosen sheets at the side of bed and remove extra beddings leaving only the top sheet",
  "Leave patient with only one pillow and cover him/her with top sheet",
  "Assist the patient to turn to the side away from the clean portion of the linen supported by another nurse",
  "Roll dirty bottom sheet under patient use glove if necessary",
  "Cover the bed with a clean rolled bottom sheet halfway in the middle of the bed",
  "Create a mitered or envelope corner at the ends",
  "Put on bed mat or draw mackintosh and draw sheet mid portion of the bed tucking in greater part nearest to the door",
  "Assist patient gently unto the clean sheet",
  "Remove dirty bottom sheet and places it in a receptacle",
  "Pull the bottom sheet at the other end tightly and tuck in",
  "Spread top sheets and counterpane if necessary over the existing sheets",
  "Ask assistant to hold the top edge of the clean sheets while the old sheet is gradually pulled down to the foot end of the bed and place in a receptacle",
  "Cover patient with top sheet and counterpane if necessary and make patient comfortable",
  "Clear items and removes screen",
  "Perform hand hygiene",
  "Document findings and report"
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
    quiz: [
  {
    "question": "Which action is listed as step 1 of SIMPLE OCCUPIED BED?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Collect and arrange items on trolley and bring them to the bedside",
      "Remove dirty bottom sheet and places it in a receptacle",
      "Arrange sheets in order of use on chairs or a heart table"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of SIMPLE OCCUPIED BED?",
    "options": [
      "Create a mitered or envelope corner at the ends",
      "Explain procedure to patient to gain his/her cooperation and participation",
      "Cover the bed with a clean rolled bottom sheet halfway in the middle of the bed",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Explain procedure to patient to gain his/her cooperation and participation",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of SIMPLE OCCUPIED BED?",
    "options": [
      "Leave patient with only one pillow and cover him/her with top sheet",
      "Cover patient with top sheet and counterpane if necessary and make patient comfortable",
      "Ensure patient privacy",
      "Ask assistant to hold the top edge of the clean sheets while the old sheet is gradually pulled down to the foot end of the bed and place in a receptacle"
    ],
    "answer": "Ensure patient privacy",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of SIMPLE OCCUPIED BED?",
    "options": [
      "Collect and arrange items on trolley and bring them to the bedside",
      "Remove dirty bottom sheet and places it in a receptacle",
      "Arrange sheets in order of use on chairs or a heart table",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of SIMPLE OCCUPIED BED?",
    "options": [
      "Collect and arrange items on trolley and bring them to the bedside",
      "Cover the bed with a clean rolled bottom sheet halfway in the middle of the bed",
      "Establish rapport (Refer to steps)",
      "Create a mitered or envelope corner at the ends"
    ],
    "answer": "Collect and arrange items on trolley and bring them to the bedside",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of SIMPLE OCCUPIED BED?",
    "options": [
      "Cover patient with top sheet and counterpane if necessary and make patient comfortable",
      "Arrange sheets in order of use on chairs or a heart table",
      "Ask assistant to hold the top edge of the clean sheets while the old sheet is gradually pulled down to the foot end of the bed and place in a receptacle",
      "Leave patient with only one pillow and cover him/her with top sheet"
    ],
    "answer": "Arrange sheets in order of use on chairs or a heart table",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of SIMPLE OCCUPIED BED?",
    "options": [
      "Remove dirty bottom sheet and places it in a receptacle",
      "Collect and arrange items on trolley and bring them to the bedside",
      "Remove any equipment attached to the bed e.g. drip stand, side rails etc.",
      "Perform hand hygiene"
    ],
    "answer": "Remove any equipment attached to the bed e.g. drip stand, side rails etc.",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of SIMPLE OCCUPIED BED?",
    "options": [
      "Cover the bed with a clean rolled bottom sheet halfway in the middle of the bed",
      "Establish rapport (Refer to steps)",
      "Create a mitered or envelope corner at the ends",
      "Loosen sheets at the side of bed and remove extra beddings leaving only the top sheet"
    ],
    "answer": "Loosen sheets at the side of bed and remove extra beddings leaving only the top sheet",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of SIMPLE OCCUPIED BED?",
    "options": [
      "Leave patient with only one pillow and cover him/her with top sheet",
      "Ask assistant to hold the top edge of the clean sheets while the old sheet is gradually pulled down to the foot end of the bed and place in a receptacle",
      "Loosen sheets at the side of bed and remove extra beddings leaving only the top sheet",
      "Cover patient with top sheet and counterpane if necessary and make patient comfortable"
    ],
    "answer": "Leave patient with only one pillow and cover him/her with top sheet",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of SIMPLE OCCUPIED BED?",
    "options": [
      "Collect and arrange items on trolley and bring them to the bedside",
      "Assist the patient to turn to the side away from the clean portion of the linen supported by another nurse",
      "Perform hand hygiene",
      "Remove dirty bottom sheet and places it in a receptacle"
    ],
    "answer": "Assist the patient to turn to the side away from the clean portion of the linen supported by another nurse",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of SIMPLE OCCUPIED BED?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Create a mitered or envelope corner at the ends",
      "Roll dirty bottom sheet under patient use glove if necessary",
      "Cover the bed with a clean rolled bottom sheet halfway in the middle of the bed"
    ],
    "answer": "Roll dirty bottom sheet under patient use glove if necessary",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of SIMPLE OCCUPIED BED?",
    "options": [
      "Ask assistant to hold the top edge of the clean sheets while the old sheet is gradually pulled down to the foot end of the bed and place in a receptacle",
      "Loosen sheets at the side of bed and remove extra beddings leaving only the top sheet",
      "Cover patient with top sheet and counterpane if necessary and make patient comfortable",
      "Cover the bed with a clean rolled bottom sheet halfway in the middle of the bed"
    ],
    "answer": "Cover the bed with a clean rolled bottom sheet halfway in the middle of the bed",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of SIMPLE OCCUPIED BED?",
    "options": [
      "Create a mitered or envelope corner at the ends",
      "Perform hand hygiene",
      "Remove dirty bottom sheet and places it in a receptacle",
      "Collect and arrange items on trolley and bring them to the bedside"
    ],
    "answer": "Create a mitered or envelope corner at the ends",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of SIMPLE OCCUPIED BED?",
    "options": [
      "Cover the bed with a clean rolled bottom sheet halfway in the middle of the bed",
      "Put on bed mat or draw mackintosh and draw sheet mid portion of the bed tucking in greater part nearest to the door",
      "Roll dirty bottom sheet under patient use glove if necessary",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Put on bed mat or draw mackintosh and draw sheet mid portion of the bed tucking in greater part nearest to the door",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of SIMPLE OCCUPIED BED?",
    "options": [
      "Loosen sheets at the side of bed and remove extra beddings leaving only the top sheet",
      "Cover patient with top sheet and counterpane if necessary and make patient comfortable",
      "Assist patient gently unto the clean sheet",
      "Ask assistant to hold the top edge of the clean sheets while the old sheet is gradually pulled down to the foot end of the bed and place in a receptacle"
    ],
    "answer": "Assist patient gently unto the clean sheet",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of SIMPLE OCCUPIED BED?",
    "options": [
      "Perform hand hygiene",
      "Assist patient gently unto the clean sheet",
      "Collect and arrange items on trolley and bring them to the bedside",
      "Remove dirty bottom sheet and places it in a receptacle"
    ],
    "answer": "Remove dirty bottom sheet and places it in a receptacle",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of SIMPLE OCCUPIED BED?",
    "options": [
      "Pull the bottom sheet at the other end tightly and tuck in",
      "Roll dirty bottom sheet under patient use glove if necessary",
      "Establish rapport (Refer to steps)",
      "Cover the bed with a clean rolled bottom sheet halfway in the middle of the bed"
    ],
    "answer": "Pull the bottom sheet at the other end tightly and tuck in",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of SIMPLE OCCUPIED BED?",
    "options": [
      "Cover patient with top sheet and counterpane if necessary and make patient comfortable",
      "Spread top sheets and counterpane if necessary over the existing sheets",
      "Ask assistant to hold the top edge of the clean sheets while the old sheet is gradually pulled down to the foot end of the bed and place in a receptacle",
      "Loosen sheets at the side of bed and remove extra beddings leaving only the top sheet"
    ],
    "answer": "Spread top sheets and counterpane if necessary over the existing sheets",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of SIMPLE OCCUPIED BED?",
    "options": [
      "Assist patient gently unto the clean sheet",
      "Collect and arrange items on trolley and bring them to the bedside",
      "Ask assistant to hold the top edge of the clean sheets while the old sheet is gradually pulled down to the foot end of the bed and place in a receptacle",
      "Perform hand hygiene"
    ],
    "answer": "Ask assistant to hold the top edge of the clean sheets while the old sheet is gradually pulled down to the foot end of the bed and place in a receptacle",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of SIMPLE OCCUPIED BED?",
    "options": [
      "Roll dirty bottom sheet under patient use glove if necessary",
      "Establish rapport (Refer to steps)",
      "Cover the bed with a clean rolled bottom sheet halfway in the middle of the bed",
      "Cover patient with top sheet and counterpane if necessary and make patient comfortable"
    ],
    "answer": "Cover patient with top sheet and counterpane if necessary and make patient comfortable",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 21 of SIMPLE OCCUPIED BED?",
    "options": [
      "Clear items and removes screen",
      "Spread top sheets and counterpane if necessary over the existing sheets",
      "Loosen sheets at the side of bed and remove extra beddings leaving only the top sheet",
      "Ask assistant to hold the top edge of the clean sheets while the old sheet is gradually pulled down to the foot end of the bed and place in a receptacle"
    ],
    "answer": "Clear items and removes screen",
    "explanation": "This checks recall of step 21 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 22 of SIMPLE OCCUPIED BED?",
    "options": [
      "Arrange sheets in order of use on chairs or a heart table",
      "Perform hand hygiene",
      "Collect and arrange items on trolley and bring them to the bedside",
      "Remove dirty bottom sheet and places it in a receptacle"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 22 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 23 of SIMPLE OCCUPIED BED?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Cover the bed with a clean rolled bottom sheet halfway in the middle of the bed",
      "Document findings and report",
      "Roll dirty bottom sheet under patient use glove if necessary"
    ],
    "answer": "Document findings and report",
    "explanation": "This checks recall of step 23 in the procedure sequence."
  }
],
  },

  {
    id: "rgn-034",
    title: "ADMISSION BED",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "This is a type of open bed made in readiness for easy admittance of a client/patient.",
    purpose: [],
    indications: [
      "New patient admission",
      "Patient returning from another clinical area when an admission bed is required",
      "Emergency admission requiring immediate placement in bed",
      "Preparation of a bed before an expected admission",
    ],
    equipment: [
  "General requirements",
  "Long mackintosh or water proof sheet",
  "Two bath blanket or flannelette",
  "Drip stand",
  "Vital signs tray",
  "Oxygen apparatus",
  "Suction machine",
  "Medication tray",
  "Hot water bottle if necessary"
],
    steps: [
  "Perform hand hygiene",
  "Collect, arrange items on trolley and send to bedside",
  "Arrange items in order of use on a chair or heart table",
  "Place bottom sheet evenly on the bed",
  "Pull sheet tight so that there are no creases",
  "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
  "Place bed mat or draw mackintosh at the mid portion of the bed",
  "Cover mackintosh with draw sheet and tuck in at the sides",
  "Slip the pillow cases on the pillows with an assistant",
  "Place pillows on bed with open ends away from the entrance",
  "Place long mackintosh over the pillow and the bottom sheet and tuck around",
  "Place one bath blanket or flannelette over the mackintosh and fold under itself",
  "Place second bath blanket over the bed",
  "Put in hot water bottles if necessary",
  "Put on top bed clothes",
  "Place counterpane loosely over the top bed clothes (if necessary)",
  "Tuck in the bed clothes on the other side",
  "Fold the bed clothes on the other side nearest to the door, leaving it open to facilitate quick admittance",
  "Place bed accessories at the appropriate sides of the bed",
  "Perform hand hygiene",
  "Remove trolley and chairs"
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
    quiz: [
  {
    "question": "Which action is listed as step 1 of ADMISSION BED?",
    "options": [
      "Perform hand hygiene",
      "Pull sheet tight so that there are no creases",
      "Place counterpane loosely over the top bed clothes (if necessary)",
      "Cover mackintosh with draw sheet and tuck in at the sides"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of ADMISSION BED?",
    "options": [
      "Put on top bed clothes",
      "Collect, arrange items on trolley and send to bedside",
      "Place one bath blanket or flannelette over the mackintosh and fold under itself",
      "Place bottom sheet evenly on the bed"
    ],
    "answer": "Collect, arrange items on trolley and send to bedside",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of ADMISSION BED?",
    "options": [
      "Place long mackintosh over the pillow and the bottom sheet and tuck around",
      "Collect, arrange items on trolley and send to bedside",
      "Arrange items in order of use on a chair or heart table",
      "Place bed accessories at the appropriate sides of the bed"
    ],
    "answer": "Arrange items in order of use on a chair or heart table",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of ADMISSION BED?",
    "options": [
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Fold the bed clothes on the other side nearest to the door, leaving it open to facilitate quick admittance",
      "Place pillows on bed with open ends away from the entrance",
      "Place bottom sheet evenly on the bed"
    ],
    "answer": "Place bottom sheet evenly on the bed",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of ADMISSION BED?",
    "options": [
      "Pull sheet tight so that there are no creases",
      "Put in hot water bottles if necessary",
      "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
      "Tuck in the bed clothes on the other side"
    ],
    "answer": "Pull sheet tight so that there are no creases",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of ADMISSION BED?",
    "options": [
      "Place bottom sheet evenly on the bed",
      "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
      "Perform hand hygiene",
      "Place second bath blanket over the bed"
    ],
    "answer": "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of ADMISSION BED?",
    "options": [
      "Remove trolley and chairs",
      "Place one bath blanket or flannelette over the mackintosh and fold under itself",
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Slip the pillow cases on the pillows with an assistant"
    ],
    "answer": "Place bed mat or draw mackintosh at the mid portion of the bed",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of ADMISSION BED?",
    "options": [
      "Place counterpane loosely over the top bed clothes (if necessary)",
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Place bed accessories at the appropriate sides of the bed",
      "Cover mackintosh with draw sheet and tuck in at the sides"
    ],
    "answer": "Cover mackintosh with draw sheet and tuck in at the sides",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of ADMISSION BED?",
    "options": [
      "Slip the pillow cases on the pillows with an assistant",
      "Arrange items in order of use on a chair or heart table",
      "Put on top bed clothes",
      "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners"
    ],
    "answer": "Slip the pillow cases on the pillows with an assistant",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of ADMISSION BED?",
    "options": [
      "Put in hot water bottles if necessary",
      "Place pillows on bed with open ends away from the entrance",
      "Place long mackintosh over the pillow and the bottom sheet and tuck around",
      "Collect, arrange items on trolley and send to bedside"
    ],
    "answer": "Place pillows on bed with open ends away from the entrance",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of ADMISSION BED?",
    "options": [
      "Slip the pillow cases on the pillows with an assistant",
      "Perform hand hygiene",
      "Place long mackintosh over the pillow and the bottom sheet and tuck around",
      "Fold the bed clothes on the other side nearest to the door, leaving it open to facilitate quick admittance"
    ],
    "answer": "Place long mackintosh over the pillow and the bottom sheet and tuck around",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of ADMISSION BED?",
    "options": [
      "Pull sheet tight so that there are no creases",
      "Tuck in the bed clothes on the other side",
      "Cover mackintosh with draw sheet and tuck in at the sides",
      "Place one bath blanket or flannelette over the mackintosh and fold under itself"
    ],
    "answer": "Place one bath blanket or flannelette over the mackintosh and fold under itself",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of ADMISSION BED?",
    "options": [
      "Place second bath blanket over the bed",
      "Place one bath blanket or flannelette over the mackintosh and fold under itself",
      "Place bottom sheet evenly on the bed",
      "Place counterpane loosely over the top bed clothes (if necessary)"
    ],
    "answer": "Place second bath blanket over the bed",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of ADMISSION BED?",
    "options": [
      "Arrange items in order of use on a chair or heart table",
      "Put in hot water bottles if necessary",
      "Remove trolley and chairs",
      "Place long mackintosh over the pillow and the bottom sheet and tuck around"
    ],
    "answer": "Put in hot water bottles if necessary",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of ADMISSION BED?",
    "options": [
      "Place bed accessories at the appropriate sides of the bed",
      "Place pillows on bed with open ends away from the entrance",
      "Put on top bed clothes",
      "Place bed mat or draw mackintosh at the mid portion of the bed"
    ],
    "answer": "Put on top bed clothes",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of ADMISSION BED?",
    "options": [
      "Put in hot water bottles if necessary",
      "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
      "Fold the bed clothes on the other side nearest to the door, leaving it open to facilitate quick admittance",
      "Place counterpane loosely over the top bed clothes (if necessary)"
    ],
    "answer": "Place counterpane loosely over the top bed clothes (if necessary)",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of ADMISSION BED?",
    "options": [
      "Tuck in the bed clothes on the other side",
      "Collect, arrange items on trolley and send to bedside",
      "Place second bath blanket over the bed",
      "Pull sheet tight so that there are no creases"
    ],
    "answer": "Tuck in the bed clothes on the other side",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of ADMISSION BED?",
    "options": [
      "Place one bath blanket or flannelette over the mackintosh and fold under itself",
      "Fold the bed clothes on the other side nearest to the door, leaving it open to facilitate quick admittance",
      "Slip the pillow cases on the pillows with an assistant",
      "Perform hand hygiene"
    ],
    "answer": "Fold the bed clothes on the other side nearest to the door, leaving it open to facilitate quick admittance",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of ADMISSION BED?",
    "options": [
      "Cover mackintosh with draw sheet and tuck in at the sides",
      "Remove trolley and chairs",
      "Place bed accessories at the appropriate sides of the bed",
      "Place counterpane loosely over the top bed clothes (if necessary)"
    ],
    "answer": "Place bed accessories at the appropriate sides of the bed",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of ADMISSION BED?",
    "options": [
      "Pull sheet tight so that there are no creases",
      "Place counterpane loosely over the top bed clothes (if necessary)",
      "Cover mackintosh with draw sheet and tuck in at the sides",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 21 of ADMISSION BED?",
    "options": [
      "Remove trolley and chairs",
      "Place long mackintosh over the pillow and the bottom sheet and tuck around",
      "Arrange items in order of use on a chair or heart table",
      "Put in hot water bottles if necessary"
    ],
    "answer": "Remove trolley and chairs",
    "explanation": "This checks recall of step 21 in the procedure sequence."
  }
],
  },

  {
    id: "rgn-035",
    title: "CARDIAC BED",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "Is a specialized kind of bed that is made in an upright position to afford a patient the greatest amount of comfort and relief during breathing.",
    purpose: [],
    indications: [
      "Patients experiencing dyspnoea",
      "Patients requiring an upright or semi-upright position",
      "Patients with cardiac conditions requiring supportive positioning",
      "Patients who obtain improved comfort when sitting upright",
    ],
    equipment: [
  "A trolley with the following items:",
  "Two large cotton sheet (Bed linen)",
  "One water proof draw mackintosh or bed mat if necessary",
  "One draw sheet",
  "Pillow slips",
  "One top sheet",
  "Counterpane if necessary",
  "Two chairs or heart table",
  "Mattress",
  "One or two pillows",
  "Back rest",
  "Extra pillows",
  "Foot rest or sand bags",
  "Air ring",
  "Sputum mug",
  "Bell",
  "Heart table",
  "Writing material (e.g. Pen and paper)"
],
    steps: [
  "Perform hand hygiene",
  "Collect, arrange items on trolley and send to bedside",
  "Arrange items in order of use on a chair or heart table",
  "Place bottom sheet evenly on the bed",
  "Pull sheet tight so that there are no creases",
  "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
  "Place bed mat or draw mackintosh at the mid portion of the bed",
  "Cover mackintosh with draw sheet and tuck in at the sides",
  "Place covered air rings in between the mackintosh and draw sheet",
  "Slip the pillow cases on the pillows with an assistant",
  "Place/elevate back rest at top end of bed",
  "Arrange pillows in an arm chair-like fashion",
  "Place top sheet on bed with the wrong side upper most and folds sheets over at the bottom",
  "Place foot rest/sand bags in position",
  "Tuck in the sides of top clothing loosely",
  "Place heart table with covered pillows in position",
  "Place sputum mug and bell within reach of patient",
  "Place writing materials within reach of patient",
  "Clear items (chairs and trolley)",
  "Perform hand hygiene"
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
    quiz: [
  {
    "question": "Which action is listed as step 1 of CARDIAC BED?",
    "options": [
      "Perform hand hygiene",
      "Pull sheet tight so that there are no creases",
      "Place heart table with covered pillows in position",
      "Place covered air rings in between the mackintosh and draw sheet"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of CARDIAC BED?",
    "options": [
      "Place heart table with covered pillows in position",
      "Collect, arrange items on trolley and send to bedside",
      "Arrange pillows in an arm chair-like fashion",
      "Pull sheet tight so that there are no creases"
    ],
    "answer": "Collect, arrange items on trolley and send to bedside",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of CARDIAC BED?",
    "options": [
      "Arrange pillows in an arm chair-like fashion",
      "Pull sheet tight so that there are no creases",
      "Arrange items in order of use on a chair or heart table",
      "Clear items (chairs and trolley)"
    ],
    "answer": "Arrange items in order of use on a chair or heart table",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of CARDIAC BED?",
    "options": [
      "Cover mackintosh with draw sheet and tuck in at the sides",
      "Clear items (chairs and trolley)",
      "Arrange pillows in an arm chair-like fashion",
      "Place bottom sheet evenly on the bed"
    ],
    "answer": "Place bottom sheet evenly on the bed",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of CARDIAC BED?",
    "options": [
      "Pull sheet tight so that there are no creases",
      "Tuck in the sides of top clothing loosely",
      "Cover mackintosh with draw sheet and tuck in at the sides",
      "Clear items (chairs and trolley)"
    ],
    "answer": "Pull sheet tight so that there are no creases",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of CARDIAC BED?",
    "options": [
      "Cover mackintosh with draw sheet and tuck in at the sides",
      "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
      "Arrange items in order of use on a chair or heart table",
      "Tuck in the sides of top clothing loosely"
    ],
    "answer": "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of CARDIAC BED?",
    "options": [
      "Arrange items in order of use on a chair or heart table",
      "Tuck in the sides of top clothing loosely",
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Place/elevate back rest at top end of bed"
    ],
    "answer": "Place bed mat or draw mackintosh at the mid portion of the bed",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of CARDIAC BED?",
    "options": [
      "Place writing materials within reach of patient",
      "Place/elevate back rest at top end of bed",
      "Arrange items in order of use on a chair or heart table",
      "Cover mackintosh with draw sheet and tuck in at the sides"
    ],
    "answer": "Cover mackintosh with draw sheet and tuck in at the sides",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of CARDIAC BED?",
    "options": [
      "Place covered air rings in between the mackintosh and draw sheet",
      "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
      "Place writing materials within reach of patient",
      "Place/elevate back rest at top end of bed"
    ],
    "answer": "Place covered air rings in between the mackintosh and draw sheet",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of CARDIAC BED?",
    "options": [
      "Place writing materials within reach of patient",
      "Slip the pillow cases on the pillows with an assistant",
      "Place foot rest/sand bags in position",
      "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners"
    ],
    "answer": "Slip the pillow cases on the pillows with an assistant",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of CARDIAC BED?",
    "options": [
      "Place foot rest/sand bags in position",
      "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
      "Place/elevate back rest at top end of bed",
      "Collect, arrange items on trolley and send to bedside"
    ],
    "answer": "Place/elevate back rest at top end of bed",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of CARDIAC BED?",
    "options": [
      "Place covered air rings in between the mackintosh and draw sheet",
      "Collect, arrange items on trolley and send to bedside",
      "Place foot rest/sand bags in position",
      "Arrange pillows in an arm chair-like fashion"
    ],
    "answer": "Arrange pillows in an arm chair-like fashion",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of CARDIAC BED?",
    "options": [
      "Place top sheet on bed with the wrong side upper most and folds sheets over at the bottom",
      "Place sputum mug and bell within reach of patient",
      "Place covered air rings in between the mackintosh and draw sheet",
      "Collect, arrange items on trolley and send to bedside"
    ],
    "answer": "Place top sheet on bed with the wrong side upper most and folds sheets over at the bottom",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of CARDIAC BED?",
    "options": [
      "Place covered air rings in between the mackintosh and draw sheet",
      "Place foot rest/sand bags in position",
      "Pull sheet tight so that there are no creases",
      "Place sputum mug and bell within reach of patient"
    ],
    "answer": "Place foot rest/sand bags in position",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of CARDIAC BED?",
    "options": [
      "Pull sheet tight so that there are no creases",
      "Place sputum mug and bell within reach of patient",
      "Tuck in the sides of top clothing loosely",
      "Arrange pillows in an arm chair-like fashion"
    ],
    "answer": "Tuck in the sides of top clothing loosely",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of CARDIAC BED?",
    "options": [
      "Perform hand hygiene",
      "Arrange pillows in an arm chair-like fashion",
      "Pull sheet tight so that there are no creases",
      "Place heart table with covered pillows in position"
    ],
    "answer": "Place heart table with covered pillows in position",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of CARDIAC BED?",
    "options": [
      "Place sputum mug and bell within reach of patient",
      "Cover mackintosh with draw sheet and tuck in at the sides",
      "Perform hand hygiene",
      "Arrange pillows in an arm chair-like fashion"
    ],
    "answer": "Place sputum mug and bell within reach of patient",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of CARDIAC BED?",
    "options": [
      "Perform hand hygiene",
      "Place writing materials within reach of patient",
      "Tuck in the sides of top clothing loosely",
      "Cover mackintosh with draw sheet and tuck in at the sides"
    ],
    "answer": "Place writing materials within reach of patient",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of CARDIAC BED?",
    "options": [
      "Tuck in the sides of top clothing loosely",
      "Cover mackintosh with draw sheet and tuck in at the sides",
      "Clear items (chairs and trolley)",
      "Place bottom sheet evenly on the bed"
    ],
    "answer": "Clear items (chairs and trolley)",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of CARDIAC BED?",
    "options": [
      "Arrange pillows in an arm chair-like fashion",
      "Pull sheet tight so that there are no creases",
      "Place heart table with covered pillows in position",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  }
],
  },

  {
    id: "rgn-036",
    title: "OPERATION BED",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "It is a special bed prepared to receive a patient returning from the theatre after a surgical procedure has been performed.",
    purpose: [],
    indications: [
      "Patient returning from theatre after surgery",
      "Patient requiring immediate post-operative nursing care",
      "Patient returning after general or regional anaesthesia",
      "Patients requiring close observation after an operative procedure",
    ],
    equipment: [
  "A trolley with the following items:",
  "Two large cotton sheet (Bed linen)",
  "One water proof draw mackintosh or bed mat if necessary",
  "One draw sheet",
  "Pillow slips",
  "One top sheet",
  "Counterpane if necessary",
  "Two chairs or heart table",
  "Mattress",
  "One or two pillows",
  "Mackintosh or any water proof material and dressing towel",
  "Hot water bottles",
  "Vital signs tray",
  "Medication tray",
  "Post anaethestic tray e.g. vomit bowl, wound dressing set, padded spatula or tongue holding forceps, receiver for soiled swab, adhesive tape, sterile gauze etc.",
  "Observation chart (manual or electronic)",
  "Drip stand",
  "Oxygen apparatus",
  "Suction machine"
],
    steps: [
  "Perform hand hygiene",
  "Collect, arrange items on trolley and send to bedside",
  "Arrange items in order of use on a chair or heart table",
  "Place bottom sheet evenly on the bed",
  "Pull sheet tight so that there are no creases",
  "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
  "Place bed mat or draw mackintosh at the mid portion of the bed",
  "Cover mackintosh with draw sheet and tuck in at the sides",
  "Place protective dressing towel at top of the bed towards the sides",
  "Leave pillow on chair by the bed",
  "Place hot water bottles on the bed",
  "Spread blanket on bed",
  "Place top sheet on with the wrong side uppermost and turns back the bottom end",
  "Fold the top bed clothes at the open side in three parts over the bed for easy admission of patient",
  "Place a post anaesthetic tray by bed side",
  "Arrange other bed accessories by the bedside e.g. drip stand, bed rails, vital signs tray medication tray, suction machine, oxygen apparatus",
  "Perform hand hygiene"
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
    quiz: [
  {
    "question": "Which action is listed as step 1 of OPERATION BED?",
    "options": [
      "Perform hand hygiene",
      "Pull sheet tight so that there are no creases",
      "Arrange other bed accessories by the bedside e.g. drip stand, bed rails, vital signs tray medication tray, suction machine, oxygen apparatus",
      "Spread blanket on bed"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of OPERATION BED?",
    "options": [
      "Place bottom sheet evenly on the bed",
      "Collect, arrange items on trolley and send to bedside",
      "Spread blanket on bed",
      "Cover mackintosh with draw sheet and tuck in at the sides"
    ],
    "answer": "Collect, arrange items on trolley and send to bedside",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of OPERATION BED?",
    "options": [
      "Place a post anaesthetic tray by bed side",
      "Place hot water bottles on the bed",
      "Arrange items in order of use on a chair or heart table",
      "Place bottom sheet evenly on the bed"
    ],
    "answer": "Arrange items in order of use on a chair or heart table",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of OPERATION BED?",
    "options": [
      "Place hot water bottles on the bed",
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Collect, arrange items on trolley and send to bedside",
      "Place bottom sheet evenly on the bed"
    ],
    "answer": "Place bottom sheet evenly on the bed",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of OPERATION BED?",
    "options": [
      "Pull sheet tight so that there are no creases",
      "Collect, arrange items on trolley and send to bedside",
      "Fold the top bed clothes at the open side in three parts over the bed for easy admission of patient",
      "Leave pillow on chair by the bed"
    ],
    "answer": "Pull sheet tight so that there are no creases",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of OPERATION BED?",
    "options": [
      "Perform hand hygiene",
      "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
      "Leave pillow on chair by the bed",
      "Pull sheet tight so that there are no creases"
    ],
    "answer": "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of OPERATION BED?",
    "options": [
      "Place top sheet on with the wrong side uppermost and turns back the bottom end",
      "Place protective dressing towel at top of the bed towards the sides",
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Perform hand hygiene"
    ],
    "answer": "Place bed mat or draw mackintosh at the mid portion of the bed",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of OPERATION BED?",
    "options": [
      "Place protective dressing towel at top of the bed towards the sides",
      "Place bottom sheet evenly on the bed",
      "Arrange other bed accessories by the bedside e.g. drip stand, bed rails, vital signs tray medication tray, suction machine, oxygen apparatus",
      "Cover mackintosh with draw sheet and tuck in at the sides"
    ],
    "answer": "Cover mackintosh with draw sheet and tuck in at the sides",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of OPERATION BED?",
    "options": [
      "Place protective dressing towel at top of the bed towards the sides",
      "Arrange other bed accessories by the bedside e.g. drip stand, bed rails, vital signs tray medication tray, suction machine, oxygen apparatus",
      "Spread blanket on bed",
      "Place bed mat or draw mackintosh at the mid portion of the bed"
    ],
    "answer": "Place protective dressing towel at top of the bed towards the sides",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of OPERATION BED?",
    "options": [
      "Place a post anaesthetic tray by bed side",
      "Leave pillow on chair by the bed",
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Arrange items in order of use on a chair or heart table"
    ],
    "answer": "Leave pillow on chair by the bed",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of OPERATION BED?",
    "options": [
      "Leave pillow on chair by the bed",
      "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
      "Place hot water bottles on the bed",
      "Place a post anaesthetic tray by bed side"
    ],
    "answer": "Place hot water bottles on the bed",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of OPERATION BED?",
    "options": [
      "Tuck the sheet evenly under the mattress at the top and bottom using enveloped or mitered corners",
      "Collect, arrange items on trolley and send to bedside",
      "Fold the top bed clothes at the open side in three parts over the bed for easy admission of patient",
      "Spread blanket on bed"
    ],
    "answer": "Spread blanket on bed",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of OPERATION BED?",
    "options": [
      "Place top sheet on with the wrong side uppermost and turns back the bottom end",
      "Fold the top bed clothes at the open side in three parts over the bed for easy admission of patient",
      "Place protective dressing towel at top of the bed towards the sides",
      "Pull sheet tight so that there are no creases"
    ],
    "answer": "Place top sheet on with the wrong side uppermost and turns back the bottom end",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of OPERATION BED?",
    "options": [
      "Spread blanket on bed",
      "Fold the top bed clothes at the open side in three parts over the bed for easy admission of patient",
      "Pull sheet tight so that there are no creases",
      "Perform hand hygiene"
    ],
    "answer": "Fold the top bed clothes at the open side in three parts over the bed for easy admission of patient",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of OPERATION BED?",
    "options": [
      "Cover mackintosh with draw sheet and tuck in at the sides",
      "Place bottom sheet evenly on the bed",
      "Place a post anaesthetic tray by bed side",
      "Spread blanket on bed"
    ],
    "answer": "Place a post anaesthetic tray by bed side",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of OPERATION BED?",
    "options": [
      "Place bottom sheet evenly on the bed",
      "Place a post anaesthetic tray by bed side",
      "Place hot water bottles on the bed",
      "Arrange other bed accessories by the bedside e.g. drip stand, bed rails, vital signs tray medication tray, suction machine, oxygen apparatus"
    ],
    "answer": "Arrange other bed accessories by the bedside e.g. drip stand, bed rails, vital signs tray medication tray, suction machine, oxygen apparatus",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of OPERATION BED?",
    "options": [
      "Perform hand hygiene",
      "Spread blanket on bed",
      "Cover mackintosh with draw sheet and tuck in at the sides",
      "Place bottom sheet evenly on the bed"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  }
],
  },

  {
    id: "rgn-037",
    title: "FRACTURE BED",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "This is a special bed with a firm base or support for nursing patients with fracture(s). The bed has an overhead frame for traction apparatus and trapeze to aid lifting, exercise and movement.",
    purpose: [],
    indications: [
      "Patients with fractures requiring bed-based nursing care",
      "Patients requiring firm mattress support",
      "Patients receiving prescribed traction",
      "Patients requiring assistance with positioning or movement after fracture",
    ],
    equipment: [
  "A trolley with the following items:",
  "Two large cotton sheet (Bed linen)",
  "One water proof draw mackintosh or bed mat if necessary",
  "One draw sheet",
  "Pillow slips",
  "One top sheet",
  "Counterpane if necessary",
  "Two chairs or heart table",
  "Mattress",
  "One or two pillows",
  "Fracture boards",
  "Bed blocks or elevators",
  "Sand bags with covers",
  "Extra mackintosh and dressing towel"
],
    steps: [
  "Perform hand hygiene",
  "Collect, arranges items on trolley and send to bedside",
  "Arrange items in order of use on chairs or heart table",
  "Place fracture boards under the mattress to provide firm support and prevent sagging",
  "Place bottom sheet evenly on the bed",
  "Pull sheet tight so that there are no creases",
  "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
  "Pull and tuck sheet at the sides to prevent creases",
  "Place bed mat or draw mackintosh at the mid portion of the bed",
  "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
  "Place small mackintosh and dressing towel at where the fracture is located on the bed",
  "Slip the pillow cases on the pillows with an assistant",
  "Place pillows on bed with open ends away from the entrance",
  "Place top sheet on bed with the wrong side uppermost",
  "Fold over at the bottom and tuck in loosely",
  "Place bed cover and counterpane (if necessary) loosely over the bed",
  "Fold over top bed clothing at the bottom end",
  "Place a foot board or sand bags at the foot end of the bed",
  "Tuck in sheets loosely at the sides",
  "Attach bed accessories if any",
  "Remove trolley and chair or heart table",
  "Perform hand hygiene"
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
    quiz: [
  {
    "question": "Which action is listed as step 1 of FRACTURE BED?",
    "options": [
      "Perform hand hygiene",
      "Place bottom sheet evenly on the bed",
      "Place bed cover and counterpane (if necessary) loosely over the bed",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of FRACTURE BED?",
    "options": [
      "Place top sheet on bed with the wrong side uppermost",
      "Collect, arranges items on trolley and send to bedside",
      "Slip the pillow cases on the pillows with an assistant",
      "Arrange items in order of use on chairs or heart table"
    ],
    "answer": "Collect, arranges items on trolley and send to bedside",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of FRACTURE BED?",
    "options": [
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
      "Remove trolley and chair or heart table",
      "Arrange items in order of use on chairs or heart table",
      "Tuck in sheets loosely at the sides"
    ],
    "answer": "Arrange items in order of use on chairs or heart table",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of FRACTURE BED?",
    "options": [
      "Pull sheet tight so that there are no creases",
      "Fold over top bed clothing at the bottom end",
      "Pull and tuck sheet at the sides to prevent creases",
      "Place fracture boards under the mattress to provide firm support and prevent sagging"
    ],
    "answer": "Place fracture boards under the mattress to provide firm support and prevent sagging",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of FRACTURE BED?",
    "options": [
      "Place bottom sheet evenly on the bed",
      "Place pillows on bed with open ends away from the entrance",
      "Arrange items in order of use on chairs or heart table",
      "Fold over at the bottom and tuck in loosely"
    ],
    "answer": "Place bottom sheet evenly on the bed",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of FRACTURE BED?",
    "options": [
      "Perform hand hygiene",
      "Pull sheet tight so that there are no creases",
      "Attach bed accessories if any",
      "Place small mackintosh and dressing towel at where the fracture is located on the bed"
    ],
    "answer": "Pull sheet tight so that there are no creases",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of FRACTURE BED?",
    "options": [
      "Place a foot board or sand bags at the foot end of the bed",
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
      "Pull sheet tight so that there are no creases"
    ],
    "answer": "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of FRACTURE BED?",
    "options": [
      "Place top sheet on bed with the wrong side uppermost",
      "Place fracture boards under the mattress to provide firm support and prevent sagging",
      "Place bed cover and counterpane (if necessary) loosely over the bed",
      "Pull and tuck sheet at the sides to prevent creases"
    ],
    "answer": "Pull and tuck sheet at the sides to prevent creases",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of FRACTURE BED?",
    "options": [
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Remove trolley and chair or heart table",
      "Slip the pillow cases on the pillows with an assistant",
      "Collect, arranges items on trolley and send to bedside"
    ],
    "answer": "Place bed mat or draw mackintosh at the mid portion of the bed",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of FRACTURE BED?",
    "options": [
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
      "Tuck in sheets loosely at the sides"
    ],
    "answer": "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of FRACTURE BED?",
    "options": [
      "Place bottom sheet evenly on the bed",
      "Fold over top bed clothing at the bottom end",
      "Place small mackintosh and dressing towel at where the fracture is located on the bed",
      "Fold over at the bottom and tuck in loosely"
    ],
    "answer": "Place small mackintosh and dressing towel at where the fracture is located on the bed",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of FRACTURE BED?",
    "options": [
      "Perform hand hygiene",
      "Place pillows on bed with open ends away from the entrance",
      "Arrange items in order of use on chairs or heart table",
      "Slip the pillow cases on the pillows with an assistant"
    ],
    "answer": "Slip the pillow cases on the pillows with an assistant",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of FRACTURE BED?",
    "options": [
      "Place pillows on bed with open ends away from the entrance",
      "Pull and tuck sheet at the sides to prevent creases",
      "Attach bed accessories if any",
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides"
    ],
    "answer": "Place pillows on bed with open ends away from the entrance",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of FRACTURE BED?",
    "options": [
      "Place a foot board or sand bags at the foot end of the bed",
      "Place top sheet on bed with the wrong side uppermost",
      "Place bed cover and counterpane (if necessary) loosely over the bed",
      "Pull sheet tight so that there are no creases"
    ],
    "answer": "Place top sheet on bed with the wrong side uppermost",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of FRACTURE BED?",
    "options": [
      "Place pillows on bed with open ends away from the entrance",
      "Place fracture boards under the mattress to provide firm support and prevent sagging",
      "Fold over at the bottom and tuck in loosely",
      "Collect, arranges items on trolley and send to bedside"
    ],
    "answer": "Fold over at the bottom and tuck in loosely",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of FRACTURE BED?",
    "options": [
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Remove trolley and chair or heart table",
      "Place small mackintosh and dressing towel at where the fracture is located on the bed",
      "Place bed cover and counterpane (if necessary) loosely over the bed"
    ],
    "answer": "Place bed cover and counterpane (if necessary) loosely over the bed",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of FRACTURE BED?",
    "options": [
      "Fold over top bed clothing at the bottom end",
      "Place bed cover and counterpane (if necessary) loosely over the bed",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
      "Tuck in sheets loosely at the sides"
    ],
    "answer": "Fold over top bed clothing at the bottom end",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of FRACTURE BED?",
    "options": [
      "Place bottom sheet evenly on the bed",
      "Place a foot board or sand bags at the foot end of the bed",
      "Arrange items in order of use on chairs or heart table",
      "Place top sheet on bed with the wrong side uppermost"
    ],
    "answer": "Place a foot board or sand bags at the foot end of the bed",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of FRACTURE BED?",
    "options": [
      "Perform hand hygiene",
      "Slip the pillow cases on the pillows with an assistant",
      "Tuck in sheets loosely at the sides",
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides"
    ],
    "answer": "Tuck in sheets loosely at the sides",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of FRACTURE BED?",
    "options": [
      "Fold over top bed clothing at the bottom end",
      "Pull and tuck sheet at the sides to prevent creases",
      "Tuck in sheets loosely at the sides",
      "Attach bed accessories if any"
    ],
    "answer": "Attach bed accessories if any",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 21 of FRACTURE BED?",
    "options": [
      "Remove trolley and chair or heart table",
      "Place fracture boards under the mattress to provide firm support and prevent sagging",
      "Fold over at the bottom and tuck in loosely",
      "Pull sheet tight so that there are no creases"
    ],
    "answer": "Remove trolley and chair or heart table",
    "explanation": "This checks recall of step 21 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 22 of FRACTURE BED?",
    "options": [
      "Place top sheet on bed with the wrong side uppermost",
      "Perform hand hygiene",
      "Slip the pillow cases on the pillows with an assistant",
      "Arrange items in order of use on chairs or heart table"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 22 in the procedure sequence."
  }
],
  },

  {
    id: "rgn-038",
    title: "DIVIDED BED",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "Divided bed is a special bed in which the top linen is separated into two parts with the aid of a bed cradle to create a visual window. It helps the nurse to visualize a particular part of the body that needs regular observation without disturbing the patient. This type of bed is ideal for the management of patient with burns and amputation; thus it takes the weight of the bedclothes off the site of injury.",
    purpose: [],
    indications: [
      "Patients with burns requiring regular observation",
      "Patients with amputations requiring regular observation",
      "Patients with wounds requiring frequent inspection",
      "Patients with an injured body part that should not be covered by the weight of bedclothes",
    ],
    equipment: [
  "A trolley with the following items:",
  "Two large cotton sheet (Bed linen)",
  "One water proof draw mackintosh or bed mat if necessary",
  "One draw sheet",
  "Pillow slips",
  "One top sheet",
  "Counterpane if necessary",
  "Two chairs or heart table",
  "Mattress",
  "One or two pillows",
  "Bed cradle",
  "Sandbags if necessary",
  "Extra mackintosh",
  "Dressing towel or bedlinen",
  "Extra top sheet"
],
    steps: [
  "Perform hand hygiene",
  "Collect, arranges items on trolley and send to bedside",
  "Arrange items in order of use on chairs or heart table",
  "Place bottom sheet evenly on the bed",
  "Pull sheet tight so that there are no creases",
  "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
  "Pull and tuck sheet at the sides to prevent creases",
  "Place bed mat or draw mackintosh at the mid portion of the bed",
  "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
  "Place extra mackintosh and dressing towel or bedlinen at the site where the injury is located",
  "Place the bed cradle at the mid portion of the bed",
  "Slip the pillow cases on the pillows with an assistant",
  "Place pillows on bed with open ends away from the entrance",
  "Place the first top sheet at the upper half of the cradle and fold it over",
  "Place the second top sheet at the lower half of the cradle and fold it over",
  "Place counterpane (if necessary) in the same fashion as the top sheets",
  "Ensure that the two sections of the top bed clothings overlap each other",
  "Create an opening to aid observation of the body part",
  "Tuck in sides under the mattress loosely",
  "Remove trolley and chair or heart table",
  "Perform hand hygiene"
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
    quiz: [
  {
    "question": "Which action is listed as step 1 of DIVIDED BED?",
    "options": [
      "Perform hand hygiene",
      "Pull sheet tight so that there are no creases",
      "Place counterpane (if necessary) in the same fashion as the top sheets",
      "Place bed mat or draw mackintosh at the mid portion of the bed"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of DIVIDED BED?",
    "options": [
      "Place the second top sheet at the lower half of the cradle and fold it over",
      "Collect, arranges items on trolley and send to bedside",
      "Slip the pillow cases on the pillows with an assistant",
      "Place bottom sheet evenly on the bed"
    ],
    "answer": "Collect, arranges items on trolley and send to bedside",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of DIVIDED BED?",
    "options": [
      "Place the bed cradle at the mid portion of the bed",
      "Collect, arranges items on trolley and send to bedside",
      "Arrange items in order of use on chairs or heart table",
      "Tuck in sides under the mattress loosely"
    ],
    "answer": "Arrange items in order of use on chairs or heart table",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of DIVIDED BED?",
    "options": [
      "Pull and tuck sheet at the sides to prevent creases",
      "Create an opening to aid observation of the body part",
      "Place extra mackintosh and dressing towel or bedlinen at the site where the injury is located",
      "Place bottom sheet evenly on the bed"
    ],
    "answer": "Place bottom sheet evenly on the bed",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of DIVIDED BED?",
    "options": [
      "Pull sheet tight so that there are no creases",
      "Place the first top sheet at the upper half of the cradle and fold it over",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
      "Ensure that the two sections of the top bed clothings overlap each other"
    ],
    "answer": "Pull sheet tight so that there are no creases",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of DIVIDED BED?",
    "options": [
      "Place bottom sheet evenly on the bed",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
      "Perform hand hygiene",
      "Place pillows on bed with open ends away from the entrance"
    ],
    "answer": "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of DIVIDED BED?",
    "options": [
      "Remove trolley and chair or heart table",
      "Slip the pillow cases on the pillows with an assistant",
      "Pull and tuck sheet at the sides to prevent creases",
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides"
    ],
    "answer": "Pull and tuck sheet at the sides to prevent creases",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of DIVIDED BED?",
    "options": [
      "Place counterpane (if necessary) in the same fashion as the top sheets",
      "Pull and tuck sheet at the sides to prevent creases",
      "Tuck in sides under the mattress loosely",
      "Place bed mat or draw mackintosh at the mid portion of the bed"
    ],
    "answer": "Place bed mat or draw mackintosh at the mid portion of the bed",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of DIVIDED BED?",
    "options": [
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
      "Arrange items in order of use on chairs or heart table",
      "Place the second top sheet at the lower half of the cradle and fold it over",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners"
    ],
    "answer": "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of DIVIDED BED?",
    "options": [
      "Place the first top sheet at the upper half of the cradle and fold it over",
      "Place extra mackintosh and dressing towel or bedlinen at the site where the injury is located",
      "Place the bed cradle at the mid portion of the bed",
      "Collect, arranges items on trolley and send to bedside"
    ],
    "answer": "Place extra mackintosh and dressing towel or bedlinen at the site where the injury is located",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of DIVIDED BED?",
    "options": [
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
      "Perform hand hygiene",
      "Place the bed cradle at the mid portion of the bed",
      "Create an opening to aid observation of the body part"
    ],
    "answer": "Place the bed cradle at the mid portion of the bed",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of DIVIDED BED?",
    "options": [
      "Pull sheet tight so that there are no creases",
      "Ensure that the two sections of the top bed clothings overlap each other",
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Slip the pillow cases on the pillows with an assistant"
    ],
    "answer": "Slip the pillow cases on the pillows with an assistant",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of DIVIDED BED?",
    "options": [
      "Place pillows on bed with open ends away from the entrance",
      "Slip the pillow cases on the pillows with an assistant",
      "Place bottom sheet evenly on the bed",
      "Place counterpane (if necessary) in the same fashion as the top sheets"
    ],
    "answer": "Place pillows on bed with open ends away from the entrance",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of DIVIDED BED?",
    "options": [
      "Arrange items in order of use on chairs or heart table",
      "Place the first top sheet at the upper half of the cradle and fold it over",
      "Remove trolley and chair or heart table",
      "Place the bed cradle at the mid portion of the bed"
    ],
    "answer": "Place the first top sheet at the upper half of the cradle and fold it over",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of DIVIDED BED?",
    "options": [
      "Tuck in sides under the mattress loosely",
      "Place extra mackintosh and dressing towel or bedlinen at the site where the injury is located",
      "Place the second top sheet at the lower half of the cradle and fold it over",
      "Pull and tuck sheet at the sides to prevent creases"
    ],
    "answer": "Place the second top sheet at the lower half of the cradle and fold it over",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of DIVIDED BED?",
    "options": [
      "Place the first top sheet at the upper half of the cradle and fold it over",
      "Tuck the bottom sheet evenly under the mattress at the top and bottom using mitered or enveloped corners",
      "Create an opening to aid observation of the body part",
      "Place counterpane (if necessary) in the same fashion as the top sheets"
    ],
    "answer": "Place counterpane (if necessary) in the same fashion as the top sheets",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of DIVIDED BED?",
    "options": [
      "Ensure that the two sections of the top bed clothings overlap each other",
      "Collect, arranges items on trolley and send to bedside",
      "Place pillows on bed with open ends away from the entrance",
      "Pull sheet tight so that there are no creases"
    ],
    "answer": "Ensure that the two sections of the top bed clothings overlap each other",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of DIVIDED BED?",
    "options": [
      "Slip the pillow cases on the pillows with an assistant",
      "Create an opening to aid observation of the body part",
      "Cover mackintosh or bed mat with draw sheet and tuck in at the sides",
      "Perform hand hygiene"
    ],
    "answer": "Create an opening to aid observation of the body part",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of DIVIDED BED?",
    "options": [
      "Place bed mat or draw mackintosh at the mid portion of the bed",
      "Remove trolley and chair or heart table",
      "Tuck in sides under the mattress loosely",
      "Place counterpane (if necessary) in the same fashion as the top sheets"
    ],
    "answer": "Tuck in sides under the mattress loosely",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of DIVIDED BED?",
    "options": [
      "Place bottom sheet evenly on the bed",
      "Place the second top sheet at the lower half of the cradle and fold it over",
      "Pull and tuck sheet at the sides to prevent creases",
      "Remove trolley and chair or heart table"
    ],
    "answer": "Remove trolley and chair or heart table",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 21 of DIVIDED BED?",
    "options": [
      "Perform hand hygiene",
      "Slip the pillow cases on the pillows with an assistant",
      "Place bottom sheet evenly on the bed",
      "Place the second top sheet at the lower half of the cradle and fold it over"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 21 in the procedure sequence."
  }
],
  },
];
