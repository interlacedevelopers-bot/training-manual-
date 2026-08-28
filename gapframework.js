// ═══════════════════════════════════════════════════════════════════
// INTERLACE STUDIES — GAP ANALYSIS FRAMEWORK
// Source: GAP_Analysis_Framework.pdf / GAP_Analysis_Framework_for_Interlace_Studies.pptx
// Completed twice a year by the team leader/admin for each employee.
// ═══════════════════════════════════════════════════════════════════

const GAP_TARGET_SCORE = 8; // "Advanced" benchmark (7-9 band) — the framework's
                             // desired proficiency level for competent, independent performance.

const GAP_SCORE_BANDS = [
  { min: 1, max: 3, label: 'Beginner', desc: 'Significant development needed. Limited understanding or application of the skill.' },
  { min: 4, max: 6, label: 'Intermediate', desc: 'Moderate proficiency. Can perform related tasks but may need guidance or make occasional errors.' },
  { min: 7, max: 9, label: 'Advanced', desc: 'High proficiency. Consistently strong, accurate, and efficient; handles complex situations.' },
  { min: 10, max: 10, label: 'Expert', desc: 'Exceptional proficiency. Subject matter expert who can mentor others and innovate best practices.' },
];

const GAP_FRAMEWORK = {
  'International Education Counsellor': {
    overview: 'Primary point of contact for prospective students seeking higher education abroad — guides them from initial inquiry through course selection, application submission, and pre-departure briefing.',
    skills: [
      { name: 'Communication Skills (Verbal & Written)', importance: 'High', description: 'Articulates complex information clearly to students, parents, and university representatives; active listening and professional correspondence.' },
      { name: 'Counselling Expertise', importance: 'High', description: 'Provides educational guidance, assesses student needs, and manages an application caseload effectively.' },
      { name: 'Organizational Skills & Application Management', importance: 'High', description: 'Uses CRM/application systems accurately to track applications, records, and deadlines.' },
      { name: 'Cultural Sensitivity & Cross-Cultural Communication', importance: 'High', description: 'Understands and respects diverse cultural backgrounds and communication styles.' },
      { name: 'Analytical Thinking & Problem-Solving', importance: 'Medium', description: 'Researches, evaluates information, and resolves application issues or unforeseen challenges.' },
      { name: 'Knowledge of Visa Processes & Regulations', importance: 'High', description: 'Understands visa procedures and documentation requirements, and stays current on policy changes.' },
    ]
  },
  'Documentation Officer': {
    overview: 'Ensures the accuracy, completeness, and authenticity of all documents submitted for migration and university applications.',
    skills: [
      { name: 'Document Verification & Authenticity', importance: 'High', description: 'Examines documents for accuracy, completeness, and authenticity; identifies fraudulent documents.' },
      { name: 'Attention to Detail & Accuracy', importance: 'High', description: 'Precision and thoroughness in handling all paperwork; prevents omissions or errors.' },
      { name: 'Knowledge of Immigration Law & Regulations', importance: 'High', description: 'Understands the legal framework governing immigration and visa documentation requirements.' },
      { name: 'Organizational & Case Management Skills', importance: 'High', description: 'Systematically collects, categorises, stores, and retrieves large volumes of documents.' },
      { name: 'Communication & Interpersonal Skills', importance: 'Medium', description: 'Communicates clearly with clients, colleagues, and external agencies about documentation requirements.' },
      { name: 'Computer Proficiency (MS Office & Databases)', importance: 'High', description: 'Competent in MS Office and database systems for record-keeping and correspondence.' },
    ]
  },
  'Migration Assistant': {
    overview: 'Provides administrative and client support to the migration team, focusing on visa applications and related processes.',
    skills: [
      { name: 'Administrative & Application Processing', importance: 'High', description: 'Assists with preparation, processing, and submission of visa applications; data entry and document collation.' },
      { name: 'Organizational Skills & Record Keeping', importance: 'High', description: 'Manages client files, maintains accurate records, and tracks multiple applications simultaneously.' },
      { name: 'Communication Skills & Client Management', importance: 'High', description: 'Interacts with clients, provides updates, and addresses inquiries clearly and professionally.' },
      { name: 'Knowledge of Immigration Processes & Visa Types', importance: 'Medium', description: 'Foundational understanding of immigration processes and visa categories, and where to find information.' },
      { name: 'Computer Proficiency (MS Office)', importance: 'High', description: 'Proficient in MS Office for document preparation, spreadsheets, and communication.' },
      { name: 'Problem-Solving & Adaptability', importance: 'Medium', description: 'Learns quickly, adapts to new information or changing regulations, and resolves minor issues independently.' },
    ]
  },
};

function gapScoreBand(score) {
  return GAP_SCORE_BANDS.find(b => score >= b.min && score <= b.max) || GAP_SCORE_BANDS[0];
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GAP_FRAMEWORK, GAP_TARGET_SCORE, GAP_SCORE_BANDS, gapScoreBand };
}
