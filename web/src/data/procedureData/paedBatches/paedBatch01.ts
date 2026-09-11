import { makePaedProcedure } from "./paedShared";

export const paedBatch01 = [
  makePaedProcedure({
    id: "paed-001",
    title: "RESPONDING TO CHILDHOOD EMERGENCIES: BURNS AND SCALDS",
    overview: "This is the act of giving immediate intervention by the Paediatric nurse/nurse to a child with burns and scalds as a result of dry and moist heat, severe cold, electricity, radiation, chemical or irritants etc.",
    purpose: [
      "Maintain a patent airway and breathing",
      "Control pain",
      "Restore fluid and electrolyte balance",
      "Prevent shock",
      "Prevent infections/complications",
      "Restore the integrity of the skin",
      "Allay fear and anxiety"
    ],
    indications: ["Child presents with burns or scalds from any cause"],
    equipment: [
      "Resuscitation tray containing spatula, nasal prongs/oxygen mask, Ambu bag/self inflating mask, IV cannula and giving set, IV fluid (Normal saline, Ringer's lactate, 5% & 10% dextrose), syringe and needle, prescribed pain and antibiotic medications",
      "Oxygen cylinder/source",
      "Drip stand",
      "Appropriate PPEs",
      "Sterile dressing packs",
      "Antimicrobial dressing solution/ointment",
      "Infusion pumps/infusion flow meter",
      "Bed cradle",
      "Glucometer and strips"
    ],
    steps: [
      "Receive child into the emergency couch",
      "Introduce self quickly to child and caregiver",
      "Assess the degree of burns",
      "Call for resuscitation tray and assistance",
      "Perform five moments of hand hygiene as and when required",
      "Position the child appropriately",
      "Assess airway, breathing and circulation",
      "Clear airway if necessary",
      "Loosen tight clothing",
      "Administer oxygen, intubate and provide ventilatory support if necessary",
      "Assess level of consciousness",
      "Assess blood sugar level and manage appropriately",
      "Obtain weight on admission",
      "Insert intravenous cannula for fluid resuscitation according to percentage of burns (>10% of total body surface)",
      "Administer Ringers lactate or normal saline with 5% glucose at 4ml/kg for every 1% of surface burn",
      "Administer half of total fluid in the first 8hours and the remaining fluid in the next 16hours",
      "Dress wound using aseptically using prescribed topical antimicrobial dressing",
      "Splint affected limb if necessary",
      "Use bed cradle to lift bed clothings off the child to promote comfort",
      "Insert an indwelling Foley's catheter to obtain specimen and monitor urine output hourly if necessary",
      "Assess the level of pain and manage",
      "Administer prescribed medications",
      "Assess for the cause of burns from caregiver/passerby"
    ],
    precautions: [
      "Maintain strict aseptic technique",
      "Monitor for signs of shock",
      "Ensure proper pain management",
      "Prevent hypothermia"
    ],
    preparation: [
      "Prepare emergency/resuscitation area",
      "Ensure all equipment is available and functional",
      "Call for assistance"
    ],
    afterCare: [
      "Monitor vital signs continuously",
      "Assess wound healing progress",
      "Provide psychological support to child and family",
      "Schedule follow-up care"
    ],
    documentation: [
      "Document time and cause of injury",
      "Record assessment findings including degree and extent of burns",
      "Document interventions provided and child's response",
      "Record fluid balance and urine output",
      "Note medications administered"
    ],
    patientEducation: [
      "Educate parents on burn prevention",
      "Teach wound care techniques",
      "Explain signs of infection to watch for",
      "Provide guidance on nutrition for healing"
    ],
    nursingConsiderations: [
      "Consider age-appropriate communication",
      "Involve parents in care where appropriate",
      "Monitor for signs of abuse if cause is suspicious",
      "Address psychological trauma"
    ],
    quizFacts: {
      indication: "RESPONDING TO CHILDHOOD EMERGENCIES: BURNS AND SCALDS is indicated when a child presents with burns from dry/moist heat, cold, electricity, radiation, chemicals or irritants.",
      preparation: "The nurse prepares by setting up the resuscitation area, gathering equipment, and calling for assistance.",
      equipment: "Required equipment includes resuscitation tray, oxygen source, IV fluids and equipment, sterile dressings, PPEs, infusion pumps, and monitoring equipment.",
      sequence: "The nurse follows ABCDE approach, establishes IV access, calculates and administers fluid resuscitation, dresses wounds, and manages pain.",
      safety: "The nurse maintains aseptic technique, monitors for shock, prevents hypothermia, and ensures proper pain management.",
      observation: "The nurse observes airway patency, breathing, circulation, level of consciousness, urine output, and wound condition.",
      redFlag: "Signs of airway compromise, shock, severe pain unrelieved by medication, or signs of infection require immediate attention.",
      documentation: "Time of injury, cause, assessment findings, interventions, fluid balance, medications, and child's response are documented.",
      education: "Parents receive education on burn prevention, wound care, signs of infection, and nutritional support for healing.",
      escalation: "Airway compromise, severe shock, or complications are escalated immediately with appropriate referral."
    }
  }),
  makePaedProcedure({
    id: "paed-002",
    title: "RESPONDING TO CHILDHOOD EMERGENCIES: CONVULSION/SEIZURES",
    overview: "This is the act of giving immediate intervention to a child experiencing convulsion or seizures.",
    purpose: [
      "Maintain patent airway and adequate oxygenation",
      "Prevent injury during seizure",
      "Terminate seizure activity",
      "Identify and treat underlying cause",
      "Prevent recurrence"
    ],
    indications: ["Child presenting with convulsion or seizure activity"],
    equipment: [
      "Resuscitation equipment",
      "Oxygen source and delivery devices",
      "Suction apparatus",
      "IV cannula and fluids",
      "Anticonvulsant medications",
      "Glucometer",
      "Thermometer",
      "Padded tongue depressor",
      "Side rails padding"
    ],
    steps: [
      "Stay with the child and call for help",
      "Place child on side-lying position",
      "Clear area of hard objects",
      "Loosen tight clothing around neck",
      "Do not restrain the child",
      "Do not insert anything into the mouth",
      "Time the seizure duration",
      "Maintain patent airway",
      "Administer oxygen",
      "Suction secretions if necessary",
      "Establish IV access",
      "Check blood glucose level",
      "Administer anticonvulsants as prescribed",
      "Monitor vital signs",
      "Assess neurological status post-seizure"
    ],
    precautions: [
      "Never leave child unattended during seizure",
      "Do not force anything into mouth",
      "Do not restrain movements",
      "Protect from injury"
    ],
    preparation: [
      "Prepare resuscitation equipment",
      "Ensure suction is working",
      "Have anticonvulsants ready"
    ],
    afterCare: [
      "Allow child to rest in quiet environment",
      "Orient child as they regain consciousness",
      "Monitor for post-ictal state",
      "Document seizure characteristics"
    ],
    documentation: [
      "Time of seizure onset and duration",
      "Type of seizure activity observed",
      "Body parts involved",
      "Interventions provided",
      "Response to treatment",
      "Post-ictal observations"
    ],
    patientEducation: [
      "Teach seizure first aid to parents",
      "Explain medication administration",
      "Discuss trigger avoidance",
      "Provide safety guidelines"
    ],
    nursingConsiderations: [
      "Consider developmental stage",
      "Address family anxiety",
      "Plan for long-term management if recurrent",
      "Screen for possible abuse if indicated"
    ],
    quizFacts: {
      indication: "RESPONDING TO CHILDHOOD EMERGENCIES: CONVULSION/SEIZURES is indicated when a child experiences seizure activity.",
      preparation: "The nurse prepares resuscitation equipment, oxygen, suction, IV supplies, and anticonvulsant medications.",
      equipment: "Required equipment includes oxygen delivery devices, suction apparatus, IV cannula, anticonvulsants, glucometer, and padded side rails.",
      sequence: "The nurse positions child safely, maintains airway, times seizure, administers oxygen and medications, and monitors vital signs.",
      safety: "The nurse protects child from injury, never inserts objects in mouth, does not restrain, and stays with child throughout.",
      observation: "The nurse observes seizure type, duration, body involvement, airway status, and post-ictal state.",
      redFlag: "Seizure lasting more than 5 minutes, respiratory distress, or recurrent seizures require immediate escalation.",
      documentation: "Seizure onset, duration, characteristics, interventions, medications, and response are thoroughly documented.",
      education: "Parents learn seizure first aid, medication administration, trigger identification, and safety measures.",
      escalation: "Prolonged seizures, status epilepticus, or respiratory compromise require immediate medical intervention."
    }
  }),
  makePaedProcedure({
    id: "paed-003",
    title: "ADMISSION OF AN AMBULANT CHILD",
    overview: "This is the process of admitting a child who can walk independently into a healthcare facility.",
    purpose: [
      "Establish therapeutic relationship with child and family",
      "Collect comprehensive health information",
      "Orient child and family to the unit",
      "Initiate appropriate care plan",
      "Reduce anxiety related to hospitalization"
    ],
    indications: ["Child requiring hospital admission who is able to walk"],
    equipment: [
      "Admission forms and records",
      "Vital signs equipment (thermometer, BP cuff, stethoscope)",
      "Weighing scale",
      "Height measuring device",
      "Identification bands",
      "Orientation materials"
    ],
    steps: [
      "Greet child and family warmly",
      "Introduce self and staff members",
      "Verify admission orders",
      "Complete admission documentation",
      "Attach identification band",
      "Measure and record vital signs",
      "Obtain weight and height",
      "Conduct health history interview",
      "Perform physical assessment",
      "Orient child and family to room and unit",
      "Explain routines and regulations",
      "Discuss visiting hours and meal times",
      "Address immediate concerns",
      "Notify physician of admission"
    ],
    precautions: [
      "Verify child's identity using two identifiers",
      "Maintain privacy during assessment",
      "Use age-appropriate communication",
      "Screen for infectious diseases"
    ],
    preparation: [
      "Prepare admission room",
      "Ensure bed and equipment are ready",
      "Review referral information if available"
    ],
    afterCare: [
      "Ensure child is comfortable",
      "Verify call bell is within reach",
      "Introduce to roommate if applicable",
      "Allow time for settling in"
    ],
    documentation: [
      "Complete admission assessment form",
      "Record vital signs and measurements",
      "Document health history",
      "Note orientation provided",
      "Record any valuables secured"
    ],
    patientEducation: [
      "Explain hospital routines",
      "Discuss what to expect during stay",
      "Encourage questions from child and family",
      "Provide information about facilities"
    ],
    nursingConsiderations: [
      "Consider developmental stage in communication",
      "Assess family dynamics and support",
      "Identify cultural considerations",
      "Screen for special needs"
    ],
    quizFacts: {
      indication: "ADMISSION OF AN AMBULANT CHILD is indicated when a child requiring hospitalization is able to walk independently.",
      preparation: "The nurse prepares the admission room, bed, equipment, and reviews any referral information.",
      equipment: "Required equipment includes admission forms, vital signs equipment, weighing scale, identification bands, and orientation materials.",
      sequence: "The nurse greets family, completes documentation, obtains measurements, conducts assessment, orients to unit, and explains routines.",
      safety: "The nurse verifies identity with two identifiers, maintains privacy, screens for infection, and ensures safe environment.",
      observation: "The nurse observes child's physical condition, behavior, family interaction, and any signs of distress.",
      redFlag: "Signs of abuse, neglect, infectious disease, or severe distress require immediate attention and reporting.",
      documentation: "Admission assessment, vital signs, health history, orientation provided, and valuables are documented.",
      education: "Child and family receive information about routines, expectations, facilities, and are encouraged to ask questions.",
      escalation: "Concerns about abuse, severe illness, or safety risks are escalated to appropriate personnel."
    }
  }),
  makePaedProcedure({
    id: "paed-004",
    title: "ADMISSION OF A SERIOUSLY ILL CHILD",
    overview: "This is the process of admitting a critically ill child who requires immediate medical attention and intensive care.",
    purpose: [
      "Provide immediate life-saving interventions",
      "Stabilize child's condition",
      "Establish monitoring and support systems",
      "Support anxious family members",
      "Coordinate multidisciplinary care"
    ],
    indications: ["Child requiring urgent/critical care admission"],
    equipment: [
      "Resuscitation equipment and crash cart",
      "Cardiac monitor and defibrillator",
      "Oxygen source and delivery systems",
      "Suction apparatus",
      "IV cannulas and infusion pumps",
      "Emergency medications",
      "Ventilator equipment",
      "Vital signs monitoring equipment"
    ],
    steps: [
      "Receive child in emergency/treatment area",
      "Quickly introduce self to accompanying persons",
      "Obtain brief handover from referring personnel/parents",
      "Assess ABCDE (Airway, Breathing, Circulation, Disability, Exposure)",
      "Initiate resuscitation if needed",
      "Attach cardiac monitor and pulse oximeter",
      "Administer oxygen as indicated",
      "Establish IV/IO access urgently",
      "Draw blood for urgent investigations",
      "Administer emergency medications as prescribed",
      "Insert urinary catheter if indicated",
      "Insert nasogastric tube if indicated",
      "Prepare for possible intubation",
      "Obtain focused history from parents",
      "Provide emotional support to family",
      "Complete essential admission documentation",
      "Transfer to ICU/PICU when stable"
    ],
    precautions: [
      "Use standard precautions throughout",
      "Verify identity before any procedure",
      "Calculate medication doses carefully",
      "Monitor for complications continuously"
    ],
    preparation: [
      "Prepare resuscitation area/equipment",
      "Ensure all emergency equipment is functional",
      "Alert relevant team members",
      "Prepare isolation if infectious disease suspected"
    ],
    afterCare: [
      "Continue close monitoring",
      "Reassess frequently",
      "Update family on condition",
      "Ensure all lines and tubes are secure"
    ],
    documentation: [
      "Record time of arrival and initial condition",
      "Document all interventions with times",
      "Record vital signs and monitoring data",
      "Note medications administered with doses",
      "Document communication with family",
      "Complete admission forms when stable"
    ],
    patientEducation: [
      "Provide simple explanations to child if conscious",
      "Keep family informed of procedures",
      "Explain equipment and monitors",
      "Address family questions when possible"
    ],
    nursingConsiderations: [
      "Prioritize interventions based on urgency",
      "Delegate tasks appropriately",
      "Maintain calm demeanor to reduce family anxiety",
      "Consider need for interpreter services"
    ],
    quizFacts: {
      indication: "ADMISSION OF A SERIOUSLY ILL CHILD is indicated when a critically ill child requires urgent medical attention and intensive care.",
      preparation: "The nurse prepares resuscitation equipment, ensures functionality of emergency equipment, alerts team members, and prepares for isolation if needed.",
      equipment: "Required equipment includes crash cart, cardiac monitor, oxygen system, suction, IV supplies, emergency medications, and ventilator equipment.",
      sequence: "The nurse performs rapid ABCDE assessment, initiates resuscitation, establishes access, administers treatments, and stabilizes child.",
      safety: "The nurse uses standard precautions, verifies identity, double-checks medication calculations, and monitors continuously.",
      observation: "The nurse observes vital signs, oxygen saturation, neurological status, urine output, and response to interventions.",
      redFlag: "Deteriorating vital signs, cardiac arrhythmias, respiratory failure, or decreased consciousness require immediate intervention.",
      documentation: "Time of arrival, assessments, all interventions with times, medications, vital signs, and family communication are recorded.",
      education: "Family receives ongoing information about child's condition, procedures, and equipment in understandable terms.",
      escalation: "Any deterioration or complications are addressed immediately with team notification and additional interventions."
    }
  }),
  makePaedProcedure({
    id: "paed-005",
    title: "DEVELOPING INTERPERSONAL RELATIONSHIP WITH THE CHILD AND CAREGIVER/FAMILY (ESTABLISHING RAPPORT)",
    overview: "This is the intentional process of building trust and therapeutic relationship with a hospitalized child and their family.",
    purpose: [
      "Build trust with child and family",
      "Reduce anxiety and fear",
      "Facilitate cooperation with care",
      "Promote open communication",
      "Create supportive environment"
    ],
    indications: ["All interactions with hospitalized children and families"],
    equipment: [
      "Age-appropriate toys or books",
      "Comfort items if available",
      "Private space for conversation",
      "Visual aids if needed"
    ],
    steps: [
      "Approach child at eye level",
      "Introduce self using name and role",
      "Use child's preferred name",
      "Speak in age-appropriate language",
      "Allow child to express feelings",
      "Listen actively to concerns",
      "Validate child's emotions",
      "Include family in conversations",
      "Respect cultural practices",
      "Be honest about procedures",
      "Keep promises made",
      "Spend time with child beyond care tasks",
      "Use play to connect with younger children",
      "Respect adolescent's need for privacy",
      "Maintain consistency in caregivers when possible"
    ],
    precautions: [
      "Avoid false reassurances",
      "Respect boundaries",
      "Maintain professional role",
      "Be culturally sensitive"
    ],
    preparation: [
      "Learn child's name and preferences",
      "Review family situation",
      "Plan unhurried interaction time",
      "Prepare age-appropriate materials"
    ],
    afterCare: [
      "Follow up on concerns expressed",
      "Continue building relationship daily",
      "Update care team on family needs",
      "Evaluate effectiveness of approach"
    ],
    documentation: [
      "Document child's coping style",
      "Note family dynamics and concerns",
      "Record effective communication strategies",
      "Track relationship development"
    ],
    patientEducation: [
      "Explain roles of healthcare team",
      "Encourage expression of needs",
      "Teach how to ask questions",
      "Promote family participation in care"
    ],
    nursingConsiderations: [
      "Adjust approach based on developmental stage",
      "Consider previous healthcare experiences",
      "Recognize signs of trauma",
      "Involve child life specialist if available"
    ],
    quizFacts: {
      indication: "DEVELOPING INTERPERSONAL RELATIONSHIP is indicated in all interactions with hospitalized children and families to facilitate quality care.",
      preparation: "The nurse learns about the child and family, plans dedicated interaction time, and prepares appropriate communication tools.",
      equipment: "Helpful items include age-appropriate toys, books, comfort items, private space, and visual aids.",
      sequence: "The nurse introduces self, uses child's name, communicates at appropriate level, listens actively, and builds trust over time.",
      safety: "The nurse maintains professional boundaries, avoids false reassurances, and respects cultural and personal boundaries.",
      observation: "The nurse observes child's responses, family dynamics, signs of anxiety, and effectiveness of communication approaches.",
      redFlag: "Signs of severe anxiety, withdrawal, aggression, or family dysfunction may require additional support or referral.",
      documentation: "Coping styles, family concerns, effective strategies, and relationship progress are documented.",
      education: "Child and family learn about the healthcare team, how to communicate needs, and importance of participation.",
      escalation: "Severe psychological distress, family crisis, or safeguarding concerns are escalated appropriately."
    }
  }),
  makePaedProcedure({
    id: "paed-006",
    title: "EXPLANATION OF PROCEDURE TO A CHILD/FAMILY/CAREGIVER",
    overview: "This is the process of providing clear, age-appropriate information about medical procedures to children and their families.",
    purpose: [
      "Reduce anxiety through preparation",
      "Obtain informed consent/assent",
      "Promote cooperation",
      "Build trust",
      "Empower child and family"
    ],
    indications: ["Before any diagnostic or therapeutic procedure"],
    equipment: [
      "Age-appropriate explanation materials",
      "Pictures or diagrams",
      "Models or dolls for demonstration",
      "Written information sheets",
      "Interpreter services if needed"
    ],
    steps: [
      "Assess child's developmental level",
      "Determine what child/family already knows",
      "Choose appropriate timing",
      "Create private, quiet environment",
      "Use simple, clear language",
      "Explain what will happen step by step",
      "Describe sensations child may feel",
      "Explain purpose of procedure",
      "Show equipment if helpful",
      "Demonstrate on doll if appropriate",
      "Allow child to handle safe equipment",
      "Encourage questions",
      "Answer honestly",
      "Correct misconceptions",
      "Explain parent's role during procedure",
      "Reinforce key points"
    ],
    precautions: [
      "Avoid medical jargon",
      "Do not lie about pain",
      "Respect cultural beliefs",
      "Allow time for processing information"
    ],
    preparation: [
      "Know the procedure thoroughly",
      "Prepare appropriate teaching materials",
      "Arrange for interpreter if needed",
      "Plan timing relative to procedure"
    ],
    afterCare: [
      "Assess understanding",
      "Provide written reinforcement",
      "Answer additional questions",
      "Remind of key points before procedure"
    ],
    documentation: [
      "Document explanation provided",
      "Record questions asked",
      "Note level of understanding",
      "Record consent/assent obtained"
    ],
    patientEducation: [
      "Provide written materials",
      "Suggest questions to ask physician",
      "Explain what to expect after procedure",
      "Discuss coping strategies"
    ],
    nursingConsiderations: [
      "Tailor explanation to developmental stage",
      "Consider previous traumatic experiences",
      "Include siblings if appropriate",
      "Recognize signs of misunderstanding"
    ],
    quizFacts: {
      indication: "EXPLANATION OF PROCEDURE is indicated before any diagnostic or therapeutic procedure involving a child.",
      preparation: "The nurse prepares by learning the procedure details, gathering teaching materials, and planning appropriate timing.",
      equipment: "Helpful equipment includes pictures, diagrams, models, dolls, written materials, and interpreter services.",
      sequence: "The nurse assesses developmental level, explains in simple terms, demonstrates if helpful, encourages questions, and verifies understanding.",
      safety: "The nurse provides honest information, avoids false reassurances, and respects cultural beliefs and individual needs.",
      observation: "The nurse observes child's and family's understanding, anxiety level, and readiness for the procedure.",
      redFlag: "Severe anxiety, misunderstanding, refusal, or language barriers require additional intervention before proceeding.",
      documentation: "Explanation content, questions, understanding level, and consent/assent status are documented.",
      education: "Child and family receive verbal and written information about the procedure, sensations, and coping strategies.",
      escalation: "Inability to obtain understanding or consent, or severe distress, requires discussion with healthcare team."
    }
  }),
  makePaedProcedure({
    id: "paed-007",
    title: "RESPONDING TO CHILDHOOD EMERGENCIES: BITES AND STINGS",
    overview: "This is the immediate management of insect bites, animal bites, and stings in children.",
    purpose: [
      "Remove stinger if present",
      "Clean and treat wound",
      "Manage pain and swelling",
      "Prevent infection",
      "Monitor for allergic reactions",
      "Prevent tetanus"
    ],
    indications: ["Child presenting with insect/animal bite or sting"],
    equipment: [
      "Gloves and PPE",
      "Tweezers or forceps",
      "Soap and water",
      "Antiseptic solution",
      "Cold compress",
      "Topical corticosteroids",
      "Antihistamines",
      "Epinephrine auto-injector (for anaphylaxis)",
      "Tetanus prophylaxis",
      "Wound dressing materials"
    ],
    steps: [
      "Ensure scene safety",
      "Put on gloves",
      "Remove child from source of bites/stings",
      "Remove stinger by scraping (not squeezing)",
      "Wash area with soap and water",
      "Apply cold compress",
      "Elevate affected limb",
      "Apply topical treatment",
      "Administer oral antihistamine if needed",
      "Administer pain relief",
      "Assess for signs of anaphylaxis",
      "Administer epinephrine if anaphylaxis present",
      "Update tetanus immunization if needed",
      "Apply sterile dressing if wound present",
      "Monitor for infection",
      "Educate on prevention"
    ],
    precautions: [
      "Watch for signs of anaphylaxis",
      "Do not squeeze venom sacs",
      "Monitor for infection",
      "Consider rabies risk with animal bites"
    ],
    preparation: [
      "Prepare emergency equipment",
      "Have epinephrine readily available",
      "Assess allergy history"
    ],
    afterCare: [
      "Monitor site for 24-48 hours",
      "Watch for delayed reactions",
      "Ensure follow-up if needed",
      "Provide wound care instructions"
    ],
    documentation: [
      "Type and location of bite/sting",
      "Time of incident",
      "Treatment provided",
      "Child's response",
      "Tetanus status",
      "Education given"
    ],
    patientEducation: [
      "Teach avoidance strategies",
      "Explain signs of infection",
      "Describe allergic reaction symptoms",
      "Demonstrate epinephrine use if prescribed"
    ],
    nursingConsiderations: [
      "Assess for multiple stings",
      "Consider age-appropriate pain management",
      "Evaluate need for reporting animal bites",
      "Address child's fears"
    ],
    quizFacts: {
      indication: "RESPONDING TO CHILDHOOD EMERGENCIES: BITES AND STINGS is indicated when a child presents with insect or animal bites/stings.",
      preparation: "The nurse prepares PPE, removal tools, cleaning supplies, medications, and emergency equipment for anaphylaxis.",
      equipment: "Required equipment includes tweezers, soap, antiseptic, cold compress, antihistamines, epinephrine, and dressing materials.",
      sequence: "The nurse removes stinger safely, cleans wound, applies cold compress, administers medications, and monitors for reactions.",
      safety: "The nurse watches for anaphylaxis, avoids squeezing venom sacs, and considers tetanus and rabies prophylaxis.",
      observation: "The nurse observes for local reactions, systemic symptoms, signs of anaphylaxis, and developing infection.",
      redFlag: "Difficulty breathing, swelling of face/throat, widespread hives, or altered consciousness indicate anaphylaxis requiring epinephrine.",
      documentation: "Incident details, treatment, response, tetanus status, and education provided are documented.",
      education: "Family learns prevention, recognition of infection and allergic reactions, and epinephrine administration if prescribed.",
      escalation: "Anaphylaxis, severe reactions, or high-risk animal bites require immediate medical intervention and possible referral."
    }
  }),
  makePaedProcedure({
    id: "paed-008",
    title: "RESPONDING TO CHILDHOOD EMERGENCIES: POISONING",
    overview: "This is the immediate assessment and management of a child who has ingested, inhaled, or been exposed to toxic substances.",
    purpose: [
      "Ensure airway, breathing, circulation",
      "Prevent further absorption of poison",
      "Enhance elimination if indicated",
      "Administer antidotes when available",
      "Provide supportive care",
      "Prevent future incidents"
    ],
    indications: ["Known or suspected poisoning in a child"],
    equipment: [
      "Resuscitation equipment",
      "Oxygen and suction",
      "IV cannula and fluids",
      "Activated charcoal",
      "Specific antidotes",
      "Toxicology screening kits",
      "Gastric lavage equipment (if indicated)",
      "Poison control center contact"
    ],
    steps: [
      "Assess ABCs immediately",
      "Remove child from exposure source",
      "Remove contaminated clothing",
      "Flush skin/eyes with water if dermal/ocular exposure",
      "Establish IV access",
      "Obtain history: substance, amount, time, route",
      "Bring container/package to hospital",
      "Perform physical examination",
      "Contact poison control center",
      "Obtain toxicology samples if ordered",
      "Administer activated charcoal if indicated",
      "Administer specific antidote if available",
      "Consider gastric lavage only if indicated",
      "Provide supportive care",
      "Monitor vital signs continuously",
      "Observe for delayed effects"
    ],
    precautions: [
      "Do not induce vomiting unless directed",
      "Protect self from contamination",
      "Verify substance before treatment",
      "Monitor for delayed toxicity"
    ],
    preparation: [
      "Prepare resuscitation equipment",
      "Have activated charcoal ready",
      "Know location of antidotes",
      "Have poison control number available"
    ],
    afterCare: [
      "Continue monitoring",
      "Assess for complications",
      "Provide psychological support",
      "Arrange follow-up"
    ],
    documentation: [
      "Substance involved (bring container)",
      "Amount and time of exposure",
      "Route of exposure",
      "Symptoms and timeline",
      "All interventions with times",
      "Response to treatment",
      "Poison control recommendations"
    ],
    patientEducation: [
      "Teach poison prevention",
      "Explain safe storage of substances",
      "Provide poison control number",
      "Discuss supervision requirements"
    ],
    nursingConsiderations: [
      "Consider possibility of non-accidental ingestion",
      "Assess home safety",
      "Address parental guilt sensitively",
      "Report intentional poisoning if suspected"
    ],
    quizFacts: {
      indication: "RESPONDING TO CHILDHOOD EMERGENCIES: POISONING is indicated when a child has known or suspected exposure to toxic substances.",
      preparation: "The nurse prepares resuscitation equipment, activated charcoal, antidotes, and contacts poison control center.",
      equipment: "Required equipment includes oxygen, IV supplies, activated charcoal, specific antidotes, and toxicology collection kits.",
      sequence: "The nurse ensures ABCs, removes from exposure, decontaminates, obtains history, contacts poison control, and administers treatment.",
      safety: "The nurse avoids inducing vomiting unless directed, protects self from contamination, and verifies substance before treatment.",
      observation: "The nurse observes vital signs, neurological status, respiratory function, and signs of specific toxin effects.",
      redFlag: "Altered consciousness, respiratory depression, cardiac arrhythmias, or seizures require immediate intervention.",
      documentation: "Substance details, exposure circumstances, symptoms, treatments, poison control advice, and response are documented.",
      education: "Family receives education on poison prevention, safe storage, emergency numbers, and supervision.",
      escalation: "Severe toxicity, unknown substances, or need for specialized care requires consultation and possible transfer."
    }
  }),
  makePaedProcedure({
    id: "paed-009",
    title: "CHECKING OF BLOOD SUGAR (GLUCOSE) OF A CHILD",
    overview: "This is the procedure for measuring capillary blood glucose levels in children using a glucometer.",
    purpose: [
      "Monitor blood glucose levels",
      "Detect hypoglycemia or hyperglycemia",
      "Guide diabetes management",
      "Screen for glucose abnormalities",
      "Evaluate treatment effectiveness"
    ],
    indications: [
      "Known diabetes",
      "Suspected hypoglycemia/hyperglycemia",
      "Altered consciousness",
      "Seizures",
      "Poor feeding in infants",
      "Critical illness"
    ],
    equipment: [
      "Glucometer and test strips",
      "Lancet device",
      "Sterile lancets",
      "Gloves",
      "Alcohol swabs",
      "Gauze pads",
      "Sharps container",
      "Log book for recording"
    ],
    steps: [
      "Verify physician order if required",
      "Explain procedure to child and family",
      "Perform hand hygiene",
      "Put on gloves",
      "Select puncture site (side of fingertip, heel for infants)",
      "Clean site with alcohol and allow to dry",
      "Insert test strip into glucometer",
      "Wait for indicator signal",
      "Puncture skin with lancet",
      "Wipe away first drop of blood",
      "Touch second drop to test strip",
      "Wait for reading",
      "Apply pressure with gauze",
      "Dispose of lancet in sharps container",
      "Record result",
      "Report abnormal values"
    ],
    precautions: [
      "Use correct test strips for meter",
      "Ensure hands are clean and dry",
      "Do not share lancets",
      "Follow infection control protocols",
      "Verify extreme results"
    ],
    preparation: [
      "Ensure glucometer is calibrated",
      "Check expiration of test strips",
      "Gather all equipment",
      "Select appropriate lancet size"
    ],
    afterCare: [
      "Ensure bleeding has stopped",
      "Comfort child",
      "Provide snack if hypoglycemic",
      "Document and report results"
    ],
    documentation: [
      "Date and time of test",
      "Blood glucose value",
      "Site used",
      "Relation to meals/medications",
      "Symptoms if present",
      "Actions taken for abnormal results"
    ],
    patientEducation: [
      "Teach self-monitoring if appropriate",
      "Explain target ranges",
      "Demonstrate technique",
      "Discuss factors affecting readings"
    ],
    nursingConsiderations: [
      "Rotate puncture sites",
      "Consider pain management",
      "Use smallest effective lancet",
      "Involve child in care when appropriate"
    ],
    quizFacts: {
      indication: "CHECKING OF BLOOD SUGAR is indicated for diabetes monitoring, suspected glucose abnormalities, altered consciousness, or critical illness.",
      preparation: "The nurse ensures glucometer calibration, checks strip expiration, gathers equipment, and selects appropriate lancet.",
      equipment: "Required equipment includes glucometer, test strips, lancet device, sterile lancets, alcohol swabs, and gauze.",
      sequence: "The nurse cleans site, inserts strip, obtains blood drop, applies to strip, reads result, and documents.",
      safety: "The nurse uses proper infection control, does not share lancets, disposes safely, and verifies extreme readings.",
      observation: "The nurse observes for signs of hypo/hyperglycemia and correlates readings with clinical presentation.",
      redFlag: "Very low (<50 mg/dL) or very high (>400 mg/dL) readings require immediate intervention and verification.",
      documentation: "Time, value, site, relation to meals/meds, symptoms, and actions taken are documented.",
      education: "Child and family learn self-monitoring technique, target ranges, and factors affecting glucose.",
      escalation: "Severe hypo/hyperglycemia or symptomatic abnormalities require immediate medical intervention."
    }
  }),
  makePaedProcedure({
    id: "paed-010",
    title: "NEBULIZING A CHILD WITH SIMPLE FACE MASK",
    overview: "This is the administration of aerosolized medication to a child using a nebulizer with a face mask.",
    purpose: [
      "Deliver bronchodilators to airways",
      "Administer anti-inflammatory medications",
      "Moisten airway secretions",
      "Relieve bronchospasm",
      "Improve breathing"
    ],
    indications: [
      "Asthma exacerbation",
      "Bronchiolitis",
      "Croup",
      "Chronic lung disease",
      "Cystic fibrosis"
    ],
    equipment: [
      "Nebulizer machine",
      "Nebulizer cup/chamber",
      "Appropriate face mask (pediatric size)",
      "Tubing",
      "Prescribed medication",
      "Normal saline",
      "Oxygen source if needed",
      "Timer"
    ],
    steps: [
      "Verify medication order",
      "Explain procedure to child and family",
      "Perform hand hygiene",
      "Assemble nebulizer equipment",
      "Add prescribed medication to nebulizer cup",
      "Add normal saline if required to achieve 3-5ml total volume",
      "Connect tubing to compressor",
      "Select appropriate sized mask",
      "Position child comfortably (upright if possible)",
      "Place mask securely over nose and mouth",
      "Turn on compressor",
      "Observe for mist production",
      "Encourage slow deep breaths",
      "Tap cup periodically to ensure full medication delivery",
      "Continue until medication is nebulized (usually 10-15 minutes)",
      "Turn off compressor",
      "Remove mask",
      "Assist child to rinse mouth if steroid used",
      "Clean equipment after use"
    ],
    precautions: [
      "Verify medication and dose",
      "Ensure proper mask fit",
      "Monitor for adverse reactions",
      "Clean equipment between uses",
      "Watch for paradoxical bronchospasm"
    ],
    preparation: [
      "Check medication order",
      "Prepare medication in nebulizer cup",
      "Ensure equipment is functioning",
      "Position child appropriately"
    ],
    afterCare: [
      "Assess respiratory status",
      "Monitor for improvement",
      "Document response",
      "Clean and store equipment"
    ],
    documentation: [
      "Medication and dose administered",
      "Duration of treatment",
      "Child's tolerance",
      "Pre and post-treatment assessment",
      "Any adverse reactions"
    ],
    patientEducation: [
      "Teach proper nebulizer use",
      "Demonstrate cleaning technique",
      "Explain medication purpose",
      "Discuss recognizing improvement/worsening"
    ],
    nursingConsiderations: [
      "Use distraction techniques for anxious children",
      "Allow parent to hold infant/toddler",
      "Consider timing with feedings",
      "Assess need for oxygen addition"
    ],
    quizFacts: {
      indication: "NEBULIZING A CHILD is indicated for asthma, bronchiolitis, croup, and other conditions requiring aerosolized medication delivery.",
      preparation: "The nurse verifies order, prepares medication in nebulizer cup, assembles equipment, and positions child.",
      equipment: "Required equipment includes nebulizer machine, cup, pediatric mask, tubing, prescribed medication, and normal saline.",
      sequence: "The nurse adds medication, connects equipment, places mask, runs nebulizer until complete, and assesses response.",
      safety: "The nurse verifies medication/dose, ensures proper fit, monitors for reactions, and cleans equipment properly.",
      observation: "The nurse observes breathing pattern, oxygen saturation, medication delivery, and child's tolerance.",
      redFlag: "Paradoxical bronchospasm, severe distress, cyanosis, or inability to tolerate mask require immediate intervention.",
      documentation: "Medication, dose, duration, tolerance, and pre/post respiratory assessment are documented.",
      education: "Family learns nebulizer assembly, medication administration, cleaning, and recognition of response.",
      escalation: "Worsening respiratory status or severe adverse reactions require immediate medical review."
    }
  })
];
