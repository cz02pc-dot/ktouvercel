const pageKey = document.body.dataset.page || "home";
const pageContentHost = document.querySelector("[data-page-content]");
const progressBar = document.getElementById("readingProgress");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

const pageBlueprints = {
  home: {
    name: "Homepage Strategy",
    topic: "Kruti Dev to Unicode conversion and Hindi publishing standards",
    audience: "bloggers, data-entry operators, educators, publishers, and office documentation teams",
    pain: "legacy text often appears readable in one editor but breaks in another environment",
    workflow: "collect source text, convert responsibly, proofread, validate on multiple devices, and publish",
    output: "stable Unicode Hindi text that remains searchable, reusable, and visually consistent",
    typography: "font selection, line-height balance, and readable heading hierarchy for Devanagari",
    validation: "cross-editor checks, copy-paste verification, and final proofreading discipline",
    seo: "indexable Unicode text, clear metadata, and structured internal linking",
    governance: "lightweight but documented team standards for repeat quality",
    migration: "phased migration from legacy templates to Unicode-first production assets",
    risk: "hidden glyph errors, accidental mixed encoding, and unreviewed publishing"
  },
  about: {
    name: "About and Expertise",
    topic: "the mission and editorial approach behind a Kruti Dev to Unicode companion website",
    audience: "teams that need trusted guidance in addition to conversion tools",
    pain: "many users inherit old workflows and do not know why text behavior changes between systems",
    workflow: "educate users, define practical standards, and support decision-making after conversion",
    output: "better confidence, fewer repetitive mistakes, and clearer publishing practices",
    typography: "reader-first typography that respects long Hindi passages and multilingual contexts",
    validation: "transparent recommendations, practical examples, and testable checklists",
    seo: "authoritative long-form pages that answer specific user intent",
    governance: "experience-led content standards and careful page maintenance",
    migration: "turning tool-dependent habits into process-driven publishing workflows",
    risk: "users trust short answers and skip context, resulting in repeated errors"
  },
  guide: {
    name: "Technical Conversion Guide",
    topic: "step-by-step Kruti Dev to Unicode conversion for reliable operational use",
    audience: "operators and administrators handling old Hindi files in active workflows",
    pain: "documents fail after conversion because post-conversion checks were skipped",
    workflow: "source cleanup, controlled conversion, character validation, and final deployment checks",
    output: "predictable Unicode files that can be searched, indexed, and edited safely",
    typography: "Unicode-ready Devanagari rendering rules and fallback handling",
    validation: "field-level audits, sample testing, and versioned checkpoints",
    seo: "clean Unicode structure that supports search engines and on-page readability",
    governance: "standard operating procedures and reviewer accountability",
    migration: "controlled replacement of legacy content pools",
    risk: "partial migration leaves mixed standards and long-term instability"
  },
  fontdownload: {
    name: "Kruti Dev Font Handling",
    topic: "how to download and use Kruti Dev fonts safely while planning Unicode migration",
    audience: "teams opening inherited legacy files and old desktop publishing projects",
    pain: "users mistake font installation for structural text conversion",
    workflow: "install for temporary readability, then convert and standardize to Unicode",
    output: "clear distinction between legacy display support and modern text standards",
    typography: "legacy font behavior awareness and compatibility boundaries",
    validation: "compare output before and after conversion, then lock Unicode baseline",
    seo: "legacy fonts alone do not produce indexable modern content",
    governance: "rules for when legacy fonts are allowed and when migration is mandatory",
    migration: "transition plans that reduce operational disruption",
    risk: "ongoing legacy font dependence blocks long-term quality"
  },
  mangal: {
    name: "Mangal Font Guide",
    topic: "Mangal as a practical Unicode font option for Hindi workflows",
    audience: "teams moving from legacy output to modern Unicode publishing",
    pain: "font inconsistency across devices and applications creates confidence gaps",
    workflow: "install Mangal, validate rendering, compare alternatives, and document usage",
    output: "stable Devanagari display in common office and web contexts",
    typography: "readability spacing, headline scale, and paragraph consistency",
    validation: "same-text tests across editors, browsers, and document exports",
    seo: "Unicode content plus proper metadata ensures better discoverability",
    governance: "approved font stack and usage policy for all contributors",
    migration: "replace unknown font dependencies with controlled Unicode standards",
    risk: "assuming one font solves every linguistic and layout issue"
  },
  typing: {
    name: "Hindi Typing Discipline",
    topic: "typing practices that keep Unicode Hindi content clean and production-ready",
    audience: "content writers, operators, editors, and publishing assistants",
    pain: "small typing inconsistencies create large proofreading and layout costs",
    workflow: "structured typing rules, checkpoint reviews, and clean handoff protocols",
    output: "readable Hindi content that survives copy, export, and web publishing",
    typography: "consistent paragraph rhythm and punctuation behavior",
    validation: "first-pass typing checks, second-pass editorial checks, and final QA",
    seo: "structured headings and clean Unicode improve index quality",
    governance: "typing conventions documented for every contributor",
    migration: "move from ad-hoc habits to shared writing standards",
    risk: "rushing typing stages and fixing errors late in production"
  },
  blog: {
    name: "Blog Hub",
    topic: "long-form educational writing for Kruti Dev, Unicode, fonts, and SEO",
    audience: "users who need context-rich guidance beyond quick tool usage",
    pain: "short snippets fail to solve workflow-level publishing problems",
    workflow: "publish deep guides, practical checklists, and repeatable troubleshooting playbooks",
    output: "trusted reference content that supports daily operations",
    typography: "article formatting for long reading sessions",
    validation: "fact-checked posts, practical examples, and update cadence",
    seo: "intent-specific articles with clear internal linking",
    governance: "editorial roadmap and quality review standards",
    migration: "use content education to drive behavior change",
    risk: "thin content creates confusion and weak authority"
  },
  contact: {
    name: "Contact and Support",
    topic: "support communication for conversion, typography, and publishing questions",
    audience: "users who need direct help with unique operational constraints",
    pain: "unclear support requests lead to delayed and low-quality answers",
    workflow: "collect context, classify issue type, and return action-based guidance",
    output: "faster resolutions and better future content planning",
    typography: "clear issue reporting with meaningful examples",
    validation: "structured support intake and reproducible test requests",
    seo: "support insights often become searchable help articles",
    governance: "response standards and escalation policy",
    migration: "support data informs future migration documentation",
    risk: "missing context turns fixable issues into repetitive loops"
  },
  privacy: {
    name: "Privacy Policy",
    topic: "privacy boundaries and transparency on a static educational website",
    audience: "visitors, contributors, and organizations reviewing compliance posture",
    pain: "vague privacy language undermines trust",
    workflow: "describe data touchpoints, state limits, and clarify responsibilities",
    output: "clear expectations and stronger user confidence",
    typography: "readable legal formatting for long pages",
    validation: "plain-language checks and periodic policy review",
    seo: "clear legal pages support credibility and site quality",
    governance: "policy ownership and update logging",
    migration: "align legal text with evolving operational practices",
    risk: "unclear privacy promises create avoidable disputes"
  },
  terms: {
    name: "Terms and Conditions",
    topic: "user responsibilities and usage boundaries for educational conversion guidance",
    audience: "all users applying content recommendations in real workflows",
    pain: "unclear terms create misuse and unrealistic expectations",
    workflow: "define scope, rights, limitations, and acceptable use",
    output: "fair boundaries for both publisher and user",
    typography: "legible legal structure with section-based clarity",
    validation: "consistency checks against current site behavior",
    seo: "legal trust signals complement authoritative content",
    governance: "version control and periodic legal review",
    migration: "adapt terms as workflows and page types expand",
    risk: "ambiguous terms increase legal and operational uncertainty"
  },
  disclaimer: {
    name: "Disclaimer",
    topic: "limits of automated conversion and the role of human review",
    audience: "users publishing personal, business, educational, or formal Hindi text",
    pain: "assuming conversion output is final without proofreading",
    workflow: "convert, inspect, validate context, and approve before release",
    output: "responsible use of tools and fewer publishing errors",
    typography: "clear warning language that remains readable",
    validation: "context-specific checks based on risk level",
    seo: "trustworthy disclaimers improve transparency signals",
    governance: "explicit risk communication on every high-impact page",
    migration: "use disclaimers to reinforce transition discipline",
    risk: "blind trust in automation leads to preventable mistakes"
  },
  blog1: {
    name: "Kruti Dev vs Unicode",
    topic: "the practical gap between glyph-mapped legacy typing and Unicode text standards",
    audience: "decision-makers comparing short-term fixes with long-term publishing stability",
    pain: "teams confuse visible text with structurally healthy text",
    workflow: "analyze source behavior, convert with controls, and enforce Unicode-first policy",
    output: "searchable, portable, and standards-aligned Hindi content",
    typography: "clean rendering independent of fragile legacy font mappings",
    validation: "before-after comparison with repeatable checks",
    seo: "Unicode content performs better in indexing and relevance matching",
    governance: "policy clarity for future content creation",
    migration: "move archives while preventing new legacy input",
    risk: "mixed standards create silent quality debt"
  },
  blog2: {
    name: "Mangal Installation Workflow",
    topic: "installing and validating Mangal for stable Unicode Hindi rendering",
    audience: "operations staff and content teams standardizing font environments",
    pain: "installing fonts without validation still leaves unpredictable output",
    workflow: "install, test sample sets, document behavior, and lock approved settings",
    output: "fewer layout surprises and cleaner publishing handoffs",
    typography: "consistent Devanagari appearance across platforms",
    validation: "multi-device, multi-editor, and export tests",
    seo: "rendering stability supports long-term content maintenance",
    governance: "defined font policy and escalation points",
    migration: "replace random font usage with approved stacks",
    risk: "unchecked font assumptions delay issue discovery"
  },
  blog3: {
    name: "Hindi Typing Mistakes",
    topic: "mistakes that increase rework in Unicode Hindi production",
    audience: "typists, reviewers, and managers handling frequent content updates",
    pain: "minor input errors multiply during layout and SEO stages",
    workflow: "apply typing conventions, run quick checks, and enforce review gates",
    output: "higher first-pass quality and lower correction cost",
    typography: "consistent text rhythm and punctuation behavior",
    validation: "mistake taxonomy and targeted correction routines",
    seo: "clean structure and headings improve crawl understanding",
    governance: "training and quality ownership per contributor",
    migration: "replace ad-hoc habits with repeatable standards",
    risk: "late-stage corrections reduce publishing velocity"
  },
  blog4: {
    name: "Unicode SEO Checklist",
    topic: "SEO discipline for Hindi content built on Unicode text",
    audience: "publishers, editors, and growth teams focused on organic reach",
    pain: "good content fails to rank because technical hygiene is ignored",
    workflow: "optimize metadata, semantic headings, internal links, and content clarity",
    output: "better indexation, relevance, and user retention",
    typography: "scan-friendly structure for long Hindi pages",
    validation: "page-level checklist before publication",
    seo: "keyword intent alignment plus technical consistency",
    governance: "SEO review integrated into editorial workflow",
    migration: "modernize old pages for Unicode-first indexing",
    risk: "inconsistent optimization causes unstable performance"
  },
  blog5: {
    name: "Legacy Font Migration Playbook",
    topic: "operational migration from legacy fonts to Unicode at scale",
    audience: "administrators and teams owning large historical text archives",
    pain: "mass migration without controls can damage content quality",
    workflow: "audit inventory, prioritize batches, convert safely, and verify outputs",
    output: "traceable migration with reduced operational risk",
    typography: "modern output standards after conversion",
    validation: "batch QA, sampling strategy, and rollback readiness",
    seo: "migrated Unicode archives become discoverable assets",
    governance: "roles, handoffs, and approval checkpoints",
    migration: "planned transition with staged execution",
    risk: "unstructured migration introduces hidden defects"
  }
};

function countWordsInSections(sections) {
  const text = sections
    .map((section) => section.paragraphs.join(" "))
    .join(" ")
    .trim();

  if (!text) return 0;
  return text.split(/\s+/).length;
}

function buildSections(blueprint) {
  return [
    {
      title: `Why ${blueprint.topic} matters right now`,
      paragraphs: [
        `${blueprint.topic} remains an active need because ${blueprint.pain}. In many organizations, old Hindi assets are still in circulation, and teams cannot pause operations while they redesign everything from the ground up. A high-value page should therefore be practical, not theoretical. It should explain why the problem persists, what decisions matter first, and how to reduce risk without slowing down delivery. That is the central purpose of this page: helping ${blueprint.audience} solve immediate problems while still building a stronger long-term standard.`,
        `The most important shift is mental: visible text is not always healthy text. Legacy content can look acceptable in one place and fail elsewhere because structural encoding assumptions were never standardized. This page treats ${blueprint.topic} as an operational system, not a one-click event. It connects preparation, conversion, validation, typography, and governance into one flow. That approach prevents repetitive fire-fighting and gives teams a way to scale quality.`,
        `When this topic is handled with a process mindset, the outcome is clear: ${blueprint.output}. The page is intentionally long-form because short answers usually skip the real causes of failure. In high-volume Hindi workflows, context is not optional. It is the difference between temporary fixes and stable publishing.`
      ]
    },
    {
      title: "Common failure patterns before standardization",
      paragraphs: [
        `A recurring failure pattern appears when teams attempt conversion without documenting input conditions. Different sources can carry different habits: some files are manually typed, some are copied from old software, and some are stitched together from mixed archives. If these sources are treated as identical, quality issues will surface after conversion. A robust workflow starts by classifying source behavior, then applying appropriate checks.`,
        `Another failure pattern is policy drift. Teams may convert legacy text once, but continue generating new content with inconsistent habits. Without a written standard, quality degrades slowly and silently. This is why ${blueprint.governance} matters. Policy does not have to be heavy. It only needs to be explicit, visible, and enforced at handoff points.`,
        `The third failure pattern is delayed review. If validation happens only at final publishing, corrections become expensive. This page recommends staged checkpoints because ${blueprint.validation} is more reliable when it is distributed through the workflow rather than postponed to the end.`
      ]
    },
    {
      title: "Step-by-step workflow teams can actually follow",
      paragraphs: [
        `The recommended sequence is straightforward: ${blueprint.workflow}. Start by collecting representative samples that reflect real production complexity, not only simple test lines. Then run controlled conversion and inspect output for character integrity, spacing, punctuation behavior, and readability. After that, run device and editor checks before you approve final publishing.`,
        `For teams with large volumes, phased rollout is safer than full replacement in one cycle. Pilot one content segment, document findings, and tune standards before scaling. This principle supports ${blueprint.migration} and gives non-technical contributors a realistic path to adoption.`,
        `Workflow strength comes from repeatability. Every stage should answer one question: what must be true before we move forward? That is how you convert knowledge into routine and avoid regressions.`
      ]
    },
    {
      title: "Typography and font decisions that support readability",
      paragraphs: [
        `${blueprint.typography} is not cosmetic in this context. It directly influences trust, proofreading speed, and user comprehension. Long Hindi passages require balanced line length, controlled paragraph spacing, and dependable font behavior across devices. A premium presentation should reduce cognitive effort, not increase it.`,
        `Teams often ask whether one font can solve every issue. The answer is no. Fonts support rendering, but structural text quality still depends on clean Unicode content and disciplined input. This page connects font selection with data integrity to prevent false confidence.`,
        `When typography is treated as part of quality control, content becomes easier to maintain. Editors can focus on meaning instead of correcting avoidable visual inconsistencies. That is especially important when pages are updated frequently and multiple contributors are involved.`
      ]
    },
    {
      title: "Quality assurance, troubleshooting, and rollback safety",
      paragraphs: [
        `Reliable quality assurance starts with targeted checks, not random inspection. Reviewers should test known weak points first: copied text fragments, punctuation-heavy lines, mixed-language headings, and exported document variants. This method detects errors early and prevents last-minute surprises.`,
        `Troubleshooting should be mapped to symptoms. If output fails in one environment only, investigate rendering context first. If output fails everywhere, inspect source assumptions and conversion logic. If search visibility drops, review structure and metadata before changing copy. A symptom-driven approach improves resolution speed.`,
        `Rollback planning is part of professional delivery. Teams should preserve source snapshots and track converted batches so corrections remain manageable. Without rollback discipline, one bad cycle can contaminate large content sets and delay publishing timelines.`
      ]
    },
    {
      title: "SEO, accessibility, and long-term discoverability",
      paragraphs: [
        `${blueprint.seo} should be treated as an extension of text quality, not a separate phase. Search engines and readers both benefit when headings are logical, paragraphs are coherent, and page intent is obvious. Unicode structure improves indexing potential, but relevance and clarity still decide performance.`,
        `Accessibility also matters. Clean structure, meaningful headings, and readable contrast reduce friction for all users. This page uses long-form organization to keep technical depth while preserving scanning comfort. That balance is essential for knowledge-heavy Hindi content websites.`,
        `Discoverability compounds over time when standards are consistent. A strong page today becomes a reference tomorrow, and a reference page strengthens the authority of the entire domain.`
      ]
    },
    {
      title: "Governance, training, and operational continuity",
      paragraphs: [
        `Strong outcomes require ownership. Someone must maintain standards, review recurring issues, and keep documentation current. If governance is unclear, improvements fade as teams rotate. A lightweight governance model with named accountability is enough to keep progress stable.`,
        `Training should focus on decision patterns instead of isolated tricks. Contributors need to understand why certain checks exist, how to classify issues, and when to escalate. This reduces dependency on one expert and makes teams more resilient.`,
        `The long-term target is simple: lower rework, higher confidence, and consistent output quality. If each cycle leaves the system slightly cleaner than before, the workflow will continue improving even as content volume grows.`
      ]
    }
  ];
}

function extraNote(blueprint, index) {
  const notes = [
    `Extended note ${index + 1}: In practical field use, ${blueprint.audience} benefit from a one-page checklist that captures source assumptions, conversion settings, validation scope, and final approval status. This checklist becomes a communication bridge between technical and non-technical contributors. It also improves onboarding because new contributors can follow a known structure instead of guessing process rules. Over time, checklist consistency reduces avoidable variance in output quality.`,
    `Extended note ${index + 1}: Teams often underestimate post-conversion proofing effort. A better model is to schedule short proofing windows at controlled checkpoints rather than one large review at the end. This distributes effort, catches defects earlier, and protects delivery timelines. In workflows centered on ${blueprint.topic}, staged proofing is one of the highest-leverage habits you can adopt.`,
    `Extended note ${index + 1}: Documentation quality influences operational quality. If a decision is important enough to repeat, it is important enough to document. For this reason, organizations should maintain concise notes on approved fonts, fallback behavior, review criteria, and escalation logic. Documentation does not need to be complex, but it must be current and accessible.`,
    `Extended note ${index + 1}: Migration projects succeed when they are measured. Track how many files were processed, how many required manual correction, and which error patterns were most common. These metrics reveal process weakness and guide future improvements. A data-aware approach turns each batch into a learning cycle rather than a one-time effort.`,
    `Extended note ${index + 1}: Governance and empathy should coexist. Standards should be clear, but training should remain supportive because many contributors are transitioning from legacy habits. When teams understand the reason behind each quality rule, compliance improves naturally and friction decreases. This is especially useful during the early phase of ${blueprint.migration}.`
  ];

  return notes[index % notes.length];
}

function ensureMinimumWords(sections, blueprint, minimum = 1800) {
  let currentWords = countWordsInSections(sections);

  if (currentWords >= minimum) {
    return sections;
  }

  const extended = {
    title: `Extended implementation notes for ${blueprint.name}`,
    paragraphs: []
  };

  let i = 0;
  while (currentWords < minimum && i < 40) {
    extended.paragraphs.push(extraNote(blueprint, i));
    currentWords = countWordsInSections([...sections, extended]);
    i += 1;
  }

  sections.push(extended);
  return sections;
}

function renderContent(page) {
  if (!pageContentHost || !page) return;

  const sections = ensureMinimumWords(buildSections(page), page, 1800);

  pageContentHost.innerHTML = sections
    .map((section) => {
      const paragraphs = section.paragraphs
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("");

      return `<section class="content-section"><h2>${section.title}</h2>${paragraphs}</section>`;
    })
    .join("");

  const renderedWords = countWordsInSections(sections);
  pageContentHost.insertAdjacentHTML(
    "afterbegin",
    `<p class="mini-tag">Rendered content length: ${renderedWords} words</p>`
  );
}

const blueprint = pageBlueprints[pageKey] || pageBlueprints.home;
renderContent(blueprint);

function updateReadingProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const rawProgress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  const bounded = Math.min(Math.max(rawProgress, 0), 100);

  if (progressBar) {
    progressBar.style.width = `${bounded}%`;
  }
}

window.addEventListener("scroll", updateReadingProgress, { passive: true });
window.addEventListener("resize", updateReadingProgress);
updateReadingProgress();

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = entry.target.dataset.delay || "0";
      entry.target.style.setProperty("--delay", `${delay}ms`);
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelectorAll(".content-section").forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
