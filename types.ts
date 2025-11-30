export enum SectionType {
  EXECUTIVE_SUMMARY = 'executive_summary',
  PROBLEM_MARKET = 'problem_market',
  RESEARCH = 'research_analysis',
  VISION_STRATEGY = 'vision_strategy',
  PERSONAS = 'personas',
  CORE_FEATURES = 'core_features',
  RISK_SCORING = 'risk_scoring',
  AI_STRATEGY = 'ai_strategy',
  INTEGRATION = 'integration',
  TECHNICAL = 'technical',
  UX_WORKFLOWS = 'ux_workflows',
  METRICS = 'metrics',
  GTM = 'gtm',
  RISKS = 'risks',
  APPENDICES = 'appendices'
}

export interface Metric {
  label: string;
  value: string;
  description: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface Persona {
  name: string;
  role: string;
  quote: string;
  painPoints: string[];
  goals: string[];
}

export interface Feature {
  title: string;
  pillar: 'Evidence' | 'Enforce' | 'Endure';
  description: string;
  details: string[];
}