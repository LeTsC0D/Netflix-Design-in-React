import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
  } from "@mui/icons-material";
  import { useRef, useState } from "react";
  import ListItem from "../listItem/ListItem";
  import "./list.scss";
  
  export default function List() {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
  
    const listRef = useRef();
  
    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };
    return (
      <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="container" ref={listRef}>
            <ListItem index={0} src1={"https://www.youtube.com/watch?v=mcL6ZErM49Q"} src2={"https://i.ytimg.com/an_webp/52deq20h6Q4/mqdefault_6s.webp?du=3000&sqp=CP7eoJgG&rs=AOn4CLDKcsqzVghHde4SYO149-WwnMm6rQ"}/>
            <ListItem index={1} src1={"https://www.youtube.com/watch?v=a5tN-vI7c0w"} src2={"https://i.ytimg.com/an_webp/a5tN-vI7c0w/mqdefault_6s.webp?du=3000&sqp=CMTXoJgG&rs=AOn4CLAqs6FrMq364TFsAE7Qhd3e2sqTYA"}/>
            <ListItem index={2} src1={"https://www.youtube.com/watch?v=8JuolAwJmC0"} src2={"https://i.ytimg.com/vi/8JuolAwJmC0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsWYUsChSjanzL1MpFTjQVOFDsFA"}/>
            <ListItem index={3} src1={"https://www.youtube.com/watch?v=Vicu9E8q3O0"} src2={"https://i.ytimg.com/an_webp/Vicu9E8q3O0/mqdefault_6s.webp?du=3000&sqp=CN3RoJgG&rs=AOn4CLDfFLho-iLXquyUP3rxKhJWd5SHrw"}/>
            <ListItem index={4} src1={"https://www.youtube.com/watch?v=jb_etswNga8"} src2={"https://i.ytimg.com/an_webp/jb_etswNga8/mqdefault_6s.webp?du=3000&sqp=CNLwoJgG&rs=AOn4CLBTisvzH0YBYot_7rDG7eL4ZOFyJg"}/>
            <ListItem index={5} src1={"https://www.youtube.com/watch?v=6CzGgybEC10"} src2={"https://i.ytimg.com/an_webp/6CzGgybEC10/mqdefault_6s.webp?du=3000&sqp=CIvMoJgG&rs=AOn4CLB_FS-gBgLTZObM8vzpPmHleZ5uZw"}/>
            <ListItem index={0} src1={"https://www.youtube.com/watch?v=mcL6ZErM49Q"} src2={"https://i.ytimg.com/an_webp/52deq20h6Q4/mqdefault_6s.webp?du=3000&sqp=CP7eoJgG&rs=AOn4CLDKcsqzVghHde4SYO149-WwnMm6rQ"}/>
            <ListItem index={1} src1={"https://www.youtube.com/watch?v=a5tN-vI7c0w"} src2={"https://i.ytimg.com/an_webp/a5tN-vI7c0w/mqdefault_6s.webp?du=3000&sqp=CMTXoJgG&rs=AOn4CLAqs6FrMq364TFsAE7Qhd3e2sqTYA"}/>
            <ListItem index={2} src1={"https://www.youtube.com/watch?v=8JuolAwJmC0"} src2={"https://i.ytimg.com/vi/8JuolAwJmC0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsWYUsChSjanzL1MpFTjQVOFDsFA"}/>
            <ListItem index={3} src1={"https://www.youtube.com/watch?v=Vicu9E8q3O0"} src2={"https://i.ytimg.com/an_webp/Vicu9E8q3O0/mqdefault_6s.webp?du=3000&sqp=CN3RoJgG&rs=AOn4CLDfFLho-iLXquyUP3rxKhJWd5SHrw"}/>
          </div>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    );
  }
  