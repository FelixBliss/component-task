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
    title: "ADMINISTRATION OF INTRATHECAL MEDICATION",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "This is the administration of medication into the spinal canal or the subarachnoid space which gradually reaches the cerebro-spinal fluid. This route of medication administration is mostly performed by a physician or an anaesthetist. The nurse therefore has the responsibility to prepare trolley, assist and observe the patient throughout the procedure.",
    purpose: [],
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
  "A trolley containing the following:",
  "Top Shelf: A sterile field with two sterile gallipots",
  "Bottom Shelf",
  "Sterile and epidural pack (if available)",
  "Local anaesthetic agent",
  "Antimicrobial solution",
  "Sterile gloves",
  "Sterile cotton wool swab",
  "Spinal cannula different sizes",
  "Medication",
  "Adhesive tape/strip",
  "Receiver for used items",
  "Syringes and needles",
  "Vital signs tray",
  "Sharps container"
],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain the procedure to the patient",
  "Obtain verbal or formal consent from patient and relatives",
  "Reassure him/her to gain co-operation",
  "Provide privacy",
  "Instruct patient to void before the procedure",
  "Perform hand hygiene",
  "Prepare sterile trolley and send to the bedside",
  "Check patient’s vital signs",
  "Provide adequate lightening at the puncture site",
  "Assist patient into a required position i.e. lying or sitting and supports him/her",
  "Open the equipment tray taking care not to contaminate",
  "Continue to support, observe and reassure patient throughout the procedure",
  "Wear sterile gloves and applies sterile dressing when needle is withdrawn",
  "Secure punctured site firmly with a sterile dry swab and an adhesive tape",
  "Allow patient to lie flat on the back and make him/her comfortable",
  "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
  "Dispose off used items and decontaminate trolley",
  "Perform hand hygiene",
  "Observe patient continuously for therapeutic and adverse effects"
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
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Reassure him/her to gain co-operation",
      "Secure punctured site firmly with a sterile dry swab and an adhesive tape",
      "Perform hand hygiene"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete administration of intrathecal medication safely, which action should the nurse take at this point?",
    "options": [
      "Wear sterile gloves and applies sterile dressing when needle is withdrawn",
      "Establish rapport (Refer to steps)",
      "Assist patient into a required position i.e. lying or sitting and supports him/her",
      "Obtain verbal or formal consent from patient and relatives"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of intrathecal medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Provide adequate lightening at the puncture site",
      "Establish rapport (Refer to steps)",
      "Explain the procedure to the patient",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Explain the procedure to the patient",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before carrying out administration of intrathecal medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Instruct patient to void before the procedure",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Check patient’s vital signs",
      "Obtain verbal or formal consent from patient and relatives"
    ],
    "answer": "Obtain verbal or formal consent from patient and relatives",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "The nurse is carrying out administration of intrathecal medication. Which action best matches this part of the procedure?",
    "options": [
      "Reassure him/her to gain co-operation",
      "Continue to support, observe and reassure patient throughout the procedure",
      "Provide privacy",
      "Allow patient to lie flat on the back and make him/her comfortable"
    ],
    "answer": "Reassure him/her to gain co-operation",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "A patient is about to undergo administration of intrathecal medication. Which action protects their dignity during preparation?",
    "options": [
      "Obtain verbal or formal consent from patient and relatives",
      "Provide privacy",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Open the equipment tray taking care not to contaminate"
    ],
    "answer": "Provide privacy",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "Which step should be performed now during administration of intrathecal medication?",
    "options": [
      "Observe patient continuously for therapeutic and adverse effects",
      "Assist patient into a required position i.e. lying or sitting and supports him/her",
      "Instruct patient to void before the procedure",
      "Prepare sterile trolley and send to the bedside"
    ],
    "answer": "Instruct patient to void before the procedure",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with administration of intrathecal medication, what infection-prevention action is required at this point?",
    "options": [
      "Secure punctured site firmly with a sterile dry swab and an adhesive tape",
      "Instruct patient to void before the procedure",
      "Dispose off used items and decontaminate trolley",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "The nurse is carrying out administration of intrathecal medication. Which action best matches this part of the procedure?",
    "options": [
      "Prepare sterile trolley and send to the bedside",
      "Explain the procedure to the patient",
      "Wear sterile gloves and applies sterile dressing when needle is withdrawn",
      "Provide privacy"
    ],
    "answer": "Prepare sterile trolley and send to the bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "While providing administration of intrathecal medication, why must the nurse complete the prescribed observations at the specified intervals?",
    "options": [
      "Continue to support, observe and reassure patient throughout the procedure",
      "Check patient’s vital signs",
      "Provide adequate lightening at the puncture site",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Check patient’s vital signs",
    "explanation": "Trended observations help detect deterioration early. Record the measurements, compare them with previous findings and escalate abnormal values or clinical concern according to local policy."
  },
  {
    "question": "Which step should be performed now during administration of intrathecal medication?",
    "options": [
      "Prepare sterile trolley and send to the bedside",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Provide adequate lightening at the puncture site",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)"
    ],
    "answer": "Provide adequate lightening at the puncture site",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of intrathecal medication, what should guide the nurse's choice of position?",
    "options": [
      "Reassure him/her to gain co-operation",
      "Allow patient to lie flat on the back and make him/her comfortable",
      "Perform hand hygiene",
      "Assist patient into a required position i.e. lying or sitting and supports him/her"
    ],
    "answer": "Assist patient into a required position i.e. lying or sitting and supports him/her",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "The nurse is carrying out administration of intrathecal medication. Which action best matches this part of the procedure?",
    "options": [
      "Open the equipment tray taking care not to contaminate",
      "Assist patient into a required position i.e. lying or sitting and supports him/her",
      "Obtain verbal or formal consent from patient and relatives",
      "Secure punctured site firmly with a sterile dry swab and an adhesive tape"
    ],
    "answer": "Open the equipment tray taking care not to contaminate",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of intrathecal medication safely, which action should the nurse take at this point?",
    "options": [
      "Explain the procedure to the patient",
      "Continue to support, observe and reassure patient throughout the procedure",
      "Observe patient continuously for therapeutic and adverse effects",
      "Provide adequate lightening at the puncture site"
    ],
    "answer": "Continue to support, observe and reassure patient throughout the procedure",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intrathecal medication?",
    "options": [
      "Dispose off used items and decontaminate trolley",
      "Check patient’s vital signs",
      "Wear sterile gloves and applies sterile dressing when needle is withdrawn",
      "Instruct patient to void before the procedure"
    ],
    "answer": "Wear sterile gloves and applies sterile dressing when needle is withdrawn",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of administration of intrathecal medication, which principle protects the reliability of the result?",
    "options": [
      "Continue to support, observe and reassure patient throughout the procedure",
      "Provide privacy",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Secure punctured site firmly with a sterile dry swab and an adhesive tape"
    ],
    "answer": "Secure punctured site firmly with a sterile dry swab and an adhesive tape",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "The nurse is carrying out administration of intrathecal medication. Which action best matches this part of the procedure?",
    "options": [
      "Allow patient to lie flat on the back and make him/her comfortable",
      "Establish rapport (Refer to steps)",
      "Open the equipment tray taking care not to contaminate",
      "Reassure him/her to gain co-operation"
    ],
    "answer": "Allow patient to lie flat on the back and make him/her comfortable",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After completing this part of administration of intrathecal medication, what makes the clinical record useful for continuity of care?",
    "options": [
      "Assist patient into a required position i.e. lying or sitting and supports him/her",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Prepare sterile trolley and send to the bedside",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date"
    ],
    "answer": "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "After the hands-on part of administration of intrathecal medication, how should used equipment and waste be managed?",
    "options": [
      "Perform hand hygiene",
      "Observe patient continuously for therapeutic and adverse effects",
      "Dispose off used items and decontaminate trolley",
      "Secure punctured site firmly with a sterile dry swab and an adhesive tape"
    ],
    "answer": "Dispose off used items and decontaminate trolley",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with administration of intrathecal medication, what infection-prevention action is required at this point?",
    "options": [
      "Obtain verbal or formal consent from patient and relatives",
      "Secure punctured site firmly with a sterile dry swab and an adhesive tape",
      "Instruct patient to void before the procedure",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "The nurse is carrying out administration of intrathecal medication. Which action best matches this part of the procedure?",
    "options": [
      "Observe patient continuously for therapeutic and adverse effects",
      "Provide adequate lightening at the puncture site",
      "Explain the procedure to the patient",
      "Continue to support, observe and reassure patient throughout the procedure"
    ],
    "answer": "Observe patient continuously for therapeutic and adverse effects",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },
  {
    id: "rgn-049",
    title: "ADMINISTRATION OF TOPICAL MEDICATION",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "This is the application of medication directly on the skin and the mucous membrane. These medications are available in the form of creams, lotions, ointment and patches.",
    purpose: [],
    indications: [
      "A valid prescription for cream, ointment, lotion, gel, powder, solution or transdermal patch",
      "A diagnosed or assessed condition appropriate for topical therapy",
      "A prescribed external application site that is accessible and suitable",
    ],
    equipment: [
  "A tray containing the following:",
  "Medication",
  "Disposable gloves",
  "Gallipot containing sterile swabs",
  "Receiver for used swabs",
  "Mackintosh and dressing towel",
  "Treatment chart (manual or electronic)"
],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain procedure",
  "Ensure patient’s right to know/consent and to refuse medication",
  "Perform hand hygiene",
  "Prepare tray and send to bedside",
  "Provide privacy and expose the area",
  "Assess the site for application of medication",
  "Cover the bed with mackintosh and dressing towel",
  "Perform hand hygiene and wear gloves",
  "Dab skin area with a dry swab to dry and remove flicking skin",
  "Apply topical agents evenly on the skin and rub if necessary",
  "Remove glove and perform hand hygiene",
  "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
  "Dispose off used items and decontaminate tray",
  "Perform hand hygiene",
  "Report to appropriate officer"
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
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Perform hand hygiene",
      "Report to appropriate officer",
      "Apply topical agents evenly on the skin and rub if necessary"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete administration of topical medication safely, which action should the nurse take at this point?",
    "options": [
      "Ensure patient’s right to know/consent and to refuse medication",
      "Establish rapport (Refer to steps)",
      "Apply topical agents evenly on the skin and rub if necessary",
      "Assess the site for application of medication"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of topical medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Dispose off used items and decontaminate tray",
      "Dab skin area with a dry swab to dry and remove flicking skin",
      "Explain procedure",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Explain procedure",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before carrying out administration of topical medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Dab skin area with a dry swab to dry and remove flicking skin",
      "Provide privacy and expose the area",
      "Establish rapport (Refer to steps)",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Ensure patient’s right to know/consent and to refuse medication",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with administration of topical medication, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Establish rapport (Refer to steps)",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Perform hand hygiene and wear gloves"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete administration of topical medication safely, which action should the nurse take at this point?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Prepare tray and send to bedside",
      "Perform hand hygiene and wear gloves",
      "Perform hand hygiene"
    ],
    "answer": "Prepare tray and send to bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "A patient is about to undergo administration of topical medication. Which action protects their dignity during preparation?",
    "options": [
      "Remove glove and perform hand hygiene",
      "Cover the bed with mackintosh and dressing towel",
      "Provide privacy and expose the area",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date"
    ],
    "answer": "Provide privacy and expose the area",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Cover the bed with mackintosh and dressing towel",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Report to appropriate officer",
      "Assess the site for application of medication"
    ],
    "answer": "Assess the site for application of medication",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "The nurse is carrying out administration of topical medication. Which action best matches this part of the procedure?",
    "options": [
      "Cover the bed with mackintosh and dressing towel",
      "Report to appropriate officer",
      "Apply topical agents evenly on the skin and rub if necessary",
      "Provide privacy and expose the area"
    ],
    "answer": "Cover the bed with mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with administration of topical medication, what infection-prevention action is required at this point?",
    "options": [
      "Dispose off used items and decontaminate tray",
      "Perform hand hygiene and wear gloves",
      "Provide privacy and expose the area",
      "Explain procedure"
    ],
    "answer": "Perform hand hygiene and wear gloves",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "When collecting a specimen as part of administration of topical medication, which principle protects the reliability of the result?",
    "options": [
      "Perform hand hygiene and wear gloves",
      "Prepare tray and send to bedside",
      "Dab skin area with a dry swab to dry and remove flicking skin",
      "Dispose off used items and decontaminate tray"
    ],
    "answer": "Dab skin area with a dry swab to dry and remove flicking skin",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of topical medication?",
    "options": [
      "Prepare tray and send to bedside",
      "Establish rapport (Refer to steps)",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Apply topical agents evenly on the skin and rub if necessary"
    ],
    "answer": "Apply topical agents evenly on the skin and rub if necessary",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with administration of topical medication, what infection-prevention action is required at this point?",
    "options": [
      "Remove glove and perform hand hygiene",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Cover the bed with mackintosh and dressing towel",
      "Perform hand hygiene"
    ],
    "answer": "Remove glove and perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "After completing this part of administration of topical medication, what makes the clinical record useful for continuity of care?",
    "options": [
      "Apply topical agents evenly on the skin and rub if necessary",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Perform hand hygiene",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date"
    ],
    "answer": "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "After the hands-on part of administration of topical medication, how should used equipment and waste be managed?",
    "options": [
      "Assess the site for application of medication",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Dispose off used items and decontaminate tray",
      "Apply topical agents evenly on the skin and rub if necessary"
    ],
    "answer": "Dispose off used items and decontaminate tray",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with administration of topical medication, what infection-prevention action is required at this point?",
    "options": [
      "Ensure patient’s right to know/consent and to refuse medication",
      "Report to appropriate officer",
      "Apply topical agents evenly on the skin and rub if necessary",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "The nurse is carrying out administration of topical medication. Which action best matches this part of the procedure?",
    "options": [
      "Report to appropriate officer",
      "Dab skin area with a dry swab to dry and remove flicking skin",
      "Provide privacy and expose the area",
      "Explain procedure"
    ],
    "answer": "Report to appropriate officer",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },
  {
    id: "rgn-050",
    title: "INSTILLATION OF EYE DROPS",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "It is the administration of medication in the form of liquid drop by drop into a body space of cavity.",
    purpose: [],
    indications: [
      "A valid prescription for an ophthalmic solution or suspension",
      "Treatment of an assessed eye condition or prescribed diagnostic procedure",
      "A patient who can safely cooperate or has appropriate assistance",
    ],
    equipment: [
  "A tray containing the following:",
  "Medication with eye dropper",
  "Sterile cotton wool swab in a gallipot",
  "Bottle of sterile 0.9% ophthalmic saline",
  "Paper towels",
  "Treatment Chart (Manual or Electronic)"
],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain procedure (Refer to steps)",
  "Ensure patient’s right to know/consent and to refuse medication",
  "Perform hand hygiene",
  "Set tray and send to the bedside",
  "Check medication against the treatment chart (manual or electronic) for the right dosage",
  "Assist patient to sit in an upright position or lie down with the neck slightly hyper extended",
  "Perform hand hygiene and wear gloves",
  "Clean eye gently with sterile cotton wool swab soaked in saline solution to remove any discharge or previous ointment",
  "Ask patient to look at the ceiling and retract lower eye lid with your dominant hand",
  "Place a wool swab on the lower lid against the lid margin",
  "Draw up eye drops",
  "Supporting eye dropper on bridge of patient’s nose instill medication as ordered onto conjunctival space of lower lid",
  "Wipe off excess medication with cotton wool, moving from inner to outer canthus",
  "Ask patient to keep the eye closed for one (1) to two (2) minutes",
  "Encourage patient to report any irritation or blurriness of vision",
  "Remove the gloves and perform hand hygiene",
  "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
  "Dispose off used items and decontaminate tray",
  "Perform hand hygiene",
  "Report to appropriate officer"
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
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Perform hand hygiene",
      "Ask patient to keep the eye closed for one (1) to two (2) minutes",
      "Check medication against the treatment chart (manual or electronic) for the right dosage"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete instillation of eye drops safely, which action should the nurse take at this point?",
    "options": [
      "Supporting eye dropper on bridge of patient’s nose instill medication as ordered onto conjunctival space of lower lid",
      "Establish rapport (Refer to steps)",
      "Place a wool swab on the lower lid against the lid margin",
      "Explain procedure (Refer to steps)"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out instillation of eye drops, what should the nurse do to support informed cooperation?",
    "options": [
      "Clean eye gently with sterile cotton wool swab soaked in saline solution to remove any discharge or previous ointment",
      "Report to appropriate officer",
      "Explain procedure (Refer to steps)",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)"
    ],
    "answer": "Explain procedure (Refer to steps)",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before carrying out instillation of eye drops, what should the nurse do to support informed cooperation?",
    "options": [
      "Set tray and send to the bedside",
      "Encourage patient to report any irritation or blurriness of vision",
      "Assist patient to sit in an upright position or lie down with the neck slightly hyper extended",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Ensure patient’s right to know/consent and to refuse medication",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with instillation of eye drops, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Draw up eye drops",
      "Explain procedure (Refer to steps)",
      "Wipe off excess medication with cotton wool, moving from inner to outer canthus"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete instillation of eye drops safely, which action should the nurse take at this point?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Set tray and send to the bedside",
      "Dispose off used items and decontaminate tray",
      "Ask patient to look at the ceiling and retract lower eye lid with your dominant hand"
    ],
    "answer": "Set tray and send to the bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Remove the gloves and perform hand hygiene",
      "Perform hand hygiene and wear gloves",
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Set tray and send to the bedside"
    ],
    "answer": "Check medication against the treatment chart (manual or electronic) for the right dosage",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "When positioning the patient for instillation of eye drops, what should guide the nurse's choice of position?",
    "options": [
      "Supporting eye dropper on bridge of patient’s nose instill medication as ordered onto conjunctival space of lower lid",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Ask patient to keep the eye closed for one (1) to two (2) minutes",
      "Assist patient to sit in an upright position or lie down with the neck slightly hyper extended"
    ],
    "answer": "Assist patient to sit in an upright position or lie down with the neck slightly hyper extended",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Before proceeding with instillation of eye drops, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene and wear gloves",
      "Report to appropriate officer",
      "Place a wool swab on the lower lid against the lid margin",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Perform hand hygiene and wear gloves",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "When collecting a specimen as part of instillation of eye drops, which principle protects the reliability of the result?",
    "options": [
      "Perform hand hygiene and wear gloves",
      "Clean eye gently with sterile cotton wool swab soaked in saline solution to remove any discharge or previous ointment",
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)"
    ],
    "answer": "Clean eye gently with sterile cotton wool swab soaked in saline solution to remove any discharge or previous ointment",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "Which step should be performed now during instillation of eye drops?",
    "options": [
      "Perform hand hygiene",
      "Encourage patient to report any irritation or blurriness of vision",
      "Ask patient to look at the ceiling and retract lower eye lid with your dominant hand",
      "Wipe off excess medication with cotton wool, moving from inner to outer canthus"
    ],
    "answer": "Ask patient to look at the ceiling and retract lower eye lid with your dominant hand",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of instillation of eye drops, which principle protects the reliability of the result?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Draw up eye drops",
      "Explain procedure (Refer to steps)",
      "Place a wool swab on the lower lid against the lid margin"
    ],
    "answer": "Place a wool swab on the lower lid against the lid margin",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "The nurse is carrying out instillation of eye drops. Which action best matches this part of the procedure?",
    "options": [
      "Draw up eye drops",
      "Assist patient to sit in an upright position or lie down with the neck slightly hyper extended",
      "Dispose off used items and decontaminate tray",
      "Clean eye gently with sterile cotton wool swab soaked in saline solution to remove any discharge or previous ointment"
    ],
    "answer": "Draw up eye drops",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Remove the gloves and perform hand hygiene",
      "Supporting eye dropper on bridge of patient’s nose instill medication as ordered onto conjunctival space of lower lid",
      "Ask patient to keep the eye closed for one (1) to two (2) minutes",
      "Set tray and send to the bedside"
    ],
    "answer": "Supporting eye dropper on bridge of patient’s nose instill medication as ordered onto conjunctival space of lower lid",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Draw up eye drops",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Wipe off excess medication with cotton wool, moving from inner to outer canthus",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Wipe off excess medication with cotton wool, moving from inner to outer canthus",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which nursing action is required at this stage of instillation of eye drops?",
    "options": [
      "Perform hand hygiene and wear gloves",
      "Report to appropriate officer",
      "Ask patient to look at the ceiling and retract lower eye lid with your dominant hand",
      "Ask patient to keep the eye closed for one (1) to two (2) minutes"
    ],
    "answer": "Ask patient to keep the eye closed for one (1) to two (2) minutes",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out instillation of eye drops. Which action best matches this part of the procedure?",
    "options": [
      "Encourage patient to report any irritation or blurriness of vision",
      "Ask patient to keep the eye closed for one (1) to two (2) minutes",
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)"
    ],
    "answer": "Encourage patient to report any irritation or blurriness of vision",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with instillation of eye drops, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Remove the gloves and perform hand hygiene",
      "Explain procedure (Refer to steps)",
      "Supporting eye dropper on bridge of patient’s nose instill medication as ordered onto conjunctival space of lower lid"
    ],
    "answer": "Remove the gloves and perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "After completing this part of instillation of eye drops, what makes the clinical record useful for continuity of care?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Place a wool swab on the lower lid against the lid margin",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Clean eye gently with sterile cotton wool swab soaked in saline solution to remove any discharge or previous ointment"
    ],
    "answer": "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "After the hands-on part of instillation of eye drops, how should used equipment and waste be managed?",
    "options": [
      "Encourage patient to report any irritation or blurriness of vision",
      "Assist patient to sit in an upright position or lie down with the neck slightly hyper extended",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Dispose off used items and decontaminate tray"
    ],
    "answer": "Dispose off used items and decontaminate tray",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with instillation of eye drops, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Ask patient to keep the eye closed for one (1) to two (2) minutes",
      "Check medication against the treatment chart (manual or electronic) for the right dosage"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete instillation of eye drops safely, which action should the nurse take at this point?",
    "options": [
      "Draw up eye drops",
      "Report to appropriate officer",
      "Ask patient to look at the ceiling and retract lower eye lid with your dominant hand",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Report to appropriate officer",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },
  {
    id: "rgn-051",
    title: "ADMINISTRATION OF RECTAL MEDICATION",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "This is the administration of medication through the rectum in the form of suppository.",
    purpose: [],
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
  "A tray containing the following:",
  "Rectal suppository",
  "Wipes/soap and water",
  "Tissue",
  "Disposable gloves",
  "Mackintosh and dressing towel",
  "Receiver for used items",
  "Treatment Chart (Manual or Electronic)"
],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain procedure",
  "Ensure patient’s right to know/consent and to refuse medication",
  "Perform hand hygiene",
  "Send tray to bedside",
  "Provide privacy",
  "Assist patient to a left lateral or left Sim’s position, with the upper leg flexed",
  "Protect bed with mackintosh and dressing towel at the buttocks",
  "Fold back the top bedclothes to expose the buttocks",
  "Perform hand hygiene and wear gloves",
  "Clean anal area with wipes/soap, water and dry",
  "Remove gloves and perform hand hygiene",
  "Remove medication, checks label and compares with patient’s treatment chart (manual or electronic)",
  "Wear gloves, unwraps the suppository",
  "Encourage the patient to relax by breathing through the mouth",
  "Insert the suppository gently into the rectum using the gloved index finger and press the patient’s buttocks together for few minutes",
  "Ask the patient to squeeze the buttock together and remain in the left lateral or supine position for at least ten (10) – fifteen (15) minutes",
  "Remove gloves and perform hand hygiene",
  "Dispose off used items and decontaminate tray",
  "Document procedure on treatment chart (manual or electronic) and nurses notes (manual/electronic)",
  "Assess patient after thirty (30) minutes for therapeutic effects",
  "Assist patient into a desirable position"
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
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Perform hand hygiene",
      "Encourage the patient to relax by breathing through the mouth",
      "Send tray to bedside"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete administration of rectal medication safely, which action should the nurse take at this point?",
    "options": [
      "Remove gloves and perform hand hygiene",
      "Establish rapport (Refer to steps)",
      "Clean anal area with wipes/soap, water and dry",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of rectal medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Protect bed with mackintosh and dressing towel at the buttocks",
      "Document procedure on treatment chart (manual or electronic) and nurses notes (manual/electronic)",
      "Explain procedure",
      "Dispose off used items and decontaminate tray"
    ],
    "answer": "Explain procedure",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before carrying out administration of rectal medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Perform hand hygiene",
      "Encourage the patient to relax by breathing through the mouth",
      "Send tray to bedside",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Ensure patient’s right to know/consent and to refuse medication",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with administration of rectal medication, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Clean anal area with wipes/soap, water and dry",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Remove gloves and perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete administration of rectal medication safely, which action should the nurse take at this point?",
    "options": [
      "Document procedure on treatment chart (manual or electronic) and nurses notes (manual/electronic)",
      "Send tray to bedside",
      "Dispose off used items and decontaminate tray",
      "Protect bed with mackintosh and dressing towel at the buttocks"
    ],
    "answer": "Send tray to bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "A patient is about to undergo administration of rectal medication. Which action protects their dignity during preparation?",
    "options": [
      "Encourage the patient to relax by breathing through the mouth",
      "Perform hand hygiene",
      "Provide privacy",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Provide privacy",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "When positioning the patient for administration of rectal medication, what should guide the nurse's choice of position?",
    "options": [
      "Clean anal area with wipes/soap, water and dry",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Remove gloves and perform hand hygiene",
      "Assist patient to a left lateral or left Sim’s position, with the upper leg flexed"
    ],
    "answer": "Assist patient to a left lateral or left Sim’s position, with the upper leg flexed",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "The nurse is carrying out administration of rectal medication. Which action best matches this part of the procedure?",
    "options": [
      "Protect bed with mackintosh and dressing towel at the buttocks",
      "Dispose off used items and decontaminate tray",
      "Assist patient to a left lateral or left Sim’s position, with the upper leg flexed",
      "Document procedure on treatment chart (manual or electronic) and nurses notes (manual/electronic)"
    ],
    "answer": "Protect bed with mackintosh and dressing towel at the buttocks",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of rectal medication safely, which action should the nurse take at this point?",
    "options": [
      "Perform hand hygiene",
      "Fold back the top bedclothes to expose the buttocks",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Encourage the patient to relax by breathing through the mouth"
    ],
    "answer": "Fold back the top bedclothes to expose the buttocks",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with administration of rectal medication, what infection-prevention action is required at this point?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Remove gloves and perform hand hygiene",
      "Perform hand hygiene and wear gloves",
      "Clean anal area with wipes/soap, water and dry"
    ],
    "answer": "Perform hand hygiene and wear gloves",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which nursing action is required at this stage of administration of rectal medication?",
    "options": [
      "Dispose off used items and decontaminate tray",
      "Assist patient to a left lateral or left Sim’s position, with the upper leg flexed",
      "Document procedure on treatment chart (manual or electronic) and nurses notes (manual/electronic)",
      "Clean anal area with wipes/soap, water and dry"
    ],
    "answer": "Clean anal area with wipes/soap, water and dry",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with administration of rectal medication, what infection-prevention action is required at this point?",
    "options": [
      "Remove gloves and perform hand hygiene",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Encourage the patient to relax by breathing through the mouth",
      "Perform hand hygiene"
    ],
    "answer": "Remove gloves and perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Clean anal area with wipes/soap, water and dry",
      "Remove medication, checks label and compares with patient’s treatment chart (manual or electronic)",
      "Perform hand hygiene and wear gloves",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date"
    ],
    "answer": "Remove medication, checks label and compares with patient’s treatment chart (manual or electronic)",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which step should be performed now during administration of rectal medication?",
    "options": [
      "Assist patient to a left lateral or left Sim’s position, with the upper leg flexed",
      "Document procedure on treatment chart (manual or electronic) and nurses notes (manual/electronic)",
      "Wear gloves, unwraps the suppository",
      "Dispose off used items and decontaminate tray"
    ],
    "answer": "Wear gloves, unwraps the suppository",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of rectal medication?",
    "options": [
      "Ensure patient’s right to know/consent and to refuse medication",
      "Wear gloves, unwraps the suppository",
      "Perform hand hygiene",
      "Encourage the patient to relax by breathing through the mouth"
    ],
    "answer": "Encourage the patient to relax by breathing through the mouth",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of rectal medication. Which action best matches this part of the procedure?",
    "options": [
      "Insert the suppository gently into the rectum using the gloved index finger and press the patient’s buttocks together for few minutes",
      "Perform hand hygiene and wear gloves",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Clean anal area with wipes/soap, water and dry"
    ],
    "answer": "Insert the suppository gently into the rectum using the gloved index finger and press the patient’s buttocks together for few minutes",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of rectal medication, what should guide the nurse's choice of position?",
    "options": [
      "Document procedure on treatment chart (manual or electronic) and nurses notes (manual/electronic)",
      "Ask the patient to squeeze the buttock together and remain in the left lateral or supine position for at least ten (10) – fifteen (15) minutes",
      "Dispose off used items and decontaminate tray",
      "Assist patient to a left lateral or left Sim’s position, with the upper leg flexed"
    ],
    "answer": "Ask the patient to squeeze the buttock together and remain in the left lateral or supine position for at least ten (10) – fifteen (15) minutes",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Before proceeding with administration of rectal medication, what infection-prevention action is required at this point?",
    "options": [
      "Encourage the patient to relax by breathing through the mouth",
      "Perform hand hygiene",
      "Remove gloves and perform hand hygiene",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Remove gloves and perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "After the hands-on part of administration of rectal medication, how should used equipment and waste be managed?",
    "options": [
      "Perform hand hygiene and wear gloves",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Clean anal area with wipes/soap, water and dry",
      "Dispose off used items and decontaminate tray"
    ],
    "answer": "Dispose off used items and decontaminate tray",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "After completing this part of administration of rectal medication, what makes the clinical record useful for continuity of care?",
    "options": [
      "Document procedure on treatment chart (manual or electronic) and nurses notes (manual/electronic)",
      "Ask the patient to squeeze the buttock together and remain in the left lateral or supine position for at least ten (10) – fifteen (15) minutes",
      "Assist patient to a left lateral or left Sim’s position, with the upper leg flexed",
      "Dispose off used items and decontaminate tray"
    ],
    "answer": "Document procedure on treatment chart (manual or electronic) and nurses notes (manual/electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "To complete administration of rectal medication safely, which action should the nurse take at this point?",
    "options": [
      "Perform hand hygiene",
      "Assess patient after thirty (30) minutes for therapeutic effects",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Wear gloves, unwraps the suppository"
    ],
    "answer": "Assess patient after thirty (30) minutes for therapeutic effects",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of rectal medication, what should guide the nurse's choice of position?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Clean anal area with wipes/soap, water and dry",
      "Assist patient into a desirable position",
      "Perform hand hygiene and wear gloves"
    ],
    "answer": "Assist patient into a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  }
],
  },
  {
    id: "rgn-052",
    title: "INSTILLATION OF EAR DROPS",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "It is the administration of medication in the form of liquid drop by drop into a body space of cavity.",
    purpose: [],
    indications: [
      "A valid prescription for ear drops or an approved ear-care solution",
      "An assessed ear condition for which the medication is appropriate",
      "A patient able to cooperate or supported safely during positioning",
    ],
    equipment: [
  "A tray containing the following:",
  "Medicine with a dropper",
  "Sterile cotton swabs in a gallipot",
  "Gauze or paper wipes",
  "Solution bowl for water bath",
  "Sterile swabs stick",
  "Receiver for used items",
  "Treatment Chart (Manual or Electronic)"
],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain procedure to patient (Refer to steps)",
  "Ensure patient’s right to know/consent and to refuse medication",
  "Perform hand hygiene",
  "Set tray and send to the bedside",
  "Check medication against the treatment chart (manual or electronic) for the right dosage",
  "Confirm the ear for their instillation by first inspecting unaffected ear then the affected ear",
  "Position patient in sitting up or lying down with the affected ear up",
  "Hold auricle upward, backward and outward to straighten the auditory canal of an adult. Hold it downward in a child",
  "Clean external auditory canal with sterile swab stick if there is a discharge",
  "Instruct patient to remain lying down with ear upward for about 5 minutes if necessary",
  "Hold medicine dropper almost horizontally, steady patient’s head to absorb excess ear drops",
  "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
  "Assist patient into a desirable position",
  "Remain with patient for five (5) minutes if a child",
  "Dispose off used items and decontaminate tray",
  "Perform hand hygiene",
  "Report to appropriate officer"
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
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Perform hand hygiene",
      "Remain with patient for five (5) minutes if a child",
      "Hold auricle upward, backward and outward to straighten the auditory canal of an adult. Hold it downward in a child"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete instillation of ear drops safely, which action should the nurse take at this point?",
    "options": [
      "Dispose off used items and decontaminate tray",
      "Establish rapport (Refer to steps)",
      "Instruct patient to remain lying down with ear upward for about 5 minutes if necessary",
      "Set tray and send to the bedside"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out instillation of ear drops, what should the nurse do to support informed cooperation?",
    "options": [
      "Hold medicine dropper almost horizontally, steady patient’s head to absorb excess ear drops",
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Explain procedure to patient (Refer to steps)",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date"
    ],
    "answer": "Explain procedure to patient (Refer to steps)",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before carrying out instillation of ear drops, what should the nurse do to support informed cooperation?",
    "options": [
      "Position patient in sitting up or lying down with the affected ear up",
      "Establish rapport (Refer to steps)",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Ensure patient’s right to know/consent and to refuse medication",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with instillation of ear drops, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Remain with patient for five (5) minutes if a child",
      "Hold auricle upward, backward and outward to straighten the auditory canal of an adult. Hold it downward in a child",
      "Explain procedure to patient (Refer to steps)"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete instillation of ear drops safely, which action should the nurse take at this point?",
    "options": [
      "Clean external auditory canal with sterile swab stick if there is a discharge",
      "Set tray and send to the bedside",
      "Perform hand hygiene",
      "Dispose off used items and decontaminate tray"
    ],
    "answer": "Set tray and send to the bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Set tray and send to the bedside",
      "Report to appropriate officer",
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Hold medicine dropper almost horizontally, steady patient’s head to absorb excess ear drops"
    ],
    "answer": "Check medication against the treatment chart (manual or electronic) for the right dosage",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which nursing action is required at this stage of instillation of ear drops?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Confirm the ear for their instillation by first inspecting unaffected ear then the affected ear"
    ],
    "answer": "Confirm the ear for their instillation by first inspecting unaffected ear then the affected ear",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for instillation of ear drops, what should guide the nurse's choice of position?",
    "options": [
      "Position patient in sitting up or lying down with the affected ear up",
      "Hold auricle upward, backward and outward to straighten the auditory canal of an adult. Hold it downward in a child",
      "Explain procedure to patient (Refer to steps)",
      "Assist patient into a desirable position"
    ],
    "answer": "Position patient in sitting up or lying down with the affected ear up",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "To complete instillation of ear drops safely, which action should the nurse take at this point?",
    "options": [
      "Ensure patient’s right to know/consent and to refuse medication",
      "Hold auricle upward, backward and outward to straighten the auditory canal of an adult. Hold it downward in a child",
      "Dispose off used items and decontaminate tray",
      "Clean external auditory canal with sterile swab stick if there is a discharge"
    ],
    "answer": "Hold auricle upward, backward and outward to straighten the auditory canal of an adult. Hold it downward in a child",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of instillation of ear drops, which principle protects the reliability of the result?",
    "options": [
      "Report to appropriate officer",
      "Instruct patient to remain lying down with ear upward for about 5 minutes if necessary",
      "Clean external auditory canal with sterile swab stick if there is a discharge",
      "Set tray and send to the bedside"
    ],
    "answer": "Clean external auditory canal with sterile swab stick if there is a discharge",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "Which nursing action is required at this stage of instillation of ear drops?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Instruct patient to remain lying down with ear upward for about 5 minutes if necessary"
    ],
    "answer": "Instruct patient to remain lying down with ear upward for about 5 minutes if necessary",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out instillation of ear drops. Which action best matches this part of the procedure?",
    "options": [
      "Hold medicine dropper almost horizontally, steady patient’s head to absorb excess ear drops",
      "Explain procedure to patient (Refer to steps)",
      "Assist patient into a desirable position",
      "Confirm the ear for their instillation by first inspecting unaffected ear then the affected ear"
    ],
    "answer": "Hold medicine dropper almost horizontally, steady patient’s head to absorb excess ear drops",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After completing this part of instillation of ear drops, what makes the clinical record useful for continuity of care?",
    "options": [
      "Remain with patient for five (5) minutes if a child",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Hold auricle upward, backward and outward to straighten the auditory canal of an adult. Hold it downward in a child",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "When positioning the patient for instillation of ear drops, what should guide the nurse's choice of position?",
    "options": [
      "Clean external auditory canal with sterile swab stick if there is a discharge",
      "Perform hand hygiene",
      "Assist patient into a desirable position",
      "Report to appropriate officer"
    ],
    "answer": "Assist patient into a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Which nursing action is required at this stage of instillation of ear drops?",
    "options": [
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Instruct patient to remain lying down with ear upward for about 5 minutes if necessary",
      "Remain with patient for five (5) minutes if a child"
    ],
    "answer": "Remain with patient for five (5) minutes if a child",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After the hands-on part of instillation of ear drops, how should used equipment and waste be managed?",
    "options": [
      "Dispose off used items and decontaminate tray",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Confirm the ear for their instillation by first inspecting unaffected ear then the affected ear",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Dispose off used items and decontaminate tray",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with instillation of ear drops, what infection-prevention action is required at this point?",
    "options": [
      "Hold auricle upward, backward and outward to straighten the auditory canal of an adult. Hold it downward in a child",
      "Perform hand hygiene",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Remain with patient for five (5) minutes if a child"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which step should be performed now during instillation of ear drops?",
    "options": [
      "Perform hand hygiene",
      "Remain with patient for five (5) minutes if a child",
      "Report to appropriate officer",
      "Clean external auditory canal with sterile swab stick if there is a discharge"
    ],
    "answer": "Report to appropriate officer",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },
  {
    id: "rgn-053",
    title: "ADMINISTRATION OF VAGINAL MEDICATION",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "It is the aseptic administration of medication into the vagina. These medications come in the form of creams, jellies, foams and pessaries.",
    purpose: [],
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
  "A tray containing the following:",
  "Vaginal medication and applicator",
  "Perineal Wipes",
  "Disposable gloves",
  "Mackintosh and dressing towel",
  "Receiver for used items",
  "Treatment Chart (Manual or Electronic)"
],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain procedure to patient (Refer to steps)",
  "Ensure patient’s right to know/consent and to refuse medication",
  "Perform hand hygiene",
  "Send tray to bedside",
  "Encourage patient to void",
  "Provide privacy",
  "Assist patient into lithotomy position with the upper leg flexed",
  "Protect bed with mackintosh and dressing towel at the buttocks",
  "Fold back the top bedclothes to expose the perineal area",
  "Perform hand hygiene and wear gloves",
  "Assess and clean the perineal area with wipes",
  "Remove gloves and perform hand hygiene",
  "Wear gloves and unwrap the medication",
  "Remove the medication and attach to the applicator as per manufacturer’s instructions",
  "Encourage the patient to relax by breathing through the mouth",
  "Expose the vaginal orifice with your non-dominant hand",
  "Insert the applicator gently into the posterior wall of the vagina",
  "Slowly push the plunger until the applicator is empty",
  "Remove the applicator and place in a receiver",
  "Dry perineal area and ask the patient to remain in the supine position for at least ten (10) – fifteen (15) minutes",
  "Remove gloves and perform hand hygiene",
  "Dispose off used items and decontaminate applicator and tray",
  "Document procedure on treatment chart (manual or electronic) and nurses notes"
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
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Perform hand hygiene",
      "Remove the medication and attach to the applicator as per manufacturer’s instructions",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete administration of vaginal medication safely, which action should the nurse take at this point?",
    "options": [
      "Fold back the top bedclothes to expose the perineal area",
      "Establish rapport (Refer to steps)",
      "Perform hand hygiene and wear gloves",
      "Dispose off used items and decontaminate applicator and tray"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of vaginal medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Encourage patient to void",
      "Expose the vaginal orifice with your non-dominant hand",
      "Explain procedure to patient (Refer to steps)",
      "Insert the applicator gently into the posterior wall of the vagina"
    ],
    "answer": "Explain procedure to patient (Refer to steps)",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before carrying out administration of vaginal medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Remove gloves and perform hand hygiene",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Ensure patient’s right to know/consent and to refuse medication",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with administration of vaginal medication, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Protect bed with mackintosh and dressing towel at the buttocks",
      "Remove the applicator and place in a receiver",
      "Assist patient into lithotomy position with the upper leg flexed"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete administration of vaginal medication safely, which action should the nurse take at this point?",
    "options": [
      "Remove the medication and attach to the applicator as per manufacturer’s instructions",
      "Send tray to bedside",
      "Encourage the patient to relax by breathing through the mouth",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Send tray to bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of vaginal medication?",
    "options": [
      "Perform hand hygiene and wear gloves",
      "Dispose off used items and decontaminate applicator and tray",
      "Encourage patient to void",
      "Document procedure on treatment chart (manual or electronic) and nurses notes"
    ],
    "answer": "Encourage patient to void",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "A patient is about to undergo administration of vaginal medication. Which action protects their dignity during preparation?",
    "options": [
      "Encourage patient to void",
      "Insert the applicator gently into the posterior wall of the vagina",
      "Send tray to bedside",
      "Provide privacy"
    ],
    "answer": "Provide privacy",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "When positioning the patient for administration of vaginal medication, what should guide the nurse's choice of position?",
    "options": [
      "Assist patient into lithotomy position with the upper leg flexed",
      "Wear gloves and unwrap the medication",
      "Establish rapport (Refer to steps)",
      "Remove gloves and perform hand hygiene"
    ],
    "answer": "Assist patient into lithotomy position with the upper leg flexed",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "To complete administration of vaginal medication safely, which action should the nurse take at this point?",
    "options": [
      "Remove the applicator and place in a receiver",
      "Protect bed with mackintosh and dressing towel at the buttocks",
      "Dry perineal area and ask the patient to remain in the supine position for at least ten (10) – fifteen (15) minutes",
      "Assist patient into lithotomy position with the upper leg flexed"
    ],
    "answer": "Protect bed with mackintosh and dressing towel at the buttocks",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of vaginal medication?",
    "options": [
      "Encourage the patient to relax by breathing through the mouth",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Fold back the top bedclothes to expose the perineal area",
      "Perform hand hygiene"
    ],
    "answer": "Fold back the top bedclothes to expose the perineal area",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with administration of vaginal medication, what infection-prevention action is required at this point?",
    "options": [
      "Assess and clean the perineal area with wipes",
      "Document procedure on treatment chart (manual or electronic) and nurses notes",
      "Fold back the top bedclothes to expose the perineal area",
      "Perform hand hygiene and wear gloves"
    ],
    "answer": "Perform hand hygiene and wear gloves",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "The nurse is carrying out administration of vaginal medication. Which action best matches this part of the procedure?",
    "options": [
      "Assess and clean the perineal area with wipes",
      "Slowly push the plunger until the applicator is empty",
      "Encourage patient to void",
      "Insert the applicator gently into the posterior wall of the vagina"
    ],
    "answer": "Assess and clean the perineal area with wipes",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with administration of vaginal medication, what infection-prevention action is required at this point?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Remove gloves and perform hand hygiene",
      "Explain procedure to patient (Refer to steps)",
      "Wear gloves and unwrap the medication"
    ],
    "answer": "Remove gloves and perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Dry perineal area and ask the patient to remain in the supine position for at least ten (10) – fifteen (15) minutes",
      "Assist patient into lithotomy position with the upper leg flexed",
      "Wear gloves and unwrap the medication",
      "Protect bed with mackintosh and dressing towel at the buttocks"
    ],
    "answer": "Wear gloves and unwrap the medication",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Expose the vaginal orifice with your non-dominant hand",
      "Perform hand hygiene",
      "Encourage the patient to relax by breathing through the mouth",
      "Remove the medication and attach to the applicator as per manufacturer’s instructions"
    ],
    "answer": "Remove the medication and attach to the applicator as per manufacturer’s instructions",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "The nurse is carrying out administration of vaginal medication. Which action best matches this part of the procedure?",
    "options": [
      "Encourage the patient to relax by breathing through the mouth",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Perform hand hygiene and wear gloves",
      "Document procedure on treatment chart (manual or electronic) and nurses notes"
    ],
    "answer": "Encourage the patient to relax by breathing through the mouth",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of vaginal medication safely, which action should the nurse take at this point?",
    "options": [
      "Encourage patient to void",
      "Expose the vaginal orifice with your non-dominant hand",
      "Provide privacy",
      "Slowly push the plunger until the applicator is empty"
    ],
    "answer": "Expose the vaginal orifice with your non-dominant hand",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of vaginal medication?",
    "options": [
      "Explain procedure to patient (Refer to steps)",
      "Remove gloves and perform hand hygiene",
      "Insert the applicator gently into the posterior wall of the vagina",
      "Wear gloves and unwrap the medication"
    ],
    "answer": "Insert the applicator gently into the posterior wall of the vagina",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of vaginal medication?",
    "options": [
      "Dispose off used items and decontaminate applicator and tray",
      "Protect bed with mackintosh and dressing towel at the buttocks",
      "Dry perineal area and ask the patient to remain in the supine position for at least ten (10) – fifteen (15) minutes",
      "Slowly push the plunger until the applicator is empty"
    ],
    "answer": "Slowly push the plunger until the applicator is empty",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of vaginal medication. Which action best matches this part of the procedure?",
    "options": [
      "Remove the applicator and place in a receiver",
      "Send tray to bedside",
      "Encourage the patient to relax by breathing through the mouth",
      "Perform hand hygiene"
    ],
    "answer": "Remove the applicator and place in a receiver",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of vaginal medication, what should guide the nurse's choice of position?",
    "options": [
      "Perform hand hygiene and wear gloves",
      "Dry perineal area and ask the patient to remain in the supine position for at least ten (10) – fifteen (15) minutes",
      "Assess and clean the perineal area with wipes",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date"
    ],
    "answer": "Dry perineal area and ask the patient to remain in the supine position for at least ten (10) – fifteen (15) minutes",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Before proceeding with administration of vaginal medication, what infection-prevention action is required at this point?",
    "options": [
      "Provide privacy",
      "Slowly push the plunger until the applicator is empty",
      "Remove gloves and perform hand hygiene",
      "Remove the applicator and place in a receiver"
    ],
    "answer": "Remove gloves and perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "After the hands-on part of administration of vaginal medication, how should used equipment and waste be managed?",
    "options": [
      "Ensure patient’s right to know/consent and to refuse medication",
      "Wear gloves and unwrap the medication",
      "Explain procedure to patient (Refer to steps)",
      "Dispose off used items and decontaminate applicator and tray"
    ],
    "answer": "Dispose off used items and decontaminate applicator and tray",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "After completing this part of administration of vaginal medication, what makes the clinical record useful for continuity of care?",
    "options": [
      "Document procedure on treatment chart (manual or electronic) and nurses notes",
      "Fold back the top bedclothes to expose the perineal area",
      "Dry perineal area and ask the patient to remain in the supine position for at least ten (10) – fifteen (15) minutes",
      "Protect bed with mackintosh and dressing towel at the buttocks"
    ],
    "answer": "Document procedure on treatment chart (manual or electronic) and nurses notes",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  }
],
  },
  {
    id: "rgn-054",
    title: "COLLECTION OF BLOOD SPECIMENS",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "Blood specimens are required for numerous investigations e.g. full blood count, white blood cells and erythrocyte sedimentation rate. Among others are grouping and cross matching, culture and sensitivity, blood urea, electrolytes and creatinine. The amount required range from a few drops to 10mls from the capillaries or veins depending on the test requested. Two types of bottles or tubes are used – plain/universal or bottles containing some chemical substance or culture medium.",
    purpose: [],
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
  "A tray with the following:",
  "Sterile syringes and needles",
  "Antimicrobial solution",
  "Appropriate specimen bottle",
  "Dry cotton wool swabs in a gallipot",
  "Disposable gloves",
  "Tourniquet",
  "Adhesive strip",
  "Receiver for used items",
  "Appropriate laboratory or specimen form",
  "Appropriate PPE’s e.g. apron",
  "Sharps container"
],
    steps: [
  "Establish rapport (Refer to steps)",
  "Explain procedure to the patient (Refer to steps)",
  "Perform hand hygiene",
  "Take tray and send to the bedside",
  "Provide privacy",
  "Protect the bed with a mackintosh and a dressing towel",
  "Assist patient into a desirable position",
  "Assist the doctor or laboratory technician to take the sample",
  "Dispose off used items and decontaminate the tray",
  "Ensure all needles are disposed off in the sharps container",
  "Ensure labelled specimen with signed laboratory forms are sent to the laboratory",
  "\\n. If the nurse is taking the blood specimen then the following steps should be followed after step 7",
  "Choose a site preferably on the forearm",
  "Apply tourniquet to locate a prominent vein",
  "Clean the site with antimicrobial solution",
  "Insert the needle gently with syringe attached into the vein at an angle of 45",
  "Withdraw the required amount of blood",
  "Release the tourniquet",
  "Remove the needle gently from the vein, apply a dry swab to the area immediately and hold it in place with an adhesive strip",
  "Disconnect needle from syringe, poor blood into specimen bottle",
  "Ensure specimen container is well labelled",
  "Perform hand hygiene"
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
    quiz: [
  {
    "question": "The nurse is carrying out collection of blood specimens. Which action best matches this part of the procedure?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Provide privacy",
      "Insert the needle gently with syringe attached into the vein at an angle of 45",
      "Assist patient into a desirable position"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out collection of blood specimens, what should the nurse do to support informed cooperation?",
    "options": [
      "Apply tourniquet to locate a prominent vein",
      "Explain procedure to the patient (Refer to steps)",
      "\\n. If the nurse is taking the blood specimen then the following steps should be followed after step 7",
      "Perform hand hygiene"
    ],
    "answer": "Explain procedure to the patient (Refer to steps)",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with collection of blood specimens, what infection-prevention action is required at this point?",
    "options": [
      "Ensure all needles are disposed off in the sharps container",
      "Ensure specimen container is well labelled",
      "Perform hand hygiene",
      "Remove the needle gently from the vein, apply a dry swab to the area immediately and hold it in place with an adhesive strip"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which nursing action is required at this stage of collection of blood specimens?",
    "options": [
      "Protect the bed with a mackintosh and a dressing towel",
      "Withdraw the required amount of blood",
      "Assist the doctor or laboratory technician to take the sample",
      "Take tray and send to the bedside"
    ],
    "answer": "Take tray and send to the bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "A patient is about to undergo collection of blood specimens. Which action protects their dignity during preparation?",
    "options": [
      "Provide privacy",
      "Choose a site preferably on the forearm",
      "Perform hand hygiene",
      "Clean the site with antimicrobial solution"
    ],
    "answer": "Provide privacy",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "To complete collection of blood specimens safely, which action should the nurse take at this point?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Protect the bed with a mackintosh and a dressing towel",
      "Disconnect needle from syringe, poor blood into specimen bottle",
      "Ensure labelled specimen with signed laboratory forms are sent to the laboratory"
    ],
    "answer": "Protect the bed with a mackintosh and a dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for collection of blood specimens, what should guide the nurse's choice of position?",
    "options": [
      "Release the tourniquet",
      "Dispose off used items and decontaminate the tray",
      "Assist patient into a desirable position",
      "Protect the bed with a mackintosh and a dressing towel"
    ],
    "answer": "Assist patient into a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "When collecting a specimen as part of collection of blood specimens, which principle protects the reliability of the result?",
    "options": [
      "Apply tourniquet to locate a prominent vein",
      "Take tray and send to the bedside",
      "Insert the needle gently with syringe attached into the vein at an angle of 45",
      "Assist the doctor or laboratory technician to take the sample"
    ],
    "answer": "Assist the doctor or laboratory technician to take the sample",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "After the hands-on part of collection of blood specimens, how should used equipment and waste be managed?",
    "options": [
      "Dispose off used items and decontaminate the tray",
      "Ensure specimen container is well labelled",
      "\\n. If the nurse is taking the blood specimen then the following steps should be followed after step 7",
      "Explain procedure to the patient (Refer to steps)"
    ],
    "answer": "Dispose off used items and decontaminate the tray",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "After the hands-on part of collection of blood specimens, how should used equipment and waste be managed?",
    "options": [
      "Dispose off used items and decontaminate the tray",
      "Ensure all needles are disposed off in the sharps container",
      "Assist patient into a desirable position",
      "Remove the needle gently from the vein, apply a dry swab to the area immediately and hold it in place with an adhesive strip"
    ],
    "answer": "Ensure all needles are disposed off in the sharps container",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "When collecting a specimen as part of collection of blood specimens, which principle protects the reliability of the result?",
    "options": [
      "Provide privacy",
      "Withdraw the required amount of blood",
      "Ensure labelled specimen with signed laboratory forms are sent to the laboratory",
      "Clean the site with antimicrobial solution"
    ],
    "answer": "Ensure labelled specimen with signed laboratory forms are sent to the laboratory",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "When collecting a specimen as part of collection of blood specimens, which principle protects the reliability of the result?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Choose a site preferably on the forearm",
      "Perform hand hygiene",
      "\\n. If the nurse is taking the blood specimen then the following steps should be followed after step 7"
    ],
    "answer": "\\\\n. If the nurse is taking the blood specimen then the following steps should be followed after step 7",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "The nurse is carrying out collection of blood specimens. Which action best matches this part of the procedure?",
    "options": [
      "Choose a site preferably on the forearm",
      "Assist the doctor or laboratory technician to take the sample",
      "Disconnect needle from syringe, poor blood into specimen bottle",
      "Ensure all needles are disposed off in the sharps container"
    ],
    "answer": "Choose a site preferably on the forearm",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete collection of blood specimens safely, which action should the nurse take at this point?",
    "options": [
      "Release the tourniquet",
      "Apply tourniquet to locate a prominent vein",
      "Insert the needle gently with syringe attached into the vein at an angle of 45",
      "Protect the bed with a mackintosh and a dressing towel"
    ],
    "answer": "Apply tourniquet to locate a prominent vein",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during collection of blood specimens?",
    "options": [
      "Choose a site preferably on the forearm",
      "Take tray and send to the bedside",
      "Clean the site with antimicrobial solution",
      "Explain procedure to the patient (Refer to steps)"
    ],
    "answer": "Clean the site with antimicrobial solution",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of collection of blood specimens?",
    "options": [
      "Dispose off used items and decontaminate the tray",
      "Ensure specimen container is well labelled",
      "Ensure labelled specimen with signed laboratory forms are sent to the laboratory",
      "Insert the needle gently with syringe attached into the vein at an angle of 45"
    ],
    "answer": "Insert the needle gently with syringe attached into the vein at an angle of 45",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out collection of blood specimens. Which action best matches this part of the procedure?",
    "options": [
      "Withdraw the required amount of blood",
      "Insert the needle gently with syringe attached into the vein at an angle of 45",
      "Assist patient into a desirable position",
      "Remove the needle gently from the vein, apply a dry swab to the area immediately and hold it in place with an adhesive strip"
    ],
    "answer": "Withdraw the required amount of blood",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete collection of blood specimens safely, which action should the nurse take at this point?",
    "options": [
      "Provide privacy",
      "Release the tourniquet",
      "Perform hand hygiene",
      "Apply tourniquet to locate a prominent vein"
    ],
    "answer": "Release the tourniquet",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of collection of blood specimens, which principle protects the reliability of the result?",
    "options": [
      "Establish rapport (Refer to steps)",
      "\\n. If the nurse is taking the blood specimen then the following steps should be followed after step 7",
      "Remove the needle gently from the vein, apply a dry swab to the area immediately and hold it in place with an adhesive strip",
      "Ensure all needles are disposed off in the sharps container"
    ],
    "answer": "Remove the needle gently from the vein, apply a dry swab to the area immediately and hold it in place with an adhesive strip",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "When collecting a specimen as part of collection of blood specimens, which principle protects the reliability of the result?",
    "options": [
      "Withdraw the required amount of blood",
      "Assist the doctor or laboratory technician to take the sample",
      "Remove the needle gently from the vein, apply a dry swab to the area immediately and hold it in place with an adhesive strip",
      "Disconnect needle from syringe, poor blood into specimen bottle"
    ],
    "answer": "Disconnect needle from syringe, poor blood into specimen bottle",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "When collecting a specimen as part of collection of blood specimens, which principle protects the reliability of the result?",
    "options": [
      "Ensure specimen container is well labelled",
      "Take tray and send to the bedside",
      "Clean the site with antimicrobial solution",
      "Protect the bed with a mackintosh and a dressing towel"
    ],
    "answer": "Ensure specimen container is well labelled",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "Before proceeding with collection of blood specimens, what infection-prevention action is required at this point?",
    "options": [
      "Apply tourniquet to locate a prominent vein",
      "Perform hand hygiene",
      "\\n. If the nurse is taking the blood specimen then the following steps should be followed after step 7",
      "Explain procedure to the patient (Refer to steps)"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  }
],
  },
  {
    id: "rgn-055",
    title: "COLLECTING A SINGLE VOIDED SPECIMEN",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "It is the process of collecting urine from a patient/client to aid in the diagnosis of a condition.",
    purpose: [],
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
  "Laboratory form",
  "Specimen container",
  "Bedpan or urinal",
  "Disposable gloves",
  "Tissue",
  "Ballpoint pen",
  "Mackintosh and dressing towel"
],
    steps: [
  "Confirm physician/doctor’s request against the specimen form with patient’s name, date and content of urinalysis (manual or electronic)",
  "Establish rapport with patient (Refer to steps)",
  "Explain the procedure (Refer to steps)",
  "Assemble requirements",
  "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name",
  "Protect the bed with mackintosh and a dressing towel",
  "Perform hand hygiene and put on gloves",
  "Assist the patient/client to void into a clean bedpan/urinal",
  "Pour about 10-20 mL of urine into the labeled specimen bottle or container and cover the bottle or container",
  "Discard the excess urine",
  "Dispose off used items",
  "Remove gloves and perform hand hygiene.",
  "Send the specimen bottle or container to the laboratory immediately with the specimen form",
  "Document the procedure in the designated place"
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
    quiz: [
  {
    "question": "When collecting a specimen as part of collecting a single voided specimen, which principle protects the reliability of the result?",
    "options": [
      "Confirm physician/doctor’s request against the specimen form with patient’s name, date and content of urinalysis (manual or electronic)",
      "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name",
      "Explain the procedure (Refer to steps)",
      "Document the procedure in the designated place"
    ],
    "answer": "Confirm physician/doctor’s request against the specimen form with patient’s name, date and content of urinalysis (manual or electronic)",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "To complete collecting a single voided specimen safely, which action should the nurse take at this point?",
    "options": [
      "Assist the patient/client to void into a clean bedpan/urinal",
      "Establish rapport with patient (Refer to steps)",
      "Remove gloves and perform hand hygiene.",
      "Discard the excess urine"
    ],
    "answer": "Establish rapport with patient (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out collecting a single voided specimen, what should the nurse do to support informed cooperation?",
    "options": [
      "Assemble requirements",
      "Confirm physician/doctor’s request against the specimen form with patient’s name, date and content of urinalysis (manual or electronic)",
      "Explain the procedure (Refer to steps)",
      "Protect the bed with mackintosh and a dressing towel"
    ],
    "answer": "Explain the procedure (Refer to steps)",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Which nursing action is required at this stage of collecting a single voided specimen?",
    "options": [
      "Send the specimen bottle or container to the laboratory immediately with the specimen form",
      "Dispose off used items",
      "Pour about 10-20 mL of urine into the labeled specimen bottle or container and cover the bottle or container",
      "Assemble requirements"
    ],
    "answer": "Assemble requirements",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out collecting a single voided specimen. Which action best matches this part of the procedure?",
    "options": [
      "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name",
      "Perform hand hygiene and put on gloves",
      "Assemble requirements",
      "Establish rapport with patient (Refer to steps)"
    ],
    "answer": "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete collecting a single voided specimen safely, which action should the nurse take at this point?",
    "options": [
      "Discard the excess urine",
      "Protect the bed with mackintosh and a dressing towel",
      "Document the procedure in the designated place",
      "Remove gloves and perform hand hygiene."
    ],
    "answer": "Protect the bed with mackintosh and a dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with collecting a single voided specimen, what infection-prevention action is required at this point?",
    "options": [
      "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name",
      "Explain the procedure (Refer to steps)",
      "Perform hand hygiene and put on gloves",
      "Assist the patient/client to void into a clean bedpan/urinal"
    ],
    "answer": "Perform hand hygiene and put on gloves",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which nursing action is required at this stage of collecting a single voided specimen?",
    "options": [
      "Confirm physician/doctor’s request against the specimen form with patient’s name, date and content of urinalysis (manual or electronic)",
      "Send the specimen bottle or container to the laboratory immediately with the specimen form",
      "Dispose off used items",
      "Assist the patient/client to void into a clean bedpan/urinal"
    ],
    "answer": "Assist the patient/client to void into a clean bedpan/urinal",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of collecting a single voided specimen, which principle protects the reliability of the result?",
    "options": [
      "Pour about 10-20 mL of urine into the labeled specimen bottle or container and cover the bottle or container",
      "Assist the patient/client to void into a clean bedpan/urinal",
      "Protect the bed with mackintosh and a dressing towel",
      "Assemble requirements"
    ],
    "answer": "Pour about 10-20 mL of urine into the labeled specimen bottle or container and cover the bottle or container",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "When collecting a specimen as part of collecting a single voided specimen, which principle protects the reliability of the result?",
    "options": [
      "Remove gloves and perform hand hygiene.",
      "Discard the excess urine",
      "Establish rapport with patient (Refer to steps)",
      "Document the procedure in the designated place"
    ],
    "answer": "Discard the excess urine",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "After the hands-on part of collecting a single voided specimen, how should used equipment and waste be managed?",
    "options": [
      "Perform hand hygiene and put on gloves",
      "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name",
      "Dispose off used items",
      "Pour about 10-20 mL of urine into the labeled specimen bottle or container and cover the bottle or container"
    ],
    "answer": "Dispose off used items",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with collecting a single voided specimen, what infection-prevention action is required at this point?",
    "options": [
      "Explain the procedure (Refer to steps)",
      "Confirm physician/doctor’s request against the specimen form with patient’s name, date and content of urinalysis (manual or electronic)",
      "Send the specimen bottle or container to the laboratory immediately with the specimen form",
      "Remove gloves and perform hand hygiene."
    ],
    "answer": "Remove gloves and perform hand hygiene.",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "When collecting a specimen as part of collecting a single voided specimen, which principle protects the reliability of the result?",
    "options": [
      "Send the specimen bottle or container to the laboratory immediately with the specimen form",
      "Discard the excess urine",
      "Assist the patient/client to void into a clean bedpan/urinal",
      "Protect the bed with mackintosh and a dressing towel"
    ],
    "answer": "Send the specimen bottle or container to the laboratory immediately with the specimen form",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "After completing this part of collecting a single voided specimen, what makes the clinical record useful for continuity of care?",
    "options": [
      "Send the specimen bottle or container to the laboratory immediately with the specimen form",
      "Document the procedure in the designated place",
      "Assemble requirements",
      "Establish rapport with patient (Refer to steps)"
    ],
    "answer": "Document the procedure in the designated place",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  }
],
  },
  {
    id: "rgn-056",
    title: "COLLECTING A URINE SPECIMEN FROM A RETENTION CATHETER",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "It is the process of collecting urine from a patient/client to aid in the diagnosis of a condition.",
    purpose: [],
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
  "Laboratory form",
  "Specimen container",
  "Bedpan or urinal",
  "Disposable gloves",
  "Tissue",
  "Ballpoint pen",
  "Mackintosh and dressing towel",
  "Tray containing the following:",
  "Antimicrobial solution",
  "Cotton wool swabs in a gallipot",
  "10-20-mLsyringe with 21-25-gauge needle",
  "Clamp or rubber band",
  "Receiver for used items"
],
    steps: [
  "Confirm physician/doctor’s request against the specimen form with patient’s name, date and content of urinalysis (manual or electronic)",
  "Establish rapport with patient (Refer to steps)",
  "Explain the procedure (Refer to steps)",
  "Assemble requirements",
  "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name",
  "Protect the bed with mackintosh and a dressing towel",
  "Assist patient into a supine position and expose the perineal area",
  "Perform hand hygiene and put on gloves",
  "Disconnect the urine bag if attached",
  "Clamp the tubing:",
  "Clamp the drainage tubing or bend the tubing",
  "Allow adequate time for urine collection",
  "Clean the aspiration port with an antimicrobial solution",
  "Withdraw the urine by:",
  "Inserting the needle into the aspiration port to withdraw sufficient amount of urine into the syringe",
  "Allowing the urine to flow from the catheter into a clean container",
  "Transfer the urine to the labeled specimen container",
  "Unclamp the catheter and attach urine bag if necessary",
  "Remove mackintosh and dressing towel",
  "Remove gloves and perform hand hygiene",
  "Reposition patient",
  "Discard the excess urine, dispose of used items and decontaminate tray",
  "Remove gloves and perform hand hygiene",
  "Send the specimen bottle or container to the laboratory immediately with the specimen form",
  "Document the procedure in the designated place"
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
    quiz: [
  {
    "question": "When collecting a specimen as part of collecting a urine specimen from a retention catheter, which principle protects the reliability of the result?",
    "options": [
      "Confirm physician/doctor’s request against the specimen form with patient’s name, date and content of urinalysis (manual or electronic)",
      "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name",
      "Allowing the urine to flow from the catheter into a clean container",
      "Assemble requirements"
    ],
    "answer": "Confirm physician/doctor’s request against the specimen form with patient’s name, date and content of urinalysis (manual or electronic)",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "To complete collecting a urine specimen from a retention catheter safely, which action should the nurse take at this point?",
    "options": [
      "Clamp the drainage tubing or bend the tubing",
      "Establish rapport with patient (Refer to steps)",
      "Allow adequate time for urine collection",
      "Send the specimen bottle or container to the laboratory immediately with the specimen form"
    ],
    "answer": "Establish rapport with patient (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out collecting a urine specimen from a retention catheter, what should the nurse do to support informed cooperation?",
    "options": [
      "Assist patient into a supine position and expose the perineal area",
      "Unclamp the catheter and attach urine bag if necessary",
      "Explain the procedure (Refer to steps)",
      "Remove mackintosh and dressing towel"
    ],
    "answer": "Explain the procedure (Refer to steps)",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Which nursing action is required at this stage of collecting a urine specimen from a retention catheter?",
    "options": [
      "Establish rapport with patient (Refer to steps)",
      "Withdraw the urine by:",
      "Confirm physician/doctor’s request against the specimen form with patient’s name, date and content of urinalysis (manual or electronic)",
      "Assemble requirements"
    ],
    "answer": "Assemble requirements",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out collecting a urine specimen from a retention catheter. Which action best matches this part of the procedure?",
    "options": [
      "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name",
      "Clamp the tubing:",
      "Reposition patient",
      "Disconnect the urine bag if attached"
    ],
    "answer": "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete collecting a urine specimen from a retention catheter safely, which action should the nurse take at this point?",
    "options": [
      "Allowing the urine to flow from the catheter into a clean container",
      "Protect the bed with mackintosh and a dressing towel",
      "Transfer the urine to the labeled specimen container",
      "Assemble requirements"
    ],
    "answer": "Protect the bed with mackintosh and a dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for collecting a urine specimen from a retention catheter, what should guide the nurse's choice of position?",
    "options": [
      "Allow adequate time for urine collection",
      "Send the specimen bottle or container to the laboratory immediately with the specimen form",
      "Assist patient into a supine position and expose the perineal area",
      "Document the procedure in the designated place"
    ],
    "answer": "Assist patient into a supine position and expose the perineal area",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Before proceeding with collecting a urine specimen from a retention catheter, what infection-prevention action is required at this point?",
    "options": [
      "Assist patient into a supine position and expose the perineal area",
      "Remove mackintosh and dressing towel",
      "Protect the bed with mackintosh and a dressing towel",
      "Perform hand hygiene and put on gloves"
    ],
    "answer": "Perform hand hygiene and put on gloves",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "When collecting a specimen as part of collecting a urine specimen from a retention catheter, which principle protects the reliability of the result?",
    "options": [
      "Disconnect the urine bag if attached",
      "Inserting the needle into the aspiration port to withdraw sufficient amount of urine into the syringe",
      "Establish rapport with patient (Refer to steps)",
      "Withdraw the urine by:"
    ],
    "answer": "Disconnect the urine bag if attached",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "During collecting a urine specimen from a retention catheter, what should the nurse verify about any relevant tube or drainage system?",
    "options": [
      "Reposition patient",
      "Clamp the tubing:",
      "Discard the excess urine, dispose of used items and decontaminate tray",
      "Disconnect the urine bag if attached"
    ],
    "answer": "Clamp the tubing:",
    "explanation": "Check that the system is secure, patent and functioning as intended, without kinks or avoidable contamination. Assess output and report unexpected changes."
  },
  {
    "question": "During collecting a urine specimen from a retention catheter, what should the nurse verify about any relevant tube or drainage system?",
    "options": [
      "Transfer the urine to the labeled specimen container",
      "Assemble requirements",
      "Clamp the drainage tubing or bend the tubing",
      "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name"
    ],
    "answer": "Clamp the drainage tubing or bend the tubing",
    "explanation": "Check that the system is secure, patent and functioning as intended, without kinks or avoidable contamination. Assess output and report unexpected changes."
  },
  {
    "question": "When collecting a specimen as part of collecting a urine specimen from a retention catheter, which principle protects the reliability of the result?",
    "options": [
      "Clean the aspiration port with an antimicrobial solution",
      "Document the procedure in the designated place",
      "Clamp the drainage tubing or bend the tubing",
      "Allow adequate time for urine collection"
    ],
    "answer": "Allow adequate time for urine collection",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "The nurse is carrying out collecting a urine specimen from a retention catheter. Which action best matches this part of the procedure?",
    "options": [
      "Clean the aspiration port with an antimicrobial solution",
      "Remove gloves and perform hand hygiene",
      "Assist patient into a supine position and expose the perineal area",
      "Remove mackintosh and dressing towel"
    ],
    "answer": "Clean the aspiration port with an antimicrobial solution",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of collecting a urine specimen from a retention catheter, which principle protects the reliability of the result?",
    "options": [
      "Establish rapport with patient (Refer to steps)",
      "Withdraw the urine by:",
      "Explain the procedure (Refer to steps)",
      "Inserting the needle into the aspiration port to withdraw sufficient amount of urine into the syringe"
    ],
    "answer": "Withdraw the urine by:",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "When collecting a specimen as part of collecting a urine specimen from a retention catheter, which principle protects the reliability of the result?",
    "options": [
      "Discard the excess urine, dispose of used items and decontaminate tray",
      "Disconnect the urine bag if attached",
      "Inserting the needle into the aspiration port to withdraw sufficient amount of urine into the syringe",
      "Clamp the tubing:"
    ],
    "answer": "Inserting the needle into the aspiration port to withdraw sufficient amount of urine into the syringe",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "During collecting a urine specimen from a retention catheter, what should the nurse verify about any relevant tube or drainage system?",
    "options": [
      "Unclamp the catheter and attach urine bag if necessary",
      "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name",
      "Transfer the urine to the labeled specimen container",
      "Allowing the urine to flow from the catheter into a clean container"
    ],
    "answer": "Allowing the urine to flow from the catheter into a clean container",
    "explanation": "Check that the system is secure, patent and functioning as intended, without kinks or avoidable contamination. Assess output and report unexpected changes."
  },
  {
    "question": "When collecting a specimen as part of collecting a urine specimen from a retention catheter, which principle protects the reliability of the result?",
    "options": [
      "Transfer the urine to the labeled specimen container",
      "Confirm physician/doctor’s request against the specimen form with patient’s name, date and content of urinalysis (manual or electronic)",
      "Allow adequate time for urine collection",
      "Document the procedure in the designated place"
    ],
    "answer": "Transfer the urine to the labeled specimen container",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "During collecting a urine specimen from a retention catheter, what should the nurse verify about any relevant tube or drainage system?",
    "options": [
      "Assist patient into a supine position and expose the perineal area",
      "Unclamp the catheter and attach urine bag if necessary",
      "Perform hand hygiene and put on gloves",
      "Remove gloves and perform hand hygiene"
    ],
    "answer": "Unclamp the catheter and attach urine bag if necessary",
    "explanation": "Check that the system is secure, patent and functioning as intended, without kinks or avoidable contamination. Assess output and report unexpected changes."
  },
  {
    "question": "Which step should be performed now during collecting a urine specimen from a retention catheter?",
    "options": [
      "Explain the procedure (Refer to steps)",
      "Withdraw the urine by:",
      "Remove mackintosh and dressing towel",
      "Inserting the needle into the aspiration port to withdraw sufficient amount of urine into the syringe"
    ],
    "answer": "Remove mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with collecting a urine specimen from a retention catheter, what infection-prevention action is required at this point?",
    "options": [
      "Send the specimen bottle or container to the laboratory immediately with the specimen form",
      "Clamp the tubing:",
      "Discard the excess urine, dispose of used items and decontaminate tray",
      "Remove gloves and perform hand hygiene"
    ],
    "answer": "Remove gloves and perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "When positioning the patient for collecting a urine specimen from a retention catheter, what should guide the nurse's choice of position?",
    "options": [
      "Reposition patient",
      "Protect the bed with mackintosh and a dressing towel",
      "Transfer the urine to the labeled specimen container",
      "Label the bottle or container with the date, patient’s name, department identification and physician/doctor’s name"
    ],
    "answer": "Reposition patient",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "After the hands-on part of collecting a urine specimen from a retention catheter, how should used equipment and waste be managed?",
    "options": [
      "Allow adequate time for urine collection",
      "Discard the excess urine, dispose of used items and decontaminate tray",
      "Clean the aspiration port with an antimicrobial solution",
      "Confirm physician/doctor’s request against the specimen form with patient’s name, date and content of urinalysis (manual or electronic)"
    ],
    "answer": "Discard the excess urine, dispose of used items and decontaminate tray",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with collecting a urine specimen from a retention catheter, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene and put on gloves",
      "Remove mackintosh and dressing towel",
      "Remove gloves and perform hand hygiene",
      "Reposition patient"
    ],
    "answer": "Remove gloves and perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "When collecting a specimen as part of collecting a urine specimen from a retention catheter, which principle protects the reliability of the result?",
    "options": [
      "Assemble requirements",
      "Inserting the needle into the aspiration port to withdraw sufficient amount of urine into the syringe",
      "Explain the procedure (Refer to steps)",
      "Send the specimen bottle or container to the laboratory immediately with the specimen form"
    ],
    "answer": "Send the specimen bottle or container to the laboratory immediately with the specimen form",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "After completing this part of collecting a urine specimen from a retention catheter, what makes the clinical record useful for continuity of care?",
    "options": [
      "Document the procedure in the designated place",
      "Clamp the drainage tubing or bend the tubing",
      "Discard the excess urine, dispose of used items and decontaminate tray",
      "Clamp the tubing:"
    ],
    "answer": "Document the procedure in the designated place",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  }
],
  },
];