# 🧠 FocusFlow

> A simple and motivating Pomodoro timer + task tracker built to help you stay focused and get things done.

---

## 🌟 Inspiration

While learning React, I found myself constantly distracted and jumping between tasks. I wanted to build something that would not only help me stay on track, but also let me practice what I was learning. That’s how FocusFlow was born — a small project to solve a real problem I was facing.

---

## ✨ What It Does

FocusFlow is a Pomodoro-style productivity app. It lets you:

- Start 25-minute focus sessions with built-in breaks
- Add and manage your daily tasks
- Read motivational quotes (fetched from an API)
- Get daily tips to stay productive
- Enjoy a calm, focus-friendly design with optional dark mode

The app uses color combinations and a minimal layout to promote calm and reduce distractions while you work.

---

## 🛠️ How I Built It

This project was built using:

- **React** – to build reusable, component-based UI
- **JavaScript** – for timer logic, state updates, and interactions
- **CSS** – for styling, gradients, and layout
- **React Hooks** – like `useState` and `useEffect` to handle logic and side effects
- **LocalStorage** – to save your tasks so they don’t disappear on refresh
- **ZenQuotes API** – for the daily motivational quote
- **VITechLab** – used for hosting the project
- **Git & GitHub** – for version control and backups

---

## 🧩 Challenges I Faced

There were quite a few! Passing props between components was tricky at first, and I had to learn how to manage state across multiple parts of the app. I also ran into issues with task IDs — using array indexes caused some bugs when updating or deleting tasks. Eventually, I solved it by generating unique IDs based on the current date and time.

Design was another challenge — keeping things simple but useful took a few tries, but I’m really happy with how it turned out.

---

## ✅ What I’m Proud Of

This was my first time using an API in a real project, and it worked! I also learned the value of organizing files and components properly — once the app got bigger, good structure made everything easier to manage. Overall, I learned a ton about React and actually enjoyed debugging for once.

---

## 📚 What I Learned

- React state and props flow
- Hooks like `useEffect` for timers and side effects
- How to persist data using localStorage
- Structuring real-world React projects with many components
- The basics of fetching data from an external API

---

## 🚀 What’s Next

There’s a lot more I want to do with FocusFlow, including:

- A history view for completed tasks
- A streak system to track daily focus habits
- Task syncing across devices
- Group features for shared task boards (e.g. roommates, study groups)

---

## 🖼️ Screenshot

![FocusFlow Screenshot](link-to-screenshot.png)

---

## 💻 Getting Started

If you’d like to try it out locally:

```bash
git clone https://github.com/your-username/focusflow.git
cd focusflow
npm install
npm run dev
