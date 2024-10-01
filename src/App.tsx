import { useState } from "react";
import Boxs from "./components/Boxs";
import Buttons from "./components/Buttons";
import DateAndTime from "./components/DateAndTime";

const boxs = [
  {
    id: 1,
    title: "Social",
  },
  {
    id: 2,
    title: "AI",
  },
  {
    id: 3,
    title: "Front-End",
  },
  {
    id: 4,
    title: "Movie",
  },
];
const links = [
  [
    {
      id: 1,
      title: "Instagram",
      link: "https://www.instagram.com/baxtovarshoh/",
    },
    {
      id: 2,
      title: "Google",
      link: "https://www.google.ru/?hl=ru",
    },
    {
      id: 3,
      title: "Telegram",
      link: "https://web.telegram.org/a/",
    },
    {
      id: 4,
      title: "YouTube",
      link: "https://www.youtube.com/?app=desktop&hl=ru",
    },
    {
      id: 5,
      title: "ВКонтакте",
      link: "https://vk.com/",
    },
  ],
  [
    {
      id: 6,
      title: "ChatGPT",
      link: "https://chatgpt.com/",
    },
    {
      id: 7,
      title: "Capilot",
      link: "https://copilot.microsoft.com/?form=MA13R8&OCID=MA13R8",
    },
    {
      id: 8,
      title: "CloudeAI",
      link: "https://claude.ai/onboarding?returnTo=%2F%3F",
    },
    {
      id: 9,
      title: "WriteSonic",
      link: "https://app.writesonic.com/ru/library/d1e2dc3b-065b-4f21-8cbf-b12573a0c98e/all",
    },
    {
      id: 10,
      title: "YouChat",
      link: "https://you.com/",
    },
    {
      id: 11,
      title: "CopyAI",
      link: "https://app.copy.ai/teamspace/27319311/dashboard",
    },
  ],
  [
    {
      id: 12,
      title: "TailwindCss",
      link: "https://tailwindcss.com/docs/guides/vite",
    },
    {
      id: 12,
      title: "React",
      link: "https://react.dev/learn",
    },
    {
      id: 12,
      title: "BoxIcon",
      link: "https://boxicons.com/",
    },
    {
      id: 12,
      title: "GitHab",
      link: "https://github.com/",
    },
    {
      id: 12,
      title: "Bootstrap Icon",
      link: "https://icons.getbootstrap.com/",
    },
    {
      id: 12,
      title: "Figma",
      link: "https://www.figma.com/files/team/1345823970195625203/recents-and-sharing/recently-viewed?fuid=1345823968380987231",
    },
    {
      id: 13,
      title: "UnSplash",
      link: "https://unsplash.com/wallpapers",
    },
  ],
  [
    {
      id: 14,
      title: "KinoGo",
      link: "https://kinogo.inc/",
    },
    {
      id: 15,
      title: "KinoPoisk",
      link: "https://www.kinopoisk.ru/?utm_referrer=www.google.com",
    },
  ],
];

const App = () => {
  const [state, setState] = useState(1);
  return (
    <main className="h-screen dark:bg-slate-800 p-12">
      <div className="h-full rounded-xl glass px-6 space-y-8">
        <header className="bg-opacity-75 rounded-lg pt-8 flex justify-between gap-3">
          {boxs.map((box) => (
            <Buttons
              title={box.title}
              handleClick={setState}
              key={box.id}
              id={box.id}
            />
          ))}
        </header>
        <article className="w-full">
          <DateAndTime />
        </article>
        <article className="grid grid-cols-8 gap-4 mt-4">
          {links[state - 1].map((link) => (
            <Boxs key={link.id} link={link.link} title={link.title} />
          ))}
        </article>
      </div>
    </main>
  );
};

export default App;
