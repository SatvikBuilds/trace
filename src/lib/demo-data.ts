export type Transaction = {
  id: string; sender: string; receiver: string; amount: number; currency: string;
  timestamp: string; type: string; location: string; risk: number; status: string;
};

export const demoTransactions: Transaction[] = [
  { id: "TX-84291", sender: "ACC-1042", receiver: "ACC-7819", amount: 48250, currency: "USD", timestamp: "2026-11-19 14:32:08", type: "Wire", location: "New York, US", risk: 94, status: "Escalated" },
  { id: "TX-84290", sender: "ACC-7819", receiver: "ACC-3381", amount: 43120, currency: "USD", timestamp: "2026-11-19 14:18:42", type: "Wire", location: "London, UK", risk: 91, status: "Under Review" },
  { id: "TX-84287", sender: "ACC-3381", receiver: "ACC-1042", amount: 39840, currency: "USD", timestamp: "2026-11-19 14:09:16", type: "ACH", location: "Singapore", risk: 88, status: "Under Review" },
  { id: "TX-84276", sender: "ACC-2190", receiver: "ACC-8874", amount: 9800, currency: "EUR", timestamp: "2026-11-19 13:47:33", type: "Transfer", location: "Berlin, DE", risk: 76, status: "New" },
  { id: "TX-84263", sender: "ACC-5521", receiver: "ACC-2190", amount: 22450, currency: "GBP", timestamp: "2026-11-19 13:22:05", type: "Wire", location: "Dubai, AE", risk: 72, status: "New" },
  { id: "TX-84244", sender: "ACC-6624", receiver: "ACC-5521", amount: 8700, currency: "USD", timestamp: "2026-11-19 12:58:19", type: "ACH", location: "Toronto, CA", risk: 64, status: "Monitoring" },
  { id: "TX-84231", sender: "ACC-8812", receiver: "ACC-6624", amount: 3200, currency: "USD", timestamp: "2026-11-19 12:31:44", type: "Card", location: "Austin, US", risk: 31, status: "Cleared" },
];

export const demoAccounts = [
  { id: "ACC-1042", name: "Vertex Holdings", type: "Corporate", incoming: 128400, outgoing: 118620, risk: 94, connections: 9 },
  { id: "ACC-7819", name: "Meridian Services", type: "Corporate", incoming: 96580, outgoing: 92140, risk: 91, connections: 7 },
  { id: "ACC-3381", name: "Helix Trading", type: "Corporate", incoming: 84220, outgoing: 79860, risk: 88, connections: 6 },
];

export const networkData = [
  { id: "NET-2041", accounts: 8, amount: 284500, suspicious: 14, risk: 96, reason: "Circular flow + rapid layering", firstSeen: "2026-11-19 12:14", status: "Escalated" },
  { id: "NET-2038", accounts: 6, amount: 176820, suspicious: 9, risk: 89, reason: "Fan-in followed by rapid fan-out", firstSeen: "2026-11-19 11:42", status: "Under Review" },
  { id: "NET-2031", accounts: 5, amount: 92340, suspicious: 7, risk: 82, reason: "Structuring beneath reporting threshold", firstSeen: "2026-11-18 23:08", status: "Under Review" },
];

export const investigations = [
  { id: "INV-1048", title: "Rapid circular flow — Vertex Holdings", priority: "Critical", status: "Escalated", assignee: "Maya Chen", accounts: 8, updated: "8 min ago" },
  { id: "INV-1045", title: "Threshold structuring cluster", priority: "High", status: "Under Review", assignee: "David Ross", accounts: 5, updated: "34 min ago" },
  { id: "INV-1041", title: "Cross-border wire review", priority: "Medium", status: "New", assignee: "Unassigned", accounts: 3, updated: "2 hr ago" },
];
