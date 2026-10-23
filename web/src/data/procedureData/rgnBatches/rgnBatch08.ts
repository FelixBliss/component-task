import type { Procedure } from "../../procedureTypes";

const q = (question: string, options: string[], answer: string, explanation: string) => ({
  question,
  options,
  answer,
  explanation,
});

export const rgnBatch08: Procedure[] = [
  {
    id: "rgn-066",
    title: "TAKING OVER A WARD",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview: "It is the practice of exchanging important and relevant information physically and electronically about a patient (using Electronic Medical Records Review (EMR)), staff, equipment and nursing activities that occurred during a shift from outgoing team of nurses/midwives to incoming team of nurses/midwives i.e. morning, afternoon and night.",
    purpose: [],
    indications: ["Beginning a morning, afternoon, or night duty", "Assumption of responsibility after staff redeployment", "Any formal transfer of ward responsibility"],
    equipment: [
  "The following manual or electronic documents:",
  "24 Hourly report book",
  "Patient’s folders",
  "Patient observation charts",
  "Ward state",
  "Nurse’s changes book 6. Other relevant documents (based on facility protocol)"
],
    steps: [
  "Greet the nurses on duty",
  "Ask for oral information on major happenings on the ward from the outgoing nurse",
  "Read reports",
  "Enquire about sensitive information on patients at the nurse’s station",
  "Take over ward from bed to bed verifying the state of all patients",
  "Establish rapport with patients during taking over, ask about their concerns and general health",
  "Confirm information about the patients on charts and notes provide",
  "Check with outgoing nurse if gadgets on patients are functioning e.g. cardiac monitor, oxygen flow metre etc.",
  "Check on any drainage tubes if they are draining well and record the amount if necessary e.g. intravenous line, catheter, NG tubes etc.",
  "Conduct inspection of ward with the outgoing nurse and note defective equipment",
  "Ensure resources needed for work are available and adequate and takes over controlled medication",
  "Counter-signs written ward report",
  "Note important issues and document",
  "Congratulate out-going nurse"
],
    precautions: ["Never accept responsibility for an unclear or unsafe handover without escalating and recording the concern.", "Check actual patient and device status rather than relying only on verbal report.", "Protect confidentiality during bedside review and electronic record access.", "Controlled medicines, keys, and equipment must be counted and transferred according to facility policy."],
    preparation: ["Know the ward layout, emergency procedures, staffing allocation, and local escalation pathways.", "Prioritize unstable patients and time-critical treatments before routine administrative tasks."],
    documentation: ["Record handover time, staff involved, patient risks, outstanding tasks, counts, equipment faults, and escalations.", "Update the ward state and care plan when the assessment identifies a change."],
    quiz: [
  {
    "question": "Which action is listed as step 1 of TAKING OVER A WARD?",
    "options": [
      "Greet the nurses on duty",
      "Take over ward from bed to bed verifying the state of all patients",
      "Read reports",
      "Congratulate out-going nurse"
    ],
    "answer": "Greet the nurses on duty",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of TAKING OVER A WARD?",
    "options": [
      "Check with outgoing nurse if gadgets on patients are functioning e.g. cardiac monitor, oxygen flow metre etc.",
      "Ask for oral information on major happenings on the ward from the outgoing nurse",
      "Counter-signs written ward report",
      "Conduct inspection of ward with the outgoing nurse and note defective equipment"
    ],
    "answer": "Ask for oral information on major happenings on the ward from the outgoing nurse",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of TAKING OVER A WARD?",
    "options": [
      "Enquire about sensitive information on patients at the nurse’s station",
      "Greet the nurses on duty",
      "Read reports",
      "Establish rapport with patients during taking over, ask about their concerns and general health"
    ],
    "answer": "Read reports",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of TAKING OVER A WARD?",
    "options": [
      "Note important issues and document",
      "Ensure resources needed for work are available and adequate and takes over controlled medication",
      "Check on any drainage tubes if they are draining well and record the amount if necessary e.g. intravenous line, catheter, NG tubes etc.",
      "Enquire about sensitive information on patients at the nurse’s station"
    ],
    "answer": "Enquire about sensitive information on patients at the nurse’s station",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of TAKING OVER A WARD?",
    "options": [
      "Take over ward from bed to bed verifying the state of all patients",
      "Confirm information about the patients on charts and notes provide",
      "Enquire about sensitive information on patients at the nurse’s station",
      "Ask for oral information on major happenings on the ward from the outgoing nurse"
    ],
    "answer": "Take over ward from bed to bed verifying the state of all patients",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of TAKING OVER A WARD?",
    "options": [
      "Conduct inspection of ward with the outgoing nurse and note defective equipment",
      "Establish rapport with patients during taking over, ask about their concerns and general health",
      "Congratulate out-going nurse",
      "Counter-signs written ward report"
    ],
    "answer": "Establish rapport with patients during taking over, ask about their concerns and general health",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of TAKING OVER A WARD?",
    "options": [
      "Take over ward from bed to bed verifying the state of all patients",
      "Read reports",
      "Confirm information about the patients on charts and notes provide",
      "Check with outgoing nurse if gadgets on patients are functioning e.g. cardiac monitor, oxygen flow metre etc."
    ],
    "answer": "Confirm information about the patients on charts and notes provide",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of TAKING OVER A WARD?",
    "options": [
      "Greet the nurses on duty",
      "Note important issues and document",
      "Ensure resources needed for work are available and adequate and takes over controlled medication",
      "Check with outgoing nurse if gadgets on patients are functioning e.g. cardiac monitor, oxygen flow metre etc."
    ],
    "answer": "Check with outgoing nurse if gadgets on patients are functioning e.g. cardiac monitor, oxygen flow metre etc.",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of TAKING OVER A WARD?",
    "options": [
      "Check on any drainage tubes if they are draining well and record the amount if necessary e.g. intravenous line, catheter, NG tubes etc.",
      "Check with outgoing nurse if gadgets on patients are functioning e.g. cardiac monitor, oxygen flow metre etc.",
      "Establish rapport with patients during taking over, ask about their concerns and general health",
      "Enquire about sensitive information on patients at the nurse’s station"
    ],
    "answer": "Check on any drainage tubes if they are draining well and record the amount if necessary e.g. intravenous line, catheter, NG tubes etc.",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of TAKING OVER A WARD?",
    "options": [
      "Counter-signs written ward report",
      "Conduct inspection of ward with the outgoing nurse and note defective equipment",
      "Ask for oral information on major happenings on the ward from the outgoing nurse",
      "Congratulate out-going nurse"
    ],
    "answer": "Conduct inspection of ward with the outgoing nurse and note defective equipment",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of TAKING OVER A WARD?",
    "options": [
      "Confirm information about the patients on charts and notes provide",
      "Take over ward from bed to bed verifying the state of all patients",
      "Ensure resources needed for work are available and adequate and takes over controlled medication",
      "Check on any drainage tubes if they are draining well and record the amount if necessary e.g. intravenous line, catheter, NG tubes etc."
    ],
    "answer": "Ensure resources needed for work are available and adequate and takes over controlled medication",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of TAKING OVER A WARD?",
    "options": [
      "Read reports",
      "Greet the nurses on duty",
      "Note important issues and document",
      "Counter-signs written ward report"
    ],
    "answer": "Counter-signs written ward report",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of TAKING OVER A WARD?",
    "options": [
      "Note important issues and document",
      "Conduct inspection of ward with the outgoing nurse and note defective equipment",
      "Check with outgoing nurse if gadgets on patients are functioning e.g. cardiac monitor, oxygen flow metre etc.",
      "Establish rapport with patients during taking over, ask about their concerns and general health"
    ],
    "answer": "Note important issues and document",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of TAKING OVER A WARD?",
    "options": [
      "Note important issues and document",
      "Congratulate out-going nurse",
      "Enquire about sensitive information on patients at the nurse’s station",
      "Ask for oral information on major happenings on the ward from the outgoing nurse"
    ],
    "answer": "Congratulate out-going nurse",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  }
],
  },
  {
    id: "rgn-067",
    title: "WASHING OF PATIENT'S HAIR IN BED",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview: "This is the process of maintaining the cleanliness of a patient's hair by washing the hair with water and shampoo. This activity is mostly performed for patient who are bedridden and need assistance in the maintenance of their personal hygiene care.",
    purpose: [],
    indications: ["A bedridden or dependent patient unable to wash hair independently", "Scalp hygiene required as part of personal care", "A patient who can tolerate the position and water exposure"],
    equipment: [
  "A trolley containing the following:",
  "Top shelf",
  "Bowl",
  "Two bath towel",
  "Face towel",
  "Cotton wool swabs in a gallipot",
  "Shampoo and conditioner",
  "Hair comb",
  "Kidney dish",
  "Hair pins where necessary",
  "vii. Hair pomade",
  "Bottom shelf",
  "Two jugs containing hot and cold water",
  "Long mackintosh and a bath blanket/big towel/linen",
  "Clean linen if required",
  "Hairdryer if available",
  "Bucket for used water"
],
    steps: [
  "Establish rapport (Refer to steps)",
  "Explain procedure to patient (Refer to steps)",
  "Provide privacy",
  "Perform hand hygiene, prepare and send trolley to bedside",
  "Assist patient into a fowler’s position or lie flat in with the head extended to the edge of the bed (if condition permits)",
  "Arrange long mackintosh and a bath blanket/big towel/linen into a trough, fashioned under the patient’s shoulders, neck, head and extend it down into a bucket",
  "Cover mackintosh with a bath towel under the patient’s neck and around the shoulders",
  "Remove hair accessories, comb and remove tangles",
  "Pluck the ear with cotton wool balls",
  "Mix the water to the patient’s preferred temperature",
  "Wet hair and apply soap/shampoo",
  "Massage hair well, rinse and repeat till the hair is clean (a woman require more rinse water than a man)",
  "Wipe any moisture around eye, face and neck",
  "Squeeze hair gently and tie hair up in a towel",
  "Remove long mackintosh and a bath blanket/big towel/linen",
  "Assist patient into a sitting up position",
  "Dry thoroughly with a towel and a hand dryer",
  "Apply pomade, comb and style hair to patient’s liking",
  "Change linen if wet",
  "Put patient in a desirable position",
  "Dispose off used items and decontaminate trolley",
  "Perform hand hygiene",
  "Document procedure in nurses’ notes (manual or electronic) and report findings to appropriate officer"
],
    precautions: ["Do not extend the neck or expose the patient to water if respiratory, cervical-spine, neurological, or cardiovascular status makes it unsafe.", "Avoid hot water, vigorous scalp massage, hair dryers near wet skin, and water near electrical equipment.", "Protect hearing aids, dressings, IV lines, oxygen, and other devices from water.", "Stop for breathlessness, dizziness, chills, pain, distress, or a change in level of consciousness."],
    preparation: ["Check for scalp lesions, infestations, pressure areas, or prescribed treatments and report abnormalities.", "Ask for assistance when the patient is heavy, confused, unstable, or unable to maintain position."],
    afterCare: ["Dry the hair and scalp completely, maintain warmth, and check for wet linen or skin folds.", "Offer fluids or rest if appropriate and teach the patient to report scalp pain, itching, sores, or persistent dizziness."],
    documentation: ["Record the patient’s tolerance, scalp condition, products used, hair care preference, and any abnormal findings.", "Document refusal, assistance required, skin injury, infestation, or escalation."],
    quiz: [
  {
    "question": "Which action is listed as step 1 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Assist patient into a fowler’s position or lie flat in with the head extended to the edge of the bed (if condition permits)",
      "Assist patient into a sitting up position",
      "Explain procedure to patient (Refer to steps)"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Explain procedure to patient (Refer to steps)",
      "Massage hair well, rinse and repeat till the hair is clean (a woman require more rinse water than a man)",
      "Document procedure in nurses’ notes (manual or electronic) and report findings to appropriate officer"
    ],
    "answer": "Explain procedure to patient (Refer to steps)",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Remove hair accessories, comb and remove tangles",
      "Establish rapport (Refer to steps)",
      "Provide privacy",
      "Change linen if wet"
    ],
    "answer": "Provide privacy",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Provide privacy",
      "Remove long mackintosh and a bath blanket/big towel/linen",
      "Establish rapport (Refer to steps)",
      "Perform hand hygiene, prepare and send trolley to bedside"
    ],
    "answer": "Perform hand hygiene, prepare and send trolley to bedside",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Assist patient into a fowler’s position or lie flat in with the head extended to the edge of the bed (if condition permits)",
      "Wet hair and apply soap/shampoo",
      "Perform hand hygiene",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Assist patient into a fowler’s position or lie flat in with the head extended to the edge of the bed (if condition permits)",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Arrange long mackintosh and a bath blanket/big towel/linen into a trough, fashioned under the patient’s shoulders, neck, head and extend it down into a bucket",
      "Apply pomade, comb and style hair to patient’s liking",
      "Cover mackintosh with a bath towel under the patient’s neck and around the shoulders"
    ],
    "answer": "Arrange long mackintosh and a bath blanket/big towel/linen into a trough, fashioned under the patient’s shoulders, neck, head and extend it down into a bucket",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Squeeze hair gently and tie hair up in a towel",
      "Establish rapport (Refer to steps)",
      "Cover mackintosh with a bath towel under the patient’s neck and around the shoulders",
      "Explain procedure to patient (Refer to steps)"
    ],
    "answer": "Cover mackintosh with a bath towel under the patient’s neck and around the shoulders",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Mix the water to the patient’s preferred temperature",
      "Dispose off used items and decontaminate trolley",
      "Establish rapport (Refer to steps)",
      "Remove hair accessories, comb and remove tangles"
    ],
    "answer": "Remove hair accessories, comb and remove tangles",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Pluck the ear with cotton wool balls",
      "Dry thoroughly with a towel and a hand dryer",
      "Assist patient into a fowler’s position or lie flat in with the head extended to the edge of the bed (if condition permits)",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Pluck the ear with cotton wool balls",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Explain procedure to patient (Refer to steps)",
      "Mix the water to the patient’s preferred temperature",
      "Establish rapport (Refer to steps)",
      "Wipe any moisture around eye, face and neck"
    ],
    "answer": "Mix the water to the patient’s preferred temperature",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Put patient in a desirable position",
      "Establish rapport (Refer to steps)",
      "Wet hair and apply soap/shampoo",
      "Remove hair accessories, comb and remove tangles"
    ],
    "answer": "Wet hair and apply soap/shampoo",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Assist patient into a sitting up position",
      "Perform hand hygiene, prepare and send trolley to bedside",
      "Establish rapport (Refer to steps)",
      "Massage hair well, rinse and repeat till the hair is clean (a woman require more rinse water than a man)"
    ],
    "answer": "Massage hair well, rinse and repeat till the hair is clean (a woman require more rinse water than a man)",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Wipe any moisture around eye, face and neck",
      "Document procedure in nurses’ notes (manual or electronic) and report findings to appropriate officer",
      "Wet hair and apply soap/shampoo",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Wipe any moisture around eye, face and neck",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Squeeze hair gently and tie hair up in a towel",
      "Cover mackintosh with a bath towel under the patient’s neck and around the shoulders",
      "Change linen if wet"
    ],
    "answer": "Squeeze hair gently and tie hair up in a towel",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Provide privacy",
      "Establish rapport (Refer to steps)",
      "Remove long mackintosh and a bath blanket/big towel/linen",
      "Squeeze hair gently and tie hair up in a towel"
    ],
    "answer": "Remove long mackintosh and a bath blanket/big towel/linen",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Perform hand hygiene",
      "Mix the water to the patient’s preferred temperature",
      "Establish rapport (Refer to steps)",
      "Assist patient into a sitting up position"
    ],
    "answer": "Assist patient into a sitting up position",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Dry thoroughly with a towel and a hand dryer",
      "Arrange long mackintosh and a bath blanket/big towel/linen into a trough, fashioned under the patient’s shoulders, neck, head and extend it down into a bucket",
      "Apply pomade, comb and style hair to patient’s liking",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Dry thoroughly with a towel and a hand dryer",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Apply pomade, comb and style hair to patient’s liking",
      "Wipe any moisture around eye, face and neck",
      "Explain procedure to patient (Refer to steps)"
    ],
    "answer": "Apply pomade, comb and style hair to patient’s liking",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Pluck the ear with cotton wool balls",
      "Establish rapport (Refer to steps)",
      "Change linen if wet",
      "Dispose off used items and decontaminate trolley"
    ],
    "answer": "Change linen if wet",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Assist patient into a fowler’s position or lie flat in with the head extended to the edge of the bed (if condition permits)",
      "Assist patient into a sitting up position",
      "Establish rapport (Refer to steps)",
      "Put patient in a desirable position"
    ],
    "answer": "Put patient in a desirable position",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 21 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Dispose off used items and decontaminate trolley",
      "Massage hair well, rinse and repeat till the hair is clean (a woman require more rinse water than a man)",
      "Establish rapport (Refer to steps)",
      "Explain procedure to patient (Refer to steps)"
    ],
    "answer": "Dispose off used items and decontaminate trolley",
    "explanation": "This checks recall of step 21 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 22 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Perform hand hygiene",
      "Change linen if wet",
      "Remove hair accessories, comb and remove tangles"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 22 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 23 of WASHING OF PATIENT'S HAIR IN BED?",
    "options": [
      "Remove long mackintosh and a bath blanket/big towel/linen",
      "Establish rapport (Refer to steps)",
      "Document procedure in nurses’ notes (manual or electronic) and report findings to appropriate officer",
      "Perform hand hygiene, prepare and send trolley to bedside"
    ],
    "answer": "Document procedure in nurses’ notes (manual or electronic) and report findings to appropriate officer",
    "explanation": "This checks recall of step 23 in the procedure sequence."
  }
],
  },
  {
    id: "rgn-068",
    title: "SPOON FEEDING OF AN ADULT ILL PATIENT",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview: "It is the provision of nutritional meals through the gastrointestinal tract. This can be done directly through the mouth, stoma or with the aid of nasogastric (NG) tube.",
    purpose: [],
    indications: ["An adult who requires assistance with oral feeding", "Weakness, illness, reduced mobility, or visual or motor impairment", "A prescribed oral diet when swallowing is assessed as safe"],
    equipment: [
  "A tray containing:",
  "Food",
  "Spoon",
  "Bottle of drinking water",
  "Cup",
  "Napkins",
  "Serviette",
  "A bowl of water",
  "Hand washing soap",
  "Bedpan/urinal if necessary",
  "Mouth wash"
],
    steps: [
  "Establish rapport (Refer to steps)",
  "Explain the procedure to the patient and inform him/her about the kind of food about to serve",
  "Ask patient if he/she want to empty the bladder/bowel before eating",
  "Offer bedpan/urinal if required",
  "Assist patient to perform hand hygiene",
  "Perform hand hygiene and prepare meal tray",
  "Put patient into a desirable position",
  "Give patient a mouth wash",
  "Bring food in a tray to patient’s bedside and place it on the cardiac table",
  "Protect patient’s clothing with the serviette",
  "Ensure patient is in a comfortable position and ask if prayer is preferred",
  "Sit beside the patient if convenient to make patient feel relaxed",
  "Take food by spoon in small bits into patient’s mouth not too far back",
  "Allow patient time to chew and swallow",
  "Coordinate the opening of the mouth while introducing the food",
  "Continue feeding until patient is satisfied",
  "Give water intermittently as required by patient",
  "Clean patient’s lips and give a mouth wash",
  "Remove serviette and reposition patient comfortable",
  "Encourage patient to comment on the food served",
  "Congratulate patient and discard tray",
  "Dispose off tray and wash items",
  "Perform hand hygiene and document on appropriate charts (manual or electronic)"
],
    precautions: ["Follow texture, thickness, positioning, and supervision instructions for dysphagia; never improvise a diet texture.", "Never feed an unresponsive, severely drowsy, or actively choking patient.", "Do not rush, force, or place food at the back of the mouth.", "Use aspiration precautions and report recurrent coughing, wet voice, weight loss, or poor intake."],
    preparation: ["Confirm the patient is awake enough to eat and has appropriate dentures, glasses, hearing aids, and positioning support.", "Check for nausea, pain, oral lesions, fatigue, and the need for rest before feeding."],
    afterCare: ["Keep the patient upright and observe for delayed coughing, voice change, nausea, or breathlessness.", "Offer mouth care and ensure food safety, hand hygiene, and a clean environment."],
    documentation: ["Record diet, percentage or amount consumed, fluid intake, assistance level, tolerance, and swallowing observations.", "Document refusal, aspiration signs, and referral to the nurse in charge or speech and language team."],
    quiz: [
  {
    "question": "Which action is listed as step 1 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Assist patient to perform hand hygiene",
      "Continue feeding until patient is satisfied",
      "Explain the procedure to the patient and inform him/her about the kind of food about to serve"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Explain the procedure to the patient and inform him/her about the kind of food about to serve",
      "Sit beside the patient if convenient to make patient feel relaxed",
      "Perform hand hygiene and document on appropriate charts (manual or electronic)"
    ],
    "answer": "Explain the procedure to the patient and inform him/her about the kind of food about to serve",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Give patient a mouth wash",
      "Establish rapport (Refer to steps)",
      "Ask patient if he/she want to empty the bladder/bowel before eating",
      "Remove serviette and reposition patient comfortable"
    ],
    "answer": "Ask patient if he/she want to empty the bladder/bowel before eating",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Ask patient if he/she want to empty the bladder/bowel before eating",
      "Coordinate the opening of the mouth while introducing the food",
      "Establish rapport (Refer to steps)",
      "Offer bedpan/urinal if required"
    ],
    "answer": "Offer bedpan/urinal if required",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Assist patient to perform hand hygiene",
      "Ensure patient is in a comfortable position and ask if prayer is preferred",
      "Dispose off tray and wash items",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Assist patient to perform hand hygiene",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Perform hand hygiene and prepare meal tray",
      "Clean patient’s lips and give a mouth wash",
      "Put patient into a desirable position"
    ],
    "answer": "Perform hand hygiene and prepare meal tray",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Allow patient time to chew and swallow",
      "Establish rapport (Refer to steps)",
      "Put patient into a desirable position",
      "Explain the procedure to the patient and inform him/her about the kind of food about to serve"
    ],
    "answer": "Put patient into a desirable position",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Protect patient’s clothing with the serviette",
      "Congratulate patient and discard tray",
      "Establish rapport (Refer to steps)",
      "Give patient a mouth wash"
    ],
    "answer": "Give patient a mouth wash",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Bring food in a tray to patient’s bedside and place it on the cardiac table",
      "Give water intermittently as required by patient",
      "Assist patient to perform hand hygiene",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Bring food in a tray to patient’s bedside and place it on the cardiac table",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Explain the procedure to the patient and inform him/her about the kind of food about to serve",
      "Protect patient’s clothing with the serviette",
      "Establish rapport (Refer to steps)",
      "Take food by spoon in small bits into patient’s mouth not too far back"
    ],
    "answer": "Protect patient’s clothing with the serviette",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Encourage patient to comment on the food served",
      "Establish rapport (Refer to steps)",
      "Ensure patient is in a comfortable position and ask if prayer is preferred",
      "Give patient a mouth wash"
    ],
    "answer": "Ensure patient is in a comfortable position and ask if prayer is preferred",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Continue feeding until patient is satisfied",
      "Offer bedpan/urinal if required",
      "Establish rapport (Refer to steps)",
      "Sit beside the patient if convenient to make patient feel relaxed"
    ],
    "answer": "Sit beside the patient if convenient to make patient feel relaxed",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Take food by spoon in small bits into patient’s mouth not too far back",
      "Perform hand hygiene and document on appropriate charts (manual or electronic)",
      "Ensure patient is in a comfortable position and ask if prayer is preferred",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Take food by spoon in small bits into patient’s mouth not too far back",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Allow patient time to chew and swallow",
      "Put patient into a desirable position",
      "Remove serviette and reposition patient comfortable"
    ],
    "answer": "Allow patient time to chew and swallow",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Ask patient if he/she want to empty the bladder/bowel before eating",
      "Establish rapport (Refer to steps)",
      "Coordinate the opening of the mouth while introducing the food",
      "Allow patient time to chew and swallow"
    ],
    "answer": "Coordinate the opening of the mouth while introducing the food",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Dispose off tray and wash items",
      "Protect patient’s clothing with the serviette",
      "Establish rapport (Refer to steps)",
      "Continue feeding until patient is satisfied"
    ],
    "answer": "Continue feeding until patient is satisfied",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Give water intermittently as required by patient",
      "Perform hand hygiene and prepare meal tray",
      "Clean patient’s lips and give a mouth wash",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Give water intermittently as required by patient",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Clean patient’s lips and give a mouth wash",
      "Take food by spoon in small bits into patient’s mouth not too far back",
      "Explain the procedure to the patient and inform him/her about the kind of food about to serve"
    ],
    "answer": "Clean patient’s lips and give a mouth wash",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Bring food in a tray to patient’s bedside and place it on the cardiac table",
      "Establish rapport (Refer to steps)",
      "Remove serviette and reposition patient comfortable",
      "Congratulate patient and discard tray"
    ],
    "answer": "Remove serviette and reposition patient comfortable",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Assist patient to perform hand hygiene",
      "Continue feeding until patient is satisfied",
      "Establish rapport (Refer to steps)",
      "Encourage patient to comment on the food served"
    ],
    "answer": "Encourage patient to comment on the food served",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 21 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Congratulate patient and discard tray",
      "Sit beside the patient if convenient to make patient feel relaxed",
      "Establish rapport (Refer to steps)",
      "Explain the procedure to the patient and inform him/her about the kind of food about to serve"
    ],
    "answer": "Congratulate patient and discard tray",
    "explanation": "This checks recall of step 21 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 22 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Dispose off tray and wash items",
      "Remove serviette and reposition patient comfortable",
      "Give patient a mouth wash"
    ],
    "answer": "Dispose off tray and wash items",
    "explanation": "This checks recall of step 22 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 23 of SPOON FEEDING OF AN ADULT ILL PATIENT?",
    "options": [
      "Coordinate the opening of the mouth while introducing the food",
      "Establish rapport (Refer to steps)",
      "Perform hand hygiene and document on appropriate charts (manual or electronic)",
      "Offer bedpan/urinal if required"
    ],
    "answer": "Perform hand hygiene and document on appropriate charts (manual or electronic)",
    "explanation": "This checks recall of step 23 in the procedure sequence."
  }
],
  },
  {
    id: "rgn-069",
    title: "FEEDING A PATIENT PER NASO-GASTRIC TUBE",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview: "Feeding of a patient is one of the essential task nurses/midwives perform for patients during admission. This is the process of assisting an incapacitated patient to eat in order to meet the daily nutritional requirements. It is the provision of nutritional meals through the gastrointestinal tract. This can be done directly through the mouth, stoma or with the aid of nasogastric (NG) tube.",
    purpose: [],
    indications: ["A correctly placed and authorized naso-gastric tube", "Inability to meet nutritional needs orally with a functioning gastrointestinal tract", "Prescribed enteral feed, water, or medication"],
    equipment: [
  "An inserted nasogastric tube",
  "A tray containing:",
  "Prescribed amount of feed",
  "Feeding syringe 50/60 cc",
  "Calibrated cup/container",
  "Bottle of water",
  "Jaconet cape/adult bib",
  "Disposable gloves",
  "20cc syringe in a receiver",
  "Stethoscope"
],
    steps: [
  "Establish rapport with patient and relatives (Refer to steps)",
  "Explain procedure to patient and relatives (Refer to steps)",
  "Confirm the type and amount of feed against patient’s records",
  "Perform hand hygiene",
  "Send prepared feed in a tray to the patient’s bedside",
  "Assist patient into a fowler’s position or slightly elevate the head end of the bed",
  "Make patient comfortable and protects his/her clothes with the jaconet cape/adult bib",
  "Check for proper placement of tube in the stomach by",
  "Aspirating abdominal contents for a typical gastric fluid appearance (grassy-green, colourless with mucus shreds) in the tube OR",
  "Inject 5 – 20cc of air through the tube and auscultate epigastric region with a stethoscope and listen for the whooshing sound simultaneously",
  "Pour the feed into the calibrated cup and check the temperature",
  "Pinch the naso-gastric tube, remove spigot and connect the empty syringe barrel",
  "NB: Ensure that throughout the procedure the tube is never allowed to empty completely to prevent air from entering patient’s stomach",
  "Hold the syringe in an upright position and pour 10-20mls of water to flush the tube before introducing the feed",
  "Pour the feed into the syringe barrel, release the pinch and allow the feed to run by gravity",
  "Continue feeding and observe patient for signs of discomfort till feeding is completed",
  "Flush the tube with 10-20mls of water at the end of feeding",
  "Pinch tube, remove the syringe barrel and replace in spigot",
  "Assist patient to remain in the sitting up position for at least 30 minutes after feeding",
  "Remove protective clothing, dispose off tray and wash items",
  "Perform hand hygiene and document on appropriate charts (manual or electronic)"
],
    precautions: ["Do not commence a feed if tube placement is uncertain; confirm by approved policy and escalate.", "The air-auscultation or whoosh test is not a reliable method of confirming tube position.", "Use enteral equipment and connectors that cannot be inadvertently connected to IV lines.", "Follow local guidance for gastric residuals; do not make decisions from residual volume alone without clinical context."],
    preparation: ["Check the tube’s external marking, fixation, nostril and skin condition, and recent placement documentation.", "Assess bowel sounds, abdominal distension, stool pattern, hydration, and aspiration risk as directed by policy."],
    afterCare: ["Maintain head elevation, provide mouth and nasal care, and check the tube fixation.", "Teach the patient to report nausea, pain, coughing, breathlessness, or tube displacement."],
    documentation: ["Record feed type, volume, route, rate, water flushes, tube position check, patient tolerance, and intake-output.", "Document interruptions, vomiting, aspiration signs, tube displacement, and escalation."],
    videoUrl: "https://www.youtube.com/watch?v=rZxlSgaujA4",
    quiz: [
  {
    "question": "Which action is listed as step 1 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Establish rapport with patient and relatives (Refer to steps)",
      "Send prepared feed in a tray to the patient’s bedside",
      "Continue feeding and observe patient for signs of discomfort till feeding is completed",
      "Make patient comfortable and protects his/her clothes with the jaconet cape/adult bib"
    ],
    "answer": "Establish rapport with patient and relatives (Refer to steps)",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Hold the syringe in an upright position and pour 10-20mls of water to flush the tube before introducing the feed",
      "Explain procedure to patient and relatives (Refer to steps)",
      "Pinch the naso-gastric tube, remove spigot and connect the empty syringe barrel",
      "Confirm the type and amount of feed against patient’s records"
    ],
    "answer": "Explain procedure to patient and relatives (Refer to steps)",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Inject 5 – 20cc of air through the tube and auscultate epigastric region with a stethoscope and listen for the whooshing sound simultaneously",
      "Perform hand hygiene and document on appropriate charts (manual or electronic)",
      "Confirm the type and amount of feed against patient’s records",
      "Assist patient to remain in the sitting up position for at least 30 minutes after feeding"
    ],
    "answer": "Confirm the type and amount of feed against patient’s records",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Assist patient into a fowler’s position or slightly elevate the head end of the bed",
      "Flush the tube with 10-20mls of water at the end of feeding",
      "Check for proper placement of tube in the stomach by",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Send prepared feed in a tray to the patient’s bedside",
      "NB: Ensure that throughout the procedure the tube is never allowed to empty completely to prevent air from entering patient’s stomach",
      "Confirm the type and amount of feed against patient’s records",
      "Pour the feed into the syringe barrel, release the pinch and allow the feed to run by gravity"
    ],
    "answer": "Send prepared feed in a tray to the patient’s bedside",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Establish rapport with patient and relatives (Refer to steps)",
      "Assist patient into a fowler’s position or slightly elevate the head end of the bed",
      "Remove protective clothing, dispose off tray and wash items",
      "Pour the feed into the calibrated cup and check the temperature"
    ],
    "answer": "Assist patient into a fowler’s position or slightly elevate the head end of the bed",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Pinch tube, remove the syringe barrel and replace in spigot",
      "Aspirating abdominal contents for a typical gastric fluid appearance (grassy-green, colourless with mucus shreds) in the tube OR",
      "Make patient comfortable and protects his/her clothes with the jaconet cape/adult bib",
      "Assist patient into a fowler’s position or slightly elevate the head end of the bed"
    ],
    "answer": "Make patient comfortable and protects his/her clothes with the jaconet cape/adult bib",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Hold the syringe in an upright position and pour 10-20mls of water to flush the tube before introducing the feed",
      "Perform hand hygiene",
      "Continue feeding and observe patient for signs of discomfort till feeding is completed",
      "Check for proper placement of tube in the stomach by"
    ],
    "answer": "Check for proper placement of tube in the stomach by",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Aspirating abdominal contents for a typical gastric fluid appearance (grassy-green, colourless with mucus shreds) in the tube OR",
      "Perform hand hygiene and document on appropriate charts (manual or electronic)",
      "Pinch the naso-gastric tube, remove spigot and connect the empty syringe barrel",
      "Explain procedure to patient and relatives (Refer to steps)"
    ],
    "answer": "Aspirating abdominal contents for a typical gastric fluid appearance (grassy-green, colourless with mucus shreds) in the tube OR",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Aspirating abdominal contents for a typical gastric fluid appearance (grassy-green, colourless with mucus shreds) in the tube OR",
      "Inject 5 – 20cc of air through the tube and auscultate epigastric region with a stethoscope and listen for the whooshing sound simultaneously",
      "Make patient comfortable and protects his/her clothes with the jaconet cape/adult bib",
      "Assist patient to remain in the sitting up position for at least 30 minutes after feeding"
    ],
    "answer": "Inject 5 – 20cc of air through the tube and auscultate epigastric region with a stethoscope and listen for the whooshing sound simultaneously",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Send prepared feed in a tray to the patient’s bedside",
      "Flush the tube with 10-20mls of water at the end of feeding",
      "Pour the feed into the calibrated cup and check the temperature",
      "Pour the feed into the syringe barrel, release the pinch and allow the feed to run by gravity"
    ],
    "answer": "Pour the feed into the calibrated cup and check the temperature",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Establish rapport with patient and relatives (Refer to steps)",
      "NB: Ensure that throughout the procedure the tube is never allowed to empty completely to prevent air from entering patient’s stomach",
      "Confirm the type and amount of feed against patient’s records",
      "Pinch the naso-gastric tube, remove spigot and connect the empty syringe barrel"
    ],
    "answer": "Pinch the naso-gastric tube, remove spigot and connect the empty syringe barrel",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "NB: Ensure that throughout the procedure the tube is never allowed to empty completely to prevent air from entering patient’s stomach",
      "Check for proper placement of tube in the stomach by",
      "Remove protective clothing, dispose off tray and wash items",
      "Inject 5 – 20cc of air through the tube and auscultate epigastric region with a stethoscope and listen for the whooshing sound simultaneously"
    ],
    "answer": "NB: Ensure that throughout the procedure the tube is never allowed to empty completely to prevent air from entering patient’s stomach",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Pinch tube, remove the syringe barrel and replace in spigot",
      "Hold the syringe in an upright position and pour 10-20mls of water to flush the tube before introducing the feed",
      "Continue feeding and observe patient for signs of discomfort till feeding is completed",
      "Assist patient into a fowler’s position or slightly elevate the head end of the bed"
    ],
    "answer": "Hold the syringe in an upright position and pour 10-20mls of water to flush the tube before introducing the feed",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "NB: Ensure that throughout the procedure the tube is never allowed to empty completely to prevent air from entering patient’s stomach",
      "Perform hand hygiene",
      "Pour the feed into the syringe barrel, release the pinch and allow the feed to run by gravity",
      "Explain procedure to patient and relatives (Refer to steps)"
    ],
    "answer": "Pour the feed into the syringe barrel, release the pinch and allow the feed to run by gravity",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Aspirating abdominal contents for a typical gastric fluid appearance (grassy-green, colourless with mucus shreds) in the tube OR",
      "Perform hand hygiene and document on appropriate charts (manual or electronic)",
      "Pour the feed into the calibrated cup and check the temperature",
      "Continue feeding and observe patient for signs of discomfort till feeding is completed"
    ],
    "answer": "Continue feeding and observe patient for signs of discomfort till feeding is completed",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Flush the tube with 10-20mls of water at the end of feeding",
      "Continue feeding and observe patient for signs of discomfort till feeding is completed",
      "Make patient comfortable and protects his/her clothes with the jaconet cape/adult bib",
      "Assist patient to remain in the sitting up position for at least 30 minutes after feeding"
    ],
    "answer": "Flush the tube with 10-20mls of water at the end of feeding",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Send prepared feed in a tray to the patient’s bedside",
      "Pinch tube, remove the syringe barrel and replace in spigot",
      "Confirm the type and amount of feed against patient’s records",
      "Hold the syringe in an upright position and pour 10-20mls of water to flush the tube before introducing the feed"
    ],
    "answer": "Pinch tube, remove the syringe barrel and replace in spigot",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Establish rapport with patient and relatives (Refer to steps)",
      "Pinch the naso-gastric tube, remove spigot and connect the empty syringe barrel",
      "Assist patient to remain in the sitting up position for at least 30 minutes after feeding",
      "Inject 5 – 20cc of air through the tube and auscultate epigastric region with a stethoscope and listen for the whooshing sound simultaneously"
    ],
    "answer": "Assist patient to remain in the sitting up position for at least 30 minutes after feeding",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Flush the tube with 10-20mls of water at the end of feeding",
      "Check for proper placement of tube in the stomach by",
      "Assist patient to remain in the sitting up position for at least 30 minutes after feeding",
      "Remove protective clothing, dispose off tray and wash items"
    ],
    "answer": "Remove protective clothing, dispose off tray and wash items",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 21 of FEEDING A PATIENT PER NASO-GASTRIC TUBE?",
    "options": [
      "Perform hand hygiene and document on appropriate charts (manual or electronic)",
      "Perform hand hygiene",
      "Pour the feed into the syringe barrel, release the pinch and allow the feed to run by gravity",
      "Assist patient into a fowler’s position or slightly elevate the head end of the bed"
    ],
    "answer": "Perform hand hygiene and document on appropriate charts (manual or electronic)",
    "explanation": "This checks recall of step 21 in the procedure sequence."
  }
],
  },
  {
    id: "rgn-070",
    title: "INSTILLATION OF NASAL DROPS",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview: "It is the administration of medication in the form of liquid drop by drop into a body space of cavity.",
    purpose: [],
    indications: ["A prescribed nasal medication or solution", "Nasal congestion, inflammation, or dryness requiring local treatment", "A clinician-directed nasal irrigation or therapeutic preparation"],
    equipment: [
  "Tray containing the following:",
  "Cotton wool swabs or gauze swabs",
  "Prescribed nasal drops",
  "Dropper",
  "Receiver",
  "Treatment Chart (Manual or Electronic)"
],
    steps: [
  "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
  "Establish rapport (Refer to steps)",
  "Explain procedure",
  "Ensure patient’s right to know/consent and to refuse medication",
  "Perform hand hygiene",
  "Set tray and send to the bedside",
  "Check medication against the treatment chart (manual or electronic) for the right dosage",
  "Place patient in the supine position with head extended so that his/her chin is higher than his/her vertex",
  "Clean nostrils with cotton wool swabs if necessary",
  "Draw up medication and instil by drops as ordered",
  "Ask patient to remain in position for a few minutes",
  "Ask patient to breathe through his/her mouth and not to bow his/her nose",
  "Dab any medication that may drip from his/her nostrils with a dry swab",
  "Assist patient into a desirable position after five (5) to ten (10) minutes",
  "Remain with patient for five (5) minutes if a child",
  "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
  "Dispose off used items and decontaminate tray",
  "Perform hand hygiene",
  "Report to appropriate officer"
],
    precautions: ["Do not share droppers between patients and avoid contaminating the bottle tip.", "Check for nasal obstruction, epistaxis, allergy, recent surgery, or a contraindication before administration.", "Do not exceed prescribed frequency; topical decongestants can cause rebound congestion with prolonged use.", "Stop and seek help for severe wheeze, facial swelling, significant bleeding, or anaphylaxis."],
    preparation: ["Review the medication chart and assess whether the patient can maintain the required position.", "Explain that mild transient taste or throat drainage may occur, while severe symptoms require reporting."],
    afterCare: ["Keep the patient comfortable and observe for local irritation, bleeding, dizziness, or breathing difficulty.", "Encourage hand hygiene and correct storage of the medication."],
    documentation: ["Record medication name, dose, nostril, time, position, patient response, and education.", "Document refusal, administration error, adverse reaction, or escalation immediately according to policy."],
    videoUrl: "https://www.youtube.com/watch?v=ghUzhaAMv0o",
    quiz: [
  {
    "question": "Which action is listed as step 1 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Perform hand hygiene",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Draw up medication and instil by drops as ordered"
    ],
    "answer": "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Dispose off used items and decontaminate tray",
      "Establish rapport (Refer to steps)",
      "Ask patient to breathe through his/her mouth and not to bow his/her nose",
      "Set tray and send to the bedside"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Dab any medication that may drip from his/her nostrils with a dry swab",
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Explain procedure",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date"
    ],
    "answer": "Explain procedure",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Clean nostrils with cotton wool swabs if necessary",
      "Establish rapport (Refer to steps)",
      "Assist patient into a desirable position after five (5) to ten (10) minutes",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Ensure patient’s right to know/consent and to refuse medication",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Perform hand hygiene",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Draw up medication and instil by drops as ordered",
      "Explain procedure"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Ask patient to remain in position for a few minutes",
      "Set tray and send to the bedside",
      "Perform hand hygiene",
      "Dispose off used items and decontaminate tray"
    ],
    "answer": "Set tray and send to the bedside",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Set tray and send to the bedside",
      "Report to appropriate officer",
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Dab any medication that may drip from his/her nostrils with a dry swab"
    ],
    "answer": "Check medication against the treatment chart (manual or electronic) for the right dosage",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Assist patient into a desirable position after five (5) to ten (10) minutes",
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Place patient in the supine position with head extended so that his/her chin is higher than his/her vertex"
    ],
    "answer": "Place patient in the supine position with head extended so that his/her chin is higher than his/her vertex",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Clean nostrils with cotton wool swabs if necessary",
      "Draw up medication and instil by drops as ordered",
      "Explain procedure",
      "Remain with patient for five (5) minutes if a child"
    ],
    "answer": "Clean nostrils with cotton wool swabs if necessary",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Ensure patient’s right to know/consent and to refuse medication",
      "Draw up medication and instil by drops as ordered",
      "Dispose off used items and decontaminate tray",
      "Ask patient to remain in position for a few minutes"
    ],
    "answer": "Draw up medication and instil by drops as ordered",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Report to appropriate officer",
      "Ask patient to breathe through his/her mouth and not to bow his/her nose",
      "Ask patient to remain in position for a few minutes",
      "Set tray and send to the bedside"
    ],
    "answer": "Ask patient to remain in position for a few minutes",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Assist patient into a desirable position after five (5) to ten (10) minutes",
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Ask patient to breathe through his/her mouth and not to bow his/her nose"
    ],
    "answer": "Ask patient to breathe through his/her mouth and not to bow his/her nose",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Dab any medication that may drip from his/her nostrils with a dry swab",
      "Explain procedure",
      "Remain with patient for five (5) minutes if a child",
      "Place patient in the supine position with head extended so that his/her chin is higher than his/her vertex"
    ],
    "answer": "Dab any medication that may drip from his/her nostrils with a dry swab",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Assist patient into a desirable position after five (5) to ten (10) minutes",
      "Draw up medication and instil by drops as ordered",
      "Ensure patient’s right to know/consent and to refuse medication"
    ],
    "answer": "Assist patient into a desirable position after five (5) to ten (10) minutes",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Ask patient to remain in position for a few minutes",
      "Perform hand hygiene",
      "Remain with patient for five (5) minutes if a child",
      "Report to appropriate officer"
    ],
    "answer": "Remain with patient for five (5) minutes if a child",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Check medication against the treatment chart (manual or electronic) for the right dosage",
      "Check for the right patient, right medication, right time, right dose against doctor’s order and treatment chart (manual or electronic) as well as the expiry date",
      "Ask patient to breathe through his/her mouth and not to bow his/her nose",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)"
    ],
    "answer": "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Dispose off used items and decontaminate tray",
      "Assist patient into a desirable position after five (5) to ten (10) minutes",
      "Place patient in the supine position with head extended so that his/her chin is higher than his/her vertex",
      "Establish rapport (Refer to steps)"
    ],
    "answer": "Dispose off used items and decontaminate tray",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Draw up medication and instil by drops as ordered",
      "Perform hand hygiene",
      "Ensure patient’s right to know/consent and to refuse medication",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of INSTILLATION OF NASAL DROPS?",
    "options": [
      "Perform hand hygiene",
      "Document procedure on nurses’ notes and chart on the treatment chart (manual or electronic)",
      "Report to appropriate officer",
      "Ask patient to remain in position for a few minutes"
    ],
    "answer": "Report to appropriate officer",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  }
],
  },
  {
    id: "rgn-071",
    title: "BLOOD TRANSFUSION",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview: "Blood transfusion is the infusion of whole blood or its fraction i.e. plasma, red blood cells (packed cells) into a patient's vein. Whole blood is usually given when a patient's total blood volume, cells or plasma drops below the normal values.",
    purpose: [],
    indications: ["A documented prescription for a specific blood component", "Symptomatic anaemia or blood loss when transfusion is clinically indicated", "Thrombocytopenia, coagulopathy, or another approved indication"],
    equipment: [
  "General requirement for administration of intravenous fluids",
  "Blood giving set",
  "Unit of blood or blood product",
  "Pre-medication as ordered",
  "Patient folder (Manual or Electronic)"
],
    steps: [
  "Establish rapport (Refer to steps)",
  "Explain procedure to the patient (Refer to steps)",
  "Obtain formal consent from the patient",
  "Perform hand hygiene",
  "Prepare trolley and send to the bedside",
  "Verify the following information with a colleague from the patient’s folder and label on the unit of blood or blood product:",
  "Full name of patient",
  "Ward",
  "Blood group",
  "Rhesus factor",
  "Blood unit number",
  "Expiry date",
  "Monitor vital signs and record",
  "Ensure cannula is in situ",
  "Protect the patient and bed with mackintosh and dressing towel",
  "Perform hand hygiene and wear sterile gloves",
  "Administer premedication if prescribed",
  "Insert the giving set into the pack, fill the chamber and expel air",
  "Tighten the clip on the giving set",
  "Insert the giving set into the cannula",
  "Regulate number of drops per minute accordingly",
  "Remove gloves and perform hand hygiene",
  "Record the amount of blood set up and the number of the unit on the fluid intake and output chart",
  "Continue to observe patient for any adverse reaction and report appropriately",
  "Dispose off used items and decontaminated",
  "Discuss findings with patient and relatives"
],
    precautions: ["Never start blood without a valid prescription, consent, compatible access, baseline observations, and two-person bedside verification.", "Do not add medicines to blood or infuse it with incompatible solutions.", "Do not leave a patient unobserved at the start of transfusion or when symptoms occur.", "Follow local maximum hang-time, monitoring, storage, and reaction protocols."],
    preparation: ["Check recent laboratory results, transfusion history, antibodies, previous reactions, and the patient’s ability to report symptoms.", "Ensure the blood is released and transported according to blood-bank policy and is not left at the bedside unnecessarily."],
    afterCare: ["Continue observation for delayed reactions and provide instructions about reporting fever, rash, dark urine, jaundice, or malaise.", "Assess the IV site and patient response after completion."],
    documentation: ["Record consent, component details, verification staff, observations, start and finish times, volume, IV site, and response.", "Document and report any reaction immediately with all required forms and specimens."],
    videoUrl: "https://www.youtube.com/watch?v=1JzL1GTd99E",
    quiz: [
  {
    "question": "Which action is listed as step 1 of BLOOD TRANSFUSION?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Prepare trolley and send to the bedside",
      "Perform hand hygiene and wear sterile gloves",
      "Explain procedure to the patient (Refer to steps)"
    ],
    "answer": "Establish rapport (Refer to steps)",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of BLOOD TRANSFUSION?",
    "options": [
      "Blood group",
      "Explain procedure to the patient (Refer to steps)",
      "Expiry date",
      "Record the amount of blood set up and the number of the unit on the fluid intake and output chart"
    ],
    "answer": "Explain procedure to the patient (Refer to steps)",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of BLOOD TRANSFUSION?",
    "options": [
      "Prepare trolley and send to the bedside",
      "Perform hand hygiene and wear sterile gloves",
      "Obtain formal consent from the patient",
      "Tighten the clip on the giving set"
    ],
    "answer": "Obtain formal consent from the patient",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of BLOOD TRANSFUSION?",
    "options": [
      "Discuss findings with patient and relatives",
      "Expiry date",
      "Record the amount of blood set up and the number of the unit on the fluid intake and output chart",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of BLOOD TRANSFUSION?",
    "options": [
      "Prepare trolley and send to the bedside",
      "Ward",
      "Tighten the clip on the giving set",
      "Perform hand hygiene"
    ],
    "answer": "Prepare trolley and send to the bedside",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of BLOOD TRANSFUSION?",
    "options": [
      "Expiry date",
      "Verify the following information with a colleague from the patient’s folder and label on the unit of blood or blood product:",
      "Protect the patient and bed with mackintosh and dressing towel",
      "Discuss findings with patient and relatives"
    ],
    "answer": "Verify the following information with a colleague from the patient’s folder and label on the unit of blood or blood product:",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of BLOOD TRANSFUSION?",
    "options": [
      "Ward",
      "Tighten the clip on the giving set",
      "Full name of patient",
      "Remove gloves and perform hand hygiene"
    ],
    "answer": "Full name of patient",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of BLOOD TRANSFUSION?",
    "options": [
      "Obtain formal consent from the patient",
      "Protect the patient and bed with mackintosh and dressing towel",
      "Discuss findings with patient and relatives",
      "Ward"
    ],
    "answer": "Ward",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of BLOOD TRANSFUSION?",
    "options": [
      "Blood group",
      "Blood unit number",
      "Remove gloves and perform hand hygiene",
      "Full name of patient"
    ],
    "answer": "Blood group",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of BLOOD TRANSFUSION?",
    "options": [
      "Protect the patient and bed with mackintosh and dressing towel",
      "Rhesus factor",
      "Insert the giving set into the pack, fill the chamber and expel air",
      "Obtain formal consent from the patient"
    ],
    "answer": "Rhesus factor",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of BLOOD TRANSFUSION?",
    "options": [
      "Rhesus factor",
      "Remove gloves and perform hand hygiene",
      "Blood unit number",
      "Dispose off used items and decontaminated"
    ],
    "answer": "Blood unit number",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of BLOOD TRANSFUSION?",
    "options": [
      "Verify the following information with a colleague from the patient’s folder and label on the unit of blood or blood product:",
      "Insert the giving set into the pack, fill the chamber and expel air",
      "Obtain formal consent from the patient",
      "Expiry date"
    ],
    "answer": "Expiry date",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of BLOOD TRANSFUSION?",
    "options": [
      "Monitor vital signs and record",
      "Ensure cannula is in situ",
      "Dispose off used items and decontaminated",
      "Rhesus factor"
    ],
    "answer": "Monitor vital signs and record",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of BLOOD TRANSFUSION?",
    "options": [
      "Insert the giving set into the pack, fill the chamber and expel air",
      "Ensure cannula is in situ",
      "Regulate number of drops per minute accordingly",
      "Verify the following information with a colleague from the patient’s folder and label on the unit of blood or blood product:"
    ],
    "answer": "Ensure cannula is in situ",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of BLOOD TRANSFUSION?",
    "options": [
      "Monitor vital signs and record",
      "Dispose off used items and decontaminated",
      "Protect the patient and bed with mackintosh and dressing towel",
      "Explain procedure to the patient (Refer to steps)"
    ],
    "answer": "Protect the patient and bed with mackintosh and dressing towel",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of BLOOD TRANSFUSION?",
    "options": [
      "Blood group",
      "Regulate number of drops per minute accordingly",
      "Verify the following information with a colleague from the patient’s folder and label on the unit of blood or blood product:",
      "Perform hand hygiene and wear sterile gloves"
    ],
    "answer": "Perform hand hygiene and wear sterile gloves",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of BLOOD TRANSFUSION?",
    "options": [
      "Administer premedication if prescribed",
      "Perform hand hygiene and wear sterile gloves",
      "Explain procedure to the patient (Refer to steps)",
      "Monitor vital signs and record"
    ],
    "answer": "Administer premedication if prescribed",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of BLOOD TRANSFUSION?",
    "options": [
      "Regulate number of drops per minute accordingly",
      "Insert the giving set into the pack, fill the chamber and expel air",
      "Continue to observe patient for any adverse reaction and report appropriately",
      "Blood group"
    ],
    "answer": "Insert the giving set into the pack, fill the chamber and expel air",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of BLOOD TRANSFUSION?",
    "options": [
      "Perform hand hygiene and wear sterile gloves",
      "Explain procedure to the patient (Refer to steps)",
      "Tighten the clip on the giving set",
      "Prepare trolley and send to the bedside"
    ],
    "answer": "Tighten the clip on the giving set",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of BLOOD TRANSFUSION?",
    "options": [
      "Expiry date",
      "Continue to observe patient for any adverse reaction and report appropriately",
      "Blood group",
      "Insert the giving set into the cannula"
    ],
    "answer": "Insert the giving set into the cannula",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 21 of BLOOD TRANSFUSION?",
    "options": [
      "Regulate number of drops per minute accordingly",
      "Tighten the clip on the giving set",
      "Prepare trolley and send to the bedside",
      "Perform hand hygiene and wear sterile gloves"
    ],
    "answer": "Regulate number of drops per minute accordingly",
    "explanation": "This checks recall of step 21 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 22 of BLOOD TRANSFUSION?",
    "options": [
      "Continue to observe patient for any adverse reaction and report appropriately",
      "Remove gloves and perform hand hygiene",
      "Establish rapport (Refer to steps)",
      "Expiry date"
    ],
    "answer": "Remove gloves and perform hand hygiene",
    "explanation": "This checks recall of step 22 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 23 of BLOOD TRANSFUSION?",
    "options": [
      "Tighten the clip on the giving set",
      "Prepare trolley and send to the bedside",
      "Record the amount of blood set up and the number of the unit on the fluid intake and output chart",
      "Ward"
    ],
    "answer": "Record the amount of blood set up and the number of the unit on the fluid intake and output chart",
    "explanation": "This checks recall of step 23 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 24 of BLOOD TRANSFUSION?",
    "options": [
      "Protect the patient and bed with mackintosh and dressing towel",
      "Establish rapport (Refer to steps)",
      "Expiry date",
      "Continue to observe patient for any adverse reaction and report appropriately"
    ],
    "answer": "Continue to observe patient for any adverse reaction and report appropriately",
    "explanation": "This checks recall of step 24 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 25 of BLOOD TRANSFUSION?",
    "options": [
      "Dispose off used items and decontaminated",
      "Remove gloves and perform hand hygiene",
      "Ward",
      "Tighten the clip on the giving set"
    ],
    "answer": "Dispose off used items and decontaminated",
    "explanation": "This checks recall of step 25 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 26 of BLOOD TRANSFUSION?",
    "options": [
      "Establish rapport (Refer to steps)",
      "Discuss findings with patient and relatives",
      "Perform hand hygiene",
      "Protect the patient and bed with mackintosh and dressing towel"
    ],
    "answer": "Discuss findings with patient and relatives",
    "explanation": "This checks recall of step 26 in the procedure sequence."
  }
],
  },
  {
    id: "rgn-072",
    title: "CARE OF DRAINAGE TUBE",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview: "This is the aseptic management of drainage tube inserted in a wound to help draw out exudates from the wound bed. There are two main types of drainage tubes used; namely: the close system and open system. The removal of the tube is based on rate of healing, hospital's protocol and the surgeon's discretions.",
    purpose: [],
    indications: ["A patient with a surgical, wound, chest, abdominal, or other prescribed drain", "Routine drain-site and collection-system assessment", "A need to measure and report drainage"],
    equipment: [
  "A trolley containing the following:",
  "Top shelf (a Sterile field with the following sterile items)",
  "Two (2) or three (3) gallipots for lotions",
  "Two (2) kidney dish",
  "Two (2) pairs of dressing forceps",
  "Two (2) pairs of dissecting forceps",
  "Sinus forceps",
  "Probe",
  "Sterile pair of scissors",
  "Bottom shelf with the following:",
  "Dressing lotion",
  "Sterile cotton and gauze swab in a drum/pack",
  "Mackintosh and dressing towel",
  "Adhesive tape/strip",
  "Bandage",
  "A pair of scissors",
  "Apron",
  "Disposable gloves",
  "Sterile gloves",
  "Receiver for used dressings"
],
    steps: [
  "Establish rapport",
  "Explain procedure to patient and reassure him/her",
  "Provide privacy",
  "Perform hand hygiene",
  "Prepare and send tray to patient’s bedside",
  "Protect bed linen with dressing mackintosh and towel",
  "Position patient to expose wound site and fold over bed clothing",
  "Wear disposable gloves and open wound",
  "Remove soiled dressing from the wound and assess the wound for signs of healing and leakage of exudate",
  "Remove gloves and perform hand hygiene",
  "Wear sterile gloves",
  "Grasp the protruding end of the drainage tube with an artery forceps and clip/clamp the tube in position",
  "Remove any stitch holding the drainage tube in position with the scissors",
  "Gently turn/twist the drainage tube with the wound to loose it if it is a tubular drain",
  "Use the forceps gently to pull the drain out of the wound for a distance",
  "Cut the excess tubing off with sterile scissor if it is a corrugated/penrose drain",
  "Swab with cleansing lotion until clean",
  "Apply sterile dressing and apply adhesive strips/plaster",
  "Note amount of drainage and document",
  "Dispose off used items, decontaminate trolley and instruments",
  "Document findings in patient’s chart"
],
    precautions: ["Do not clamp a drain unless specifically ordered; clamping may cause dangerous accumulation of fluid or air.", "Do not strip, milk, flush, or reposition a drain unless the prescription and device policy authorize it.", "Report sudden absence or large increase of drainage, bright-red blood, purulence, foul odour, leakage, displacement, or worsening pain.", "Use drain-specific emergency precautions, especially for chest drains, and never lift a collection system above the insertion site when contraindicated."],
    preparation: ["Review the operation or procedure note and expected output, and compare with prior drainage.", "Ensure the patient can call for help and understands how to protect the tubing during movement."],
    afterCare: ["Secure tubing without tension, maintain a comfortable position, and check that the dressing remains clean and dry.", "Teach the patient to avoid pulling the drain and to report sudden pain, breathlessness, leakage, or displacement."],
    documentation: ["Record site appearance, drain type and position, patency, suction, dressing, output amount and character, pain, and patient tolerance.", "Document abnormalities, actions taken, clinician notification, and any specimen sent."],
    videoUrl: "https://www.youtube.com/watch?v=EGzqXLO9UI8",
    quiz: [
  {
    "question": "Which action is listed as step 1 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Establish rapport",
      "Prepare and send tray to patient’s bedside",
      "Cut the excess tubing off with sterile scissor if it is a corrugated/penrose drain",
      "Position patient to expose wound site and fold over bed clothing"
    ],
    "answer": "Establish rapport",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Gently turn/twist the drainage tube with the wound to loose it if it is a tubular drain",
      "Explain procedure to patient and reassure him/her",
      "Grasp the protruding end of the drainage tube with an artery forceps and clip/clamp the tube in position",
      "Provide privacy"
    ],
    "answer": "Explain procedure to patient and reassure him/her",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Remove gloves and perform hand hygiene",
      "Document findings in patient’s chart",
      "Provide privacy",
      "Note amount of drainage and document"
    ],
    "answer": "Provide privacy",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Protect bed linen with dressing mackintosh and towel",
      "Swab with cleansing lotion until clean",
      "Wear disposable gloves and open wound",
      "Perform hand hygiene"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Prepare and send tray to patient’s bedside",
      "Remove any stitch holding the drainage tube in position with the scissors",
      "Provide privacy",
      "Use the forceps gently to pull the drain out of the wound for a distance"
    ],
    "answer": "Prepare and send tray to patient’s bedside",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Establish rapport",
      "Protect bed linen with dressing mackintosh and towel",
      "Dispose off used items, decontaminate trolley and instruments",
      "Wear sterile gloves"
    ],
    "answer": "Protect bed linen with dressing mackintosh and towel",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Apply sterile dressing and apply adhesive strips/plaster",
      "Remove soiled dressing from the wound and assess the wound for signs of healing and leakage of exudate",
      "Position patient to expose wound site and fold over bed clothing",
      "Protect bed linen with dressing mackintosh and towel"
    ],
    "answer": "Position patient to expose wound site and fold over bed clothing",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Gently turn/twist the drainage tube with the wound to loose it if it is a tubular drain",
      "Perform hand hygiene",
      "Cut the excess tubing off with sterile scissor if it is a corrugated/penrose drain",
      "Wear disposable gloves and open wound"
    ],
    "answer": "Wear disposable gloves and open wound",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Remove soiled dressing from the wound and assess the wound for signs of healing and leakage of exudate",
      "Document findings in patient’s chart",
      "Grasp the protruding end of the drainage tube with an artery forceps and clip/clamp the tube in position",
      "Explain procedure to patient and reassure him/her"
    ],
    "answer": "Remove soiled dressing from the wound and assess the wound for signs of healing and leakage of exudate",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Remove soiled dressing from the wound and assess the wound for signs of healing and leakage of exudate",
      "Remove gloves and perform hand hygiene",
      "Position patient to expose wound site and fold over bed clothing",
      "Note amount of drainage and document"
    ],
    "answer": "Remove gloves and perform hand hygiene",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Prepare and send tray to patient’s bedside",
      "Swab with cleansing lotion until clean",
      "Wear sterile gloves",
      "Use the forceps gently to pull the drain out of the wound for a distance"
    ],
    "answer": "Wear sterile gloves",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Establish rapport",
      "Remove any stitch holding the drainage tube in position with the scissors",
      "Provide privacy",
      "Grasp the protruding end of the drainage tube with an artery forceps and clip/clamp the tube in position"
    ],
    "answer": "Grasp the protruding end of the drainage tube with an artery forceps and clip/clamp the tube in position",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Remove any stitch holding the drainage tube in position with the scissors",
      "Wear disposable gloves and open wound",
      "Dispose off used items, decontaminate trolley and instruments",
      "Remove gloves and perform hand hygiene"
    ],
    "answer": "Remove any stitch holding the drainage tube in position with the scissors",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Apply sterile dressing and apply adhesive strips/plaster",
      "Gently turn/twist the drainage tube with the wound to loose it if it is a tubular drain",
      "Cut the excess tubing off with sterile scissor if it is a corrugated/penrose drain",
      "Protect bed linen with dressing mackintosh and towel"
    ],
    "answer": "Gently turn/twist the drainage tube with the wound to loose it if it is a tubular drain",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Remove any stitch holding the drainage tube in position with the scissors",
      "Perform hand hygiene",
      "Use the forceps gently to pull the drain out of the wound for a distance",
      "Explain procedure to patient and reassure him/her"
    ],
    "answer": "Use the forceps gently to pull the drain out of the wound for a distance",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Remove soiled dressing from the wound and assess the wound for signs of healing and leakage of exudate",
      "Document findings in patient’s chart",
      "Wear sterile gloves",
      "Cut the excess tubing off with sterile scissor if it is a corrugated/penrose drain"
    ],
    "answer": "Cut the excess tubing off with sterile scissor if it is a corrugated/penrose drain",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Swab with cleansing lotion until clean",
      "Cut the excess tubing off with sterile scissor if it is a corrugated/penrose drain",
      "Position patient to expose wound site and fold over bed clothing",
      "Note amount of drainage and document"
    ],
    "answer": "Swab with cleansing lotion until clean",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Prepare and send tray to patient’s bedside",
      "Apply sterile dressing and apply adhesive strips/plaster",
      "Provide privacy",
      "Gently turn/twist the drainage tube with the wound to loose it if it is a tubular drain"
    ],
    "answer": "Apply sterile dressing and apply adhesive strips/plaster",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Establish rapport",
      "Grasp the protruding end of the drainage tube with an artery forceps and clip/clamp the tube in position",
      "Note amount of drainage and document",
      "Remove gloves and perform hand hygiene"
    ],
    "answer": "Note amount of drainage and document",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Swab with cleansing lotion until clean",
      "Wear disposable gloves and open wound",
      "Note amount of drainage and document",
      "Dispose off used items, decontaminate trolley and instruments"
    ],
    "answer": "Dispose off used items, decontaminate trolley and instruments",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 21 of CARE OF DRAINAGE TUBE?",
    "options": [
      "Document findings in patient’s chart",
      "Perform hand hygiene",
      "Use the forceps gently to pull the drain out of the wound for a distance",
      "Protect bed linen with dressing mackintosh and towel"
    ],
    "answer": "Document findings in patient’s chart",
    "explanation": "This checks recall of step 21 in the procedure sequence."
  }
],
  },
  {
    id: "rgn-073",
    title: "REMOVAL OF DRAINAGE TUBE",
    category: "General Nursing (RGN)",
    types: [
  "N/A"
],
    overview: "This is a process by which a nurse removes a drainage tube from a wound once the exudates has stopped or becomes less than about 25 ml/day. Drains can be 'shortened' by withdrawing them gradually every day until it is removed completely. Removal of a drain is usually ordered by a doctor or done according to hospital protocol.",
    purpose: [],
    indications: ["A documented order or approved protocol", "Reduced or ceased output and satisfactory clinical review", "A planned staged withdrawal or complete drain removal"],
    equipment: [
  "A trolley containing the following:",
  "Top shelf (a Sterile field with the following sterile items)",
  "Two (2) or three (3) gallipots for lotions",
  "Two (2) kidney dish",
  "Two (2) pairs of dressing forceps",
  "Two (2) pairs of dissecting forceps",
  "Sinus forceps",
  "Probe",
  "Stitch cutter or scissors",
  "Bottom shelf with the following:",
  "Dressing lotion",
  "Sterile cotton and gauze swab in a drum/pack",
  "Mackintosh and dressing towel",
  "Adhesive tape/strip",
  "Bandage",
  "Scissors",
  "Apron",
  "Disposable gloves",
  "Sterile gloves",
  "Receiver for used dressings",
  "Receiver",
  "Measuring cup"
],
    steps: [
  "Confirm order from doctor(s)’ notes",
  "Establish rapport with patient",
  "Explain procedure to the patient",
  "Provide privacy",
  "Perform hand hygiene",
  "Prepare and send trolley to the bedside",
  "Position patient",
  "Protect bed with mackintosh and dressing towel",
  "Wear disposable gloves and note the amount of drain in the bag",
  "Remove dressing",
  "Dispose off gloves and perform hand hygiene",
  "Wear sterile gloves",
  "Clean and dry the incision and drainage site with sterile dressing gauze",
  "Carefully cut and remove the securing suture",
  "While holding sterile gauze in non-dominant hand, stabilize skin",
  "Ask patient to take a deep breath and remove the drainage",
  "Firmly group the drainage tube close to the skin with dominant hand and steady motion withdraw the drain",
  "Stop procedure and inform doctor if resistance occurs",
  "Dress the wound with sterile dressing",
  "Apply pressure with gauze and adhesive tape",
  "Remove mackintosh and dressing towel",
  "Remove gloves and perform hand hygiene",
  "Dispose off used item, decontaminate trolley",
  "Document appropriately in nurses notes, input and output chart (manually or electronically)",
  "Report any findings to the appropriate officer"
],
    precautions: ["Do not remove a drain without authorization or when output and clinical review do not support removal.", "Never force a drain against resistance; stop and obtain urgent clinical review.", "Use drain-specific instructions for breathing and occlusive dressings, particularly for thoracic drains.", "Monitor for bleeding, fluid leakage, infection, respiratory compromise, and recurrent collection after removal."],
    preparation: ["Provide analgesia as prescribed and ensure the patient can call for help after the procedure.", "Review imaging, operative instructions, and the expected post-removal dressing and observation plan."],
    afterCare: ["Keep the dressing clean and dry, monitor the site and vital signs, and support mobility safely.", "Teach the patient to report fever, increasing pain, swelling, leakage, bleeding, or breathlessness."],
    documentation: ["Record order, output, site condition, technique, drain integrity, dressing, observations, and patient tolerance.", "Document specimens, clinician notification, complications, and follow-up instructions."],
   videoUrl: "https://www.youtube.com/watch?v=KMi_PB2Ywkg",
    
     quiz: [
  {
    "question": "Which action is listed as step 1 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Confirm order from doctor(s)’ notes",
      "Perform hand hygiene",
      "Ask patient to take a deep breath and remove the drainage",
      "Explain procedure to the patient"
    ],
    "answer": "Confirm order from doctor(s)’ notes",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Remove dressing",
      "Establish rapport with patient",
      "Wear sterile gloves",
      "Dispose off used item, decontaminate trolley"
    ],
    "answer": "Establish rapport with patient",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Prepare and send trolley to the bedside",
      "Firmly group the drainage tube close to the skin with dominant hand and steady motion withdraw the drain",
      "Explain procedure to the patient",
      "Dress the wound with sterile dressing"
    ],
    "answer": "Explain procedure to the patient",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Confirm order from doctor(s)’ notes",
      "Clean and dry the incision and drainage site with sterile dressing gauze",
      "Document appropriately in nurses notes, input and output chart (manually or electronically)",
      "Provide privacy"
    ],
    "answer": "Provide privacy",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Perform hand hygiene",
      "Wear disposable gloves and note the amount of drain in the bag",
      "Apply pressure with gauze and adhesive tape",
      "Position patient"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Carefully cut and remove the securing suture",
      "Prepare and send trolley to the bedside",
      "Ask patient to take a deep breath and remove the drainage",
      "Establish rapport with patient"
    ],
    "answer": "Prepare and send trolley to the bedside",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Remove dressing",
      "Remove mackintosh and dressing towel",
      "Position patient",
      "Dispose off used item, decontaminate trolley"
    ],
    "answer": "Position patient",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Perform hand hygiene",
      "Firmly group the drainage tube close to the skin with dominant hand and steady motion withdraw the drain",
      "Explain procedure to the patient",
      "Protect bed with mackintosh and dressing towel"
    ],
    "answer": "Protect bed with mackintosh and dressing towel",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Wear disposable gloves and note the amount of drain in the bag",
      "Clean and dry the incision and drainage site with sterile dressing gauze",
      "Document appropriately in nurses notes, input and output chart (manually or electronically)",
      "Dispose off gloves and perform hand hygiene"
    ],
    "answer": "Wear disposable gloves and note the amount of drain in the bag",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Stop procedure and inform doctor if resistance occurs",
      "Remove dressing",
      "Apply pressure with gauze and adhesive tape",
      "Prepare and send trolley to the bedside"
    ],
    "answer": "Remove dressing",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Carefully cut and remove the securing suture",
      "Report any findings to the appropriate officer",
      "Dispose off gloves and perform hand hygiene",
      "Establish rapport with patient"
    ],
    "answer": "Dispose off gloves and perform hand hygiene",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Wear disposable gloves and note the amount of drain in the bag",
      "Remove mackintosh and dressing towel",
      "Position patient",
      "Wear sterile gloves"
    ],
    "answer": "Wear sterile gloves",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Clean and dry the incision and drainage site with sterile dressing gauze",
      "Firmly group the drainage tube close to the skin with dominant hand and steady motion withdraw the drain",
      "Explain procedure to the patient",
      "While holding sterile gauze in non-dominant hand, stabilize skin"
    ],
    "answer": "Clean and dry the incision and drainage site with sterile dressing gauze",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Remove gloves and perform hand hygiene",
      "Carefully cut and remove the securing suture",
      "Document appropriately in nurses notes, input and output chart (manually or electronically)",
      "Remove dressing"
    ],
    "answer": "Carefully cut and remove the securing suture",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Stop procedure and inform doctor if resistance occurs",
      "Provide privacy",
      "While holding sterile gauze in non-dominant hand, stabilize skin",
      "Prepare and send trolley to the bedside"
    ],
    "answer": "While holding sterile gauze in non-dominant hand, stabilize skin",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Clean and dry the incision and drainage site with sterile dressing gauze",
      "Report any findings to the appropriate officer",
      "Dispose off gloves and perform hand hygiene",
      "Ask patient to take a deep breath and remove the drainage"
    ],
    "answer": "Ask patient to take a deep breath and remove the drainage",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Firmly group the drainage tube close to the skin with dominant hand and steady motion withdraw the drain",
      "Remove mackintosh and dressing towel",
      "Position patient",
      "Dress the wound with sterile dressing"
    ],
    "answer": "Firmly group the drainage tube close to the skin with dominant hand and steady motion withdraw the drain",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Confirm order from doctor(s)’ notes",
      "Stop procedure and inform doctor if resistance occurs",
      "Explain procedure to the patient",
      "Carefully cut and remove the securing suture"
    ],
    "answer": "Stop procedure and inform doctor if resistance occurs",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Remove gloves and perform hand hygiene",
      "Protect bed with mackintosh and dressing towel",
      "Dress the wound with sterile dressing",
      "Remove dressing"
    ],
    "answer": "Dress the wound with sterile dressing",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Firmly group the drainage tube close to the skin with dominant hand and steady motion withdraw the drain",
      "Provide privacy",
      "While holding sterile gauze in non-dominant hand, stabilize skin",
      "Apply pressure with gauze and adhesive tape"
    ],
    "answer": "Apply pressure with gauze and adhesive tape",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 21 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Remove mackintosh and dressing towel",
      "Report any findings to the appropriate officer",
      "Dispose off gloves and perform hand hygiene",
      "Dispose off used item, decontaminate trolley"
    ],
    "answer": "Remove mackintosh and dressing towel",
    "explanation": "This checks recall of step 21 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 22 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Perform hand hygiene",
      "Remove gloves and perform hand hygiene",
      "Position patient",
      "Stop procedure and inform doctor if resistance occurs"
    ],
    "answer": "Remove gloves and perform hand hygiene",
    "explanation": "This checks recall of step 22 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 23 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Confirm order from doctor(s)’ notes",
      "Wear sterile gloves",
      "Dispose off used item, decontaminate trolley",
      "Carefully cut and remove the securing suture"
    ],
    "answer": "Dispose off used item, decontaminate trolley",
    "explanation": "This checks recall of step 23 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 24 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Remove mackintosh and dressing towel",
      "Protect bed with mackintosh and dressing towel",
      "Dress the wound with sterile dressing",
      "Document appropriately in nurses notes, input and output chart (manually or electronically)"
    ],
    "answer": "Document appropriately in nurses notes, input and output chart (manually or electronically)",
    "explanation": "This checks recall of step 24 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 25 of REMOVAL OF DRAINAGE TUBE?",
    "options": [
      "Report any findings to the appropriate officer",
      "Provide privacy",
      "While holding sterile gauze in non-dominant hand, stabilize skin",
      "Establish rapport with patient"
    ],
    "answer": "Report any findings to the appropriate officer",
    "explanation": "This checks recall of step 25 in the procedure sequence."
  }
],
  },
  {
    id: "rgn-074",
    title: "PARENTERAL NUTRITION (PN)",
    category: "General Nursing (RGN)",
    types: [
  "Peripheral Parenteral Nutrition",
  "Total Parenteral Nutrition"
],
    overview: "This is the administration of nutritional support such as proteins, carbohydrates, fats, vitamins, and minerals intravenously.",
    purpose: [],
    indications: ["A documented prescription for peripheral or total parenteral nutrition", "Intestinal failure, severe malabsorption, bowel rest, or inability to meet needs enterally", "A patient assessed by the nutrition and medical team as requiring PN"],
    equipment: [
  "Central venous access devices",
  "Volume control device",
  "Filters (0.22 micron for TPN without fat emulsion and 3.2 micron filter for TNA or fat emulsion",
  "Bag of Parenteral Nutrition",
  "Administration tubing with luer-lock connections",
  "Hypoallergic Tape",
  "Sterile Gloves",
  "Face Mask",
  "Gown and cap",
  "Vital Signs Tray"
],
    steps: [
  "Perform nutritional assessment",
  "Cross check physician’s order",
  "Provide Privacy",
  "Establish rapport with patient",
  "Explain procedure to the patient and obtain consent",
  "Perform hand hygiene",
  "Collect needed items for the procedure",
  "Review prescribers’ orders and compare to content label on PN solution bag(s) and for rate of infusion. Each component of the PN solution must be verified with the physician’s orders",
  "Remove the bag of parenteral nutrition at least 1 hr. from the refrigerator if refrigerated",
  "Inspect fluid for consistency(creamy, or any change in constitution)",
  "Collect supplies, prepare PN solution, and prime IV tubing with filter as per hospital’s protocol",
  "Perform hand hygiene, done gown, cap, mask and gloves",
  "Compare the label on the PN bag to the patient’s wristband",
  "Use aseptic technique to attach tubing with filter to TNA bag and purge out air",
  "Close all clamps on new tubing and insert tubing in volume control infuses",
  "Place patient in supine position and turn head away from venous access device insertion site",
  "Clean insertion site with povidone iodine solution",
  "Assist physician while inserting intravenous line",
  "Connect tubing to hub of VAD after insertion using sterile technique and ensure all connections are locked with luer-connection",
  "Complete all safety checks for central venous catheter as per hospital’s policy",
  "Complete the flushing protocol as per hospital’s policy",
  "Sanitize connections and change IV tubing as per agency policy when changing tubing",
  "Insert new PN solution and IV tubing into electronic infusion device",
  "Open all clamps and regulate flow using volume control infuser",
  "Start PN infusion rate as ordered",
  "Discard old supplies as per agency protocol, and perform hand hygiene",
  "Monitor administration hourly; assessing for integrity of fluid, administration system, patient tolerance and other symptoms of complications related to PN",
  "Document the procedure in the patient chart as per hospital policy"
],
    precautions: ["PN is a high-alert therapy; use independent verification and never alter the bag or rate without authorization.", "Maintain strict asepsis and a dedicated lumen; do not use the PN line for incompatible medicines or blood sampling unless policy permits.", "Do not stop a continuous PN infusion abruptly without an approved alternative and monitoring plan.", "Report fever, rigors, hyperglycaemia, hypoglycaemia, new dyspnoea, oedema, electrolyte symptoms, or catheter malfunction urgently."],
    preparation: ["Review laboratory results and the nutrition plan, and ensure replacement PN and dextrose support are available if required by policy.", "Confirm the patient and family understand the purpose, monitoring, mobility precautions, and symptoms to report."],
    afterCare: ["Secure the line and pump, maintain the prescribed rate, and inspect the site and patient during and after bag changes.", "Provide oral or enteral intake only if prescribed and continue mouth care even when oral feeding is restricted."],
    documentation: ["Record prescription verification, bag details, route and lumen, rate, filter, start and finish times, glucose, observations, intake-output, and tolerance.", "Document line-site assessment, bag or tubing changes, interruptions, complications, and notification of the clinical team."],
    videoUrl: "https://www.youtube.com/watch?v=NoKybw2Crak",
    quiz: [
  {
    "question": "Which action is listed as step 1 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Perform nutritional assessment",
      "Explain procedure to the patient and obtain consent",
      "Place patient in supine position and turn head away from venous access device insertion site",
      "Monitor administration hourly; assessing for integrity of fluid, administration system, patient tolerance and other symptoms of complications related to PN"
    ],
    "answer": "Perform nutritional assessment",
    "explanation": "This checks recall of step 1 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 2 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Collect needed items for the procedure",
      "Cross check physician’s order",
      "Perform hand hygiene, done gown, cap, mask and gloves",
      "Insert new PN solution and IV tubing into electronic infusion device"
    ],
    "answer": "Cross check physician’s order",
    "explanation": "This checks recall of step 2 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 3 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Cross check physician’s order",
      "Use aseptic technique to attach tubing with filter to TNA bag and purge out air",
      "Provide Privacy",
      "Connect tubing to hub of VAD after insertion using sterile technique and ensure all connections are locked with luer-connection"
    ],
    "answer": "Provide Privacy",
    "explanation": "This checks recall of step 3 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 4 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Discard old supplies as per agency protocol, and perform hand hygiene",
      "Inspect fluid for consistency(creamy, or any change in constitution)",
      "Complete the flushing protocol as per hospital’s policy",
      "Establish rapport with patient"
    ],
    "answer": "Establish rapport with patient",
    "explanation": "This checks recall of step 4 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 5 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Explain procedure to the patient and obtain consent",
      "Perform hand hygiene",
      "Clean insertion site with povidone iodine solution",
      "Document the procedure in the patient chart as per hospital policy"
    ],
    "answer": "Explain procedure to the patient and obtain consent",
    "explanation": "This checks recall of step 5 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 6 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Review prescribers’ orders and compare to content label on PN solution bag(s) and for rate of infusion. Each component of the PN solution must be verified with the physician’s orders",
      "Perform hand hygiene",
      "Compare the label on the PN bag to the patient’s wristband",
      "Open all clamps and regulate flow using volume control infuser"
    ],
    "answer": "Perform hand hygiene",
    "explanation": "This checks recall of step 6 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 7 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Provide Privacy",
      "Close all clamps on new tubing and insert tubing in volume control infuses",
      "Collect needed items for the procedure",
      "Complete all safety checks for central venous catheter as per hospital’s policy"
    ],
    "answer": "Collect needed items for the procedure",
    "explanation": "This checks recall of step 7 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 8 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Monitor administration hourly; assessing for integrity of fluid, administration system, patient tolerance and other symptoms of complications related to PN",
      "Collect supplies, prepare PN solution, and prime IV tubing with filter as per hospital’s protocol",
      "Sanitize connections and change IV tubing as per agency policy when changing tubing",
      "Review prescribers’ orders and compare to content label on PN solution bag(s) and for rate of infusion. Each component of the PN solution must be verified with the physician’s orders"
    ],
    "answer": "Review prescribers’ orders and compare to content label on PN solution bag(s) and for rate of infusion. Each component of the PN solution must be verified with the physician’s orders",
    "explanation": "This checks recall of step 8 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 9 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Remove the bag of parenteral nutrition at least 1 hr. from the refrigerator if refrigerated",
      "Perform hand hygiene",
      "Assist physician while inserting intravenous line",
      "Perform nutritional assessment"
    ],
    "answer": "Remove the bag of parenteral nutrition at least 1 hr. from the refrigerator if refrigerated",
    "explanation": "This checks recall of step 9 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 10 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Review prescribers’ orders and compare to content label on PN solution bag(s) and for rate of infusion. Each component of the PN solution must be verified with the physician’s orders",
      "Inspect fluid for consistency(creamy, or any change in constitution)",
      "Use aseptic technique to attach tubing with filter to TNA bag and purge out air",
      "Start PN infusion rate as ordered"
    ],
    "answer": "Inspect fluid for consistency(creamy, or any change in constitution)",
    "explanation": "This checks recall of step 10 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 11 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Establish rapport with patient",
      "Place patient in supine position and turn head away from venous access device insertion site",
      "Collect supplies, prepare PN solution, and prime IV tubing with filter as per hospital’s protocol",
      "Complete the flushing protocol as per hospital’s policy"
    ],
    "answer": "Collect supplies, prepare PN solution, and prime IV tubing with filter as per hospital’s protocol",
    "explanation": "This checks recall of step 11 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 12 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Document the procedure in the patient chart as per hospital policy",
      "Collect supplies, prepare PN solution, and prime IV tubing with filter as per hospital’s protocol",
      "Insert new PN solution and IV tubing into electronic infusion device",
      "Perform hand hygiene, done gown, cap, mask and gloves"
    ],
    "answer": "Perform hand hygiene, done gown, cap, mask and gloves",
    "explanation": "This checks recall of step 12 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 13 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Compare the label on the PN bag to the patient’s wristband",
      "Collect needed items for the procedure",
      "Connect tubing to hub of VAD after insertion using sterile technique and ensure all connections are locked with luer-connection",
      "Cross check physician’s order"
    ],
    "answer": "Compare the label on the PN bag to the patient’s wristband",
    "explanation": "This checks recall of step 13 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 14 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Remove the bag of parenteral nutrition at least 1 hr. from the refrigerator if refrigerated",
      "Use aseptic technique to attach tubing with filter to TNA bag and purge out air",
      "Close all clamps on new tubing and insert tubing in volume control infuses",
      "Discard old supplies as per agency protocol, and perform hand hygiene"
    ],
    "answer": "Use aseptic technique to attach tubing with filter to TNA bag and purge out air",
    "explanation": "This checks recall of step 14 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 15 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Explain procedure to the patient and obtain consent",
      "Clean insertion site with povidone iodine solution",
      "Close all clamps on new tubing and insert tubing in volume control infuses",
      "Sanitize connections and change IV tubing as per agency policy when changing tubing"
    ],
    "answer": "Close all clamps on new tubing and insert tubing in volume control infuses",
    "explanation": "This checks recall of step 15 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 16 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Perform nutritional assessment",
      "Perform hand hygiene, done gown, cap, mask and gloves",
      "Open all clamps and regulate flow using volume control infuser",
      "Place patient in supine position and turn head away from venous access device insertion site"
    ],
    "answer": "Place patient in supine position and turn head away from venous access device insertion site",
    "explanation": "This checks recall of step 16 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 17 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Clean insertion site with povidone iodine solution",
      "Review prescribers’ orders and compare to content label on PN solution bag(s) and for rate of infusion. Each component of the PN solution must be verified with the physician’s orders",
      "Complete all safety checks for central venous catheter as per hospital’s policy",
      "Provide Privacy"
    ],
    "answer": "Clean insertion site with povidone iodine solution",
    "explanation": "This checks recall of step 17 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 18 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Inspect fluid for consistency(creamy, or any change in constitution)",
      "Assist physician while inserting intravenous line",
      "Close all clamps on new tubing and insert tubing in volume control infuses",
      "Monitor administration hourly; assessing for integrity of fluid, administration system, patient tolerance and other symptoms of complications related to PN"
    ],
    "answer": "Assist physician while inserting intravenous line",
    "explanation": "This checks recall of step 18 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 19 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Perform hand hygiene",
      "Clean insertion site with povidone iodine solution",
      "Connect tubing to hub of VAD after insertion using sterile technique and ensure all connections are locked with luer-connection",
      "Insert new PN solution and IV tubing into electronic infusion device"
    ],
    "answer": "Connect tubing to hub of VAD after insertion using sterile technique and ensure all connections are locked with luer-connection",
    "explanation": "This checks recall of step 19 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 20 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Cross check physician’s order",
      "Compare the label on the PN bag to the patient’s wristband",
      "Start PN infusion rate as ordered",
      "Complete all safety checks for central venous catheter as per hospital’s policy"
    ],
    "answer": "Complete all safety checks for central venous catheter as per hospital’s policy",
    "explanation": "This checks recall of step 20 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 21 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Complete the flushing protocol as per hospital’s policy",
      "Remove the bag of parenteral nutrition at least 1 hr. from the refrigerator if refrigerated",
      "Complete all safety checks for central venous catheter as per hospital’s policy",
      "Establish rapport with patient"
    ],
    "answer": "Complete the flushing protocol as per hospital’s policy",
    "explanation": "This checks recall of step 21 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 22 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Collect supplies, prepare PN solution, and prime IV tubing with filter as per hospital’s protocol",
      "Sanitize connections and change IV tubing as per agency policy when changing tubing",
      "Place patient in supine position and turn head away from venous access device insertion site",
      "Document the procedure in the patient chart as per hospital policy"
    ],
    "answer": "Sanitize connections and change IV tubing as per agency policy when changing tubing",
    "explanation": "This checks recall of step 22 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 23 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Collect needed items for the procedure",
      "Assist physician while inserting intravenous line",
      "Insert new PN solution and IV tubing into electronic infusion device",
      "Open all clamps and regulate flow using volume control infuser"
    ],
    "answer": "Insert new PN solution and IV tubing into electronic infusion device",
    "explanation": "This checks recall of step 23 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 24 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Provide Privacy",
      "Use aseptic technique to attach tubing with filter to TNA bag and purge out air",
      "Discard old supplies as per agency protocol, and perform hand hygiene",
      "Open all clamps and regulate flow using volume control infuser"
    ],
    "answer": "Open all clamps and regulate flow using volume control infuser",
    "explanation": "This checks recall of step 24 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 25 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Start PN infusion rate as ordered",
      "Inspect fluid for consistency(creamy, or any change in constitution)",
      "Complete the flushing protocol as per hospital’s policy",
      "Explain procedure to the patient and obtain consent"
    ],
    "answer": "Start PN infusion rate as ordered",
    "explanation": "This checks recall of step 25 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 26 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Perform hand hygiene, done gown, cap, mask and gloves",
      "Discard old supplies as per agency protocol, and perform hand hygiene",
      "Clean insertion site with povidone iodine solution",
      "Perform nutritional assessment"
    ],
    "answer": "Discard old supplies as per agency protocol, and perform hand hygiene",
    "explanation": "This checks recall of step 26 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 27 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Review prescribers’ orders and compare to content label on PN solution bag(s) and for rate of infusion. Each component of the PN solution must be verified with the physician’s orders",
      "Connect tubing to hub of VAD after insertion using sterile technique and ensure all connections are locked with luer-connection",
      "Monitor administration hourly; assessing for integrity of fluid, administration system, patient tolerance and other symptoms of complications related to PN",
      "Open all clamps and regulate flow using volume control infuser"
    ],
    "answer": "Monitor administration hourly; assessing for integrity of fluid, administration system, patient tolerance and other symptoms of complications related to PN",
    "explanation": "This checks recall of step 27 in the procedure sequence."
  },
  {
    "question": "Which action is listed as step 28 of PARENTERAL NUTRITION (PN)?",
    "options": [
      "Establish rapport with patient",
      "Close all clamps on new tubing and insert tubing in volume control infuses",
      "Discard old supplies as per agency protocol, and perform hand hygiene",
      "Document the procedure in the patient chart as per hospital policy"
    ],
    "answer": "Document the procedure in the patient chart as per hospital policy",
    "explanation": "This checks recall of step 28 in the procedure sequence."
  }
],
  },
];
