import React from 'react';
import { LucideIcon, ShieldAlert, FileText, CheckCircle, Search, Users, Server, Lock, BarChart3 } from 'lucide-react';

export const PRD_META = {
  title: "OutThink Risk Warrant",
  subtitle: "The Defensibility Engine for Human-Centric Security",
  version: "1.0",
  date: "November 30, 2025",
  author: "Senior Cybersecurity Product Manager",
  status: "Draft for Review"
};

export const ONE_LINER = "For every automated security action based on human risk, generate a legally defensible 'warrant' that documents the evidence, the action, and the justification.";

export const SUCCESS_METRICS = [
  { label: "Incident Reduction", value: "30%", description: "Reduction in human-initiated security incidents" },
  { label: "Audit Prep Speed", value: "80%", description: "Reduction in audit preparation time" },
  { label: "Latency", value: "<5 min", description: "From risk trigger to control implementation" },
  { label: "False Positives", value: "<5%", description: "Appeals upheld rate" }
];

export const PILLARS = [
  {
    id: "evidence",
    title: "Pillar 1: Evidence Engine",
    icon: Search,
    color: "text-blue-400",
    description: "Consolidates 20+ human risk factors into a unified risk profile.",
    features: [
      "Risk Factor Aggregation (HR, Security Tools, Training)",
      "FAIR Risk Quantification ($ value exposure)",
      "Peer Benchmarking (Percentile ranking)",
      "Evidence Compiler (Structured package)"
    ]
  },
  {
    id: "enforce",
    title: "Pillar 2: Enforce Engine",
    icon: ShieldAlert,
    color: "text-red-400",
    description: "Coordinates security control changes based on risk tier.",
    features: [
      "Control Orchestration (Entra ID, Okta, Zscaler)",
      "Proportionality Algorithm (Tier 0-4)",
      "Integration Hub",
      "Appeal & Override Management"
    ]
  },
  {
    id: "endure",
    title: "Pillar 3: Endure Engine",
    icon: FileText,
    color: "text-emerald-400",
    description: "Ensures long-term defensibility and compliance.",
    features: [
      "Warrant Registry (Immutable records)",
      "Regulatory Mapping (SOC 2, ISO 27001)",
      "Board Reporting (Executive summaries)",
      "Insurance Dossier"
    ]
  }
];

export const PERSONAS_DATA = [
  {
    name: "Sarah Chen",
    role: "SOC Manager",
    company: "Mid-market Fintech (2,500 emp)",
    painPoints: [
      "Drowning in alerts; can't be proactive",
      "Spends 20+ hours on quarterly audit prep",
      "Can't automate due to fear of breaking business"
    ],
    goals: [
      "Reduce human error incidents",
      "Automate routine decisions",
      "Have defensible docs for audit"
    ]
  },
  {
    name: "Michael Torres",
    role: "CISO",
    company: "Public Retail Co (15,000 emp)",
    painPoints: [
      "Personal liability exposure (SolarWinds style)",
      "Board wants quantified risk ($), not tech scores",
      "Insurance premiums eating budget"
    ],
    goals: [
      "Reduce personal/corporate liability",
      "Present risk in financial terms",
      "Demonstrate measurable ROI"
    ]
  },
  {
    name: "Jennifer Walsh",
    role: "Director of IT Compliance",
    company: "Healthcare Org (5,000 emp)",
    painPoints: [
      "Evidence collection is manual",
      "Overlapping framework requirements",
      "Can't prove policies are actually enforced"
    ],
    goals: [
      "Automate evidence collection",
      "Reduce audit findings",
      "Spend less time on compliance"
    ]
  }
];

export const TECH_REQUIREMENTS = [
  { category: "Encryption", spec: "AES-256 (Rest), TLS 1.3 (Transit)" },
  { category: "Availability", spec: "99.9% Uptime" },
  { category: "Latency", spec: "<5 min from event to control" },
  { category: "Scalability", spec: "Support 100K+ users per tenant" },
  { category: "Audit", spec: "Immutable, cryptographically signed logs" }
];
