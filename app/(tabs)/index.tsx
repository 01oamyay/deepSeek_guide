import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Collapsible } from "@/components/Collapsible";

interface Section {
  title: string;
  content: React.JSX.Element;
}

const GuideApp = () => {
  const sections: Record<string, Section> = {
    introduction: {
      title: "Introduction to DeepSeek-V3",
      content: (
        <ThemedText>
          Welcome to DeepSeek-V3!\n\nDeepSeek-V3 is a state-of-the-art AI
          assistant designed to assist you with a wide range of tasks, from
          answering questions and solving problems to generating creative
          content. Whether you're a student, professional, or curious learner,
          DeepSeek-V3 is here to help you achieve your goals efficiently.
        </ThemedText>
      ),
    },
    gettingStarted: {
      title: "Getting Started with DeepSeek-V3",
      content: (
        <ThemedText>
          Step 1: Access DeepSeek-V3\n\nOpen the app or platform where
          DeepSeek-V3 is integrated. Look for the chat interface or input box to
          start interacting with the AI.\n\nStep 2: Start a Conversation\n\nType
          your question or request in the input box and press "Send" or "Enter."
          DeepSeek-V3 will respond promptly with helpful information or
          suggestions.\n\nStep 3: Explore Features\n\nExperiment with different
          types of queries, such as asking for explanations, solving problems,
          or requesting creative content. The more you use DeepSeek-V3, the
          better you'll understand its capabilities.
        </ThemedText>
      ),
    },
    understandingCapabilities: {
      title: "What DeepSeek-V3 Can Do",
      content: (
        <ThemedText>
          DeepSeek-V3 is equipped with a variety of capabilities,
          including:\n\n- Answering general knowledge questions\n- Providing
          step-by-step explanations for complex topics\n- Assisting with coding,
          math, and science problems\n- Generating creative content like
          stories, poems, and ideas\n- Offering personalized recommendations and
          advice\n- Translating languages and summarizing text\n- Helping with
          productivity tasks like scheduling and reminders\n\nDeepSeek-V3 is
          constantly improving, so expect new features and enhancements over
          time!
        </ThemedText>
      ),
    },
    tipsAndTricks: {
      title: "Tips for Effective Interaction",
      content: (
        <ThemedText>
          To get the best results from DeepSeek-V3, follow these tips:\n\n- Be
          specific and clear in your questions or requests\n- Use natural
          language (e.g., "How do I solve this equation?")\n- Provide context
          when necessary (e.g., "I'm working on a Python project...")\n- Ask
          follow-up questions to dive deeper into a topic\n- Experiment with
          creative prompts to explore the AI's capabilities\n- Use bullet points
          or numbered lists for complex queries\n- Be patient and refine your
          questions if the response isn't what you expected\n\nBy following
          these tips, you can have more productive and engaging conversations
          with DeepSeek-V3.
        </ThemedText>
      ),
    },
    advancedUsage: {
      title: "Advanced Usage and Customization",
      content: (
        <ThemedText>
          Customizing Responses\n\nYou can guide DeepSeek-V3 to provide
          responses in a specific format or style. For example:\n- "Explain this
          concept in simple terms."\n- "Provide a detailed step-by-step
          solution."\n- "Write a story in the style of Shakespeare."\n\nUsing
          Commands\n\nDeepSeek-V3 supports specific commands for tasks like:\n-
          "Translate this text into French."\n- "Summarize this article in 100
          words."\n- "Create a to-do list for my project."\n\nIntegrating with
          Other Tools\n\nDeepSeek-V3 can be integrated with productivity tools
          like calendars, task managers, and note-taking apps to streamline your
          workflow.
        </ThemedText>
      ),
    },
    troubleshooting: {
      title: "Troubleshooting Common Issues",
      content: (
        <ThemedText>
          If you encounter any issues, try these steps:\n\n- Ensure you have a
          stable internet connection\n- Refresh the app or platform\n- Rephrase
          your question for clarity\n- Check for updates to the app or
          platform\n\nCommon Issues and Solutions\n\nSlow Response**: Check your
          internet speed or try again later.\nIncorrect Answers**: Provide more
          context or clarify your question.\nNo Response**: Ensure the app is
          connected to the server and try restarting it.\n\nIf the issue
          persists, reach out to support for further assistance.
        </ThemedText>
      ),
    },
    privacyAndSecurity: {
      title: "Privacy and Security",
      content: (
        <ThemedText>
          Your Data is Safe\n\nDeepSeek-V3 is designed with privacy and security
          in mind. Your conversations are encrypted, and your data is never
          shared with third parties without your consent.\n\nBest Practices\n\n-
          Avoid sharing sensitive personal information in your queries.\n- Use
          strong passwords for your accounts.\n- Regularly update the app to
          ensure you have the latest security features.
        </ThemedText>
      ),
    },
    faqs: {
      title: "Frequently Asked Questions (FAQs)",
      content: (
        <ThemedText>
          Q: How accurate is DeepSeek-V3?\n\nA: DeepSeek-V3 is highly accurate
          but may occasionally provide incomplete or incorrect answers. Always
          verify critical information from reliable sources.\n\nQ: Can
          DeepSeek-V3 learn from my interactions?\n\nA: DeepSeek-V3 improves
          over time but does not store personal data from individual
          interactions.\n\nQ: Is DeepSeek-V3 free to use?\n\nA: Basic features
          are free, but premium features may require a subscription.
        </ThemedText>
      ),
    },
  };

  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D1117" />
      <ScrollView style={styles.scrollView}>
        <ThemedText style={styles.mainTitle}>DeepSeek Guide</ThemedText>
        {Object.keys(sections).map((section) => (
          <Collapsible key={section} title={sections[section].title}>
            <View style={styles.contentContainer}>
              {sections[section].content}
            </View>
          </Collapsible>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    padding: 16,
  },
  scrollView: {
    marginTop: (StatusBar.currentHeight || 0) + 16,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#E6EDF3",
    textAlign: "center",
    marginBottom: 24,
    letterSpacing: 1,
  },
  contentContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#30363D",
    backgroundColor: "#1C2128",
  },
});

export default GuideApp;
