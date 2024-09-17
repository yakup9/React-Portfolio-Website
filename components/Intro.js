import {useEffect, useState} from "react";

export default function Intro() {
  const [classes,setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []);

  return (
    <section id="intro" className={classes}>
      <div>
        <p>I&apos;m <span>Yakup Yazmuhammedov</span><br />Fullstack Developer</p>
        <a href="">Contact me</a>
      </div>
      <div>
        <img src="/img/me.png" alt=""/>
      </div>
    </section>
  );
}