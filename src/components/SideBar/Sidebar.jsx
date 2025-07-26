import DailyTip from "./DailyTip/DailyTip.jsx";
import Quote from "./InspirationalQuote/InspirationalQuote.jsx";
import style from './sidebar.module.css';
import React from 'react';

// Memoized components to prevent unnecessary re-renders when parent component updates
// This optimization ensures Quote and DailyTip only re-render when their props change
const MemoQuote = React.memo(Quote);
const MemoDailyTip = React.memo(DailyTip);

// Sidebar component that displays inspirational content alongside the main task interface
export default function Sidebar() {
 return (
   <div className={style.sidebar}>
       {/* Inspirational quote component with main=true for full layout */}
       <MemoQuote main={true}/>
       {/* Daily productivity tip component */}
       <MemoDailyTip />
   </div>
 );
}