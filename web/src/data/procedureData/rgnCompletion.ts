import type {
  Procedure,
  ProcedureReference,
  ProcedureQuizQuestion,
} from "../procedureTypes";

const NMC_REFERENCE: ProcedureReference = {
  title: "Nursing and Midwifery Council of Ghana: RGN Procedure Manual",
  url: "https://nmc.gov.gh/procedures/view/RGN",
};

const OPENSTAX_REFERENCE: ProcedureReference = {
  title: "OpenStax Clinical Nursing Skills",
  url: "https://openstax.org/details/books/clinical-nursing-skills",
};

const CDC_REFERENCE: ProcedureReference = {
  title: "CDC Standard Precautions for All Patient Care",
  url: "https://www.cdc.gov/infection-control/hcp/basics/standard-precautions.html",
};

const WHO_REFERENCE: ProcedureReference = {
  title: "WHO Hand Hygiene: Why, How and When?",
  url: "https://www.who.int/publications/m/item/hand-hygiene-why-how-and-when",
};

type ProcedureKind =
  | "perioperative"
  | "communication"
  | "admission"
  | "handover"
  | "hygiene"
  | "bed"
  | "assessment"
  | "specimen"
  | "wound"
  | "medication"
  | "catheter"
  | "nutrition"
  | "transfusion"
  | "drainage"
  | "instruments";

type KindContent = {
  purpose: string[];
  indications: string[];
  equipment: string[];
  precautions: string[];
  contraindications: string[];
  afterCare: string[];
  documentation: string[];
  complications: string[];
  patientEducation: string[];
  nursingConsiderations: string[];
};

const CONTENT: Record<ProcedureKind, KindContent> = {
  perioperative: {
    purpose: [
      "Support safe preparation for or recovery from surgery.",
      "Identify changes that require prompt clinical review.",
    ],
    indications: [
      "A patient is preparing for surgery or returning from an operation.",
      "Perioperative observations, preparation, or recovery care are prescribed.",
    ],
    equipment: [
      "Current prescription, consent and clinical records",
      "Clean bed or trolley with appropriate linen",
      "Vital-sign and procedure-specific monitoring equipment",
      "PPE and documentation materials",
    ],
    precautions: [
      "Confirm identity, procedure, allergies, consent status and required checks.",
      "Escalate airway, breathing, circulation, bleeding, pain or consciousness changes promptly.",
      "Use aseptic technique and follow the facility perioperative checklist.",
    ],
    contraindications: [
      "Do not proceed with a non-emergency preparation if identity, consent or the authorized order cannot be confirmed.",
      "Pause and seek review when the patient is clinically unstable or refuses the planned care.",
    ],
    afterCare: [
      "Reassess vital signs, pain, wound or operative site, drains and prescribed therapies.",
      "Maintain warmth, positioning, privacy and safety while recovery continues.",
    ],
    documentation: [
      "Record assessments, preparation checks, care provided, patient response and escalation.",
      "Document handover and outstanding investigations or instructions.",
    ],
    complications: [
      "Airway obstruction, respiratory compromise, bleeding, shock, pain, nausea or infection.",
    ],
    patientEducation: [
      "Explain the sequence of care, expected sensations, pain reporting and when to call for help.",
    ],
    nursingConsiderations: [
      "Use a structured assessment and communicate changes using local escalation policy.",
      "Protect dignity and maintain continuity between theatre, recovery and ward teams.",
    ],
  },
  communication: {
    purpose: [
      "Promote understanding, trust and shared participation in care.",
      "Support informed decisions, cooperation and continuity of care.",
    ],
    indications: [
      "The patient or family needs information, clarification, reassurance or health teaching.",
      "A procedure, treatment plan or change in condition requires clear communication.",
    ],
    equipment: [
      "Current care plan, orders and patient records",
      "Private, quiet space where possible",
      "Approved teaching materials or communication aids",
      "Documentation materials",
    ],
    precautions: [
      "Protect privacy and confidentiality and use language the patient understands.",
      "Use an interpreter or approved communication aid when needed.",
      "Do not promise outcomes or give information outside the nurse's scope.",
    ],
    contraindications: [
      "Do not continue a discussion when the patient lacks capacity for the decision without involving the authorized decision-maker.",
      "Do not treat explanation alone as a substitute for required informed consent.",
    ],
    afterCare: [
      "Invite questions, use teach-back and clarify the next action or review point.",
      "Reassess understanding and provide further explanation when needed.",
    ],
    documentation: [
      "Record the information given, participants, patient response, questions and agreed plan.",
      "Document interpreter use, consent discussion or escalation where applicable.",
    ],
    complications: [
      "Anxiety, misunderstanding, loss of trust, refusal, non-adherence or unsafe self-care.",
    ],
    patientEducation: [
      "Use plain language, check understanding and provide written information when available.",
      "Tell the patient who to contact if concerns or symptoms develop.",
    ],
    nursingConsiderations: [
      "Respect culture, autonomy, health literacy, privacy and the patient's right to ask questions.",
      "Use active listening and avoid unnecessary medical jargon.",
    ],
  },
  admission: {
    purpose: [
      "Receive the patient safely and establish an accurate baseline.",
      "Orient the patient and coordinate continuity of care.",
    ],
    indications: [
      "A patient is admitted, transferred in, transferred out or discharged.",
      "A change in location requires formal communication and verification.",
    ],
    equipment: [
      "Patient identification band and current records",
      "Admission, transfer or discharge forms",
      "Observation equipment and prescribed care supplies",
      "Patient belongings and orientation materials",
    ],
    precautions: [
      "Use two patient identifiers and reconcile essential information before handover.",
      "Protect confidential information and secure valuables according to policy.",
      "Escalate an unstable patient rather than delaying urgent care for paperwork.",
    ],
    contraindications: [
      "Do not transfer or discharge a patient until the authorized order, destination and receiving team are confirmed.",
      "Do not leave unresolved safety concerns or critical results uncommunicated.",
    ],
    afterCare: [
      "Confirm the receiving team has accepted responsibility and that required care is available.",
      "Recheck comfort, safety, observations and outstanding care after the move.",
    ],
    documentation: [
      "Record the time, location, responsible staff, assessment, belongings and information handed over.",
      "Document the patient's condition and response to admission, transfer or discharge.",
    ],
    complications: [
      "Lost information, medication error, delayed treatment, falls, anxiety or loss of belongings.",
    ],
    patientEducation: [
      "Explain the ward or destination, routines, safety procedures and how to request assistance.",
      "Explain follow-up instructions and warning signs before discharge.",
    ],
    nursingConsiderations: [
      "Use a structured handover and verify information against the patient and records.",
      "Maintain continuity of medications, devices, mobility assistance and precautions.",
    ],
  },
  handover: {
    purpose: [
      "Exchange accurate information and transfer responsibility safely.",
      "Promote continuity, accountability and timely escalation of concerns.",
    ],
    indications: [
      "A nursing shift is ending or beginning.",
      "Responsibility for patients, equipment, medicines or ward activities is changing.",
    ],
    equipment: [
      "Current patient records and observation charts",
      "Ward state and handover report",
      "Medication and equipment records",
      "Approved electronic or paper documentation system",
    ],
    precautions: [
      "Use a private area for sensitive information and share only what is necessary for care.",
      "Verify critical information at the bedside and clarify uncertainty before accepting responsibility.",
      "Escalate deteriorating patients and unresolved safety risks immediately.",
    ],
    contraindications: [
      "Do not complete handover from memory when records or direct assessment are required.",
      "Do not transfer responsibility until the incoming nurse has received and understood critical information.",
    ],
    afterCare: [
      "Confirm that urgent actions, reviews, medications and investigations have a named owner.",
      "Check that patients, devices, controlled medicines and ward resources are safe.",
    ],
    documentation: [
      "Record significant events, current condition, outstanding actions and escalation.",
      "Complete required signatures or electronic acknowledgement according to policy.",
    ],
    complications: [
      "Omitted information, duplicated or missed care, delayed escalation or medication error.",
    ],
    patientEducation: [
      "Reassure the patient about continuity and explain who is responsible for care on the new shift.",
    ],
    nursingConsiderations: [
      "Use a structured approach, avoid interruptions and confirm high-risk information.",
      "Maintain confidentiality during verbal, written and electronic handover.",
    ],
  },
  hygiene: {
    purpose: [
      "Maintain comfort, cleanliness, dignity and skin or mucosal integrity.",
      "Reduce contamination and identify problems requiring further care.",
    ],
    indications: [
      "The patient requires assistance with personal hygiene or elimination.",
      "Hygiene care is needed because of immobility, illness, treatment or soiling.",
    ],
    equipment: [
      "Clean water, basin or approved cleansing product",
      "Clean towels, linen and patient-specific hygiene items",
      "Gloves, apron and other PPE as indicated",
      "Waste receptacle and documentation materials",
    ],
    precautions: [
      "Assess mobility, pain, skin condition, temperature tolerance and falls risk first.",
      "Maintain privacy, warmth and safe positioning throughout the procedure.",
      "Clean from least contaminated to most contaminated areas and perform hand hygiene.",
    ],
    contraindications: [
      "Do not force movement or continue if the patient becomes distressed, unstable or unable to tolerate care.",
      "Seek review before exposing or moving a patient when positioning may worsen an injury.",
    ],
    afterCare: [
      "Dry thoroughly, replace clothing or linen, reposition safely and leave the call bell within reach.",
      "Inspect skin or mucosa and report redness, breakdown, pain or other abnormal findings.",
    ],
    documentation: [
      "Record the care provided, skin findings, tolerance, assistance required and education.",
      "Document and report any abnormal finding or change in function.",
    ],
    complications: [
      "Falls, chilling, skin irritation, pressure injury, contamination, aspiration or patient distress.",
    ],
    patientEducation: [
      "Encourage participation, explain safe hygiene practices and ask the patient to report pain or skin changes.",
    ],
    nursingConsiderations: [
      "Adapt care to age, culture, mobility, cognition, continence, pain and independence.",
      "Use clean supplies and avoid cross-contamination between body sites.",
    ],
  },
  bed: {
    purpose: [
      "Provide a clean, safe and comfortable bed for the patient's needs.",
      "Support positioning, rest, mobility and prevention of injury.",
    ],
    indications: [
      "The bed requires preparation, changing, occupation or adaptation for a clinical condition.",
      "The patient needs a safe bed after admission, bathing, surgery or a transfer.",
    ],
    equipment: [
      "Clean bed linen appropriate to the bed type",
      "Mattress, pillows, protective sheet and prescribed positioning aids",
      "Laundry and waste receptacles",
      "Gloves and hand-hygiene supplies",
    ],
    precautions: [
      "Lock bed wheels, use safe body mechanics and keep the bed at a safe working height.",
      "Do not shake linen; keep clean linen away from the floor and contaminated surfaces.",
      "Use assistance and repositioning equipment when the patient's mobility or condition requires it.",
    ],
    contraindications: [
      "Do not leave an immobile patient unsupported or unattended during a position change.",
      "Pause if the patient develops pain, breathlessness, dizziness or other instability.",
    ],
    afterCare: [
      "Return the bed to a safe position, ensure brakes and rails are appropriate, and place the call bell within reach.",
      "Check comfort, alignment, warmth and access to necessary equipment.",
    ],
    documentation: [
      "Record the bed care, patient tolerance, skin observations and special positioning used.",
    ],
    complications: [
      "Falls, musculoskeletal injury, pressure injury, skin shear, contamination or loss of lines and tubes.",
    ],
    patientEducation: [
      "Explain how to use the call bell and ask the patient to report discomfort, wet linen or unsafe positioning.",
    ],
    nursingConsiderations: [
      "Use infection-prevention and manual-handling principles and preserve dignity.",
      "Check that lines, drains and equipment are not trapped or displaced.",
    ],
  },
  assessment: {
    purpose: [
      "Obtain an accurate measurement or observation of the patient's condition.",
      "Identify trends and changes that guide nursing action and escalation.",
    ],
    indications: [
      "A baseline, routine or focused assessment is required.",
      "The patient has a symptom, treatment change or condition that requires monitoring.",
    ],
    equipment: [
      "Validated assessment or monitoring device",
      "Appropriate cuff, probe, strip, lancet or consumable for the measurement",
      "Alcohol or approved cleansing supplies and PPE as indicated",
      "Observation chart and documentation materials",
    ],
    precautions: [
      "Use a functioning, appropriately sized device and follow the manufacturer's instructions.",
      "Allow the patient to rest and use the correct position and site for the measurement.",
      "Treat an unexpected result as a clinical finding: repeat when appropriate and escalate according to policy.",
    ],
    contraindications: [
      "Do not use a limb or site that is injured, infected, has restricted circulation or is restricted by a clinical order.",
      "Do not delay urgent assessment or treatment while repeating a routine measurement.",
    ],
    afterCare: [
      "Return the patient to a comfortable position, clean reusable equipment and dispose of single-use items safely.",
      "Compare with previous results and report clinically significant changes.",
    ],
    documentation: [
      "Record the value, units, time, site, position, device or method and patient response.",
      "Document action taken for abnormal results and who was informed.",
    ],
    complications: [
      "Inaccurate measurement, bruising, skin injury, infection, anxiety or delayed escalation.",
    ],
    patientEducation: [
      "Explain the measurement, encourage the patient to report symptoms and avoid altering prescribed monitoring without advice.",
    ],
    nursingConsiderations: [
      "Interpret findings with the patient's baseline, symptoms, age and treatment context.",
      "Use standard precautions and maintain privacy during assessment.",
    ],
  },
  specimen: {
    purpose: [
      "Obtain a representative specimen for accurate laboratory investigation.",
      "Support diagnosis, treatment planning and evaluation of response.",
    ],
    indications: [
      "A clinician has requested the relevant specimen for diagnostic investigation.",
      "The patient's condition requires monitoring through laboratory analysis.",
    ],
    equipment: [
      "Correct sterile or clean specimen container and collection device",
      "Laboratory request form and patient identification labels",
      "Gloves, hand-hygiene supplies and PPE as indicated",
      "Receiver, transport bag and waste receptacle",
    ],
    precautions: [
      "Use the correct container, collection method and amount for the requested test.",
      "Avoid contamination and label the specimen at the point of collection.",
      "Send promptly using the approved transport and handling requirements.",
    ],
    contraindications: [
      "Do not collect an unlabeled, expired-container or contaminated specimen for laboratory use.",
      "Do not substitute a different specimen type without confirming the request with the responsible clinician or laboratory.",
    ],
    afterCare: [
      "Make the patient comfortable, remove PPE safely and clean or dispose of equipment.",
      "Confirm that the specimen and signed request reached the laboratory within the required time.",
    ],
    documentation: [
      "Record the specimen type, collection time, site or method, patient tolerance and dispatch.",
      "Document any difficulty, contamination concern or delayed transport.",
    ],
    complications: [
      "Contamination, rejected specimen, delayed diagnosis, bleeding, bruising, infection or patient distress.",
    ],
    patientEducation: [
      "Explain the collection method, hygiene requirements and why an uncontaminated sample is important.",
      "Tell the patient to report pain, bleeding or difficulty providing the specimen.",
    ],
    nursingConsiderations: [
      "Check identity and request details at each handoff and preserve confidentiality.",
      "Use standard precautions and follow specimen-specific laboratory guidance.",
    ],
  },
  wound: {
    purpose: [
      "Promote wound healing and protect the wound from contamination.",
      "Assess tissue condition, exudate, pain and signs of infection.",
    ],
    indications: [
      "A wound requires assessment, cleansing, dressing, swabbing or suture care.",
      "The existing dressing is soiled, loose, saturated or due for review.",
    ],
    equipment: [
      "Sterile dressing pack and prescribed cleansing solution",
      "Sterile gauze, dressings and securing materials",
      "Gloves, apron, mask and other PPE according to risk",
      "Waste receptacle and documentation materials",
    ],
    precautions: [
      "Assess pain, allergies, wound location and infection risk before starting.",
      "Use aseptic non-touch technique and avoid contaminating sterile supplies.",
      "Report spreading redness, increasing pain, purulent drainage, dehiscence or systemic symptoms.",
    ],
    contraindications: [
      "Do not remove a dressing or suture when an authorized order or trained assistance is required but unavailable.",
      "Stop and seek review if there is uncontrolled bleeding, severe pain, dehiscence or resistance.",
    ],
    afterCare: [
      "Secure the dressing, position the patient comfortably and dispose of contaminated materials safely.",
      "Reassess pain and monitor the wound and dressing for leakage or deterioration.",
    ],
    documentation: [
      "Record wound site, size or appearance as required, exudate, pain, products used, response and escalation.",
      "Document specimen collection and laboratory dispatch when applicable.",
    ],
    complications: [
      "Infection, bleeding, pain, allergic reaction, skin damage, dehiscence or delayed healing.",
    ],
    patientEducation: [
      "Keep the dressing clean and dry as directed and report fever, increasing pain, redness, odor or drainage.",
      "Explain nutrition, pressure relief and follow-up instructions relevant to healing.",
    ],
    nursingConsiderations: [
      "Use a consistent wound assessment approach and compare findings over time.",
      "Respect privacy and stop if pain or distress is not controlled.",
    ],
  },
  medication: {
    purpose: [
      "Administer or prepare medication safely for the intended therapeutic effect.",
      "Reduce medication errors and monitor the patient's response.",
    ],
    indications: [
      "A valid prescription or treatment order requires the medication or route.",
      "The patient needs the prescribed therapeutic, diagnostic or local medication effect.",
    ],
    equipment: [
      "Current medication order, treatment chart and patient identification",
      "Prescribed medication in the correct form, strength and expiry period",
      "Route-specific equipment and PPE",
      "Sharps or clinical-waste container and documentation materials",
    ],
    precautions: [
      "Apply medication rights, allergy checks, expiry checks and route-specific safety checks.",
      "Use aseptic technique and never administer an unclear, altered or unlabelled medication.",
      "Observe for therapeutic effect and adverse reaction and escalate promptly.",
    ],
    contraindications: [
      "Do not administer when the order is unclear, the patient cannot be safely identified, an allergy is suspected or the medication is expired or compromised.",
      "Withhold and seek clarification when assessment findings or a patient's refusal make administration unsafe.",
    ],
    afterCare: [
      "Observe the patient for expected response and early adverse effects.",
      "Dispose of sharps and waste safely, leave the patient comfortable and provide follow-up instructions.",
    ],
    documentation: [
      "Record medication, dose, route, time, site where relevant, signature, patient response and any omission or escalation.",
      "Document patient education and adverse effects according to policy.",
    ],
    complications: [
      "Allergic reaction, medication error, local tissue injury, infection, bleeding or inadequate therapeutic effect.",
    ],
    patientEducation: [
      "Explain the medication's purpose, expected effect, common warning symptoms and when to seek help.",
      "Respect the patient's right to ask questions or refuse and document the discussion.",
    ],
    nursingConsiderations: [
      "Check renal, hepatic, bleeding, swallowing, glucose or other route-specific risks as applicable.",
      "Use independent double-checks for high-alert medicines and follow local policy.",
    ],
  },
  catheter: {
    purpose: [
      "Obtain or maintain urinary drainage while reducing trauma and infection risk.",
      "Monitor urine output or obtain a clinically valid urine specimen when required.",
    ],
    indications: [
      "The patient has a valid clinical indication for catheter care, removal or urine collection.",
      "A requested urine specimen must be collected from the urinary system.",
    ],
    equipment: [
      "Sterile or clean catheter-care or specimen-collection equipment",
      "Correct specimen container, labels and laboratory form when required",
      "Gloves, hand-hygiene supplies, drape and approved cleansing solution",
      "Measuring device, drainage bag or waste receptacle as indicated",
    ],
    precautions: [
      "Use aseptic technique, maintain a closed drainage system and keep the bag below bladder level.",
      "Never collect a routine specimen from the drainage bag; use the sampling port according to policy.",
      "Review the ongoing need for an indwelling catheter and report obstruction, leakage, pain or fever.",
    ],
    contraindications: [
      "Do not manipulate, remove or replace a catheter without the required order, training or sterile equipment.",
      "Do not force a catheter or continue when resistance, bleeding or severe pain occurs.",
    ],
    afterCare: [
      "Secure tubing without kinks, restore privacy and position the patient comfortably.",
      "Measure and record urine output and monitor for infection, obstruction or retention.",
    ],
    documentation: [
      "Record catheter status, care or removal, urine appearance and amount, specimen details and patient response.",
      "Document ongoing indication, complications and escalation.",
    ],
    complications: [
      "Catheter-associated urinary tract infection, urethral trauma, bleeding, obstruction, leakage or bladder spasm.",
    ],
    patientEducation: [
      "Explain hand hygiene, tubing and bag positioning, fluid advice where appropriate, and warning symptoms.",
      "Tell the patient not to pull or disconnect the system and to report pain, fever, leakage or reduced output.",
    ],
    nursingConsiderations: [
      "Use the smallest appropriate device and shortest necessary duration according to clinical policy.",
      "Maintain dignity and provide gender-sensitive, private care.",
    ],
  },
  nutrition: {
    purpose: [
      "Provide prescribed nutrition and hydration safely.",
      "Monitor tolerance and reduce aspiration, metabolic and device-related risks.",
    ],
    indications: [
      "The patient cannot meet nutritional needs independently or by the usual route.",
      "Prescribed oral, enteral or parenteral nutrition is required.",
    ],
    equipment: [
      "Prescribed food, feed or parenteral solution and current order",
      "Route-specific administration equipment and identification checks",
      "Positioning, hygiene and aspiration-prevention supplies",
      "Observation and intake documentation materials",
    ],
    precautions: [
      "Verify the patient, prescription, route, feed or solution, rate and expiry before administration.",
      "Use the required position and confirm tube or line safety according to policy.",
      "Stop and escalate coughing, respiratory distress, vomiting, intolerance or suspected displacement.",
    ],
    contraindications: [
      "Do not administer when the route is not confirmed, the order is unclear, or the patient is unsafe to receive the prescribed nutrition.",
      "Do not force oral intake in a patient with impaired swallowing or aspiration risk without an approved plan.",
    ],
    afterCare: [
      "Maintain the recommended position, provide mouth care and assess tolerance.",
      "Check the administration system, dispose of supplies and record intake and output.",
    ],
    documentation: [
      "Record type, amount, route, rate, time, tolerance, position and any interruption or escalation.",
      "Document relevant observations, intake and patient education.",
    ],
    complications: [
      "Aspiration, vomiting, diarrhea, constipation, dehydration, fluid imbalance, infection or metabolic disturbance.",
    ],
    patientEducation: [
      "Explain the nutrition plan, positioning, mouth care and symptoms that require immediate help.",
      "Encourage the patient to report nausea, abdominal discomfort, coughing or difficulty swallowing.",
    ],
    nursingConsiderations: [
      "Coordinate with the prescriber and dietitian when tolerance, weight, glucose or laboratory results change.",
      "Use strict hand hygiene and route-specific infection-prevention measures.",
    ],
  },
  transfusion: {
    purpose: [
      "Administer prescribed blood or blood components safely.",
      "Restore oxygen-carrying capacity or replace a clinically indicated blood component.",
    ],
    indications: [
      "A valid prescription and consent support administration of a blood component.",
      "The patient's clinical assessment and laboratory findings indicate transfusion according to local policy.",
    ],
    equipment: [
      "Verified blood component, patient records and consent documentation",
      "Approved blood administration set and compatible monitoring equipment",
      "Vital-sign equipment and emergency-response equipment",
      "PPE, waste container and documentation materials",
    ],
    precautions: [
      "Use the required independent identity and compatibility checks immediately before administration.",
      "Record baseline observations, monitor closely at the start and throughout, and follow local time limits.",
      "Stop the transfusion and escalate immediately if a reaction is suspected.",
    ],
    contraindications: [
      "Do not start if identity, prescription, consent, compatibility, product integrity or expiry cannot be verified.",
      "Do not restart a unit after a suspected transfusion reaction unless authorized by the responsible clinician and policy.",
    ],
    afterCare: [
      "Complete post-transfusion observations and assess the patient for delayed reaction or response.",
      "Dispose of the blood bag and tubing according to policy and ensure follow-up tests are completed.",
    ],
    documentation: [
      "Record product type and unit number, checks, start and finish times, observations, response and any reaction.",
      "Document escalation, treatment and reporting of an adverse event.",
    ],
    complications: [
      "Acute hemolytic, febrile or allergic reaction, circulatory overload, infection, air embolism or delayed reaction.",
    ],
    patientEducation: [
      "Explain the purpose, monitoring and symptoms to report, including chills, rash, fever, breathlessness or back pain.",
      "Tell the patient to call immediately if symptoms occur during or after transfusion.",
    ],
    nursingConsiderations: [
      "Remain attentive during the highest-risk early period and know the local emergency response process.",
      "Use only approved fluids and equipment with blood components according to policy.",
    ],
  },
  drainage: {
    purpose: [
      "Maintain drainage of fluid or air while promoting wound healing.",
      "Assess output and identify complications early.",
    ],
    indications: [
      "A prescribed wound or body-cavity drain requires care, assessment or removal.",
      "Drainage output or the wound requires monitoring according to the care plan.",
    ],
    equipment: [
      "Sterile dressing pack, prescribed cleansing solution and dressings",
      "Drain-specific collection bag, measuring device or securing materials",
      "Sterile gloves, PPE and suture-cutting equipment when ordered",
      "Waste container and documentation materials",
    ],
    precautions: [
      "Maintain aseptic technique and secure the drain without kinking, traction or dependent loops.",
      "Record amount, colour, consistency and trend of drainage and report unexpected change.",
      "Stop and seek help for resistance, sudden bleeding, loss of the drain or respiratory deterioration.",
    ],
    contraindications: [
      "Do not remove or shorten a drain without the responsible clinician's order or local protocol.",
      "Do not force a drain against resistance or continue when the patient's condition deteriorates.",
    ],
    afterCare: [
      "Apply and secure the prescribed dressing, check the collection system and reassess pain.",
      "Monitor the wound, drain site and output after care or removal.",
    ],
    documentation: [
      "Record drain type and site, output, wound findings, care or removal, patient response and escalation.",
      "Document the condition of the removed drain and dressing where applicable.",
    ],
    complications: [
      "Infection, bleeding, blockage, dislodgement, tissue injury, fluid loss or delayed healing.",
    ],
    patientEducation: [
      "Tell the patient not to pull or lie on the drain and to report pain, leakage, fever or sudden change in output.",
      "Explain movement restrictions and dressing care according to the care plan.",
    ],
    nursingConsiderations: [
      "Trend drainage rather than relying on a single measurement and preserve the prescribed system.",
      "Coordinate removal and follow-up with the surgical or responsible clinical team.",
    ],
  },
  instruments: {
    purpose: [
      "Render used instruments safe for handling, reuse or onward sterilization.",
      "Reduce transmission of microorganisms through correct reprocessing.",
    ],
    indications: [
      "Reusable instruments have been used and require reprocessing.",
      "Instruments must be decontaminated before cleaning, sterilization or storage.",
    ],
    equipment: [
      "Approved decontamination solution at the correct concentration",
      "Water, detergent, brush and covered cleaning containers",
      "Utility gloves, apron, eye and face protection as indicated",
      "Approved sterilizer or CSSD transport container",
    ],
    precautions: [
      "Use the correct concentration, contact time and PPE for the disinfectant.",
      "Keep instruments submerged during brushing to reduce splashing and sharps injury.",
      "Follow manufacturer and CSSD instructions for cleaning, inspection, packaging and sterilization.",
    ],
    contraindications: [
      "Do not reuse an instrument that is damaged, not fully cleaned or outside its validated reprocessing pathway.",
      "Do not mix incompatible chemicals or handle contaminated instruments without appropriate PPE.",
    ],
    afterCare: [
      "Dry, inspect and send instruments through the approved sterilization or CSSD process.",
      "Clean the work area, remove PPE safely and perform hand hygiene.",
    ],
    documentation: [
      "Record reprocessing, defects, missing items and transfer to CSSD according to facility policy.",
    ],
    complications: [
      "Sharps injury, chemical exposure, retained contamination, sterilization failure or cross-infection.",
    ],
    patientEducation: [
      "Explain that reusable equipment is reprocessed to reduce infection risk when relevant to the patient's care.",
    ],
    nursingConsiderations: [
      "Separate clean and contaminated workflows and never bypass a validated reprocessing step.",
      "Report exposure incidents, equipment damage or process failure immediately.",
    ],
  },
};

const PLACEHOLDERS = new Set([
  "",
  "n/a",
  "na",
  "not applicable",
  "tbd",
  "to be determined",
  "information unavailable",
  "coming soon",
]);

function meaningful(items: string[] | undefined): string[] {
  return (items ?? [])
    .map((item) => item.trim())
    .filter((item) => !PLACEHOLDERS.has(item.toLowerCase()));
}

function kindFor(title: string): ProcedureKind {
  const value = title.toLowerCase();

  if (value.includes("blood transfusion")) return "transfusion";
  if (
    value.includes("naso-gastric") ||
    value.includes("spoon feeding") ||
    value.includes("parenteral nutrition")
  ) {
    return "nutrition";
  }
  if (value.includes("drainage tube")) return "drainage";
  if (
    value.includes("urinary catheter") ||
    value.includes("catheterization") ||
    value.includes("urine specimen from")
  ) {
    return "catheter";
  }
  if (value.includes("wound") || value.includes("stitches")) return "wound";
  if (value.includes("instrument")) return "instruments";
  if (
    value.includes("medication") ||
    value.includes("eye drops") ||
    value.includes("ear drops") ||
    value.includes("nasal drops")
  ) {
    return "medication";
  }
  if (
    value.includes("specimen") ||
    value.includes("blood specimens") ||
    value.includes("urine") ||
    value.includes("stool")
  ) {
    return "specimen";
  }
  if (
    value.includes("temperature") ||
    value.includes("pulse") ||
    value.includes("respiration") ||
    value.includes("blood pressure") ||
    value.includes("oxygen saturation") ||
    value.includes("vital signs") ||
    value.includes("blood glucose")
  ) {
    return "assessment";
  }
  if (
    value.includes("bed") ||
    value.includes("bedpan") ||
    value.includes("bathing") ||
    value.includes("mouth care") ||
    value.includes("hair") ||
    value.includes("hands and feet") ||
    value.includes("tepid sponging")
  ) {
    return "bed";
  }
  if (value.includes("handing over") || value.includes("taking over")) {
    return "handover";
  }
  if (
    value.includes("admission") ||
    value.includes("transfer") ||
    value.includes("discharge")
  ) {
    return "admission";
  }
  if (
    value.includes("rapport") ||
    value.includes("education") ||
    value.includes("orientation") ||
    value.includes("ward rounds") ||
    value.includes("condition and its management") ||
    value.includes("explanation")
  ) {
    return "communication";
  }
  if (value.includes("operative") || value.includes("operation")) {
    return "perioperative";
  }
  return "communication";
}

const COMPLETED_STEPS: Record<string, string[]> = {
  "rgn-056": [
    "Confirm the authorized request against the laboratory form and patient identity.",
    "Explain the collection and maintain privacy.",
    "Assemble the labeled specimen container, antiseptic swabs, syringe or approved sampling device, gloves and receiver.",
    "Perform hand hygiene, provide a supine position and expose only the required area.",
    "Clamp the drainage tubing below the sampling port according to local policy and allow fresh urine to collect.",
    "Perform hand hygiene and put on gloves.",
    "Clean the sampling port with the approved antiseptic and allow it to dry.",
    "Withdraw the required urine volume from the sampling port using the approved needle-free device.",
    "Transfer urine into the labeled specimen container without contaminating the container or specimen.",
    "Unclamp the tubing, confirm drainage resumes and reconnect the system if it was disconnected.",
    "Dispose of equipment safely, remove gloves and perform hand hygiene.",
    "Send the specimen with the signed request promptly and document the procedure, urine appearance and patient response.",
  ],
  "rgn-057": [
    "Confirm the authorized request and explain the 24-hour collection to the patient.",
    "Provide the labeled collection container and explain that every void during the collection period must be saved.",
    "Record the exact start time and have the patient empty the bladder at that time without saving that first urine.",
    "Collect all subsequent urine, including overnight urine, in the approved container.",
    "Use a bedpan or urinal when needed and transfer urine without contaminating the outside of the container.",
    "Keep the container covered, stored as required by the laboratory and clearly identified.",
    "Record each void and remind other staff not to discard the patient's urine.",
    "If urine is missed or spilled, report it and follow laboratory instructions about restarting the collection.",
    "At the exact completion time, collect the final void and confirm the total collection period.",
    "Send the specimen with the completed request form to the laboratory promptly.",
    "Perform hand hygiene and document the collection period, completeness, patient tolerance and dispatch.",
  ],
  "rgn-059": [
    "Confirm the order, patient identity, wound site, allergies and analgesia needs.",
    "Explain the procedure, obtain cooperation and provide privacy.",
    "Perform hand hygiene, prepare the sterile dressing field and position the patient safely.",
    "Protect the bed and expose only the wound.",
    "Ask the assistant to maintain the position, protect linen and help observe the patient.",
    "Put on clean gloves and remove the old dressing, noting drainage, odor and wound appearance.",
    "Remove gloves, perform hand hygiene and put on sterile gloves.",
    "Assess the wound and cleanse from the least contaminated area to the most contaminated area using the prescribed solution.",
    "Use sterile instruments and supplies without touching key parts.",
    "Apply the prescribed dressing and secure it without restricting circulation.",
    "Reposition the patient, dispose of waste and decontaminate equipment safely.",
    "Perform hand hygiene, reassess comfort and document the wound findings, dressing and patient response.",
  ],
  "rgn-061": [
    "Confirm the order, wound location, expected removal timing, allergies and analgesia needs.",
    "Explain the procedure and provide privacy.",
    "Perform hand hygiene, prepare a sterile field and position the patient safely.",
    "Remove the existing dressing with clean gloves and assess healing, drainage, redness and pain.",
    "Remove gloves, perform hand hygiene and put on sterile gloves.",
    "Clean the wound and surrounding skin using the prescribed solution and sterile technique.",
    "Cut each suture close to the skin on the knot side and gently withdraw it without dragging contaminated thread through the tissue.",
    "Stop and seek review if the wound edges separate, bleeding occurs or a suture cannot be removed easily.",
    "Count removed sutures when required and inspect the wound edges.",
    "Apply the prescribed dressing or adhesive strips and secure the area.",
    "Dispose of sharps and waste safely, reposition the patient and perform hand hygiene.",
    "Document the number removed, wound condition, dressing, patient response and escalation.",
  ],
  "rgn-069": [
    "Confirm the prescription, patient identity, feed type, amount, route and expiry.",
    "Explain the procedure and perform hand hygiene.",
    "Prepare the feed and equipment using the prescribed clean or aseptic technique.",
    "Position the patient upright or elevate the head of the bed as tolerated and protect clothing.",
    "Check the external tube marking and assess the tube and patient; confirm placement using the approved local policy before feeding.",
    "Do not rely on auscultation alone to confirm tube placement.",
    "Flush or aspirate only as prescribed and according to local policy.",
    "Administer the prescribed feed slowly using the approved method, observing for coughing, distress, nausea, vomiting or abdominal discomfort.",
    "Flush the tube with the prescribed amount of water when indicated and close or secure the system.",
    "Keep the patient in the recommended position after feeding and provide mouth care.",
    "Dispose of equipment, perform hand hygiene and document feed, amount, route, tolerance and response.",
  ],
  "rgn-071": [
    "Confirm the prescription, indication, patient identity, consent, blood group, compatibility, unit number and expiry with the required second checker.",
    "Explain the transfusion, expected monitoring and symptoms that must be reported immediately.",
    "Perform hand hygiene, obtain baseline observations and assess the IV access.",
    "Inspect the blood component for leaks, clots, discoloration or other abnormalities and do not use a compromised unit.",
    "Prime the approved blood administration set using the compatible fluid specified by local policy.",
    "Complete the bedside identity and compatibility check immediately before connecting the unit.",
    "Start the transfusion at the prescribed rate and remain with the patient during the initial observation period required by policy.",
    "Monitor vital signs and observe for fever, chills, rash, dyspnea, chest or back pain, hypotension or other reaction.",
    "Stop the transfusion immediately if a reaction is suspected, keep the IV line open with the approved fluid, notify the responsible clinician and follow the reaction protocol.",
    "If no reaction occurs, complete the unit within the policy time limit and record post-transfusion observations.",
    "Dispose of the blood bag and giving set according to policy and perform hand hygiene.",
    "Document the product, checks, times, observations, patient response and any escalation or adverse event.",
  ],
};

function getReferences(kind: ProcedureKind): ProcedureReference[] {
  const references = [NMC_REFERENCE, OPENSTAX_REFERENCE, CDC_REFERENCE];
  if (kind === "hygiene" || kind === "bed" || kind === "wound") {
    references.push(WHO_REFERENCE);
  }
  return references;
}

function getProfile(procedure: Procedure, kind: ProcedureKind): Procedure {
  const content = CONTENT[kind];
  const focus = procedure.title.toLowerCase();

  return {
    ...procedure,
    purpose:
      meaningful(procedure.purpose).length > 0
        ? meaningful(procedure.purpose)
        : content.purpose,
    indications:
      meaningful(procedure.indications).length > 0
        ? meaningful(procedure.indications)
        : content.indications,
    equipment:
      meaningful(procedure.equipment).length > 0
        ? meaningful(procedure.equipment)
        : content.equipment,
    steps: COMPLETED_STEPS[procedure.id] ?? meaningful(procedure.steps),
    precautions:
      meaningful(procedure.precautions).length > 0
        ? meaningful(procedure.precautions)
        : content.precautions,
    contraindications: [
      `Before ${focus}, confirm that the patient is willing and that the required order, assessment and safety checks are complete.`,
      ...content.contraindications,
    ],
    preparation: [
      `Review the care plan, current order and local policy for ${focus}.`,
      "Confirm patient identity, explain the procedure, obtain required consent and provide privacy.",
      "Perform hand hygiene and assemble the listed requirements before starting.",
    ],
    afterCare: [
      ...content.afterCare,
      `Reassess the patient after ${focus} and report unexpected findings promptly.`,
    ],
    documentation: [
      ...content.documentation,
      `Record completion of ${focus}, patient response and any escalation.`,
    ],
    complications: content.complications,
    patientEducation: content.patientEducation,
    nursingConsiderations: [
      ...content.nursingConsiderations,
      `Use the NMC procedure steps and facility policy as the controlling guidance for ${focus}.`,
    ],
    references: getReferences(kind),
    videoUrl:
      procedure.videoUrl &&
      /^(https?:\/\/)(www\.)?(youtube\.com|youtu\.be)\//i.test(
        procedure.videoUrl
      )
        ? procedure.videoUrl
        : undefined,
  };
}

function explanationFor(
  procedure: Procedure,
  question: ProcedureQuizQuestion
): string {
  const supportingStep = procedure.steps.find((step) =>
    step.toLowerCase().includes(question.answer.toLowerCase())
  );

  if (supportingStep) {
    return `This is correct because the procedure states: “${supportingStep}”`;
  }

  return `This is correct because it is consistent with the documented purpose, safety checks and nursing considerations for ${procedure.title.toLowerCase()}.`;
}

function uniqueOptions(options: string[], answer: string): string[] {
  return [...new Set([answer, ...options.filter((option) => option !== answer)])];
}

function buildQuiz(
  procedure: Procedure
): ProcedureQuizQuestion[] {
  const kind = kindFor(procedure.title);
  const content = CONTENT[kind];
  const indications = meaningful(procedure.indications);
  const equipment = meaningful(procedure.equipment);
  const steps = meaningful(procedure.steps);
  const precautions = meaningful(procedure.precautions);
  const indication = indications[0] ?? content.indications[0];
  const item = equipment[0] ?? content.equipment[0];
  const firstStep = steps[0] ?? "Review the order and patient identity";
  const precaution = precautions[0] ?? content.precautions[0];
  const documentation = content.documentation[0];
  const focus = procedure.title.toLowerCase();

  return [
    {
      question: `Which situation is an appropriate indication for ${focus}?`,
      options: uniqueOptions(
        [
          indication,
          "A routine task unrelated to the patient's care plan",
          "A procedure the patient has clearly refused",
          "A substitute for assessment and clinical judgment",
        ],
        indication
      ),
      answer: indication,
      explanation: `The indication is supported by the procedure record: “${indication}”`,
    },
    {
      question: `Which requirement is specifically relevant when preparing for ${focus}?`,
      options: uniqueOptions(
        [
          item,
          "Unlabelled equipment from another patient",
          "A medication with an unknown expiry date",
          "No documentation or observation materials",
        ],
        item
      ),
      answer: item,
      explanation: `The requirements list includes “${item}”; equipment must be appropriate, clean and available before starting.`,
    },
    {
      question: `Which action is an essential safety precaution during ${focus}?`,
      options: uniqueOptions(
        [
          precaution,
          "Skip identity checks to save time",
          "Continue despite severe deterioration",
          "Reuse contaminated single-use equipment",
        ],
        precaution
      ),
      answer: precaution,
      explanation: `This protects the patient because the procedure specifically requires: “${precaution}”`,
    },
    {
      question: `What should guide the start of ${focus}?`,
      options: uniqueOptions(
        [
          firstStep,
          "Begin without explaining the procedure",
          "Document only after an adverse event",
          "Ignore the current order and care plan",
        ],
        firstStep
      ),
      answer: firstStep,
      explanation: `The first step establishes the correct order, assessment or preparation before later actions are performed.`,
    },
    {
      question: `Which documentation action is most appropriate after ${focus}?`,
      options: uniqueOptions(
        [
          documentation,
          "Record nothing if the patient appears comfortable",
          "Document only the equipment brand",
          "Wait until an unrelated future admission",
        ],
        documentation
      ),
      answer: documentation,
      explanation: `Accurate documentation communicates the care provided, patient response and any action needed after the procedure.`,
    },
  ];
}

function completeQuiz(
  procedure: Procedure,
  quiz: ProcedureQuizQuestion[] | undefined
): ProcedureQuizQuestion[] {
  if (!quiz || quiz.length === 0) {
    return buildQuiz(procedure);
  }

  return quiz.map((question) => ({
    ...question,
    explanation: question.explanation ?? explanationFor(procedure, question),
  }));
}

export function completeRgnProcedure(procedure: Procedure): Procedure {
  const completed = getProfile(procedure, kindFor(procedure.title));

  return {
    ...completed,
    quiz: completeQuiz(completed, completed.quiz),
  };
}