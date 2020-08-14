import PropTypes from 'prop-types'
import React, { useEffect, useState, useRef } from 'react';

function TypeWriter(props) {
  const { input = [""], speed = 100, cursor = false, cursorChar = "|" } = props;
  const [typed, setOutput] = useState("");
  const cursorRef = useRef();

  function printStr(input, index, output) {
    setTimeout(function () {
      if (!input[index]) {
        if (cursor) cursorRef.current.className = "cursor blink";
        return;
      }

      // if we are working with an object
      if (typeof input[index] === 'object') {
        // work on delete or pause
        if (input[index]['delete']) {
          if (input[index]['delete'] >= 1) {
            const newOutput = output.substring(0, output.length - 1);
            setOutput(newOutput);
            input[index]['delete'] = input[index]['delete'] - 1;
            printStr(input, index, newOutput, setOutput);
          } else {
            printStr(input, index + 1, output, setOutput)
          }
        } else {
          if (input[index]['pause'] >= 1) {
            input[index]['pause'] = input[index]['pause'] - 1;
            printStr(input, index, output, setOutput);
          } else {
            printStr(input, index + 1, output, setOutput);
          }
        }
        return;
      }

      // if we are working on a string
      if (typeof input[index] === 'string') {
        // get the new output and set it
        const newOutput = output + input[index].charAt(0);
        setOutput(newOutput);

        // if the string is done
        if (input[index].length === 1) {
          printStr(input, index + 1, newOutput, setOutput);
        } else {
          input[index] = input[index].substring(1, input[index].length);
          printStr(input, index, newOutput, setOutput);
        }
      }
    }, speed);
  }

  useEffect(() => {
    printStr(input, 0, typed);
  }, [input])

  return (
    <div className="type-writer">
      {typed}
      {cursor ? <span className="cursor" ref={cursorRef}>{cursorChar}</span> : null}
    </div>
  )
}

TypeWriter.propTypes = {
  input: PropTypes.array,
  speed: PropTypes.number,
  cursor: PropTypes.bool,
  cursorChar: PropTypes.string
}

export default TypeWriter;