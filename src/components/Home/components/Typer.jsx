import React, { useEffect, useState, useRef, useCallback } from 'react';
import './Typer.css';

const Typer = (props) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const refText = useRef(text);
  const refIsDeleting = useRef(isDeleting);
  const refLoopNum = useRef(loopNum);
  const refTypingSpeed = useRef(typingSpeed);

  refText.current = text;
  refIsDeleting.current = isDeleting;
  refLoopNum.current = loopNum;
  refTypingSpeed.current = typingSpeed;

  const handleType = useCallback(() => {
    const { dataText } = props;
    const i = refLoopNum.current % dataText.length;
    const fullText = dataText[i];

    setText(
      refIsDeleting.current
        ? fullText.substring(0, refText.current.length - 1)
        : fullText.substring(0, refText.current.length + 1)
    );

    setTypingSpeed(refIsDeleting.current ? 30 : 150);

    if (!refIsDeleting.current && refText.current === fullText) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (refIsDeleting.current && refText.current === '') {
      setIsDeleting(false);
      setLoopNum(refLoopNum.current + 1);
    }
    setTimeout(handleType, refTypingSpeed.current);
  }, [props]);

  useEffect(() => {
    handleType();
  }, [handleType]);

  return (
    <h1>
      {props.heading}&nbsp;
      <span className={props.className}>{text}</span>
      <span className="cursor" style={props.style}>
        |
      </span>
    </h1>
  );
};

export default Typer;
