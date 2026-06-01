import { 
  BookOpen, Calculator, CircleDollarSign, ShieldCheck, 
  Receipt, Network, Settings, RefreshCcw, ClipboardCheck, 
  CreditCard, Clock, TrendingUp, Scale, LineChart, 
  Building2, Briefcase, Landmark 
} from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: 'Bookkeeping Services',
    slug: 'bookkeeping',
    icon: BookOpen,
    shortDesc: 'Accurate daily/monthly bookkeeping for SMEs across Saudi Arabia.',
    whatWeDo: [
      'Daily recording of financial transactions',
      'Categorization of expenses and incomes',
      'Maintaining accurate general ledgers',
      'Cloud-based accounting software management'
    ],
    whoNeedsThis: 'Small and medium enterprises, startups, and growing businesses needing organized financial records.',
    process: ['Assess current records', 'Implement cloud system', 'Deliver monthly reports']
  },
  {
    id: 2,
    title: 'Accounting Services for SMBs',
    slug: 'accounting-smb',
    icon: Calculator,
    shortDesc: 'Full-cycle accounting tailored for small and medium businesses.',
    whatWeDo: [
      'Full-cycle accounting operations',
      'Month-end and year-end closing',
      'Financial compliance and reviews',
      'Customized financial reporting'
    ],
    whoNeedsThis: 'SMBs looking for comprehensive accounting support without hiring an in-house team.',
    process: ['Initial audit', 'Process integration', 'Ongoing accounting management']
  },
  {
    id: 3,
    title: 'Payroll Processing Services',
    slug: 'payroll',
    icon: CircleDollarSign,
    shortDesc: 'End-to-end payroll management — WPS compliant, on time, every time.',
    whatWeDo: [
      'Salary and benefits calculation',
      'WPS (Wage Protection System) compliance',
      'GOSI deductions and reporting',
      'Employee final settlements (End of Service)'
    ],
    whoNeedsThis: 'Companies of all sizes needing compliant and timely payroll execution.',
    process: ['Gather employee data', 'Calculate payroll & deductions', 'Process via WPS']
  },
  {
    id: 4,
    title: 'VAT Return Filing (ZATCA)',
    slug: 'vat-filing',
    icon: ShieldCheck,
    shortDesc: 'Accurate VAT return preparation and submission per ZATCA regulations.',
    whatWeDo: [
      'VAT impact assessment',
      'Preparation of VAT returns',
      'ZATCA portal submission',
      'VAT audit support'
    ],
    whoNeedsThis: 'All VAT-registered businesses in Saudi Arabia.',
    process: ['Analyze invoices', 'Prepare VAT return', 'File with ZATCA']
  },
  {
    id: 5,
    title: 'Withholding Tax (WHT) Filing',
    slug: 'wht-filing',
    icon: Receipt,
    shortDesc: 'Timely WHT filing and compliance management for Saudi entities.',
    whatWeDo: [
      'Identification of WHT applicable transactions',
      'Calculation of appropriate WHT rates',
      'Monthly WHT return filing',
      'WHT certificate generation'
    ],
    whoNeedsThis: 'Companies making payments to non-resident entities.',
    process: ['Review international payments', 'Calculate WHT', 'Submit returns to ZATCA']
  },
  {
    id: 6,
    title: 'Chart of Accounts Setup',
    slug: 'chart-of-accounts',
    icon: Network,
    shortDesc: 'Structured CoA setup aligned with your business model and reporting needs.',
    whatWeDo: [
      'Business model analysis',
      'Custom account coding structure',
      'Cost center implementation',
      'ERP integration mapping'
    ],
    whoNeedsThis: 'New businesses or companies migrating to new ERP systems.',
    process: ['Analyze reporting needs', 'Design CoA structure', 'Implement in ERP']
  },
  {
    id: 7,
    title: 'ERP Customization & Support',
    slug: 'erp-customization',
    icon: Settings,
    shortDesc: 'ERP configuration, customization, and user support for your accounting system.',
    whatWeDo: [
      'Accounting module configuration',
      'Workflow and approval setups',
      'User role definitions',
      'Post-implementation support'
    ],
    whoNeedsThis: 'Businesses adopting or optimizing ERP systems (e.g., Odoo, NetSuite, Dynamics).',
    process: ['Gather requirements', 'Customize modules', 'Train & Support']
  },
  {
    id: 8,
    title: 'Bank Reconciliation',
    slug: 'bank-reconciliation',
    icon: RefreshCcw,
    shortDesc: 'Monthly bank reconciliation to keep your books clean and accurate.',
    whatWeDo: [
      'Matching internal records with bank statements',
      'Identifying discrepancies and missing entries',
      'Credit card reconciliation',
      'Cash flow tracking'
    ],
    whoNeedsThis: 'Businesses with high transaction volumes needing accurate cash balances.',
    process: ['Import bank statements', 'Match transactions', 'Resolve discrepancies']
  },
  {
    id: 9,
    title: 'Audit Supervision Support',
    slug: 'audit-support',
    icon: ClipboardCheck,
    shortDesc: 'Preparation and coordination support for internal and external audits.',
    whatWeDo: [
      'Pre-audit financial review',
      'Preparation of audit schedules',
      'Liaising with external auditors',
      'Resolving audit queries'
    ],
    whoNeedsThis: 'Companies required to undergo annual statutory audits.',
    process: ['Pre-audit health check', 'Prepare schedules', 'Coordinate with auditors']
  },
  {
    id: 10,
    title: 'Accounts Payable Reports',
    slug: 'accounts-payable',
    icon: CreditCard,
    shortDesc: 'Detailed AP tracking and vendor payment reports.',
    whatWeDo: [
      'Vendor invoice processing',
      'Payment scheduling and tracking',
      'AP aging analysis',
      'Vendor statement reconciliation'
    ],
    whoNeedsThis: 'Companies looking to optimize cash outflow and maintain vendor relationships.',
    process: ['Process invoices', 'Generate AP aging', 'Schedule payments']
  },
  {
    id: 11,
    title: 'Ageing Reports',
    slug: 'ageing-reports',
    icon: Clock,
    shortDesc: 'Receivables and payables ageing analysis for cash flow clarity.',
    whatWeDo: [
      'Customer accounts receivable aging',
      'Supplier accounts payable aging',
      'Cash flow forecasting based on aging',
      'Collection strategy support'
    ],
    whoNeedsThis: 'Businesses needing better visibility into overdue payments and cash flow.',
    process: ['Compile AR/AP data', 'Categorize by age', 'Generate actionable reports']
  },
  {
    id: 12,
    title: 'Profit & Loss Statements',
    slug: 'profit-loss',
    icon: TrendingUp,
    shortDesc: 'Comprehensive P&L statements prepared monthly or quarterly.',
    whatWeDo: [
      'Revenue and expense tracking',
      'Gross and net profit margins analysis',
      'Departmental profitability analysis',
      'Variance analysis against budgets'
    ],
    whoNeedsThis: 'Management teams needing to assess business performance and profitability.',
    process: ['Close period books', 'Compile P&L', 'Analyze variances']
  },
  {
    id: 13,
    title: 'Balance Sheet Preparation',
    slug: 'balance-sheet',
    icon: Scale,
    shortDesc: 'Accurate balance sheets reflecting your true financial position.',
    whatWeDo: [
      'Asset and liability tracking',
      'Equity reconciliation',
      'Working capital analysis',
      'Fixed asset register maintenance'
    ],
    whoNeedsThis: 'Stakeholders, investors, and management requiring a snapshot of financial health.',
    process: ['Verify assets/liabilities', 'Reconcile equity', 'Generate balance sheet']
  },
  {
    id: 14,
    title: 'Financial Reporting & MIS Reports',
    slug: 'financial-reporting',
    icon: LineChart,
    shortDesc: 'Management information system reports to support executive decisions.',
    whatWeDo: [
      'Custom KPI dashboards',
      'Cash flow projections',
      'Consolidated financial statements',
      'Board presentation decks'
    ],
    whoNeedsThis: 'C-level executives and board members requiring strategic financial insights.',
    process: ['Identify KPIs', 'Design reporting template', 'Deliver periodic MIS']
  },
  {
    id: 15,
    title: 'Entity Setup',
    slug: 'entity-setup',
    icon: Building2,
    shortDesc: 'Business formation & registration across the GCC',
    whatWeDo: [
      'Company registration and licensing',
      'Commercial Registration (CR) issuance',
      'Article of Association drafting',
      'Ministry of Commerce approvals'
    ],
    whoNeedsThis: 'Foreign investors and local entrepreneurs looking to establish a new business entity in Saudi Arabia or the wider GCC.',
    process: ['Consultation & structuring', 'Documentation gathering', 'Submission & licensing']
  },
  {
    id: 16,
    title: 'Business Process Outsourcing',
    slug: 'bpo',
    icon: Briefcase,
    shortDesc: 'Delegate operations and focus on growth',
    whatWeDo: [
      'End-to-end accounting outsourcing',
      'HR and payroll administration',
      'Data entry and record keeping',
      'Financial operations management'
    ],
    whoNeedsThis: 'Companies looking to reduce operational overhead by delegating non-core administrative tasks to experts.',
    process: ['Assess current processes', 'Define SLA & scope', 'Transition & execute']
  },
  {
    id: 17,
    title: 'Government Relations',
    slug: 'government-relations',
    icon: Landmark,
    shortDesc: 'Navigate regulations with confidence',
    whatWeDo: [
      'Muqeem and Qiwa portal management',
      'GOSI and ZATCA registration and updates',
      'Chamber of Commerce renewals',
      'General PRO services'
    ],
    whoNeedsThis: 'Businesses operating in Saudi Arabia requiring continuous compliance with local governmental portals and authorities.',
    process: ['Audit current compliance', 'Register on portals', 'Ongoing proactive management']
  }
];
