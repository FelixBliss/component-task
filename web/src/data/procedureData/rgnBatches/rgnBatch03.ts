import { RGNProcedure } from '../../procedureTypes';

export const rgnBatch03: RGNProcedure[] = [
  {
    id: "rgn-021",
    title: "Suturing of Simple Lacerations",
    category: "Surgical & Wound Nursing",
    overview: "Suturing simple lacerations involves closing superficial skin wounds using surgical needle and thread to promote primary intention healing, reduce infection risk, and minimize scar formation.",
    purpose: "To approximate wound edges, facilitate primary wound healing, restore skin integrity, control minor hemorrhage, and prevent bacterial contamination.",
    indications: [
      "Clean, superficial dermal lacerations with well-defined edges",
      "Wounds less than 8–12 hours old (up to 24 hours on face/scalp)",
      "Hemostasis established or easily controlled",
      "Absence of active localized wound infection or severe crush injury"
    ],
    equipment: [
      "Sterile suturing pack (needle holder, tissue forceps with teeth, suture scissors, dissecting forceps)",
      "Sterile drape and fenestrated drape",
      "Sterile gloves and personal protective equipment (goggles, mask, gown)",
      "Local anesthetic (e.g., 1% or 2% Lignocaine/Lidocaine) and sterile syringe/needles (21G and 25G)",
      "Sterile normal saline (0.9%) and sterile gauze swabs",
      "Appropriate non-absorbable suture material (e.g., Nylon/Polypropylene 3-0 to 5-0 with cutting needle)",
      "Antiseptic solution (e.g., Chlorhexidine or Povidone-iodine)",
      "Sterile wound dressing/plaster and biohazard disposal container"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Preparation and Consent",
        description: "Verify client identity, explain the procedure, check for drug allergies (especially local anesthetics), obtain informed consent, and position the client comfortably with adequate lighting."
      },
      {
        stepNumber: 2,
        title: "Aseptic Setup and Hand Hygiene",
        description: "Perform thorough surgical hand hygiene, put on PPE, open sterile suturing kit on a clean trolley using aseptic technique, and prepare local anesthetic."
      },
      {
        stepNumber: 3,
        title: "Wound Infiltration and Cleansing",
        description: "Cleanse skin around wound with antiseptic. Administer local anesthetic by infiltrating wound margins slowly using 25G needle after aspirating to avoid intravascular injection. Allow 3-5 minutes for full effect. Irrigate wound copiously with normal saline."
      },
      {
        stepNumber: 4,
        title: "Wound Inspection and Draping",
        description: "Inspect wound bed for foreign bodies, non-viable tissue, or deeper tissue involvement (tendons, nerves, vessels). Place sterile fenestrated drape over wound area."
      },
      {
        stepNumber: 5,
        title: "Suture Placement",
        description: "Mount needle on needle holder at 2/3 distance from point. Enter skin at 90-degree angle approximately 3-5mm from wound edge. Pass through to opposite side at equal depth and distance. Tie instrument knots (simple interrupted suture) without excessive tension."
      },
      {
        stepNumber: 6,
        title: "Dressing and Post-Procedure Care",
        description: "Cleanse suture line with sterile normal saline, dry with sterile gauze, and apply sterile non-adherent dressing. Dispose of sharps into yellow sharps container and non-sharps in biohazard bag."
      },
      {
        stepNumber: 7,
        title: "Documentation and Client Teaching",
        description: "Document procedure date, time, location, number/type of sutures, local anesthetic used, and wound condition. Instruct client on wound hygiene, signs of infection, and exact date for suture removal."
      }
    ],
    precautions: [
      "Always aspirate before injecting local anesthetic to avoid accidental intravascular administration",
      "Do not suture heavily contaminated, infected, or deep puncture wounds",
      "Avoid excessive tension on sutures to prevent tissue ischemia and necrosis",
      "Maintain strict aseptic technique throughout the procedure"
    ],
    videoUrl: "https://www.youtube.com/watch?v=TFwoT199C3g",
    quiz: [
      {
        id: "q-rgn-021-1",
        question: "What is the primary objective of suturing a simple laceration?",
        options: [
          "To allow secondary intention healing",
          "To approximate skin edges and promote primary intention healing",
          "To promote granulation tissue formation from wound bed up",
          "To leave the wound open for drainage"
        ],
        answer: "To approximate skin edges and promote primary intention healing"
      },
      {
        id: "q-rgn-021-2",
        question: "Why must the nurse aspirate prior to injecting local anesthetic around a wound?",
        options: [
          "To ensure the anesthetic is well mixed",
          "To verify the needle is not inside a blood vessel",
          "To check tissue turgor and resistance",
          "To remove hematoma before suturing"
        ],
        answer: "To verify the needle is not inside a blood vessel"
      },
      {
        id: "q-rgn-021-3",
        question: "At what angle should the needle enter the skin during simple interrupted suturing?",
        options: [
          "15 degrees",
          "30 degrees",
          "45 degrees",
          "90 degrees"
        ],
        answer: "90 degrees"
      },
      {
        id: "q-rgn-021-4",
        question: "Which size of suture material is generally preferred for facial lacerations?",
        options: [
          "1-0 or 2-0",
          "3-0",
          "5-0 or 6-0",
          "2"
        ],
        answer: "5-0 or 6-0"
      },
      {
        id: "q-rgn-021-5",
        question: "What is the standard golden period for primary closure of clean body lacerations outside the face?",
        options: [
          "8 to 12 hours",
          "24 to 48 hours",
          "3 to 5 days",
          "Within 1 hour only"
        ],
        answer: "8 to 12 hours"
      },
      {
        id: "q-rgn-021-6",
        question: "What holding instrument is appropriate for grasping skin edges during suturing?",
        options: [
          "Smooth dressing forceps",
          "Toothed tissue forceps",
          "Artery forceps",
          "Towel clips"
        ],
        answer: "Toothed tissue forceps"
      },
      {
        id: "q-rgn-021-7",
        question: "Excessive tension when tying suture knots leads to which complication?",
        options: [
          "Tissue ischemia and skin necrosis",
          "Hypertrophic keloid expansion",
          "Excessive wound bleeding",
          "Rapid absorption of non-absorbable thread"
        ],
        answer: "Tissue ischemia and skin necrosis"
      },
      {
        id: "q-rgn-021-8",
        question: "Where should the needle holder clamp the suture needle?",
        options: [
          "At the junction of the thread and eye",
          "At the sharp point of the needle",
          "Approximately 2/3 distance from the needle point (1/3 from swaged end)",
          "Directly in the center of the curve"
        ],
        answer: "Approximately 2/3 distance from the needle point (1/3 from swaged end)"
      },
      {
        id: "q-rgn-021-9",
        question: "Which of the following is a clear contraindication to primary wound suturing?",
        options: [
          "Fresh linear cut from clean glass",
          "Heavy bacterial contamination or established wound infection",
          "Laceration on forearm less than 4 hours old",
          "Slight superficial skin gaping on leg"
        ],
        answer: "Heavy bacterial contamination or established wound infection"
      },
      {
        id: "q-rgn-021-10",
        question: "What instruction should be given to the patient regarding suture care?",
        options: [
          "Soak wound daily in warm tub bath",
          "Keep dressing clean and dry and report redness, purulent discharge, or increased pain immediately",
          "Remove dressing after 2 hours and expose to open air",
          "Apply oily pomade directly onto fresh suture line"
        ],
        answer: "Keep dressing clean and dry and report redness, purulent discharge, or increased pain immediately"
      }
    ]
  },
  {
    id: "rgn-022",
    title: "Suture Removal",
    category: "Surgical & Wound Nursing",
    overview: "Suture removal is the aseptic process of removing non-absorbable skin sutures once wound healing has progressed sufficiently to maintain edge closure without support.",
    purpose: "To remove foreign non-absorbable thread, minimize tissue reaction/scarring, assess healed wound integrity, and prevent stitch abscess formation.",
    indications: [
      "Healed primary wound closure with intact skin bridge",
      "Absence of wound dehiscence or active infection",
      "Specified post-suturing timeframe reached (e.g., face 3-5 days, scalp 7-10 days, limbs/joints 10-14 days)"
    ],
    equipment: [
      "Sterile suture removal kit (stitch cutter/Littauer scissors, non-toothed forceps)",
      "Sterile normal saline (0.9%) and sterile gauze swabs",
      "Antiseptic solution or alcohol wipe",
      "Adhesive wound closure strips (Steri-Strips) if needed",
      "Clean gloves and sterile gloves",
      "Yellow biohazard bag and clinical waste bin"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Verification and Inspection",
        description: "Identify client, explain procedure, check medical order for suture removal, perform hand hygiene, and inspect suture line for complete healing and absence of dehiscence."
      },
      {
        stepNumber: 2,
        title: "Preparation and Cleansing",
        description: "Don gloves and gently clean suture line with normal saline swabs from clean to dirty area to remove crusts and dried exudate."
      },
      {
        stepNumber: 3,
        title: "Grasping Suture Knot",
        description: "Grasp knot of first suture using sterile forceps and lift gently upward away from skin to expose short section of suture below knot."
      },
      {
        stepNumber: 4,
        title: "Cutting Suture",
        description: "Cut suture directly as close to skin surface as possible below knot using stitch cutter or sterile scissors. Never cut both sides of visible knot."
      },
      {
        stepNumber: 5,
        title: "Pulling Suture Out",
        description: "Pull suture out gently in direction toward suture line to prevent wound edge strain or separation. Ensure complete suture segment is retrieved."
      },
      {
        stepNumber: 6,
        title: "Post-Removal Care and Dressing",
        description: "Clean site with normal saline swab. Apply Steri-Strips across wound line if support is needed. Cover with dry sterile dressing if ordered."
      },
      {
        stepNumber: 7,
        title: "Documentation",
        description: "Document number of sutures removed, wound integrity, skin condition, client tolerance, and any applied reinforcement strips."
      }
    ],
    precautions: [
      "Cut suture close to skin so exposed exterior thread is not dragged through subcutaneous tissue",
      "Stop immediately if wound edge begins to gap or dehisce during removal",
      "Do not pull knot through tissue",
      "Verify total number of sutures removed matches documented count of placed sutures"
    ],
    videoUrl: "https://www.youtube.com/watch?v=i9Y1c-B5E38",
    quiz: [
      {
        id: "q-rgn-022-1",
        question: "Why is suture thread cut as close to the skin as possible during removal?",
        options: [
          "To prevent dragging contaminated external suture thread through underlying tissue",
          "To make cutting easier with small stitch scissors",
          "To avoid bleeding from skin capillaries",
          "To preserve suture length for measurement"
        ],
        answer: "To prevent dragging contaminated external suture thread through underlying tissue"
      },
      {
        id: "q-rgn-022-2",
        question: "In what direction should the suture thread be pulled during removal?",
        options: [
          "Perpendicular to skin surface with strong force",
          "Toward the suture line to avoid stress on wound edges",
          "Away from suture line to stretch scar tissue",
          "In a circular twisting motion"
        ],
        answer: "Toward the suture line to avoid stress on wound edges"
      },
      {
        id: "q-rgn-022-3",
        question: "What is the typical timeframe for removing facial sutures?",
        options: [
          "1 to 2 days",
          "3 to 5 days",
          "10 to 14 days",
          "21 days"
        ],
        answer: "3 to 5 days"
      },
      {
        id: "q-rgn-022-4",
        question: "What action should the nurse take if the wound dehisces during suture removal?",
        options: [
          "Continue removing remaining sutures quickly",
          "Stop removal immediately, support wound with Steri-Strips, and notify practitioner",
          "Apply alcohol directly into gaping wound",
          "Tie remaining knots tighter"
        ],
        answer: "Stop removal immediately, support wound with Steri-Strips, and notify practitioner"
      },
      {
        id: "q-rgn-022-5",
        question: "Which instrument is specifically designed for cutting fine skin sutures?",
        options: [
          "Mayo scissors",
          "Littauer or stitch cutter scissors",
          "Metzenbaum scissors",
          "Bandage scissors"
        ],
        answer: "Littauer or stitch cutter scissors"
      },
      {
        id: "q-rgn-022-6",
        question: "When removing joint or extremity sutures, what timeframe is usually recommended?",
        options: [
          "3 to 5 days",
          "5 to 7 days",
          "10 to 14 days",
          "20 to 25 days"
        ],
        answer: "10 to 14 days"
      },
      {
        id: "q-rgn-022-7",
        question: "What initial step must precede cutting any suture?",
        options: [
          "Apply pressure bandage",
          "Clean crusts and secretions from suture line with sterile saline",
          "Infiltrate local anesthetic into suture knots",
          "Shave surrounding body hair"
        ],
        answer: "Clean crusts and secretions from suture line with sterile saline"
      },
      {
        id: "q-rgn-022-8",
        question: "What should the nurse verify before beginning suture removal?",
        options: [
          "Client blood group",
          "Medical order and suture count",
          "Dietary intake for past 24 hours",
          "Full bed rest authorization"
        ],
        answer: "Medical order and suture count"
      },
      {
        id: "q-rgn-022-9",
        question: "Why should every suture segment removed be inspected after removal?",
        options: [
          "To measure thickness",
          "To confirm complete removal and ensure no suture fragment remains embedded in tissue",
          "To check for tensile strength loss",
          "To store in specimen container"
        ],
        answer: "To confirm complete removal and ensure no suture fragment remains embedded in tissue"
      },
      {
        id: "q-rgn-022-10",
        question: "Which product can be applied across a newly unsutured wound to provide extra support?",
        options: [
          "Vaseline gauze",
          "Sterile adhesive closure strips (Steri-Strips)",
          "Elastic crepe bandage",
          "Hydrocolloid paste"
        ],
        answer: "Sterile adhesive closure strips (Steri-Strips)"
      }
    ]
  },
  {
    id: "rgn-023",
    title: "Tracheostomy Care and Suctioning",
    category: "Respiratory Nursing",
    overview: "Tracheostomy care involves maintaining airway patency, cleaning the outer and inner cannulas, performing aseptic stoma hygiene, changing ties/dressings, and suctioning secretions.",
    purpose: "To ensure airway patency, prevent cannula obstruction from mucus plugs, protect stomal skin integrity, and prevent lower respiratory tract infections.",
    indications: [
      "Clients with temporary or permanent tracheostomy tubes",
      "Accumulation of airway secretions in tracheostomy tube",
      "Signs of respiratory distress, noisy breathing, or decreased oxygen saturation in tracheostomy client"
    ],
    equipment: [
      "Suction machine with calibrated pressure regulator and suction tubing",
      "Sterile suction catheters (appropriate size, e.g., 12F–14F) and sterile gloves",
      "Sterile normal saline poured into sterile container for catheter flushing",
      "Tracheostomy care kit (clean inner cannula brush, pre-cut split tracheostomy dressing, tracheostomy ties/velcro strap)",
      "Hydrogen peroxide solution or normal saline for cleaning inner cannula",
      "Pulse oximeter, manual resuscitation bag with oxygen adapter, and personal protective equipment (face shield/goggles, mask, gown)"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Assessment and Pre-oxygenation",
        description: "Assess respiratory status, auscultate lung sounds, check SpO2. Explain procedure to client. Hyperoxygenate client with 100% O2 for 30–60 seconds prior to suctioning."
      },
      {
        stepNumber: 2,
        title: "Suctioning Procedure",
        description: "Don sterile gloves. Gently insert sterile suction catheter into tracheostomy without applying suction until resistance is met or client coughs. Apply intermittent suction while rotating catheter gently during withdrawal (maximum suctioning time 10–15 seconds)."
      },
      {
        stepNumber: 3,
        title: "Post-Suctioning Recovery",
        description: "Re-oxygenate client, flush suction line with sterile saline, and re-assess breath sounds, SpO2, and cardiac rhythm."
      },
      {
        stepNumber: 4,
        title: "Inner Cannula Care",
        description: "Unlock disposable/reusable inner cannula. Replace or soak/clean reusable cannula with saline/peroxide using tracheostomy brush, rinse with sterile saline, re-insert and lock into position."
      },
      {
        stepNumber: 5,
        title: "Stoma Care and Dressing Change",
        description: "Clean around tracheostomy stoma and faceplate with sterile normal saline swabs using single outward strokes. Dry thoroughly. Place pre-cut split drain gauze under faceplate."
      },
      {
        stepNumber: 6,
        title: "Tie Replacement",
        description: "Secure new tracheostomy ties or velcro collar while assistant holds tube in place (or secure new ties before cutting old ones) allowing one finger width under strap."
      },
      {
        stepNumber: 7,
        title: "Documentation",
        description: "Document suctioning secretions (color, consistency, volume), stoma appearance, inner cannula change, tie security, respiratory sounds, and client tolerance."
      }
    ],
    precautions: [
      "Never cut standard gauze dressings to fit around tracheostomy stoma (frayed threads can be aspirated)",
      "Always secure tube firmly when changing ties to prevent accidental decannulation",
      "Limit each suction pass to 10–15 seconds to avoid severe hypoxia and vagal bradycardia",
      "Maintain emergency tracheostomy kit (same size and one size smaller tube) at bedside"
    ],
    videoUrl: "https://www.youtube.com/watch?v=02wJ3L34L5k",
    quiz: [
      {
        id: "q-rgn-023-1",
        question: "What is the maximum recommended time duration for a single tracheostomy suctioning pass?",
        options: [
          "5 seconds",
          "10 to 15 seconds",
          "20 to 30 seconds",
          "45 seconds"
        ],
        answer: "10 to 15 seconds"
      },
      {
        id: "q-rgn-023-2",
        question: "Why is 100% hyperoxygenation administered prior to tracheostomy suctioning?",
        options: [
          "To dry up pulmonary secretions",
          "To prevent suction-induced hypoxia and arrhythmias",
          "To expand the inner cannula lumen",
          "To suppress cough reflex"
        ],
        answer: "To prevent suction-induced hypoxia and arrhythmias"
      },
      {
        id: "q-rgn-023-3",
        question: "Why should regular woven gauze never be cut with scissors to place around a tracheostomy stoma?",
        options: [
          "It causes chemical irritation",
          "Frayed cotton fibers can be inhaled into trachea causing airway obstruction or granuloma",
          "It prevents proper absorption of mucus",
          "It sticks to the faceplate"
        ],
        answer: "Frayed cotton fibers can be inhaled into trachea causing airway obstruction or granuloma"
      },
      {
        id: "q-rgn-023-4",
        question: "How tight should tracheostomy securing ties or velcro straps be applied?",
        options: [
          "Tight enough that no space remains under tie",
          "Loose enough to insert three to four fingers",
          "Snug enough to allow one finger width between tie and neck",
          "Hanging loosely below clavicles"
        ],
        answer: "Snug enough to allow one finger width between tie and neck"
      },
      {
        id: "q-rgn-023-5",
        question: "When inserting the suction catheter, suction pressure should be applied during which phase?",
        options: [
          "During insertion only",
          "Continuously during both insertion and withdrawal",
          "Only while rotating and slowly withdrawing catheter",
          "Before entering tracheostomy tube"
        ],
        answer: "Only while rotating and slowly withdrawing catheter"
      },
      {
        id: "q-rgn-023-6",
        question: "What critical piece of emergency equipment must always be kept at the bedside of a tracheostomy patient?",
        options: [
          "Tracheostomy tube of same size and one size smaller",
          "Large scalpel and surgical sutures",
          "Endopleural chest tube kit",
          "Steam inhaler unit"
        ],
        answer: "Tracheostomy tube of same size and one size smaller"
      },
      {
        id: "q-rgn-023-7",
        question: "What safety measure prevents tube dislodgement while changing tracheostomy ties?",
        options: [
          "Deflating the cuff completely",
          "Having an assistant hold tracheostomy faceplate securely or applying new tie before cutting old one",
          "Positioning patient flat on stomach",
          "Clamping tube with forceps"
        ],
        answer: "Having an assistant hold tracheostomy faceplate securely or applying new tie before cutting old one"
      },
      {
        id: "q-rgn-023-8",
        question: "Which suction wall vacuum pressure setting is appropriate for adult tracheostomy suctioning?",
        options: [
          "40 to 60 mmHg",
          "80 to 120 mmHg",
          "180 to 220 mmHg",
          "250 to 300 mmHg"
        ],
        answer: "80 to 120 mmHg"
      },
      {
        id: "q-rgn-023-9",
        question: "During suctioning, sudden cardiac bradycardia is most likely caused by stimulation of which nerve?",
        options: [
          "Phrenic nerve",
          "Vagus nerve",
          "Glossopharyngeal nerve",
          "Intercostal nerve"
        ],
        answer: "Vagus nerve"
      },
      {
        id: "q-rgn-023-10",
        question: "What solution is standard for cleaning around a tracheostomy stoma during routine care?",
        options: [
          "Undiluted povidone-iodine scrub",
          "Sterile normal saline 0.9%",
          "70% isopropyl alcohol",
          "Concentrated chlorhexidine gluconate"
        ],
        answer: "Sterile normal saline 0.9%"
      }
    ]
  },
  {
    id: "rgn-024",
    title: "Chest Tube Drainage System Care and Maintenance",
    category: "Cardiothoracic Nursing",
    overview: "Care and management of a closed chest tube drainage system involves monitoring fluid drainage, assessing tidaling and bubbling in water-seal chamber, ensuring system airtightness, maintaining suction settings, and performing site dressing changes.",
    purpose: "To drain air, blood, or pleural fluid from pleural space, re-establish negative intrapleural pressure, expand collapsed lung tissue, and monitor pleural fluid dynamics.",
    indications: [
      "Pneumothorax (air in pleural space)",
      "Hemothorax or pleural effusion (blood/fluid in pleural space)",
      "Empyema or post-thoracotomy surgical drainage"
    ],
    equipment: [
      "Chest drainage unit (water-seal bottle or three-chamber dry/wet system)",
      "Sterile water for water-seal and suction chambers",
      "Wall suction source and tubing (if ordered)",
      "Sterile dressing kit, petroleum (vaseline) gauze, split drain sponges, and adhesive tape",
      "Two rubber-tipped chest tube clamps kept at bedside",
      "Sterile bottle of normal saline (for emergency reconnection)"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Assessment and System Positioning",
        description: "Assess respiratory status, breath sounds, chest expansion, SpO2, and pain. Ensure drainage unit remains upright and positioned below chest level at all times."
      },
      {
        stepNumber: 2,
        title: "Water-Seal and Tidaling Inspection",
        description: "Verify sterile water level in water-seal chamber is at 2 cm line. Observe tidaling (fluctuation of water column with respiration: rises on inspiration, falls on expiration in spontaneously breathing client)."
      },
      {
        stepNumber: 3,
        title: "Bubbling Evaluation",
        description: "Observe water-seal chamber for bubbling. Intermittent bubbling on expiration/coughing is expected with pneumothorax; continuous vigorous bubbling indicates air leak in system or chest."
      },
      {
        stepNumber: 4,
        title: "Drainage Monitoring",
        description: "Mark date, time, and drainage fluid level on collection chamber unit. Assess color, consistency, and volume (report sudden output >100 mL/hr)."
      },
      {
        stepNumber: 5,
        title: "Dressing and Insertion Site Care",
        description: "Inspect insertion site for subcutaneous emphysema (crepitus), redness, or discharge. Apply occlusive vaseline gauze and sterile split drain sponges, securing all tubing connections with tape."
      },
      {
        stepNumber: 6,
        title: "Documentation",
        description: "Record drainage output, presence of tidaling, air leak grade, suction pressure setting, respiratory assessment, and site dressing condition."
      }
    ],
    precautions: [
      "Never clamp chest tube routinely or during transport (risk of tension pneumothorax)",
      "Keep drainage bottle upright and below level of client chest at all times",
      "If chest tube accidentally disconnects from drainage unit, submerge end in sterile saline bottle immediately",
      "If chest tube is accidentally pulled out of chest, apply occlusive dressing taped on 3 sides immediately"
    ],
    videoUrl: "https://www.youtube.com/watch?v=kYJqDq1G428",
    quiz: [
      {
        id: "q-rgn-024-1",
        question: "What action should the nurse immediately take if a chest tube becomes accidentally disconnected from the collection canister?",
        options: [
          "Clamp tube immediately near insertion site with metal clamp",
          "Submerge end of chest tube 2 to 4 cm in a bottle of sterile water or saline",
          "Leave open to air while fetching a new drainage box",
          "Cover tube end with dry sterile gauze and apply suction"
        ],
        answer: "Submerge end of chest tube 2 to 4 cm in a bottle of sterile water or saline"
      },
      {
        id: "q-rgn-024-2",
        question: "What does continuous vigorous bubbling in the water-seal chamber indicate?",
        options: [
          "Normal lung re-expansion",
          "System or thoracic air leak",
          "Excessive suction pressure",
          "Occlusion of drainage tubing"
        ],
        answer: "System or thoracic air leak"
      },
      {
        id: "q-rgn-024-3",
        question: "What is the expected behavior of fluid in the water-seal chamber during normal spontaneous respiration (tidaling)?",
        options: [
          "Rises during inspiration and falls during expiration",
          "Falls during inspiration and rises during expiration",
          "Remains completely stationary",
          "Bubbles vigorously on both inhalation and exhalation"
        ],
        answer: "Rises during inspiration and falls during expiration"
      },
      {
        id: "q-rgn-024-4",
        question: "Where should the chest drainage canister always be positioned relative to the client's body?",
        options: [
          "At level of heart",
          "Below chest level on floor or lower hook",
          "Above level of clavicle",
          "On bed sheet beside client leg"
        ],
        answer: "Below chest level on floor or lower hook"
      },
      {
        id: "q-rgn-024-5",
        question: "Why is routine clamping of a chest tube strongly contraindicated?",
        options: [
          "It causes rapid hypovolemia",
          "It can lead to accumulation of air/fluid causing tension pneumothorax",
          "It damages the chest tube tubing permanently",
          "It prevents proper pain relief administration"
        ],
        answer: "It can lead to accumulation of air/fluid causing tension pneumothorax"
      },
      {
        id: "q-rgn-024-6",
        question: "What emergency dressing should be applied if the chest tube is completely pulled out of the chest wall?",
        options: [
          "Dry unsealed sponges held loosely",
          "Sterile occlusive dressing taped on 3 sides",
          "Pressure dressing taped securely on all 4 sides without vent",
          "Wet saline soaked washcloth"
        ],
        answer: "Sterile occlusive dressing taped on 3 sides"
      },
      {
        id: "q-rgn-024-7",
        question: "At what rate of hourly bloody chest tube drainage should the nurse immediately alert the physician?",
        options: [
          ">10 to 20 mL/hr",
          ">30 to 50 mL/hr",
          ">100 mL/hr",
          ">500 mL in 24 hours"
        ],
        answer: ">100 mL/hr"
      },
      {
        id: "q-rgn-024-8",
        question: "What tactile sensation on skin palpation around chest tube site indicates subcutaneous emphysema?",
        options: [
          "Friction rub feeling",
          "Cracking or pop-rock sensation (crepitus)",
          "Brawny induration",
          "Pitting edema"
        ],
        answer: "Cracking or pop-rock sensation (crepitus)"
      },
      {
        id: "q-rgn-024-9",
        question: "What is the standard fluid level maintained in the water-seal chamber of a standard drainage system?",
        options: [
          "1 cm mark",
          "2 cm mark",
          "5 cm mark",
          "10 cm mark"
        ],
        answer: "2 cm mark"
      },
      {
        id: "q-rgn-024-10",
        question: "Why should stripping or vigorous milking of chest tubes be avoided?",
        options: [
          "It creates extreme high negative pressure causing pleural tissue trauma",
          "It stops fluid movement completely",
          "It pushes fluid back into lung tissue",
          "It causes air leak in water-seal bottle"
        ],
        answer: "It creates extreme high negative pressure causing pleural tissue trauma"
      }
    ]
  },
  {
    id: "rgn-025",
    title: "Electrocardiogram (ECG / EKG) 12-Lead Recording",
    category: "Cardiovascular Nursing",
    overview: "A 12-lead ECG is a non-invasive diagnostic test that records the electrical activity of the heart from 12 different anatomical angles using 10 electrodes placed on limbs and chest wall.",
    purpose: "To detect cardiac arrhythmias, myocardial ischemia, acute myocardial infarction, conduction abnormalities, chamber hypertrophy, and electrolyte imbalances.",
    indications: [
      "Chest pain, angina, or suspected acute coronary syndrome",
      "Palpitations, syncope, dyspnea, or cardiac dysrhythmias",
      "Pre-operative cardiac clearance and routine baseline evaluation",
      "Monitoring cardiotoxic medication effects or electrolyte disturbances"
    ],
    equipment: [
      "12-Lead ECG machine with patient cable and lead wires",
      "Electrocardiogram recording paper",
      "Disposible adhesive ECG electrodes (10 pieces)",
      "Skin preparation material (alcohol wipes, skin prep pads, razors if excessive chest hair)",
      "Clean towel or tissues"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Client Preparation",
        description: "Confirm client identity, explain procedure, reassure that test is painless and safe, ensure privacy, and position client in supine position with chest, wrists, and ankles exposed."
      },
      {
        stepNumber: 2,
        title: "Skin Preparation",
        description: "Clean electrode anatomical sites with alcohol swab to remove skin oil/sweat; shave excessive hair if necessary to ensure optimal gel contact."
      },
      {
        stepNumber: 3,
        title: "Limb Lead Electrode Placement",
        description: "Attach limb electrodes: RA (Red/Right arm wrist), LA (Yellow/Left arm wrist), RL (Black/Right leg ankle - ground), LL (Green/Left leg ankle)."
      },
      {
        stepNumber: 4,
        title: "Precordial (Chest) Lead Placement",
        description: "Place chest electrodes precisely: V1 (4th ICS right sternal border), V2 (4th ICS left sternal border), V3 (midway between V2 and V4), V4 (5th ICS midclavicular line), V5 (5th ICS anterior axillary line), V6 (5th ICS midaxillary line)."
      },
      {
        stepNumber: 5,
        title: "Recording the Tracing",
        description: "Instruct client to lie still, relax shoulders, breathe normally, and avoid talking. Verify baseline calibration (10mm = 1mV, speed 25mm/s) and record 12-lead tracing."
      },
      {
        stepNumber: 6,
        title: "Post-Procedure Care",
        description: "Inspect tracing quality for artifacts or acute ST-segment elevation. Remove electrodes, wipe remaining gel, assist client to dress, and label tracing with client name, ID, date, and time."
      }
    ],
    precautions: [
      "Ensure precise anatomical placement of chest electrodes; misplacement alters diagnostic accuracy",
      "Alert physician immediately if acute ST-segment elevation or dangerous arrhythmia is noted",
      "Ensure client lies completely still during recording to minimize muscular artifact",
      "Check that ground electrode is securely attached to avoid powerline interference"
    ],
    videoUrl: "https://www.youtube.com/watch?v=Kw8A_1G3E4E",
    quiz: [
      {
        id: "q-rgn-025-1",
        question: "Where is precordial lead V1 correctly placed on the chest wall?",
        options: [
          "4th intercostal space at right sternal border",
          "4th intercostal space at left sternal border",
          "5th intercostal space at midclavicular line",
          "5th intercostal space at midaxillary line"
        ],
        answer: "4th intercostal space at right sternal border"
      },
      {
        id: "q-rgn-025-2",
        question: "Where is lead V4 placed on the patient's chest?",
        options: [
          "2nd intercostal space midclavicular line",
          "4th intercostal space anterior axillary line",
          "5th intercostal space at left midclavicular line",
          "5th intercostal space at left midaxillary line"
        ],
        answer: "5th intercostal space at left midclavicular line"
      },
      {
        id: "q-rgn-025-3",
        question: "How many physical electrodes are attached to the patient's body to obtain a standard 12-lead ECG?",
        options: [
          "6 electrodes",
          "10 electrodes",
          "12 electrodes",
          "14 electrodes"
        ],
        answer: "10 electrodes"
      },
      {
        id: "q-rgn-025-4",
        question: "Where is lead V6 positioned?",
        options: [
          "5th intercostal space midaxillary line, level with V4",
          "4th intercostal space right sternal line",
          "3rd intercostal space midclavicular line",
          "5th intercostal space posterior axillary line"
        ],
        answer: "5th intercostal space midaxillary line, level with V4"
      },
      {
        id: "q-rgn-025-5",
        question: "What is the standard paper speed for recording a standard 12-lead ECG?",
        options: [
          "10 mm/s",
          "25 mm/s",
          "50 mm/s",
          "100 mm/s"
        ],
        answer: "25 mm/s"
      },
      {
        id: "q-rgn-025-6",
        question: "What standard calibration voltage height corresponds to 1 millivolt (1 mV) on ECG paper?",
        options: [
          "5 mm (5 small boxes)",
          "10 mm (10 small boxes)",
          "15 mm (15 small boxes)",
          "20 mm (20 small boxes)"
        ],
        answer: "10 mm (10 small boxes)"
      },
      {
        id: "q-rgn-025-7",
        question: "Where should lead V3 be placed?",
        options: [
          "Directly on 3rd rib left of sternum",
          "Midway between lead V2 and lead V4",
          "4th intercostal space right sternal border",
          "5th intercostal space anterior axillary line"
        ],
        answer: "Midway between lead V2 and lead V4"
      },
      {
        id: "q-rgn-025-8",
        question: "What instruction should be given to the client while the machine is actively recording?",
        options: [
          "Take rapid deep breaths in and out",
          "Lie completely still, remain silent, and breathe normally",
          "Flex both arms and legs to increase signal strength",
          "Cough forcefully to check cardiac response"
        ],
        answer: "Lie completely still, remain silent, and breathe normally"
      },
      {
        id: "q-rgn-025-9",
        question: "Muscle tremors or shivering produce which type of artifact on an ECG tracing?",
        options: [
          "60-cycle AC interference",
          "Wandering baseline",
          "Somatic tremor artifact",
          "P-wave inversion"
        ],
        answer: "Somatic tremor artifact"
      },
      {
        id: "q-rgn-025-10",
        question: "If an ECG tracing shows acute ST-segment elevation in leads II, III, and aVF, which wall of the heart is affected?",
        options: [
          "Anterior wall",
          "Lateral wall",
          "Inferior wall",
          "Septal wall"
        ],
        answer: "Inferior wall"
      }
    ]
  },
  {
    id: "rgn-026",
    title: "Defibrillation and Automated External Defibrillator (AED) Operation",
    category: "Emergency & Critical Care Nursing",
    overview: "Defibrillation involves delivering a controlled electrical shock to the heart muscle to depolarize a critical mass of myocardium, allowing the natural cardiac pacemaker to re-establish effective sinus rhythm during life-threatening shockable rhythms.",
    purpose: "To terminate pulseless ventricular tachycardia (pVT) and ventricular fibrillation (VF) and restore organized perfusing cardiac rhythm.",
    indications: [
      "Confirmed Pulseless Ventricular Tachycardia (pVT)",
      "Confirmed Ventricular Fibrillation (VF)"
    ],
    equipment: [
      "Manual Defibrillator or Automated External Defibrillator (AED)",
      "Defibrillator conductive pads (self-adhesive) or conductive gel pads",
      "Emergency crash cart with airway and resuscitation equipment",
      "Personal protective equipment"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Recognition and CPR Commencement",
        description: "Confirm cardiac arrest (unresponsive, no breathing/gasping, no carotid pulse within 10 seconds). Call for resuscitation team and start high-quality CPR immediately."
      },
      {
        stepNumber: 2,
        title: "AED/Defibrillator Setup",
        description: "Turn on AED/defibrillator. Expose client's chest, wipe off excessive moisture, and attach adhesive pads: right upper chest (infraclavicular) and left lower chest (midaxillary apex)."
      },
      {
        stepNumber: 3,
        title: "Rhythm Analysis",
        description: "Pause CPR chest compressions briefly and announce 'Stand Clear! Analyzing rhythm.' Check rhythm screen or allow AED to analyze."
      },
      {
        stepNumber: 4,
        title: "Charging and Clearing Area",
        description: "If rhythm is shockable (VF/pVT), select appropriate energy (e.g., biphasic 120–200J or AED automatic preset) and press Charge. Loudly command: 'Clear! Visual check: top, middle, bottom.' Ensure no person touches client, bed, or oxygen equipment."
      },
      {
        stepNumber: 5,
        title: "Shock Delivery",
        description: "Press Shock button. Ensure shock is delivered safely."
      },
      {
        stepNumber: 6,
        title: "Immediate Resume of CPR",
        description: "Immediately resume chest compressions (30:2 or continuous) for 2 minutes without re-checking pulse or rhythm right away."
      },
      {
        stepNumber: 7,
        title: "Re-evaluation and Documentation",
        description: "Re-analyze rhythm after 2 minutes of CPR. Document shock energy delivered, total shocks given, cardiac rhythms observed, medications administered, and outcome."
      }
    ],
    precautions: [
      "Do NOT deliver shock in non-shockable rhythms (Asystole or Pulseless Electrical Activity - PEA)",
      "Remove oxygen delivery sources away from client chest before shocking (fire hazard)",
      "Ensure no operator or bystander is in physical contact with client or bed frame during shock delivery",
      "Remove transdermal medication patches from chest wall before applying defibrillator pads"
    ],
    videoUrl: "https://www.youtube.com/watch?v=343A4aA92J4",
    quiz: [
      {
        id: "q-rgn-026-1",
        question: "Which two cardiac arrest rhythms are classified as shockable rhythms?",
        options: [
          "Asystole and Pulseless Electrical Activity (PEA)",
          "Ventricular Fibrillation (VF) and Pulseless Ventricular Tachycardia (pVT)",
          "Atrial Fibrillation and Sinus Bradycardia",
          "Complete Heart Block and Atrial Flutter"
        ],
        answer: "Ventricular Fibrillation (VF) and Pulseless Ventricular Tachycardia (pVT)"
      },
      {
        id: "q-rgn-026-2",
        question: "What is the very first step immediately following delivery of a defibrillation shock?",
        options: [
          "Check carotid pulse for 10 seconds",
          "Resume high-quality chest compressions immediately for 2 minutes",
          "Deliver two rescue breaths",
          "Administer IV Epinephrine immediately"
        ],
        answer: "Resume high-quality chest compressions immediately for 2 minutes"
      },
      {
        id: "q-rgn-026-3",
        question: "Where should the standard sternum adhesive defibrillator pad be placed?",
        options: [
          "Right upper chest below clavicle, sternal border",
          "Left lower ribs in back",
          "Directly over cardiac apex under left clavicle",
          "Center of sternum over lower xiphoid"
        ],
        answer: "Right upper chest below clavicle, sternal border"
      },
      {
        id: "q-rgn-026-4",
        question: "Why must oxygen flow sources be moved away from the patient's bed prior to shock discharge?",
        options: [
          "Oxygen gas decreases shock electrical voltage",
          "High concentration oxygen poses a fire/explosion hazard during electrical discharge",
          "Oxygen interferes with AED rhythm analysis",
          "It lowers chest compression depth"
        ],
        answer: "High concentration oxygen poses a fire/explosion hazard during electrical discharge"
      },
      {
        id: "q-rgn-026-5",
        question: "Where should the apex defibrillator pad be placed?",
        options: [
          "Left lower lateral chest wall at 5th ICS midaxillary line",
          "Right scapula region on upper back",
          "Directly over epigastric area",
          "Left upper clavicular margin"
        ],
        answer: "Left lower lateral chest wall at 5th ICS midaxillary line"
      },
      {
        id: "q-rgn-026-6",
        question: "What step should be taken if a client has a nitroglycerin transdermal patch on their upper chest where an AED pad must go?",
        options: [
          "Place AED pad directly over patch",
          "Remove patch and wipe area dry before placing electrode pad",
          "Avoid placing pads and skip defibrillation",
          "Place pad 1 cm beside patch without touching"
        ],
        answer: "Remove patch and wipe area dry before placing electrode pad"
      },
      {
        id: "q-rgn-026-7",
        question: "What is the primary action when an AED states 'No shock advised'?",
        options: [
          "Turn off AED and re-attach ECG leads",
          "Immediately resume chest compressions and CPR",
          "Deliver manual shock anyway",
          "Check pupillary light reflex"
        ],
        answer: "Immediately resume chest compressions and CPR"
      },
      {
        id: "q-rgn-026-8",
        question: "Why must all rescuers stand clear and avoid touching the client or bed during defibrillation?",
        options: [
          "To prevent static electrical interference on screen",
          "To avoid accidental electric shock transmission to personnel",
          "To allow chest wall expansion",
          "To keep defibrillator pads firmly attached"
        ],
        answer: "To avoid accidental electric shock transmission to personnel"
      },
      {
        id: "q-rgn-026-9",
        question: "What is the recommended initial energy level for adult defibrillation using a standard biphasic defibrillator?",
        options: [
          "50 Joules",
          "120 to 200 Joules",
          "360 Joules mono-only",
          "500 Joules"
        ],
        answer: "120 to 200 Joules"
      },
      {
        id: "q-rgn-026-10",
        question: "How long should chest compressions be paused while analyzing heart rhythm with an AED?",
        options: [
          "As short as possible, non-exceeding 10 seconds",
          "30 seconds minimum",
          "1 minute",
          "Until full IV access is secured"
        ],
        answer: "As short as possible, non-exceeding 10 seconds"
      }
    ]
  },
  {
    id: "rgn-027",
    title: "Endotracheal Intubation Assistance and Tube Maintenance",
    category: "Critical Care Nursing",
    overview: "Assisting with endotracheal intubation involves preparing emergency airway equipment, assisting the operator during insertion, confirming tube position, securing the airway, maintaining cuff pressure, and performing suctioning.",
    purpose: "To establish a secure, artificial airway for mechanical ventilation, maintain airway patency, protect lower respiratory tract from aspiration, and ensure oxygenation.",
    indications: [
      "Acute respiratory failure, severe hypoxia, or hypercapnia",
      "Inability to protect airway (Glasgow Coma Scale score ≤ 8)",
      "General anesthesia for major surgical procedures"
    ],
    equipment: [
      "Laryngoscope handle with functional curved (Macintosh) or straight (Miller) blades and spare batteries/bulbs",
      "Endotracheal tubes (ETT) of various sizes (e.g., 7.0–8.0 mm for adults) with stylet",
      "10 mL syringe for cuff inflation and cuff pressure manometer",
      "Bag-valve-mask (BVM) connected to 100% oxygen source and inline suction setup",
      "Stethoscope, End-tidal CO2 detector (capnography/colorimetric indicator)",
      "Commercial ETT holder or adhesive tape, bite block, and personal protective equipment"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Preparation and Pre-oxygenation",
        description: "Assemble and test ETT cuff integrity with syringe, check laryngoscope light. Pre-oxygenate client with 100% oxygen via non-rebreather mask or BVM for 3–5 minutes."
      },
      {
        stepNumber: 2,
        title: "Positioning and Medication Administration",
        description: "Position client in 'sniffing position' (head extended, neck slightly flexed). Assist physician/anesthetist with rapid sequence intubation (RSI) sedative and paralytic administration."
      },
      {
        stepNumber: 3,
        title: "Intubation Assistance",
        description: "Hand laryngoscope and lubricated ETT to operator. Provide cricoid pressure (Sellick maneuver) or BURP (backwards, upwards, rightwards pressure) if requested."
      },
      {
        stepNumber: 4,
        title: "Cuff Inflation and Placement Verification",
        description: "Inflate cuff with 5–10 mL air immediately upon insertion. Verify tube placement: observe equal bilateral chest expansion, attach colorimetric ETCO2 device (turns yellow), and auscultate breath sounds bilaterally (epigastrium first, then lung apexes and bases)."
      },
      {
        stepNumber: 5,
        title: "Securing Tube and Documentation",
        description: "Note depth marker of ETT at teeth/lips (e.g., 21–23 cm). Secure tube with ETT holder or tape. Request immediate post-intubation chest X-ray. Document procedure, ETT size, depth, cuff pressure (20–30 cm H2O), and lung sounds."
      }
    ],
    precautions: [
      "Auscultate stomach/epigastrium immediately; breath sounds over stomach with no chest rise indicates esophageal intubation",
      "Avoid intubation attempts exceeding 30 seconds without re-oxygenating client with BVM",
      "Maintain cuff pressure between 20–30 cm H2O to prevent tracheal wall necrosis or aspiration leaks",
      "Re-verify depth marker at teeth during every shift and repositioning"
    ],
    videoUrl: "https://www.youtube.com/watch?v=4818D80I-w8",
    quiz: [
      {
        id: "q-rgn-027-1",
        question: "What primary method confirms correct endotracheal tube placement immediately after insertion?",
        options: [
          "Obtaining arterial blood gas",
          "Continuous end-tidal CO2 detection (capnography) and bilateral breath sound auscultation",
          "Checking blood pressure response",
          "Observing pupillary light response"
        ],
        answer: "Continuous end-tidal CO2 detection (capnography) and bilateral breath sound auscultation"
      },
      {
        id: "q-rgn-027-2",
        question: "What is the recommended cuff pressure range for an endotracheal tube to prevent mucosal necrosis and aspiration?",
        options: [
          "5 to 10 cm H2O",
          "20 to 30 cm H2O",
          "45 to 60 cm H2O",
          "70 to 80 cm H2O"
        ],
        answer: "20 to 30 cm H2O"
      },
      {
        id: "q-rgn-027-3",
        question: "If auscultation reveals breath sounds present only over the right lung and absent over the left lung, what is the most likely cause?",
        options: [
          "Esophageal placement",
          "Right mainstem bronchus intubation (tube advanced too far)",
          "Left pneumothorax",
          "Bilateral bronchospasm"
        ],
        answer: "Right mainstem bronchus intubation (tube advanced too far)"
      },
      {
        id: "q-rgn-027-4",
        question: "What color change on a colorimetric end-tidal CO2 detector confirms proper tracheal placement?",
        options: [
          "Purple to Yellow",
          "Yellow to Blue",
          "White to Black",
          "Red to Green"
        ],
        answer: "Purple to Yellow"
      },
      {
        id: "q-rgn-027-5",
        question: "What maximum time limit should be allowed for a single intubation attempt before stopping to re-oxygenate the client?",
        options: [
          "15 seconds",
          "30 seconds",
          "60 seconds",
          "2 minutes"
        ],
        answer: "30 seconds"
      },
      {
        id: "q-rgn-027-6",
        question: "What position is optimal for aligning pharyngeal and laryngeal axes during intubation?",
        options: [
          "Trendelenburg position",
          "Prone position",
          "'Sniffing' position (head extended, neck flexed slightly)",
          "Flat supine with chin tucked to chest"
        ],
        answer: "'Sniffing' position (head extended, neck flexed slightly)"
      },
      {
        id: "q-rgn-027-7",
        question: "Where is the typical depth marker line of a properly positioned ETT recorded at the incisors in an average adult?",
        options: [
          "12 to 14 cm",
          "15 to 17 cm",
          "21 to 23 cm",
          "28 to 30 cm"
        ],
        answer: "21 to 23 cm"
      },
      {
        id: "q-rgn-027-8",
        question: "Auscultation over which area should be performed first during intubation placement verification?",
        options: [
          "Right lung apex",
          "Epigastrium (stomach)",
          "Left lung base",
          "Trachea"
        ],
        answer: "Epigastrium (stomach)"
      },
      {
        id: "q-rgn-027-9",
        question: "Which tool is placed inside the endotracheal tube to provide rigidity during insertion?",
        options: [
          "Magill forceps",
          "Malleable stylet",
          "Yankauer suction tip",
          "Laryngoscope blade"
        ],
        answer: "Malleable stylet"
      },
      {
        id: "q-rgn-027-10",
        question: "What definitive radiological diagnostic test confirms ETT tip positioning above the carina?",
        options: [
          "Portable Chest X-ray",
          "CT pulmonary angiogram",
          "Thoracic ultrasound",
          "Lateral neck X-ray"
        ],
        answer: "Portable Chest X-ray"
      }
    ]
  },
  {
    id: "rgn-028",
    title: "Continuous Renal Replacement Therapy (CRRT) Setup and Care",
    category: "Critical Care Nursing",
    overview: "Continuous Renal Replacement Therapy (CRRT) is a slow, continuous extracorporeal blood purification technique used in hemodynamically unstable critically ill clients with acute kidney injury.",
    purpose: "To remove fluid, uremic toxins, and electrolytes gradually over 24 hours without causing severe fluid shifts or hemodynamic instability.",
    indications: [
      "Acute Kidney Injury (AKI) in hemodynamically unstable ICU clients",
      "Severe fluid overload refractory to diuretic therapy",
      "Severe metabolic acidosis or hyperkalemia in critically ill settings"
    ],
    equipment: [
      "CRRT Machine / Hemofiltration console",
      "Sterile CRRT tubing circuit and synthetic dialyzer/hemofilter set",
      "CRRT replacement fluid and dialysate bags (prescribed electrolyte composition)",
      "Anticoagulation infusion (e.g., Citrate or Heparin) and reversal agents (e.g., Calcium gluconate/chloride)",
      "Double-lumen central venous hemodialysis catheter (e.g., Mahurkar / Permcath)",
      "Personal protective equipment and sterile dressing kit"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Circuit Preparation and Priming",
        description: "Set up CRRT machine according to manufacturer instructions. Mount dialyzer and thread tubing circuit using strict aseptic technique. Prime circuit with normal saline (with or without heparin) to evacuate all air."
      },
      {
        stepNumber: 2,
        title: "Catheter Access and Connection",
        description: "Assess vascular access catheter (e.g., internal jugular/femoral dual-lumen catheter). Aspirate heparin lock from both lumens, flush with sterile saline, connect arterial (red) and venous (blue) blood lines."
      },
      {
        stepNumber: 3,
        title: "Initiation of Treatment",
        description: "Initiate blood pump at slow initial flow rate (e.g., 50–100 mL/min) and gradually increase to target prescribed rate (150–200 mL/min). Start replacement/dialysate fluid pumps and regional anticoagulation."
      },
      {
        stepNumber: 4,
        title: "Hourly Monitoring",
        description: "Monitor arterial, venous, pre-filter, and transmembrane pressures (TMP). Record hourly net ultrafiltration/fluid removal goals and vital signs."
      },
      {
        stepNumber: 5,
        title: "Laboratory and Anticoagulation Checks",
        description: "Monitor ionized calcium levels (for citrate therapy) or activated partial thromboplastin time / ACT (for heparin therapy), along with serum electrolytes and coagulation profile."
      },
      {
        stepNumber: 6,
        title: "Documentation",
        description: "Record hourly blood flow rate, dialysate/replacement rates, net ultrafiltration balance, pressure trends, filter clotting signs, and systemic lab values."
      }
    ],
    precautions: [
      "Maintain continuous strict aseptic technique during line connections to prevent catheter-related bloodstream infection (CRBSI)",
      "Monitor circuit pressure readings closely; rapid rise in transmembrane pressure (TMP) indicates filter clotting",
      "Check ionized calcium levels regularly when using regional citrate anticoagulation to prevent citrate toxicity",
      "Avoid air entry into circuit; verify all air bubble detector alarms are fully active"
    ],
    videoUrl: "https://www.youtube.com/watch?v=o0u9R6N9u9c",
    quiz: [
      {
        id: "q-rgn-028-1",
        question: "Why is CRRT preferred over Intermittent Hemodialysis (IHD) in ICU patients with acute kidney injury?",
        options: [
          "CRRT takes only 2 hours per day",
          "CRRT removes fluid slowly over 24 hours, maintaining hemodynamic stability in unstable patients",
          "CRRT does not require vascular access",
          "CRRT eliminates the need for anticoagulation completely"
        ],
        answer: "CRRT removes fluid slowly over 24 hours, maintaining hemodynamic stability in unstable patients"
      },
      {
        id: "q-rgn-028-2",
        question: "A progressive increase in Transmembrane Pressure (TMP) across the CRRT filter indicates which issue?",
        options: [
          "Impending filter clotting or membrane clogging",
          "Excessive arterial blood flow",
          "Catheter disconnection",
          "Hypokalemia"
        ],
        answer: "Impending filter clotting or membrane clogging"
      },
      {
        id: "q-rgn-028-3",
        question: "When using Regional Citrate Anticoagulation for CRRT, which laboratory parameter must be closely monitored?",
        options: [
          "Systemic and post-filter ionized calcium",
          "Blood glucose",
          "Serum amylase",
          "Troponin I"
        ],
        answer: "Systemic and post-filter ionized calcium"
      },
      {
        id: "q-rgn-028-4",
        question: "What color is standardly assigned to the arterial line pulling blood from the client into the CRRT machine?",
        options: [
          "Blue",
          "Red",
          "Yellow",
          "Green"
        ],
        answer: "Red"
      },
      {
        id: "q-rgn-028-5",
        question: "Prior to connecting CRRT blood lines to a dual-lumen hemodialysis catheter, what must be done with the existing catheter lumen volume?",
        options: [
          "Flush lock solution directly into client circulation",
          "Aspirate and discard the concentrated heparin lock solution",
          "Infuse 50 mL normal saline under high pressure",
          "Inject 10 mL local anesthetic"
        ],
        answer: "Aspirate and discard the concentrated heparin lock solution"
      },
      {
        id: "q-rgn-028-6",
        question: "What is the primary electrolyte disturbance associated with citrate toxicity in CRRT?",
        options: [
          "Hypocalcemia (decreased systemic ionized calcium)",
          "Hyperkalemia",
          "Hypernatremia",
          "Hypophosphatemia"
        ],
        answer: "Hypocalcemia (decreased systemic ionized calcium)"
      },
      {
        id: "q-rgn-028-7",
        question: "How frequently must hourly fluid balance and net ultrafiltration rates be calculated and recorded in CRRT care?",
        options: [
          "Every 12 hours",
          "Every hour",
          "Once per 24-hour shift",
          "Only when filter is changed"
        ],
        answer: "Every hour"
      },
      {
        id: "q-rgn-028-8",
        question: "Which catheter line returns cleansed blood from the CRRT circuit back to the client?",
        options: [
          "Venous line (Blue)",
          "Arterial line (Red)",
          "Effluent line (Yellow)",
          "Replacement fluid line"
        ],
        answer: "Venous line (Blue)"
      },
      {
        id: "q-rgn-028-9",
        question: "What is the primary mechanism of solute clearance in Continuous Venovenous Hemofiltration (CVVH)?",
        options: [
          "Diffusion",
          "Convection (solvent drag)",
          "Osmosis",
          "Active transport"
        ],
        answer: "Convection (solvent drag)"
      },
      {
        id: "q-rgn-028-10",
        question: "What crucial emergency check must be performed before starting blood circulation in CRRT?",
        options: [
          "Verify that air bubble detector sensor is engaged and operational",
          "Turn off all audible machine alarms",
          "Heat dialysate solution to 45 degrees Celsius",
          "Administer bolus dose of potassium"
        ],
        answer: "Verify that air bubble detector sensor is engaged and operational"
      }
    ]
  },
  {
    id: "rgn-029",
    title: "Invasive Arterial Blood Pressure (ABP) Line Monitoring",
    category: "Critical Care Nursing",
    overview: "Invasive arterial blood pressure monitoring involves placing an indwelling catheter into an artery (commonly radial) connected to a pressurized fluid system and transducer to continuously measure real-time systolic, diastolic, and mean arterial pressure (MAP).",
    purpose: "To provide accurate, continuous beat-to-beat arterial pressure monitoring and allow frequent arterial blood gas (ABG) sampling in critically ill clients.",
    indications: [
      "Hemodynamic instability or shock requiring continuous vasoactive drug infusions",
      "Need for frequent arterial blood gas sampling",
      "Major high-risk surgical procedures requiring close cardiovascular monitoring"
    ],
    equipment: [
      "Arterial catheterization kit (20G Teflon arterial catheter) and armboard",
      "Pressurized flush bag (0.9% normal saline) with pressure bag inflated to 300 mmHg",
      "Pressure transducer, flush device, non-compressible pressure tubing, and monitor cable",
      "Transducer leveling bracket/pole clamp",
      "Sterile dressing, chlorhexidine skin prep, and suture kit"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Assessment and Allen's Test",
        description: "Assess radial pulse and perform Modified Allen's Test to confirm adequate collateral ulnar circulation prior to radial artery cannulation."
      },
      {
        stepNumber: 2,
        title: "System Assembly and Priming",
        description: "Assemble pressure transducer circuit, connect to saline bag, inflate pressure bag to 300 mmHg, and flush tubing completely to purge all air bubbles."
      },
      {
        stepNumber: 3,
        title: "Zeroing and Transducer Leveling",
        description: "Level transducer stopcock to phlebostatic axis (4th ICS, mid-axillary line). Open stopcock to air, press Zero on monitor, and close stopcock."
      },
      {
        stepNumber: 4,
        title: "Connection and Waveform Verification",
        description: "Connect arterial line to catheter. Observe crisp arterial waveform on monitor screen (sharp systolic upstroke, dicrotic notch, diastolic slope)."
      },
      {
        stepNumber: 5,
        title: "Square Wave Fast-Flush Test",
        description: "Perform square wave test by activating fast flush device to verify dynamic response (overdamped vs underdamped system)."
      },
      {
        stepNumber: 6,
        title: "Site Care and Documentation",
        description: "Apply sterile transparent occlusive dressing. Secure wrist with armboard in slight extension. Document insertion, zeroing, MAP values, neurovascular checks of hand."
      }
    ],
    precautions: [
      "Always verify collateral ulnar circulation (Modified Allen's test) prior to radial cannulation",
      "Ensure all stopcocks and line fittings are tightly secured to prevent rapid arterial exsanguination",
      "Never administer medications through an arterial line",
      "Perform neurovascular checks (color, warmth, capillary refill, sensation) on distal extremity hourly"
    ],
    videoUrl: "https://www.youtube.com/watch?v=0h53_y09G8U",
    quiz: [
      {
        id: "q-rgn-029-1",
        question: "What physical assessment must be performed to confirm adequate collateral circulation prior to radial arterial cannulation?",
        options: [
          "Homans' sign",
          "Modified Allen's Test",
          "Trousseau's sign",
          "Lasegue's test"
        ],
        answer: "Modified Allen's Test"
      },
      {
        id: "q-rgn-029-2",
        question: "What anatomical landmark is used for zeroing and leveling the arterial pressure transducer?",
        options: [
          "Xiphoid process",
          "Phlebostatic axis (4th intercostal space, mid-axillary line)",
          "Clavicular notch",
          "2nd intercostal space right sternal line"
        ],
        answer: "Phlebostatic axis (4th intercostal space, mid-axillary line)"
      },
      {
        id: "q-rgn-029-3",
        question: "What standard pressure should be maintained in the fluid pressure bag for an arterial monitoring line?",
        options: [
          "100 mmHg",
          "150 mmHg",
          "300 mmHg",
          "500 mmHg"
        ],
        answer: "300 mmHg"
      },
      {
        id: "q-rgn-029-4",
        question: "What notch on the arterial pressure waveform represents closure of the aortic valve?",
        options: [
          "Anacrotic notch",
          "Dicrotic notch",
          "P-wave notch",
          "Systolic peak"
        ],
        answer: "Dicrotic notch"
      },
      {
        id: "q-rgn-029-5",
        question: "What safety principle applies strictly regarding administration of intravenous medications via arterial line?",
        options: [
          "Only push bolus doses slowly over 5 minutes",
          "Medications must NEVER be administered through an arterial line",
          "Only antibiotic infusions are allowed",
          "Dilute all medications in 100 mL normal saline before arterial push"
        ],
        answer: "Medications must NEVER be administered through an arterial line"
      },
      {
        id: "q-rgn-029-6",
        question: "What does an overdamped arterial waveform look like on the monitor?",
        options: [
          "Falsely high peak systolic pressure",
          "Slurred upstroke, loss of dicrotic notch, and falsely low systolic reading",
          "Multiple ringing oscillations",
          "Vertical straight line"
        ],
        answer: "Slurred upstroke, loss of dicrotic notch, and falsely low systolic reading"
      },
      {
        id: "q-rgn-029-7",
        question: "Formula for calculating Mean Arterial Pressure (MAP) is:",
        options: [
          "(Systolic + Diastolic) / 2",
          "[Systolic + (2 x Diastolic)] / 3",
          "(2 x Systolic + Diastolic) / 3",
          "Systolic - Diastolic"
        ],
        answer: "[Systolic + (2 x Diastolic)] / 3"
      },
      {
        id: "q-rgn-029-8",
        question: "How often should neurovascular checks distal to the arterial catheter site be performed?",
        options: [
          "Every 24 hours",
          "Hourly",
          "Once per shift",
          "Only if client complains of pain"
        ],
        answer: "Hourly"
      },
      {
        id: "q-rgn-029-9",
        question: "If the arterial transducer is positioned lower than the phlebostatic axis, how will the blood pressure reading be affected?",
        options: [
          "Falsely low reading",
          "Falsely elevated reading",
          "No change in reading",
          "Pulse pressure disappears"
        ],
        answer: "Falsely elevated reading"
      },
      {
        id: "q-rgn-029-10",
        question: "Which feature distinguishes continuous arterial pressure tubing from standard IV tubing?",
        options: [
          "Rigid, non-compressible tubing to prevent waveform dampening",
          "Highly elastic latex material",
          "Longer length exceeding 3 meters",
          "Filter chamber attached at middle"
        ],
        answer: "Rigid, non-compressible tubing to prevent waveform dampening"
      }
    ]
  }
];
