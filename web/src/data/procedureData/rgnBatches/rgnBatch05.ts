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
    overview:
      "This procedure assists a patient who cannot safely use a toilet to pass urine or stool in bed. It combines respectful elimination care with safe positioning, infection prevention, observation of output and prompt reporting of abnormalities.",
    purpose: [
      "Support safe bowel or bladder elimination",
      "Maintain comfort, privacy and dignity",
      "Observe and communicate relevant elimination findings",
    ],
    indications: [
      "Patient is confined to bed or cannot safely transfer to a toilet",
      "Patient requires assistance because of weakness, pain, injury or prescribed activity restriction",
      "Patient needs a bedpan for collection or observation of urine or stool",
    ],
    equipment: [
      "Clean covered bedpan appropriate for the patient",
      "Disposable gloves and additional PPE according to risk assessment",
      "Mackintosh and dressing towel or disposable bed protector",
      "Toilet tissue, wipes, warm water and soap or approved cleansing supplies",
      "Hand hygiene supplies",
      "Call bell and privacy screen or curtain",
      "Bedpan carrier or covered receptacle for transport",
      "Graduated container if output measurement is required",
    ],
    preparation: [
      "Confirm the patient's identity, assess mobility, pain, consciousness and elimination needs, and check for precautions.",
      "Explain the procedure, obtain cooperation and provide privacy; ask about preferred assistance and any cultural or personal concerns.",
      "Perform hand hygiene and gather equipment without placing clean items on contaminated surfaces.",
    ],
    steps: [
      "Explain the procedure, confirm consent and ensure the call bell is within reach.",
      "Position the bed at a safe working height, apply brakes and protect the patient from falls.",
      "Provide privacy, lower only the necessary bedclothes and maintain the patient's dignity and warmth.",
      "Ask the patient to flex the knees and lift the hips if able; otherwise use safe moving and handling technique with assistance.",
      "Place the bedpan securely under the buttocks with the wider end positioned appropriately, checking comfort and alignment.",
      "Cover the patient and leave sufficient privacy while remaining close enough to respond promptly.",
      "Ask the patient to use the call bell when finished and ensure the call bell remains accessible.",
      "Put on gloves and PPE as indicated before removing the bedpan; support the patient and cover the bedpan immediately.",
      "Observe the urine or stool for amount, colour, consistency, blood, mucus, unusual odour or other relevant findings.",
      "Clean the patient from the cleanest area toward the less clean area, provide hand hygiene assistance and replace clothing and bed linen as needed.",
      "Transport the covered bedpan safely to the sluice, dispose of contents according to local policy and decontaminate the bedpan.",
      "Remove PPE safely, perform hand hygiene, make the patient comfortable and check that the call bell and personal items are within reach.",
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
    quiz: rgn_039Quiz,
  },
  {
    id: "rgn-040",
    title: "ADMINISTRATION OF ORAL MEDICATIONS (TABLETS, CAPSULES, CAPLETS ETC.)",
    category: "General Nursing (RGN)",
    overview:
      "This procedure covers safe administration of prescribed solid medication by mouth, including tablets, capsules and caplets, and the sublingual or buccal placement of medicines when specifically prescribed. The nurse verifies the prescription, supports informed choice, assesses swallowing safety and observes the patient after administration.",
    purpose: [
      "Achieve the prescribed therapeutic effect",
      "Provide prophylaxis or support investigation when prescribed",
      "Administer medication safely while respecting the patient's right to information and refusal",
    ],
    indications: [
      "A valid prescription for an oral, buccal or sublingual solid medication",
      "Patient is able to receive the medication through the prescribed route",
      "Medication is clinically appropriate after checking allergies, swallowing ability and relevant precautions",
    ],
    equipment: [
      "Medication treatment chart or authorised electronic medication record",
      "Prescribed medication in its original labelled package",
      "Clean medication tray or cup and medicine spoon when required",
      "Drinking water or other prescribed suitable fluid",
      "Pill cutter or crusher only when authorised and safe for that medication",
      "Hand hygiene supplies and waste receptacle",
    ],
    preparation: [
      "Review the prescription, indication, allergies, contraindications, swallowing ability, level of consciousness and relevant observations.",
      "Prepare medicines for one patient at a time and check the label against the medication record at the required stages.",
      "Confirm whether the medicine must be swallowed, held under the tongue or placed between the cheek and gum.",
    ],
    steps: [
      "Perform hand hygiene and identify the patient using approved identifiers.",
      "Explain the medication name, purpose, route and relevant instructions; answer questions within scope and respect refusal.",
      "Check the medication, patient, dose, route, time, indication, allergies, expiry and prescription before removing the dose.",
      "Position the patient upright or as upright as the condition allows and assess readiness to swallow.",
      "Offer the medication without touching it with bare hands, using clean equipment and the prescribed route.",
      "For an oral dose, offer water if appropriate and observe the patient swallow; for buccal or sublingual medication, ensure it remains in the prescribed site until dissolved.",
      "Do not crush, split or mix medication unless the product information and authorised prescriber or pharmacist guidance allow it.",
      "Observe for difficulty swallowing, choking, vomiting, immediate allergy or other adverse response.",
      "Dispose of packaging and clean reusable equipment according to policy; perform hand hygiene.",
      "Record administration or refusal immediately and reassess the patient or therapeutic response as indicated.",
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
    quiz: rgn_040Quiz,
  },
  {
    id: "rgn-041",
    title: "ADMINISTRATION OF ORAL MEDICATIONS (MIXTURES)",
    category: "General Nursing (RGN)",
    overview:
      "This procedure covers administration of a prescribed liquid oral medication or mixture. Accurate identification, shaking when required, eye-level measurement, swallowing assessment, observation and documentation are essential because liquid strengths and volumes vary.",
    purpose: [
      "Deliver a prescribed therapeutic or prophylactic dose",
      "Provide an oral formulation for a patient who needs or prefers liquid medication",
      "Support safe, accurate medication administration and evaluation of response",
    ],
    indications: [
      "A valid prescription for a liquid oral medication",
      "Patient can safely swallow the prescribed preparation",
      "A liquid formulation is prescribed or clinically appropriate",
    ],
    equipment: [
      "Medication treatment chart or authorised electronic medication record",
      "Original labelled bottle of the prescribed oral mixture",
      "Calibrated oral syringe, medicine cup or measuring spoon as appropriate",
      "Clean tray, water and disposable tissue",
      "Pill or bottle opener only if required",
      "Hand hygiene supplies and waste receptacle",
    ],
    preparation: [
      "Check the medication, concentration, dose, patient identifiers, allergies, expiry and prescription.",
      "Read the label and product instructions for shaking, dilution, storage and measuring requirements.",
      "Assess swallowing ability, level of consciousness, nausea and any reason the oral route may be unsafe.",
    ],
    steps: [
      "Perform hand hygiene and identify the patient using approved identifiers.",
      "Explain the medication, purpose, dose and route; obtain cooperation and respect the patient's right to refuse.",
      "Check the bottle label against the medication record before opening and gently shake the bottle when instructed.",
      "Place the cap with its inside protected, hold the bottle with the label uppermost and pour at eye level.",
      "Measure the prescribed dose using a calibrated device; do not use an unmarked household spoon.",
      "Recheck the measured volume against the prescription, close the bottle and clean any residue from the outside.",
      "Position the patient upright or as upright as possible, give the mixture and offer water if appropriate.",
      "Observe that the dose is swallowed and monitor for coughing, vomiting, allergy or other adverse response.",
      "Dispose of used materials, clean reusable equipment and perform hand hygiene.",
      "Document administration or refusal and evaluate the patient's response at the appropriate time.",
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
    quiz: rgn_041Quiz,
  },
  {
    id: "rgn-042",
    title: "ADMINISTRATION OF INTRAVENOUS MEDICATION (INFUSION)",
    category: "General Nursing (RGN)",
    overview:
      "This procedure describes preparation and monitoring of a prescribed intravenous fluid or medication infusion through suitable vascular access. It requires accurate prescription checks, aseptic handling, correct rate control, assessment of the patient and IV site, and prompt response to complications.",
    purpose: [
      "Deliver prescribed fluid or medication directly into the vascular system",
      "Maintain or correct fluid and electrolyte balance when ordered",
      "Achieve a controlled therapeutic effect with close monitoring",
    ],
    indications: [
      "A valid prescription for an intravenous fluid or infusion medication",
      "Patient requires a prescribed IV route because oral or another route is unsuitable or insufficient",
      "Suitable vascular access and monitoring arrangements are available",
    ],
    equipment: [
      "Prescribed IV fluid or medication and treatment or infusion chart",
      "Giving set, extension set, needleless connector or pump as appropriate",
      "Approved IV stand, infusion pump or calibrated rate-control device",
      "Antiseptic swabs, sterile dressing and approved flush if prescribed",
      "Gloves and PPE according to risk assessment",
      "Tourniquet and cannulation equipment only when cannulation is within the nurse's competence and prescription",
      "Sharps container, waste receptacle, hand hygiene supplies and protective bed covering",
    ],
    preparation: [
      "Review the prescription, allergies, patient identity, indication, fluid restriction, baseline observations and IV access.",
      "Inspect the container for label, expiry, seal, leaks, clarity, colour, particles and prescribed volume.",
      "Explain the procedure and possible sensations, obtain cooperation and ensure the patient can call for help.",
    ],
    steps: [
      "Perform hand hygiene, identify the patient and compare the prescription with the fluid or medication label.",
      "Position and protect the patient, ensure the bed is safe and place the IV stand or pump appropriately.",
      "Perform hand hygiene again as indicated, open the giving set without contaminating sterile ends and insert the spike into the container.",
      "Prime the tubing fully, remove air, close the clamp and attach the appropriate connector or pump tubing.",
      "Inspect the IV site for patency, pain, redness, swelling, leakage, coolness or a loose dressing before connection.",
      "Disinfect the access port using the approved antiseptic and allow it to dry according to policy.",
      "Connect the giving set aseptically, open the clamp or start the pump and set the prescribed rate.",
      "Observe the patient and site closely at the start, recheck the rate and monitor for infiltration, phlebitis, fluid overload or systemic reaction.",
      "Dispose of sharps immediately without recapping, remove PPE safely and perform hand hygiene.",
      "Reassess the patient, maintain comfort and document fluid balance, response and any abnormality throughout the infusion.",
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
    quiz: rgn_042Quiz,
  },
  {
    id: "rgn-043",
    title: "ADMINISTRATION OF INTRAVENOUS MEDICATION (AMPOULE/VIAL RECONSTITUTION)",
    category: "General Nursing (RGN)",
    overview:
      "This procedure covers reconstitution of a prescribed injectable medication from an ampoule or vial and administration through suitable IV access when that route and method are authorised. Accurate diluent selection, aseptic preparation, concentration checks, safe IV access and close observation are essential.",
    purpose: [
      "Prepare a stable, accurate concentration of prescribed injectable medication",
      "Administer medication through an appropriate IV access using the prescribed method",
      "Detect local or systemic complications early",
    ],
    indications: [
      "A prescribed injectable medication supplied as an ampoule or powder in a vial",
      "Manufacturer or pharmacy instructions specify reconstitution before administration",
      "The patient has suitable IV access and the route is authorised",
    ],
    equipment: [
      "Medication ampoule or vial and authorised treatment chart",
      "Correct sterile diluent and reconstitution device",
      "Sterile syringe and needles or needleless transfer device",
      "Alcohol or approved antiseptic swabs and sterile gauze",
      "Gloves and PPE according to risk assessment",
      "Receiver, sharps container, waste receptacle and hand hygiene supplies",
      "Compatible IV access supplies and prescribed flush when required",
    ],
    preparation: [
      "Check the prescription, patient, medication, dose, route, expiry, allergies, diluent, concentration and reconstitution instructions.",
      "Check compatibility, storage conditions, required final volume and beyond-use time before preparing the medication.",
      "Prepare in a clean designated area using aseptic non-touch technique and explain the procedure to the patient.",
    ],
    steps: [
      "Perform hand hygiene and identify the patient using approved identifiers.",
      "Inspect the ampoule or vial, diluent and equipment; reject any damaged, expired or compromised item.",
      "Use safe ampoule-opening technique or disinfect the vial stopper and allow it to dry.",
      "Draw up the correct diluent, add it to the vial when required and dissolve the medication using the prescribed gentle method.",
      "Inspect the reconstituted solution for the expected appearance, particles, precipitate, colour and volume.",
      "Draw up the prescribed dose using a new sterile syringe and suitable needle or transfer device; remove air safely.",
      "Assess IV access for patency and site complications, disinfect the access port and allow it to dry.",
      "Administer at the prescribed rate or connect to the compatible infusion system; observe the patient and site throughout.",
      "Stop administration and seek urgent help for significant pain, swelling, resistance, rash, wheeze, hypotension or deterioration.",
      "Dispose of sharps and materials safely, perform hand hygiene, reassess the patient and document the preparation and administration.",
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
    quiz: rgn_043Quiz,
  },
  {
    id: "rgn-044",
    title: "ADMINISTRATION OF INTRAVENOUS MEDICATION (VIAL)",
    category: "General Nursing (RGN)",
    overview:
      "This procedure covers administration of a prescribed medication supplied in a vial through an appropriate IV line or infusion system. It emphasises correct preparation, compatibility, aseptic access, prescribed rate and monitoring for local and systemic complications.",
    purpose: [
      "Deliver a prescribed vial medication through the IV route",
      "Provide a controlled therapeutic effect when IV administration is indicated",
      "Maintain patient safety through line and reaction monitoring",
    ],
    indications: [
      "A valid prescription for a medication supplied in a vial for IV administration",
      "The medication has been prepared or reconstituted according to authorised instructions",
      "The patient has suitable access and the prescribed method is within the nurse's competence",
    ],
    equipment: [
      "Prescribed vial medication and medication treatment chart",
      "Correct diluent, syringe and needle or approved transfer device",
      "Compatible giving set, extension line, infusion pump or rate-control device",
      "Antiseptic swabs, sterile dressing and prescribed flush",
      "Gloves and PPE according to risk assessment",
      "Sharps container, waste receptacle and hand hygiene supplies",
    ],
    preparation: [
      "Check patient identifiers, prescription, vial label, concentration, diluent, compatibility, expiry, allergies and route.",
      "Inspect the vial and solution for seal damage, leaks, cloudiness, particles or unexpected colour.",
      "Explain the medication and monitoring plan, obtain cooperation and ensure the patient can call for assistance.",
    ],
    steps: [
      "Perform hand hygiene, identify the patient and prepare the medication in a clean area using aseptic non-touch technique.",
      "Reconstitute or dilute the vial only as directed, label the prepared medication if it is not administered immediately and verify the final dose.",
      "Prime the compatible giving set or prepare the syringe, removing air without contaminating the sterile parts.",
      "Check the IV cannula or line for patency and inspect the site for pain, redness, swelling, leakage or a loose dressing.",
      "Disinfect the access port with the approved antiseptic and allow it to dry.",
      "Connect the medication or giving set aseptically and set the prescribed rate using an appropriate device.",
      "Remain alert to pain, resistance, swelling, rash, wheeze, fever, chills, hypotension or other adverse responses.",
      "Stop or manage the medication according to emergency or IV complication protocol and call for help if a serious reaction occurs.",
      "At completion, clamp, flush or disconnect only as prescribed, dispose of equipment safely and perform hand hygiene.",
      "Reassess the patient and document medication details, time, rate, site, response and any reaction.",
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
    quiz: rgn_044Quiz,
  },
  {
    id: "rgn-045",
    title: "ADMINISTRATION OF INTRAMUSCULAR MEDICATION",
    category: "General Nursing (RGN)",
    overview:
      "This procedure describes administration of a prescribed medication into suitable muscle tissue. Safe practice requires medication verification, site and patient assessment, privacy, aseptic technique, correct equipment and needle selection, observation and documentation.",
    purpose: [
      "Deliver a prescribed medication into muscle for systemic or local absorption",
      "Achieve a therapeutic, prophylactic or diagnostic effect when the intramuscular route is indicated",
      "Minimise pain, injury, infection and medication error",
    ],
    indications: [
      "A valid prescription specifies the intramuscular route",
      "Medication volume and formulation are suitable for intramuscular tissue",
      "The patient has an appropriate muscle site after assessment",
    ],
    equipment: [
      "Prescribed medication, treatment chart and original labelled container",
      "Appropriate sterile syringe and needle selected for the patient and medication",
      "Antiseptic swabs, sterile gauze and adhesive strip if needed",
      "Gloves and PPE according to risk assessment",
      "Receiver and approved sharps container",
      "Hand hygiene supplies and protective bed covering when required",
    ],
    preparation: [
      "Check patient, medication, dose, route, time, indication, allergies, expiry and prescription.",
      "Assess age, muscle mass, skin condition, bleeding risk, anticoagulant use, mobility and previous injection sites.",
      "Explain the procedure, obtain cooperation and consent, provide privacy and position the patient safely.",
    ],
    steps: [
      "Perform hand hygiene and identify the patient using approved identifiers.",
      "Prepare the medication using aseptic technique, inspect it and remove air from the syringe without contaminating the needle.",
      "Select a safe muscle and site according to medication, patient assessment and facility policy; avoid bruised, inflamed or injured tissue.",
      "Position the patient to relax the muscle and expose only the required area while maintaining dignity.",
      "Clean the skin with approved antiseptic and allow it to dry; do not touch the prepared site.",
      "Insert the needle smoothly at 90 degrees using the selected technique and administer at the prescribed rate.",
      "Follow local policy regarding aspiration; if blood appears when aspiration is required, stop and manage the equipment safely.",
      "Withdraw the needle smoothly, apply gentle pressure with gauze if needed and activate the safety device.",
      "Discard the needle and syringe immediately into the sharps container without recapping.",
      "Reposition the patient, observe for pain, bleeding, allergy or other reaction, perform hand hygiene and document the care.",
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
    quiz: rgn_045Quiz,
  },
  {
    id: "rgn-046",
    title: "ADMINISTRATION OF SUBCUTANEOUS MEDICATION",
    category: "General Nursing (RGN)",
    overview:
      "This procedure describes administration of a prescribed small-volume medication into subcutaneous tissue. The nurse selects an appropriate site and angle, maintains asepsis, observes the patient and documents the dose and site for safe follow-up.",
    purpose: [
      "Administer a prescribed medication into subcutaneous tissue",
      "Provide slower absorption when the medication and prescription indicate this route",
      "Reduce discomfort and local complications through correct site and technique",
    ],
    indications: [
      "A valid prescription specifies the subcutaneous route",
      "The medication and volume are suitable for subcutaneous administration",
      "The patient has an appropriate area of healthy subcutaneous tissue",
    ],
    equipment: [
      "Prescribed medication and treatment chart",
      "Sterile single-use syringe and appropriate needle or authorised prefilled syringe",
      "Antiseptic swabs, sterile gauze and adhesive strip if needed",
      "Gloves and PPE according to risk assessment",
      "Receiver and approved sharps container",
      "Hand hygiene supplies and protective bed covering when required",
    ],
    preparation: [
      "Verify patient, medication, dose, route, time, allergies, expiry, indication and prescription.",
      "Assess the patient's tissue depth, skin condition, bleeding risk, previous injection sites and ability to cooperate.",
      "Explain the procedure, obtain consent and provide privacy before positioning the patient.",
    ],
    steps: [
      "Perform hand hygiene and identify the patient using approved identifiers.",
      "Prepare the medication aseptically and remove air according to the product instructions without contaminating the needle.",
      "Select and inspect a healthy site with sufficient subcutaneous tissue; rotate sites when repeated doses are prescribed.",
      "Position the patient comfortably, expose only the site and clean it with approved antiseptic, allowing it to dry.",
      "Lift or spread the skin fold as indicated by tissue depth and insert the needle at the prescribed angle, commonly 45 or 90 degrees.",
      "Administer the medication steadily according to product and facility guidance; do not massage unless specifically directed.",
      "Follow local policy regarding aspiration and stop safely if blood, unexpected pain or resistance occurs.",
      "Withdraw the needle, apply gentle pressure if needed and dispose of the sharp immediately without recapping.",
      "Reposition the patient, inspect the site and observe for bleeding, swelling, pain, allergy or other response.",
      "Perform hand hygiene and document medication, dose, route, time, exact site, response and any abnormality.",
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
    quiz: rgn_046Quiz,
  },
  {
    id: "rgn-047",
    title: "ADMINISTRATION OF INTRADERMAL MEDICATION",
    category: "General Nursing (RGN)",
    overview:
      "This procedure describes placement of a small prescribed volume into the dermal layer for a local medication effect or diagnostic test. Accurate shallow insertion, bleb observation, site marking, follow-up assessment and clear documentation are essential.",
    purpose: [
      "Administer a small prescribed dose into the dermis",
      "Perform a diagnostic or sensitivity test according to an approved protocol",
      "Provide a local response that can be assessed at the specified time",
    ],
    indications: [
      "An authorised prescription or protocol specifies the intradermal route",
      "A small volume is required for a diagnostic, sensitivity or local medication procedure",
      "The selected skin is intact, healthy and suitable for follow-up observation",
    ],
    equipment: [
      "Prescribed medication or test preparation and treatment or test form",
      "Sterile 1 mL syringe and appropriate fine needle or authorised prefilled device",
      "Antiseptic swabs and dry sterile swab",
      "Skin marker and ruler when required by the protocol",
      "Gloves and PPE according to risk assessment",
      "Sharps container, receiver and hand hygiene supplies",
    ],
    preparation: [
      "Verify patient, medication or test, dose, route, expiry, allergies, indication and review time.",
      "Assess the skin and avoid bruised, scarred, inflamed, infected, hairy or previously tested sites when the protocol requires another site.",
      "Explain that a small bleb may form, obtain consent and tell the patient not to rub the area.",
    ],
    steps: [
      "Perform hand hygiene and identify the patient using approved identifiers.",
      "Prepare the medication or test aseptically, ensure the correct small volume and remove air without contaminating the needle.",
      "Position and support the patient, expose the selected site and maintain privacy.",
      "Clean the site with approved antiseptic and allow it to dry completely.",
      "Pull the skin gently and insert the bevel just under the skin at the shallow angle specified by the protocol, commonly 5 to 15 degrees.",
      "Inject slowly until the small prescribed bleb or wheal forms; do not massage or apply pressure.",
      "Withdraw the needle, dab any small blood spot gently with dry sterile gauze and discard the sharp immediately.",
      "Mark or measure the site when required, record the time and give the patient clear instructions for protection and review.",
      "Observe for immediate reaction, perform hand hygiene and reassess the site at the protocol-specified time.",
      "Document the medication or test, dose, site, time, appearance, review result, patient response and action taken.",
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
    quiz: rgn_047Quiz,
  },
];