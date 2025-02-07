import React from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Collapsible } from "@/components/Collapsible";
import 'nativewind';

interface Section {
  title: string;
  content: React.JSX.Element;
}

const GuideApp = () => {
  const sections: Record<string, Section> = {
    introduction: {
      title: "Introduction to DeepSeek-V3",
      content: (
        <>
          <ThemedText className="text-gray-400 text-base">
            Welcome to DeepSeek-V3!
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            DeepSeek-V3 is a state-of-the-art AI assistant designed to assist you with a wide range of tasks, from answering questions and solving problems to generating creative content.
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            Whether you're a student, professional, or curious learner, DeepSeek-V3 is here to help you achieve your goals efficiently.
          </ThemedText>
        </>
      ),
    },
    gettingStarted: {
      title: "Getting Started with DeepSeek-V3",
      content: (
        <>
          <ThemedText className="text-gray-400 text-base">
            Step 1: Access DeepSeek-V3
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            Open the app or platform where DeepSeek-V3 is integrated. Look for the chat interface or input box to start interacting with the AI.
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            Step 2: Start a Conversation
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            Type your question or request in the input box and press "Send" or "Enter." DeepSeek-V3 will respond promptly with helpful information or suggestions.
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            Step 3: Explore Features
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            Experiment with different types of queries, such as asking for explanations, solving problems, or requesting creative content. The more you use DeepSeek-V3, the better you'll understand its capabilities.
          </ThemedText>
        </>
      ),
    },
    understandingCapabilities: {
      title: "What DeepSeek-V3 Can Do",
      content: (
        <>
          <ThemedText className="text-gray-400 text-base">
            DeepSeek-V3 is equipped with a variety of capabilities, including:
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            - Answering general knowledge questions
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Providing step-by-step explanations for complex topics
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Assisting with coding, math, and science problems
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Generating creative content like stories, poems, and ideas
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Offering personalized recommendations and advice
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Translating languages and summarizing text
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Helping with productivity tasks like scheduling and reminders
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            DeepSeek-V3 is constantly improving, so expect new features and enhancements over time!
          </ThemedText>
        </>
      ),
    },
    tipsAndTricks: {
      title: "Tips for Effective Interaction",
      content: (
        <>
          <ThemedText className="text-gray-400 text-base">
            To get the best results from DeepSeek-V3, follow these tips:
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            - Be specific and clear in your questions or requests
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Use natural language (e.g., "How do I solve this equation?")
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Provide context when necessary (e.g., "I'm working on a Python project...")
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Ask follow-up questions to dive deeper into a topic
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Experiment with creative prompts to explore the AI's capabilities
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Use bullet points or numbered lists for complex queries
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Be patient and refine your questions if the response isn't what you expected
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            By following these tips, you can have more productive and engaging conversations with DeepSeek-V3.
          </ThemedText>
        </>
      ),
    },
    advancedUsage: {
      title: "Advanced Usage and Customization",
      content: (
        <>
          <ThemedText className="text-gray-400 text-base">
            Customizing Responses
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            You can guide DeepSeek-V3 to provide responses in a specific format or style. For example:
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - "Explain this concept in simple terms."
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - "Provide a detailed step-by-step solution."
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - "Write a story in the style of Shakespeare."
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            Using Commands
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            DeepSeek-V3 supports specific commands for tasks like:
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - "Translate this text into French."
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - "Summarize this article in 100 words."
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - "Create a to-do list for my project."
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            Integrating with Other Tools
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            DeepSeek-V3 can be integrated with productivity tools like calendars, task managers, and note-taking apps to streamline your workflow.
          </ThemedText>
        </>
      ),
    },
    troubleshooting: {
      title: "Troubleshooting Common Issues",
      content: (
        <>
          <ThemedText className="text-gray-400 text-base">
            If you encounter any issues, try these steps:
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            - Ensure you have a stable internet connection
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Refresh the app or platform
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Rephrase your question for clarity
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Check for updates to the app or platform
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            Common Issues and Solutions
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            Slow Response**: Check your internet speed or try again later.
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            Incorrect Answers**: Provide more context or clarify your question.
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            No Response**: Ensure the app is connected to the server and try restarting it.
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            If the issue persists, reach out to support for further assistance.
          </ThemedText>
        </>
      ),
    },
    privacyAndSecurity: {
      title: "Privacy and Security",
      content: (
        <>
          <ThemedText className="text-gray-400 text-base">
            Your Data is Safe
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            DeepSeek-V3 is designed with privacy and security in mind. Your conversations are encrypted, and your data is never shared with third parties without your consent.
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            Best Practices
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Avoid sharing sensitive personal information in your queries.
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Use strong passwords for your accounts.
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            - Regularly update the app to ensure you have the latest security features.
          </ThemedText>
        </>
      ),
    },
    faqs: {
      title: "Frequently Asked Questions (FAQs)",
      content: (
        <>
          <ThemedText className="text-gray-400 text-base">
            Q: How accurate is DeepSeek-V3?
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            A: DeepSeek-V3 is highly accurate but may occasionally provide incomplete or incorrect answers. Always verify critical information from reliable sources.
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            Q: Can DeepSeek-V3 learn from my interactions?
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            A: DeepSeek-V3 improves over time but does not store personal data from individual interactions.
          </ThemedText>
          <ThemedText className="text-gray-400 text-base mt-2">
            Q: Is DeepSeek-V3 free to use?
          </ThemedText>
          <ThemedText className="text-gray-400 text-base">
            A: Basic features are free, but premium features may require a subscription.
          </ThemedText>
        </>
      ),
    },
  };

  return (
    <ThemedView className="flex-1 bg-slate-900 p-4 px-5">
      <StatusBar barStyle="light-content" backgroundColor="#0D1117" />
      <ScrollView className="mt-4">
        {/* Header */}
        <ThemedText className="text-center text-2xl font-bold text-teal-600 mb-6">
          DeepSeek Guide
        </ThemedText>

        {/* Sections */}
        {Object.keys(sections).map((section) => (
          <Collapsible
            key={section}
            title={sections[section].title}
          >
            <View className="p-4 bg-gray-950 rounded-md">
              {sections[section].content}
            </View>
          </Collapsible>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default GuideApp;