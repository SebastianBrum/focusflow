// InspirationalQuote.jsx
import { useEffect, useState } from "react";
import style from './inpirationalQuote.module.css';

export default function Quote({ main }) {
  // State to store the fetched quote
  const [inspirationalQuote, setInspirationalQuote] = useState({
    text: "",
    author: "",
  });

  // Fetch quote from API on component mount
  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await fetch(
          "https://quoteslate.vercel.app/api/quotes/random"
        );
        const data = await response.json();
        setInspirationalQuote({
          text: data.quote,
          author: data.author || "Unknown",
        });
      } catch (error) {
        // Fallback quote if API fails
        console.error("Error fetching quote:", error);
        setInspirationalQuote({
          text: "Keep pushing forward!",
          author: "Unknown",
        });
      }
    }

    fetchQuote();
  }, []);
  
  // Render different layouts based on main prop
  if(main){
  return(
    <div className={style.inspirationalQuote}>
      <h2>
        Inspirational Quote
      </h2>
        <strong><p>"{inspirationalQuote.text}"</p></strong>
        <p>- {inspirationalQuote.author}</p>
    </div>
  )}else{
    // Simplified layout for task details
    return(
      <>
      <strong><p>"{inspirationalQuote.text}"</p></strong>
      <p>- {inspirationalQuote.author}</p>
      </>
    )
  }
}