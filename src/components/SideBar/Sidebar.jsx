import DailyTip from "./DailyTip/DailyTip.jsx";
import Quote from "./InspirationalQuote/InspirationalQuote.jsx";
import style from './sidebar.module.css';
import React from 'react';

const MemoQuote = React.memo(Quote);
const MemoDailyTip = React.memo(DailyTip);

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
        <MemoQuote />
        <MemoDailyTip />
    </div>
  );
}