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

const rgn_039Quiz: ProcedureQuizQuestion[] = [
  q(
    "What should the nurse do before offering a bedpan?",
    [
      "Confirm the patient's identity, explain the procedure and provide privacy",
      "Leave the patient uncovered while collecting equipment",
      "Ask another patient to assist without explanation",
      "Place the bedpan on the floor before speaking to the patient",
    ],
    "Confirm the patient's identity, explain the procedure and provide privacy",
    "Identification, explanation, consent and privacy protect dignity and support safe cooperation."
  ),
  q(
    "Which position is commonly used when assisting a patient onto a bedpan?",
    [
      "Supine with the knees flexed, or supported in a position suitable for the patient",
      "Prone with the face turned into the mattress",
      "Standing unsupported on the bed",
      "Sitting on the bedside locker",
    ],
    "Supine with the knees flexed, or supported in a position suitable for the patient",
    "The patient should be positioned safely and supported according to mobility, condition and facility procedure."
  ),
  q(
    "Why should the bedpan be warmed when appropriate?",
    [
      "To improve comfort and reduce the shock of contact with cold equipment",
      "To sterilize the bedpan at the bedside",
      "To make the patient finish more quickly",
      "To replace cleaning and decontamination",
    ],
    "To improve comfort and reduce the shock of contact with cold equipment",
    "A comfortably warm, clean bedpan can reduce discomfort, but warming does not replace decontamination."
  ),
  q(
    "What should the nurse use when cleaning the patient after bedpan use?",
    [
      "Gloves and appropriate cleansing materials, working from clean to less clean areas",
      "Bare hands and a dry ward towel",
      "The patient's clean clothing",
      "The same wipe repeatedly without regard to contamination",
    ],
    "Gloves and appropriate cleansing materials, working from clean to less clean areas",
    "Gloves and correct cleansing technique reduce exposure and prevent transfer of organisms."
  ),
  q(
    "Why should the nurse stay available while the patient is using the bedpan?",
    [
      "The patient may need help, may become unwell or may need the bedpan removed promptly",
      "The nurse must watch the patient continuously for privacy reasons",
      "The patient cannot use the call bell",
      "The nurse needs to prevent the patient from passing stool",
    ],
    "The patient may need help, may become unwell or may need the bedpan removed promptly",
    "The patient should have privacy while the nurse remains accessible and responds to the call bell."
  ),
  q(
    "What should be inspected before emptying a bedpan?",
    [
      "The contents and any abnormal features relevant to the patient's care",
      "Only the colour of the bedpan",
      "The patient's visitor list",
      "Nothing, because bedpan contents are never clinically relevant",
    ],
    "The contents and any abnormal features relevant to the patient's care",
    "Stool, urine, blood, mucus or unusual features may need measurement, documentation or reporting."
  ),
  q(
    "How should a used bedpan be transported to the sluice?",
    [
      "Covered, without spilling, using the designated route and appropriate PPE",
      "Open and carried through the ward at shoulder height",
      "Wrapped in the patient's clean sheet",
      "Left at the bedside until the next shift",
    ],
    "Covered, without spilling, using the designated route and appropriate PPE",
    "Covering and safe transport reduce odour, spills, exposure and environmental contamination."
  ),
  q(
    "What should the nurse do if the patient reports severe abdominal pain or sees blood?",
    [
      "Stop routine care as appropriate, assess the patient and report promptly",
      "Tell the patient it is expected and leave the ward",
      "Discard the contents without observing them",
      "Give an unprescribed medicine",
    ],
    "Stop routine care as appropriate, assess the patient and report promptly",
    "Severe pain or blood may indicate a complication and requires assessment and escalation."
  ),
  q(
    "Which action reduces infection risk after bedpan use?",
    [
      "Dispose of waste correctly, decontaminate the bedpan according to policy and perform hand hygiene",
      "Rinse the bedpan in the patient's wash basin",
      "Return the unwashed bedpan to the clean equipment shelf",
      "Remove gloves and skip hand hygiene",
    ],
    "Dispose of waste correctly, decontaminate the bedpan according to policy and perform hand hygiene",
    "Correct sluice-room cleaning and hand hygiene prevent transmission between patients and staff."
  ),
  q(
    "What should be documented after serving a bedpan?",
    [
      "The assistance provided, relevant output or observations, patient response and abnormalities reported",
      "Only that the nurse entered the room",
      "Only the patient's meal intake",
      "Nothing unless the patient requested documentation",
    ],
    "The assistance provided, relevant output or observations, patient response and abnormalities reported",
    "Documentation should communicate elimination findings, care given, response and any escalation."
  ),
];

const rgn_040Quiz: ProcedureQuizQuestion[] = [
  q(
    "Which checks are required before giving an oral tablet or capsule?",
    [
      "Correct patient, medication, dose, route, time, indication, allergies, expiry and prescription",
      "Only the colour of the tablet",
      "The patient's visitor's name and occupation",
      "The ward menu and visiting time",
    ],
    "Correct patient, medication, dose, route, time, indication, allergies, expiry and prescription",
    "Medication safety requires systematic checks against the prescription and patient record."
  ),
  q(
    "How should the nurse confirm the patient's identity before administration?",
    [
      "Use approved identifiers and compare them with the medication record",
      "Ask another patient to identify the person",
      "Use the bed number as the only identifier",
      "Identify the patient by appearance alone",
    ],
    "Use approved identifiers and compare them with the medication record",
    "Approved identifiers reduce the risk of administering medicine to the wrong patient."
  ),
  q(
    "What is the patient's right regarding a prescribed oral medication?",
    [
      "To receive an explanation and to refuse, with the refusal managed and documented appropriately",
      "To receive it without knowing its name or purpose",
      "To be forced to swallow it immediately",
      "To change the dose without consulting the prescriber",
    ],
    "To receive an explanation and to refuse, with the refusal managed and documented appropriately",
    "The patient has a right to information and refusal; concerns should be discussed and escalated rather than hidden."
  ),
  q(
    "When should a tablet be crushed?",
    [
      "Only after confirming that it is safe and authorised for that formulation",
      "Whenever the patient dislikes swallowing tablets",
      "Every time a tablet is difficult to open",
      "When the medication has expired",
    ],
    "Only after confirming that it is safe and authorised for that formulation",
    "Modified-release, enteric-coated and some other medicines must not be crushed without appropriate confirmation."
  ),
  q(
    "What should the nurse assess before giving an oral medication?",
    [
      "The patient's ability to swallow, level of consciousness, allergies and relevant precautions",
      "Only whether the patient is wearing shoes",
      "Whether the patient has visitors",
      "Only the time of the previous meal",
    ],
    "The patient's ability to swallow, level of consciousness, allergies and relevant precautions",
    "Swallowing ability and consciousness affect aspiration risk and whether oral administration is appropriate."
  ),
  q(
    "What is the safest position for a patient who can swallow oral medication?",
    [
      "Upright or as upright as the patient's condition allows",
      "Flat on the abdomen",
      "With the head lower than the chest",
      "Standing on the bed",
    ],
    "Upright or as upright as the patient's condition allows",
    "An upright position supports swallowing and reduces aspiration risk."
  ),
  q(
    "How should the nurse confirm that an oral tablet has been taken?",
    [
      "Observe the patient swallow it and offer water when appropriate",
      "Leave the tablet on the locker",
      "Assume it was swallowed because it was handed over",
      "Ask the patient's visitor to hide it",
    ],
    "Observe the patient swallow it and offer water when appropriate",
    "Direct observation helps prevent missed doses, accidental loss and unsafe administration."
  ),
  q(
    "What should the nurse do if the patient vomits soon after taking the medication?",
    [
      "Assess the patient, retain relevant information and report for advice before repeating any dose",
      "Automatically give a second dose",
      "Ignore the event because the medication was prescribed",
      "Give a different medicine without an order",
    ],
    "Assess the patient, retain relevant information and report for advice before repeating any dose",
    "Repeating a dose without assessment may cause overdose; the prescriber or appropriate senior clinician should advise."
  ),
  q(
    "Which action supports infection prevention during oral medication administration?",
    [
      "Perform hand hygiene and avoid contaminating medication, cups and equipment",
      "Share one medicine cup among patients",
      "Place tablets directly on a dirty surface",
      "Use the same unclean spoon for every patient",
    ],
    "Perform hand hygiene and avoid contaminating medication, cups and equipment",
    "Hand hygiene and clean equipment reduce cross-contamination during medication rounds."
  ),
  q(
    "What must be recorded after giving an oral medication?",
    [
      "The medication, dose, route, time, response and any refusal or adverse reaction",
      "Only that the medication trolley was used",
      "Only the patient's bed number",
      "Nothing unless the patient complained",
    ],
    "The medication, dose, route, time, response and any refusal or adverse reaction",
    "Accurate records support continuity, legal accountability and detection of adverse effects."
  ),
];

const rgn_041Quiz: ProcedureQuizQuestion[] = [
  q(
    "Why should an oral mixture be shaken when the label or instructions require it?",
    [
      "To distribute suspended medication evenly before measuring the dose",
      "To increase the prescribed dose",
      "To remove the expiry date",
      "To make the bottle sterile",
    ],
    "To distribute suspended medication evenly before measuring the dose",
    "Suspensions may settle, so gentle shaking helps ensure the measured dose contains the intended concentration."
  ),
  q(
    "At what level should a liquid oral dose be measured?",
    [
      "At eye level using the appropriate calibrated measure",
      "Above the nurse's head",
      "Below the waist without looking",
      "By filling the medicine cup to the top",
    ],
    "At eye level using the appropriate calibrated measure",
    "Eye-level measurement reduces parallax error and improves dose accuracy."
  ),
  q(
    "Where should the bottle label face while pouring an oral mixture?",
    [
      "Upward, so any drips do not soil the label",
      "Downward against the bottle",
      "Toward the sink",
      "Away from the nurse so it cannot be read",
    ],
    "Upward, so any drips do not soil the label",
    "Keeping the label uppermost protects it and allows the medication identity to remain visible."
  ),
  q(
    "What should be checked before measuring an oral mixture?",
    [
      "The prescription, patient identifiers, concentration, expiry and required dose",
      "Only the bottle colour",
      "The patient's clothing size",
      "Only whether the bottle is full",
    ],
    "The prescription, patient identifiers, concentration, expiry and required dose",
    "The concentration and dose must be checked carefully because liquid strengths can differ."
  ),
  q(
    "How should the nurse handle the bottle cap while pouring?",
    [
      "Keep the inside of the cap clean and avoid contaminating it",
      "Place it inside the medicine cup",
      "Put it on the floor",
      "Touch the inside with a used glove",
    ],
    "Keep the inside of the cap clean and avoid contaminating it",
    "Preventing contamination protects the remaining medication and patient safety."
  ),
  q(
    "What should be done if the prescribed dose is difficult to measure accurately?",
    [
      "Use an approved calibrated device and seek clarification if the dose or concentration is unclear",
      "Estimate the dose using a household spoon",
      "Double the amount to compensate",
      "Ask the patient to choose the amount",
    ],
    "Use an approved calibrated device and seek clarification if the dose or concentration is unclear",
    "Liquid medication errors can occur with inaccurate measures or unclear concentrations."
  ),
  q(
    "What position should the patient assume before taking an oral mixture?",
    [
      "Upright or as upright as possible, with swallowing ability assessed",
      "Face down with the head turned away",
      "Flat with the head lower than the body",
      "Standing on the mattress",
    ],
    "Upright or as upright as possible, with swallowing ability assessed",
    "Positioning and assessment reduce aspiration risk and support safe swallowing."
  ),
  q(
    "What should the nurse do after giving an oral mixture?",
    [
      "Offer water if appropriate, observe for response and clean equipment according to policy",
      "Leave the bottle open at the bedside",
      "Store the medicine cup with the next patient's equipment",
      "Record the dose before checking whether it was taken",
    ],
    "Offer water if appropriate, observe for response and clean equipment according to policy",
    "Aftercare supports comfort, observation and infection prevention."
  ),
  q(
    "What should be done if the patient refuses the oral mixture?",
    [
      "Explore the reason, do not force it, report as required and document the refusal",
      "Hide it in the patient's food without permission",
      "Give it to another patient",
      "Record it as administered",
    ],
    "Explore the reason, do not force it, report as required and document the refusal",
    "Patients may refuse treatment; the nurse should address concerns and communicate the refusal safely."
  ),
  q(
    "Which information belongs in the medication record after administration?",
    [
      "Medication name, dose, route, time, response, refusal or adverse reaction",
      "Only the colour of the mixture",
      "Only the name of the ward",
      "Only the nurse's break time",
    ],
    "Medication name, dose, route, time, response, refusal or adverse reaction",
    "Complete documentation supports safe continuation of treatment and review of effects."
  ),
];

const rgn_042Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is the first safety check before setting up an intravenous infusion?",
    [
      "Verify the patient, prescription, fluid or medication, dose, route, time, allergies and expiry",
      "Open the giving set before reading the label",
      "Choose a rate based only on the patient's age",
      "Start the infusion before checking the patient",
    ],
    "Verify the patient, prescription, fluid or medication, dose, route, time, allergies and expiry",
    "Verification prevents wrong-patient, wrong-fluid and wrong-rate errors."
  ),
  q(
    "What should be checked in the infusion container before use?",
    [
      "Label, expiry, seal, clarity, colour, particles, leaks and prescribed volume",
      "Only whether the container is heavy",
      "Only the manufacturer's logo",
      "Whether the patient has eaten",
    ],
    "Label, expiry, seal, clarity, colour, particles, leaks and prescribed volume",
    "A damaged, expired or visibly contaminated infusion must not be used."
  ),
  q(
    "Why must air be removed from the giving set before connection?",
    [
      "To reduce the risk of introducing air into the patient's vascular system",
      "To make the fluid more concentrated",
      "To increase the drip rate automatically",
      "To sterilize the cannula",
    ],
    "To reduce the risk of introducing air into the patient's vascular system",
    "Priming the set correctly prevents air from entering the line during infusion."
  ),
  q(
    "Which finding suggests infiltration at a peripheral IV site?",
    [
      "Swelling, coolness, pallor or discomfort around the cannula site",
      "A clean dry dressing with no discomfort",
      "A steady prescribed flow with a soft, normal site",
      "The patient's normal appetite",
    ],
    "Swelling, coolness, pallor or discomfort around the cannula site",
    "These local findings may indicate fluid is entering tissue rather than the vein and require prompt action."
  ),
  q(
    "What should the nurse do if the patient develops dyspnoea, rash or sudden deterioration during infusion?",
    [
      "Stop or manage the infusion according to emergency protocol, assess and urgently report",
      "Increase the rate to finish quickly",
      "Leave the patient and document at the end of the shift",
      "Cover the site and continue without reassessment",
    ],
    "Stop or manage the infusion according to emergency protocol, assess and urgently report",
    "Respiratory symptoms, rash or deterioration may indicate a serious reaction and need immediate escalation."
  ),
  q(
    "How should the prescribed infusion rate be controlled?",
    [
      "Use the prescribed rate and an appropriate calibrated device or pump, checking it regularly",
      "Adjust it according to how fast the patient wants it",
      "Open the clamp fully for every patient",
      "Estimate the rate by looking once",
    ],
    "Use the prescribed rate and an appropriate calibrated device or pump, checking it regularly",
    "The rate affects treatment safety and fluid balance, so it must be prescribed and monitored."
  ),
  q(
    "Which practice helps maintain asepsis when accessing an IV system?",
    [
      "Perform hand hygiene, use clean or sterile equipment as indicated and disinfect access ports",
      "Touch the sterile end to the bed",
      "Reuse a disconnected giving set",
      "Leave the access port uncapped",
    ],
    "Perform hand hygiene, use clean or sterile equipment as indicated and disinfect access ports",
    "Aseptic access reduces the risk of introducing organisms into the vascular system."
  ),
  q(
    "What should be assessed during ongoing IV infusion?",
    [
      "Patient response, vital signs as indicated, site condition, line patency, rate and fluid balance",
      "Only whether the bag is empty",
      "Only the patient's visitors",
      "Only the colour of the bed linen",
    ],
    "Patient response, vital signs as indicated, site condition, line patency, rate and fluid balance",
    "Ongoing assessment identifies local and systemic complications before they become severe."
  ),
  q(
    "What should be done with sharps used during IV therapy?",
    [
      "Discard them immediately into an approved sharps container without recapping",
      "Carry them uncovered to the sluice",
      "Recap them with both hands",
      "Leave them on the trolley for later collection",
    ],
    "Discard them immediately into an approved sharps container without recapping",
    "Immediate sharps disposal reduces needlestick injuries and contamination."
  ),
  q(
    "What should be documented for an IV infusion?",
    [
      "Fluid or medication, amount, start time, prescribed rate, site, patient response, balance and abnormalities",
      "Only that an IV stand was present",
      "Only the patient's diagnosis",
      "Nothing if the infusion finished normally",
    ],
    "Fluid or medication, amount, start time, prescribed rate, site, patient response, balance and abnormalities",
    "Complete documentation supports fluid management, continuity and accountability."
  ),
];

const rgn_043Quiz: ProcedureQuizQuestion[] = [
  q(
    "What must be checked before reconstituting an IV medication from an ampoule or vial?",
    [
      "Prescription, patient, medication, dose, diluent, route, expiry and manufacturer's instructions",
      "Only the colour of the container",
      "Only whether a syringe is available",
      "The patient's meal preference",
    ],
    "Prescription, patient, medication, dose, diluent, route, expiry and manufacturer's instructions",
    "Reconstitution errors can change concentration or sterility, so the order and instructions must be checked first."
  ),
  q(
    "Why must the correct diluent and volume be used?",
    [
      "To achieve the intended concentration, stability and compatibility",
      "To make the medicine act immediately in every patient",
      "To avoid reading the prescription",
      "To replace the need for aseptic technique",
    ],
    "To achieve the intended concentration, stability and compatibility",
    "The wrong diluent or volume can cause incompatibility, an inaccurate dose or medication instability."
  ),
  q(
    "What should be done if the reconstituted medication is cloudy, discoloured or contains particles?",
    [
      "Do not administer it; isolate it and seek advice according to policy",
      "Shake it harder and administer it",
      "Filter it through cotton wool",
      "Add more diluent without an order",
    ],
    "Do not administer it; isolate it and seek advice according to policy",
    "Unexpected appearance may indicate contamination, incompatibility or degradation."
  ),
  q(
    "Which action helps maintain asepsis while drawing up a reconstituted medication?",
    [
      "Hand hygiene, a clean preparation area, sterile equipment and protection of vial or ampoule access points",
      "Preparing the syringe on the patient's bed",
      "Touching the needle with bare fingers",
      "Reusing a needle after it contacts the vial",
    ],
    "Hand hygiene, a clean preparation area, sterile equipment and protection of vial or ampoule access points",
    "Aseptic preparation reduces the risk of contaminating an injectable medication."
  ),
  q(
    "How should a glass ampoule be opened safely?",
    [
      "Use a gauze or ampoule opener, protect the hands and dispose of the broken glass in an approved container",
      "Snap it toward the other hand without protection",
      "Break it on the bedside table",
      "Leave the broken top in the medication tray",
    ],
    "Use a gauze or ampoule opener, protect the hands and dispose of the broken glass in an approved container",
    "Safe ampoule handling prevents cuts and glass contamination."
  ),
  q(
    "What should be checked before administering through an existing IV cannula?",
    [
      "Cannula patency, site condition, prescribed compatibility and an intact aseptic access point",
      "Only whether the patient has a blanket",
      "Only whether the syringe is full",
      "Whether the cannula is attached to the bed rail",
    ],
    "Cannula patency, site condition, prescribed compatibility and an intact aseptic access point",
    "An unsuitable site or incompatible medication can cause tissue injury, treatment failure or infection."
  ),
  q(
    "Why is the medication given slowly when the prescription requires IV push administration?",
    [
      "To reduce rapid adverse effects and allow the patient and site to be observed",
      "To make the medication expire later",
      "To avoid checking the patient",
      "To increase the prescribed dose",
    ],
    "To reduce rapid adverse effects and allow the patient and site to be observed",
    "The prescribed rate helps limit adverse effects and supports safe monitoring."
  ),
  q(
    "What should the nurse do if pain, swelling or resistance occurs at the cannula site?",
    [
      "Stop administration, assess the site and report or manage possible infiltration according to policy",
      "Force the plunger harder",
      "Cover the site and continue",
      "Flush repeatedly without assessment",
    ],
    "Stop administration, assess the site and report or manage possible infiltration according to policy",
    "Pain, swelling or resistance may indicate infiltration or extravasation and requires prompt action."
  ),
  q(
    "What is important after giving an IV medication?",
    [
      "Observe for immediate and delayed reactions, maintain the line as prescribed and reassess the patient",
      "Leave immediately without checking the patient",
      "Assume the medication worked because it was injected",
      "Remove all monitoring equipment",
    ],
    "Observe for immediate and delayed reactions, maintain the line as prescribed and reassess the patient",
    "Observation may identify allergy, adverse drug effects or local complications."
  ),
  q(
    "Which documentation is required after reconstituting and administering IV medication?",
    [
      "Medication and diluent, dose, concentration, route, time, site, response, batch details when required and abnormalities",
      "Only the name of the diluent",
      "Only the patient's bed number",
      "Nothing if no reaction occurred",
    ],
    "Medication and diluent, dose, concentration, route, time, site, response, batch details when required and abnormalities",
    "Detailed injectable-medication records support traceability, safe continuation and incident review."
  ),
];

const rgn_044Quiz: ProcedureQuizQuestion[] = [
  q(
    "What distinguishes administration of an IV medication from an ordinary oral dose?",
    [
      "It enters the vascular system and therefore requires prescribed compatibility, rate and close observation",
      "It can be given without checking allergies",
      "It never requires patient identification",
      "It can be administered using any available fluid",
    ],
    "It enters the vascular system and therefore requires prescribed compatibility, rate and close observation",
    "IV medication can act rapidly and cause serious harm if the drug, rate or line is incorrect."
  ),
  q(
    "Before connecting a vial-based IV medication, what should be confirmed?",
    [
      "The prescription, vial label, reconstitution instructions, expiry, patient and cannula or line compatibility",
      "Only the colour of the vial",
      "Only the size of the drip stand",
      "The patient's preferred sleeping position",
    ],
    "The prescription, vial label, reconstitution instructions, expiry, patient and cannula or line compatibility",
    "These checks prevent wrong medication, wrong concentration and line-related errors."
  ),
  q(
    "Why must the vial and giving set be inspected for leaks or contamination?",
    [
      "To avoid administering a contaminated or compromised medication",
      "To increase the volume of the medication",
      "To make the infusion run faster",
      "To replace checking the expiry date",
    ],
    "To avoid administering a contaminated or compromised medication",
    "Compromised containers and sets can introduce infection or result in an incorrect dose."
  ),
  q(
    "What is the purpose of priming the giving set?",
    [
      "To fill the tubing with medication or fluid and remove air before connection",
      "To sterilize the patient's cannula",
      "To determine the patient's allergy status",
      "To make a new prescription",
    ],
    "To fill the tubing with medication or fluid and remove air before connection",
    "Priming prevents air entry and ensures the prescribed medication reaches the patient."
  ),
  q(
    "How should the IV access port be prepared before connection?",
    [
      "Disinfect it using the approved antiseptic and allow it to dry according to policy",
      "Touch it with a bare finger to check that it is clean",
      "Rinse it with tap water",
      "Leave it open while preparing the tray",
    ],
    "Disinfect it using the approved antiseptic and allow it to dry according to policy",
    "Correct port disinfection reduces the risk of introducing organisms into the bloodstream."
  ),
  q(
    "What should be monitored at the IV site during vial medication administration?",
    [
      "Pain, redness, swelling, leakage, coolness and resistance to flow",
      "Only the patient's appetite",
      "Only the colour of the bed sheet",
      "Nothing until the vial is empty",
    ],
    "Pain, redness, swelling, leakage, coolness and resistance to flow",
    "These findings may indicate infiltration, extravasation, phlebitis or a displaced cannula."
  ),
  q(
    "What should the nurse do if the patient develops wheeze, facial swelling or collapse?",
    [
      "Stop the medication or infusion as appropriate, call for urgent help and manage according to emergency protocol",
      "Continue the medication at a faster rate",
      "Ask the patient to wait until the round is complete",
      "Remove the cannula and leave the patient alone",
    ],
    "Stop the medication or infusion as appropriate, call for urgent help and manage according to emergency protocol",
    "These may be signs of a life-threatening reaction requiring immediate response."
  ),
  q(
    "How should the flow rate be set?",
    [
      "According to the prescription using a timer, calibrated device or pump as appropriate",
      "According to the nurse's estimate only",
      "As fast as the patient requests",
      "At the maximum rate of the giving set",
    ],
    "According to the prescription using a timer, calibrated device or pump as appropriate",
    "An accurate rate is necessary to deliver the intended dose safely."
  ),
  q(
    "What should be done after the medication has finished?",
    [
      "Assess the patient and line, manage the access point as prescribed, dispose of equipment safely and perform hand hygiene",
      "Leave the empty vial connected indefinitely",
      "Reuse the giving set for another patient",
      "Discard the treatment record",
    ],
    "Assess the patient and line, manage the access point as prescribed, dispose of equipment safely and perform hand hygiene",
    "Post-administration care prevents infection, line complications and equipment-related harm."
  ),
  q(
    "Which information should be documented?",
    [
      "Medication, dose and concentration, route, start and completion times, rate, site, response and any reaction",
      "Only the time the nurse entered the room",
      "Only that the patient was asleep",
      "Nothing if the line remained patent",
    ],
    "Medication, dose and concentration, route, start and completion times, rate, site, response and any reaction",
    "Complete documentation supports treatment continuity and evaluation of IV therapy."
  ),
];

const rgn_045Quiz: ProcedureQuizQuestion[] = [
  q(
    "Which site is commonly selected for an adult intramuscular injection after assessment?",
    [
      "A safe, suitable muscle identified according to medication, patient and facility policy",
      "Any area with visible bruising",
      "A joint or bony prominence",
      "An area with infection or broken skin",
    ],
    "A safe, suitable muscle identified according to medication, patient and facility policy",
    "Site selection depends on the patient's age, muscle mass, medication volume and safety assessment."
  ),
  q(
    "What should be checked before giving an intramuscular medication?",
    [
      "Patient, medication, dose, route, time, indication, allergies, expiry and prescription",
      "Only whether the syringe is available",
      "Only the patient's room number",
      "The patient's meal preference",
    ],
    "Patient, medication, dose, route, time, indication, allergies, expiry and prescription",
    "Medication rights and patient assessment are required before an injection."
  ),
  q(
    "Why should a new sterile needle be used after drawing medication from an ampoule when appropriate?",
    [
      "To avoid injecting medication residue or glass particles and to use an appropriate sharp needle",
      "To increase the dose",
      "To make the injection painless for every patient",
      "To avoid disposing of the first needle",
    ],
    "To avoid injecting medication residue or glass particles and to use an appropriate sharp needle",
    "Changing the needle when indicated supports safety and reduces tissue injury or contamination."
  ),
  q(
    "What position should be used for an intramuscular injection?",
    [
      "A stable position that relaxes the selected muscle and protects the patient's privacy",
      "A position that leaves the patient unsupported",
      "Standing on one leg",
      "Prone with the injection site inaccessible",
    ],
    "A stable position that relaxes the selected muscle and protects the patient's privacy",
    "Support and muscle relaxation improve safety and comfort during injection."
  ),
  q(
    "What is the purpose of cleaning the injection site?",
    [
      "To reduce microorganisms on the skin before needle insertion",
      "To numb the muscle completely",
      "To identify the patient's diagnosis",
      "To replace hand hygiene",
    ],
    "To reduce microorganisms on the skin before needle insertion",
    "Skin antisepsis and hand hygiene reduce the risk of introducing microorganisms."
  ),
  q(
    "At what angle is an intramuscular injection generally administered?",
    [
      "At 90 degrees, using the appropriate needle and site for the patient",
      "At 5 degrees into the epidermis",
      "At 180 degrees along the skin",
      "At any angle chosen after insertion",
    ],
    "At 90 degrees, using the appropriate needle and site for the patient",
    "A perpendicular approach reaches muscle when the selected needle and site are appropriate."
  ),
  q(
    "What should the nurse do if blood is aspirated when aspiration is required by local policy?",
    [
      "Stop, withdraw and discard the equipment safely, then prepare a new dose as indicated by policy",
      "Inject the medication rapidly",
      "Push the needle deeper",
      "Ignore the finding",
    ],
    "Stop, withdraw and discard the equipment safely, then prepare a new dose as indicated by policy",
    "Blood return may indicate that the needle is in a vessel; the local protocol must be followed."
  ),
  q(
    "What should be done immediately after withdrawing the needle?",
    [
      "Activate the safety device if present, discard the sharp immediately and apply gentle pressure if needed",
      "Recap the needle using both hands",
      "Leave the needle on the tray",
      "Massage every injection site forcefully",
    ],
    "Activate the safety device if present, discard the sharp immediately and apply gentle pressure if needed",
    "Immediate sharps disposal prevents injury; pressure may control minor bleeding."
  ),
  q(
    "Which finding after an intramuscular injection requires assessment and reporting?",
    [
      "Severe pain, increasing swelling, extensive bleeding, weakness or signs of an allergic reaction",
      "Brief mild discomfort that is improving",
      "The patient asking when the medicine will work",
      "A clean, dry injection site",
    ],
    "Severe pain, increasing swelling, extensive bleeding, weakness or signs of an allergic reaction",
    "These findings may indicate injury, bleeding, nerve involvement or a systemic reaction."
  ),
  q(
    "What should be recorded after an intramuscular injection?",
    [
      "Medication, dose, route, time, site, patient response and any adverse reaction",
      "Only the name of the syringe",
      "Only that the patient was in bed",
      "Nothing if the injection was prescribed",
    ],
    "Medication, dose, route, time, site, patient response and any adverse reaction",
    "Documenting the site and response prevents duplicate injections and supports follow-up."
  ),
];

const rgn_046Quiz: ProcedureQuizQuestion[] = [
  q(
    "When is the subcutaneous route commonly selected?",
    [
      "When a prescribed small volume is intended for absorption from subcutaneous tissue",
      "When a large volume must be given rapidly",
      "When the medication must enter a joint",
      "When the patient is unconscious and unassessed",
    ],
    "When a prescribed small volume is intended for absorption from subcutaneous tissue",
    "Subcutaneous administration is used for suitable medications and volumes according to the prescription."
  ),
  q(
    "Which site should be avoided for a subcutaneous injection?",
    [
      "Skin that is bruised, scarred, inflamed, infected or damaged",
      "A healthy site identified by assessment",
      "A site rotated according to the care plan",
      "A site with adequate subcutaneous tissue",
    ],
    "Skin that is bruised, scarred, inflamed, infected or damaged",
    "Damaged tissue may alter absorption and increase pain or complications."
  ),
  q(
    "What should be checked before administering a subcutaneous medication?",
    [
      "Patient, medication, dose, route, time, allergies, expiry, site and prescription",
      "Only the syringe size",
      "Only whether the patient is asleep",
      "The colour of the patient's clothing",
    ],
    "Patient, medication, dose, route, time, allergies, expiry, site and prescription",
    "Medication verification and site assessment are essential for safe subcutaneous administration."
  ),
  q(
    "How should the needle angle be selected for a subcutaneous injection?",
    [
      "According to the needle, tissue depth and patient, commonly 45 or 90 degrees under local policy",
      "Always 10 degrees regardless of the patient",
      "Always 180 degrees along the skin",
      "By inserting until bone is felt",
    ],
    "According to the needle, tissue depth and patient, commonly 45 or 90 degrees under local policy",
    "The angle should place the medication in subcutaneous tissue without entering muscle."
  ),
  q(
    "Why is a skin fold sometimes lifted before a subcutaneous injection?",
    [
      "To help ensure the needle enters subcutaneous tissue rather than muscle",
      "To make the medication sterile",
      "To increase the prescribed volume",
      "To replace site assessment",
    ],
    "To help ensure the needle enters subcutaneous tissue rather than muscle",
    "A skin fold may be used according to patient tissue depth and medication instructions."
  ),
  q(
    "What should the nurse do if blood is aspirated when aspiration is required by local policy?",
    [
      "Withdraw safely, discard the equipment and follow policy for preparing and administering a new dose",
      "Inject the medication into the blood vessel",
      "Continue without telling anyone",
      "Push the needle further into the tissue",
    ],
    "Withdraw safely, discard the equipment and follow policy for preparing and administering a new dose",
    "Blood return may indicate an unsuitable position and must be managed according to local guidance."
  ),
  q(
    "Which practice supports infection prevention during a subcutaneous injection?",
    [
      "Hand hygiene, a single-use sterile needle and syringe, skin antisepsis and immediate sharps disposal",
      "Reusing a syringe for the same patient throughout the day",
      "Touching the needle before insertion",
      "Placing the uncapped needle on the bedside table",
    ],
    "Hand hygiene, a single-use sterile needle and syringe, skin antisepsis and immediate sharps disposal",
    "These practices reduce contamination and needlestick risk."
  ),
  q(
    "What should the nurse observe at the injection site after administration?",
    [
      "Bleeding, pain, swelling, bruising, redness and the patient's response",
      "Only the patient's temperature next week",
      "Only the label on the medication",
      "Nothing because subcutaneous injections cannot cause reactions",
    ],
    "Bleeding, pain, swelling, bruising, redness and the patient's response",
    "Local findings may indicate injury, irritation, infection or an injection-related complication."
  ),
  q(
    "What should the nurse do if a patient refuses the injection?",
    [
      "Do not force it; explain, explore concerns, notify the appropriate clinician and document the refusal",
      "Hide the medication in food",
      "Record it as given",
      "Ask another patient to persuade or hold the patient",
    ],
    "Do not force it; explain, explore concerns, notify the appropriate clinician and document the refusal",
    "Respectful consent practice requires the refusal to be managed openly and safely."
  ),
  q(
    "Which details belong in the documentation?",
    [
      "Medication, dose, route, time, site, patient response and any abnormal finding or refusal",
      "Only the name of the needle",
      "Only the ward number",
      "Nothing if the injection was completed",
    ],
    "Medication, dose, route, time, site, patient response and any abnormal finding or refusal",
    "Accurate records support safe dose scheduling, site rotation and clinical follow-up."
  ),
];

const rgn_047Quiz: ProcedureQuizQuestion[] = [
  q(
    "What is the purpose of an intradermal injection?",
    [
      "To place a small prescribed volume into the dermis for a test or local response",
      "To deliver a large volume into a vein",
      "To administer medication into a joint",
      "To replace all allergy assessments",
    ],
    "To place a small prescribed volume into the dermis for a test or local response",
    "The intradermal route is used for selected tests or medications requiring a dermal response."
  ),
  q(
    "Which site is commonly appropriate for an intradermal test when specified by protocol?",
    [
      "A clean, intact area of skin, such as the inner forearm when the protocol indicates it",
      "An infected wound",
      "A bruised or scarred area",
      "The palm after applying lotion",
    ],
    "A clean, intact area of skin, such as the inner forearm when the protocol indicates it",
    "The protocol determines the site; intact skin allows the local response to be observed accurately."
  ),
  q(
    "What angle is commonly used for inserting an intradermal needle?",
    [
      "A shallow angle of about 5 to 15 degrees, according to the procedure protocol",
      "90 degrees into the muscle",
      "180 degrees along the skin",
      "45 degrees into a vein",
    ],
    "A shallow angle of about 5 to 15 degrees, according to the procedure protocol",
    "A shallow angle helps place the small volume within the dermis."
  ),
  q(
    "What indicates that an intradermal injection has been placed correctly?",
    [
      "A small raised bleb or wheal at the injection site",
      "Heavy bleeding from the site",
      "Immediate deep muscle pain",
      "No visible or palpable change after every test",
    ],
    "A small raised bleb or wheal at the injection site",
    "A bleb indicates that the small volume has entered the dermal layer."
  ),
  q(
    "What should the patient be told after an intradermal test?",
    [
      "Do not rub, scratch or apply pressure, and return or report at the time specified",
      "Rub the site vigorously to spread the medication",
      "Cover it with household cream",
      "Ignore all changes at the site",
    ],
    "Do not rub, scratch or apply pressure, and return or report at the time specified",
    "Rubbing can alter the local response and make the test difficult to interpret."
  ),
  q(
    "Why may the nurse mark or measure the intradermal test site?",
    [
      "To identify the exact site and support accurate follow-up assessment",
      "To increase the dose",
      "To sterilize the skin",
      "To prevent the patient from moving the arm",
    ],
    "To identify the exact site and support accurate follow-up assessment",
    "Clear site identification supports consistent interpretation and documentation."
  ),
  q(
    "Which action supports infection prevention for an intradermal injection?",
    [
      "Hand hygiene, a sterile single-use syringe and needle, skin antisepsis and safe sharps disposal",
      "Using the same needle for several patients",
      "Touching the bevel before insertion",
      "Leaving the used needle on the tray",
    ],
    "Hand hygiene, a sterile single-use syringe and needle, skin antisepsis and safe sharps disposal",
    "Infection prevention applies even when the injected volume is very small."
  ),
  q(
    "What should the nurse do if the site bleeds after an intradermal injection?",
    [
      "Dab gently with a dry sterile swab without rubbing and document the finding",
      "Massage the site forcefully",
      "Apply an unprescribed cream",
      "Repeat the full dose immediately",
    ],
    "Dab gently with a dry sterile swab without rubbing and document the finding",
    "Gentle dabbing limits bleeding while avoiding alteration of the local test response."
  ),
  q(
    "What should be assessed at the specified review time?",
    [
      "The size, appearance and symptoms at the marked site, following the relevant protocol",
      "Only the patient's blood pressure from the previous week",
      "The number of used cotton swabs",
      "Whether the patient has eaten breakfast",
    ],
    "The size, appearance and symptoms at the marked site, following the relevant protocol",
    "Test interpretation depends on a timely, standardised assessment of the local response."
  ),
  q(
    "What must be documented after an intradermal medication or test?",
    [
      "Medication or test, dose, site, time, lot details when required, site appearance, review result and actions",
      "Only the needle gauge",
      "Only that a tray was prepared",
      "Nothing unless the patient reports pain",
    ],
    "Medication or test, dose, site, time, lot details when required, site appearance, review result and actions",
    "Complete documentation supports interpretation, traceability and follow-up."
  ),
];

export const rgnBatch05: Procedure[] = [
  {
    id: "rgn-039",
    title: "SERVING OF BEDPAN TO A PATIENT",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "This is the process of promptly assisting a bedridden patient with a bedpan to maintain his/her bowel elimination pattern without getting out of bed. Most patients feel embarrassed when requesting for this assistance, the nurse must therefore be courteous and understanding when assisting the patient.",
    purpose: [],
    indications: [
      "Patient is confined to bed or cannot safely transfer to a toilet",
      "Patient requires assistance because of weakness, pain, injury or prescribed activity restriction",
      "Patient needs a bedpan for collection or observation of urine or stool",
    ],
    equipment: [
  "Trolley containing the following:",
  "Bowl",
  "Jug of water",
  "Soap",
  "Wipes/tissue",
  "Covered bedpan",
  "Receiver",
  "Mackintosh and dressing towel"
],
    preparation: [
      "Confirm the patient's identity, assess mobility, pain, consciousness and elimination needs, and check for precautions.",
      "Explain the procedure, obtain cooperation and provide privacy; ask about preferred assistance and any cultural or personal concerns.",
      "Perform hand hygiene and gather equipment without placing clean items on contaminated surfaces.",
    ],
    steps: [
  "Explain procedure and provide privacy",
  "Prepare and send trolley to the bedside",
  "Stand at the right side of the bed with assistant on the other side",
  "Loosen to bed clothings",
  "Place the mackintosh and dressing towel at the midsection of the bed",
  "Gently lift patient with the assistant onto bedpan",
  "Leave patient for sometime and inform him/her to call your attention when he/she is done",
  "Lift patient again with assistant to remove the bedpan after use, cover the bedpan immediately",
  "Don gloves, cleans patient with wipes/tissue and discard",
  "Remove gloves and perform hand hygiene",
  "Allow patient to wash hands with soap and water and dry hands",
  "Arrange bed clothes and leave patient comfortable in bed",
  "Take bedpan to the sluice room and inspect content before emptying",
  "Measure urine if any, when necessary and record",
  "Empty bedpan, decontaminate, wash, sterilize and remove screen",
  "Perform hand hygiene, document procedures and report any abnormalities"
],
    precautions: [
      "Do not leave a confused, weak or high-risk patient unsupported on a bedpan.",
      "Use a fracture bedpan or alternative equipment when indicated by the patient's condition or mobility.",
      "Never shake contaminated linen or rinse the bedpan in a patient hand-washing basin.",
      "Escalate severe pain, abdominal distension, rectal bleeding, black stool, inability to void or other unexpected findings.",
    ],
    afterCare: [
      "Reassess comfort, skin condition and symptoms; measure output when prescribed or clinically indicated.",
      "Return clean equipment according to local decontamination and storage policy.",
    ],
    documentation: [
      "Record assistance provided, urine or stool characteristics and amount when measured.",
      "Document patient tolerance, skin concerns, continence-related care and any abnormality reported.",
    ],
    complications: [
      "Falls or injury during lifting or repositioning",
      "Skin irritation or pressure from prolonged bedpan use",
      "Exposure to body fluids or cross-infection",
      "Unrecognised gastrointestinal or urinary deterioration",
    ],
    patientEducation: [
      "Explain how to use the call bell and when to report pain, dizziness, bleeding or difficulty passing urine or stool.",
      "Encourage the patient to request assistance rather than attempting an unsafe transfer.",
    ],
    nursingConsiderations: [
      "Follow the facility's infection prevention, waste disposal and manual handling policies.",
      "Use an interpreter or communication support when needed to preserve informed participation.",
    ],
    quiz: [
  {
    "question": "A patient is about to undergo serving of bedpan to a patient. Which action protects their dignity during preparation?",
    "options": [
      "Explain procedure and provide privacy",
      "Place the mackintosh and dressing towel at the midsection of the bed",
      "Perform hand hygiene, document procedures and report any abnormalities",
      "Arrange bed clothes and leave patient comfortable in bed"
    ],
    "answer": "Explain procedure and provide privacy",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "To complete serving of bedpan to a patient safely, which action should the nurse take at this point?",
    "options": [
      "Loosen to bed clothings",
      "Prepare and send trolley to the bedside",
      "Arrange bed clothes and leave patient comfortable in bed",
      "Lift patient again with assistant to remove the bedpan after use, cover the bedpan immediately"
    ],
    "answer": "Prepare and send trolley to the bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during serving of bedpan to a patient?",
    "options": [
      "Empty bedpan, decontaminate, wash, sterilize and remove screen",
      "Allow patient to wash hands with soap and water and dry hands",
      "Stand at the right side of the bed with assistant on the other side",
      "Loosen to bed clothings"
    ],
    "answer": "Stand at the right side of the bed with assistant on the other side",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of serving of bedpan to a patient?",
    "options": [
      "Allow patient to wash hands with soap and water and dry hands",
      "Leave patient for sometime and inform him/her to call your attention when he/she is done",
      "Prepare and send trolley to the bedside",
      "Loosen to bed clothings"
    ],
    "answer": "Loosen to bed clothings",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out serving of bedpan to a patient. Which action best matches this part of the procedure?",
    "options": [
      "Place the mackintosh and dressing towel at the midsection of the bed",
      "Prepare and send trolley to the bedside",
      "Measure urine if any, when necessary and record",
      "Remove gloves and perform hand hygiene"
    ],
    "answer": "Place the mackintosh and dressing towel at the midsection of the bed",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete serving of bedpan to a patient safely, which action should the nurse take at this point?",
    "options": [
      "Explain procedure and provide privacy",
      "Gently lift patient with the assistant onto bedpan",
      "Remove gloves and perform hand hygiene",
      "Place the mackintosh and dressing towel at the midsection of the bed"
    ],
    "answer": "Gently lift patient with the assistant onto bedpan",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during serving of bedpan to a patient?",
    "options": [
      "Take bedpan to the sluice room and inspect content before emptying",
      "Don gloves, cleans patient with wipes/tissue and discard",
      "Leave patient for sometime and inform him/her to call your attention when he/she is done",
      "Explain procedure and provide privacy"
    ],
    "answer": "Leave patient for sometime and inform him/her to call your attention when he/she is done",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of serving of bedpan to a patient?",
    "options": [
      "Don gloves, cleans patient with wipes/tissue and discard",
      "Loosen to bed clothings",
      "Perform hand hygiene, document procedures and report any abnormalities",
      "Lift patient again with assistant to remove the bedpan after use, cover the bedpan immediately"
    ],
    "answer": "Lift patient again with assistant to remove the bedpan after use, cover the bedpan immediately",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out serving of bedpan to a patient. Which action best matches this part of the procedure?",
    "options": [
      "Don gloves, cleans patient with wipes/tissue and discard",
      "Perform hand hygiene, document procedures and report any abnormalities",
      "Arrange bed clothes and leave patient comfortable in bed",
      "Leave patient for sometime and inform him/her to call your attention when he/she is done"
    ],
    "answer": "Don gloves, cleans patient with wipes/tissue and discard",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with serving of bedpan to a patient, what infection-prevention action is required at this point?",
    "options": [
      "Empty bedpan, decontaminate, wash, sterilize and remove screen",
      "Remove gloves and perform hand hygiene",
      "Leave patient for sometime and inform him/her to call your attention when he/she is done",
      "Stand at the right side of the bed with assistant on the other side"
    ],
    "answer": "Remove gloves and perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Before proceeding with serving of bedpan to a patient, what infection-prevention action is required at this point?",
    "options": [
      "Remove gloves and perform hand hygiene",
      "Gently lift patient with the assistant onto bedpan",
      "Allow patient to wash hands with soap and water and dry hands",
      "Empty bedpan, decontaminate, wash, sterilize and remove screen"
    ],
    "answer": "Allow patient to wash hands with soap and water and dry hands",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which nursing action is required at this stage of serving of bedpan to a patient?",
    "options": [
      "Gently lift patient with the assistant onto bedpan",
      "Prepare and send trolley to the bedside",
      "Measure urine if any, when necessary and record",
      "Arrange bed clothes and leave patient comfortable in bed"
    ],
    "answer": "Arrange bed clothes and leave patient comfortable in bed",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out serving of bedpan to a patient. Which action best matches this part of the procedure?",
    "options": [
      "Take bedpan to the sluice room and inspect content before emptying",
      "Measure urine if any, when necessary and record",
      "Don gloves, cleans patient with wipes/tissue and discard",
      "Place the mackintosh and dressing towel at the midsection of the bed"
    ],
    "answer": "Take bedpan to the sluice room and inspect content before emptying",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of serving of bedpan to a patient, which principle protects the reliability of the result?",
    "options": [
      "Arrange bed clothes and leave patient comfortable in bed",
      "Measure urine if any, when necessary and record",
      "Place the mackintosh and dressing towel at the midsection of the bed",
      "Explain procedure and provide privacy"
    ],
    "answer": "Measure urine if any, when necessary and record",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "A patient is about to undergo serving of bedpan to a patient. Which action protects their dignity during preparation?",
    "options": [
      "Lift patient again with assistant to remove the bedpan after use, cover the bedpan immediately",
      "Loosen to bed clothings",
      "Empty bedpan, decontaminate, wash, sterilize and remove screen",
      "Arrange bed clothes and leave patient comfortable in bed"
    ],
    "answer": "Empty bedpan, decontaminate, wash, sterilize and remove screen",
    "explanation": "Maintaining privacy protects dignity and confidentiality. Explain the care, expose only the area needed and keep the patient appropriately covered."
  },
  {
    "question": "Before proceeding with serving of bedpan to a patient, what infection-prevention action is required at this point?",
    "options": [
      "Loosen to bed clothings",
      "Empty bedpan, decontaminate, wash, sterilize and remove screen",
      "Allow patient to wash hands with soap and water and dry hands",
      "Perform hand hygiene, document procedures and report any abnormalities"
    ],
    "answer": "Perform hand hygiene, document procedures and report any abnormalities",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  }
],
  },
  {
    id: "rgn-040",
    title: "ADMINISTRATION OF ORAL MEDICATIONS (TABLETS, CAPSULES, CAPLETS ETC.)",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "Enteral medications are administered through the oral, sublingual and buccal routes. These medications come in the form of either tablets, capsule, caplets or mixtures. In oral administration the medication is mostly swallowed whilst with sublingual, the medication is placed under the tongue and allowed to dissolve whereas with buccal, the medication is placed in between the cheek and allowed to dissolve.",
    purpose: [],
    indications: [
      "A valid prescription for an oral, buccal or sublingual solid medication",
      "Patient is able to receive the medication through the prescribed route",
      "Medication is clinically appropriate after checking allergies, swallowing ability and relevant precautions",
    ],
    equipment: [
  "A tray containing the following:",
  "Medication",
  "Drinking cup",
  "Bottle of water",
  "Spoon in a saucer or measuring cup",
  "Medication Treatment Chart (Manual or Electronic)",
  "Pill-crushing device if necessary"
],
    preparation: [
      "Review the prescription, indication, allergies, contraindications, swallowing ability, level of consciousness and relevant observations.",
      "Prepare medicines for one patient at a time and check the label against the medication record at the required stages.",
      "Confirm whether the medicine must be swallowed, held under the tongue or placed between the cheek and gum.",
    ],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
  "Perform hand hygiene",
  "Prepare and send tray to the bedside",
  "Read the label on the package and compare with patient’s treatment chart (manual or electronic)",
  "Take out the medication and compare with the patient treatment chart (manual or electronic) for the dosage",
  "Pour out water into a drinking cup if it is to be administered orally",
  "Take the tablet with a spoon",
  "Give the tablet to the patient and ensure patient:",
  "Swallow with the aid of water if it is to be administered orally",
  "Place the medication under the tongue and allow to dissolve if it is to be administered sublingually",
  "Place the medication in between the cheeks and allow to dissolve if it is to be administered buccally",
  "Stay with patient until all medications are taken",
  "Engage patient in a brief conversation to assess if all medications are swallowed or retained in the mouth",
  "Congratulate patient and make him/her assume a desirable position",
  "Observe patient for any adverse reaction",
  "Encourage patient to report any adverse reaction",
  "Dispose off used items",
  "Perform hand hygiene",
  "Document procedure in the nurses’ note and chart on treatment chart (manual or electronic)",
  "Check on patient after thirty (30) minutes for therapeutic effect"
],
    precautions: [
      "Do not give oral medication to a patient with unsafe swallowing, reduced consciousness or an active aspiration risk without appropriate assessment and direction.",
      "Do not leave medication unattended or record it as given before confirming administration.",
      "Do not repeat a dose after vomiting without assessment and appropriate clinical advice.",
      "Escalate discrepancies, omitted doses, refusal, suspected allergy or medication error immediately.",
    ],
    afterCare: [
      "Ensure the patient is comfortable, has access to water and the call bell, and knows how to report an adverse effect.",
      "Monitor for the expected effect and adverse reactions within the appropriate time.",
    ],
    documentation: [
      "Record medication name, dose, route, date and time, and sign or authenticate according to policy.",
      "Document refusal, omission, swallowing difficulty, vomiting, adverse response and action taken.",
    ],
    complications: [
      "Aspiration or choking",
      "Wrong-patient, wrong-dose or wrong-route medication error",
      "Allergic or adverse drug reaction",
      "Missed or duplicated dose",
    ],
    patientEducation: [
      "Explain the purpose and important instructions for the medication in language the patient understands.",
      "Tell the patient to report rash, swelling, breathing difficulty, severe dizziness, vomiting or other concerning symptoms.",
    ],
    nursingConsiderations: [
      "Use an interpreter or suitable communication aid when language or hearing affects safe understanding.",
      "Follow N&MC Ghana standards, facility medication policy and the approved product information.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=JH413AIgZ3k",
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Prepare and send tray to the bedside",
      "Congratulate patient and make him/her assume a desirable position",
      "Take out the medication and compare with the patient treatment chart (manual or electronic) for the dosage"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete administration of oral medications (tablets, capsules, caplets etc.) safely, which action should the nurse take at this point?",
    "options": [
      "Stay with patient until all medications are taken",
      "Establish rapport (Refer to steps)",
      "Place the medication under the tongue and allow to dissolve if it is to be administered sublingually",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of oral medications (tablets, capsules, caplets etc.), what should the nurse do to support informed cooperation?",
    "options": [
      "Give the tablet to the patient and ensure patient:",
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Dispose off used items"
    ],
    "answer": "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with administration of oral medications (tablets, capsules, caplets etc.), what infection-prevention action is required at this point?",
    "options": [
      "Read the label on the package and compare with patient’s treatment chart (manual or electronic)",
      "Observe patient for any adverse reaction",
      "Pour out water into a drinking cup if it is to be administered orally",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "The nurse is carrying out administration of oral medications (tablets, capsules, caplets etc.). Which action best matches this part of the procedure?",
    "options": [
      "Prepare and send tray to the bedside",
      "Place the medication in between the cheeks and allow to dissolve if it is to be administered buccally",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Engage patient in a brief conversation to assess if all medications are swallowed or retained in the mouth"
    ],
    "answer": "Prepare and send tray to the bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of oral medications (tablets, capsules, caplets etc.) safely, which action should the nurse take at this point?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Read the label on the package and compare with patient’s treatment chart (manual or electronic)",
      "Document procedure in the nurses’ note and chart on treatment chart (manual or electronic)",
      "Swallow with the aid of water if it is to be administered orally"
    ],
    "answer": "Read the label on the package and compare with patient’s treatment chart (manual or electronic)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Encourage patient to report any adverse reaction",
      "Take the tablet with a spoon",
      "Take out the medication and compare with the patient treatment chart (manual or electronic) for the dosage",
      "Read the label on the package and compare with patient’s treatment chart (manual or electronic)"
    ],
    "answer": "Take out the medication and compare with the patient treatment chart (manual or electronic) for the dosage",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which nursing action is required at this stage of administration of oral medications (tablets, capsules, caplets etc.)?",
    "options": [
      "Stay with patient until all medications are taken",
      "Perform hand hygiene",
      "Congratulate patient and make him/her assume a desirable position",
      "Pour out water into a drinking cup if it is to be administered orally"
    ],
    "answer": "Pour out water into a drinking cup if it is to be administered orally",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of oral medications (tablets, capsules, caplets etc.). Which action best matches this part of the procedure?",
    "options": [
      "Take the tablet with a spoon",
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Place the medication under the tongue and allow to dissolve if it is to be administered sublingually",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Take the tablet with a spoon",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of oral medications (tablets, capsules, caplets etc.) safely, which action should the nurse take at this point?",
    "options": [
      "Take the tablet with a spoon",
      "Give the tablet to the patient and ensure patient:",
      "Take out the medication and compare with the patient treatment chart (manual or electronic) for the dosage",
      "Dispose off used items"
    ],
    "answer": "Give the tablet to the patient and ensure patient:",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of oral medications (tablets, capsules, caplets etc.)?",
    "options": [
      "Prepare and send tray to the bedside",
      "Observe patient for any adverse reaction",
      "Swallow with the aid of water if it is to be administered orally",
      "Engage patient in a brief conversation to assess if all medications are swallowed or retained in the mouth"
    ],
    "answer": "Swallow with the aid of water if it is to be administered orally",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Place the medication in between the cheeks and allow to dissolve if it is to be administered buccally",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Place the medication under the tongue and allow to dissolve if it is to be administered sublingually"
    ],
    "answer": "Place the medication under the tongue and allow to dissolve if it is to be administered sublingually",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Place the medication in between the cheeks and allow to dissolve if it is to be administered buccally",
      "Pour out water into a drinking cup if it is to be administered orally",
      "Document procedure in the nurses’ note and chart on treatment chart (manual or electronic)",
      "Give the tablet to the patient and ensure patient:"
    ],
    "answer": "Place the medication in between the cheeks and allow to dissolve if it is to be administered buccally",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Encourage patient to report any adverse reaction",
      "Stay with patient until all medications are taken",
      "Congratulate patient and make him/her assume a desirable position",
      "Read the label on the package and compare with patient’s treatment chart (manual or electronic)"
    ],
    "answer": "Stay with patient until all medications are taken",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Place the medication in between the cheeks and allow to dissolve if it is to be administered buccally",
      "Perform hand hygiene",
      "Engage patient in a brief conversation to assess if all medications are swallowed or retained in the mouth",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Engage patient in a brief conversation to assess if all medications are swallowed or retained in the mouth",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "When positioning the patient for administration of oral medications (tablets, capsules, caplets etc.), what should guide the nurse's choice of position?",
    "options": [
      "Take the tablet with a spoon",
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Swallow with the aid of water if it is to be administered orally",
      "Congratulate patient and make him/her assume a desirable position"
    ],
    "answer": "Congratulate patient and make him/her assume a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "The nurse is carrying out administration of oral medications (tablets, capsules, caplets etc.). Which action best matches this part of the procedure?",
    "options": [
      "Observe patient for any adverse reaction",
      "Congratulate patient and make him/her assume a desirable position",
      "Take out the medication and compare with the patient treatment chart (manual or electronic) for the dosage",
      "Dispose off used items"
    ],
    "answer": "Observe patient for any adverse reaction",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of oral medications (tablets, capsules, caplets etc.) safely, which action should the nurse take at this point?",
    "options": [
      "Prepare and send tray to the bedside",
      "Encourage patient to report any adverse reaction",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Stay with patient until all medications are taken"
    ],
    "answer": "Encourage patient to report any adverse reaction",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After the hands-on part of administration of oral medications (tablets, capsules, caplets etc.), how should used equipment and waste be managed?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Place the medication under the tongue and allow to dissolve if it is to be administered sublingually",
      "Dispose off used items",
      "Give the tablet to the patient and ensure patient:"
    ],
    "answer": "Dispose off used items",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with administration of oral medications (tablets, capsules, caplets etc.), what infection-prevention action is required at this point?",
    "options": [
      "Encourage patient to report any adverse reaction",
      "Take the tablet with a spoon",
      "Document procedure in the nurses’ note and chart on treatment chart (manual or electronic)",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "After completing this part of administration of oral medications (tablets, capsules, caplets etc.), what makes the clinical record useful for continuity of care?",
    "options": [
      "Document procedure in the nurses’ note and chart on treatment chart (manual or electronic)",
      "Perform hand hygiene",
      "Engage patient in a brief conversation to assess if all medications are swallowed or retained in the mouth",
      "Read the label on the package and compare with patient’s treatment chart (manual or electronic)"
    ],
    "answer": "Document procedure in the nurses’ note and chart on treatment chart (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "To complete administration of oral medications (tablets, capsules, caplets etc.) safely, which action should the nurse take at this point?",
    "options": [
      "Place the medication in between the cheeks and allow to dissolve if it is to be administered buccally",
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Swallow with the aid of water if it is to be administered orally",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Check on patient after thirty (30) minutes for therapeutic effect",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },
  {
    id: "rgn-041",
    title: "ADMINISTRATION OF ORAL MEDICATIONS (MIXTURES)",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "Enteral medications are administered through the oral, sublingual and buccal routes. These medications come in the form of either tablets, capsule, caplets or mixtures. In oral administration the medication is mostly swallowed whilst with sublingual, the medication is placed under the tongue and allowed to dissolve whereas with buccal, the medication is placed in between the cheek and allowed to dissolve.",
    purpose: [],
    indications: [
      "A valid prescription for a liquid oral medication",
      "Patient can safely swallow the prescribed preparation",
      "A liquid formulation is prescribed or clinically appropriate",
    ],
    equipment: [
  "A tray containing the following:",
  "Medication",
  "Drinking cup",
  "Bottle of water",
  "Spoon in a saucer or measuring cup",
  "Medication Treatment Chart (Manual or Electronic)",
  "Pill-crushing device if necessary",
  "Straw"
],
    preparation: [
      "Check the medication, concentration, dose, patient identifiers, allergies, expiry and prescription.",
      "Read the label and product instructions for shaking, dilution, storage and measuring requirements.",
      "Assess swallowing ability, level of consciousness, nausea and any reason the oral route may be unsafe.",
    ],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
  "Perform hand hygiene",
  "Prepare and send tray to the bedside",
  "Read the label on the bottle and compare with patient’s treatment chart (manual or electronic)",
  "Take out the bottle and compare with the patient treatment chart (manual or electronic) for the dosage",
  "Shake the bottle gently",
  "Remove the cork and holds it with the little or ring finger",
  "Pick the medicine glass and with the thumb nail marks the level of the measure to be taken",
  "Pour out the prescribed dose at eye level in the bright light, holding the bottle with the label upper most",
  "Replace the cork and compare the quantity with the dosage on the patient’s treatment chart (manual or electronic)",
  "Carry medicine to the patient on a saucer, a teaspoon may be added for stirring if it is a suspension",
  "Encourage patient to drink the medicine and serve water if necessary",
  "Congratulate patient and make him/her assume a desirable position",
  "Observe patient for any adverse reaction",
  "Encourage patient to report any adverse",
  "Dispose off used items",
  "Perform hand hygiene",
  "Document procedure in the nurses’ note and chart on treatment chart (manual or electronic)",
  "Check on patient after thirty (30) minutes for therapeutic effect"
],
    precautions: [
      "Do not estimate a dose or use a different concentration without clarification.",
      "Do not give a suspension without redistributing it when the label requires shaking.",
      "Do not force medication or conceal it in food without an authorised plan and patient-centred discussion.",
      "Report damaged, expired, contaminated or incorrectly labelled preparations before administration.",
    ],
    afterCare: [
      "Leave the patient comfortable with water and the call bell within reach.",
      "Store the preparation according to its label and facility policy.",
    ],
    documentation: [
      "Record the medication, concentration, dose, route, time and authentication in the medication record.",
      "Document refusal, vomiting, difficulty swallowing, adverse response or any clarification obtained.",
    ],
    complications: [
      "Incorrect dose from inaccurate measurement or inadequate shaking",
      "Aspiration, choking or vomiting",
      "Allergic or adverse medication reaction",
      "Contamination or deterioration of the preparation",
    ],
    patientEducation: [
      "Explain why the mixture is prescribed and how to report side effects or difficulty swallowing.",
      "Advise the patient not to alter the dose or share the medication.",
    ],
    nursingConsiderations: [
      "Use an oral syringe for small or critical volumes when indicated.",
      "Follow the manufacturer's instructions and local medication policy for storage and beyond-use dates.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=dAR5pxDqOcs",
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Prepare and send tray to the bedside",
      "Observe patient for any adverse reaction",
      "Shake the bottle gently"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete administration of oral medications (mixtures) safely, which action should the nurse take at this point?",
    "options": [
      "Congratulate patient and make him/her assume a desirable position",
      "Establish rapport (Refer to steps)",
      "Replace the cork and compare the quantity with the dosage on the patient’s treatment chart (manual or electronic)",
      "Perform hand hygiene"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of oral medications (mixtures), what should the nurse do to support informed cooperation?",
    "options": [
      "Pour out the prescribed dose at eye level in the bright light, holding the bottle with the label upper most",
      "Establish rapport (Refer to steps)",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Document procedure in the nurses’ note and chart on treatment chart (manual or electronic)"
    ],
    "answer": "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with administration of oral medications (mixtures), what infection-prevention action is required at this point?",
    "options": [
      "Take out the bottle and compare with the patient treatment chart (manual or electronic) for the dosage",
      "Dispose off used items",
      "Pick the medicine glass and with the thumb nail marks the level of the measure to be taken",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "The nurse is carrying out administration of oral medications (mixtures). Which action best matches this part of the procedure?",
    "options": [
      "Prepare and send tray to the bedside",
      "Encourage patient to drink the medicine and serve water if necessary",
      "Read the label on the bottle and compare with patient’s treatment chart (manual or electronic)",
      "Encourage patient to report any adverse"
    ],
    "answer": "Prepare and send tray to the bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of oral medications (mixtures) safely, which action should the nurse take at this point?",
    "options": [
      "Perform hand hygiene",
      "Read the label on the bottle and compare with patient’s treatment chart (manual or electronic)",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Carry medicine to the patient on a saucer, a teaspoon may be added for stirring if it is a suspension"
    ],
    "answer": "Read the label on the bottle and compare with patient’s treatment chart (manual or electronic)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of oral medications (mixtures)?",
    "options": [
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Replace the cork and compare the quantity with the dosage on the patient’s treatment chart (manual or electronic)",
      "Take out the bottle and compare with the patient treatment chart (manual or electronic) for the dosage",
      "Remove the cork and holds it with the little or ring finger"
    ],
    "answer": "Take out the bottle and compare with the patient treatment chart (manual or electronic) for the dosage",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of oral medications (mixtures)?",
    "options": [
      "Observe patient for any adverse reaction",
      "Take out the bottle and compare with the patient treatment chart (manual or electronic) for the dosage",
      "Document procedure in the nurses’ note and chart on treatment chart (manual or electronic)",
      "Shake the bottle gently"
    ],
    "answer": "Shake the bottle gently",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of oral medications (mixtures). Which action best matches this part of the procedure?",
    "options": [
      "Remove the cork and holds it with the little or ring finger",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Congratulate patient and make him/her assume a desirable position",
      "Read the label on the bottle and compare with patient’s treatment chart (manual or electronic)"
    ],
    "answer": "Remove the cork and holds it with the little or ring finger",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of oral medications (mixtures) safely, which action should the nurse take at this point?",
    "options": [
      "Encourage patient to drink the medicine and serve water if necessary",
      "Pick the medicine glass and with the thumb nail marks the level of the measure to be taken",
      "Pour out the prescribed dose at eye level in the bright light, holding the bottle with the label upper most",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Pick the medicine glass and with the thumb nail marks the level of the measure to be taken",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Remove the cork and holds it with the little or ring finger",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Pour out the prescribed dose at eye level in the bright light, holding the bottle with the label upper most",
      "Dispose off used items"
    ],
    "answer": "Pour out the prescribed dose at eye level in the bright light, holding the bottle with the label upper most",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which nursing action is required at this stage of administration of oral medications (mixtures)?",
    "options": [
      "Prepare and send tray to the bedside",
      "Encourage patient to report any adverse",
      "Shake the bottle gently",
      "Replace the cork and compare the quantity with the dosage on the patient’s treatment chart (manual or electronic)"
    ],
    "answer": "Replace the cork and compare the quantity with the dosage on the patient’s treatment chart (manual or electronic)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of oral medications (mixtures). Which action best matches this part of the procedure?",
    "options": [
      "Carry medicine to the patient on a saucer, a teaspoon may be added for stirring if it is a suspension",
      "Replace the cork and compare the quantity with the dosage on the patient’s treatment chart (manual or electronic)",
      "Perform hand hygiene",
      "Observe patient for any adverse reaction"
    ],
    "answer": "Carry medicine to the patient on a saucer, a teaspoon may be added for stirring if it is a suspension",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of oral medications (mixtures) safely, which action should the nurse take at this point?",
    "options": [
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Encourage patient to drink the medicine and serve water if necessary",
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Pour out the prescribed dose at eye level in the bright light, holding the bottle with the label upper most"
    ],
    "answer": "Encourage patient to drink the medicine and serve water if necessary",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of oral medications (mixtures), what should guide the nurse's choice of position?",
    "options": [
      "Document procedure in the nurses’ note and chart on treatment chart (manual or electronic)",
      "Pick the medicine glass and with the thumb nail marks the level of the measure to be taken",
      "Congratulate patient and make him/her assume a desirable position",
      "Take out the bottle and compare with the patient treatment chart (manual or electronic) for the dosage"
    ],
    "answer": "Congratulate patient and make him/her assume a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Which nursing action is required at this stage of administration of oral medications (mixtures)?",
    "options": [
      "Encourage patient to drink the medicine and serve water if necessary",
      "Read the label on the bottle and compare with patient’s treatment chart (manual or electronic)",
      "Dispose off used items",
      "Observe patient for any adverse reaction"
    ],
    "answer": "Observe patient for any adverse reaction",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of oral medications (mixtures). Which action best matches this part of the procedure?",
    "options": [
      "Encourage patient to report any adverse",
      "Establish rapport (Refer to steps)",
      "Carry medicine to the patient on a saucer, a teaspoon may be added for stirring if it is a suspension",
      "Prepare and send tray to the bedside"
    ],
    "answer": "Encourage patient to report any adverse",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After the hands-on part of administration of oral medications (mixtures), how should used equipment and waste be managed?",
    "options": [
      "Replace the cork and compare the quantity with the dosage on the patient’s treatment chart (manual or electronic)",
      "Dispose off used items",
      "Remove the cork and holds it with the little or ring finger",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date"
    ],
    "answer": "Dispose off used items",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with administration of oral medications (mixtures), what infection-prevention action is required at this point?",
    "options": [
      "Remove the cork and holds it with the little or ring finger",
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Perform hand hygiene",
      "Encourage patient to report any adverse"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "After completing this part of administration of oral medications (mixtures), what makes the clinical record useful for continuity of care?",
    "options": [
      "Perform hand hygiene",
      "Congratulate patient and make him/her assume a desirable position",
      "Take out the bottle and compare with the patient treatment chart (manual or electronic) for the dosage",
      "Document procedure in the nurses’ note and chart on treatment chart (manual or electronic)"
    ],
    "answer": "Document procedure in the nurses’ note and chart on treatment chart (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "The nurse is carrying out administration of oral medications (mixtures). Which action best matches this part of the procedure?",
    "options": [
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Pour out the prescribed dose at eye level in the bright light, holding the bottle with the label upper most",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Encourage patient to drink the medicine and serve water if necessary"
    ],
    "answer": "Check on patient after thirty (30) minutes for therapeutic effect",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },
  {
    id: "rgn-042",
    title: "ADMINISTRATION OF INTRAVENOUS MEDICATION (INFUSION)",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "Parenteral route of medication administration entails the introduction of medications directly through the skin for gradual distribution into systemic circulation and body tissues. Routes: intravenous (vein), intramuscular (muscle), subcutaneous (under the skin), intradermal (dermis), intrathecal (spinal canal). These medications are delivered in the form of sterile ampoule, vial or volumes of fluid(s). During the procedure, the nurse is required to generally observe the patient and also observe strict aseptic technique to minimize the introduction of micro-organisms into the body.",
    purpose: [],
    indications: [
      "A valid prescription for an intravenous fluid or infusion medication",
      "Patient requires a prescribed IV route because oral or another route is unsuitable or insufficient",
      "Suitable vascular access and monitoring arrangements are available",
    ],
    equipment: [
  "A trolley containing the following:",
  "Top Shelf",
  "A sterile field with two sterile gallipot with a lid",
  "Bottom Shelf",
  "Cannula (Different sizes)",
  "Tourniquet",
  "Medication (Infusion bag/bottle, ampoule or vial)",
  "Syringe and needle",
  "Sterile glove",
  "Sterile cotton in a pack",
  "Antimicrobial solution (Methylated spirit)",
  "Sterile water",
  "Receiver for used items",
  "Sharps container",
  "Adhesive strips/tape",
  "Mackintosh and dressing towel",
  "Timer",
  "Giving set",
  "Drip stand"
],
    preparation: [
      "Review the prescription, allergies, patient identity, indication, fluid restriction, baseline observations and IV access.",
      "Inspect the container for label, expiry, seal, leaks, clarity, colour, particles and prescribed volume.",
      "Explain the procedure and possible sensations, obtain cooperation and ensure the patient can call for help.",
    ],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
  "Perform hand hygiene",
  "Ensure quality of the infusion (check for cloudiness, sediments and other particles)",
  "Prepare and send trolley and other equipment to the patient’s bedside",
  "Read the label on the infusion and compare with patient’s treatment chart (manual or electronic)",
  "Encourage patient to use the washroom or serve a bedpan/urinal",
  "Check vital signs and records",
  "Select and inspect sites for administration",
  "Place infusion stand at the side of the bed and prepare adhesive strips/tape",
  "Insert the piercing needle of giving set into the rubber seal of the infusion bag/bottle",
  "Hang the infusion bag/bottle on the drip stand",
  "Remove the cap from the other end of the giving set and attach needle to it",
  "Assist patient to assume a desirable position",
  "Protect the bed with a mackintosh and dressing towel",
  "Fill the chamber half way and expel air from the giving set",
  "Perform hand hygiene using alcohol rub",
  "Wears sterile gloves",
  "Clean the site with antimicrobial solution (methylated spirit) with cotton swab",
  "Ask assistant to apply tourniquet to locate the vein",
  "Introduce the cannula into the vein",
  "Remove the metallic stylet and put it in the sharps container",
  "Release the tourniquet and connect the giving set",
  "Secure cannula into position and check for infiltration or haematoma",
  "Remove glove and perform hand hygiene",
  "Regulate the flow rate as ordered with the aid of a timer",
  "Reposition patient appropriately in bed",
  "Observe patient for any adverse reaction",
  "Encourage patient to report any adverse reaction",
  "Check infusion rate accuracy after ten (10) minutes and continue to observe the site of insertion for swelling",
  "Record time of setting up, type and amount of fluid on the treatment, intake and output chart",
  "Document procedure on nurses’ notes (manually or electronically)",
  "Dispose off used items and decontaminate trolley",
  "Perform hand hygiene",
  "Check on patient after thirty (30) minutes for therapeutic effect"
],
    precautions: [
      "Only administer IV therapy within current competence, prescription and facility policy; seek support when required.",
      "Never use a cloudy, leaking, expired, damaged or visibly contaminated container.",
      "Do not force an infusion through resistance or continue when infiltration, extravasation or severe pain is suspected.",
      "Escalate dyspnoea, chest pain, fever, rigors, rash, facial swelling, hypotension or acute deterioration immediately.",
    ],
    afterCare: [
      "At completion, clamp or stop the infusion, manage the IV access according to the prescription and assess the patient and site.",
      "Dispose of equipment and decontaminate the work area according to local policy.",
    ],
    documentation: [
      "Record fluid or medication, concentration, volume, start and completion times, rate, route and IV site.",
      "Record observations, intake and output, patient response, interruptions, adverse effects and actions taken.",
    ],
    complications: [
      "Infiltration or extravasation",
      "Phlebitis, local infection or bloodstream infection",
      "Fluid overload or circulatory compromise",
      "Air entry, medication error or acute hypersensitivity reaction",
    ],
    patientEducation: [
      "Tell the patient to report pain, burning, swelling, wetness, chills, breathlessness, rash or feeling unwell.",
      "Advise the patient not to pull the line or adjust the pump or clamp.",
    ],
    nursingConsiderations: [
      "Use aseptic non-touch technique and follow the facility's IV therapy, fluid balance and escalation policies.",
      "Monitor patients at increased risk of fluid overload more frequently as prescribed.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=W8-WlfOtSo0",
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Ensure quality of the infusion (check for cloudiness, sediments and other particles)",
      "Protect the bed with a mackintosh and dressing towel",
      "Regulate the flow rate as ordered with the aid of a timer"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete administration of intravenous medication (infusion) safely, which action should the nurse take at this point?",
    "options": [
      "Dispose off used items and decontaminate trolley",
      "Establish rapport (Refer to steps)",
      "Insert the piercing needle of giving set into the rubber seal of the infusion bag/bottle",
      "Remove the metallic stylet and put it in the sharps container"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of intravenous medication (infusion), what should the nurse do to support informed cooperation?",
    "options": [
      "Encourage patient to report any adverse reaction",
      "Read the label on the infusion and compare with patient’s treatment chart (manual or electronic)",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Wears sterile gloves"
    ],
    "answer": "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with administration of intravenous medication (infusion), what infection-prevention action is required at this point?",
    "options": [
      "Remove glove and perform hand hygiene",
      "Establish rapport (Refer to steps)",
      "Remove the cap from the other end of the giving set and attach needle to it",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "The nurse is carrying out administration of intravenous medication (infusion). Which action best matches this part of the procedure?",
    "options": [
      "Ensure quality of the infusion (check for cloudiness, sediments and other particles)",
      "Document procedure on nurses’ notes (manually or electronically)",
      "Select and inspect sites for administration",
      "Ask assistant to apply tourniquet to locate the vein"
    ],
    "answer": "Ensure quality of the infusion (check for cloudiness, sediments and other particles)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of intravenous medication (infusion) safely, which action should the nurse take at this point?",
    "options": [
      "Reposition patient appropriately in bed",
      "Prepare and send trolley and other equipment to the patient’s bedside",
      "Ensure quality of the infusion (check for cloudiness, sediments and other particles)",
      "Fill the chamber half way and expel air from the giving set"
    ],
    "answer": "Prepare and send trolley and other equipment to the patient’s bedside",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (infusion)?",
    "options": [
      "Release the tourniquet and connect the giving set",
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Read the label on the infusion and compare with patient’s treatment chart (manual or electronic)",
      "Hang the infusion bag/bottle on the drip stand"
    ],
    "answer": "Read the label on the infusion and compare with patient’s treatment chart (manual or electronic)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (infusion)?",
    "options": [
      "Clean the site with antimicrobial solution (methylated spirit) with cotton swab",
      "Check infusion rate accuracy after ten (10) minutes and continue to observe the site of insertion for swelling",
      "Read the label on the infusion and compare with patient’s treatment chart (manual or electronic)",
      "Encourage patient to use the washroom or serve a bedpan/urinal"
    ],
    "answer": "Encourage patient to use the washroom or serve a bedpan/urinal",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "While providing administration of intravenous medication (infusion), why must the nurse complete the prescribed observations at the specified intervals?",
    "options": [
      "Check vital signs and records",
      "Regulate the flow rate as ordered with the aid of a timer",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Assist patient to assume a desirable position"
    ],
    "answer": "Check vital signs and records",
    "explanation": "Trended observations help detect deterioration early. Record the measurements, compare them with previous findings and escalate abnormal values or clinical concern according to local policy."
  },
  {
    "question": "To complete administration of intravenous medication (infusion) safely, which action should the nurse take at this point?",
    "options": [
      "Introduce the cannula into the vein",
      "Select and inspect sites for administration",
      "Dispose off used items and decontaminate trolley",
      "Place infusion stand at the side of the bed and prepare adhesive strips/tape"
    ],
    "answer": "Select and inspect sites for administration",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (infusion)?",
    "options": [
      "Perform hand hygiene using alcohol rub",
      "Observe patient for any adverse reaction",
      "Place infusion stand at the side of the bed and prepare adhesive strips/tape",
      "Prepare and send trolley and other equipment to the patient’s bedside"
    ],
    "answer": "Place infusion stand at the side of the bed and prepare adhesive strips/tape",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (infusion)?",
    "options": [
      "Remove the cap from the other end of the giving set and attach needle to it",
      "Secure cannula into position and check for infiltration or haematoma",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Insert the piercing needle of giving set into the rubber seal of the infusion bag/bottle"
    ],
    "answer": "Insert the piercing needle of giving set into the rubber seal of the infusion bag/bottle",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of intravenous medication (infusion). Which action best matches this part of the procedure?",
    "options": [
      "Hang the infusion bag/bottle on the drip stand",
      "Ask assistant to apply tourniquet to locate the vein",
      "Record time of setting up, type and amount of fluid on the treatment, intake and output chart",
      "Encourage patient to use the washroom or serve a bedpan/urinal"
    ],
    "answer": "Hang the infusion bag/bottle on the drip stand",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of intravenous medication (infusion) safely, which action should the nurse take at this point?",
    "options": [
      "Protect the bed with a mackintosh and dressing towel",
      "Remove the cap from the other end of the giving set and attach needle to it",
      "Reposition patient appropriately in bed",
      "Perform hand hygiene"
    ],
    "answer": "Remove the cap from the other end of the giving set and attach needle to it",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of intravenous medication (infusion), what should guide the nurse's choice of position?",
    "options": [
      "Place infusion stand at the side of the bed and prepare adhesive strips/tape",
      "Remove the metallic stylet and put it in the sharps container",
      "Assist patient to assume a desirable position",
      "Check on patient after thirty (30) minutes for therapeutic effect"
    ],
    "answer": "Assist patient to assume a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (infusion)?",
    "options": [
      "Read the label on the infusion and compare with patient’s treatment chart (manual or electronic)",
      "Wears sterile gloves",
      "Encourage patient to report any adverse reaction",
      "Protect the bed with a mackintosh and dressing towel"
    ],
    "answer": "Protect the bed with a mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of intravenous medication (infusion). Which action best matches this part of the procedure?",
    "options": [
      "Fill the chamber half way and expel air from the giving set",
      "Remove the cap from the other end of the giving set and attach needle to it",
      "Remove glove and perform hand hygiene",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Fill the chamber half way and expel air from the giving set",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with administration of intravenous medication (infusion), what infection-prevention action is required at this point?",
    "options": [
      "Check vital signs and records",
      "Perform hand hygiene using alcohol rub",
      "Introduce the cannula into the vein",
      "Document procedure on nurses’ notes (manually or electronically)"
    ],
    "answer": "Perform hand hygiene using alcohol rub",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (infusion)?",
    "options": [
      "Ensure quality of the infusion (check for cloudiness, sediments and other particles)",
      "Protect the bed with a mackintosh and dressing towel",
      "Wears sterile gloves",
      "Observe patient for any adverse reaction"
    ],
    "answer": "Wears sterile gloves",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of administration of intravenous medication (infusion), which principle protects the reliability of the result?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Insert the piercing needle of giving set into the rubber seal of the infusion bag/bottle",
      "Release the tourniquet and connect the giving set",
      "Clean the site with antimicrobial solution (methylated spirit) with cotton swab"
    ],
    "answer": "Clean the site with antimicrobial solution (methylated spirit) with cotton swab",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "The nurse is carrying out administration of intravenous medication (infusion). Which action best matches this part of the procedure?",
    "options": [
      "Ask assistant to apply tourniquet to locate the vein",
      "Encourage patient to use the washroom or serve a bedpan/urinal",
      "Wears sterile gloves",
      "Check infusion rate accuracy after ten (10) minutes and continue to observe the site of insertion for swelling"
    ],
    "answer": "Ask assistant to apply tourniquet to locate the vein",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of intravenous medication (infusion) safely, which action should the nurse take at this point?",
    "options": [
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Introduce the cannula into the vein",
      "Assist patient to assume a desirable position",
      "Regulate the flow rate as ordered with the aid of a timer"
    ],
    "answer": "Introduce the cannula into the vein",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (infusion)?",
    "options": [
      "Dispose off used items and decontaminate trolley",
      "Select and inspect sites for administration",
      "Remove the metallic stylet and put it in the sharps container",
      "Introduce the cannula into the vein"
    ],
    "answer": "Remove the metallic stylet and put it in the sharps container",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (infusion)?",
    "options": [
      "Encourage patient to report any adverse reaction",
      "Prepare and send trolley and other equipment to the patient’s bedside",
      "Fill the chamber half way and expel air from the giving set",
      "Release the tourniquet and connect the giving set"
    ],
    "answer": "Release the tourniquet and connect the giving set",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of intravenous medication (infusion), what should guide the nurse's choice of position?",
    "options": [
      "Secure cannula into position and check for infiltration or haematoma",
      "Establish rapport (Refer to steps)",
      "Hang the infusion bag/bottle on the drip stand",
      "Release the tourniquet and connect the giving set"
    ],
    "answer": "Secure cannula into position and check for infiltration or haematoma",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Before proceeding with administration of intravenous medication (infusion), what infection-prevention action is required at this point?",
    "options": [
      "Record time of setting up, type and amount of fluid on the treatment, intake and output chart",
      "Remove glove and perform hand hygiene",
      "Check vital signs and records",
      "Clean the site with antimicrobial solution (methylated spirit) with cotton swab"
    ],
    "answer": "Remove glove and perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (infusion)?",
    "options": [
      "Reposition patient appropriately in bed",
      "Perform hand hygiene",
      "Regulate the flow rate as ordered with the aid of a timer",
      "Protect the bed with a mackintosh and dressing towel"
    ],
    "answer": "Regulate the flow rate as ordered with the aid of a timer",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of intravenous medication (infusion), what should guide the nurse's choice of position?",
    "options": [
      "Remove the metallic stylet and put it in the sharps container",
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Place infusion stand at the side of the bed and prepare adhesive strips/tape",
      "Reposition patient appropriately in bed"
    ],
    "answer": "Reposition patient appropriately in bed",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "The nurse is carrying out administration of intravenous medication (infusion). Which action best matches this part of the procedure?",
    "options": [
      "Observe patient for any adverse reaction",
      "Check infusion rate accuracy after ten (10) minutes and continue to observe the site of insertion for swelling",
      "Read the label on the infusion and compare with patient’s treatment chart (manual or electronic)",
      "Perform hand hygiene using alcohol rub"
    ],
    "answer": "Observe patient for any adverse reaction",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "To complete administration of intravenous medication (infusion) safely, which action should the nurse take at this point?",
    "options": [
      "Secure cannula into position and check for infiltration or haematoma",
      "Encourage patient to report any adverse reaction",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Remove the cap from the other end of the giving set and attach needle to it"
    ],
    "answer": "Encourage patient to report any adverse reaction",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (infusion)?",
    "options": [
      "Ask assistant to apply tourniquet to locate the vein",
      "Document procedure on nurses’ notes (manually or electronically)",
      "Check infusion rate accuracy after ten (10) minutes and continue to observe the site of insertion for swelling",
      "Select and inspect sites for administration"
    ],
    "answer": "Check infusion rate accuracy after ten (10) minutes and continue to observe the site of insertion for swelling",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (infusion)?",
    "options": [
      "Fill the chamber half way and expel air from the giving set",
      "Reposition patient appropriately in bed",
      "Ensure quality of the infusion (check for cloudiness, sediments and other particles)",
      "Record time of setting up, type and amount of fluid on the treatment, intake and output chart"
    ],
    "answer": "Record time of setting up, type and amount of fluid on the treatment, intake and output chart",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After completing this part of administration of intravenous medication (infusion), what makes the clinical record useful for continuity of care?",
    "options": [
      "Document procedure on nurses’ notes (manually or electronically)",
      "Release the tourniquet and connect the giving set",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Insert the piercing needle of giving set into the rubber seal of the infusion bag/bottle"
    ],
    "answer": "Document procedure on nurses’ notes (manually or electronically)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "After the hands-on part of administration of intravenous medication (infusion), how should used equipment and waste be managed?",
    "options": [
      "Wears sterile gloves",
      "Dispose off used items and decontaminate trolley",
      "Check infusion rate accuracy after ten (10) minutes and continue to observe the site of insertion for swelling",
      "Encourage patient to use the washroom or serve a bedpan/urinal"
    ],
    "answer": "Dispose off used items and decontaminate trolley",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with administration of intravenous medication (infusion), what infection-prevention action is required at this point?",
    "options": [
      "Protect the bed with a mackintosh and dressing towel",
      "Regulate the flow rate as ordered with the aid of a timer",
      "Perform hand hygiene",
      "Ensure quality of the infusion (check for cloudiness, sediments and other particles)"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (infusion)?",
    "options": [
      "Place infusion stand at the side of the bed and prepare adhesive strips/tape",
      "Introduce the cannula into the vein",
      "Document procedure on nurses’ notes (manually or electronically)",
      "Check on patient after thirty (30) minutes for therapeutic effect"
    ],
    "answer": "Check on patient after thirty (30) minutes for therapeutic effect",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },
  {
    id: "rgn-043",
    title: "ADMINISTRATION OF INTRAVENOUS MEDICATION (AMPOULE/VIAL RECONSTITUTION)",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "Parenteral route of medication administration entails the introduction of medications directly through the skin for gradual distribution into systemic circulation and body tissues. Routes: intravenous (vein), intramuscular (muscle), subcutaneous (under the skin), intradermal (dermis), intrathecal (spinal canal). These medications are delivered in the form of sterile ampoule, vial or volumes of fluid(s). During the procedure, the nurse is required to generally observe the patient and also observe strict aseptic technique to minimize the introduction of micro-organisms into the body.",
    purpose: [],
    indications: [
      "A prescribed injectable medication supplied as an ampoule or powder in a vial",
      "Manufacturer or pharmacy instructions specify reconstitution before administration",
      "The patient has suitable IV access and the route is authorised",
    ],
    equipment: [
  "A trolley containing the following:",
  "Top Shelf",
  "A sterile field with two sterile gallipot with a lid",
  "Bottom Shelf",
  "Cannula (Different sizes)",
  "Tourniquet",
  "Medication (Infusion bag/bottle, ampoule or vial)",
  "Syringe and needle",
  "Sterile glove",
  "Sterile cotton in a pack",
  "Antimicrobial solution (Methylated spirit)",
  "Sterile water",
  "Receiver for used items",
  "Sharps container",
  "Adhesive strips/tape",
  "Mackintosh and dressing towel",
  "Timer"
],
    preparation: [
      "Check the prescription, patient, medication, dose, route, expiry, allergies, diluent, concentration and reconstitution instructions.",
      "Check compatibility, storage conditions, required final volume and beyond-use time before preparing the medication.",
      "Prepare in a clean designated area using aseptic non-touch technique and explain the procedure to the patient.",
    ],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Check medication label and method of reconstitution as per manufacturer’s instructions",
  "Establish rapport (Refer to steps)",
  "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
  "Perform hand hygiene",
  "Prepare and sent trolley to the bed side",
  "Ensure a cannula is in situ",
  "Read the label on the ampoule/vial and compare with patient’s treatment chart (manual or electronic) for the dosage",
  "Reconstitute as per manufacturers instruction where necessary/prescribers order",
  "Examine reconstituted medication for cloudiness and sediments",
  "Draw medication with syringe, expel air from the barrel and place the syringe into a receiver",
  "Protect bed linen with a mackintosh and dressing towel",
  "Put patient in a desirable position",
  "Perform hand hygiene",
  "Wear sterile glove",
  "Clean entry port of cannula with antimicrobial solution and cotton wool swab",
  "Fix syringe with the medication into the entry port of cannula",
  "Pull gently on the plunger to check for blood return",
  "Push medication slowly using the push-stop-push-stop technique till administration is completed",
  "Observe patient throughout the administration for any reaction and swelling",
  "Continue observing patient five (5) to ten (10) minutes later after injecting medication",
  "Reposition patient appropriately in bed",
  "Encourage patient to report any adverse reaction",
  "Remove mackintosh and dressing towel",
  "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
  "Dispose off used items and decontaminate trolley",
  "Perform hand hygiene",
  "Check on patient after thirty (30) minutes for therapeutic effect"
],
    precautions: [
      "Do not administer a solution that is cloudy, discoloured, precipitated, contaminated or outside its permitted use time.",
      "Do not substitute a diluent, change the final concentration or mix medications without authorised compatibility guidance.",
      "Do not force a syringe against resistance or continue through a painful, swollen or leaking IV site.",
      "Use a second qualified checker when required for high-alert medicines by facility policy.",
    ],
    afterCare: [
      "Monitor the patient for immediate and delayed effects and maintain IV access as prescribed.",
      "Store or discard any remaining preparation according to the product and facility policy; do not retain an unlabelled syringe.",
    ],
    documentation: [
      "Record medication, diluent, dose, final concentration, route, time, site, rate and patient response.",
      "Record batch or lot details and expiry of the reconstituted product when required, plus any reaction or escalation.",
    ],
    complications: [
      "Wrong concentration or dose",
      "Incompatibility, precipitation or contamination",
      "Infiltration, extravasation or phlebitis",
      "Rapid adverse effect or anaphylaxis",
    ],
    patientEducation: [
      "Explain that the medication may act quickly and ask the patient to report pain, burning, itching, rash, breathlessness or dizziness immediately.",
      "Reassure the patient while maintaining privacy and observing the injection site.",
    ],
    nursingConsiderations: [
      "Follow the manufacturer's instructions, pharmacy guidance and facility IV medication policy.",
      "Escalate any discrepancy rather than making an independent alteration to the prescribed preparation.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=JIYagnD_kk8",
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Perform hand hygiene",
      "Fix syringe with the medication into the entry port of cannula",
      "Check medication label and method of reconstitution as per manufacturer’s instructions"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Reconstitute as per manufacturers instruction where necessary/prescribers order",
      "Check medication label and method of reconstitution as per manufacturer’s instructions",
      "Protect bed linen with a mackintosh and dressing towel",
      "Remove mackintosh and dressing towel"
    ],
    "answer": "Check medication label and method of reconstitution as per manufacturer’s instructions",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (ampoule/vial reconstitution)?",
    "options": [
      "Perform hand hygiene",
      "Fix syringe with the medication into the entry port of cannula",
      "Establish rapport (Refer to steps)",
      "Observe patient throughout the administration for any reaction and swelling"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of intravenous medication (ampoule/vial reconstitution), what should the nurse do to support informed cooperation?",
    "options": [
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Protect bed linen with a mackintosh and dressing towel",
      "Remove mackintosh and dressing towel",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse"
    ],
    "answer": "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with administration of intravenous medication (ampoule/vial reconstitution), what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Read the label on the ampoule/vial and compare with patient’s treatment chart (manual or electronic) for the dosage",
      "Observe patient throughout the administration for any reaction and swelling",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete administration of intravenous medication (ampoule/vial reconstitution) safely, which action should the nurse take at this point?",
    "options": [
      "Protect bed linen with a mackintosh and dressing towel",
      "Prepare and sent trolley to the bed side",
      "Clean entry port of cannula with antimicrobial solution and cotton wool swab",
      "Check on patient after thirty (30) minutes for therapeutic effect"
    ],
    "answer": "Prepare and sent trolley to the bed side",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (ampoule/vial reconstitution)?",
    "options": [
      "Read the label on the ampoule/vial and compare with patient’s treatment chart (manual or electronic) for the dosage",
      "Observe patient throughout the administration for any reaction and swelling",
      "Ensure a cannula is in situ",
      "Encourage patient to report any adverse reaction"
    ],
    "answer": "Ensure a cannula is in situ",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (ampoule/vial reconstitution)?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Clean entry port of cannula with antimicrobial solution and cotton wool swab",
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Read the label on the ampoule/vial and compare with patient’s treatment chart (manual or electronic) for the dosage"
    ],
    "answer": "Read the label on the ampoule/vial and compare with patient’s treatment chart (manual or electronic) for the dosage",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of intravenous medication (ampoule/vial reconstitution). Which action best matches this part of the procedure?",
    "options": [
      "Reconstitute as per manufacturers instruction where necessary/prescribers order",
      "Draw medication with syringe, expel air from the barrel and place the syringe into a receiver",
      "Encourage patient to report any adverse reaction",
      "Ensure a cannula is in situ"
    ],
    "answer": "Reconstitute as per manufacturers instruction where necessary/prescribers order",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Clean entry port of cannula with antimicrobial solution and cotton wool swab",
      "Examine reconstituted medication for cloudiness and sediments",
      "Push medication slowly using the push-stop-push-stop technique till administration is completed",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Examine reconstituted medication for cloudiness and sediments",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Examine reconstituted medication for cloudiness and sediments",
      "Encourage patient to report any adverse reaction",
      "Draw medication with syringe, expel air from the barrel and place the syringe into a receiver",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Draw medication with syringe, expel air from the barrel and place the syringe into a receiver",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (ampoule/vial reconstitution)?",
    "options": [
      "Prepare and sent trolley to the bed side",
      "Push medication slowly using the push-stop-push-stop technique till administration is completed",
      "Establish rapport (Refer to steps)",
      "Protect bed linen with a mackintosh and dressing towel"
    ],
    "answer": "Protect bed linen with a mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of intravenous medication (ampoule/vial reconstitution), what should guide the nurse's choice of position?",
    "options": [
      "Put patient in a desirable position",
      "Wear sterile glove",
      "Dispose off used items and decontaminate trolley",
      "Examine reconstituted medication for cloudiness and sediments"
    ],
    "answer": "Put patient in a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Before proceeding with administration of intravenous medication (ampoule/vial reconstitution), what infection-prevention action is required at this point?",
    "options": [
      "Push medication slowly using the push-stop-push-stop technique till administration is completed",
      "Perform hand hygiene",
      "Reposition patient appropriately in bed",
      "Ensure a cannula is in situ"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (ampoule/vial reconstitution)?",
    "options": [
      "Put patient in a desirable position",
      "Dispose off used items and decontaminate trolley",
      "Wear sterile glove",
      "Check medication label and method of reconstitution as per manufacturer’s instructions"
    ],
    "answer": "Wear sterile glove",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of administration of intravenous medication (ampoule/vial reconstitution), which principle protects the reliability of the result?",
    "options": [
      "Reconstitute as per manufacturers instruction where necessary/prescribers order",
      "Reposition patient appropriately in bed",
      "Prepare and sent trolley to the bed side",
      "Clean entry port of cannula with antimicrobial solution and cotton wool swab"
    ],
    "answer": "Clean entry port of cannula with antimicrobial solution and cotton wool swab",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Fix syringe with the medication into the entry port of cannula",
      "Pull gently on the plunger to check for blood return",
      "Check medication label and method of reconstitution as per manufacturer’s instructions",
      "Put patient in a desirable position"
    ],
    "answer": "Fix syringe with the medication into the entry port of cannula",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete administration of intravenous medication (ampoule/vial reconstitution) safely, which action should the nurse take at this point?",
    "options": [
      "Reposition patient appropriately in bed",
      "Pull gently on the plunger to check for blood return",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Reconstitute as per manufacturers instruction where necessary/prescribers order"
    ],
    "answer": "Pull gently on the plunger to check for blood return",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Fix syringe with the medication into the entry port of cannula",
      "Check medication label and method of reconstitution as per manufacturer’s instructions",
      "Push medication slowly using the push-stop-push-stop technique till administration is completed",
      "Perform hand hygiene"
    ],
    "answer": "Push medication slowly using the push-stop-push-stop technique till administration is completed",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (ampoule/vial reconstitution)?",
    "options": [
      "Protect bed linen with a mackintosh and dressing towel",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Reconstitute as per manufacturers instruction where necessary/prescribers order",
      "Observe patient throughout the administration for any reaction and swelling"
    ],
    "answer": "Observe patient throughout the administration for any reaction and swelling",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Continue observing patient five (5) to ten (10) minutes later after injecting medication",
      "Observe patient throughout the administration for any reaction and swelling",
      "Perform hand hygiene",
      "Fix syringe with the medication into the entry port of cannula"
    ],
    "answer": "Continue observing patient five (5) to ten (10) minutes later after injecting medication",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "When positioning the patient for administration of intravenous medication (ampoule/vial reconstitution), what should guide the nurse's choice of position?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Reposition patient appropriately in bed",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Protect bed linen with a mackintosh and dressing towel"
    ],
    "answer": "Reposition patient appropriately in bed",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (ampoule/vial reconstitution)?",
    "options": [
      "Observe patient throughout the administration for any reaction and swelling",
      "Perform hand hygiene",
      "Encourage patient to report any adverse reaction",
      "Read the label on the ampoule/vial and compare with patient’s treatment chart (manual or electronic) for the dosage"
    ],
    "answer": "Encourage patient to report any adverse reaction",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (ampoule/vial reconstitution)?",
    "options": [
      "Clean entry port of cannula with antimicrobial solution and cotton wool swab",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Protect bed linen with a mackintosh and dressing towel",
      "Remove mackintosh and dressing towel"
    ],
    "answer": "Remove mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After completing this part of administration of intravenous medication (ampoule/vial reconstitution), what makes the clinical record useful for continuity of care?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Encourage patient to report any adverse reaction",
      "Read the label on the ampoule/vial and compare with patient’s treatment chart (manual or electronic) for the dosage",
      "Observe patient throughout the administration for any reaction and swelling"
    ],
    "answer": "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "After the hands-on part of administration of intravenous medication (ampoule/vial reconstitution), how should used equipment and waste be managed?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Dispose off used items and decontaminate trolley",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Clean entry port of cannula with antimicrobial solution and cotton wool swab"
    ],
    "answer": "Dispose off used items and decontaminate trolley",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with administration of intravenous medication (ampoule/vial reconstitution), what infection-prevention action is required at this point?",
    "options": [
      "Remove mackintosh and dressing towel",
      "Reconstitute as per manufacturers instruction where necessary/prescribers order",
      "Perform hand hygiene",
      "Protect bed linen with a mackintosh and dressing towel"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (ampoule/vial reconstitution)?",
    "options": [
      "Push medication slowly using the push-stop-push-stop technique till administration is completed",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Clean entry port of cannula with antimicrobial solution and cotton wool swab",
      "Check on patient after thirty (30) minutes for therapeutic effect"
    ],
    "answer": "Check on patient after thirty (30) minutes for therapeutic effect",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },
  {
    id: "rgn-044",
    title: "ADMINISTRATION OF INTRAVENOUS MEDICATION (VIAL)",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "Parenteral route of medication administration entails the introduction of medications directly through the skin for gradual distribution into systemic circulation and body tissues. Routes: intravenous (vein), intramuscular (muscle), subcutaneous (under the skin), intradermal (dermis), intrathecal (spinal canal). These medications are delivered in the form of sterile ampoule, vial or volumes of fluid(s). During the procedure, the nurse is required to generally observe the patient and also observe strict aseptic technique to minimize the introduction of micro-organisms into the body.",
    purpose: [],
    indications: [
      "A valid prescription for a medication supplied in a vial for IV administration",
      "The medication has been prepared or reconstituted according to authorised instructions",
      "The patient has suitable access and the prescribed method is within the nurse's competence",
    ],
    equipment: [
  "A trolley containing the following:",
  "Top Shelf",
  "A sterile field with two sterile gallipot with a lid",
  "Bottom Shelf",
  "Cannula (Different sizes)",
  "Tourniquet",
  "Medication (Infusion bag/bottle, ampoule or vial)",
  "Syringe and needle",
  "Sterile glove",
  "Sterile cotton in a pack",
  "Antimicrobial solution (Methylated spirit)",
  "Sterile water",
  "Receiver for used items",
  "Sharps container",
  "Adhesive strips/tape",
  "Mackintosh and dressing towel",
  "Timer",
  "Drip stand",
  "Giving set"
],
    preparation: [
      "Check patient identifiers, prescription, vial label, concentration, diluent, compatibility, expiry, allergies and route.",
      "Inspect the vial and solution for seal damage, leaks, cloudiness, particles or unexpected colour.",
      "Explain the medication and monitoring plan, obtain cooperation and ensure the patient can call for assistance.",
    ],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Check medication label and method of reconstitution as per manufacturer’s instructions",
  "Establish rapport (Refer to steps)",
  "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
  "Perform hand hygiene",
  "Prepare and sent trolley to the bed side",
  "Ensure a cannula is in situ",
  "Read the label on the vial and compare with patient’s treatment chart (manual or electronic) for the dosage",
  "Reconstitute as per manufacturers instruction/prescribers order",
  "Ensure quality of the medication (check for cloudiness, sediments and particles)",
  "Place infusion stand at the side of the bed",
  "Hang vial on the drip stand",
  "Draw the medication into a syringe",
  "Protect bed with a mackintosh and dressing towel",
  "Remove the cap from the other end of the giving set",
  "Connect giving set, fill the chamber half way and expel air",
  "Perform hand hygiene",
  "Wear sterile gloves",
  "Clean the entry port of cannula with antimicrobial solution (methylated spirit)",
  "Connect giving set to the cannula via entry port",
  "Regulate the flow rate as ordered with a timer",
  "Reposition patient appropriately in bed",
  "Observe patient for adverse reaction",
  "Encourage patient to report any adverse reaction",
  "Remove mackintosh and dressing towel",
  "Record time of setting up medication, name of medication and amount on the intake and output chart and Treatment Chart (Manual or Electronic)",
  "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
  "Dispose off used items and decontaminate trolley",
  "Perform hand hygiene",
  "Check on patient after thirty (30) minutes for therapeutic effect",
  "Remove giving set from cannula after administration of medication and cover the entry port cannula"
],
    precautions: [
      "Do not administer medication from a vial with an uncertain label, expiry, appearance or storage history.",
      "Check compatibility before adding medication to an infusion and use a separate line when indicated.",
      "Do not reuse single-use vials, needles or syringes.",
      "Escalate suspected extravasation, phlebitis, infection, medication error or systemic reaction immediately.",
    ],
    afterCare: [
      "Keep the patient comfortable and continue observation for the expected monitoring period.",
      "Remove or maintain the line according to the prescription and local IV therapy policy.",
    ],
    documentation: [
      "Record medication name, dose, concentration, route, start and completion times, rate, site and response.",
      "Record any interruption, refusal, adverse effect, batch detail when required and action taken.",
    ],
    complications: [
      "Medication or concentration error",
      "Infiltration, extravasation, phlebitis or infection",
      "Rapid adverse drug effect or allergic reaction",
      "Air entry or interruption of prescribed therapy",
    ],
    patientEducation: [
      "Ask the patient to report burning, swelling, pain, itching, chills, breathlessness, chest discomfort or dizziness.",
      "Explain that the infusion equipment should not be adjusted by the patient.",
    ],
    nursingConsiderations: [
      "Follow local policy for flushing, line access, compatibility, infusion rates and disposal.",
      "Use an infusion pump when required for accurate delivery and monitor it according to policy.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=n7mVbMRTi_E",
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Perform hand hygiene",
      "Connect giving set, fill the chamber half way and expel air",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Prepare and sent trolley to the bed side",
      "Check medication label and method of reconstitution as per manufacturer’s instructions",
      "Hang vial on the drip stand",
      "Encourage patient to report any adverse reaction"
    ],
    "answer": "Check medication label and method of reconstitution as per manufacturer’s instructions",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (vial)?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Draw the medication into a syringe",
      "Establish rapport (Refer to steps)",
      "Connect giving set to the cannula via entry port"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of intravenous medication (vial), what should the nurse do to support informed cooperation?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Reconstitute as per manufacturers instruction/prescribers order",
      "Regulate the flow rate as ordered with a timer",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse"
    ],
    "answer": "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with administration of intravenous medication (vial), what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Connect giving set, fill the chamber half way and expel air",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete administration of intravenous medication (vial) safely, which action should the nurse take at this point?",
    "options": [
      "Perform hand hygiene",
      "Prepare and sent trolley to the bed side",
      "Hang vial on the drip stand",
      "Encourage patient to report any adverse reaction"
    ],
    "answer": "Prepare and sent trolley to the bed side",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (vial)?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Draw the medication into a syringe",
      "Ensure a cannula is in situ",
      "Connect giving set to the cannula via entry port"
    ],
    "answer": "Ensure a cannula is in situ",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (vial)?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Reconstitute as per manufacturers instruction/prescribers order",
      "Regulate the flow rate as ordered with a timer",
      "Read the label on the vial and compare with patient’s treatment chart (manual or electronic) for the dosage"
    ],
    "answer": "Read the label on the vial and compare with patient’s treatment chart (manual or electronic) for the dosage",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of intravenous medication (vial). Which action best matches this part of the procedure?",
    "options": [
      "Reconstitute as per manufacturers instruction/prescribers order",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Connect giving set, fill the chamber half way and expel air",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Reconstitute as per manufacturers instruction/prescribers order",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Perform hand hygiene",
      "Ensure quality of the medication (check for cloudiness, sediments and particles)",
      "Hang vial on the drip stand",
      "Encourage patient to report any adverse reaction"
    ],
    "answer": "Ensure quality of the medication (check for cloudiness, sediments and particles)",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (vial)?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Draw the medication into a syringe",
      "Place infusion stand at the side of the bed",
      "Connect giving set to the cannula via entry port"
    ],
    "answer": "Place infusion stand at the side of the bed",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (vial)?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Read the label on the vial and compare with patient’s treatment chart (manual or electronic) for the dosage",
      "Regulate the flow rate as ordered with a timer",
      "Hang vial on the drip stand"
    ],
    "answer": "Hang vial on the drip stand",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Draw the medication into a syringe",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Connect giving set, fill the chamber half way and expel air",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Draw the medication into a syringe",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete administration of intravenous medication (vial) safely, which action should the nurse take at this point?",
    "options": [
      "Perform hand hygiene",
      "Protect bed with a mackintosh and dressing towel",
      "Place infusion stand at the side of the bed",
      "Encourage patient to report any adverse reaction"
    ],
    "answer": "Protect bed with a mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (vial)?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Hang vial on the drip stand",
      "Remove the cap from the other end of the giving set",
      "Connect giving set to the cannula via entry port"
    ],
    "answer": "Remove the cap from the other end of the giving set",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (vial)?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Read the label on the vial and compare with patient’s treatment chart (manual or electronic) for the dosage",
      "Regulate the flow rate as ordered with a timer",
      "Connect giving set, fill the chamber half way and expel air"
    ],
    "answer": "Connect giving set, fill the chamber half way and expel air",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before proceeding with administration of intravenous medication (vial), what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Connect giving set, fill the chamber half way and expel air",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete administration of intravenous medication (vial) safely, which action should the nurse take at this point?",
    "options": [
      "Perform hand hygiene",
      "Wear sterile gloves",
      "Place infusion stand at the side of the bed",
      "Encourage patient to report any adverse reaction"
    ],
    "answer": "Wear sterile gloves",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (vial)?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Hang vial on the drip stand",
      "Clean the entry port of cannula with antimicrobial solution (methylated spirit)",
      "Connect giving set to the cannula via entry port"
    ],
    "answer": "Clean the entry port of cannula with antimicrobial solution (methylated spirit)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (vial)?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Read the label on the vial and compare with patient’s treatment chart (manual or electronic) for the dosage",
      "Regulate the flow rate as ordered with a timer",
      "Connect giving set to the cannula via entry port"
    ],
    "answer": "Connect giving set to the cannula via entry port",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of intravenous medication (vial). Which action best matches this part of the procedure?",
    "options": [
      "Regulate the flow rate as ordered with a timer",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Remove the cap from the other end of the giving set",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Regulate the flow rate as ordered with a timer",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of intravenous medication (vial), what should guide the nurse's choice of position?",
    "options": [
      "Perform hand hygiene",
      "Reposition patient appropriately in bed",
      "Place infusion stand at the side of the bed",
      "Encourage patient to report any adverse reaction"
    ],
    "answer": "Reposition patient appropriately in bed",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "Which step should be performed now during administration of intravenous medication (vial)?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Hang vial on the drip stand",
      "Observe patient for adverse reaction",
      "Clean the entry port of cannula with antimicrobial solution (methylated spirit)"
    ],
    "answer": "Observe patient for adverse reaction",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intravenous medication (vial)?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Read the label on the vial and compare with patient’s treatment chart (manual or electronic) for the dosage",
      "Connect giving set to the cannula via entry port",
      "Encourage patient to report any adverse reaction"
    ],
    "answer": "Encourage patient to report any adverse reaction",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of intravenous medication (vial). Which action best matches this part of the procedure?",
    "options": [
      "Remove mackintosh and dressing towel",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Remove the cap from the other end of the giving set",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Remove mackintosh and dressing towel",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Perform hand hygiene",
      "Record time of setting up medication, name of medication and amount on the intake and output chart and Treatment Chart (Manual or Electronic)",
      "Place infusion stand at the side of the bed",
      "Observe patient for adverse reaction"
    ],
    "answer": "Record time of setting up medication, name of medication and amount on the intake and output chart and Treatment Chart (Manual or Electronic)",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "After completing this part of administration of intravenous medication (vial), what makes the clinical record useful for continuity of care?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Hang vial on the drip stand",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Clean the entry port of cannula with antimicrobial solution (methylated spirit)"
    ],
    "answer": "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "After the hands-on part of administration of intravenous medication (vial), how should used equipment and waste be managed?",
    "options": [
      "Record time of setting up medication, name of medication and amount on the intake and output chart and Treatment Chart (Manual or Electronic)",
      "Read the label on the vial and compare with patient’s treatment chart (manual or electronic) for the dosage",
      "Connect giving set to the cannula via entry port",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Dispose off used items and decontaminate trolley",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with administration of intravenous medication (vial), what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Explain procedure to patient and ensure patient’s right to know/consent and to refuse",
      "Connect giving set, fill the chamber half way and expel air",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete administration of intravenous medication (vial) safely, which action should the nurse take at this point?",
    "options": [
      "Perform hand hygiene",
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Place infusion stand at the side of the bed",
      "Observe patient for adverse reaction"
    ],
    "answer": "Check on patient after thirty (30) minutes for therapeutic effect",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Hang vial on the drip stand",
      "Remove giving set from cannula after administration of medication and cover the entry port cannula",
      "Clean the entry port of cannula with antimicrobial solution (methylated spirit)"
    ],
    "answer": "Remove giving set from cannula after administration of medication and cover the entry port cannula",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  }
],
  },
  {
    id: "rgn-045",
    title: "ADMINISTRATION OF INTRAMUSCULAR MEDICATION",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "This is the administration of chemical substances that alter the physiological function of the patient/client with the potential of improving his/her health status. As part of the care process the nurse is expected to administer all medications prescribed for the patient/client during hospitalization. The nurse has the responsibility of familiarizing him/herself with the approved institutional protocols and safety measures on medications. The basic seven (7) rights: right patient, right medication, right dosage, right route, right time, right of patient to refuse the medication, right to documentation.",
    purpose: [],
    indications: [
      "A valid prescription specifies the intramuscular route",
      "Medication volume and formulation are suitable for intramuscular tissue",
      "The patient has an appropriate muscle site after assessment",
    ],
    equipment: [
  "A tray containing the following:",
  "Medication",
  "Two or three syringes",
  "Needles",
  "Cotton wool swabs in gallipot",
  "Antimicrobial solution",
  "Treatment chat",
  "File where necessary",
  "Sharps container"
],
    preparation: [
      "Check patient, medication, dose, route, time, indication, allergies, expiry and prescription.",
      "Assess age, muscle mass, skin condition, bleeding risk, anticoagulant use, mobility and previous injection sites.",
      "Explain the procedure, obtain cooperation and consent, provide privacy and position the patient safely.",
    ],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain procedure and reassure patient",
  "Ensure patient’s right to know/consent and to refuse medication",
  "Perform hand hygiene",
  "Prepare and sent tray to the bed side",
  "Check patient details and medication dosage against the treatment chart (manual or electronic)",
  "Assemble syringe and needle using sterile technique",
  "File/break ampoule or remove metal cap of vial with a clean swab",
  "Draw medication with a syringe and discard the needle into the sharp container",
  "Replace needle with a new one and expel air",
  "Assist patient into a required position and exposes site for injection",
  "Clean injection site with cotton swab dipped in antimicrobial solution (i.e. upper outer quadrant for buttocks and outer aspect for thigh)",
  "Insert the needle quickly and firmly deep into the muscle at right angle",
  "Withdraw plunger a little to ensure needle is not in the blood vessel (if blood appears withdraws needle)",
  "Push to release medication into the tissue",
  "Withdraw the syringe and needle quickly and with a swab gently applies pressure to the site of injection",
  "Discard syringe and needle into a sharps container",
  "Put patient into a desirable position",
  "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
  "Dispose off used items and decontaminate tray",
  "Perform hand hygiene",
  "Check on patient after thirty (30) minutes for therapeutic effect"
],
    precautions: [
      "Do not inject into an infected, bruised, scarred, oedematous or damaged site.",
      "Use additional assessment and advice for patients with bleeding disorders, anticoagulants, low muscle mass or altered sensation.",
      "Never reuse a needle or syringe and never leave a sharp on the tray.",
      "Report severe pain, nerve symptoms, persistent bleeding, extensive swelling or anaphylaxis urgently.",
    ],
    afterCare: [
      "Inspect the site and reassess the patient during the appropriate observation period.",
      "Offer advice about expected mild soreness and when to report worsening symptoms.",
    ],
    documentation: [
      "Record medication, dose, route, date and time, exact site, patient response and authentication.",
      "Document refusal, failed attempt, bleeding, suspected injury, adverse response and escalation.",
    ],
    complications: [
      "Pain, bruising, haematoma or bleeding",
      "Infection or abscess",
      "Nerve or tissue injury",
      "Medication error or allergic reaction",
    ],
    patientEducation: [
      "Explain the purpose of the medication and advise the patient to report increasing pain, redness, swelling, numbness, weakness or fever.",
      "Respect the patient's right to ask questions or refuse, and explain what will happen next.",
    ],
    nursingConsiderations: [
      "Rotate sites when repeated injections are prescribed and follow the facility's approved site guidance.",
      "Use a qualified interpreter or communication aid when needed for consent and safety instructions.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=jmIwY6zwdMo",
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Perform hand hygiene",
      "Push to release medication into the tissue",
      "Prepare and sent tray to the bed side"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete administration of intramuscular medication safely, which action should the nurse take at this point?",
    "options": [
      "Clean injection site with cotton swab dipped in antimicrobial solution (i.e. upper outer quadrant for buttocks and outer aspect for thigh)",
      "Establish rapport (Refer to steps)",
      "Assist patient into a required position and exposes site for injection",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of intramuscular medication, what should the nurse do to support informed cooperation?",
    "options": [
      "File/break ampoule or remove metal cap of vial with a clean swab",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Explain procedure and reassure patient",
      "Put patient into a desirable position"
    ],
    "answer": "Explain procedure and reassure patient",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before carrying out administration of intramuscular medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Perform hand hygiene",
      "Push to release medication into the tissue",
      "Prepare and sent tray to the bed side",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Ensure patient’s right to know/consent and to refuse medication",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with administration of intramuscular medication, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Assist patient into a required position and exposes site for injection",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Clean injection site with cotton swab dipped in antimicrobial solution (i.e. upper outer quadrant for buttocks and outer aspect for thigh)"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete administration of intramuscular medication safely, which action should the nurse take at this point?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Prepare and sent tray to the bed side",
      "Put patient into a desirable position",
      "File/break ampoule or remove metal cap of vial with a clean swab"
    ],
    "answer": "Prepare and sent tray to the bed side",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Push to release medication into the tissue",
      "Perform hand hygiene",
      "Check patient details and medication dosage against the treatment chart (manual or electronic)",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Check patient details and medication dosage against the treatment chart (manual or electronic)",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intramuscular medication?",
    "options": [
      "Assist patient into a required position and exposes site for injection",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Clean injection site with cotton swab dipped in antimicrobial solution (i.e. upper outer quadrant for buttocks and outer aspect for thigh)",
      "Assemble syringe and needle using sterile technique"
    ],
    "answer": "Assemble syringe and needle using sterile technique",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of administration of intramuscular medication, which principle protects the reliability of the result?",
    "options": [
      "File/break ampoule or remove metal cap of vial with a clean swab",
      "Put patient into a desirable position",
      "Assemble syringe and needle using sterile technique",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)"
    ],
    "answer": "File/break ampoule or remove metal cap of vial with a clean swab",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Perform hand hygiene",
      "Draw medication with a syringe and discard the needle into the sharp container",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Push to release medication into the tissue"
    ],
    "answer": "Draw medication with a syringe and discard the needle into the sharp container",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which step should be performed now during administration of intramuscular medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Clean injection site with cotton swab dipped in antimicrobial solution (i.e. upper outer quadrant for buttocks and outer aspect for thigh)",
      "Replace needle with a new one and expel air",
      "Assist patient into a required position and exposes site for injection"
    ],
    "answer": "Replace needle with a new one and expel air",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of intramuscular medication, what should guide the nurse's choice of position?",
    "options": [
      "Put patient into a desirable position",
      "Assemble syringe and needle using sterile technique",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Assist patient into a required position and exposes site for injection"
    ],
    "answer": "Assist patient into a required position and exposes site for injection",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "When collecting a specimen as part of administration of intramuscular medication, which principle protects the reliability of the result?",
    "options": [
      "Clean injection site with cotton swab dipped in antimicrobial solution (i.e. upper outer quadrant for buttocks and outer aspect for thigh)",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Push to release medication into the tissue",
      "Perform hand hygiene"
    ],
    "answer": "Clean injection site with cotton swab dipped in antimicrobial solution (i.e. upper outer quadrant for buttocks and outer aspect for thigh)",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "To complete administration of intramuscular medication safely, which action should the nurse take at this point?",
    "options": [
      "Assist patient into a required position and exposes site for injection",
      "Insert the needle quickly and firmly deep into the muscle at right angle",
      "Replace needle with a new one and expel air",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date"
    ],
    "answer": "Insert the needle quickly and firmly deep into the muscle at right angle",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intramuscular medication?",
    "options": [
      "Assemble syringe and needle using sterile technique",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Withdraw plunger a little to ensure needle is not in the blood vessel (if blood appears withdraws needle)",
      "Put patient into a desirable position"
    ],
    "answer": "Withdraw plunger a little to ensure needle is not in the blood vessel (if blood appears withdraws needle)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Ensure patient’s right to know/consent and to refuse medication",
      "Withdraw plunger a little to ensure needle is not in the blood vessel (if blood appears withdraws needle)",
      "Perform hand hygiene",
      "Push to release medication into the tissue"
    ],
    "answer": "Push to release medication into the tissue",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "When collecting a specimen as part of administration of intramuscular medication, which principle protects the reliability of the result?",
    "options": [
      "Withdraw the syringe and needle quickly and with a swab gently applies pressure to the site of injection",
      "Replace needle with a new one and expel air",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Assist patient into a required position and exposes site for injection"
    ],
    "answer": "Withdraw the syringe and needle quickly and with a swab gently applies pressure to the site of injection",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "To complete administration of intramuscular medication safely, which action should the nurse take at this point?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Discard syringe and needle into a sharps container",
      "Put patient into a desirable position",
      "Assemble syringe and needle using sterile technique"
    ],
    "answer": "Discard syringe and needle into a sharps container",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of intramuscular medication, what should guide the nurse's choice of position?",
    "options": [
      "Withdraw plunger a little to ensure needle is not in the blood vessel (if blood appears withdraws needle)",
      "Perform hand hygiene",
      "Put patient into a desirable position",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Put patient into a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "After completing this part of administration of intramuscular medication, what makes the clinical record useful for continuity of care?",
    "options": [
      "Replace needle with a new one and expel air",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Assist patient into a required position and exposes site for injection",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)"
    ],
    "answer": "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "After the hands-on part of administration of intramuscular medication, how should used equipment and waste be managed?",
    "options": [
      "Dispose off used items and decontaminate tray",
      "Discard syringe and needle into a sharps container",
      "Assemble syringe and needle using sterile technique",
      "Put patient into a desirable position"
    ],
    "answer": "Dispose off used items and decontaminate tray",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with administration of intramuscular medication, what infection-prevention action is required at this point?",
    "options": [
      "Prepare and sent tray to the bed side",
      "Perform hand hygiene",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Push to release medication into the tissue"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "Which step should be performed now during administration of intramuscular medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Assist patient into a required position and exposes site for injection",
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Replace needle with a new one and expel air"
    ],
    "answer": "Check on patient after thirty (30) minutes for therapeutic effect",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },
  {
    id: "rgn-046",
    title: "ADMINISTRATION OF SUBCUTANEOUS MEDICATION",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "This is the introduction of the low doses of medication into the highly vascular layer beneath the epidermis.",
    purpose: [],
    indications: [
      "A valid prescription specifies the subcutaneous route",
      "The medication and volume are suitable for subcutaneous administration",
      "The patient has an appropriate area of healthy subcutaneous tissue",
    ],
    equipment: [
  "A tray with the following:",
  "Sterile 1-2mls syringe and needles",
  "Prefilled syringe with medication (if available)",
  "Ampoule containing the medication",
  "Gallipot with sterile cotton wool swabs",
  "Gallipot with antimicrobial solution",
  "Receiver for used swabs",
  "File if necessary"
],
    preparation: [
      "Verify patient, medication, dose, route, time, allergies, expiry, indication and prescription.",
      "Assess the patient's tissue depth, skin condition, bleeding risk, previous injection sites and ability to cooperate.",
      "Explain the procedure, obtain consent and provide privacy before positioning the patient.",
    ],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain procedure and reassure patient",
  "Ensure patient’s right to know/consent and to refuse medication",
  "Perform hand hygiene",
  "Choose the correct needle size",
  "Prepare and sent tray to the bed side",
  "Check patient details and medication dosage against the treatment chart (manual or electronic)",
  "Assemble syringe and needle using sterile technique",
  "File/break ampoule with a clean swab",
  "Draw medication with a syringe and discard the needle into the sharps container",
  "If it is a prefilled syringe with medication remove the cover of the syringe",
  "Expose the chosen site",
  "Clean the chosen site with a swab dipped in antimicrobial solution",
  "Grasp/spread the skin firmly",
  "Insert the needle into the skin at an angle of 45° and release the grasped skin",
  "Avoid step 18 if it is a prefilled medicated syringe",
  "Pull back the plunger, if no blood is aspirated depress the plunger and inject the medication slowly. (If blood appears withdraw the needle, replace it and begin again. Explain to the patient what has occurred)",
  "Withdraw the needle rapidly, apply pressure to any bleeding point",
  "Discard syringe and needle into a sharps container",
  "Put patient into a desirable position",
  "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
  "Dispose off used items and decontaminate tray",
  "Perform hand hygiene",
  "Check on patient after thirty (30) minutes for therapeutic effect"
],
    precautions: [
      "Avoid bruised, scarred, inflamed, infected, oedematous or previously overused sites.",
      "Do not massage medications for which massage can alter absorption or cause tissue injury.",
      "Use extra caution and seek guidance for patients with bleeding risk, very little subcutaneous tissue or altered sensation.",
      "Escalate suspected medication error, severe local reaction, bleeding or systemic allergy.",
    ],
    afterCare: [
      "Check the site and patient response during the appropriate follow-up period.",
      "Teach site rotation and safe observation when the patient or caregiver will continue prescribed injections.",
    ],
    documentation: [
      "Record medication, dose, route, date and time, site, patient response and authentication.",
      "Document site reaction, refusal, failed attempt, patient education and any escalation.",
    ],
    complications: [
      "Bruising, bleeding, pain or haematoma",
      "Incorrect depth or altered absorption",
      "Lipodystrophy or local tissue damage with repeated injections",
      "Infection or allergic reaction",
    ],
    patientEducation: [
      "Tell the patient to report increasing redness, warmth, swelling, severe pain, bleeding or breathing difficulty.",
      "Explain the importance of not rubbing the site and of using a planned rotation schedule when applicable.",
    ],
    nursingConsiderations: [
      "Follow product-specific instructions for prefilled syringes and do not expel medication unless the product guidance permits it.",
      "Use the facility's approved needle, angle, site and sharps-disposal standards.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=H0EtSorwGnU",
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Perform hand hygiene",
      "Insert the needle into the skin at an angle of 45° and release the grasped skin",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete administration of subcutaneous medication safely, which action should the nurse take at this point?",
    "options": [
      "Draw medication with a syringe and discard the needle into the sharps container",
      "Establish rapport (Refer to steps)",
      "If it is a prefilled syringe with medication remove the cover of the syringe",
      "Dispose off used items and decontaminate tray"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of subcutaneous medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Prepare and sent tray to the bed side",
      "Pull back the plunger, if no blood is aspirated depress the plunger and inject the medication slowly. (If blood appears withdraw the needle, replace it and begin again. Explain to the patient what has occurred)",
      "Explain procedure and reassure patient",
      "Withdraw the needle rapidly, apply pressure to any bleeding point"
    ],
    "answer": "Explain procedure and reassure patient",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before carrying out administration of subcutaneous medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Clean the chosen site with a swab dipped in antimicrobial solution",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Ensure patient’s right to know/consent and to refuse medication",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with administration of subcutaneous medication, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "File/break ampoule with a clean swab",
      "Put patient into a desirable position",
      "Assemble syringe and needle using sterile technique"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete administration of subcutaneous medication safely, which action should the nurse take at this point?",
    "options": [
      "Insert the needle into the skin at an angle of 45° and release the grasped skin",
      "Choose the correct needle size",
      "Avoid step 18 if it is a prefilled medicated syringe",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Choose the correct needle size",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of subcutaneous medication?",
    "options": [
      "If it is a prefilled syringe with medication remove the cover of the syringe",
      "Dispose off used items and decontaminate tray",
      "Prepare and sent tray to the bed side",
      "Check on patient after thirty (30) minutes for therapeutic effect"
    ],
    "answer": "Prepare and sent tray to the bed side",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Prepare and sent tray to the bed side",
      "Withdraw the needle rapidly, apply pressure to any bleeding point",
      "Choose the correct needle size",
      "Check patient details and medication dosage against the treatment chart (manual or electronic)"
    ],
    "answer": "Check patient details and medication dosage against the treatment chart (manual or electronic)",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "The nurse is carrying out administration of subcutaneous medication. Which action best matches this part of the procedure?",
    "options": [
      "Assemble syringe and needle using sterile technique",
      "Grasp/spread the skin firmly",
      "Establish rapport (Refer to steps)",
      "Clean the chosen site with a swab dipped in antimicrobial solution"
    ],
    "answer": "Assemble syringe and needle using sterile technique",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of administration of subcutaneous medication, which principle protects the reliability of the result?",
    "options": [
      "Put patient into a desirable position",
      "File/break ampoule with a clean swab",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Assemble syringe and needle using sterile technique"
    ],
    "answer": "File/break ampoule with a clean swab",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Avoid step 18 if it is a prefilled medicated syringe",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Draw medication with a syringe and discard the needle into the sharps container",
      "Perform hand hygiene"
    ],
    "answer": "Draw medication with a syringe and discard the needle into the sharps container",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Expose the chosen site",
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Draw medication with a syringe and discard the needle into the sharps container",
      "If it is a prefilled syringe with medication remove the cover of the syringe"
    ],
    "answer": "If it is a prefilled syringe with medication remove the cover of the syringe",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "The nurse is carrying out administration of subcutaneous medication. Which action best matches this part of the procedure?",
    "options": [
      "Expose the chosen site",
      "Discard syringe and needle into a sharps container",
      "Prepare and sent tray to the bed side",
      "Withdraw the needle rapidly, apply pressure to any bleeding point"
    ],
    "answer": "Expose the chosen site",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of administration of subcutaneous medication, which principle protects the reliability of the result?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Clean the chosen site with a swab dipped in antimicrobial solution",
      "Explain procedure and reassure patient",
      "Grasp/spread the skin firmly"
    ],
    "answer": "Clean the chosen site with a swab dipped in antimicrobial solution",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "Which step should be performed now during administration of subcutaneous medication?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Assemble syringe and needle using sterile technique",
      "Grasp/spread the skin firmly",
      "File/break ampoule with a clean swab"
    ],
    "answer": "Grasp/spread the skin firmly",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of subcutaneous medication?",
    "options": [
      "Pull back the plunger, if no blood is aspirated depress the plunger and inject the medication slowly. (If blood appears withdraw the needle, replace it and begin again. Explain to the patient what has occurred)",
      "Perform hand hygiene",
      "Avoid step 18 if it is a prefilled medicated syringe",
      "Insert the needle into the skin at an angle of 45° and release the grasped skin"
    ],
    "answer": "Insert the needle into the skin at an angle of 45° and release the grasped skin",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "The nurse is carrying out administration of subcutaneous medication. Which action best matches this part of the procedure?",
    "options": [
      "Avoid step 18 if it is a prefilled medicated syringe",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "If it is a prefilled syringe with medication remove the cover of the syringe",
      "Check on patient after thirty (30) minutes for therapeutic effect"
    ],
    "answer": "Avoid step 18 if it is a prefilled medicated syringe",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of subcutaneous medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Prepare and sent tray to the bed side",
      "Pull back the plunger, if no blood is aspirated depress the plunger and inject the medication slowly. (If blood appears withdraw the needle, replace it and begin again. Explain to the patient what has occurred)",
      "Check patient details and medication dosage against the treatment chart (manual or electronic)",
      "Discard syringe and needle into a sharps container"
    ],
    "answer": "Pull back the plunger, if no blood is aspirated depress the plunger and inject the medication slowly. (If blood appears withdraw the needle, replace it and begin again. Explain to the patient what has occurred)",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Which assessment during administration of subcutaneous medication can reveal a potentially urgent complication?",
    "options": [
      "Explain procedure and reassure patient",
      "Clean the chosen site with a swab dipped in antimicrobial solution",
      "Withdraw the needle rapidly, apply pressure to any bleeding point",
      "Grasp/spread the skin firmly"
    ],
    "answer": "Withdraw the needle rapidly, apply pressure to any bleeding point",
    "explanation": "Inspect for bleeding and assess the patient's overall condition. Report fresh, increasing or otherwise concerning bleeding immediately and follow the relevant escalation protocol."
  },
  {
    "question": "Which nursing action is required at this stage of administration of subcutaneous medication?",
    "options": [
      "Dispose off used items and decontaminate tray",
      "File/break ampoule with a clean swab",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Discard syringe and needle into a sharps container"
    ],
    "answer": "Discard syringe and needle into a sharps container",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of subcutaneous medication, what should guide the nurse's choice of position?",
    "options": [
      "Put patient into a desirable position",
      "Choose the correct needle size",
      "Avoid step 18 if it is a prefilled medicated syringe",
      "Perform hand hygiene"
    ],
    "answer": "Put patient into a desirable position",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "After completing this part of administration of subcutaneous medication, what makes the clinical record useful for continuity of care?",
    "options": [
      "If it is a prefilled syringe with medication remove the cover of the syringe",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Expose the chosen site",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date"
    ],
    "answer": "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "After the hands-on part of administration of subcutaneous medication, how should used equipment and waste be managed?",
    "options": [
      "Check patient details and medication dosage against the treatment chart (manual or electronic)",
      "Withdraw the needle rapidly, apply pressure to any bleeding point",
      "Dispose off used items and decontaminate tray",
      "Discard syringe and needle into a sharps container"
    ],
    "answer": "Dispose off used items and decontaminate tray",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with administration of subcutaneous medication, what infection-prevention action is required at this point?",
    "options": [
      "Ensure patient’s right to know/consent and to refuse medication",
      "Insert the needle into the skin at an angle of 45° and release the grasped skin",
      "Explain procedure and reassure patient",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "The nurse is carrying out administration of subcutaneous medication. Which action best matches this part of the procedure?",
    "options": [
      "Check on patient after thirty (30) minutes for therapeutic effect",
      "Draw medication with a syringe and discard the needle into the sharps container",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "File/break ampoule with a clean swab"
    ],
    "answer": "Check on patient after thirty (30) minutes for therapeutic effect",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },
  {
    id: "rgn-047",
    title: "ADMINISTRATION OF INTRADERMAL MEDICATION",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview:
      "It is the administration of medication into the dermal layer of the skin which is directly underneath the epidermis.",
    purpose: [],
    indications: [
      "An authorised prescription or protocol specifies the intradermal route",
      "A small volume is required for a diagnostic, sensitivity or local medication procedure",
      "The selected skin is intact, healthy and suitable for follow-up observation",
    ],
    equipment: [
  "A tray containing the following:",
  "Medication",
  "Prefilled medication syringe (if available)",
  "Two or three syringes (1ml)",
  "Needles (26-28 gauge)",
  "Cotton wool swabs in gallipot",
  "Antimicrobial solution",
  "Treatment chat",
  "Sharps container"
],
    preparation: [
      "Verify patient, medication or test, dose, route, expiry, allergies, indication and review time.",
      "Assess the skin and avoid bruised, scarred, inflamed, infected, hairy or previously tested sites when the protocol requires another site.",
      "Explain that a small bleb may form, obtain consent and tell the patient not to rub the area.",
    ],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain procedure and reassure patient",
  "Ensure patient’s right to know/consent and to refuse medication",
  "Perform hand hygiene",
  "Choose the correct needle size",
  "Prepare and sent tray to the bed side",
  "Check patient details and medication dosage against the treatment chart (manual or electronic)",
  "Assemble syringe and needle using sterile technique",
  "Draw medication with a syringe and avoid creating air bubbles",
  "If it is a prefilled syringe with medication remove the cover of the syringe",
  "Expose the chosen site",
  "Clean the chosen site with a swab dipped in antimicrobial solution",
  "Pull the skin towards your hand",
  "Insert the needle just below the skin at an angle of 10-15°",
  "Inject medication slowly and steadily while observing for bleb formation",
  "Remove the needle and discard into a sharps container",
  "If blood is present dab the area with a dry swab (avoid rubbing the area)",
  "Draw a circle with marker around the bleb",
  "Observe the area for localize inflammations",
  "Reposition patient",
  "Instruct patient not to rub or apply any pressure to the area",
  "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
  "Dispose off used items and decontaminate tray",
  "Perform hand hygiene",
  "Check on patient after five (5) and fifteen (15) minutes for reactions",
  "Report to appropriate officer"
],
    precautions: [
      "Do not rub, massage, cover tightly or apply medication to the test site unless the protocol directs it.",
      "Do not use an unlabelled or expired preparation or a site that may make the result unreliable.",
      "Use the correct shallow angle and small volume; an injection that is too deep may invalidate the test.",
      "Report wheeze, facial swelling, widespread rash, collapse or a severe local reaction urgently.",
    ],
    afterCare: [
      "Keep the patient informed of the required review time and ensure the site remains visible for assessment.",
      "Arrange review or referral according to the approved test or medication protocol.",
    ],
    documentation: [
      "Record preparation, dose, site, time, batch or lot number when required and immediate appearance.",
      "Record the review measurement or result, patient symptoms, interpretation by the authorised clinician and actions taken.",
    ],
    complications: [
      "Invalid test result from incorrect depth, volume or site handling",
      "Local bleeding, bruising, infection or irritation",
      "Allergic or systemic reaction",
      "Failure to review or document a clinically important response",
    ],
    patientEducation: [
      "Tell the patient not to scratch, rub or apply creams to the site and to return for review at the specified time.",
      "Explain which symptoms require immediate assistance, including breathing difficulty, facial swelling or widespread rash.",
    ],
    nursingConsiderations: [
      "Use the approved national or facility protocol for test timing and interpretation; do not independently diagnose a result outside scope.",
      "Use an interpreter or communication aid to ensure the patient understands site care and follow-up.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=DECJaBf2PtE",
    quiz: [
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Perform hand hygiene",
      "Inject medication slowly and steadily while observing for bleb formation",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "To complete administration of intradermal medication safely, which action should the nurse take at this point?",
    "options": [
      "Assemble syringe and needle using sterile technique",
      "Establish rapport (Refer to steps)",
      "Expose the chosen site",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Before carrying out administration of intradermal medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Perform hand hygiene",
      "Inject medication slowly and steadily while observing for bleb formation",
      "Explain procedure and reassure patient",
      "Draw a circle with marker around the bleb"
    ],
    "answer": "Explain procedure and reassure patient",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before carrying out administration of intradermal medication, what should the nurse do to support informed cooperation?",
    "options": [
      "Report to appropriate officer",
      "Expose the chosen site",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Ensure patient’s right to know/consent and to refuse medication",
    "explanation": "A clear explanation helps the patient understand the procedure and cooperate. Obtain consent as required, check understanding and address concerns before proceeding."
  },
  {
    "question": "Before proceeding with administration of intradermal medication, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Check patient details and medication dosage against the treatment chart (manual or electronic)",
      "Draw a circle with marker around the bleb",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete administration of intradermal medication safely, which action should the nurse take at this point?",
    "options": [
      "Expose the chosen site",
      "Choose the correct needle size",
      "Insert the needle just below the skin at an angle of 10-15°",
      "Report to appropriate officer"
    ],
    "answer": "Choose the correct needle size",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intradermal medication?",
    "options": [
      "Check patient details and medication dosage against the treatment chart (manual or electronic)",
      "Draw a circle with marker around the bleb",
      "Prepare and sent tray to the bed side",
      "Instruct patient not to rub or apply any pressure to the area"
    ],
    "answer": "Prepare and sent tray to the bed side",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Explain procedure and reassure patient",
      "Insert the needle just below the skin at an angle of 10-15°",
      "Report to appropriate officer",
      "Check patient details and medication dosage against the treatment chart (manual or electronic)"
    ],
    "answer": "Check patient details and medication dosage against the treatment chart (manual or electronic)",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "The nurse is carrying out administration of intradermal medication. Which action best matches this part of the procedure?",
    "options": [
      "Assemble syringe and needle using sterile technique",
      "If it is a prefilled syringe with medication remove the cover of the syringe",
      "Instruct patient not to rub or apply any pressure to the area",
      "Prepare and sent tray to the bed side"
    ],
    "answer": "Assemble syringe and needle using sterile technique",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Insert the needle just below the skin at an angle of 10-15°",
      "Draw medication with a syringe and avoid creating air bubbles",
      "If blood is present dab the area with a dry swab (avoid rubbing the area)",
      "Explain procedure and reassure patient"
    ],
    "answer": "Draw medication with a syringe and avoid creating air bubbles",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Draw medication with a syringe and avoid creating air bubbles",
      "Instruct patient not to rub or apply any pressure to the area",
      "If it is a prefilled syringe with medication remove the cover of the syringe",
      "Check on patient after five (5) and fifteen (15) minutes for reactions"
    ],
    "answer": "If it is a prefilled syringe with medication remove the cover of the syringe",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intradermal medication?",
    "options": [
      "Choose the correct needle size",
      "If blood is present dab the area with a dry swab (avoid rubbing the area)",
      "Explain procedure and reassure patient",
      "Expose the chosen site"
    ],
    "answer": "Expose the chosen site",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of administration of intradermal medication, which principle protects the reliability of the result?",
    "options": [
      "Clean the chosen site with a swab dipped in antimicrobial solution",
      "Pull the skin towards your hand",
      "Check on patient after five (5) and fifteen (15) minutes for reactions",
      "Draw medication with a syringe and avoid creating air bubbles"
    ],
    "answer": "Clean the chosen site with a swab dipped in antimicrobial solution",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "To complete administration of intradermal medication safely, which action should the nurse take at this point?",
    "options": [
      "If blood is present dab the area with a dry swab (avoid rubbing the area)",
      "Pull the skin towards your hand",
      "Reposition patient",
      "Choose the correct needle size"
    ],
    "answer": "Pull the skin towards your hand",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intradermal medication?",
    "options": [
      "Clean the chosen site with a swab dipped in antimicrobial solution",
      "Check on patient after five (5) and fifteen (15) minutes for reactions",
      "Insert the needle just below the skin at an angle of 10-15°",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Insert the needle just below the skin at an angle of 10-15°",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "What safety principle applies when the procedure requires prescribed medication?",
    "options": [
      "Assemble syringe and needle using sterile technique",
      "Reposition patient",
      "Choose the correct needle size",
      "Inject medication slowly and steadily while observing for bleb formation"
    ],
    "answer": "Inject medication slowly and steadily while observing for bleb formation",
    "explanation": "Verify the prescription and patient, allergies, medicine, dose, route, timing and required monitoring under local policy. Clarify an unsafe or unclear order before administration."
  },
  {
    "question": "The nurse is carrying out administration of intradermal medication. Which action best matches this part of the procedure?",
    "options": [
      "Remove the needle and discard into a sharps container",
      "Inject medication slowly and steadily while observing for bleb formation",
      "Establish rapport (Refer to steps)",
      "Clean the chosen site with a swab dipped in antimicrobial solution"
    ],
    "answer": "Remove the needle and discard into a sharps container",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When collecting a specimen as part of administration of intradermal medication, which principle protects the reliability of the result?",
    "options": [
      "Reposition patient",
      "If blood is present dab the area with a dry swab (avoid rubbing the area)",
      "Dispose off used items and decontaminate tray",
      "Assemble syringe and needle using sterile technique"
    ],
    "answer": "If blood is present dab the area with a dry swab (avoid rubbing the area)",
    "explanation": "Use the correct collection method and container, avoid contamination, label at the point of collection using patient identifiers, and send promptly according to laboratory policy."
  },
  {
    "question": "Which step should be performed now during administration of intradermal medication?",
    "options": [
      "Inject medication slowly and steadily while observing for bleb formation",
      "Establish rapport (Refer to steps)",
      "Draw a circle with marker around the bleb",
      "Perform hand hygiene"
    ],
    "answer": "Draw a circle with marker around the bleb",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which nursing action is required at this stage of administration of intradermal medication?",
    "options": [
      "Expose the chosen site",
      "Dispose off used items and decontaminate tray",
      "Assemble syringe and needle using sterile technique",
      "Observe the area for localize inflammations"
    ],
    "answer": "Observe the area for localize inflammations",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "When positioning the patient for administration of intradermal medication, what should guide the nurse's choice of position?",
    "options": [
      "Reposition patient",
      "Draw a circle with marker around the bleb",
      "Perform hand hygiene",
      "Inject medication slowly and steadily while observing for bleb formation"
    ],
    "answer": "Reposition patient",
    "explanation": "Choose a position appropriate to the patient's condition, the procedure and any prescribed restrictions. Maintain safety, airway access and comfort, and reassess tolerance."
  },
  {
    "question": "To complete administration of intradermal medication safely, which action should the nurse take at this point?",
    "options": [
      "Dispose off used items and decontaminate tray",
      "Instruct patient not to rub or apply any pressure to the area",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Expose the chosen site"
    ],
    "answer": "Instruct patient not to rub or apply any pressure to the area",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "After completing this part of administration of intradermal medication, what makes the clinical record useful for continuity of care?",
    "options": [
      "Draw a circle with marker around the bleb",
      "Perform hand hygiene",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Check patient details and medication dosage against the treatment chart (manual or electronic)"
    ],
    "answer": "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
    "explanation": "Document the assessment, care provided, patient response, relevant findings and escalation in a timely, factual manner using the approved record."
  },
  {
    "question": "After the hands-on part of administration of intradermal medication, how should used equipment and waste be managed?",
    "options": [
      "Insert the needle just below the skin at an angle of 10-15°",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Expose the chosen site",
      "Dispose off used items and decontaminate tray"
    ],
    "answer": "Dispose off used items and decontaminate tray",
    "explanation": "Segregate waste and clean, decontaminate or store reusable equipment according to infection-prevention policy and the item's intended use."
  },
  {
    "question": "Before proceeding with administration of intradermal medication, what infection-prevention action is required at this point?",
    "options": [
      "Perform hand hygiene",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Assemble syringe and needle using sterile technique",
      "Observe the area for localize inflammations"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "Hand hygiene reduces transmission of microorganisms between the patient, equipment and the care environment. Perform it at the indicated point and follow the required aseptic technique."
  },
  {
    "question": "To complete administration of intradermal medication safely, which action should the nurse take at this point?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Check on patient after five (5) and fifteen (15) minutes for reactions",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Insert the needle just below the skin at an angle of 10-15°"
    ],
    "answer": "Check on patient after five (5) and fifteen (15) minutes for reactions",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  },
  {
    "question": "Which step should be performed now during administration of intradermal medication?",
    "options": [
      "Instruct patient not to rub or apply any pressure to the area",
      "Check patient details and medication dosage against the treatment chart (manual or electronic)",
      "Report to appropriate officer",
      "If it is a prefilled syringe with medication remove the cover of the syringe"
    ],
    "answer": "Report to appropriate officer",
    "explanation": "This action forms part of the procedure's required sequence. Perform it using the stated technique, assess the patient's response where relevant, and follow the applicable local policy."
  }
],
  },
];