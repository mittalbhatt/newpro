export class ChatComponent {
  rawText: string = `Top 3 complaint categories in the last month:
  1. Zelle payment failures – 27% (mainly delayed or unprocessed transactions).
  2. Unauthorized transactions – 18% (possible fraud cases flagged).
  3. Loan processing delays – 14% (customers facing unexpected delays).
  Resolution trends: Average complaint resolution time: 3.8 days (target: 3 days).
  Escalation rate: 12% of complaints required manager intervention.
  Repeat complaints: 8% of customers called back within 48 hours for the same issue.
  Key insights: Zelle complaints are growing due to increased fraud reports—requires enhanced transaction monitoring.
  Agent training needed to handle unauthorized transaction disputes more effectively.`;

  formattedText: string[] = [];

  constructor() {
    this.formatText();
  }

  formatText() {
    this.formattedText = this.rawText.split(/(\d+\.)/).filter(Boolean).map((part, index, array) => {
      return index % 2 === 0 ? part + (array[index + 1] || '') : '';
    }).filter(Boolean);
  }
}
