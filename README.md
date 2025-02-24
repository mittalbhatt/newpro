export class ChatbotComponent implements OnInit {
  messages: { text: string; isBot: boolean }[] = [];
  
  predefinedQuestions: string[] = [
    "What are the most frequent customer complaints, and how effectively are they being resolved?",
    "Are agents opening unnecessary frustrations, or is there a gap between customer inquiries and agent actions?",
    "Which customer calls had the highest frustration, and how did agents handle them?",
    "Are there any suspicious Zelle transactions linked to customer complaints?",
    "Can we automate call insights reporting for executives?"
  ];

  predefinedAnswers: { question: string; answer: string[] }[] = [
    {
      question: "What are the most frequent customer complaints, and how effectively are they being resolved?",
      answer: [
        "Top 3 complaint categories in the last month:",
        "1. Zelle payment failures – 27% (mainly delayed or unprocessed transactions).",
        "2. Unauthorized transactions – 18% (possible fraud cases flagged).",
        "3. Loan processing delays – 14% (customers facing unexpected delays).",
        "Resolution trends:",
        "- Average complaint resolution time: 3.8 days (target: 3 days).",
        "- Escalation rate: 12% of complaints required manager intervention.",
        "- Repeat complaints: 8% of customers called back within 48 hours for the same issue.",
        "Key insights:",
        "- Zelle complaints are growing due to increased fraud reports—requires enhanced transaction monitoring.",
        "- Agent training needed to handle unauthorized transaction disputes more effectively."
      ]
    },
    {
      question: "Are agents opening unnecessary frustrations, or is there a gap between customer inquiries and agent actions?",
      answer: [
        "High-frustration call insights:",
        "- 22% of calls had negative sentiment indicators.",
        "- 60% of these cases did not involve actual Zelle fraud.",
        "Common frustration trends:",
        "- 320 high-risk Zelle transactions flagged last month.",
        "- Multiple small transactions created confusion for customers."
      ]
    }
    // Add more Q&A pairs as needed
  ];

  ngOnInit() {
    this.addMessage("Hi! I'm your AI agent. How can I help you today?", true);
  }

  async handleQuestionClick(question: string) {
    this.addMessage(question, false); // User's message
    const answerObj = this.predefinedAnswers.find(q => q.question === question);
    if (answerObj) {
      for (const line of answerObj.answer) {
        await this.addMessage(line, true); // Bot's response in ChatGPT-style
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate typing delay
      }
    }
  }

  addMessage(text: string, isBot: boolean) {
    this.messages.push({ text, isBot });
  }
}
