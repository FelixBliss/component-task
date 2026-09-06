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

const rgn_048Quiz: ProcedureQuizQuestion[] = [
  q(
    "Who should administer intrathecal medication?",
    [
      "Only an appropriately trained and authorized practitioner under institutional policy",
      "Any student who has watched a demonstration",
      "Any nurse without checking professional authorization",
      "A relative who has assisted with injections",
    ],
    "Only an appropriately trained and authorized practitioner under institutional policy",
    "Intrathecal medication is high risk and must be limited to practitioners with the required training, authorization and supervision."
  ),
  q(
    "Which medication-safety check is especially important before intrathecal administration?",
    [
      "Confirming the medication is specifically intended for the intrathecal route",
      "Checking only the colour of the syringe",
      "Using any available injectable medication",
      "Assuming all spinal medications can be given intravenously",
    ],
    "Confirming the medication is specifically intended for the intrathecal route",
    "Wrong-route administration into the spinal canal can cause catastrophic harm; route verification is essential."
  ),
  q(
    "What should be completed before the procedure begins?",
    [
      "Patient identification, prescription and dose verification, allergy checks, consent and baseline assessment",
      "Only opening the sterile pack",
      "Giving a sedative without an order",
      "Positioning the patient before explaining the procedure",
    ],
    "Patient identification, prescription and dose verification, allergy checks, consent and baseline assessment",
    "A complete pre-procedure check supports informed consent and prevents wrong-patient or wrong-medication errors."
  ),
  q(
    "Which technique is required for intrathecal medication preparation and assistance?",
    [
      "Strict aseptic non-touch technique with sterile equipment",
      "Routine clean technique using shared equipment",
      "No hand hygiene if sterile gloves are worn",
      "Touching sterile connections to test them",
    ],
    "Strict aseptic non-touch technique with sterile equipment",
    "The medication enters a normally protected space, so contamination can cause severe infection."
  ),
  q(
    "What is the nurse's appropriate role when not authorized to administer the medication?",
    [
      "Prepare and assist within competence, observe the patient and report findings to the authorized practitioner",
      "Administer it independently to save time",
      "Leave the patient alone while the practitioner works",
      "Change the dose if the patient reports pain",
    ],
    "Prepare and assist within competence, observe the patient and report findings to the authorized practitioner",
    "The nurse must work within scope and support safe care without presenting this high-risk procedure as an ordinary independent task."
  ),
  q(
    "Why should emergency equipment and assistance be available?",
    [
      "Rapid neurological or cardiorespiratory deterioration can occur and requires immediate response",
      "The equipment is needed only to store sterile packs",
      "It replaces patient monitoring",
      "It is needed to increase the dose",
    ],
    "Rapid neurological or cardiorespiratory deterioration can occur and requires immediate response",
    "High-risk neuraxial medication requires readiness for serious adverse reactions and complications."
  ),
  q(
    "What should be monitored during and after intrathecal medication?",
    [
      "Consciousness, breathing, circulation, pain or neurological status and other prescribed observations",
      "Only the patient's meal intake",
      "Only the dressing colour",
      "Nothing unless the patient calls",
    ],
    "Consciousness, breathing, circulation, pain or neurological status and other prescribed observations",
    "Continuous clinical observation helps detect respiratory depression, hypotension, neurological change or reaction."
  ),
  q(
    "What should happen if the patient develops breathing difficulty or sudden weakness?",
    [
      "Call for urgent help, support airway and breathing as trained, stop further administration and escalate immediately",
      "Reassure the patient and leave the room",
      "Give another dose to reverse it",
      "Wait until routine observations are due",
    ],
    "Call for urgent help, support airway and breathing as trained, stop further administration and escalate immediately",
    "Acute deterioration after intrathecal medication is an emergency requiring immediate escalation."
  ),
  q(
    "Which action helps prevent wrong-route medication errors?",
    [
      "Use clear route-specific labeling and independent checks required by institutional policy",
      "Place all syringes together without labels",
      "Prepare intrathecal and IV syringes on the same unlabeled tray",
      "Rely on memory instead of the prescription",
    ],
    "Use clear route-specific labeling and independent checks required by institutional policy",
    "Separation, labeling and independent verification reduce wrong-route and wrong-drug errors."
  ),
  q(
    "What should be documented after intrathecal medication administration?",
    [
      "Patient, medication, dose, route, time, authorized practitioner, observations, response and any escalation",
      "Only that a trolley was used",
      "Only the patient's room number",
      "Nothing if the patient appears well",
    ],
    "Patient, medication, dose, route, time, authorized practitioner, observations, response and any escalation",
    "Detailed documentation supports traceability, continuity, legal accountability and review of high-risk care."
  ),
];

const rgn_049Quiz: ProcedureQuizQuestion[] = [
  q(
    "What should be assessed before applying topical medication?",
    [
      "The prescribed site, skin or mucosal condition, allergies, previous reaction and integrity",
      "Only the colour of the medication",
      "Only the patient's visiting time",
      "Nothing if the medication is in a tube",
    ],
    "The prescribed site, skin or mucosal condition, allergies, previous reaction and integrity",
    "Assessment identifies infection, broken skin, allergy or another reason to seek advice before application."
  ),
  q(
    "How should the patient be identified before topical medication is applied?",
    [
      "Use approved identifiers and compare the patient and medication with the prescription",
      "Use the bed number only",
      "Ask another patient to identify the person",
      "Identify the patient by appearance",
    ],
    "Use approved identifiers and compare the patient and medication with the prescription",
    "Correct identification prevents application of the wrong medication or application to the wrong person."
  ),
  q(
    "Which practice helps prevent contamination of topical medication?",
    [
      "Perform hand hygiene, wear gloves and use a clean applicator or single-use portion",
      "Touch the medication with bare fingers",
      "Use the same applicator for several patients",
      "Place the container on a contaminated surface",
    ],
    "Perform hand hygiene, wear gloves and use a clean applicator or single-use portion",
    "Clean technique and appropriate PPE reduce cross-contamination and staff exposure."
  ),
  q(
    "What should the nurse do before exposing the application site?",
    [
      "Explain the procedure, obtain cooperation and provide privacy and draping",
      "Remove all clothing without explanation",
      "Ask visitors to watch the procedure",
      "Apply medication over clothing",
    ],
    "Explain the procedure, obtain cooperation and provide privacy and draping",
    "Explanation and privacy support dignity and informed participation."
  ),
  q(
    "How much topical medication should be applied?",
    [
      "The prescribed amount spread as directed over the specified site",
      "As much as will cover the entire limb",
      "A double dose to improve absorption",
      "An amount chosen by the patient without checking the order",
    ],
    "The prescribed amount spread as directed over the specified site",
    "The amount and method depend on the medication and prescription; excess may cause harm or systemic absorption."
  ),
  q(
    "What should be done if the site is severely inflamed, broken or infected?",
    [
      "Pause and seek appropriate clinical direction before applying the medication",
      "Apply extra medication to the damaged area",
      "Cover it without telling anyone",
      "Use a different medication from the trolley",
    ],
    "Pause and seek appropriate clinical direction before applying the medication",
    "Unexpected site findings may change the treatment plan and require review."
  ),
  q(
    "What should the nurse teach the patient after application?",
    [
      "How to protect the site, avoid touching or sharing the medication and report irritation or worsening symptoms",
      "To apply extra medication whenever the area itches",
      "To cover the medication with any household product",
      "To stop all prescribed treatment",
    ],
    "How to protect the site, avoid touching or sharing the medication and report irritation or worsening symptoms",
    "Patient education reduces misuse, transfer to others and delayed recognition of adverse reactions."
  ),
  q(
    "What should be done with topical patches?",
    [
      "Apply to the prescribed site, record the time and remove the previous patch according to the order",
      "Apply several patches to the same site without checking",
      "Cut every patch into pieces",
      "Leave the old patch in place indefinitely",
    ],
    "Apply to the prescribed site, record the time and remove the previous patch according to the order",
    "Patch safety requires checking the previous dose, site, timing and prescribed application instructions."
  ),
  q(
    "What should be observed after topical medication is applied?",
    [
      "Local irritation, rash, pain, worsening condition and any systemic reaction",
      "Only whether the tube is empty",
      "Only the patient's meal",
      "Nothing because topical medication cannot cause reactions",
    ],
    "Local irritation, rash, pain, worsening condition and any systemic reaction",
    "Topical medicines can cause local or systemic effects that may require stopping and escalation."
  ),
  q(
    "What should be documented?",
    [
      "Medication, amount, site, time, skin assessment, patient response and any teaching or escalation",
      "Only that gloves were worn",
      "Only the patient's bed number",
      "Nothing unless a reaction occurs",
    ],
    "Medication, amount, site, time, skin assessment, patient response and any teaching or escalation",
    "Complete documentation supports treatment continuity and evaluation of the site."
  ),
];

const rgn_050Quiz: ProcedureQuizQuestion[] = [
  q(
    "What must be confirmed before instilling eye drops?",
    [
      "Correct patient, medication, dose, route, time and correct eye",
      "Only the patient's bed number",
      "Only that the bottle is nearly full",
      "The colour of the patient's clothing",
    ],
    "Correct patient, medication, dose, route, time and correct eye",
    "Eye-specific verification prevents treatment of the wrong eye and medication errors."
  ),
  q(
    "What position is usually suitable for eye-drop instillation?",
    [
      "Sitting or lying with the head supported and slightly extended",
      "Prone with the face against the pillow",
      "Standing unsupported",
      "With the affected eye covered by the hand",
    ],
    "Sitting or lying with the head supported and slightly extended",
    "A supported position allows the patient to remain still and helps the drop enter the lower conjunctival sac."
  ),
  q(
    "Where should an eye drop be placed?",
    [
      "Into the lower conjunctival sac without touching the eye or eyelashes",
      "Directly onto the cornea from close contact",
      "On the eyelid skin only",
      "Into the inner canthus while the eye is closed",
    ],
    "Into the lower conjunctival sac without touching the eye or eyelashes",
    "The lower conjunctival sac receives the drop while avoiding trauma and contamination."
  ),
  q(
    "Why must the dropper not touch the eye or eyelashes?",
    [
      "To prevent contamination and accidental injury",
      "To make the drop colder",
      "To increase the dose",
      "To prevent the patient from blinking forever",
    ],
    "To prevent contamination and accidental injury",
    "Contact can contaminate the bottle and injure the eye."
  ),
  q(
    "What may help reduce systemic absorption of some ophthalmic medicines?",
    [
      "Gentle punctal occlusion after instillation when clinically appropriate",
      "Rubbing the eye vigorously",
      "Keeping both eyes open for ten minutes",
      "Adding extra drops",
    ],
    "Gentle punctal occlusion after instillation when clinically appropriate",
    "Punctal occlusion can reduce drainage into the nasolacrimal system; it should be used when appropriate for the medicine and patient."
  ),
  q(
    "How should multiple ophthalmic medications generally be administered?",
    [
      "Allow the prescribed interval between different drops and apply ointment after drops when ordered",
      "Mix all medicines in one dropper",
      "Apply all products at the same moment",
      "Use one patient's bottle for another patient",
    ],
    "Allow the prescribed interval between different drops and apply ointment after drops when ordered",
    "Spacing medicines helps prevent washout and preserves the intended effect."
  ),
  q(
    "What should the nurse do if there is discharge before instillation?",
    [
      "Clean gently with the appropriate sterile material from inner to outer area and use a clean part for each wipe",
      "Rub the discharge into the eye",
      "Use the same swab for both eyes",
      "Use household tissue inside the eye",
    ],
    "Clean gently with the appropriate sterile material from inner to outer area and use a clean part for each wipe",
    "Correct cleaning reduces contamination and avoids transferring organisms between eyes."
  ),
  q(
    "What should the patient be asked to do after the drop is instilled?",
    [
      "Close the eye gently and avoid rubbing; report pain, worsening vision or severe irritation",
      "Rub the eye until the medicine disappears",
      "Keep the eye forced open",
      "Immediately wash the eye with tap water",
    ],
    "Close the eye gently and avoid rubbing; report pain, worsening vision or severe irritation",
    "Gentle closure supports contact time while symptoms may indicate an adverse reaction or complication."
  ),
  q(
    "What should be observed after eye-drop administration?",
    [
      "Pain, redness, swelling, vision change, discharge and the patient's tolerance",
      "Only the remaining bottle volume",
      "Only the patient's pulse next week",
      "Nothing if the drop entered the eye",
    ],
    "Pain, redness, swelling, vision change, discharge and the patient's tolerance",
    "Observation identifies irritation, allergy, infection or deterioration requiring review."
  ),
  q(
    "What belongs in the documentation?",
    [
      "Medication, dose, time, eye treated, technique, response and any abnormal finding",
      "Only that a tray was used",
      "Only the patient's room number",
      "Nothing unless the patient refuses",
    ],
    "Medication, dose, time, eye treated, technique, response and any abnormal finding",
    "Recording the eye treated is essential for safe continuation of ophthalmic therapy."
  ),
];

const rgn_051Quiz: ProcedureQuizQuestion[] = [
  q(
    "What should be assessed before rectal medication?",
    [
      "The prescription, patient identity, consent, rectal condition, pain, bleeding and contraindications",
      "Only whether the suppository is cold",
      "Only the patient's meal",
      "Nothing if the medicine is prescribed",
    ],
    "The prescription, patient identity, consent, rectal condition, pain, bleeding and contraindications",
    "Assessment may identify bleeding, severe pain, recent rectal surgery or another reason to seek advice."
  ),
  q(
    "Which position is commonly used for rectal medication?",
    [
      "Left lateral or left Sims position with the upper leg flexed",
      "Standing unsupported",
      "Prone with both legs extended and uncovered",
      "Sitting on the bedside locker",
    ],
    "Left lateral or left Sims position with the upper leg flexed",
    "This position supports access, comfort and privacy while reducing unnecessary exposure."
  ),
  q(
    "Why is privacy especially important for rectal medication?",
    [
      "The procedure is intimate and privacy protects dignity and cooperation",
      "Privacy makes hand hygiene unnecessary",
      "The patient does not need an explanation",
      "Visitors should observe the technique",
    ],
    "The procedure is intimate and privacy protects dignity and cooperation",
    "Respectful communication, draping and privacy are essential for intimate care."
  ),
  q(
    "What should be used to facilitate gentle insertion?",
    [
      "A suitable water-soluble lubricant and a gloved finger",
      "Dry forceful insertion without gloves",
      "Household oil without checking compatibility",
      "A sharp instrument",
    ],
    "A suitable water-soluble lubricant and a gloved finger",
    "Lubrication and a gloved finger reduce friction and trauma."
  ),
  q(
    "How should a suppository be inserted?",
    [
      "Gently through the anal sphincter into the rectum without force",
      "Forcefully as far as possible",
      "Only into the buttock tissue",
      "Without explaining the movement",
    ],
    "Gently through the anal sphincter into the rectum without force",
    "Gentle insertion reduces mucosal injury, pain and bleeding."
  ),
  q(
    "What should the nurse do if severe pain or fresh bleeding occurs?",
    [
      "Stop, assess the patient and report promptly according to the clinical situation",
      "Continue with greater force",
      "Give a second suppository",
      "Ignore the finding",
    ],
    "Stop, assess the patient and report promptly according to the clinical situation",
    "Severe pain or bleeding may indicate trauma or a contraindication requiring review."
  ),
  q(
    "What should the patient be advised after insertion?",
    [
      "Remain in the recommended position for the prescribed time and report discomfort or urgency",
      "Stand and walk immediately without assistance",
      "Remove the suppository",
      "Rub the area vigorously",
    ],
    "Remain in the recommended position for the prescribed time and report discomfort or urgency",
    "Position and appropriate retention time support medication effect and patient safety."
  ),
  q(
    "Which infection-prevention action is required?",
    [
      "Hand hygiene, gloves, clean equipment and safe disposal of contaminated materials",
      "Reuse gloves if they look clean",
      "Use the same lubricant for multiple patients",
      "Skip hand hygiene after removing gloves",
    ],
    "Hand hygiene, gloves, clean equipment and safe disposal of contaminated materials",
    "Intimate care involves contact with body fluids and requires standard precautions."
  ),
  q(
    "When should the patient be reassessed?",
    [
      "At the clinically appropriate time for therapeutic effect and adverse symptoms",
      "Only at the next admission",
      "Never after the medication is inserted",
      "Only if a visitor asks",
    ],
    "At the clinically appropriate time for therapeutic effect and adverse symptoms",
    "Reassessment determines response and identifies complications such as bleeding or severe discomfort."
  ),
  q(
    "What should be documented?",
    [
      "Medication, dose, route, time, patient tolerance, effect, rectal findings and any escalation",
      "Only that gloves were worn",
      "Only the room number",
      "Nothing if the patient was cooperative",
    ],
    "Medication, dose, route, time, patient tolerance, effect, rectal findings and any escalation",
    "Complete documentation supports continuity and safe evaluation of an intimate medication procedure."
  ),
];

const rgn_052Quiz: ProcedureQuizQuestion[] = [
  q(
    "What must be confirmed before ear-drop instillation?",
    [
      "Correct patient, medication, dose, time and affected ear",
      "Only the patient's bed number",
      "Only that the bottle is full",
      "The patient's preferred meal",
    ],
    "Correct patient, medication, dose, time and affected ear",
    "Confirming the ear is essential because treatment of the wrong ear can cause harm or delay care."
  ),
  q(
    "Why should ear drops be brought to room temperature when appropriate?",
    [
      "Cold drops can cause discomfort, dizziness or nausea",
      "Room temperature sterilizes the medicine",
      "It increases the dose",
      "It removes the need to check the label",
    ],
    "Cold drops can cause discomfort, dizziness or nausea",
    "Temperature-sensitive vestibular responses can make cold ear drops poorly tolerated."
  ),
  q(
    "How should the auricle be moved for an adult?",
    [
      "Upward and backward, with the head supported",
      "Downward and forward",
      "Straight downward only",
      "Pulled forcefully toward the shoulder",
    ],
    "Upward and backward, with the head supported",
    "This helps straighten the adult ear canal; manipulation differs for children."
  ),
  q(
    "How should the auricle be moved for a young child?",
    [
      "Gently downward and backward according to age and local guidance",
      "Forcefully upward and backward",
      "Pulled horizontally until painful",
      "Not touched even when positioning is required",
    ],
    "Gently downward and backward according to age and local guidance",
    "The child's ear canal orientation differs from an adult's, so gentle age-appropriate manipulation is used."
  ),
  q(
    "What position is usually used for ear drops?",
    [
      "The patient lies or sits with the affected ear uppermost",
      "The patient lies with the affected ear against the pillow",
      "The patient stands with the head shaking",
      "The patient lies prone with both ears covered",
    ],
    "The patient lies or sits with the affected ear uppermost",
    "The position allows the drops to enter and remain in the canal."
  ),
  q(
    "How should the dropper be handled?",
    [
      "Keep it from touching the ear, skin or other surfaces",
      "Rest it on the ear canal",
      "Touch it to the pinna to steady it",
      "Share it between patients",
    ],
    "Keep it from touching the ear, skin or other surfaces",
    "Avoiding contact prevents contamination and injury."
  ),
  q(
    "What should the nurse do if the patient develops dizziness or nausea?",
    [
      "Stop, support the patient safely, assess and report the symptoms",
      "Continue quickly to finish the dose",
      "Ask the patient to walk around",
      "Give another dose",
    ],
    "Stop, support the patient safely, assess and report the symptoms",
    "Dizziness or nausea may follow ear manipulation or indicate a reaction requiring assessment."
  ),
  q(
    "What should be done with visible external discharge?",
    [
      "Clean only the external area gently with appropriate sterile material without probing deeply",
      "Insert a cotton bud deep into the canal",
      "Use the same swab in both ears",
      "Scrape the canal until it is dry",
    ],
    "Clean only the external area gently with appropriate sterile material without probing deeply",
    "Deep probing can injure the canal or tympanic membrane and transfer organisms."
  ),
  q(
    "How long may the patient need to remain with the ear uppermost?",
    [
      "For the period directed by the medication or local procedure, commonly several minutes",
      "Only until the dropper is put away",
      "Until the next day for every medicine",
      "Never; the patient should stand immediately",
    ],
    "For the period directed by the medication or local procedure, commonly several minutes",
    "Remaining in position supports contact time and prevents immediate drainage."
  ),
  q(
    "What should be documented?",
    [
      "Medication, dose, time, ear treated, patient position, tolerance, response and abnormalities",
      "Only the bottle size",
      "Only that the patient was in bed",
      "Nothing unless the patient vomits",
    ],
    "Medication, dose, time, ear treated, patient position, tolerance, response and abnormalities",
    "Recording the ear treated and response supports safe ongoing therapy."
  ),
];

const rgn_053Quiz: ProcedureQuizQuestion[] = [
  q(
    "What should be done before administering vaginal medication?",
    [
      "Verify the patient and prescription, explain the procedure, obtain consent and provide privacy",
      "Expose the patient without explanation",
      "Ask visitors to remain at the bedside",
      "Skip assessment because the medication is local",
    ],
    "Verify the patient and prescription, explain the procedure, obtain consent and provide privacy",
    "Vaginal medication is intimate care and requires identification, consent, explanation and dignity."
  ),
  q(
    "Which position commonly permits administration of vaginal medication?",
    [
      "Dorsal recumbent or lithotomy with appropriate support and draping",
      "Standing unsupported",
      "Prone with the perineum inaccessible",
      "Sitting on the floor",
    ],
    "Dorsal recumbent or lithotomy with appropriate support and draping",
    "The selected position should provide access while maintaining comfort, privacy and safety."
  ),
  q(
    "Why may the patient be encouraged to void before the procedure?",
    [
      "It improves comfort and reduces the need to interrupt the procedure",
      "It sterilizes the medication",
      "It changes the prescribed dose",
      "It is required for every medication reaction",
    ],
    "It improves comfort and reduces the need to interrupt the procedure",
    "Voiding beforehand can make the position and post-procedure rest more comfortable."
  ),
  q(
    "Which infection-prevention practice is required?",
    [
      "Hand hygiene, gloves, clean or sterile equipment as indicated and non-touch technique",
      "Reuse of gloves between patients",
      "Touching the applicator tip to the bed",
      "Skipping hand hygiene after glove removal",
    ],
    "Hand hygiene, gloves, clean or sterile equipment as indicated and non-touch technique",
    "Vaginal administration requires standard precautions and protection from contamination."
  ),
  q(
    "When is lubricant used?",
    [
      "When indicated by the product or procedure, using a compatible appropriate lubricant",
      "Always in a quantity that fills the vagina",
      "Only after insertion causes injury",
      "Never, even when an applicator requires it",
    ],
    "When indicated by the product or procedure, using a compatible appropriate lubricant",
    "Appropriate lubrication reduces friction, but compatibility and product instructions must be followed."
  ),
  q(
    "How should an applicator be inserted?",
    [
      "Gently along the posterior vaginal wall to the depth directed by the product instructions",
      "Forcefully toward the cervix",
      "Without explaining or observing comfort",
      "Into the urethra",
    ],
    "Gently along the posterior vaginal wall to the depth directed by the product instructions",
    "Gentle, correctly directed insertion reduces trauma and supports delivery to the intended site."
  ),
  q(
    "What should the nurse do if the patient reports severe pain or bleeding?",
    [
      "Stop, assess, provide support and report promptly",
      "Continue with greater pressure",
      "Apply a second dose",
      "Ignore the symptom",
    ],
    "Stop, assess, provide support and report promptly",
    "Severe pain or bleeding may indicate trauma or another condition requiring review."
  ),
  q(
    "What post-procedure instruction is commonly appropriate?",
    [
      "Remain lying as directed, use a sanitary pad if advised and report worsening symptoms",
      "Remove the medicine immediately",
      "Douche without instruction",
      "Resume strenuous activity at once",
    ],
    "Remain lying as directed, use a sanitary pad if advised and report worsening symptoms",
    "Rest and clear instructions support retention, comfort and recognition of complications."
  ),
  q(
    "What should happen to a single-use applicator?",
    [
      "Discard it safely according to infection-prevention and waste policy",
      "Rinse it and give it to another patient",
      "Leave it on the bedside table",
      "Store it with clean equipment",
    ],
    "Discard it safely according to infection-prevention and waste policy",
    "Single-use equipment must not be reused and should be disposed of safely."
  ),
  q(
    "What should be documented?",
    [
      "Medication, dose, route, time, patient tolerance, site findings, teaching and any reaction",
      "Only that privacy was provided",
      "Only the patient's room number",
      "Nothing if the applicator was used",
    ],
    "Medication, dose, route, time, patient tolerance, site findings, teaching and any reaction",
    "Complete documentation supports continuity and follow-up of intimate medication care."
  ),
];

const rgn_054Quiz: ProcedureQuizQuestion[] = [
  q(
    "What should be verified before collecting blood?",
    [
      "The laboratory request, patient identifiers, tests required, timing and any preparation instructions",
      "Only the colour of the collection tube",
      "Only the patient's bed number",
      "Nothing if the test is routine",
    ],
    "The laboratory request, patient identifiers, tests required, timing and any preparation instructions",
    "Verification prevents wrong-patient collection and unsuitable or incomplete specimens."
  ),
  q(
    "Which site is generally preferred for routine venipuncture after assessment?",
    [
      "A suitable vein in the antecubital area or forearm, avoiding unsafe or compromised sites",
      "An area with bruising or infection",
      "The arm with an active infusion without checking policy",
      "Any site selected without inspecting it",
    ],
    "A suitable vein in the antecubital area or forearm, avoiding unsafe or compromised sites",
    "Site selection depends on vein condition, patient history, treatment and local policy."
  ),
  q(
    "What is the purpose of the tourniquet?",
    [
      "To temporarily distend veins so an appropriate vein can be located",
      "To sterilize the skin",
      "To stop all circulation during the procedure",
      "To replace skin antisepsis",
    ],
    "To temporarily distend veins so an appropriate vein can be located",
    "The tourniquet helps identify a vein but should not be left on longer than necessary."
  ),
  q(
    "What should happen after applying skin antiseptic?",
    [
      "Allow the site to dry completely and avoid touching it before puncture",
      "Blow on it to dry it",
      "Wipe it with an unsterile towel",
      "Insert the needle while it is still wet",
    ],
    "Allow the site to dry completely and avoid touching it before puncture",
    "Drying improves antiseptic effect and reduces stinging or specimen contamination."
  ),
  q(
    "Why does the order of draw matter?",
    [
      "It reduces carryover of additives between tubes and protects test accuracy",
      "It makes blood flow faster",
      "It replaces patient identification",
      "It determines which arm must be used",
    ],
    "It reduces carryover of additives between tubes and protects test accuracy",
    "Following the laboratory-approved order helps prevent additive contamination."
  ),
  q(
    "When should the tourniquet be released?",
    [
      "As soon as appropriate after blood flow is established and before needle removal",
      "Only after the patient leaves",
      "Before the vein is located",
      "Never during the procedure",
    ],
    "As soon as appropriate after blood flow is established and before needle removal",
    "Early release limits venous stasis and helps reduce bleeding when the needle is withdrawn."
  ),
  q(
    "What is the safest action after withdrawing the needle?",
    [
      "Apply pressure, activate the safety device and discard the needle immediately into a sharps container",
      "Recap the needle with both hands",
      "Leave it on the tray",
      "Carry it to another room",
    ],
    "Apply pressure, activate the safety device and discard the needle immediately into a sharps container",
    "Immediate sharps disposal and pressure reduce needlestick injuries and bleeding."
  ),
  q(
    "When should specimen tubes be labeled?",
    [
      "At the bedside immediately after collection, using the correct patient identifiers",
      "At the end of the shift from memory",
      "Before seeing the patient without checking identity",
      "Only after the laboratory calls",
    ],
    "At the bedside immediately after collection, using the correct patient identifiers",
    "Bedside labeling prevents specimen mix-ups and supports traceability."
  ),
  q(
    "What should be done if the patient becomes faint during venipuncture?",
    [
      "Stop safely, remove the needle, protect the patient, assess and seek assistance",
      "Continue until all tubes are full",
      "Ask the patient to stand",
      "Leave the patient alone",
    ],
    "Stop safely, remove the needle, protect the patient, assess and seek assistance",
    "Patient safety takes priority over completing the specimen collection."
  ),
  q(
    "What should be documented and communicated?",
    [
      "Tests collected, time, site, patient tolerance, complications, labeling and transport",
      "Only that a needle was used",
      "Only the number of tubes",
      "Nothing if transport was prompt",
    ],
    "Tests collected, time, site, patient tolerance, complications, labeling and transport",
    "Documentation and communication support specimen integrity, follow-up and management of complications."
  ),
];

const rgn_055Quiz: ProcedureQuizQuestion[] = [
  q(
    "What should be checked before collecting a single voided specimen?",
    [
      "The laboratory request, patient identity, required specimen type and collection instructions",
      "Only the colour of the container",
      "Only the patient's bed number",
      "Nothing if the patient can void",
    ],
    "The laboratory request, patient identity, required specimen type and collection instructions",
    "The test and collection method determine the container, timing and patient instructions."
  ),
  q(
    "What should the patient be told for a clean-catch or midstream specimen?",
    [
      "Clean as instructed, begin voiding, collect the midstream urine without touching the container inside and finish voiding",
      "Collect only the first drops for every test",
      "Touch the inside of the lid to steady it",
      "Pour urine from the floor into the container",
    ],
    "Clean as instructed, begin voiding, collect the midstream urine without touching the container inside and finish voiding",
    "The clean-catch technique reduces contamination from skin and external organisms."
  ),
  q(
    "How should a sterile specimen container be handled?",
    [
      "Keep it closed until use and do not touch the inside of the container or lid",
      "Leave it open on the bedside table",
      "Rinse it with tap water",
      "Touch the inside with gloved fingers",
    ],
    "Keep it closed until use and do not touch the inside of the container or lid",
    "Protecting the sterile interior reduces contamination and inaccurate results."
  ),
  q(
    "How much urine should be collected?",
    [
      "The volume specified by the laboratory request, usually enough to fill the required portion of the container",
      "As much as possible for every test",
      "Only one drop regardless of the request",
      "A volume selected by the visitor",
    ],
    "The volume specified by the laboratory request, usually enough to fill the required portion of the container",
    "Different tests require different volumes; follow the laboratory instruction."
  ),
  q(
    "What should be done if the patient cannot void into the container directly?",
    [
      "Use a clean, suitable bedpan or urinal and transfer without contaminating the specimen",
      "Collect urine from the floor",
      "Use an unwashed household cup",
      "Cancel the request without reporting",
    ],
    "Use a clean, suitable bedpan or urinal and transfer without contaminating the specimen",
    "A clean intermediate receptacle can support collection when the patient cannot use the container directly."
  ),
  q(
    "When should the specimen be labeled?",
    [
      "Immediately at the bedside after collection using approved patient identifiers and collection details",
      "At the end of the shift from memory",
      "Before identifying the patient",
      "Only when the laboratory receives it",
    ],
    "Immediately at the bedside after collection using approved patient identifiers and collection details",
    "Bedside labeling protects specimen identity and traceability."
  ),
  q(
    "What should be done with the specimen after collection?",
    [
      "Secure the lid, complete the request form and send it promptly according to laboratory policy",
      "Leave it open on the trolley",
      "Store it in the patient's locker",
      "Ask the patient to carry it through the ward",
    ],
    "Secure the lid, complete the request form and send it promptly according to laboratory policy",
    "Prompt, secure transport preserves specimen integrity and prevents spills or delays."
  ),
  q(
    "Which infection-prevention practice is required?",
    [
      "Hand hygiene, gloves when handling urine, clean equipment and safe disposal of waste",
      "Reuse gloves for several patients",
      "Skip hand hygiene after removing gloves",
      "Use the same bedpan without cleaning",
    ],
    "Hand hygiene, gloves when handling urine, clean equipment and safe disposal of waste",
    "Urine may contain infectious organisms, so standard precautions are required."
  ),
  q(
    "What should the nurse do if the specimen is contaminated or the container is mislabeled?",
    [
      "Do not send it as a valid specimen; follow policy for recollection and report the problem",
      "Correct the label without checking the patient",
      "Send it and hope the laboratory can identify it",
      "Add another patient's urine",
    ],
    "Do not send it as a valid specimen; follow policy for recollection and report the problem",
    "A contaminated or misidentified specimen can produce unsafe clinical decisions."
  ),
  q(
    "What should be documented?",
    [
      "Request, specimen type, time collected, patient response, labeling, transport and any difficulty",
      "Only that a container was used",
      "Only the patient's room",
      "Nothing if the sample was sent",
    ],
    "Request, specimen type, time collected, patient response, labeling, transport and any difficulty",
    "Documentation supports tracking, result interpretation and repeat collection when needed."
  ),
];

const rgn_056Quiz: ProcedureQuizQuestion[] = [
  q(
    "Where should a urine specimen be collected from a patient with a retention catheter?",
    [
      "The catheter's designated sampling port",
      "The bottom of the drainage bag",
      "The bedpan after the urine has stood",
      "The outside of the drainage tubing",
    ],
    "The catheter's designated sampling port",
    "Fresh urine must be obtained from the sampling port; the drainage bag may contain old or contaminated urine."
  ),
  q(
    "Why must the closed urinary drainage system be maintained?",
    [
      "Disconnecting it increases infection risk and can compromise drainage",
      "It makes labeling unnecessary",
      "It allows the bag to be reused",
      "It prevents the patient from receiving fluids",
    ],
    "Disconnecting it increases infection risk and can compromise drainage",
    "Maintaining a closed system is an important catheter-associated infection-prevention measure."
  ),
  q(
    "What should be done before accessing the sampling port?",
    [
      "Perform hand hygiene, put on appropriate gloves and disinfect the port with the approved antiseptic",
      "Touch the port to check whether it is dry",
      "Rinse the port with tap water",
      "Disconnect the catheter from the bag",
    ],
    "Perform hand hygiene, put on appropriate gloves and disinfect the port with the approved antiseptic",
    "Aseptic access reduces the risk of introducing organisms into the drainage system."
  ),
  q(
    "How should fresh urine be obtained from the port?",
    [
      "Use sterile appropriate equipment after allowing the antiseptic to dry, without touching the clean connection",
      "Use a household syringe without cleaning the port",
      "Pour urine from the drainage bag",
      "Insert an unsterile tube through the catheter",
    ],
    "Use sterile appropriate equipment after allowing the antiseptic to dry, without touching the clean connection",
    "Non-touch technique and sterile equipment protect the specimen and the catheter system."
  ),
  q(
    "What should be checked before sampling?",
    [
      "The request, patient identity, catheter condition, sampling port and need for temporary clamping under policy",
      "Only whether the drainage bag is full",
      "Only the patient's room number",
      "Nothing because the catheter identifies the patient",
    ],
    "The request, patient identity, catheter condition, sampling port and need for temporary clamping under policy",
    "Assessment prevents wrong-patient collection and identifies a system problem before access."
  ),
  q(
    "Why might the drainage tubing be clamped briefly according to policy?",
    [
      "To allow fresh urine to collect near the sampling port without disconnecting the system",
      "To stop urine drainage for the whole shift",
      "To sterilize the catheter",
      "To replace the sampling port",
    ],
    "To allow fresh urine to collect near the sampling port without disconnecting the system",
    "A brief, monitored clamp may provide fresh sample volume while preserving the closed system."
  ),
  q(
    "What should be done after collecting the sample?",
    [
      "Remove the clamp promptly if used, clean and cap the port as required, and restore unobstructed drainage",
      "Leave the catheter clamped indefinitely",
      "Disconnect the bag to check the volume",
      "Leave the port open",
    ],
    "Remove the clamp promptly if used, clean and cap the port as required, and restore unobstructed drainage",
    "Restoring drainage prevents retention, backflow and catheter-related complications."
  ),
  q(
    "How should the specimen be labeled?",
    [
      "At the bedside with approved patient identifiers, specimen type, date and time",
      "At the end of the shift from memory",
      "With the catheter number only",
      "By asking the patient's visitor to label it",
    ],
    "At the bedside with approved patient identifiers, specimen type, date and time",
    "Accurate bedside labeling prevents specimen mix-ups and supports result interpretation."
  ),
  q(
    "What should be monitored after catheter sampling?",
    [
      "Urine drainage, tubing patency, patient discomfort, blood, leakage and signs of infection",
      "Only whether the container is full",
      "Only the patient's meal intake",
      "Nothing once the specimen is labeled",
    ],
    "Urine drainage, tubing patency, patient discomfort, blood, leakage and signs of infection",
    "Sampling should not compromise drainage or conceal catheter-related complications."
  ),
  q(
    "What should be documented?",
    [
      "Request, sampling-port collection, time, specimen appearance, catheter status, transport and patient response",
      "Only that the drainage bag was present",
      "Only the syringe size",
      "Nothing if the specimen reached the laboratory",
    ],
    "Request, sampling-port collection, time, specimen appearance, catheter status, transport and patient response",
    "Documentation confirms that the specimen was collected correctly and the closed system was maintained."
  ),
];

export const rgnBatch06: Procedure[] = [
  {
    id: "rgn-048",
    title: "Administration of Intrathecal Medication",
    category: "General Nursing (RGN)",
    overview:
      "Intrathecal medication is introduced into the cerebrospinal fluid within the spinal canal. It is a high-risk neuraxial procedure, not an ordinary independent nursing task. The appropriately trained and authorized practitioner performs the administration according to institutional policy and professional scope; the nurse prepares, assists, monitors and escalates within competence.",
    purpose: [
      "Deliver a specifically prescribed medication into the intrathecal space",
      "Provide selected spinal analgesic, anaesthetic or other specialist therapy",
      "Support safe observation of the patient's neurological and physiological response",
    ],
    indications: [
      "A specialist prescriber has prescribed an intrathecal medication for an appropriate clinical indication",
      "Intrathecal analgesia or anaesthesia is required under an approved service protocol",
      "A specialist investigation or treatment requires medication to reach the cerebrospinal fluid",
    ],
    preparation: [
      "Confirm that the administering practitioner is appropriately trained and authorized and that required supervision is available.",
      "Verify patient identity, prescription, medication, dose, route, expiry, allergies, consent, baseline observations and relevant coagulation or infection concerns.",
      "Explain the roles, positioning, monitoring and possible sensations to the patient; provide privacy and emotional support.",
    ],
    equipment: [
      "Prescribed intrathecal medication in route-specific packaging",
      "Approved intrathecal or spinal procedure pack and sterile field",
      "Sterile gloves, gown, mask, cap and appropriate drapes",
      "Skin antiseptic, sterile gauze, dressing and local anaesthetic when prescribed",
      "Sterile syringes, needles and spinal needle selected by the authorized practitioner",
      "Monitoring equipment for oxygen saturation, blood pressure, pulse and respiration",
      "Oxygen, suction, resuscitation equipment and emergency medicines according to policy",
      "Sharps container, waste receptacle and documentation forms",
    ],
    steps: [
      "Confirm the procedure, authorization, prescription, patient identity, allergies, consent and required independent medication checks.",
      "Ensure emergency equipment, monitoring, assistance and a clear escalation plan are immediately available.",
      "Ask the patient to void when appropriate, record baseline observations and position safely with privacy and support.",
      "Perform hand hygiene and assist the authorized practitioner to prepare a sterile field using strict aseptic non-touch technique.",
      "Separate and clearly label intrathecal medication; prevent access to medicines intended for other routes and follow independent-check policy.",
      "Support the patient in the prescribed sitting or lateral position, maintain alignment and provide reassurance without touching sterile areas.",
      "Observe the authorized practitioner during the procedure, provide equipment within scope and maintain sterile precautions.",
      "Monitor consciousness, respiration, oxygen saturation, blood pressure, pulse, pain and neurological status throughout and afterward.",
      "Escalate immediately for respiratory depression, hypotension, altered consciousness, new neurological deficit, severe headache, allergic reaction or other deterioration.",
      "After needle removal, apply the prescribed sterile dressing, dispose of sharps safely, clean equipment and perform hand hygiene.",
      "Reposition the patient as ordered, continue post-procedure observations and document all medication, checks, personnel, response and escalation.",
    ],
    precautions: [
      "Intrathecal administration must only be performed by appropriately trained and authorized practitioners under institutional policy and applicable professional scope.",
      "Never administer a medication unless its intrathecal suitability, label, dose, concentration and route have been independently verified as required.",
      "Use strict aseptic technique and do not use unlabelled, compromised or shared syringes.",
      "Review contraindications and escalate infection at the site, suspected raised intracranial pressure, abnormal coagulation, severe instability or refusal.",
    ],
    afterCare: [
      "Continue prescribed neurological, respiratory and cardiovascular observations for the required period.",
      "Maintain fall precautions and assist with movement until motor function, sensation and haemodynamic status are safe.",
    ],
    documentation: [
      "Record indication, consent, medication, concentration, dose, route, time, authorized practitioner and independent checks.",
      "Record position, baseline and ongoing observations, patient response, site condition, complications and escalation.",
    ],
    complications: [
      "Respiratory depression, hypotension or cardiovascular compromise",
      "High or total spinal block, neurological deficit or altered consciousness",
      "Meningitis, infection, bleeding or post-dural puncture headache",
      "Wrong-route medication error or severe allergic reaction",
    ],
    patientEducation: [
      "Tell the patient to report breathing difficulty, severe headache, weakness, numbness, worsening pain, dizziness or fever immediately.",
      "Explain why monitoring and assisted movement are needed after the procedure.",
    ],
    nursingConsiderations: [
      "Work within N&MC Ghana scope, institutional policy and current competence; seek specialist assistance rather than improvising.",
      "Keep the medication and documentation traceable from preparation through post-procedure monitoring.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=oNCObzqSMa0",
    quiz: rgn_048Quiz,
  },
  {
    id: "rgn-049",
    title: "Administration of Topical Medication",
    category: "General Nursing (RGN)",
    overview:
      "Topical medication is applied to the skin or another prescribed external surface to produce a local effect, protect tissue or provide selected transdermal treatment. Safe administration requires site assessment, correct medication and amount, gloves, contamination control, patient teaching and documentation.",
    purpose: [
      "Treat or protect a local skin or external condition",
      "Provide prescribed anti-inflammatory, antimicrobial, emollient, analgesic or other topical therapy",
      "Deliver a prescribed transdermal medication when indicated",
    ],
    indications: [
      "A valid prescription for cream, ointment, lotion, gel, powder, solution or transdermal patch",
      "A diagnosed or assessed condition appropriate for topical therapy",
      "A prescribed external application site that is accessible and suitable",
    ],
    equipment: [
      "Prescribed topical medication and treatment chart",
      "Clean tray, disposable applicator or gauze and measuring device when required",
      "Disposable gloves and additional PPE according to risk assessment",
      "Normal saline or approved cleansing materials when site cleaning is prescribed",
      "Mackintosh or protective towel, dressing or cover if ordered",
      "Waste receptacle and hand hygiene supplies",
    ],
    steps: [
      "Verify the patient, medication, site, amount, route, timing, expiry, allergies and prescription.",
      "Assess the skin or external surface for redness, broken skin, drainage, pain, infection, previous reaction and treatment response.",
      "Explain the procedure, obtain consent, provide privacy and expose only the area to be treated.",
      "Perform hand hygiene, prepare the medication and put on gloves and other PPE as indicated.",
      "Clean and dry the site only as directed, using a new clean swab for each area and avoiding unnecessary friction.",
      "Apply the prescribed amount evenly with a clean applicator or gloved hand, avoiding contamination of the container.",
      "For a patch, remove the previous patch if due, check the site, apply to the prescribed clean dry area and record application time.",
      "Cover the site only when ordered, remove gloves safely, perform hand hygiene and make the patient comfortable.",
      "Observe for local irritation or systemic symptoms, dispose of waste and decontaminate reusable equipment.",
      "Document medication, amount, site, time, skin findings, teaching, response and any abnormality reported.",
    ],
    precautions: [
      "Do not apply to an infected, broken or unexpectedly damaged site without appropriate clinical direction.",
      "Check allergy history and avoid transferring medication to the eyes, mouth, mucosa or another person.",
      "Use gloves and non-touch technique; do not share multi-use applicators between patients.",
      "Escalate worsening rash, blistering, severe pain, suspected infection, systemic reaction or an incorrect application.",
    ],
    afterCare: [
      "Ensure the patient understands site protection, handwashing after application and when to seek help.",
      "Store or discard the medication according to product and facility policy.",
    ],
    documentation: [
      "Record medication, formulation, amount, route, site, date and time, skin assessment and patient response.",
      "Document education, refusal, missed application, patch removal and any escalation.",
    ],
    complications: [
      "Contact dermatitis, allergy or skin irritation",
      "Contamination or cross-infection",
      "Incorrect dose, site or patch timing",
      "Unrecognized worsening infection or systemic absorption",
    ],
    patientEducation: [
      "Explain the purpose, amount and frequency and tell the patient not to share or add extra medication.",
      "Instruct the patient to report worsening redness, swelling, pain, blistering, rash or breathing difficulty.",
    ],
    nursingConsiderations: [
      "Follow product instructions for transdermal patches, including removal of the previous patch and rotation of sites.",
      "Use an interpreter or communication aid when needed for safe self-care teaching.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=ZJGNFg6ccYM",
    quiz: rgn_049Quiz,
  },
  {
    id: "rgn-050",
    title: "Instillation of Eye Drops",
    category: "General Nursing (RGN)",
    overview:
      "Eye-drop instillation delivers a prescribed ophthalmic solution into the lower conjunctival sac. The nurse verifies the correct patient, medication, dose and eye, positions the patient safely, prevents dropper contamination, applies punctal occlusion when appropriate and observes the response.",
    purpose: [
      "Provide prescribed local ophthalmic treatment",
      "Irrigate or lubricate the eye when ordered",
      "Deliver selected diagnostic or local anaesthetic drops",
    ],
    indications: [
      "A valid prescription for an ophthalmic solution or suspension",
      "Treatment of an assessed eye condition or prescribed diagnostic procedure",
      "A patient who can safely cooperate or has appropriate assistance",
    ],
    equipment: [
      "Prescribed eye drops and medication chart",
      "Clean tray and sterile gauze or cotton swabs",
      "Sterile normal saline when cleansing is required",
      "Disposable gloves when discharge, infection or contact precautions require them",
      "Tissues, waste receptacle and hand hygiene supplies",
    ],
    steps: [
      "Verify patient identity, medication, dose, time, expiry, allergies and the correct eye; inspect the bottle and solution.",
      "Explain the procedure, obtain consent and position the patient sitting or lying with the head supported and slightly extended.",
      "Perform hand hygiene and apply gloves when indicated; remove discharge from inner to outer canthus using a clean swab for each wipe.",
      "Ask the patient to look upward, gently pull the lower eyelid down to form the conjunctival sac and avoid pressure on the globe.",
      "Hold the dropper above the eye without touching the eye, eyelashes, eyelid or any surface.",
      "Instil the prescribed number of drops into the lower conjunctival sac, then allow the patient to close the eye gently.",
      "Apply gentle punctal occlusion when clinically appropriate for the medicine and patient, without pressing on the eye.",
      "If multiple eye medicines are prescribed, allow the required interval between drops and apply ointment after drops when ordered.",
      "Wipe excess from the skin with clean gauze, remove gloves, perform hand hygiene and dispose of materials safely.",
      "Observe pain, redness, swelling, vision change, discharge, allergy and tolerance; document the eye treated, response and teaching.",
    ],
    precautions: [
      "Do not administer to the wrong eye or use a contaminated, expired or cloudy preparation.",
      "Avoid contact between the dropper and the eye or eyelashes; do not share ophthalmic bottles between patients.",
      "Use extra care after eye surgery or with injury and follow specialist instructions for pressure or movement restrictions.",
      "Report severe pain, sudden visual change, facial swelling, breathing difficulty or worsening redness urgently.",
    ],
    afterCare: [
      "Advise the patient not to rub the eye and to report persistent irritation or blurred vision.",
      "Store the medicine according to product instructions and keep the cap clean and closed.",
    ],
    documentation: [
      "Record medication, dose, time, eye treated, technique, punctal occlusion when used, response and any reaction.",
      "Document refusal, inability to cooperate, patient teaching and escalation.",
    ],
    complications: [
      "Contamination or eye infection",
      "Corneal injury from dropper contact",
      "Allergic or local irritation",
      "Medication error or transient or serious visual change",
    ],
    patientEducation: [
      "Explain the purpose and spacing of multiple ophthalmic medicines and how to avoid touching the dropper tip.",
      "Tell the patient to report severe pain, worsening vision, swelling, rash or breathing difficulty immediately.",
    ],
    nursingConsiderations: [
      "Use a separate clean swab for each eye and follow the product's storage and discard instructions.",
      "Maintain privacy and use communication support when visual or language barriers affect understanding.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=mVY3dKcvID4",
    quiz: rgn_050Quiz,
  },
  {
    id: "rgn-051",
    title: "Administration of Rectal Medication",
    category: "General Nursing (RGN)",
    overview:
      "Rectal medication is introduced through the anus, commonly as a suppository, to achieve a local or systemic therapeutic effect. The nurse protects privacy, checks contraindications, uses lubrication and gentle technique, maintains infection prevention and observes the patient afterward.",
    purpose: [
      "Administer a prescribed rectal medication for local or systemic effect",
      "Provide treatment when the rectal route is prescribed or another route is unsuitable",
      "Support comfort, retention and therapeutic response",
    ],
    indications: [
      "A valid prescription for a rectal suppository, cream or other rectal medication",
      "Local treatment or systemic absorption is clinically indicated",
      "The patient cannot or should not receive the medication by the prescribed alternative route",
    ],
    preparation: [
      "Verify patient, medication, dose, route, time, expiry, allergies, indication and consent.",
      "Assess for rectal bleeding, severe pain, diarrhoea, recent rectal surgery, injury, neutropenia, thrombocytopenia or other contraindication.",
      "Explain the intimate procedure, provide privacy and encourage the patient to empty the bladder when appropriate.",
    ],
    equipment: [
      "Prescribed rectal medication",
      "Disposable gloves and additional PPE according to risk assessment",
      "Water-soluble lubricant",
      "Mackintosh, disposable pad, tissue and wipes or cleansing supplies",
      "Receiver or waste receptacle",
      "Hand hygiene supplies and documentation chart",
    ],
    steps: [
      "Identify the patient using approved identifiers, explain the procedure and obtain consent.",
      "Close the curtain or door, provide draping and position the patient in left lateral or left Sims position with the upper leg flexed.",
      "Perform hand hygiene, protect the bed and put on gloves.",
      "Inspect the accessible anal area for bleeding, lesions or unexpected findings and report concerns before proceeding.",
      "Unwrap the medication, apply suitable water-soluble lubricant and encourage slow breathing to relax the sphincter.",
      "Separate the buttocks gently and insert the suppository or prescribed applicator through the anal sphincter without force or trauma.",
      "Withdraw the finger or applicator gently, dispose of it safely and hold the buttocks together briefly if appropriate.",
      "Remove gloves, perform hand hygiene and assist the patient to remain in the recommended position for the prescribed time.",
      "Observe for pain, bleeding, dizziness, urgency, allergic reaction and therapeutic response; assist with hygiene and comfort.",
      "Dispose of equipment, decontaminate reusable items, perform hand hygiene and document the procedure and outcome.",
    ],
    precautions: [
      "Do not proceed through severe pain, active rectal bleeding, suspected obstruction or an unreviewed contraindication.",
      "Never force insertion or use a sharp or unsuitable applicator.",
      "Use gloves and standard precautions; avoid contamination of the medication and lubricant.",
      "Escalate severe pain, fresh bleeding, collapse, allergic reaction or failure to achieve the expected response.",
    ],
    afterCare: [
      "Provide cleansing, dispose of waste and maintain dignity and comfort.",
      "Reassess at the clinically appropriate time and assist the patient safely if they need to use the toilet.",
    ],
    documentation: [
      "Record medication, dose, route, time, assessment, position, patient tolerance, response and any complication.",
      "Document refusal, contraindication, interrupted procedure, teaching and escalation.",
    ],
    complications: [
      "Mucosal trauma, pain or rectal bleeding",
      "Infection or contamination",
      "Loss of the medication before absorption",
      "Allergic or systemic medication reaction",
    ],
    patientEducation: [
      "Explain the expected effect, retention instructions and when to report pain, bleeding, dizziness or worsening symptoms.",
      "Reassure the patient that privacy and dignity will be maintained and that they may stop the procedure if distressed.",
    ],
    nursingConsiderations: [
      "Use an interpreter or communication aid for consent and post-procedure instructions.",
      "Follow product instructions for position, retention time and post-administration review.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=hLDyZ4QW9Fo",
    quiz: rgn_051Quiz,
  },
  {
    id: "rgn-052",
    title: "Instillation of Ear Drops",
    category: "General Nursing (RGN)",
    overview:
      "Ear-drop instillation places prescribed liquid medication into the external auditory canal. The nurse confirms the correct ear and medicine, assesses the ear, warms the preparation to room temperature when appropriate, positions the patient correctly and monitors for dizziness, nausea or other reactions.",
    purpose: [
      "Deliver prescribed local treatment to the external ear canal",
      "Provide therapeutic, cleansing or local anaesthetic effects when ordered",
      "Support safe treatment while protecting the ear from contamination and trauma",
    ],
    indications: [
      "A valid prescription for ear drops or an approved ear-care solution",
      "An assessed ear condition for which the medication is appropriate",
      "A patient able to cooperate or supported safely during positioning",
    ],
    equipment: [
      "Prescribed ear drops and medication chart",
      "Clean tray and dropper",
      "Sterile gauze or swabs for external discharge",
      "Water bath or approved method for bringing medication to room temperature",
      "Disposable gloves when discharge or infection precautions require them",
      "Tissues, waste receptacle and hand hygiene supplies",
    ],
    steps: [
      "Verify patient, medication, dose, time, expiry, allergies and the correct ear; inspect the order and preparation.",
      "Assess pain, discharge, dizziness, hearing symptoms and the external ear; report unexpected findings.",
      "Bring the drops to room temperature when appropriate, explain the procedure and obtain consent.",
      "Perform hand hygiene, position the patient with the affected ear uppermost and support the head.",
      "For an adult, gently pull the auricle upward and backward; for a young child, pull it downward and backward according to age and policy.",
      "Clean only visible external discharge with a clean sterile swab; do not probe deeply into the canal.",
      "Hold the dropper above the ear without touching the auricle or canal and instil the prescribed number of drops.",
      "Ask the patient to remain with the ear uppermost for the prescribed time, commonly several minutes, unless contraindicated.",
      "Observe for dizziness, nausea, pain, hearing change, rash or other reaction; assist the patient slowly when sitting or standing.",
      "Dispose of waste, perform hand hygiene and document the ear treated, medication, response, teaching and abnormalities.",
    ],
    precautions: [
      "Do not use a preparation with uncertain label, expiry, contamination or unsuitable storage.",
      "Use additional clinical direction when tympanic membrane perforation, ear surgery, severe pain or heavy discharge is suspected.",
      "Keep the dropper from touching the ear and never insert cotton buds or instruments deeply.",
      "Escalate severe dizziness, persistent pain, bleeding, facial weakness or acute hearing deterioration.",
    ],
    afterCare: [
      "Keep the patient safe until any dizziness has settled and provide the call bell within reach.",
      "Store the medication as directed and ensure the cap is replaced without contaminating the dropper.",
    ],
    documentation: [
      "Record medication, dose, time, ear treated, assessment, position, tolerance, response and any reaction.",
      "Document teaching, refusal, abnormal findings and referral or escalation.",
    ],
    complications: [
      "Dizziness, nausea or falls",
      "Canal or tympanic membrane trauma",
      "Local irritation, infection or allergic reaction",
      "Medication error involving the wrong ear or preparation",
    ],
    patientEducation: [
      "Tell the patient to keep the ear dry or follow the prescribed care plan and report pain, dizziness or hearing change.",
      "Explain how and when to use the drops at home without touching the dropper tip.",
    ],
    nursingConsiderations: [
      "Use age-appropriate communication and auricle manipulation.",
      "Follow the product and institutional policy for warming, position and contact time.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=3fxgxiJQIa0",
    quiz: rgn_052Quiz,
  },
  {
    id: "rgn-053",
    title: "Administration of Vaginal Medication",
    category: "General Nursing (RGN)",
    overview:
      "Vaginal medication is inserted or applied aseptically to the vagina, commonly as a pessary, cream, gel or foam, to provide a local therapeutic effect. The nurse explains the intimate procedure, protects privacy, uses the correct applicator and technique, supports comfort and documents the response.",
    purpose: [
      "Deliver prescribed local treatment to the vagina",
      "Treat infection, inflammation or another diagnosed condition",
      "Provide the prescribed effect while maintaining dignity and preventing contamination",
    ],
    indications: [
      "A valid prescription for a vaginal pessary, cream, gel, foam or other preparation",
      "A diagnosed or assessed condition appropriate for vaginal treatment",
      "A patient who has provided informed consent and can be positioned safely",
    ],
    preparation: [
      "Verify patient, medication, dose, route, time, expiry, allergies, pregnancy or postpartum considerations and consent.",
      "Explain the procedure, offer the opportunity to void and ask about pain, bleeding or unusual discharge.",
      "Prepare a private area and position the patient safely with appropriate draping.",
    ],
    equipment: [
      "Prescribed vaginal medication and medication chart",
      "Disposable gloves and additional PPE according to risk assessment",
      "Manufacturer-supplied applicator when applicable",
      "Compatible water-soluble lubricant when required by the product",
      "Perineal wipes, clean pad and mackintosh or disposable bed protector",
      "Receiver or waste receptacle and hand hygiene supplies",
    ],
    steps: [
      "Identify the patient, explain the procedure, obtain consent and provide privacy and dignity.",
      "Position the patient in dorsal recumbent or lithotomy position with knees flexed, support and draping.",
      "Perform hand hygiene, put on gloves and inspect the external perineal area for pain, bleeding or unexpected findings.",
      "Provide perineal cleansing when appropriate, working from clean to less clean areas and using clean materials.",
      "Remove gloves if contaminated, perform hand hygiene and put on fresh gloves before handling medication.",
      "Prepare the medication and applicator according to manufacturer instructions; apply compatible lubricant when required.",
      "Separate the labia gently and insert the applicator along the posterior vaginal wall to the depth directed, without force.",
      "Depress the applicator, withdraw it gently, place it in the receiver and cleanse excess medication from the external area.",
      "Assist the patient to remain supine for the prescribed time, provide a pad if appropriate and observe comfort or reaction.",
      "Dispose of single-use equipment, decontaminate reusable items, perform hand hygiene and document the procedure and response.",
    ],
    precautions: [
      "Stop and seek review for severe pain, active bleeding, suspected injury, allergy or a patient who withdraws consent.",
      "Use the product-specific applicator and do not insert beyond the directed depth or force through resistance.",
      "Use standard precautions and avoid contaminating the medication or applicator.",
      "Consider pregnancy, postpartum status, recent surgery and local policy before proceeding.",
    ],
    afterCare: [
      "Explain post-procedure positioning, expected leakage, pad use and when to report worsening symptoms.",
      "Ensure the patient can call for help and is comfortable before leaving.",
    ],
    documentation: [
      "Record medication, dose, route, time, position, assessment, tolerance, response and any teaching.",
      "Document pain, bleeding, discharge, refusal, interrupted procedure and escalation.",
    ],
    complications: [
      "Mucosal trauma, pain or bleeding",
      "Contamination or infection",
      "Medication allergy or local irritation",
      "Incorrect application or loss of medication",
    ],
    patientEducation: [
      "Explain the treatment schedule and advise the patient not to douche or use other products unless prescribed.",
      "Tell the patient to report severe pain, bleeding, rash, swelling or breathing difficulty.",
    ],
    nursingConsiderations: [
      "Maintain respectful, gender-sensitive communication and use a chaperone or support person according to patient preference and policy.",
      "Use an interpreter or communication aid to support informed consent and self-care teaching.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=8Ci0rv5dLR4",
    quiz: rgn_053Quiz,
  },
  {
    id: "rgn-054",
    title: "Collection of Blood Specimens",
    category: "General Nursing (RGN)",
    overview:
      "Blood specimen collection is the safe removal of a prescribed volume of venous blood for laboratory investigation. The nurse verifies the request and patient, selects an appropriate site, uses aseptic venipuncture and the correct tubes, labels at the bedside, transports promptly and manages complications.",
    purpose: [
      "Obtain a suitable specimen for diagnosis and clinical decision-making",
      "Monitor disease, treatment response or physiological status",
      "Provide blood for tests such as haematology, chemistry, grouping, cross-match or microbiology",
    ],
    indications: [
      "A valid laboratory request from an authorized prescriber or service",
      "Need for diagnostic, monitoring, therapeutic or pre-procedure blood testing",
      "A patient who can safely undergo venipuncture after assessment",
    ],
    preparation: [
      "Check the request, tests, timing, preparation requirements, tubes, volume, patient identity and allergies or risks.",
      "Assess the patient for fainting history, bleeding risk, anticoagulants, fistula, mastectomy, IV therapy and suitable sites.",
      "Explain the procedure, obtain cooperation, provide privacy and position the patient safely with the arm supported.",
    ],
    equipment: [
      "Laboratory request form and approved specimen labels",
      "Appropriate evacuated tubes or sterile specimen bottles in the laboratory-approved order of draw",
      "Safety needle and holder or sterile syringe system according to local policy",
      "Tourniquet, approved skin antiseptic and sterile gauze",
      "Gloves, apron or other PPE according to risk assessment",
      "Adhesive dressing, tray, sharps container and waste receptacle",
      "Hand hygiene supplies and transport bag or container",
    ],
    steps: [
      "Perform hand hygiene and identify the patient using approved identifiers; compare the request with the patient.",
      "Explain the tests, obtain consent and position the patient safely, protecting the bed if required.",
      "Assemble tubes in the correct order, check expiry and inspect equipment; perform hand hygiene and put on gloves.",
      "Apply the tourniquet, select a suitable vein and release or reapply it according to the venipuncture technique.",
      "Clean the site with approved antiseptic and allow it to dry completely without touching the site.",
      "Insert the needle using the approved angle and technique, collect the required tubes and volumes in the correct order.",
      "Release the tourniquet as soon as appropriate, remove the needle, apply firm pressure and activate the safety device.",
      "Discard the needle immediately into the sharps container without recapping; apply a dressing when bleeding has stopped.",
      "Mix additive tubes gently as required, label every specimen at the bedside and complete the request form accurately.",
      "Check the patient for dizziness, pain, bleeding or haematoma, remove gloves, perform hand hygiene and transport promptly.",
      "Document collection, site, time, patient tolerance, complications and specimen dispatch according to policy.",
    ],
    precautions: [
      "Do not collect from an unsafe site, through an active IV line or from a limb with a fistula or relevant restriction without direction.",
      "Use the laboratory-approved order of draw, tube type and required volume; do not substitute containers.",
      "Never recap a needle and do not leave the patient unsupported if fainting risk is present.",
      "Escalate persistent bleeding, large haematoma, nerve symptoms, failed collection, needlestick injury or patient deterioration.",
    ],
    afterCare: [
      "Keep pressure on the site for longer when bleeding risk is increased and check the dressing before leaving.",
      "Provide oral fluids or assistance as appropriate after a faint or difficult collection.",
    ],
    documentation: [
      "Record tests, date and time, site, collector, patient tolerance, number or type of specimens and complications.",
      "Record labeling, request completion, transport time and any specimen rejection or recollection.",
    ],
    complications: [
      "Fainting, dizziness or falls",
      "Haematoma, bleeding, pain or nerve irritation",
      "Infection, hemolysis or unsuitable specimen",
      "Needlestick injury or wrong-patient identification",
    ],
    patientEducation: [
      "Tell the patient to keep pressure on the site as directed and report continued bleeding, swelling or numbness.",
      "Explain when results will be reviewed according to local service arrangements.",
    ],
    nursingConsiderations: [
      "Follow the laboratory's current specimen requirements and institutional blood-collection policy.",
      "Use a qualified colleague or alternative collection method when repeated attempts or patient risk exceeds competence.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=CLVyxRY8lZU",
    quiz: rgn_054Quiz,
  },
  {
    id: "rgn-055",
    title: "Collecting a Single Voided Specimen",
    category: "General Nursing (RGN)",
    overview:
      "A single voided specimen is a urine sample passed naturally by the patient and collected in an appropriate container for laboratory examination. The nurse verifies the request, teaches the required clean-catch or midstream technique, prevents contamination, labels at the bedside and transports the specimen promptly.",
    purpose: [
      "Provide urine for diagnosis or monitoring",
      "Evaluate urinary disease, infection, renal function or treatment response",
      "Obtain a representative specimen using the least invasive appropriate method",
    ],
    indications: [
      "A valid request for urinalysis, microscopy, culture or another urine investigation",
      "A patient who can void independently or with assistance",
      "A clean-catch, midstream or other specified collection method",
    ],
    preparation: [
      "Verify the request, specimen type, timing, patient identity, container and patient preparation instructions.",
      "Explain the technique in language the patient understands and provide privacy, toilet access or a clean bedpan or urinal.",
      "Label the container according to policy only when the patient has been correctly identified and collection is ready.",
    ],
    equipment: [
      "Appropriate sterile or clean specimen container with secure lid",
      "Laboratory request form and approved label",
      "Disposable gloves and PPE according to risk assessment",
      "Clean bedpan or urinal when the patient cannot void directly into the container",
      "Mackintosh or disposable pad, tissue and hand hygiene supplies",
      "Transport bag or container and waste receptacle",
    ],
    steps: [
      "Identify the patient using approved identifiers and compare the request with the container and form.",
      "Explain the required specimen, including clean-catch or midstream instructions, and provide privacy.",
      "Ask the patient to perform perineal cleansing as instructed; provide assistance while maintaining dignity.",
      "Ask the patient to begin voiding, collect the required midstream portion without touching the container inside, then finish voiding.",
      "If a bedpan or urinal is used, keep it clean and transfer urine without contaminating the container or lid.",
      "Secure the lid immediately, wipe the outside if needed and label the specimen at the bedside with identifiers, date and time.",
      "Place the specimen and completed form in the approved transport bag without placing the form in contact with the specimen.",
      "Remove gloves, perform hand hygiene and assist the patient with hygiene and comfort.",
      "Send the specimen promptly according to laboratory policy; refrigerate only when specifically directed.",
      "Document the collection method, time, patient tolerance, appearance if clinically relevant, labeling and transport.",
    ],
    precautions: [
      "Do not touch the inside of a sterile container or lid and do not transfer urine using contaminated equipment.",
      "Do not send an unlabeled, leaking, insufficient or visibly contaminated specimen as valid.",
      "Use standard precautions with urine and dispose of waste safely.",
      "Report inability to void, severe pain, blood, unusual appearance or a specimen collection problem.",
    ],
    afterCare: [
      "Clean and decontaminate reusable equipment and return the patient to a comfortable position.",
      "Confirm that the laboratory request and specimen have been dispatched or that an appropriate delay has been reported.",
    ],
    documentation: [
      "Record specimen type, collection method, date and time, patient tolerance, labeling and transport.",
      "Document contamination, inability to void, abnormal observations, recollection or escalation.",
    ],
    complications: [
      "Contamination and misleading laboratory results",
      "Spillage or exposure to urine",
      "Delayed transport or specimen deterioration",
      "Patient embarrassment, falls or inability to void safely",
    ],
    patientEducation: [
      "Explain how to avoid touching the container and why the middle portion may be required.",
      "Tell the patient to report pain, burning, blood, fever or inability to pass urine.",
    ],
    nursingConsiderations: [
      "Use an interpreter or visual instructions when language, hearing or literacy affects the collection technique.",
      "Follow the laboratory's requirements for volume, timing, preservatives and transport.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=oFChXnQqZek",
    quiz: rgn_055Quiz,
  },
  {
    id: "rgn-056",
    title: "Collecting a Urine Specimen from a Retention Catheter",
    category: "General Nursing (RGN)",
    overview:
      "This procedure obtains a fresh urine specimen from the sampling port of an indwelling retention catheter. The closed urinary drainage system is maintained: the drainage bag is never used as the collection source, the sampling port is disinfected and fresh urine is aspirated with sterile appropriate equipment.",
    purpose: [
      "Obtain a representative urine specimen for laboratory investigation",
      "Support diagnosis or monitoring while preserving the closed catheter system",
      "Reduce catheter-associated infection risk during specimen collection",
    ],
    indications: [
      "A valid laboratory request for urine from a patient with an indwelling retention catheter",
      "The catheter has a designated sampling port and the requested test requires fresh urine",
      "Collection can be completed without unnecessary catheter or drainage-bag disconnection",
    ],
    preparation: [
      "Verify the request, specimen type, patient identity, catheter status, container and transport requirements.",
      "Explain the procedure, provide privacy and assess discomfort, drainage, tubing position, leakage and signs of infection.",
      "Gather sterile equipment and ensure the drainage tubing is not kinked; do not plan to collect from the drainage bag.",
    ],
    equipment: [
      "Correct sterile specimen container with secure lid and laboratory request form",
      "Approved sterile syringe or sampling device without contaminating the port",
      "Approved antiseptic swab or sterile supplies for disinfecting the sampling port",
      "Clean gloves and additional PPE according to risk assessment",
      "Clamp only when indicated by policy and for the shortest safe period",
      "Label, transport bag, waste receptacle and hand hygiene supplies",
    ],
    steps: [
      "Identify the patient and verify the request, specimen type, container and required volume.",
      "Explain that the sample will be taken from the catheter sampling port and that the drainage system will remain closed.",
      "Perform hand hygiene, put on gloves and position the patient comfortably while keeping the collection bag below bladder level.",
      "Inspect the catheter, tubing and sampling port; correct kinks and assess whether fresh urine is available.",
      "If required by policy, clamp the drainage tubing briefly below the sampling port to allow fresh urine to collect; never disconnect the catheter from the bag.",
      "Disinfect the sampling port with the approved antiseptic and allow it to dry completely.",
      "Using sterile non-touch technique, attach the sterile syringe or sampling device to the port and withdraw the required fresh urine.",
      "Transfer urine into the correct sterile container without touching the inside, then remove the device and cap or protect the port according to policy.",
      "Remove any clamp promptly, confirm unobstructed drainage and return the bag below bladder level.",
      "Label the container at the bedside, complete the request form, transport promptly, remove gloves, perform hand hygiene and document.",
    ],
    precautions: [
      "Never collect a diagnostic specimen from the drainage bag because it may contain old or contaminated urine.",
      "Do not unnecessarily disconnect the catheter from the drainage system or break the closed system.",
      "Use aseptic non-touch technique, sterile appropriate equipment and a fully dried disinfected sampling port.",
      "Escalate absent drainage, leakage, blocked tubing, blood, severe pain, fever or suspected catheter-associated infection.",
    ],
    afterCare: [
      "Recheck drainage, tubing position, patient comfort and the sampling-port closure after collection.",
      "Dispose of equipment safely and ensure the specimen reaches the laboratory within the required time.",
    ],
    documentation: [
      "Record request, sampling-port collection, date and time, specimen appearance, catheter status, transport and patient response.",
      "Document clamping, difficulty, leakage, abnormal urine, suspected infection and escalation.",
    ],
    complications: [
      "Catheter-associated urinary tract infection from contaminated access",
      "Obstruction, backflow or urinary retention after prolonged clamping",
      "Specimen contamination or wrong-patient labeling",
      "Bleeding, pain or damage from inappropriate equipment",
    ],
    patientEducation: [
      "Tell the patient not to pull or disconnect the catheter and to report pain, fever, blood, leakage or reduced urine flow.",
      "Explain that the drainage bag must remain below bladder level and that the sample is not taken from the bag.",
    ],
    nursingConsiderations: [
      "Follow catheter-care, specimen-collection and infection-prevention policy.",
      "Use sterile supplies and seek assistance if the catheter has no sampling port or the system is compromised.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=48M_CwJE7Z0",
    quiz: rgn_056Quiz,
  },
];