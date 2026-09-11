import re
import html

content = open('/tmp/pm_procedures.html').read()
proc_ids = ['316', '317', '318', '319', '320', '321', '322', '323', '324']

def extract_section(proc_content, section_title):
    pattern = rf'<h3>{section_title}</h3>(.*?)(?:<h3>|<!--|<div class="modal")'
    match = re.search(pattern, proc_content, re.DOTALL)
    return match.group(1) if match else None

def extract_list_items(html_content):
    if not html_content:
        return []
    ol_match = re.search(r'<ol>(.*?)</ol>', html_content, re.DOTALL)
    if not ol_match:
        return []
    items = []
    ol_content = ol_match.group(1)
    parts = re.split(r'</li>\s*', ol_content)
    for part in parts:
        if not part.strip():
            continue
        clean = re.sub(r'<ol[^>]*>.*?</ol>', '', part, flags=re.DOTALL)
        clean = re.sub(r'<ul[^>]*>.*?</ul>', '', clean, flags=re.DOTALL)
        clean = re.sub(r'<[^>]+>', '', clean).strip()
        clean = html.unescape(clean)
        if clean and clean != 'N/A':
            items.append(clean)
    return items

def extract_nested_list_items(html_content):
    if not html_content:
        return []
    ol_match = re.search(r'<ol>(.*?)</ol>', html_content, re.DOTALL)
    if not ol_match:
        return []
    items = []
    ol_content = ol_match.group(1)
    for match in re.finditer(r'<li>(.*?)</li>', ol_content, re.DOTALL):
        item_html = match.group(1)
        nested = re.search(r'<ol[^>]*>(.*?)</ol>', item_html, re.DOTALL)
        if nested:
            text_before = re.sub(r'<ol.*', '', item_html, flags=re.DOTALL)
            text_before = re.sub(r'<[^>]+>', '', text_before).strip()
            text_before = html.unescape(text_before)
            if text_before:
                items.append(text_before)
            nested_items = re.findall(r'<li>(.*?)</li>', nested.group(1), re.DOTALL)
            for ni in nested_items:
                ni_clean = re.sub(r'<[^>]+>', '', ni).strip()
                ni_clean = html.unescape(ni_clean)
                if ni_clean:
                    items.append(ni_clean)
        else:
            clean = re.sub(r'<[^>]+>', '', item_html).strip()
            clean = html.unescape(clean)
            if clean and clean != 'N/A':
                items.append(clean)
    return items

procedures = []

for proc_id in proc_ids:
    collapse_start = content.find(f'id="collapse{proc_id}"')
    if collapse_start == -1:
        continue
    next_item = content.find('<div class="accordion-item"', collapse_start + 1)
    proc_content = content[collapse_start:next_item] if next_item != -1 else content[collapse_start:]
    
    title_match = re.search(rf'id="heading{proc_id}".*?<span>([^<]+)<div', content, re.DOTALL)
    title = title_match.group(1).strip() if title_match else "Unknown"
    
    desc_match = re.search(rf'id="heading{proc_id}".*?type="button"[^>]*title="([^"]+)"', content, re.DOTALL)
    overview = html.unescape(desc_match.group(1)) if desc_match else ""
    
    aims_html = extract_section(proc_content, 'AIMS')
    purpose = extract_list_items(aims_html)
    
    types_html = extract_section(proc_content, 'TYPES')
    indications = extract_list_items(types_html)
    if not indications:
        indications = ['Patient experiencing pain requiring management']
    
    req_match = re.search(rf'id="requirements{proc_id}".*?<div class="modal-body">(.*?)</div>', proc_content, re.DOTALL)
    equipment = extract_nested_list_items(req_match.group(1)) if req_match else []
    
    principles_html = extract_section(proc_content, 'PRINCIPLES OF PAIN MANAGEMENT')
    precautions = extract_nested_list_items(principles_html) if principles_html else []
    
    steps_match = re.search(rf'id="staticBackdrop{proc_id}".*?<div class="modal-body">(.*?)</div>', proc_content, re.DOTALL)
    steps = extract_nested_list_items(steps_match.group(1)) if steps_match else []
    steps = [s for s in steps if s and not s.startswith('\\n')]
    
    procedures.append({
        'id': f'pm-{int(proc_id) - 315:03d}',
        'title': title,
        'overview': overview,
        'purpose': purpose,
        'indications': indications,
        'equipment': equipment,
        'steps': steps,
        'precautions': precautions
    })

# Generate TypeScript file with all procedures in one batch
def ts_escape(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '')

def ts_array(items, indent=6):
    pad = ' ' * indent
    return "\n".join([f'{pad}"{ts_escape(str(i))}",' for i in items])

output = '''import type { Procedure } from "../../procedureTypes";

export const pmBatch01: Procedure[] = [
'''

for proc in procedures:
    quiz = [
        {
            'q': f"What is the primary focus of '{proc['title']}'?",
            'o': [proc['overview'], 'A unrelated procedure', 'A diagnostic test only', 'A surgical intervention'],
            'a': proc['overview']
        },
        {
            'q': 'What is a key purpose of this pain management procedure?',
            'o': [proc['purpose'][0] if proc['purpose'] else 'Assess pain', 'To delay patient discharge', 'To increase patient discomfort', 'To avoid documentation'],
            'a': proc['purpose'][0] if proc['purpose'] else 'Assess pain'
        },
        {
            'q': 'What should be done first when implementing this procedure?',
            'o': [proc['steps'][0] if proc['steps'] else 'Establish rapport', 'Skip assessment', 'Ignore patient concerns', 'Document without acting'],
            'a': proc['steps'][0] if proc['steps'] else 'Establish rapport'
        },
        {
            'q': 'When should hand hygiene be performed during this procedure?',
            'o': ['At the five moments as required', 'Only at the end', 'Only before eating', 'Hand hygiene is not necessary'],
            'a': 'At the five moments as required'
        },
        {
            'q': 'How should pain be assessed according to NMC guidelines?',
            'o': ['Using validated pain scales appropriate to the patient', 'By guessing the pain level', 'Only when the patient complains loudly', 'Pain assessment is not required'],
            'a': 'Using validated pain scales appropriate to the patient'
        },
        {
            'q': 'Which item is required for this procedure?',
            'o': [proc['equipment'][0] if proc['equipment'] else 'Patient folder', 'Unrelated equipment', 'No equipment needed', 'Only personal items'],
            'a': proc['equipment'][0] if proc['equipment'] else 'Patient folder'
        },
        {
            'q': 'What must be observed when administering pain medication?',
            'o': ['The rights of medication administration', 'Only the dose', 'Only the patient name', 'Medication can be given without checking'],
            'a': 'The rights of medication administration'
        },
        {
            'q': 'Why is documentation important in pain management?',
            'o': ['To record care provided and patient response', 'Documentation is optional', 'To fill paperwork only', 'To delay patient care'],
            'a': 'To record care provided and patient response'
        },
        {
            'q': 'What role do non-pharmacological methods play in pain management?',
            'o': ['They are used as adjuncts to analgesic administration', 'They replace all medications', 'They are never used', 'They are only for children'],
            'a': 'They are used as adjuncts to analgesic administration'
        },
        {
            'q': 'How should patients be involved in their pain management?',
            'o': ['As active participants in decision making', 'Patients should not be involved', 'Only family members make decisions', 'Patients should not report pain'],
            'a': 'As active participants in decision making'
        }
    ]
    
    quiz_ts = ""
    for q in quiz:
        quiz_ts += f'''      {{
        question: "{ts_escape(q['q'])}",
        options: ["{ts_escape(q['o'][0])}", "{ts_escape(q['o'][1])}", "{ts_escape(q['o'][2])}", "{ts_escape(q['o'][3])}"],
        answer: "{ts_escape(q['a'])}"
      }},
'''
    
    output += f'''  {{
    id: "{proc['id']}",
    title: "{ts_escape(proc['title'])}",
    category: "Pain Management (PM)",
    overview: "{ts_escape(proc['overview'])}",
    purpose: [
{ts_array(proc['purpose'], 6)}
    ],
    indications: [
{ts_array(proc['indications'], 6)}
    ],
    equipment: [
{ts_array(proc['equipment'], 6)}
    ],
    steps: [
{ts_array(proc['steps'], 6)}
    ],
    precautions: [
{ts_array(proc['precautions'], 6)}
    ],
    references: [
      {{
        title: "Nursing and Midwifery Council of Ghana: Pain Management Procedures",
        url: "https://nmc.gov.gh/procedures/view/PM"
      }}
    ],
    quiz: [
{quiz_ts}    ]
  }},
'''

output += '''];
'''

with open('/workspace/web/src/data/procedureData/pmBatches/pmBatch01.ts', 'w') as f:
    f.write(output)

print(f"Generated pmBatch01.ts with {len(procedures)} procedures")
for p in procedures:
    print(f"  {p['id']}: {p['title'][:50]}...")
