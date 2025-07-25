import style from './dailytip.module.css';

export default function DailyTip() {
    const productivityTips = [
  "Take a 5-minute break every hour.",
  "Write down your top 3 priorities each day.",
  "Use the Pomodoro technique for focused work.",
  "Eliminate distractions by turning off notifications.",
  "Set specific goals for each work session.",
  "Break large tasks into smaller, manageable chunks.",
  "Start your day with the most challenging task.",
  "Use a dedicated workspace to boost focus.",
  "Avoid multitasking; focus on one thing at a time.",
  "Plan your day the night before.",
  "Use time-blocking to schedule your work.",
  "Keep a clean and organized desk.",
  "Limit social media usage during work hours.",
  "Set deadlines for every task, even small ones.",
  "Use tools like timers or apps to track productivity.",
  "Review your accomplishments at the end of each day.",
  "Prioritize tasks using the Eisenhower Matrix.",
  "Practice mindfulness or meditation to improve focus.",
  "Stay hydrated to maintain energy levels.",
  "Get enough sleep to boost cognitive function.",
  "Use keyboard shortcuts to save time.",
  "Listen to instrumental music to increase concentration.",
  "Turn off non-essential notifications.",
  "Keep a notebook handy for quick idea capture.",
  "Automate repetitive tasks where possible.",
  "Delegate tasks when appropriate.",
  "Set boundaries to protect your focus time.",
  "Use ‘Do Not Disturb’ mode on your devices.",
  "Reward yourself after completing difficult tasks.",
  "Reflect weekly on what’s working and what’s not.",
  "Stay positive and practice self-compassion.",
  "Visualize your goals to stay motivated.",
  "Use checklists to track progress.",
  "Take regular short walks to refresh your mind.",
  "Limit decision fatigue by simplifying choices.",
  "Batch similar tasks together for efficiency.",
  "Use two-minute rule: if a task takes less than 2 minutes, do it immediately.",
  "Practice saying no to non-essential requests.",
  "Use apps that block distracting websites during work.",
  "Keep your phone on silent or in another room.",
  "Use mind maps to organize ideas.",
  "Set a consistent daily routine.",
  "Keep learning new productivity techniques.",
  "Use affirmations to boost confidence.",
  "Stay flexible but committed to your goals.",
  "Track your time to identify productivity leaks.",
  "Review and adjust your goals regularly.",
  "Celebrate small wins to stay motivated."
];
const randomTip = productivityTips[Math.floor(Math.random() * productivityTips.length)];
return(
    <div className={style.dailyTip}>
      <h3>Daily Tip :</h3>
      <p>{randomTip}</p>
    </div>
)
}