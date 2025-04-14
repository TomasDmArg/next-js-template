# Ticket System Guidelines 📋

This document outlines the ticket system and workflow for managing tasks, bugs, and features in this project. 🚀

## Ticket Types 🎫

- **Feature (FEAT)** ✨

    - New functionality or enhancement
    - Example: "Add user profile page"

- **Bug (BUG)** 🐛

    - Fix for an existing issue
    - Example: "Fix login form validation"

- **Task (TASK)** 📝

    - General task or chore
    - Example: "Update dependencies"

- **Documentation (DOCS)** 📚

    - Documentation updates
    - Example: "Update API documentation"

- **Refactor (REF)** 🔨
    - Code refactoring
    - Example: "Refactor authentication service"

## Ticket Structure 📊

Each ticket should include:

- **Title:** Clear and concise description 🎯
- **Description:** Detailed explanation of the task 📝
- **Acceptance Criteria:** List of requirements for completion ✅
- **Labels:** Relevant tags for categorization 🏷️
- **Assignee:** Team member responsible 👤
- **Priority:** High, Medium, Low ⚡
- **Estimate:** Time or story points ⏱️

## Workflow 🔄

1. **To Do** 📋

    - New tickets start here
    - Ready for assignment

2. **In Progress** 🚧

    - Currently being worked on
    - Regular updates required

3. **Review** 👀

    - Code review phase
    - Testing and validation

4. **Done** ✅
    - Completed and verified
    - Ready for deployment

## Best Practices 🏆

- **Keep Tickets Small:** Break down large tasks into manageable pieces 📦
- **Regular Updates:** Update ticket status and progress regularly 🔄
- **Clear Communication:** Use comments for updates and discussions 💬
- **Documentation:** Keep documentation up to date with changes 📚
- **Review Process:** Follow the established review process 👥

## Tools 🛠️

- **Issue Tracking:** GitHub Issues or similar platform 📊
- **Project Management:** GitHub Projects or similar tool 📋
- **Communication:** Team chat or email for updates 💬
- **Documentation:** GitHub Wiki or similar for documentation 📚

# Ticket System & Format Guidelines 🗂️📝

This document outlines the recommended format for creating and interpreting development tasks (tickets) within our project management system (e.g., Jira, GitHub Issues, Linear). Consistent ticket formatting improves clarity, reduces ambiguity, and facilitates smoother development workflows.

We primarily use a format inspired by **User Stories** 👤 and **Use Cases** 📋.

## Understanding Ticket Components 🧩

A well-defined ticket typically includes:

- **Title:** 📌 Clear and concise summary of the task.
- **Description:** 📄 Explains the goal from a user perspective (User Story) or describes the interaction flow (Use Case).
- **Acceptance Criteria (AC):** ✅ Specific, measurable conditions that must be met for the task to be considered complete from a user/business perspective.
- **Technical Requirements:** 🔧 Non-functional requirements or technical constraints (performance, styling, linting, platform consistency, etc.).
- **Test Cases / Scenarios:** 🧪 Specific steps or scenarios to verify the functionality (can be high-level or detailed).

## Template 1: User Story Format 👥📝

This is ideal for features or changes directly impacting the end-user experience.

### Description 📋

```
As a [type of user/role]
I want to [perform some action]
So that [I can achieve some goal/benefit]
```

### Acceptance Criteria ✓

- [Defines the specific conditions for success. What must be true for the story to be done?]
- [Example: User sees a confirmation message after successful submission.]
- [Example: An error message is displayed if input is invalid.]
- [...]

### Technical Requirements 🛠️

- Maintain consistency with light and dark themes. 🌓
- Ensure proper functionality and display on desktop and mobile devices. 💻📱
- Implement necessary translations (if applicable). 🌐
- Avoid negative impacts on site performance. ⚡
- Do not introduce changes outside the scope of this ticket. 🎯
- Code must pass linting checks (`bun run lint`). ✨
- Code must pass build checks (`bun run build`). 🏗️
- [Add any other relevant technical constraints]

### Test Cases / Scenarios 🔍

- [Scenario 1: Describe the steps and expected outcome.]
- [Scenario 2: Describe an alternative flow or edge case.]
- [...]

---

## Template 2: Use Case Format 📊📑

This can be useful for describing specific system interactions or flows, sometimes involving multiple steps or actors.

### Title 🏷️

[Brief description of the use case goal]

### Main Actor(s) 🎭

- [Primary user role or system triggering the action]

### Description 📝

[Brief summary of the interaction and goal]

### Main Flow (Happy Path) 🛣️

1.  [Step 1: Actor action]
2.  [Step 2: System response or next action]
3.  [...]

### Alternative Flows / Edge Cases 🔄

- **Scenario A:** [Description of an alternative path or error condition]
    1.  [Step 1]
    2.  [...]
- **Scenario B:** [...]

### Security Requirements (If applicable) 🔒

- [Specify any security-related constraints or checks]

### Technical Requirements 🛠️

- Maintain consistency with light and dark themes. 🌓
- Ensure proper functionality and display on desktop and mobile devices. 💻📱
- Implement necessary translations (if applicable). 🌐
- Avoid negative impacts on site performance. ⚡
- Do not introduce changes outside the scope of this ticket. 🎯
- Code must pass linting checks (`bun run lint`). ✨
- Code must pass build checks (`bun run build`). 🏗️
- [Add any other relevant technical constraints]

---

## Reading Tickets 👓📚

When picking up a ticket:

1.  **Read the Title and Description:** 📌 Understand the overall goal.
2.  **Review Acceptance Criteria:** ✅ These are the _minimum_ requirements for completion from a functional perspective.
3.  **Check Technical Requirements:** 🔧 Ensure you understand the non-functional constraints.
4.  **Consider Test Cases/Scenarios:** 🧪 Use these to guide your development and testing.
5.  **Ask Questions:** 💬 If anything is unclear, ask the Product Owner, Tech Lead, or ticket creator for clarification _before_ starting development.
