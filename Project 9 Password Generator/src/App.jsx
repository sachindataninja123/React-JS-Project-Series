import React, { use, useEffect, useRef, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [savePassword, setSavePassword] = useState([]);
  const passwordRef = useRef();

  // console.log(isCharAllowed)
  // console.log(isNumAllowed)

  const generatePassword = () => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumAllowed) str += "0123456789";
    if (isCharAllowed) str += "~!@#$%^&*";

    for (let i = 0; i < length; i++) {
      let randomIdx = Math.floor(Math.random() * str.length);
      let charPicked = str.charAt(randomIdx);
      pass += charPicked;
    }
    // console.log(pass);
    setPassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, isCharAllowed, isNumAllowed]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
    alert("Password Copied!");
  };

  return (
    <div className="flex items-center justify-center flex-col mt-12.5">
      <h1 className="text-5xl font-semibold">Password Generator</h1>

      <div className="w-160 border rounded-[5px] px-7 py-8 mt-7 flex items-start justify-center flex-col gap-5 select-none">
        <input
          type="text"
          placeholder="Password"
          ref={passwordRef}
          className="border bg-white text-black w-full px-3 py-2 text-xl rounded-[7px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="range"
          className="w-full"
          min={0}
          max={30}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <p>Length of Password = {length}</p>

        <label htmlFor="NumAllowed" className="text-[18px]">
          <input
            type="checkbox"
            id="NumAllowed"
            checked={isNumAllowed}
            onChange={(e) => setIsNumAllowed(e.target.checked)}
          />
          Number Allowed
        </label>

        <label htmlFor="CharAllowed" className="text-[18px]">
          <input
            type="checkbox"
            id="CharAllowed"
            checked={isCharAllowed}
            onChange={(e) => setIsCharAllowed(e.target.checked)}
          />
          Character Allowed
        </label>

        <button
          className="text-center bg-blue-500 w-full py-2 rounded-[7px] font-semibold cursor-pointer active:scale-95"
          onClick={copyPassword}
        >
          Copy Password
        </button>

        <button
          className="text-center bg-blue-500 w-full py-2 rounded-[7px] font-semibold cursor-pointer active:scale-95"
          onClick={() => {
            setLength(8);
            setIsNumAllowed(false);
            setIsCharAllowed(false);
          }}
        >
          Reset Password
        </button>

        <button
          className="text-center bg-blue-500 w-full py-2 rounded-[7px] font-semibold cursor-pointer active:scale-95"
          onClick={() => {
            setSavePassword((prevSavePass) => [...prevSavePass, password]);
          }}
        >
          Save Password
        </button>
        {savePassword.map((item, idx) => {
          return (
            <p className="text-xl" key={idx}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default App;
